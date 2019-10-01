const { Button, MenuGroup, MenuItem, SelectControl, TextControl } = wp.components;
const { Component, Fragment } = wp.element;
  
export class SearchPostsControl extends Component {
    constructor(props) {
        super(props);
    }
  
    changePostType(newType) {
        // Clear postIds, update postType Attribute
        let { setAttributes } = this.props;
        setAttributes({ postType: newType });
    }
  
    render() {
        let { attributes: { postType } } = this.props;
        return(
            <div className='search-posts-control'>
                <div className='posts-selected'>
                    <h2>Currently selected:</h2>
                    <SelectControl
                        label='Post Type'
                        value={ postType }
                        options={ [
                            { label: 'Post', value: 'posts' },
                            { label: 'Page', value: 'pages' }
                        ] }
                        onChange={ (val) => { this.changePostType(val) } }
                    />
                </div>
                <div className='posts-search'>
                    <h2>Add to selections:</h2>
                </div>
            </div>
        );
    }
}