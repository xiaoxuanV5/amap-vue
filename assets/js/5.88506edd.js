(window.webpackJsonp=window.webpackJsonp||[]).push([[5,13],{519:function(t,e,s){},538:function(t,e,s){"use strict";var a=s(519);s.n(a).a},539:function(t,e,s){},550:function(t,e,s){"use strict";s.r(e);var a=s(65),i={name:"MyCustomMapComponent",mixins:[a.d],data:()=>({mode:"search",query:"",searching:!1,tips:[],results:[],total:0,hover:null,position:null,pageIndex:1,pageSize:20}),async mounted(){await Object(a.c)(["AMap.AutoComplete","AMap.PlaceSearch"]),this.ps=new AMap.PlaceSearch({pageSize:this.pageSize}),this.ac=new AMap.AutoComplete},methods:{async search(t=!1){this.mode="result",t&&(this.results=[],this.total=0,this.pageIndex=1,this.ps.setPageIndex(1)),this.searching=!0;const{query:e}=this;this.ps.search(e,(t,s)=>{this.searching=!1,e===this.query&&("complete"===t&&s.poiList?(this.results=s.poiList.pois,this.total=s.poiList.count,this.fitView()):(this.results=[],this.total=0))})},async autoComplete(t){t?this.ac.search(t,(e,s)=>{t===this.query&&("complete"===e&&s.tips?this.tips=Array.from(new Set(s.tips.map(t=>t.name))):this.tips=[])}):this.tips=[]},focus(t){this.hover=t,this.$map.setCenter([t.location.lng,t.location.lat])},fitView(){requestAnimationFrame(()=>{this.$map.setFitView(null,!1,[0,0,300,0])})},reset(){this.ps.setPageIndex(1),this.results=[],this.tips=[],this.total=0,this.mode="search"}},watch:{pageIndex(t){this.ps.setPageIndex(t),this.search(!1)}}},o=(s(538),s(64)),n=Object(o.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"my-custom-map-component"},[t._l(t.results,(function(e){return s("amap-marker",{key:e.id,ref:"markers",refInFor:!0,attrs:{position:[e.location.lng,e.location.lat],label:{content:e===t.hover?e.name:"",direction:"bottom"},"z-index":e===t.hover?110:100},on:{mouseover:function(s){t.hover=e},mouseout:function(e){t.hover=null}}})})),t._v(" "),s("a-card",{staticClass:"result-panel",attrs:{"head-style":{padding:"0 12px"},"body-style":{"max-height":"450px","overflow-y":"scroll",padding:"0 12px 24px"}}},[s("template",{slot:"title"},["search"===t.mode?[s("a-input-group",{staticStyle:{display:"flex"},attrs:{compact:""}},[s("a-auto-complete",{staticStyle:{flex:"1"},attrs:{"data-source":t.tips,placeholder:"输入关键词"},on:{search:t.autoComplete},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}}),t._v(" "),s("a-button",{attrs:{disabled:!t.query,type:"primary"},on:{click:function(e){return t.search(!0)}}},[t._v("\n            搜索\n          ")])],1)]:t._e(),t._v(" "),"result"===t.mode?[s("div",{staticClass:"result-title"},[s("a-button",{staticStyle:{"margin-right":"6px"},attrs:{icon:"left"},on:{click:t.reset}}),t._v(" "),s("span",{staticClass:"count"},[t._v("共 "+t._s(t.searching?"...":t.total)+" 条结果")])],1)]:t._e()],2),t._v(" "),"result"===t.mode?s("a-list",{staticClass:"result-list",attrs:{"data-source":t.results,"item-layout":"vertical",size:"small"},scopedSlots:t._u([{key:"renderItem",fn:function(e){return s("a-list-item",{key:e.id},[s("a-list-item-meta",{attrs:{description:e.address}},[s("span",{staticStyle:{cursor:"pointer"},attrs:{slot:"title"},on:{click:function(s){return t.focus(e)}},slot:"title"},[t._v(t._s(e.name))])])],1)}}],null,!1,3825972152)},[t.total>0?s("a-pagination",{attrs:{slot:"header","page-size":t.pageSize,total:t.total,size:"small"},slot:"header",model:{value:t.pageIndex,callback:function(e){t.pageIndex=e},expression:"pageIndex"}}):t._e(),t._v(" "),t._v(" "),t.total>0?s("a-pagination",{attrs:{slot:"footer","page-size":t.pageSize,total:t.total,size:"small"},slot:"footer",model:{value:t.pageIndex,callback:function(e){t.pageIndex=e},expression:"pageIndex"}}):t._e()],1):t._e()],2)],2)}),[],!1,null,"ad80fa4a",null);e.default=n.exports},573:function(t,e,s){"use strict";var a=s(539);s.n(a).a},604:function(t,e,s){"use strict";s.r(e);var a={components:{MyCustomMapComponent:s(550).default}},i=(s(573),s(64)),o=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"example-custom-extension"},[e("amap",{attrs:{"is-hotspot":!1,"show-indoor-map":!1,center:[116.473778,39.990661],zoom:13,"map-style":"amap://styles/whitesmoke"}},[e("my-custom-map-component")],1)],1)}),[],!1,null,"1b23f96c",null);e.default=o.exports}}]);