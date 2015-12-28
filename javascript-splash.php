<?php

/**
*Plugin Name: JS Splash 
*License: GPL2
*Version: 1.0.0
**/



//echo '<script type="text/javascript">var arrayFromPhp = ' . json_encode($js_global_var) . '</script>';

if ( !class_exists( 'ReduxFramework' ) && file_exists( dirname( __FILE__ ) . '/ReduxFramework/ReduxCore/framework.php' ) ) {
    require_once( dirname( __FILE__ ) . '/ReduxFramework/ReduxCore/framework.php' );
}
if ( !isset( $js_global_var ) && file_exists( dirname( __FILE__ ) . '/redux-config.php' ) ) {
    require_once( dirname( __FILE__ ) . '/redux-config.php' );
}

//Enqueue Javascript and CSS File

function splash_styles() {
    wp_enqueue_style( 'styles', plugins_url() . '/javascript-splash/javascript-splash.css');
}

function splash_scripts() {	

	global $js_global_var;

	wp_enqueue_script( 'cookie_js', plugins_url() . '/javascript-splash/cookie.js', array(), false, true );
	wp_enqueue_script( 'splash_scripts', plugins_url() . '/javascript-splash/javascript-splash.js', array(), false, true );

	wp_localize_script( 'splash_scripts', 'reduxDemo', $js_global_var );
}

add_action( 'wp_enqueue_scripts', 'splash_scripts' );

add_action( 'wp_enqueue_scripts', 'splash_styles' );


?>
