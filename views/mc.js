var $ = require('jquery');
var template = require('../templates/mc.html');
module.exports = Backbone.View.extend({
	initialize:function(){
	},
	el:"#app",
	template:template,
	render:function(){
		$(this.el).append(this.template);
	}
})