'use strict';

module.exports = {
  name: 'ember-metrics-graphics',
  included: function(app) {
    app.import('bower_components/metrics-graphics/dist/metricsgraphics.css');
    app.import('bower_components/d3/d3.min.js');
    app.import('bower_components/metrics-graphics/dist/metricsgraphics.js');
  }
};
