Module: JQuery Freebase
Author: Thomas Bonte <www.thomasbonte.net>

Description
===========
Adds the Freebase Suggest JQuery plugin functionality to your Drupal website.

Requirements
============
Drupal jq module: http://drupal.org/project/jq
jquery.freebase.suggest package from http://code.google.com/p/freebase-suggest


Installation
============
1. Copy the 'jquery_freebase' module directory in to your Drupal 
   sites/all/modules directory as usual
2. Download the jquery.freebase.suggest package from http://code.google.com/p/freebase-suggest
   Check your Drupal jquery version for compactibility
3. Extract jquery.freebase.suggest package in the jquery_freebase module directory
4. Change the name of package folder (e.g. jquery.freebase.suggest-0.4) to freebase
5. Download, install and enable the Drupal jq module http://drupal.org/project/jq
6. Enable jq & jquery_freebase under admin/build/modules
7. Check on admin/settings/jq whether you see the freebase plugin

Usage
=====
This module does nothing from itself. It offers other modules who implement forms to add Freebase suggest to it.
Example code:

if (module_exists('jquery_freebase')) {
  jq_add('freebase');
  drupal_add_js(
    "$(document).ready(function() {
       $('#edit-artist').freebaseSuggest( {ac_param:{type:'/music/artist'}} );
       $('#edit-track').freebaseSuggest( {ac_param:{type:'/music/track'}} );
     });
    ",
    'inline'
  );
}



Support
=======
Offcial Drupal project page
http://drupal.org/project/jquery_freebase

File a bug or support request at 
http://drupal.org/project/issues/jquery_freebase