Trello.Views.ListNew = Backbone.View.extend({
  initialize: function(options){
    this.boardId = options.boardId
  },

  template: JST["list_form"],

  events: {
    "submit form" : "createList"
  },

  render: function(){
    var content = this.template({board_id: this.boardId});
    this.$el.html(content);
    return this;
  },

  createBoard: function(event){
    event.preventDefault();
    var listData = $(event.currentTarget).serializeJSON().list;
    var list = new Trello.Models.List(listData)
    var that = this;
    list.save({},{
      success: function(){
        that.collection.add(list);
        that.collection.fetch();
      },
      error: function(){
        that.render();
      }
    });
  }
});