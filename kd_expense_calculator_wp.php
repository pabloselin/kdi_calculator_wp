<?php
/*
Plugin Name: Kit Digital: Expense Calculator
Plugin URI: http://www.pluriversidadnomade.net
Description: Plugin que implementa un calculador de gastos energéticos de los recursos del sitio
Version: 0.2.2
Author: Pablo Selín Carrasco Armijo
Author URI: http://pablosel.in
License: GPL2
*/

define('KD_PLUGIN_VERSION', '0.2.1');

function kd_enqueue_scripts() {
    //Main script
    wp_enqueue_script( 'kd_expense_calculator', plugins_url('build/static/js/kd_expense_calculator.js', __FILE__ ), array(), KD_PLUGIN_VERSION, true );
    wp_enqueue_script( 'kd_expense_calculator_wp', plugins_url('dist/kd_expense_calculator_wp_v022.js', __FILE__ ), array(), KD_PLUGIN_VERSION, true );
    wp_enqueue_style( 'kd_expense_calculator', plugins_url('dist/kd_expense_calculator_wp_v022.css', __FILE__ ), array(), KD_PLUGIN_VERSION, 'all' );
}

add_filter( 'wp_enqueue_scripts', 'kd_enqueue_scripts' );

function kd_insert_info() {
    echo '<div id="kd_expense_calculator_wp"><div id="kd_expense_calculator"><!-- javascript rendered content --></div></div>';
}

add_action( 'wp_footer', 'kd_insert_info' );