(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/dianyingpingjia/add-or-update"],{"3b3b":function(n,i,e){"use strict";e.r(i);var t=e("6402"),a=e.n(t);for(var r in t)"default"!==r&&function(n){e.d(i,n,(function(){return t[n]}))}(r);i["default"]=a.a},"418b":function(n,i,e){"use strict";e.r(i);var t=e("9dae"),a=e("3b3b");for(var r in a)"default"!==r&&function(n){e.d(i,n,(function(){return a[n]}))}(r);e("4404");var u,o=e("f0c5"),s=Object(o["a"])(a["default"],t["b"],t["c"],!1,null,"67a1b3be",null,!1,t["a"],u);i["default"]=s.exports},4404:function(n,i,e){"use strict";var t=e("8ffe"),a=e.n(t);a.a},"46bd":function(n,i,e){"use strict";(function(n){e("0d1d"),e("921b");t(e("66fd"));var i=t(e("418b"));function t(n){return n&&n.__esModule?n:{default:n}}n(i.default)}).call(this,e("543d")["createPage"])},6402:function(n,i,e){"use strict";(function(n){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var t=a(e("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,i,e,t,a,r,u){try{var o=n[r](u),s=o.value}catch(g){return void e(g)}o.done?i(s):Promise.resolve(s).then(t,a)}function u(n){return function(){var i=this,e=arguments;return new Promise((function(t,a){var u=n.apply(i,e);function o(n){r(u,t,a,o,s,"next",n)}function s(n){r(u,t,a,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(function(){return resolve(e("3576"))}.bind(null,e)).catch(e.oe)},s={data:function(){return{ruleForm:{dingdanbianhao:"",dianyingmingcheng:"",tupian:"",leixing:"",dianyingpingfen:"",dianyingpingjia:"",pingjiariqi:"",yonghuming:"",sfsh:"",shhf:"",userid:""},dianyingmingchengOptions:[],dianyingmingchengIndex:0,dianyingpingfenOptions:[],dianyingpingfenIndex:0,user:{},ro:{dingdanbianhao:!1,dianyingmingcheng:!1,tupian:!1,leixing:!1,dianyingpingfen:!1,dianyingpingjia:!1,pingjiariqi:!1,yonghuming:!1,sfsh:!1,shhf:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var i=u(t.default.mark((function i(e){var a,r,u,o;return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=n.getStorageSync("nowTable"),i.next=3,this.$api.session(a);case 3:return r=i.sent,this.user=r.data,this.ruleForm.yonghuming=this.user.yonghuming,i.next=8,this.$api.option("dianyingxinxi","dianyingmingcheng",{});case 8:if(r=i.sent,this.dianyingmingchengOptions=r.data,this.dianyingpingfenOptions="1,2,3,4,5,6,7,8,9,10".split(","),this.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){i.next=19;break}return this.ruleForm.id=e.id,i.next=17,this.$api.info("dianyingpingjia",this.ruleForm.id);case 17:r=i.sent,this.ruleForm=r.data;case 19:if(!e.cross){i.next=62;break}u=n.getStorageSync("crossObj"),i.t0=t.default.keys(u);case 22:if((i.t1=i.t0()).done){i.next=62;break}if(o=i.t1.value,"dingdanbianhao"!=o){i.next=28;break}return this.ruleForm.dingdanbianhao=u[o],this.ro.dingdanbianhao=!0,i.abrupt("continue",22);case 28:if("dianyingmingcheng"!=o){i.next=32;break}return this.ruleForm.dianyingmingcheng=u[o],this.ro.dianyingmingcheng=!0,i.abrupt("continue",22);case 32:if("tupian"!=o){i.next=36;break}return this.ruleForm.tupian=u[o],this.ro.tupian=!0,i.abrupt("continue",22);case 36:if("leixing"!=o){i.next=40;break}return this.ruleForm.leixing=u[o],this.ro.leixing=!0,i.abrupt("continue",22);case 40:if("dianyingpingfen"!=o){i.next=44;break}return this.ruleForm.dianyingpingfen=u[o],this.ro.dianyingpingfen=!0,i.abrupt("continue",22);case 44:if("dianyingpingjia"!=o){i.next=48;break}return this.ruleForm.dianyingpingjia=u[o],this.ro.dianyingpingjia=!0,i.abrupt("continue",22);case 48:if("pingjiariqi"!=o){i.next=52;break}return this.ruleForm.pingjiariqi=u[o],this.ro.pingjiariqi=!0,i.abrupt("continue",22);case 52:if("yonghuming"!=o){i.next=56;break}return this.ruleForm.yonghuming=u[o],this.ro.yonghuming=!0,i.abrupt("continue",22);case 56:if("userid"!=o){i.next=60;break}return this.ruleForm.userid=u[o],this.ro.userid=!0,i.abrupt("continue",22);case 60:i.next=22;break;case 62:this.styleChange();case 63:case"end":return i.stop()}}),i,this)})));function e(n){return i.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},dianyingmingchengChange:function(){var n=u(t.default.mark((function n(i){var e;return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.dianyingmingchengIndex=i.target.value,this.ruleForm.dianyingmingcheng=this.dianyingmingchengOptions[this.dianyingmingchengIndex],n.next=4,this.$api.follow("dianyingxinxi","dianyingmingcheng",{columnValue:this.ruleForm.dianyingmingcheng});case 4:e=n.sent,e.data.leixing&&(this.ruleForm.leixing=e.data.leixing);case 6:case"end":return n.stop()}}),n,this)})));function i(i){return n.apply(this,arguments)}return i}(),pingjiariqiChange:function(n){this.ruleForm.pingjiariqi=n.target.value,this.$forceUpdate()},dianyingpingfenChange:function(n){this.dianyingpingfenIndex=n.target.value,this.ruleForm.dianyingpingfen=this.dianyingpingfenOptions[this.dianyingpingfenIndex]},tupianTap:function(){var n=this;this.$api.upload((function(i){n.ruleForm.tupian=n.$base.url+"upload/"+i.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=u(t.default.mark((function n(){return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(this.ruleForm.userid){n.next=3;break}return this.$utils.msg("用户id不能为空"),n.abrupt("return");case 3:if(!this.ruleForm.id){n.next=8;break}return n.next=6,this.$api.update("dianyingpingjia",this.ruleForm);case 6:n.next=10;break;case 8:return n.next=10,this.$api.add("dianyingpingjia",this.ruleForm);case 10:this.$utils.msgBack("提交成功");case 11:case"end":return n.stop()}}),n,this)})));function i(){return n.apply(this,arguments)}return i}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var i=new Date,e=i.getFullYear(),t=i.getMonth()+1,a=i.getDate();return"start"===n?e-=60:"end"===n&&(e+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(e,"-").concat(t,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};i.default=s}).call(this,e("543d")["default"])},"8ffe":function(n,i,e){},"9dae":function(n,i,e){"use strict";var t,a=function(){var n=this,i=n.$createElement;n._self._c},r=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return t}))}},[["46bd","common/runtime","common/vendor"]]]);