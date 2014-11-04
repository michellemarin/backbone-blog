/*global BackboneBlog, Backbone, JST*/

BackboneBlog.Views = BackboneBlog.Views || {};

(function () {
    'use strict';

    BackboneBlog.Views.Post = Backbone.View.extend({

        template: JST['app/scripts/templates/post.ejs'],

        el: $('#posts'),

        events: {},

        initialize: function (model) {
            this.model = model;
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            console.log('render called in postView');
            return this;
        }

    });

})();
