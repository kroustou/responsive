/*global require*/
require.config({
    paths: {
        // jquery always need a path config if it's not on the root directory
        'jquery': 'lib/jquery',
        'fixed': 'lib/fixed'
    }
});

require(['fixed'], function() {
    'use strict';

});