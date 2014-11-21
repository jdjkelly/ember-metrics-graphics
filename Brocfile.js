/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

var app = new EmberAddon();

app.import('bower_components/metrics-graphics/css/metricsgraphics.css');
app.import('bower_components/metrics-graphics/css/metricsgraphics-layout.css');
app.import('bower_components/d3/d3.min.js');
app.import('bower_components/metrics-graphics/js/metricsgraphics.min.js');

module.exports = app.toTree();
