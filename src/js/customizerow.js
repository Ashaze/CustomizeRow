;(function(root,factory){
	root.customizeRow = factory()
})(window,function(){
	var customizeRow = function(options){
		this.opt = {};
		this.extend(options);
		this.init();
	};
	customizeRow.prototype={
		extend:function(options){
			var defaults = {
				ellipsis : "cus-row-ellipsis",
				rowclass : ".cus-row",
				brower: false
			}
			var key;
			for(key in options){
				var defaultValue = defaults[key];
				var optionValue = options[key];
				if(optionValue == defaultValue ){ continue}
				else if(optionValue !== undefined){
					defaults[key] = optionValue;
				}
			}
			this.opt = defaults;
		},
		init:function(){
			var that = this.opt;
			var userAgent = navigator.userAgent;
			if((userAgent.indexOf('WOW') < 0 && userAgent.indexOf("Edge") < 0)&&that.brower){return}

			$(that.rowclass).each(function(){
				var _this = $(this);
				_this.height('auto');
				var text = _this.text(),
					width = _this.width(),
					textIndent = parseInt(_this.css("text-indent")),
					letterSpacing = _this.css("letter-spacing"),
					MAXROW = _this.attr("cus-row"),
					LINEHEIGHT = _this.css("line-height"),
					FONTSIZE = parseInt(_this.css("font-size")),
					contentHeight = _this.height();
				if(LINEHEIGHT == "normal"){
					LINEHEIGHT = Math.ceil(FONTSIZE * 1.14);
				}
				var rowHeight = parseInt(LINEHEIGHT) * MAXROW;
				if(contentHeight > rowHeight){
					_this.addClass(that.ellipsis);
					var a = FONTSIZE + letterSpacing;
					var b = width * MAXROW - textIndent;
					_this.attr("title",text);
					_this.text(text.substr(0,(parseInt(b/a) - MAXROW)));
				} 
				_this.height(rowHeight + 2*MAXROW);
				_this.css("webkitLineClamp",MAXROW);
			})
		}
	}
	return customizeRow;
});

