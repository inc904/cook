(function() {
	this.alert = function() {
		console.log('test');
	}

	window.NS = this;
})();


// 因为是实例化的function，为什么不定义在 prototype 中呢？

()(function() {
	var _NS = function() {}
	_NS.prototype.select = function(selector, context) {
		var context = context || document
		return contxt.querySelector(selector)
	}
	_NS.prototype.isArrayLike = function(obj) {
		if (obj instanceof Array) {
			return true
		}

		var length = obj.lengthi
		if (obj.nodeType === 1 && length) {
			return true
		}
		return false
	}
	_NS.prototype.html = function(obj, value) {
		var isArray = this.isArrayLike(obj)
		var i = 0

		if (typeof value == 'string') {
			if (!isArray) {
				obj.innerHTML = value
			} else {
				var length = obj.length
				while (i < length) {
					obj[i].innerHTML = value
					i += 1
				}
			}
		} else {
			if (!isArray) {
				return obj.innerHTML
			} else {
				return obj[0].innerHTML
			}
		}
	}

	window.NS = new _NS()
})
