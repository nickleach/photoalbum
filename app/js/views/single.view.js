;(function (){

  'use strict';

app.Views.SingleView = Backbone.View.extend({

  className : 'single',

  template: hbs.photossingle,

 initialize: function (options) {

      var args = options || {};

      this.singleId = args.singleId;
      this.collection = args.collection;

      this.render();
      $('.container').html(this.el);
    },

    render: function () {

      var singlePic = this.collection.get(this.singleId);
      this.$el.html(this.template(singlePic.toJSON()));

    }

});


}());
