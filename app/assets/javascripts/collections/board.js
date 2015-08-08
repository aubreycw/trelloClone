Trello.Collections.Boards = Backbone.Collection.extend({
  url: "/api/boards",

  model: Trello.Models.Board,

  initialize: function(){

  },

  getOrFetch: function(id){
    var model = this.get(id);
    if (!model){
      model = new Trello.Models.Board({id: id});
      var that = this;
      model.fetch({
        success: function(){
          that.add(model);
        },
        error: function(){
        }
      });
    }
    return model;
  }
})