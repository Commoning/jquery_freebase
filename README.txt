
=== JQuery Freebase ===

+   Original Author 2008 : Thomas Bonte <http://www.thomasbonte.net>
+   Updated to do something in 2010 by : Dan Morrison (dman) <dan@coders.co.nz>
+   Ported from Drupal 6 in 2011 : Fahri Reza <http://drupal.org/user/824484>


## Description ##

+   Provides Drupal integration with Freebase Suggest javascript library.
+   Adds autocomplete suggestions to Drupal's Text Field, which based on topic sets
    from the Freebase database.


## Requirements ##

Freebase Suggest javascript library files from 
[Freebase Suggest project](http://www.freebase.com/docs/suggest).


## Installation ##

1.  Install 'jquery_freebase' module directory in to your Drupal 
    sites/all/modules directory as usual.

2.  Check the
    [freebase suggest project page](http://www.freebase.com/docs/suggest)
    for the latest versions of the freebase suggest library files.
    At the time of writing, the version is 1.3.
    
    Download:
    +   <http://freebaselibs.com/static/suggest/1.3/suggest.min.css>
    +   <http://freebaselibs.com/static/suggest/1.3/suggest.min.js>

    Save them so they are available as: 
    +   sites/all/libraries/freebase_suggest/suggest.min.js
    +   sites/all/libraries/freebase_suggest/suggest.min.css

    Placing the files in this folder will make them compatible with 
    [Libraries API](http://drupal.org/project/libraries)
    and the Drupal 7
    [hook_library](http://api.drupal.org/api/function/hook_library/7).

3.  Enable jquery_freebase under admin/build/modules.

4.  If you CHECK YOUR SITE STATUS REPORT at /admin/reports/status
    it will confirm if the libraries are loaded properly.


## Usage ##

To see this feature in action:

1.  Visit the content type - manage fields.
    For example /admin/structure/types/manage/article/fields in Drupal 7.

2.  When adding a new __Text__ Field (or modifying existing ones) there will be:

3.  __Autocomplete text widget (from freebase)__ Widget. This is the widget provided
    by this module.

4.  When adding such a text field to a content type, you can then add parameters
    to be used by the freebase suggest API. This is used to limit the TYPE
    of suggestion that is returned. For details, see 
    [the freebase API documentation](http://www.freebase.com/docs/suggest).

    Autocomplete arguments of {type:'/people/person'} would return only suggestions
    of type 'person'.
    __Include the {} braces__.

5.  Once configured, editing that field on the content edit form should provide
    Freebase suggestions, prompts and topic summaries when the text field is 
    focused.


## Troubleshooting ##

Um.. :S

## Support ##

+   Official Drupal project page
    <http://drupal.org/project/jquery_freebase>

+   File a bug or support request at 
    <http://drupal.org/project/issues/jquery_freebase>
