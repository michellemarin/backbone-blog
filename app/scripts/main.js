/*global BackboneBlog, $*/


window.BackboneBlog = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    Posts: '',
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
        this.Posts = new BackboneBlog.Collections.Posts();
        var app    = new BackboneBlog.Views.appView();
    }
};

$(document).ready(function () {
    'use strict';
    BackboneBlog.init();
});
