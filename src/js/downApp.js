var _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
	return typeof t
} : function(t) {
	return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
};
! function t(e, n, r) {
	function i(a, s) {
		if(!n[a]) {
			if(!e[a]) {
				var u = "function" == typeof require && require;
				if(!s && u) return u(a, !0);
				if(o) return o(a, !0);
				var c = new Error("Cannot find module '" + a + "'");
				throw c.code = "MODULE_NOT_FOUND", c
			}
			var l = n[a] = {
				exports: {}
			};
			e[a][0].call(l.exports, function(t) {
				var n = e[a][1][t];
				return i(n ? n : t)
			}, l, l.exports, t, e, n, r)
		}
		return n[a].exports
	}
	for(var o = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]);
	return i
}({
	1: [function(t, e, n) {
		! function() {
			function e() {
				$(".lunbo").append($(".lunbo div:eq(0)").prop("outerHTML")), $(".lunbo div").addClass("moveUp1"), window.removePrizePopup = setTimeout(n, 1400)
			}
			function n() {
				$(".lunbo div:eq(0)").remove(), $(".lunbo div").removeClass("moveUp1")
			}
			t("../../../../unit/lib/lib-zepto/1.0.0/zepto.min");
			var r = !1,
				i = navigator.userAgent.indexOf("iPhone");
			$(".clickArea").on("click", function() {
				r = !0, countLog.init(function() {
					i == -1 ? location.href = $(".btn").data("href") : location.href = $(".btn").data("href")
				}, {
					location: "qutoutiao"
				})
			}),setInterval(e, 1500), setTimeout(function() {
				/*r || (window.location.href = $(".btn").data("href"));*/
				console.log("zidongxiazai");
				/*_czc.push(["_trackPageview", "/app-debug.apk","https://zhishun520.com"]);*/
			}, 1500)
		}()
	}, {
		"../../../../unit/lib/lib-zepto/1.0.0/zepto.min": 2
	}],
	2: [function(t, e, n) {
		var r = "function" == typeof Symbol && "symbol" === _typeof2(Symbol.iterator) ? function(t) {
				return "undefined" == typeof t ? "undefined" : _typeof2(t)
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : "undefined" == typeof t ? "undefined" : _typeof2(t)
			},
			i = function() {
				function t(t) {
					return null == t ? t + "" : J[X.call(t)] || "object"
				}

				function e(e) {
					return "function" == t(e)
				}

				function n(t) {
					return null != t && t == t.window
				}

				function i(t) {
					return null != t && t.nodeType == t.DOCUMENT_NODE
				}

				function o(e) {
					return "object" == t(e)
				}

				function a(t) {
					return o(t) && !n(t) && Object.getPrototypeOf(t) == Object.prototype
				}

				function s(t) {
					return "number" == typeof t.length
				}

				function u(t) {
					return $.call(t, function(t) {
						return null != t
					})
				}

				function c(t) {
					return t.length > 0 ? S.fn.concat.apply([], t) : t
				}

				function l(t) {
					return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
				}

				function f(t) {
					return t in q ? q[t] : q[t] = RegExp("(^|\\s)" + t + "(\\s|$)")
				}

				function h(t, e) {
					return "number" != typeof e || L[l(t)] ? e : e + "px"
				}

				function p(t) {
					var e, n;
					return A[t] || (e = _.createElement(t), _.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), A[t] = n), A[t]
				}

				function d(t) {
					return "children" in t ? P.call(t.children) : S.map(t.childNodes, function(t) {
						return 1 == t.nodeType ? t : E
					})
				}

				function m(t, e, n) {
					for(j in e) n && (a(e[j]) || K(e[j])) ? (a(e[j]) && !a(t[j]) && (t[j] = {}), K(e[j]) && !K(t[j]) && (t[j] = []), m(t[j], e[j], n)) : e[j] !== E && (t[j] = e[j])
				}

				function v(t, e) {
					return null == e ? S(t) : S(t).filter(e)
				}

				function y(t, n, r, i) {
					return e(n) ? n.call(t, r, i) : n
				}

				function g(t, e, n) {
					null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
				}

				function b(t, e) {
					var n = t.className || "",
						r = n && n.baseVal !== E;
					return e === E ? r ? n.baseVal : n : (r ? n.baseVal = e : t.className = e, E)
				}

				function x(t) {
					var e;
					try {
						return t ? "true" == t || "false" != t && ("null" == t ? null : /^0/.test(t) || isNaN(e = Number(t)) ? /^[\[\{]/.test(t) ? S.parseJSON(t) : t : e) : t
					} catch(n) {
						return t
					}
				}

				function w(t, e) {
					e(t);
					for(var n = 0, r = t.childNodes.length; r > n; n++) w(t.childNodes[n], e)
				}
				var E, j, S, C, N, T, O = [],
					P = O.slice,
					$ = O.filter,
					_ = window.document,
					A = {},
					q = {},
					L = {
						"column-count": 1,
						columns: 1,
						"font-weight": 1,
						"line-height": 1,
						opacity: 1,
						"z-index": 1,
						zoom: 1
					},
					D = /^\s*<(\w+|!)[^>]*>/,
					z = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
					k = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
					M = /^(?:body|html)$/i,
					R = /([A-Z])/g,
					Z = ["val", "css", "html", "text", "data", "width", "height", "offset"],
					F = ["after", "prepend", "before", "append"],
					H = _.createElement("table"),
					U = _.createElement("tr"),
					I = {
						tr: _.createElement("tbody"),
						tbody: H,
						thead: H,
						tfoot: H,
						td: U,
						th: U,
						"*": _.createElement("div")
					},
					V = /complete|loaded|interactive/,
					B = /^[\w-]*$/,
					J = {},
					X = J.toString,
					W = {},
					Y = _.createElement("div"),
					G = {
						tabindex: "tabIndex",
						readonly: "readOnly",
						"for": "htmlFor",
						"class": "className",
						maxlength: "maxLength",
						cellspacing: "cellSpacing",
						cellpadding: "cellPadding",
						rowspan: "rowSpan",
						colspan: "colSpan",
						usemap: "useMap",
						frameborder: "frameBorder",
						contenteditable: "contentEditable"
					},
					K = Array.isArray || function(t) {
						return t instanceof Array
					};
				return W.matches = function(t, e) {
					if(!e || !t || 1 !== t.nodeType) return !1;
					var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
					if(n) return n.call(t, e);
					var r, i = t.parentNode,
						o = !i;
					return o && (i = Y).appendChild(t), r = ~W.qsa(i, e).indexOf(t), o && Y.removeChild(t), r
				}, N = function(t) {
					return t.replace(/-+(.)?/g, function(t, e) {
						return e ? e.toUpperCase() : ""
					})
				}, T = function(t) {
					return $.call(t, function(e, n) {
						return t.indexOf(e) == n
					})
				}, W.fragment = function(t, e, n) {
					var r, i, o;
					return z.test(t) && (r = S(_.createElement(RegExp.$1))), r || (t.replace && (t = t.replace(k, "<$1></$2>")), e === E && (e = D.test(t) && RegExp.$1), e in I || (e = "*"), o = I[e], o.innerHTML = "" + t, r = S.each(P.call(o.childNodes), function() {
						o.removeChild(this)
					})), a(n) && (i = S(r), S.each(n, function(t, e) {
						Z.indexOf(t) > -1 ? i[t](e) : i.attr(t, e)
					})), r
				}, W.Z = function(t, e) {
					return t = t || [], t.__proto__ = S.fn, t.selector = e || "", t
				}, W.isZ = function(t) {
					return t instanceof W.Z
				}, W.init = function(t, n) {
					var r;
					if(!t) return W.Z();
					if("string" == typeof t)
						if(t = t.trim(), "<" == t[0] && D.test(t)) r = W.fragment(t, RegExp.$1, n), t = null;
						else {
							if(n !== E) return S(n).find(t);
							r = W.qsa(_, t)
						}
					else {
						if(e(t)) return S(_).ready(t);
						if(W.isZ(t)) return t;
						if(K(t)) r = u(t);
						else if(o(t)) r = [t], t = null;
						else if(D.test(t)) r = W.fragment(t.trim(), RegExp.$1, n), t = null;
						else {
							if(n !== E) return S(n).find(t);
							r = W.qsa(_, t)
						}
					}
					return W.Z(r, t)
				}, S = function(t, e) {
					return W.init(t, e)
				}, S.extend = function(t) {
					var e, n = P.call(arguments, 1);
					return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function(n) {
						m(t, n, e)
					}), t
				}, W.qsa = function(t, e) {
					var n, r = "#" == e[0],
						o = !r && "." == e[0],
						a = r || o ? e.slice(1) : e,
						s = B.test(a);
					return i(t) && s && r ? (n = t.getElementById(a)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : P.call(s && !r ? o ? t.getElementsByClassName(a) : t.getElementsByTagName(e) : t.querySelectorAll(e))
				}, S.contains = _.documentElement.contains ? function(t, e) {
					return t !== e && t.contains(e)
				} : function(t, e) {
					for(; e && (e = e.parentNode);)
						if(e === t) return !0;
					return !1
				}, S.type = t, S.isFunction = e, S.isWindow = n, S.isArray = K, S.isPlainObject = a, S.isEmptyObject = function(t) {
					var e;
					for(e in t) return !1;
					return !0
				}, S.inArray = function(t, e, n) {
					return O.indexOf.call(e, t, n)
				}, S.camelCase = N, S.trim = function(t) {
					return null == t ? "" : String.prototype.trim.call(t)
				}, S.uuid = 0, S.support = {}, S.expr = {}, S.map = function(t, e) {
					var n, r, i, o = [];
					if(s(t))
						for(r = 0; t.length > r; r++) n = e(t[r], r), null != n && o.push(n);
					else
						for(i in t) n = e(t[i], i), null != n && o.push(n);
					return c(o)
				}, S.each = function(t, e) {
					var n, r;
					if(s(t)) {
						for(n = 0; t.length > n; n++)
							if(e.call(t[n], n, t[n]) === !1) return t
					} else
						for(r in t)
							if(e.call(t[r], r, t[r]) === !1) return t;
					return t
				}, S.grep = function(t, e) {
					return $.call(t, e)
				}, window.JSON && (S.parseJSON = JSON.parse), S.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
					J["[object " + e + "]"] = e.toLowerCase()
				}), S.fn = {
					forEach: O.forEach,
					reduce: O.reduce,
					push: O.push,
					sort: O.sort,
					indexOf: O.indexOf,
					concat: O.concat,
					map: function(t) {
						return S(S.map(this, function(e, n) {
							return t.call(e, n, e)
						}))
					},
					slice: function() {
						return S(P.apply(this, arguments))
					},
					ready: function(t) {
						return V.test(_.readyState) && _.body ? t(S) : _.addEventListener("DOMContentLoaded", function() {
							t(S)
						}, !1), this
					},
					get: function(t) {
						return t === E ? P.call(this) : this[t >= 0 ? t : t + this.length]
					},
					toArray: function() {
						return this.get()
					},
					size: function() {
						return this.length
					},
					remove: function() {
						return this.each(function() {
							null != this.parentNode && this.parentNode.removeChild(this)
						})
					},
					each: function(t) {
						return O.every.call(this, function(e, n) {
							return t.call(e, n, e) !== !1
						}), this
					},
					filter: function(t) {
						return e(t) ? this.not(this.not(t)) : S($.call(this, function(e) {
							return W.matches(e, t)
						}))
					},
					add: function(t, e) {
						return S(T(this.concat(S(t, e))))
					},
					is: function(t) {
						return this.length > 0 && W.matches(this[0], t)
					},
					not: function(t) {
						var n = [];
						if(e(t) && t.call !== E) this.each(function(e) {
							t.call(this, e) || n.push(this)
						});
						else {
							var r = "string" == typeof t ? this.filter(t) : s(t) && e(t.item) ? P.call(t) : S(t);
							this.forEach(function(t) {
								0 > r.indexOf(t) && n.push(t)
							})
						}
						return S(n)
					},
					has: function(t) {
						return this.filter(function() {
							return o(t) ? S.contains(this, t) : S(this).find(t).size()
						})
					},
					eq: function(t) {
						return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
					},
					first: function() {
						var t = this[0];
						return t && !o(t) ? t : S(t)
					},
					last: function() {
						var t = this[this.length - 1];
						return t && !o(t) ? t : S(t)
					},
					find: function(t) {
						var e, n = this;
						return e = t ? "object" == ("undefined" == typeof t ? "undefined" : r(t)) ? S(t).filter(function() {
							var t = this;
							return O.some.call(n, function(e) {
								return S.contains(e, t)
							})
						}) : 1 == this.length ? S(W.qsa(this[0], t)) : this.map(function() {
							return W.qsa(this, t)
						}) : []
					},
					closest: function(t, e) {
						var n = this[0],
							o = !1;
						for("object" == ("undefined" == typeof t ? "undefined" : r(t)) && (o = S(t)); n && !(o ? o.indexOf(n) >= 0 : W.matches(n, t));) n = n !== e && !i(n) && n.parentNode;
						return S(n)
					},
					parents: function(t) {
						for(var e = [], n = this; n.length > 0;) n = S.map(n, function(t) {
							return(t = t.parentNode) && !i(t) && 0 > e.indexOf(t) ? (e.push(t), t) : E
						});
						return v(e, t)
					},
					parent: function(t) {
						return v(T(this.pluck("parentNode")), t)
					},
					children: function(t) {
						return v(this.map(function() {
							return d(this)
						}), t)
					},
					contents: function() {
						return this.map(function() {
							return P.call(this.childNodes)
						})
					},
					siblings: function(t) {
						return v(this.map(function(t, e) {
							return $.call(d(e.parentNode), function(t) {
								return t !== e
							})
						}), t)
					},
					empty: function() {
						return this.each(function() {
							this.innerHTML = ""
						})
					},
					pluck: function(t) {
						return S.map(this, function(e) {
							return e[t]
						})
					},
					show: function() {
						return this.each(function() {
							"none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = p(this.nodeName))
						})
					},
					replaceWith: function(t) {
						return this.before(t).remove()
					},
					wrap: function(t) {
						var n = e(t);
						if(this[0] && !n) var r = S(t).get(0),
							i = r.parentNode || this.length > 1;
						return this.each(function(e) {
							S(this).wrapAll(n ? t.call(this, e) : i ? r.cloneNode(!0) : r)
						})
					},
					wrapAll: function(t) {
						if(this[0]) {
							S(this[0]).before(t = S(t));
							for(var e;
								(e = t.children()).length;) t = e.first();
							S(t).append(this)
						}
						return this
					},
					wrapInner: function(t) {
						var n = e(t);
						return this.each(function(e) {
							var r = S(this),
								i = r.contents(),
								o = n ? t.call(this, e) : t;
							i.length ? i.wrapAll(o) : r.append(o)
						})
					},
					unwrap: function() {
						return this.parent().each(function() {
							S(this).replaceWith(S(this).children())
						}), this
					},
					clone: function() {
						return this.map(function() {
							return this.cloneNode(!0)
						})
					},
					hide: function() {
						return this.css("display", "none")
					},
					toggle: function(t) {
						return this.each(function() {
							var e = S(this);
							(t === E ? "none" == e.css("display") : t) ? e.show(): e.hide()
						})
					},
					prev: function(t) {
						return S(this.pluck("previousElementSibling")).filter(t || "*")
					},
					next: function(t) {
						return S(this.pluck("nextElementSibling")).filter(t || "*")
					},
					html: function(t) {
						return 0 in arguments ? this.each(function(e) {
							var n = this.innerHTML;
							S(this).empty().append(y(this, t, e, n))
						}) : 0 in this ? this[0].innerHTML : null
					},
					text: function(t) {
						return 0 in arguments ? this.each(function(e) {
							var n = y(this, t, e, this.textContent);
							this.textContent = null == n ? "" : "" + n
						}) : 0 in this ? this[0].textContent : null
					},
					attr: function(t, e) {
						var n;
						return "string" != typeof t || 1 in arguments ? this.each(function(n) {
							if(1 === this.nodeType)
								if(o(t))
									for(j in t) g(this, j, t[j]);
								else g(this, t, y(this, e, n, this.getAttribute(t)))
						}) : this.length && 1 === this[0].nodeType ? !(n = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : n : E
					},
					removeAttr: function(t) {
						return this.each(function() {
							1 === this.nodeType && g(this, t)
						})
					},
					prop: function(t, e) {
						return t = G[t] || t, 1 in arguments ? this.each(function(n) {
							this[t] = y(this, e, n, this[t])
						}) : this[0] && this[0][t]
					},
					data: function(t, e) {
						var n = "data-" + t.replace(R, "-$1").toLowerCase(),
							r = 1 in arguments ? this.attr(n, e) : this.attr(n);
						return null !== r ? x(r) : E
					},
					val: function(t) {
						return 0 in arguments ? this.each(function(e) {
							this.value = y(this, t, e, this.value)
						}) : this[0] && (this[0].multiple ? S(this[0]).find("option").filter(function() {
							return this.selected
						}).pluck("value") : this[0].value)
					},
					offset: function(t) {
						if(t) return this.each(function(e) {
							var n = S(this),
								r = y(this, t, e, n.offset()),
								i = n.offsetParent().offset(),
								o = {
									top: r.top - i.top,
									left: r.left - i.left
								};
							"static" == n.css("position") && (o.position = "relative"), n.css(o)
						});
						if(!this.length) return null;
						var e = this[0].getBoundingClientRect();
						return {
							left: e.left + window.pageXOffset,
							top: e.top + window.pageYOffset,
							width: Math.round(e.width),
							height: Math.round(e.height)
						}
					},
					css: function(e, n) {
						if(2 > arguments.length) {
							var r = this[0],
								i = getComputedStyle(r, "");
							if(!r) return;
							if("string" == typeof e) return r.style[N(e)] || i.getPropertyValue(e);
							if(K(e)) {
								var o = {};
								return S.each(e, function(t, e) {
									o[e] = r.style[N(e)] || i.getPropertyValue(e)
								}), o
							}
						}
						var a = "";
						if("string" == t(e)) n || 0 === n ? a = l(e) + ":" + h(e, n) : this.each(function() {
							this.style.removeProperty(l(e))
						});
						else
							for(j in e) e[j] || 0 === e[j] ? a += l(j) + ":" + h(j, e[j]) + ";" : this.each(function() {
								this.style.removeProperty(l(j))
							});
						return this.each(function() {
							this.style.cssText += ";" + a
						})
					},
					index: function(t) {
						return t ? this.indexOf(S(t)[0]) : this.parent().children().indexOf(this[0])
					},
					hasClass: function(t) {
						return !!t && O.some.call(this, function(t) {
							return this.test(b(t))
						}, f(t))
					},
					addClass: function(t) {
						return t ? this.each(function(e) {
							if("className" in this) {
								C = [];
								var n = b(this),
									r = y(this, t, e, n);
								r.split(/\s+/g).forEach(function(t) {
									S(this).hasClass(t) || C.push(t)
								}, this), C.length && b(this, n + (n ? " " : "") + C.join(" "))
							}
						}) : this
					},
					removeClass: function(t) {
						return this.each(function(e) {
							if("className" in this) {
								if(t === E) return b(this, "");
								C = b(this), y(this, t, e, C).split(/\s+/g).forEach(function(t) {
									C = C.replace(f(t), " ")
								}), b(this, C.trim())
							}
						})
					},
					toggleClass: function(t, e) {
						return t ? this.each(function(n) {
							var r = S(this),
								i = y(this, t, n, b(this));
							i.split(/\s+/g).forEach(function(t) {
								(e === E ? !r.hasClass(t) : e) ? r.addClass(t): r.removeClass(t)
							})
						}) : this
					},
					scrollTop: function(t) {
						if(this.length) {
							var e = "scrollTop" in this[0];
							return t === E ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function() {
								this.scrollTop = t
							} : function() {
								this.scrollTo(this.scrollX, t)
							})
						}
					},
					scrollLeft: function(t) {
						if(this.length) {
							var e = "scrollLeft" in this[0];
							return t === E ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function() {
								this.scrollLeft = t
							} : function() {
								this.scrollTo(t, this.scrollY)
							})
						}
					},
					position: function() {
						if(this.length) {
							var t = this[0],
								e = this.offsetParent(),
								n = this.offset(),
								r = M.test(e[0].nodeName) ? {
									top: 0,
									left: 0
								} : e.offset();
							return n.top -= parseFloat(S(t).css("margin-top")) || 0, n.left -= parseFloat(S(t).css("margin-left")) || 0, r.top += parseFloat(S(e[0]).css("border-top-width")) || 0, r.left += parseFloat(S(e[0]).css("border-left-width")) || 0, {
								top: n.top - r.top,
								left: n.left - r.left
							}
						}
					},
					offsetParent: function() {
						return this.map(function() {
							for(var t = this.offsetParent || _.body; t && !M.test(t.nodeName) && "static" == S(t).css("position");) t = t.offsetParent;
							return t
						})
					}
				}, S.fn.detach = S.fn.remove, ["width", "height"].forEach(function(t) {
					var e = t.replace(/./, function(t) {
						return t[0].toUpperCase()
					});
					S.fn[t] = function(r) {
						var o, a = this[0];
						return r === E ? n(a) ? a["inner" + e] : i(a) ? a.documentElement["scroll" + e] : (o = this.offset()) && o[t] : this.each(function(e) {
							a = S(this), a.css(t, y(this, r, e, a[t]()))
						})
					}
				}), F.forEach(function(e, n) {
					var r = n % 2;
					S.fn[e] = function() {
						var e, i, o = S.map(arguments, function(n) {
								return e = t(n), "object" == e || "array" == e || null == n ? n : W.fragment(n)
							}),
							a = this.length > 1;
						return 1 > o.length ? this : this.each(function(t, e) {
							i = r ? e : e.parentNode, e = 0 == n ? e.nextSibling : 1 == n ? e.firstChild : 2 == n ? e : null;
							var s = S.contains(_.documentElement, i);
							o.forEach(function(t) {
								if(a) t = t.cloneNode(!0);
								else if(!i) return S(t).remove();
								i.insertBefore(t, e), s && w(t, function(t) {
									null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
								})
							})
						})
					}, S.fn[r ? e + "To" : "insert" + (n ? "Before" : "After")] = function(t) {
						return S(t)[e](this), this
					}
				}), W.Z.prototype = S.fn, W.uniq = T, W.deserializeValue = x, S.zepto = W, S
			}();
		window.Zepto = i, void 0 === window.$ && (window.$ = i),
			function(t) {
				function e(e, n, r) {
					var i = t.Event(n);
					return t(e).trigger(i, r), !i.isDefaultPrevented()
				}

				function n(t, n, r, i) {
					return t.global ? e(n || g, r, i) : void 0
				}

				function r(e) {
					e.global && 0 === t.active++ && n(e, null, "ajaxStart")
				}

				function i(e) {
					e.global && !--t.active && n(e, null, "ajaxStop")
				}

				function o(t, e) {
					var r = e.context;
					return e.beforeSend.call(r, t, e) !== !1 && n(e, r, "ajaxBeforeSend", [t, e]) !== !1 && void n(e, r, "ajaxSend", [t, e])
				}

				function a(t, e, r, i) {
					var o = r.context,
						a = "success";
					r.success.call(o, t, a, e), i && i.resolveWith(o, [t, a, e]), n(r, o, "ajaxSuccess", [e, r, t]), u(a, e, r)
				}

				function s(t, e, r, i, o) {
					var a = i.context;
					i.error.call(a, r, e, t), o && o.rejectWith(a, [r, e, t]), n(i, a, "ajaxError", [r, i, t || e]), u(e, r, i)
				}

				function u(t, e, r) {
					var o = r.context;
					r.complete.call(o, e, t), n(r, o, "ajaxComplete", [e, r]), i(r)
				}

				function c() {}

				function l(t) {
					return t && (t = t.split(";", 2)[0]), t && (t == j ? "html" : t == E ? "json" : x.test(t) ? "script" : w.test(t) && "xml") || "text"
				}

				function f(t, e) {
					return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
				}

				function h(e) {
					e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = f(e.url, e.data), e.data = void 0)
				}

				function p(e, n, r, i) {
					return t.isFunction(n) && (i = r, r = n, n = void 0), t.isFunction(r) || (i = r, r = void 0), {
						url: e,
						data: n,
						success: r,
						dataType: i
					}
				}

				function d(e, n, r, i) {
					var o, a = t.isArray(n),
						s = t.isPlainObject(n);
					t.each(n, function(n, u) {
						o = t.type(u), i && (n = r ? i : i + "[" + (s || "object" == o || "array" == o ? n : "") + "]"), !i && a ? e.add(u.name, u.value) : "array" == o || !r && "object" == o ? d(e, u, r, n) : e.add(n, u)
					})
				}
				var m, v, y = 0,
					g = window.document,
					b = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
					x = /^(?:text|application)\/javascript/i,
					w = /^(?:text|application)\/xml/i,
					E = "application/json",
					j = "text/html",
					S = /^\s*$/;
				t.active = 0, t.ajaxJSONP = function(e, n) {
					if(!("type" in e)) return t.ajax(e);
					var r, i, u = e.jsonpCallback,
						c = (t.isFunction(u) ? u() : u) || "jsonp" + ++y,
						l = g.createElement("script"),
						f = window[c],
						h = function(e) {
							t(l).triggerHandler("error", e || "abort")
						},
						p = {
							abort: h
						};
					return n && n.promise(p), t(l).on("load error", function(o, u) {
						clearTimeout(i), t(l).off().remove(), "error" != o.type && r ? a(r[0], p, e, n) : s(null, u || "error", p, e, n), window[c] = f, r && t.isFunction(f) && f(r[0]), f = r = void 0
					}), o(p, e) === !1 ? (h("abort"), p) : (window[c] = function() {
						r = arguments
					}, l.src = e.url.replace(/\?(.+)=\?/, "?$1=" + c), g.head.appendChild(l), e.timeout > 0 && (i = setTimeout(function() {
						h("timeout")
					}, e.timeout)), p)
				}, t.ajaxSettings = {
					type: "GET",
					beforeSend: c,
					success: c,
					error: c,
					complete: c,
					context: null,
					global: !0,
					xhr: function() {
						return new window.XMLHttpRequest
					},
					accepts: {
						script: "text/javascript, application/javascript, application/x-javascript",
						json: E,
						xml: "application/xml, text/xml",
						html: j,
						text: "text/plain"
					},
					crossDomain: !1,
					timeout: 0,
					processData: !0,
					cache: !0
				}, t.ajax = function(e) {
					var n = t.extend({}, e || {}),
						i = t.Deferred && t.Deferred();
					for(m in t.ajaxSettings) void 0 === n[m] && (n[m] = t.ajaxSettings[m]);
					r(n), n.crossDomain || (n.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(n.url) && RegExp.$2 != window.location.host), n.url || (n.url = "" + window.location), h(n);
					var u = n.dataType,
						p = /\?.+=\?/.test(n.url);
					if(p && (u = "jsonp"), n.cache !== !1 && (e && e.cache === !0 || "script" != u && "jsonp" != u) || (n.url = f(n.url, "_=" + Date.now())), "jsonp" == u) return p || (n.url = f(n.url, n.jsonp ? n.jsonp + "=?" : n.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(n, i);
					var d, y = n.accepts[u],
						g = {},
						b = function(t, e) {
							g[t.toLowerCase()] = [t, e]
						},
						x = /^([\w-]+:)\/\//.test(n.url) ? RegExp.$1 : window.location.protocol,
						w = n.xhr(),
						E = w.setRequestHeader;
					if(i && i.promise(w), n.crossDomain || b("X-Requested-With", "XMLHttpRequest"), b("Accept", y || "*/*"), (y = n.mimeType || y) && (y.indexOf(",") > -1 && (y = y.split(",", 2)[0]), w.overrideMimeType && w.overrideMimeType(y)), (n.contentType || n.contentType !== !1 && n.data && "GET" != n.type.toUpperCase()) && b("Content-Type", n.contentType || "application/x-www-form-urlencoded"), n.headers)
						for(v in n.headers) b(v, n.headers[v]);
					if(w.setRequestHeader = b, w.onreadystatechange = function() {
							if(4 == w.readyState) {
								w.onreadystatechange = c, clearTimeout(d);
								var e, r = !1;
								if(w.status >= 200 && 300 > w.status || 304 == w.status || 0 == w.status && "file:" == x) {
									u = u || l(n.mimeType || w.getResponseHeader("content-type")), e = w.responseText;
									try {
										"script" == u ? (0, eval)(e) : "xml" == u ? e = w.responseXML : "json" == u && (e = S.test(e) ? null : t.parseJSON(e))
									} catch(o) {
										r = o
									}
									r ? s(r, "parsererror", w, n, i) : a(e, w, n, i)
								} else s(w.statusText || null, w.status ? "error" : "abort", w, n, i)
							}
						}, o(w, n) === !1) return w.abort(), s(null, "abort", w, n, i), w;
					if(n.xhrFields)
						for(v in n.xhrFields) w[v] = n.xhrFields[v];
					var j = !("async" in n) || n.async;
					w.open(n.type, n.url, j, n.username, n.password);
					for(v in g) E.apply(w, g[v]);
					return n.timeout > 0 && (d = setTimeout(function() {
						w.onreadystatechange = c, w.abort(), s(null, "timeout", w, n, i)
					}, n.timeout)), w.send(n.data ? n.data : null), w
				}, t.get = function() {
					return t.ajax(p.apply(null, arguments))
				}, t.post = function() {
					var e = p.apply(null, arguments);
					return e.type = "POST", t.ajax(e)
				}, t.getJSON = function() {
					var e = p.apply(null, arguments);
					return e.dataType = "json", t.ajax(e)
				}, t.fn.load = function(e, n, r) {
					if(!this.length) return this;
					var i, o = this,
						a = e.split(/\s/),
						s = p(e, n, r),
						u = s.success;
					return a.length > 1 && (s.url = a[0], i = a[1]), s.success = function(e) {
						o.html(i ? t("<div>").html(e.replace(b, "")).find(i) : e), u && u.apply(o, arguments)
					}, t.ajax(s), this
				};
				var C = encodeURIComponent;
				t.param = function(t, e) {
					var n = [];
					return n.add = function(t, e) {
						this.push(C(t) + "=" + C(e))
					}, d(n, t, e), n.join("&").replace(/%20/g, "+")
				}
			}(i),
			function(t) {
				function e(t) {
					return t._zid || (t._zid = h++)
				}

				function n(t, n, o, a) {
					if(n = r(n), n.ns) var s = i(n.ns);
					return(v[e(t)] || []).filter(function(t) {
						return !(!t || n.e && t.e != n.e || n.ns && !s.test(t.ns) || o && e(t.fn) !== e(o) || a && t.sel != a)
					})
				}

				function r(t) {
					var e = ("" + t).split(".");
					return {
						e: e[0],
						ns: e.slice(1).sort().join(" ")
					}
				}

				function i(t) {
					return RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
				}

				function o(t, e) {
					return t.del && !g && t.e in b || !!e
				}

				function a(t) {
					return x[t] || g && b[t] || t
				}

				function s(n, i, s, u, l, h, p) {
					var d = e(n),
						m = v[d] || (v[d] = []);
					i.split(/\s/).forEach(function(e) {
						if("ready" == e) return t(document).ready(s);
						var i = r(e);
						i.fn = s, i.sel = l, i.e in x && (s = function(e) {
							var n = e.relatedTarget;
							return !n || n !== this && !t.contains(this, n) ? i.fn.apply(this, arguments) : f
						}), i.del = h;
						var d = h || s;
						i.proxy = function(t) {
							if(t = c(t), !t.isImmediatePropagationStopped()) {
								t.data = u;
								var e = d.apply(n, t._args == f ? [t] : [t].concat(t._args));
								return e === !1 && (t.preventDefault(), t.stopPropagation()), e
							}
						}, i.i = m.length, m.push(i), "addEventListener" in n && n.addEventListener(a(i.e), i.proxy, o(i, p))
					})
				}

				function u(t, r, i, s, u) {
					var c = e(t);
					(r || "").split(/\s/).forEach(function(e) {
						n(t, e, i, s).forEach(function(e) {
							delete v[c][e.i], "removeEventListener" in t && t.removeEventListener(a(e.e), e.proxy, o(e, u))
						})
					})
				}

				function c(e, n) {
					return(n || !e.isDefaultPrevented) && (n || (n = e), t.each(S, function(t, r) {
						var i = n[t];
						e[t] = function() {
							return this[r] = w, i && i.apply(n, arguments)
						}, e[r] = E
					}), (n.defaultPrevented !== f ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (e.isDefaultPrevented = w)), e
				}

				function l(t) {
					var e, n = {
						originalEvent: t
					};
					for(e in t) j.test(e) || t[e] === f || (n[e] = t[e]);
					return c(n, t)
				}
				var f, h = 1,
					p = Array.prototype.slice,
					d = t.isFunction,
					m = function(t) {
						return "string" == typeof t
					},
					v = {},
					y = {},
					g = "onfocusin" in window,
					b = {
						focus: "focusin",
						blur: "focusout"
					},
					x = {
						mouseenter: "mouseover",
						mouseleave: "mouseout"
					};
				y.click = y.mousedown = y.mouseup = y.mousemove = "MouseEvents", t.event = {
					add: s,
					remove: u
				}, t.proxy = function(n, r) {
					var i = 2 in arguments && p.call(arguments, 2);
					if(d(n)) {
						var o = function() {
							return n.apply(r, i ? i.concat(p.call(arguments)) : arguments)
						};
						return o._zid = e(n), o
					}
					if(m(r)) return i ? (i.unshift(n[r], n), t.proxy.apply(null, i)) : t.proxy(n[r], n);
					throw new TypeError("expected function")
				}, t.fn.bind = function(t, e, n) {
					return this.on(t, e, n)
				}, t.fn.unbind = function(t, e) {
					return this.off(t, e)
				}, t.fn.one = function(t, e, n, r) {
					return this.on(t, e, n, r, 1)
				};
				var w = function() {
						return !0
					},
					E = function() {
						return !1
					},
					j = /^([A-Z]|returnValue$|layer[XY]$)/,
					S = {
						preventDefault: "isDefaultPrevented",
						stopImmediatePropagation: "isImmediatePropagationStopped",
						stopPropagation: "isPropagationStopped"
					};
				t.fn.delegate = function(t, e, n) {
					return this.on(e, t, n)
				}, t.fn.undelegate = function(t, e, n) {
					return this.off(e, t, n)
				}, t.fn.live = function(e, n) {
					return t(document.body).delegate(this.selector, e, n), this
				}, t.fn.die = function(e, n) {
					return t(document.body).undelegate(this.selector, e, n), this
				}, t.fn.on = function(e, n, r, i, o) {
					var a, c, h = this;
					return e && !m(e) ? (t.each(e, function(t, e) {
						h.on(t, n, r, e, o)
					}), h) : (m(n) || d(i) || i === !1 || (i = r, r = n, n = f), (d(r) || r === !1) && (i = r, r = f), i === !1 && (i = E), h.each(function(h, d) {
						o && (a = function(t) {
							return u(d, t.type, i), i.apply(this, arguments)
						}), n && (c = function(e) {
							var r, o = t(e.target).closest(n, d).get(0);
							return o && o !== d ? (r = t.extend(l(e), {
								currentTarget: o,
								liveFired: d
							}), (a || i).apply(o, [r].concat(p.call(arguments, 1)))) : f
						}), s(d, e, i, r, n, c || a)
					}))
				}, t.fn.off = function(e, n, r) {
					var i = this;
					return e && !m(e) ? (t.each(e, function(t, e) {
						i.off(t, n, e)
					}), i) : (m(n) || d(r) || r === !1 || (r = n, n = f), r === !1 && (r = E), i.each(function() {
						u(this, e, r, n)
					}))
				}, t.fn.trigger = function(e, n) {
					return e = m(e) || t.isPlainObject(e) ? t.Event(e) : c(e), e._args = n, this.each(function() {
						"dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
					})
				}, t.fn.triggerHandler = function(e, r) {
					var i, o;
					return this.each(function(a, s) {
						i = l(m(e) ? t.Event(e) : e), i._args = r, i.target = s, t.each(n(s, e.type || e), function(t, e) {
							return o = e.proxy(i), !i.isImmediatePropagationStopped() && f
						})
					}), o
				}, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
					t.fn[e] = function(t) {
						return t ? this.bind(e, t) : this.trigger(e)
					}
				}), ["focus", "blur"].forEach(function(e) {
					t.fn[e] = function(t) {
						return t ? this.bind(e, t) : this.each(function() {
							try {
								this[e]()
							} catch(t) {}
						}), this
					}
				}), t.Event = function(t, e) {
					m(t) || (e = t, t = e.type);
					var n = document.createEvent(y[t] || "Events"),
						r = !0;
					if(e)
						for(var i in e) "bubbles" == i ? r = !!e[i] : n[i] = e[i];
					return n.initEvent(t, r, !0), c(n)
				}
			}(i),
			function(t) {
				t.fn.serializeArray = function() {
					var e, n, r = [];
					return t([].slice.call(this.get(0).elements)).each(function() {
						e = t(this), n = e.attr("type"), "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != n && "reset" != n && "button" != n && ("radio" != n && "checkbox" != n || this.checked) && r.push({
							name: e.attr("name"),
							value: e.val()
						})
					}), r
				}, t.fn.serialize = function() {
					var t = [];
					return this.serializeArray().forEach(function(e) {
						t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
					}), t.join("&")
				}, t.fn.submit = function(e) {
					if(e) this.bind("submit", e);
					else if(this.length) {
						var n = t.Event("submit");
						this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
					}
					return this
				}
			}(i),
			function(t) {
				"__proto__" in {} || t.extend(t.zepto, {
					Z: function(e, n) {
						return e = e || [], t.extend(e, t.fn), e.selector = n || "", e.__Z = !0, e
					},
					isZ: function(e) {
						return "array" === t.type(e) && "__Z" in e
					}
				});
				try {
					getComputedStyle(void 0)
				} catch(e) {
					var n = getComputedStyle;
					window.getComputedStyle = function(t) {
						try {
							return n(t)
						} catch(e) {
							return null
						}
					}
				}
			}(i),
			function(t) {
				function e(e) {
					return e = t(e), !(!e.width() && !e.height()) && "none" !== e.css("display")
				}

				function n(t, e) {
					t = t.replace(/=#\]/g, '="#"]');
					var n, r, i = s.exec(t);
					if(i && i[2] in a && (n = a[i[2]], r = i[3], t = i[1], r)) {
						var o = Number(r);
						r = isNaN(o) ? r.replace(/^["']|["']$/g, "") : o
					}
					return e(t, n, r)
				}
				var r = t.zepto,
					i = r.qsa,
					o = r.matches,
					a = t.expr[":"] = {
						visible: function() {
							return e(this) ? this : void 0
						},
						hidden: function() {
							return e(this) ? void 0 : this
						},
						selected: function() {
							return this.selected ? this : void 0
						},
						checked: function() {
							return this.checked ? this : void 0
						},
						parent: function() {
							return this.parentNode
						},
						first: function(t) {
							return 0 === t ? this : void 0
						},
						last: function(t, e) {
							return t === e.length - 1 ? this : void 0
						},
						eq: function(t, e, n) {
							return t === n ? this : void 0
						},
						contains: function(e, n, r) {
							return t(this).text().indexOf(r) > -1 ? this : void 0
						},
						has: function(t, e, n) {
							return r.qsa(this, n).length ? this : void 0
						}
					},
					s = RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),
					u = /^\s*>/,
					c = "Zepto" + +new Date;
				r.qsa = function(e, o) {
					return n(o, function(n, a, s) {
						try {
							var l;
							!n && a ? n = "*" : u.test(n) && (l = t(e).addClass(c), n = "." + c + " " + n);
							var f = i(e, n)
						} catch(h) {
							throw console.error("error performing selector: %o", o), h
						} finally {
							l && l.removeClass(c)
						}
						return a ? r.uniq(t.map(f, function(t, e) {
							return a.call(t, e, f, s)
						})) : f
					})
				}, r.matches = function(t, e) {
					return n(e, function(e, n, r) {
						return !(e && !o(t, e) || n && n.call(t, null, r) !== t)
					})
				}
			}(i)
	}, {}]
}, {}, [1]);