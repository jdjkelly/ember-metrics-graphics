import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'data-graphic',

  didInsertElement: function() {
    this._super.apply(this, arguments);

    data_graphic({
      title:            this.get('title'),
      description:      this.get('description'),
      data:             this.get('data'),
      markers:          this.get('markers'),
      width:            this.get('width'),
      height:           this.get('height'),
      target:           "#" + this.get('elementId'),
      x_accessor:       this.get('x_accessor'),
      y_accessor:       this.get('y_accessor'),
      interpolate:      this.get('interpolate')
    });

  }

});
