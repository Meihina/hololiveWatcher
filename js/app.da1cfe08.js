(function(e){function t(t){for(var n,a,r=t[0],c=t[1],l=t[2],d=0,g=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&g.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(g.length)g.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],n=!0,r=1;r<i.length;r++){var c=i[r];0!==s[c]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=i[0]))}return e}var n={},s={app:0},o=[];function a(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=n,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(i,n,function(t){return e[t]}.bind(null,n));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0177":function(e,t,i){e.exports=i.p+"img/sensei.0ed95b31.jpg"},"02dc":function(e,t,i){e.exports=i.p+"img/matsuri.1986aade.jpg"},"034f":function(e,t,i){"use strict";var n=i("85ec"),s=i.n(n);s.a},"0d35":function(e,t,i){e.exports=i.p+"img/subaru.f56b6758.jpg"},"16a3":function(e,t,i){e.exports=i.p+"img/shion.303ec6e6.jpg"},1897:function(e,t,i){e.exports=i.p+"img/tiange.ae73c08d.jpg"},"1f00":function(e,t,i){e.exports=i.p+"img/kongma.b4c18f98.jpg"},"366c":function(e,t,i){e.exports=i.p+"img/usada.e6fc2d47.jpg"},"38f6":function(e,t,i){e.exports=i.p+"img/meru.93d2ae03.jpg"},4281:function(e,t,i){e.exports=i.p+"img/suise.3823db80.jpg"},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{style:{width:e.PageWidth},attrs:{id:"app"}},[i("navbar"),i("div",{class:e.isPhone?"vtuber_list_phone":"vtuber_list"},e._l(e.vtuber_msg,(function(t,n){return i("div",{key:n,staticClass:"vtuber_card"},[i("a",{attrs:{target:"_blank",href:"https://live.bilibili.com/"+e.vtuber_msg[n].room}},[i("div",{staticClass:"real_vtuber_card",style:{zIndex:e.Zindex-n}},[i("div",{staticClass:"card_1"},[i("img",{attrs:{src:e.vtuber_msg[n].face}}),i("div",{staticClass:"vt_name"},[e._v(e._s(t.name))]),i("div",{staticClass:"vt_sign"},[e._v(e._s(t.sign))]),i("div",{staticClass:"isLive",class:"未开播"==t.isLiving?"no_open_boder":"轮播中"==t.isLiving?"roll_open_boder":""},[i("div",{staticClass:"circle",class:"未开播"==t.isLiving?"no_open":"轮播中"==t.isLiving?"roll_open":""}),i("div",{staticClass:"isLive_text",class:"未开播"==t.isLiving?"no_open_text":"轮播中"==t.isLiving?"roll_open_text":""},[e._v(e._s(t.isLiving))])])]),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.isPhone,expression:"!isPhone"}],staticClass:"living"},[e._v("最近在播 ")]),i("div",{staticClass:"TV_icon"}),i("div",{staticClass:"TV_icon2"}),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.isPhone,expression:"!isPhone"}],staticClass:"title"},[e._v(e._s(t.title))]),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.isPhone,expression:"!isPhone"}],staticClass:"recent",class:"item"+n},[i("img",{staticClass:"recent_img",attrs:{src:""}})])])])])})),0)],1)},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:{},attrs:{id:"navbar"}},[n("div",{attrs:{id:"left"}},[n("img",{staticClass:"holoImg",attrs:{src:i("c97a")}}),n("span",{staticClass:"text",class:e.isPhone?"text_isPhone":""},[e._v("HololiveGuider")])])])},r=[],c={data:function(){return{isPhone:!1,navWdith:0}},mounted:function(){var e=this;this.navWdith=document.documentElement.clientWidth+"px",document.body.style.width=document.documentElement.clientWidth+"px";var t=document.documentElement.offsetWidth||document.body.offsetWidth;t<480&&(this.isPhone=!0),window.onresize=function(){(document.documentElement.offsetWidth>parseInt(e.navWdith)||document.body.offsetWidth>parseInt(e.PageWidth))&&(e.navWdith=document.documentElement.clientWidth+"px",document.body.style.width=document.documentElement.clientWidth+"px"),document.documentElement.offsetWidth<480||document.body.offsetWidth<480?e.isPhone=!0:e.isPhone=!1}},watch:{},methods:{}},l=c,u=(i("7824"),i("2877")),d=Object(u["a"])(l,a,r,!1,null,"0ee392ca",null),g=d.exports,f={name:"Home",components:{navbar:g},data:function(){return{isPhone:!1,Zindex:100,PageWidth:0,ReqOver:0,switchIndex:0,vtuber_id:["21584153","21132965","21144047","13946381","8899503","14917277","11588230","190577","21560356","21129632","21752681","21545232","21133979","21130785","21107534","4664126","21219990","14275133","21131813","21420932","21421141","21267062","21572617","21752694","21752686","21583736","21752719","21752710"],vtuber_msg:[{name:"宝钟玛琳",isLiving:"未开播",sign:"Hololive Fantasy所属，宝钟海贼团船长~出航〜",title:"",face:i("681d"),url:""},{name:"紫咲诗音",isLiving:"未开播",sign:"holoIive二期生，魔法使紫咲诗音！",title:"",face:i("16a3"),url:""},{name:"樱巫女",isLiving:"未开播",sign:"hololive所属的虚拟巫女(❀ㆆ ㆆ)و✧喜欢鲷鱼烧的精英女孩子!",title:"",face:i("8f9f"),url:""},{name:"夏色祭",isLiving:"未开播",sign:"holoIive一期生，虚拟女子高中生！喜欢祭典之类的有趣的活动！",title:"",face:i("02dc"),url:""},{name:"时乃空",isLiving:"未开播",sign:"HOLOLIVE所属,虚拟偶像！",title:"",face:i("1f00"),url:""},{name:"阿库娅",isLiving:"未开播",sign:"holoIive二期生、虚拟女仆、湊(みなと)あくあ！",title:"",face:i("b60c"),url:""},{name:"白上吹雪",isLiving:"未开播",sign:"hololive一期生，虚拟白发狐狸白上吹雪是也(^・ω・^§)ﾉ",title:"",face:i("d517"),url:""},{name:"星街彗星",isLiving:"未开播",sign:"HOLOLIVE所属，虚拟偶像星街彗星！",title:"",face:i("4281"),url:""},{name:"兔田佩可拉",isLiving:"未开播",sign:"hololivetv所属VTuber三期生 兔田佩克拉！",title:"",face:i("366c"),url:""},{name:"大空昂",isLiving:"未开播",sign:"holo-live二期生，我是E-Sports部经理大空昴的说!",title:"",face:i("0d35"),url:""},{name:"天音彼方",isLiving:"未开播",sign:"HOLOLIVE所属四期生，在天界学园上学的天使！",title:"",face:i("1897"),url:""},{name:"润羽露西娅",isLiving:"未开播",sign:"hololive三期生 润羽露西娅 ʚїɞ我乃见习死灵法师 死者苏生之奇迹† Fantasy！！",title:"",face:i("6f6c"),url:""},{name:"大神澪",isLiving:"未开播",sign:"hololivegamers所属，喜欢游戏的虚拟狼 大神澪！",title:"",face:i("8302"),url:""},{name:"百鬼绫目",isLiving:"未开播",sign:"Hololive所属二期生虚拟鬼神￤百鬼绫目（Nakiri Ayame）",title:"",face:i("e8bc"),url:""},{name:"癒月巧可",isLiving:"未开播",sign:"hololive二期生，来自魔界的虚拟保健医生癒月巧可。",title:"",face:i("0177"),url:""},{name:"萝卜子",isLiving:"未开播",sign:"hololive所属，Virtual Robot",title:"",face:i("e430"),url:""},{name:"亚绮罗森",isLiving:"未开播",sign:"hololive一期生，来自异世界的虚拟治愈系半精灵",title:"",face:i("c370"),url:""},{name:"赤井心",isLiving:"未开播",sign:"holoIive一期生，虚拟女子留学生，赤井心哒呦～(๑•̀ㅂ•́)و✧ ",title:"",face:i("a3c9"),url:""},{name:"夜空梅露",isLiving:"未开播",sign:"holoIive一期生，喜欢果汁而不是血的吸血鬼↝",title:"",face:i("38f6"),url:""},{name:"猫又小粥",isLiving:"未开播",sign:"hololive-gamers所属，饭团屋的婆婆所饲养的猫猫❖",title:"",face:i("db4c"),url:""},{name:"戌神沁音",isLiving:"未开播",sign:"hololive-gamers所属，住在都市中某面包店里的虚拟狗狗，戌神沁音哒！",title:"",face:i("c5bd"),url:""},{name:"AZKi",isLiving:"未开播",sign:"hololive lNNK Music成员， Vsinger的AZKi，我很喜欢唱歌。",title:"",face:i("6828"),url:""},{name:"不知火芙蕾雅",isLiving:"未开播",sign:"我是hololive所属3期生 半精灵不知火芙蕾雅哦～",title:"",face:i("cc68"),url:""},{name:"角卷绵芽",isLiving:"未开播",sign:"HOLOLIVE所属四期生角卷绵芽！一边做着吟游诗人，一边悠然旅行的羊。",title:"",face:i("6606"),url:""},{name:"桐生可可",isLiving:"未开播",sign:"Hololive所属4期生，对人类文化很感兴趣，目前在日留学，来自异世界！",title:"",face:i("66dc"),url:""},{name:"白银诺艾尔",isLiving:"未开播",sign:"沉着稳重的同时，又有着想用蛮力解决一切的一面！！ 憧憬强大之人而进行武者修行的轻飘飘猛男女骑士！",title:"",face:i("de2e"),url:""},{name:"姬森璐娜",isLiving:"未开播",sign:"HOLOLIVE所属四期生。点心国的公主。",title:"",face:i("98cd"),url:""},{name:"常暗永远",isLiving:"未开播",sign:"HOLOLIVE所属四期生。为了成长为独当一面的恶魔来到人间学习。",title:"",face:i("dd64"),url:""}]}},watch:{ReqOver:function(e){if(e===this.vtuber_msg.length){for(var t=0;t<this.vtuber_msg.length;t++)if("直播中"===this.vtuber_msg[t].isLiving){var i=[this.vtuber_msg[t],this.vtuber_msg[this.switchIndex]];this.vtuber_msg[this.switchIndex]=i[0],this.vtuber_msg[t]=i[1],this.switchIndex++}for(t=0;t<this.vtuber_msg.length;t++){var n="item"+t;this.$el.querySelector("."+n).querySelector(".recent_img").src=this.vtuber_msg[t].url}}}},mounted:function(){var e=this;this.fetchTogetData(),this.PageWidth=document.documentElement.clientWidth+"px",document.body.style.width=document.documentElement.clientWidth+"px",parseInt(this.PageWidth)<window.screen.availWidth-40&&(this.PageWidth=window.screen.availWidth-40+"px",document.body.style.width=window.screen.availWidth-40+"px");var t=document.documentElement.offsetWidth||document.body.offsetWidth;t<480&&(this.isPhone=!0),window.onresize=function(){(document.documentElement.offsetWidth>parseInt(e.PageWidth)||document.body.offsetWidth>parseInt(e.PageWidth))&&(e.PageWidth=document.documentElement.clientWidth+"px",document.body.style.width=document.documentElement.clientWidth+"px"),document.documentElement.offsetWidth<480||document.body.offsetWidth<480?e.isPhone=!0:e.isPhone=!1}},methods:{fetchTogetData:function(){for(var e=0;e<this.vtuber_id.length;e++)(function(e,t){var i="https://cors.zme.ink/https://api.live.bilibili.com/room/v1/Room/get_info?id="+t.vtuber_id[e];t.$axios.get(i).then((function(i){t.isLiving_status(i.data.data,e,t.vtuber_id[e]),console.log(i)}))})(e,this)},isLiving_status:function(e,t,i){var n=e;0===n.live_status?this.vtuber_msg[t].isLiving="未开播":1===n.live_status?this.vtuber_msg[t].isLiving="直播中":this.vtuber_msg[t].isLiving="轮播中",this.vtuber_msg[t].room=i,this.vtuber_msg[t].title=n.title,this.vtuber_msg[t].url="https://images.weserv.nl/?url="+n.keyframe,this.ReqOver++}}},m=f,v=(i("034f"),i("9d8a"),Object(u["a"])(m,s,o,!1,null,"5ae6bbca",null)),p=v.exports,h=i("8c4f");n["a"].use(h["a"]);var b=[],_=new h["a"]({mode:"history",base:"",routes:b}),x=_,L=i("2f62");n["a"].use(L["a"]);var y=new L["a"].Store({state:{},mutations:{},actions:{},modules:{}}),w=i("bc3a"),j=i.n(w),W=i("4328"),P=i.n(W);n["a"].config.productionTip=!1,n["a"].prototype.$qs=P.a,n["a"].prototype.$axios=j.a,new n["a"]({router:x,store:y,render:function(e){return e(p)}}).$mount("#app")},6606:function(e,t,i){e.exports=i.p+"img/watame.fc508bee.jpg"},"66dc":function(e,t,i){e.exports=i.p+"img/koko.24dea75d.jpg"},"681d":function(e,t,i){e.exports=i.p+"img/marin.27344af4.jpg"},6828:function(e,t,i){e.exports=i.p+"img/azuki.a0c6f900.jpg"},"6f6c":function(e,t,i){e.exports=i.p+"img/nanodesu.e789fb08.jpg"},7824:function(e,t,i){"use strict";var n=i("de1e"),s=i.n(n);s.a},8302:function(e,t,i){e.exports=i.p+"img/mio.c3be6129.jpg"},"85ec":function(e,t,i){},"8f9f":function(e,t,i){e.exports=i.p+"img/miko.84335d07.jpg"},"98cd":function(e,t,i){e.exports=i.p+"img/runa.97240f31.jpg"},"9d8a":function(e,t,i){"use strict";var n=i("ca13"),s=i.n(n);s.a},a3c9:function(e,t,i){e.exports=i.p+"img/hato.1c681824.jpg"},b60c:function(e,t,i){e.exports=i.p+"img/aqua.ff7bd90b.jpg"},c370:function(e,t,i){e.exports=i.p+"img/aki.67332f9f.jpg"},c5bd:function(e,t,i){e.exports=i.p+"img/korone.2902128b.jpg"},c97a:function(e,t,i){e.exports=i.p+"img/holo.4cd32ad8.png"},ca13:function(e,t,i){},cc68:function(e,t,i){e.exports=i.p+"img/furea.10431b44.jpg"},d517:function(e,t,i){e.exports=i.p+"img/fbk.8286738f.jpg"},db4c:function(e,t,i){e.exports=i.p+"img/okayu.15019a63.jpg"},dd64:function(e,t,i){e.exports=i.p+"img/cyoan.c1729b8d.jpg"},de1e:function(e,t,i){},de2e:function(e,t,i){e.exports=i.p+"img/noeru.7fcc47d8.jpg"},e430:function(e,t,i){e.exports=i.p+"img/robo.deda02f6.jpg"},e8bc:function(e,t,i){e.exports=i.p+"img/ayame.601fdffc.jpg"}});
//# sourceMappingURL=app.da1cfe08.js.map