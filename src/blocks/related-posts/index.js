const { registerBlockType } = wp.blocks;
import Block from './block';
 
registerBlockType('my/related-posts', {
    title: 'Related Posts',     
    category: 'widgets',
    icon: 'image-filter',
    attributes: {
        'editMode': {
            type: 'boolean',
            default: true
        },
        'postIds': {
            type: 'array',
            default: []
        },
        'postType': {
            type: 'string',
            default: 'posts'
        },
        'updated': {
            type: 'string',
            default: ''
        }
    },
    edit( props ) {
        return <Block { ...props } />;
    },
    save() {
        // Rendering in PHP
        return null;
    },
} );