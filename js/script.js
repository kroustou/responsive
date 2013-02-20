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

     function fixed() {
        var scrollTop = $(document).scrollTop();
        if (scrollTop > '600'){
            body.addClass('fixed');
        } else {
            body.removeClass('fixed');
        }
    }

    fixed();

    $(document).on('scroll', function(){
        fixed();
    });
});