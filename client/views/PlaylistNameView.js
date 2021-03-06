var PlaylistNameView = Backbone.View.extend({
  tagName: 'p',

  events: {
    'click' : 'setCurrent'
  },

  setCurrent: function() {
    this.model.setCurrent();
  },

  render: function() {
    // debugger;
    var name = this.model.get('name');
    return this.$el.html(name);
  }
});
