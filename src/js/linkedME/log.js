var _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
	return typeof e
} : function(e) {
	return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
! function e(t, n, o) {
	function i(r, s) {
		if(!n[r]) {
			if(!t[r]) {
				var l = "function" == typeof require && require;
				if(!s && l) return l(r, !0);
				if(a) return a(r, !0);
				var c = new Error("Cannot find module '" + r + "'");
				throw c.code = "MODULE_NOT_FOUND", c
			}
			var d = n[r] = {
				exports: {}
			};
			t[r][0].call(d.exports, function(e) {
				var n = t[r][1][e];
				return i(n ? n : e)
			}, d, d.exports, e, t, n, o)
		}
		return n[r].exports
	}
	for(var a = "function" == typeof require && require, r = 0; r < o.length; r++) i(o[r]);
	return i
}({
	1: [function(e, t, n) {
		var o = "function" == typeof Symbol && "symbol" === _typeof2(Symbol.iterator) ? function(e) {
			return "undefined" == typeof e ? "undefined" : _typeof2(e)
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : "undefined" == typeof e ? "undefined" : _typeof2(e)
		};
		! function(e, t) {
			var n, i = null,
				a = 0,
				r = 0,
				s = 0,
				l = 0,
				c = parseInt(9999 * Math.random()) + parseInt((new Date).getTime()).toString().substr(5, 8),
				d = {
					init: function() {
						this.setCookie(), t.getElementById("send_log") && (d.countInit(), this.visibilityListen()), d.domReady(function() {
							d.setCountLog()
						})
					},
					domReady: function(e) {
						t.addEventListener ? t.addEventListener("DOMContentLoaded", function() {
							t.removeEventListener("DOMContentLoaded", arguments.callee, !1), e()
						}, !1) : t.attachEvent && t.attachEvent("onreadystatechange", function() {
							"complete" == t.readyState && (t.detachEvent("onreadystatechange", arguments.callee), e())
						})
					},
					setCountLog: function() {
						if(t.querySelectorAll("[data-setting-click]"))
							for(var n = 0; n < t.querySelectorAll("[data-setting-click]").length; n++) t.querySelectorAll("[data-setting-click]")[n].addEventListener("click", function(t) {
								self = this, "A" == self.tagName && self.getAttribute("href") && self.getAttribute("href").indexOf("javascript:") == -1 ? (t.preventDefault(), u.init(function() {
									console.log("鐐瑰嚮杞寲鍙戦€丱K"), e.location.href = self.getAttribute("href")
								}, {
									location: self.getAttribute("data-setting-click")
								})) : u.init(function() {
									console.log("鐐瑰嚮杞寲鍙戦€丱K111")
								}, {
									location: self.getAttribute("data-setting-click")
								})
							});
						if(t.querySelectorAll("[data-setting-press]"))
							for(var n = 0; n < t.querySelectorAll("[data-setting-press]").length; n++) {
								var o = 0,
									i = 0;
								t.querySelectorAll("[data-setting-press]")[n].addEventListener("touchstart", function() {
									o = new Date
								}), t.querySelectorAll("[data-setting-press]")[n].addEventListener("touchend", function() {
									self = this, i = new Date - o, i > 800 && (u.init(function() {}, {
										location: self.getAttribute("data-setting-press")
									}), console.log("瑙︽懜鍩嬬偣鍙戦€丱K"))
								})
							}
						if(t.querySelectorAll("[data-setting-copy]"))
							for(var n = 0; n < t.querySelectorAll("[data-setting-copy]").length; n++) t.querySelectorAll("[data-setting-copy]")[n].addEventListener("click", function(e) {
								self = this;
								var t = self.getAttribute("data-setting-copy"),
									n = t.match(/\$\{(.+?)\}/g);
								if(n && n.length)
									for(var o in n) {
										var i = n[o].replace("${", "");
										i = i.replace("}", ""), t = t.replace(n[o], d.getparams(i))
									}
								"A" == self.tagName && self.getAttribute("href") && self.getAttribute("href").indexOf("javascript:") == -1 ? d.copyBoard(t) : d.copyBoard(t)
							})
					},
					copyBoard: function(e) {
						var n = t.createElement("textarea");
						n.style.position = "fixed", n.style.top = 0, n.style.left = 0, n.style.width = "2em", n.style.height = "2em", n.style.padding = 0, n.style.border = "none", n.style.outline = "none", n.style.boxShadow = "none", n.style.background = "transparent", n.value = e, t.body.appendChild(n);
						var o = n.hasAttribute("readonly");
						o || n.setAttribute("readonly", ""), n.select(), n.setSelectionRange(0, n.value.length), o || n.removeAttribute("readonly"), selectedText = n.value;
						try {
							t.execCommand("copy") ? console.log("澶嶅埗鎴愬姛") : console.log("鎮ㄧ殑娴忚鍣ㄤ笉鏀寔鑷姩澶嶅埗锛岃闀挎寜澶嶅埗")
						} catch(i) {
							console.log("涓嶈兘浣跨敤杩欑鏂规硶澶嶅埗鍐呭")
						}
						t.body.removeChild(n)
					},
					countInit: function() {
						var o = startY = endX = endY = 0;
						n = setInterval(d.countTime, 1e3), t.addEventListener("touchstart", function(t) {
							a++, d.dataAnalysis("touch");
							var n = t.targetTouches[0];
							o = n.pageX, startY = n.pageY;
							var i = i || e.event,
								r = i.target || i.srcElement;
							"input" == r.nodeName.toLowerCase() && (d.dataAnalysis("input"), s++)
						}), t.addEventListener("touchend", function(e) {
							endX = e.changedTouches[0].pageX, endY = e.changedTouches[0].pageY;
							var t = Math.abs(endY - startY),
								n = Math.abs(endX - o);
							0 !== endX && 0 !== endY && (n > 5 || t > 5) && (d.dataAnalysis("move"), r++, endX = 0, endY = 0)
						}, !1)
					},
					visibilityListen: function() {
						var e, o, i;
						"undefined" != typeof t.hidden ? (e = "hidden", i = "visibilitychange", o = "visibilityState") : "undefined" != typeof t.mozHidden ? (e = "mozHidden", i = "mozvisibilitychange", o = "mozVisibilityState") : "undefined" != typeof t.msHidden ? (e = "msHidden", i = "msvisibilitychange", o = "msVisibilityState") : "undefined" != typeof t.webkitHidden && (e = "webkitHidden", i = "webkitvisibilitychange", o = "webkitVisibilityState"), t.addEventListener(i, function() {
							"visible" !== t[o] ? clearInterval(n) : t.getElementById("send_log") && (c = parseInt(9999 * Math.random()) + parseInt((new Date).getTime()).toString().substr(5, 8), a = 0, r = 0, s = 0, l = 0, n = setInterval(d.countTime, 1e3))
						}, !1)
					},
					countTime: function() {
						d.dataAnalysis("perSec"), l++, 300 === l && clearInterval(n)
					},
					getUrlParam: function() {
						var e = [],
							t = location.search.replace(/^\?/, "") + location.hash.replace(/^\#/, "&");
						if(t && (t = t.split("&"), t.length > 0))
							for(var n = 0; n < t.length; n++) {
								var o = t[n].split("=");
								if(0 == o[0].indexOf("a_")) {
									var i = o[0].replace("a_", ""),
										a = o[1];
									e.push({
										key: i,
										val: a
									})
								}
							}
						return e
					},
					cookie: function(e, n, o) {
						if("undefined" == typeof n) {
							var i = null;
							if(t.cookie && "" != t.cookie)
								for(var a = t.cookie.split(";"), r = 0; r < a.length; r++) {
									var s = a[r].replace(/(^\s*)|(\s*$)/g, "");
									if(s.substring(0, e.length + 1) == e + "=") {
										i = decodeURIComponent(s.substring(e.length + 1));
										break
									}
								}
							return i
						}
						o = o || {}, null === n && (n = "", o = $.extend({}, o), o.expires = -1);
						var l = "";
						if(o.expires && ("number" == typeof o.expires || o.expires.toUTCString)) {
							var c;
							"number" == typeof o.expires ? (c = new Date, c.setTime(c.getTime() + 24 * o.expires * 60 * 60 * 1e3)) : c = o.expires, l = "; expires=" + c.toUTCString()
						}
						var d = o.path ? "; path=" + o.path : "",
							u = o.domain ? "; domain=" + o.domain : "",
							f = o.secure ? "; secure" : "";
						t.cookie = [e, "=", encodeURIComponent(n), l, d, u, f].join("")
					},
					getoId: function() {
						var e = !1,
							t = location.search;
						return(t.indexOf("a_oId") !== -1 || this.cookie("_coll_oId")) && (e = !0), e
					},
					setCookie: function() {
						var e = this.getUrlParam();
						if(i = {
								referrer: t.referrer,
								url: location.href
							}, e.length > 0)
							for(var n = 0; n < e.length; n++) i[e[n].key] = e[n].val, this.cookie("_coll_" + e[n].key, e[n].val, {
								path: "/",
								expires: 1
							});
						if(location.search.indexOf("a_oId") == -1)
							for(var o = t.cookie.split(";"), n = 0; n < o.length; n++)
								if(o[n].indexOf("_coll_") !== -1) {
									var a = o[n].split("=")[0];
									i[a.substr(a.indexOf("_coll_") + 6)] = o[n].split("=")[1]
								}
						this.sendLog({
							type: 7,
							json: JSON.stringify(i)
						}), this.sendLandLog({
							type: 49,
							json: JSON.stringify(i)
						})
					},
					formatParams: function(e) {
						var t = [];
						for(var n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
						return t.join("&")
					},
					ajax: function(n) {
						if(n = n || {}, !n.url || !n.callback) throw new Error("鍙傛暟涓嶅悎娉�");
						var o = ("jsonp_" + Math.random()).replace(".", ""),
							i = t.getElementsByTagName("head")[0];
						n.data[n.callback] = o;
						var a = this.formatParams(n.data),
							r = t.createElement("script");
						i.appendChild(r), e[o] = function(t) {
							i.removeChild(r), clearTimeout(r.timer), e[o] = null, n.success && n.success(t)
						}, r.src = n.url + "?" + a, n.time && (r.timer = setTimeout(function() {
							e[o] = null, i.removeChild(r), n.error && n.error({
								message: "瓒呮椂"
							})
						}, n.time))
					},
					sendDataLog: function(e) {
						this.getoId() && this.ajax({
							url: "//activity.yuyiya.com/statistics/stopPageCount",
							callback: "callback",
							data: e,
							time: 3e3,
							success: function(e) {},
							error: function(e) {}
						})
					},
					sendLog: function(e, t) {
						"test" == d.getparams("log") && (7 == e.type ? alert("type7 send!") : alert("type8 send!"));
						try {
							this.getoId() ? this.ajax({
								url: "//activity.yuyiya.com/log/inner",
								callback: "callback",
								data: e,
								time: 3e3,
								success: function(e) {
									t && t(e)
								},
								error: function(e) {
									t && t(e)
								}
							}) : t && t()
						} catch(n) {
							t && t()
						}
					},
					sendLandLog: function(e, t) {
						try {
							this.getoId() ? this.ajax({
								url: "//activity.yuyiya.com/log/landLog",
								callback: "callback",
								data: e,
								time: 3e3,
								success: function(e) {
									t && t(e)
								},
								error: function(e) {
									t && t(e)
								}
							}) : t && t()
						} catch(n) {
							console.log(n), t && t()
						}
					},
					cloneObj: function(e) {
						var t = this;
						if("object" != ("undefined" == typeof e ? "undefined" : o(e))) return e;
						if(null == e) return e;
						var n = new Object;
						for(var i in e) n[i] = t.cloneObj(e[i]);
						return n
					},
					extendObj: function() {
						var e = arguments;
						if(!(e.length < 2)) {
							for(var t = this.cloneObj(e[0]), n = 1; n < e.length; n++)
								for(var o in e[n]) t[o] = e[n][o];
							return t
						}
					},
					dataAnalysis: function(e) {
						var t = (this.getUrlParam(), {
							sessionID: c,
							action: e,
							touchNum: a,
							inputNum: s,
							moveNum: r
						});
						t = Object.assign(t, i), d.sendDataLog(t)
					},
					getparams: function(e) {
						var t = "[\\?&]" + e + "=([^&#]*)",
							n = new RegExp(t),
							o = n.exec(location.href);
						return null === o ? "" : o[1]
					}
				};
			d.init();
			var u = {
				init: function(e, t, n) {
					n = n || "open";
					var o = d.extendObj(i, t),
						a = {
							type: 8,
							json: JSON.stringify(o)
						};
					"open" == n ? (d.sendLog(a, e), d.sendLandLog({
						type: 50,
						json: JSON.stringify(o)
					})) : "close" == n ? d.sendLandLog({
						type: 50,
						json: JSON.stringify(o)
					}, e) : d.sendLog(a, e)
				}
			};
			e.countLog = u
		}(window, document)
	}, {}]
}, {}, [1]);