Trello.Views.BoardNew = Backbone.View.extend({
  initialize: function(){
  },

  template: JST["board_form"],

  events: {
    "submit form" : "createBoard"
  },

  render: function(){
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  createBoard: function(event){
    event.preventDefault();
    var boardData = $(event.currentTarget).serializeJSON().board;
    var board = new Trello.Models.Board(boardData)
    var that = this;
    board.save({},{
      success: function(){
        console.log("in success")
        that.collection.add(board);
        that.collection.fetch();
      },
      error: function(){
        that.render();
      }
    });
  }
});