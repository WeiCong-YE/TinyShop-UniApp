(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/shipping"],{"121d":function(e,t,n){"use strict";n.r(t);var u=n("fec8"),a=n.n(u);for(var r in u)"default"!==r&&function(e){n.d(t,e,(function(){return u[e]}))}(r);t["default"]=a.a},"5d45":function(e,t,n){"use strict";var u=n("79de"),a=n.n(u);a.a},7609:function(e,t,n){"use strict";(function(e){n("6cdc"),n("921b");u(n("66fd"));var t=u(n("d547"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"79de":function(e,t,n){},b04d:function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return a}))},d547:function(e,t,n){"use strict";n.r(t);var u=n("b04d"),a=n("121d");for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("5d45");var i=n("2877"),o=Object(i["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=o.exports},fec8:function(e,t,n){"use strict";(function(e,u){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("a34a")),r=o(n("8f09")),i=n("c4c8");function o(e){return e&&e.__esModule?e:{default:e}}function l(e,t,n,u,a,r,i){try{var o=e[r](i),l=o.value}catch(c){return void n(c)}o.done?t(l):Promise.resolve(l).then(u,a)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(u,a){var r=e.apply(t,n);function i(e){l(r,u,a,i,o,"next",e)}function o(e){l(r,u,a,i,o,"throw",e)}i(void 0)}))}}var f=function(){return n.e("components/empty").then(n.bind(null,"d138"))},s=function(){return n.e("components/mpvue-picker/mpvuePicker").then(n.bind(null,"13f1"))},v={components:{mpvuePicker:s,empty:f},data:function(){return{shippingDetail:{},shippingTimeLine:[]}},filters:{time:function(e){return 0==e?"暂未操作":(0,r.default)(1e3*e).format("YYYY-MM-DD HH:mm:ss")},orderStatusFilter:function(e){var t=null,n=[{key:0,value:"待付款"},{key:1,value:"待发货"},{key:2,value:"已发货"},{key:3,value:"已收货"},{key:4,value:"已完成"},{key:-1,value:"退货申请"},{key:-2,value:"退款中"},{key:-3,value:"退款完成"},{key:-4,value:"已关闭"},{key:-5,value:"撤销申请"}];return n.forEach((function(n){n.key==e&&(t=n.value)})),t},filterProductStatus:function(e){var t=null;if(0!==parseInt(e.refund_status,10)){var n=[{key:1,value:"退款申请"},{key:2,value:"等待退货"},{key:3,value:"等待确认收货"},{key:4,value:"等待确认退款"},{key:5,value:"同意退款"},{key:-1,value:"退款已拒绝"},{key:-2,value:"退款已关闭"},{key:-3,value:"退款不通过"}];n.forEach((function(n){n.key==e.refund_status&&(t=n.value)}))}else if(4===parseInt(e.order_status,10)){var u=[{key:0,value:"未评价"},{key:1,value:"已评价"},{key:2,value:"已追评"}];u.forEach((function(n){n.key==e.is_evaluate&&(t=n.value)}))}else{var a=[{key:0,value:"待付款"},{key:1,value:"待发货"},{key:2,value:"已发货"},{key:3,value:"已收货"},{key:4,value:"已完成"},{key:-1,value:"退货申请"},{key:-2,value:"退款中"},{key:-3,value:"退款完成"},{key:-4,value:"已关闭"},{key:-5,value:"撤销申请"}];a.forEach((function(n){n.key==e.order_status&&(t=n.value)}))}return t},filterShippingType:function(e){var t=["","物流配送","买家自提","本地配送"];return t[parseInt(e,10)]}},onLoad:function(e){this.initData(e)},methods:{navTo:function(t){e.navigateTo({url:t})},initData:function(e){this.getOrderDetail(e.id)},getOrderDetail:function(){var t=c(a.default.mark((function t(n){var r=this;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.showLoading({title:"加载中..."}),t.next=3,this.$get("".concat(i.orderProductExpressDetails),{order_id:n}).then((function(e){e.data.data.forEach((function(e){var t=[];e.trace.forEach((function(e){t.push({time:e.datetime,value:e.remark})})),e.trace=t})),r.shippingDetail=e.data})).catch((function(e){console.log(u(e," at pages/order/shipping.vue:202"))}));case 3:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}()}};t.default=v}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["7609","common/runtime","common/vendor"]]]);