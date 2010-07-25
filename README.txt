// $Id$

=== JQuery Freebase ===

Original Author 2008 : Thomas Bonte <www.thomasbonte.net>
Updated to do something in 2010 by : Dan Morrison (dman) <dan@coders.co.nz>

Description
===========

Adds the Freebase Suggest JQuery plugin functionality to your Drupal website.

Adds autocomplete suggestions to CCK textfields based on topic sets 
from the Freebase database.

Requirements
============

jquery.freebase.suggest library files from 
[Freebase Suggest project](http://www.freebase.com/docs/suggest)

Optional modules
----------------

For quick UI improvements:
[Content Creation Kit](http://drupal.org/project/cck)

For developers only
[jQ](http://drupal.org/project/jq)
[jQuery Plugin Handler](http://drupal.org/project/jqp)


Installation
============

1.  Copy the 'jquery_freebase' module directory in to your Drupal 
    sites/all/modules directory as usual

2.  Check the 
    [freebase suggest project page](http://www.freebase.com/docs/suggest)
    for the latest versions of the freebase suggest library files.
    At the time of writing, the version is 1.2.1, so
    Download 
    http://freebaselibs.com/static/suggest/1.2.1/suggest.min.css
    http://freebaselibs.com/static/suggest/1.2.1/suggest.min.js
    to the Drupal 'sites/all/libraries' directory into a new folder called 
    'freebase_suggest'.
    (Make a 'libraries' folder if it doesn't exist)

3.  Save them so they are available as 
    sites/all/libraries/freebase_suggest/suggest.min.js
    sites/all/libraries/freebase_suggest/suggest.min.css
    
    Placing the files in this folder will make them compatible with 
    [Libraries API](http://drupal.org/project/libraries) and the Drupal7
    [hook_library](http://api.drupal.org/api/function/hook_library/7)
   
4.  If the freebase libs require a higher jquery version than your Drupal
    is currently using, you may need to install
    a version of 
    [jQuery Update](http://drupal.org/project/jquery_update)
    Current version of suggest (1.2.1) uses jquery (1.3.2) so an install
    of jQuery Update 6.x-2.x was needed.

6. Enable jquery_freebase under admin/build/modules

Usage
=====

To see this feature in action, visit the content type - manage fields.
When adding a new [text] field (or modifying existing ones) there will be
a new widget option "Text Field with autocomplete suggestions".
Select that for the field.

When adding such a text field to a content type, you can then add parameters
to be used by the freebase suggest API. This is used to limit the TYPE
of suggestion that is returned. For details, see 
[the freebase API documentation](http://www.freebase.com/docs/suggest)

Autocomplete Arguments of
{type:'/people/person'}
would return only suggestions of type 'person'. Include the {} braces.

Once configured, editing that field on the content edit form should provide
Freebase suggestions, prompts and topic summaries when the text field is 
focused.

Optional
========

As well as the CCK field support, 
This module exposes the 'freebase suggest' library files as plugins 
through jq.module (deprecated) and jqp.module 
[jQ](http://drupal.org/project/jq)
[jQuery Plugin Handler](http://drupal.org/project/jqp)

Use of these libraries requires some code of your own to make use of it.
Where you place the code will depend on the use-case, but in your own
form-building (FAPI) or form_alter() function of your own module would
be a good start.

JQ Usage
--------

jq.module is a jquery library handler. 
This module makes its libraries accessible through its handler.
Optionally download that module and see its docs.

Example code: (suggest version 1.2.1)
<pre>
jq_add('freebase_suggest');
drupal_add_js(
  "$(document).ready(function() {
     $('#edit-artist').suggest( {type:'/music/artist'} );
     $('#edit-track').suggest( {type:'/music/track'} );
   });
  ",
  'inline'
);
</pre>

JQP Usage
---------

jq.module is another, more modern jquery library handler
This module makes its libraries accessible through its handler.
Optionally download that module and see its docs.

Example code: (suggest version 1.2.1)
<pre>
drupal_add_library('freebase_suggest');
drupal_add_js(
  "$(document).ready(function() {
     $('#edit-artist').suggest( {type:'/music/artist'} );
     $('#edit-track').suggest( {type:'/music/track'} );
   });
  ",
  'inline'
);
</pre>

Support
=======

Official Drupal project page
http://drupal.org/project/jquery_freebase

File a bug or support request at 
http://drupal.org/project/issues/jquery_freebase