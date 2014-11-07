/*global BackboneBlog, Backbone, JST*/

BackboneBlog.Views = BackboneBlog.Views || {};

(function () {
    'use strict';

    BackboneBlog.Views.appView = Backbone.View.extend({

        template: JST['app/scripts/templates/appView.ejs'],

        el: $('#appContainer'),


        events: {
          'submit #newPost' : 'onSubmit'
        },

        onSubmit: function (event) {
            event.preventDefault();
            var title = $('#title');
            var body = $('#body');
            console.log('on submit called');

            var post = new BackboneBlog.Models.Post({
                title: title.val(),
                body: body.val()
            });
            BackboneBlog.Posts.add(post);
            post.save();
            $('input[type=text]').val('');
        },

        initialize: function () {
            this.listenTo(BackboneBlog.Posts, 'add', this.addOne);
            this.render();
            BackboneBlog.Posts.fetch();
        },

        addOne: function (blogOutput) {
            var postView = new BackboneBlog.Views.Post(blogOutput);
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
