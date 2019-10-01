const { registerBlockType } = wp.blocks;

registerBlockType('my/related-posts', {
    title: 'Related Posts',
    icon: 'image-filter',
    category: 'common',
    edit: props => {
        return <span>Editor</span>;
    },
    save: props => {
        return <span>Front End</span>;
    }
} );