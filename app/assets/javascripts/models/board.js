Trello.Models.Board = Backbone.Model.extend({
  urlRoot: 'api/boards',

  lists: function(){
    this._lists = this._lists || new Trello.Collections.Lists({board: this});
    this._lists.fetch()
    return this._lists;
  },
});