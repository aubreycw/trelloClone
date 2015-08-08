Trello.Views.BoardsIndex = Backbone.View.extend({
  initialize: function(){
  this.listenTo(this.collection, "sync add", this.render);
  },

  template: JST['boards_index'],

  render: function(){
    var boards = this.collection;
    var content = this.template();
    this.$el.html(content);
    
    var that = this;
    boards.each(function(board){
      var boardItem = new Trello.Views.BoardsIndexItem({model: board});
      that.$el.find(".boards_list").append(boardItem.render().$el);
    });

    this.addFormView();
    return this;
  },

  addFormView: function (){
    var formView = new Trello.Views.BoardNew({collection: this.collection});
    this.$el.find(".form").html(formView.render().$el);
  },
})