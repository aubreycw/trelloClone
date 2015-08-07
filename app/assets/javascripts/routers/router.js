Trello.Routers.Router = Backbone.Router.extend({
  initialize: function(options){
    this.$el = options.$el;
    this.collection = new Trello.Collections.Boards();
  },

  routes: {
    '': 'renderIndex',
    'boards/new': 'newBoard',
    'boards/:id': 'showBoard'
  },

  renderIndex: function(){
    this.collection.fetch();
    var view = new Trello.Views.BoardsIndex({collection: this.collection});
    this._swapView(view);
  },

  _swapView: function(view){
    this._view && this._view.remove();
    this._view = view;
    this.$el.html(view.render().$el);
  },

  newBoard: function(){
    this.collection.fetch();
    var view = new Trello.Views.BoardNew({collection: this.collection});
    this._swapView(view);
  }
});