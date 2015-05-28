// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td><img class="addToPlaylist" src="assets/plus.png"/></td>'),

  events: {
    'click': 'enqueue',
    'click .addToPlaylist': 'addSongToPlaylist'
  },

  enqueue: function() {
    this.model.enqueue();
  },

  addSongToPlaylist: function() {
    this.model.addSongToPlaylist();
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
