Drupal.behaviors.jquery_freebase = {
  attach: function (context, settings) {
    var $ = jQuery;
    var jf = Drupal.settings.jquery_freebase;

    if (jf && jf.elements) {
      for (var ii=0; ii<jf.elements.length; ii++) {
        var elem = jf.elements[ii];
        $(elem.id, context).suggest(elem.arguments);
      }
    }
  }
};
