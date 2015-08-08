Trello.Views.BoardsIndexItem = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
    "click button": "delete"
  },

  template: JST['boards_index_item'],

  tagName: "li",

  render: function(){
    var content = this.template({board: this.model});
    this.$el.html(content);;
    return this;
  },

  delete: function(){
    this.model.destroy();
    this.remove();
    Backbone.history.navigate("#", {trigger: true});
  }
})