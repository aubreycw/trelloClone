Trello.Views.BoardsIndex = Backbone.View.extend({
  initialize: function(options){
    this.collection = options.collection;
  },

  template: JST['boards_index'],

  render: function(){
    var boards = this.collection;
    var that = this;
    boards.fetch({
      success: function(){
        var content = that.template({boards: boards});
        that.$el.html(content);
      } 
    })
    return this;
  }
})