;(function (){

  'use strict';
app.Routers.MainRouter = Backbone.Router.extend({

  initialize: function (options){

    var args = options || {};

    this.collection = args.collection;

  },
  routes: {
    '' : 'homePage',
    'pic/:id' : 'singlePic'
  },

  homePage: function(){
    new app.Views.Main({
      collection: this.collection
    });
  },

  singlePic: function(){
    new app.Views.SingleView({
      singleId: id,
      collection: this.collection

    });
  }

});

}());
