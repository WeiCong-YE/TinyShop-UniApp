(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set/invoice/invoice"],{"25d7":function(t,n,e){},2759:function(t,n,e){"use strict";e.r(n);var i=e("70fa"),o=e("c081");for(var c in o)"default"!==c&&function(t){e.d(n,t,(function(){return o[t]}))}(c);e("420e");var r=e("2877"),a=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,null,null);n["default"]=a.exports},"406f":function(t,n,e){"use strict";(function(t){e("6cdc"),e("921b");i(e("66fd"));var n=i(e("2759"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"420e":function(t,n,e){"use strict";var i=e("25d7"),o=e.n(i);o.a},"4ce2":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=c(e("a34a")),o=e("802d");function c(t){return t&&t.__esModule?t:{default:t}}function r(t){return s(t)||u(t)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function s(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}function f(t,n,e,i,o,c,r){try{var a=t[c](r),u=a.value}catch(s){return void e(s)}a.done?n(u):Promise.resolve(u).then(i,o)}function l(t){return function(){var n=this,e=arguments;return new Promise((function(i,o){var c=t.apply(n,e);function r(t){f(c,i,o,r,a,"next",t)}function a(t){f(c,i,o,r,a,"throw",t)}r(void 0)}))}}var d=function(){return e.e("components/rf-load-more/rf-load-more").then(e.bind(null,"f97d"))},v={components:{rfLoadMore:d},data:function(){return{timeOutEvent:0,source:0,invoiceList:[],page:1,loadingType:"more",loading:!0}},onShow:function(){this.initData()},onLoad:function(t){this.source=t.source},onPullDownRefresh:function(){this.page=1,this.invoiceList.length=0,this.getInvoiceList("refresh")},onReachBottom:function(){this.page++,this.getInvoiceList()},methods:{goTouchStart:function(n){var e=this;clearTimeout(this.timeOutEvent),this.timeOutEvent=0,this.timeOutEvent=setTimeout((function(){t.showModal({content:"确定要删除该收货地址吗",success:function(t){t.confirm&&e.$del("".concat(o.invoiceDel,"?id=").concat(n)).then((function(t){e.page=1,e.invoiceList.length=0,e.getInvoiceList()}))}})}),500)},goTouchEnd:function(){clearTimeout(this.timeOutEvent),this.timeOutEvent},goTouchMove:function(){clearTimeout(this.timeOutEvent),this.timeOutEvent=0},initData:function(){this.page=1,this.invoiceList.length=0,this.getInvoiceList()},getInvoiceList:function(){var t=l(i.default.mark((function t(){var n=this;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$get("".concat(o.invoiceList),{page:this.page}).then((function(t){n.loading=!1,n.loadingType=10===t.data.length?"more":"nomore",n.invoiceList=[].concat(r(n.invoiceList),r(t.data))})).catch((function(){n.loading=!1}));case 2:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),checkAddress:function(n){1==this.source&&(this.$api.prePage().invoiceItem=n,t.navigateBack())},addInvoice:function(n,e){t.navigateTo({url:"/pages/set/invoice/invoiceManage?type=".concat(n,"&id=").concat(e&&e.id||void 0)})},refreshList:function(t,n){this.invoiceList.unshift(t)}}};n.default=v}).call(this,e("6e42")["default"])},"70fa":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.invoiceList,(function(n,e){var i=parseInt(n.is_default,10),o=parseInt(n.type,10);return{$orig:t.__get_orig(n),m0:i,m1:o}})));t.$mp.data=Object.assign({},{$root:{l0:e}})},o=[];e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return o}))},c081:function(t,n,e){"use strict";e.r(n);var i=e("4ce2"),o=e.n(i);for(var c in i)"default"!==c&&function(t){e.d(n,t,(function(){return i[t]}))}(c);n["default"]=o.a}},[["406f","common/runtime","common/vendor"]]]);