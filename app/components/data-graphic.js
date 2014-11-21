import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'data-graphic',

  didInsertElement: function() {
    this._super.apply(this, arguments);

    data_graphic({
      inflator:                 this.get('inflator'),
      max_x:                    this.get('max_x'),
      max_y:                    this.get('max_y'),
      min_x:                    this.get('min_y'),
      show_years:               this.get('show_years'),
      small_text:               this.get('small_text'),
      xax_count:                this.get('xax_count'),
      xax_format:               this.get('xax_format'),
      x_label:                  this.get('x_label'),
      xax_tick_length:          this.get('xax_tick_length'),
      xax_units:                this.get('xax_units'),
      yax_count:                this.get('yax_count'),
      yax_tick_length:          this.get('yax_tick_length'),
      y_label:                  this.get('y_label'),
      y_scale_type:             this.get('y_scale_type'),

      animate_on_load:          this.get('animate_on_load'),
      area:                     this.get('area'),
      baselines:                this.get('baselines'),
      chart_type:               this.get('chart_type'),
      custom_line_color_map:    this.get('custom_line_color_map'),
      decimals:                 this.get('decimals'),
      error:                    this.get('error'),
      format:                   this.get('format'),
      interpolate:              this.get('interpolate'),
      legend:                   this.get('legend'),
      legend_target:            this.get('legend_target'),
      linked:                   this.get('linked'),
      list:                     this.get('list'),
      markers:                  this.get('markers'),
      max_data_size:            this.get('max_data_size'),
      point_size:               this.get('point_size'),
      rollover_callback:        this.get('rollover_callback'),
      show_confidence_band:     this.get('show_confidence_band'),
      show_rollover_text:       this.get('show_rollover_text'),
      target:                   "#" + this.get('elementId'),
      transition_on_update:     this.get('transition_on_update'),
      x_rug:                    this.get('x_rug'),
      y_rug:                    this.get('y_rug'),

      data:                     this.get('data'),
      missing_is_zero:          this.get('missing_is_zero'),
      x_accessor:               this.get('x_accessor'),
      y_accessor:               this.get('y_accessor'),

      buffer:                   this.get('buffer'),
      bottom:                   this.get('bottom'),
      height:                   this.get('height'),
      left:                     this.get('left'),
      right:                    this.get('right'),
      small_height_threshold:   this.get('small_height_threshold'),
      small_width_threshold:    this.get('small_width_threshold'),
      top:                      this.get('top'),
      width:                    this.get('width'),

      color_accessor:           this.get('color_accessor'),
      color_range:              this.get('color_range'),
      color_type:               this.get('color_type'),
      size_accessor:            this.get('size_accessor'),
      size_range:               this.get('size_range'),
      lowess:                   this.get('lowess'),
      ls:                       this.get('ls'),
      bar_margin:               this.get('bar_margin'),
      binned:                   this.get('binned'),
      bins:                     this.get('bins')
    });
  }

});
