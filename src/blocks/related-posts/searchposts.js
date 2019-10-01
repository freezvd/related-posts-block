const { Button, MenuGroup, MenuItem, SelectControl, TextControl } = wp.components;
const { Component, Fragment } = wp.element;
 
export class SearchPostsControl extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className='search-posts-control'>
                <div className='posts-selected'>
                    <h2>Currently selected:</h2>
                </div>
                <div className='posts-search'>
                    <h2>Add to selections:</h2>
                </div>
            </div>
        );
    }
}