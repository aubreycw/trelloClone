Trello.Views.BoardShow = Backbone.View.extend({

  initialize: function(options){
    this.model = options.model;
    this.collection = options.collection;
    this.model.fetch();
  },

  template: JST["board_show"],

  render: function(){
    var content = this.template({board: this.model});
    this.$el.html(content);
    var that = this;
    this.model.lists().fetch({
      success: function(){
      that.model.lists().each(function(list) {
      var view = new Trello.Views.ListIndexItem({model: list});
      that.$el.find(".lists_list").append(view.render().$el);
    });
    }})
    this.addFormView()
    return this;
  },

   addFormView: function (){
    var formView = new Trello.Views.ListNew({collection: this.collection, boardId: this.model.get("id")});
    this.$el.find(".form").html(formView.render().$el);
  },
});