/*global BackboneBlog, Backbone*/

BackboneBlog.Models = BackboneBlog.Models || {};

(function () {
    'use strict';

    BackboneBlog.Models.Post = Backbone.Model.extend({

        url: 'https://tiny-pizza-server.herokuapp.com/collections/michelle-backbone-blog',

        initialize: function() {
        },

        defaults: {
          title: 'no title',
          body: 'nothing to say here...',
          sentAt: new Date()
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
