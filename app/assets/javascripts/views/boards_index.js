Trello.Views.BoardsIndex = Backbone.View.extend({
  initialize: function(){
  this.listenTo(this.collection, "sync add", this.render);
  },

  template: JST['boards_index'],

  render: function(){
    console.log("in render")
    var boards = this.collection;
    var content = this.template({boards: boards});
    this.$el.html(content);
    this.addFormView();
    return this;
  },

  addFormView: function (){
    var formView = new Trello.Views.BoardNew({collection: this.collection});
    this.$el.find(".form").html(formView.render().$el);
  },
})