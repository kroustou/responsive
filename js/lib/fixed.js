/*global define */

define(
    [ 'jquery' ],
    function($) {
        'use strict';

        var body = $('body');

         function fixed() {
            var scrollTop = $(document).scrollTop();
            if (scrollTop > '200'){
                body.addClass('fixed');
            } else {
                body.removeClass('fixed');
            }
        }

        fixed();

        $(document).on('scroll', function(){
            fixed();
        });

        $(window).resize(function() {
            fixed();
        });
    }
);