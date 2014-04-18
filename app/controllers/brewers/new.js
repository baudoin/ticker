export default Ember.ObjectController.extend({
  init: function() {
    this.set('beer',  Ember.Object.create());
  },
  // beerIsValid: function() {
  //   var isValid = true;
  //   ['beer.title', 'beer.username', 'beer.body'].forEach(function(field) {
  //     if (this.get(field) === '') {
  //       isValid = false;
  //     }
  //   }, this);
  //   return isValid;
  // },
  actions: {
    save: function() {
      // if (!this.postIsValid()) { return; }

      // Ember.RSVP.hash({
      //   user: this.get('util').getUserByUsername(this.get('post.username'))
      // })
      // .then(function(promises) {
      //   var newPost = this.store.createRecord('post', {
      //     title: this.get('post.title'),
      //     body: this.get('post.body'),
      //     published: new Date().getTime(),
      //     user: promises.user
      //   });
      //   newPost.save();
      //   this.setProperties({
      //     'post.title': '',
      //     'post.username': '',
      //     'post.body': ''
      //   });
      //   this.transitionToRoute('post', newPost);
      // }.bind(this));

      var newBrewer = this.store.createRecord('brewer', {
        name: this.get('name')
      });
      newBrewer.save();
      this.setProperties({
        'name': ''
      });
      this.transitionToRoute('brewer', newBrewer);

    }
  },
  brewer: undefined
});
