<?php
/*
Plugin Name: Related Posts tutorial block
*/
add_action('init', 'my_register_related_block');
function my_register_related_block() {
    // register our JavaScript
    wp_register_script(
        'related-block',
        plugins_url('/build/index.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-editor')
    );
    // register our front-end styles
    wp_register_style(
        'related-block-style',
        plugins_url('/build/style.css', __FILE__),
        array('wp-block-library')
    );
    // register our editor styles
    wp_register_style(
        'related-block-edit-style',
        plugins_url('/build/editor.css', __FILE__),
        array('wp-edit-blocks')
    );
    // register our block
    register_block_type('my/related-posts', array(
        'editor_script' => 'related-block',
        'editor_style' => 'related-block-edit-style',
        'style' => 'related-block-style'
    ));
}
?>