/*global BackboneBlog, Backbone*/

BackboneBlog.Collections = BackboneBlog.Collections || {};

(function () {
    'use strict';

    BackboneBlog.Collections.Posts = Backbone.Collection.extend({

        model: BackboneBlog.Models.Blog,

        url: 'https://tiny-pizza-server.herokuapp.com/collections/michelle-backbone-blog'

    });

})();
