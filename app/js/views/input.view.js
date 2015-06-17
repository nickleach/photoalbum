;(function (){

  'use strict';

  app.Views.Add = Backbone.View.extend({

    className: 'formfield',

    events: {
      'submit #photoForm': 'addIt'
    },

    template: hbs.addnew,

    initialize: function(options){

      var args = options || {};

      this.collection = args.collection;

      this.render();
      $('.container').html(this.el);

    },

    render: function(){

      this.$el.html(this.template);

    },

    addIt: function(e){
      e.preventDefault();

      var self = this,
          form = $(event.target),
          pUrl = form.find('#photoURL').val(),
          pTitle = form.find('#photoTitle').val(),
          pDescription = form.find('#photoDesc').val(),
          pDate = form.find('#photoDate').val();

      var p = new app.Models.Photo({
        url : pUrl,
        title : pTitle,
        description : pDescription,
        date : pDate
      });

      this.collection.add(p).save().success( function(){
        self.render();

      });

    }

  });



}());
