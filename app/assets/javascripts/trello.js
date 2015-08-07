window.Trello = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Trello.Routers.Router({$el: $("#content")});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Trello.initialize();
});