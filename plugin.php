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
        'style' => 'related-block-style',
        'render_callback' => 'get_related_posts',
        'attributes' => array(
            'editMode' => array(
                'type' => 'boolean',
                'default' => true
            ),
            'postIds' => array(
                'type' => 'array',
                'default' => []
            ),
            'postType' => array(
                'type' => 'string',
                'default' => 'posts'
            ),
            'updated' => array(
                'type' => 'string',
                'default' => ''
            )
        )
    ));
}
 
function get_related_posts($attributes) {
    $output = '<div class="related-block"><h2>You might also like...</h2>';
    // Posts
    if($attributes[postType] == 'posts') {
        $output .= '<div class="related-posts">';
        foreach($attributes[postIds] as $postId) {
            $postObject = get_post($postId);
            $output .= '<div class="related-post"><a href="' . get_the_permalink($postObject) . '">';
            if(has_post_thumbnail($postObject)) {
                $thumbId = get_post_thumbnail_id($postObject);
                $altText = get_post_meta($thumbId, '_wp_attachment_image_alt', true);
                $output .= '<img src="' . get_the_post_thumbnail_url($postObject, array(200,200)) . '" alt="' . $altText . '" />';
            } else {
                $output .= '<img src="https://via.placeholder.com/200" alt="No image found" />';
            }
            $output .= '<span>' . $postObject->post_title . '</span></a></div>';
        }
        $output .= '</div>';
    // Pages
    } elseif($attributes[postType] == 'pages') {
        $output .= '<ul>';
        foreach($attributes[postIds] as $postId) {
            $postObject = get_post($postId);
            $output .= '<li><a href="' . get_the_permalink($postObject) . '">' . $postObject->post_title . '</a></li>';
        }
        $output .= '</ul>';
    }
    // Always return output
    return $output;
}
?>