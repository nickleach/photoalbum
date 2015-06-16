;(function (){

  'use strict';

  app.Collections.Photos = Backbone.Collection.extend({

    model: app.Models.Photo,

    url: 'http://tiy-515.herokuapp.com/collections/nick-photo-album'


  });



}());
