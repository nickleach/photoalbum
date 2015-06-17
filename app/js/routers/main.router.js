;(function (){

  'use strict';

app.Routers.MainRouter = Backbone.Router.extend({

  initialize: function (options){

    var args = options || {};

    this.collection = args.collection;

  },
  routes: {
    '' : 'homePage',
    'pic/:id' : 'singlePic',
    'add' : 'addNew'
  },

  homePage: function(){
    new app.Views.Main({
      collection: this.collection
    });
  },

  singlePic: function(id){
    new app.Views.SingleView({
      singleId: id,
      collection: this.collection

    });
  },

  addNew: function(){
    new app.Views.Add({
      collection: this.collection
    });
  }

});

}());
