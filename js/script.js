/*global require*/
require.config({
    paths: {
        // jquery always need a path config if it's not on the root directory
        'jquery': 'lib/jquery'
    }
});

require(['jquery'], function($) {
    'use strict';
    var body = $('body');
    $(document).on('scroll', function(){
        var scrollTop = $(document).scrollTop();
        if (scrollTop > '160'){
            body.addClass('fixed');
        } else {
            body.removeClass('fixed');
        }
    });
});