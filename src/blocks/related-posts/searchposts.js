const { Button, MenuGroup, MenuItem, SelectControl, TextControl } = wp.components;
const { Component, Fragment } = wp.element;
 
export class SearchPostsControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultObjects: [],
            resultButtons: []
        };
        this.buildResultButtons = this.buildResultButtons.bind(this);
        this.changePostType = this.changePostType.bind(this);
        this.searchFor = this.searchFor.bind(this);
    }
 
    changePostType(newType) {
        // Clear postIds, update postType Attribute
        let { setAttributes } = this.props;
        setAttributes({ postType: newType });
        // Clear state and run a new search
        this.setState({ resultObjects: [], resultButtons: []}, this.searchFor(newType, ''));
    }
 
    searchFor(searchPostType = '', keyword = '') {
        let { attributes: { postType } } = this.props;
        let finalPostType = postType;
        // If a post type was explicitly passed to the function, use that instead
        if(searchPostType != '') {
            finalPostType = searchPostType;
        }
        // Make REST API call to get post objects - excluding current ID, but including the postType and keyword if present
        let currentId = wp.data.select('core/editor').getCurrentPostId();
        let path;
        if(keyword != '') {
            path = '/wp/v2/' + finalPostType + '?search=' + keyword + '&exclude=' + currentId;
 
        } else {
            path = '/wp/v2/' + finalPostType + '?exclude=' + currentId;
        }
        wp.apiFetch( { path: path } ).then( ( posts ) => {
            this.setState({ resultObjects: posts });
        }).then( () => this.buildResultButtons() );
    }
 
    buildResultButtons() {
        let { setAttributes } = this.props;
        let resultButtons = this.state.resultObjects.map(function(item, ind) {
            let isChecked = false;
            // Save the opposite value for onClick
            // Must have default true, because if nothing is selected, it's false, and true is what it should change to
            let toCheck = true;
            if(isChecked == true) {
                toCheck = false;
            }
            return(
                <MenuItem id={ item.id } data-ischecked={ isChecked } onClick={ () => this.updateSelectedIds(parseInt(event.target.id), toCheck) }
                >
                    { item.title.rendered }
                </MenuItem>
            );
        }, this);
        // Save timestamp in milliseconds - this forces the setAttributes call for postIds to work
        let timeNow = Date.now();
        this.setState({ resultButtons: resultButtons }, setAttributes({ updated: timeNow }));
    }
 
    updateSelectedIds(id, val) {
        let { attributes: { postIds } } = this.props;
        let stateSelected = postIds;
        // Update copy of selectedIds
        if(val == true) {
            stateSelected.push(id);
        } else {
            let idIndex = stateSelected.indexOf(id);
            stateSelected.splice(idIndex, 1);
        }
        // Update copy of resultObjects
        let posts = this.state.resultObjects;
        for(var i = 0; i < posts.length; i++) {
            // if this post ID is in attributes, set checked to true
            posts[i].checked = false;
            for(var j = 0; j < stateSelected.length; j++) {
                if(posts[i].id === stateSelected[j]) {
                    posts[i].checked = true;
                    break;
                }
            }
        }
        // Save resultObjects to state, and then rebuild result buttons
        this.setState({ resultObjects: posts }, function() {
            this.buildResultButtons();
        });
    }
 
    componentDidMount() {
        this.getStartingData();
    }
 
    getStartingData() {
        this.searchFor('');
    }
 
    render() {
        let { attributes: { postType } } = this.props;
        let label = 'Search for ' + postType + ' to display';
        return(
            <div className='search-posts-control'>
                <div className='posts-selected'>
                    <h2>Currently selected:</h2>
                    <SelectControl
                        label='Post Type'
                        value={ postType }
                        options={ [
                            { label: 'Post', value: 'posts' },
                            { label: 'Page', value: 'pages' },
                        ] }
                        onChange={ (val) => { this.changePostType(val) } }
                    />
                </div>
                <div className='posts-search'>
                    <h2>Add to selections:</h2>
                    <TextControl
                        label={ label }
                        type='search'
                        onChange={ (val) => this.searchFor('', val) }
                    />
                    <MenuGroup label='Search Results' className='posts-list' >
                        { this.state.resultButtons }
                    </MenuGroup>
                </div>
            </div>
        );
    }
}