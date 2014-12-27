/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

var app = new EmberAddon();

app.import('bower_components/metrics-graphics/dist/metricsgraphics.css');
app.import('bower_components/d3/d3.min.js');
app.import('bower_components/metrics-graphics/dist/metricsgraphics.min.js');

module.exports = app.toTree();
