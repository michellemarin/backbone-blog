/*global BackboneBlog, Backbone*/

BackboneBlog.Models = BackboneBlog.Models || {};

(function () {
    'use strict';

    BackboneBlog.Models.Blog = Backbone.Model.extend({

        url: 'https://tiny-pizza-server.herokuapp.com/collections/my-backbone-blog',

        initialize: function() {
        },

        defaults: {
          id: new Date().getTime(),
          title: 'no title',
          post: 'nothing to say here...',
          sentAt: new Date()
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
