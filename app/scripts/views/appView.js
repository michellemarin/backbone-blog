/*global BackboneBlog, Backbone, JST*/

BackboneBlog.Views = BackboneBlog.Views || {};

(function () {
    'use strict';

    BackboneBlog.Views.appView = Backbone.View.extend({

        template: JST['app/scripts/templates/appView.ejs'],

        el: $('#blog-app'),


        events: {
          "click #new" : "onSubmit"
        },

        onSubmit: function (e) {
            e.preventDefault();
            var blogTitle = $('#title');
            var blogPost = $('#post');
            var blogOutput = new BackboneBlog.Models.Blog({
                title: blogTitle.val(),
                post: blogPost.val()
            });
            BackboneBlog.Posts.add(blogOutput);
            blogOutput.save();
            blogTitle.val(' ');
            blogPost.val(' ');
        },

        initialize: function () {
            this.listenTo(BackboneBlog.Posts, 'add', this.addOne);
            this.listenTo(BackboneBlog.Posts, 'reset', this.addAll);
            this.render();
            BackboneBlog.Posts.fetch();
        },

        addOne: function (blogOutput) {
            var postView = new BackboneBlog.Views.Post(blogOutput);
            $('.post-content').append(postView.render().el);
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
