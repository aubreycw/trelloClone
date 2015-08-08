Trello.Views.ListIndexItem = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
    "click button": "delete"
  },

  template: JST['lists_index_item'],

  tagName: "li",

  render: function(){
    var content = this.template({list: this.model});
    this.$el.html(content);;
    return this;
  },

  delete: function(){
    this.model.destroy();
    this.remove();
    Backbone.history.navigate("#/boards/"+this.model.get("board_id"), {trigger: true});
  }
})