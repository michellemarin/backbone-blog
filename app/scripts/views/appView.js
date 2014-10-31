/*global BackboneBlog, Backbone, JST*/

BackboneBlog.Views = BackboneBlog.Views || {};

(function () {
    'use strict';

    BackboneBlog.Views.appView = Backbone.View.extend({

        template: JST['app/scripts/templates/appView.ejs'],

        el: $('#blog-app'),


        events: {
          "submit #new" : "onSubmit"
        },

        onSubmit: function (e) {
            e.preventDefault();
            var title = $('#title');
            var post = $('#post');
            var blog = new BackboneBlog.Models.Post({
                title: title.val(),
                post: post.val()
            });
            BackboneBlog.Posts.add(post);
            post.save();
            title.val(' ');
            post.val(' ');
        },

        initialize: function () {
            this.postList = this.$el.find('#posts');
            this.listenTo(BackboneBlog.Posts, 'add', this.addOne);
            this.listenTo(BackboneBlog.Posts, 'reset', this.addAll);

            this.render();
            BackboneBlog.Posts.fetch();
        },

        addOne: function (reminder) {
            var postView = new BackboneBlog.Views.Post(post);
            $('#posts').append(postView.render().el);
        },

        addAll: function () {
            console.log('addAll Called');
        },

        render: function () {
            this.$el.html(this.template());
            console.log('render called in appView');
        }

    });

})();
