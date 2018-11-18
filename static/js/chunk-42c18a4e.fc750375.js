(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-42c18a4e"],{"42f4":function(t,e,o){"use strict";o.r(e);var r=o("be94"),l=o("2f62"),n=(o("ac6a"),o("2ef0")),a={props:{type:{default:"log"},title:{default:""},value:{default:""}},computed:{className:function(){return"log"===this.type?"d2-error-log-list__expand--log":"d2-error-log-list__expand--error"}}},i=o("2877"),s=Object(i.a)(a,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"d2-error-log-list__expand",class:t.className},[o("p",{staticClass:"d2-error-log-list__expand-title"},[t._v(t._s(t.title))]),o("p",{staticClass:"d2-error-log-list__expand-value"},[t._v(t._s(""===t.value?"无数据":t.value))]),t._t("default")],2)},[],!1,null,null,null);s.options.__file="index.vue";var u={name:"d2-error-log-list",components:{ExpandItem:s.exports},computed:Object(r.a)({},Object(l.e)("d2admin",{logList:function(t){return t.log.list}}),{logReverse:function(){var t=this,e=[],o=this.logList.length;return this.logList.forEach(function(r,l){e.push(t.logList[o-1-l])}),e}}),methods:{get:n.get,filterType:function(t,e){return e.type===t},stackBeautify:function(t){return t?t.stack:""}}},c=(o("e032"),Object(i.a)(u,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.logReverse,border:"",stripe:"",size:"mini"}},[o("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return o("div",{staticClass:"d2-error-log-list__expand-group"},[o("expand-item",{attrs:{type:e.row.type,title:"类型",value:"log"===e.row.type?"日志":"异常"}}),o("expand-item",{attrs:{type:e.row.type,title:"内容",value:e.row.info}}),"error"===e.row.type?o("expand-item",{attrs:{type:"error",title:"报错组件",value:t.get(e.row.vm,"$vnode.tag","")}}):t._e(),"error"===e.row.type?o("expand-item",{attrs:{type:"error",title:"错误名称",value:t.get(e.row.err,"name","")}}):t._e(),"error"===e.row.type?o("expand-item",{attrs:{type:"error",title:"错误信息",value:t.get(e.row.err,"message","")}}):t._e(),"error"===e.row.type?o("expand-item",{attrs:{type:"error",title:"错误堆栈",value:"见下"}},[o("div",{staticStyle:{overflow:"auto"}},[o("pre",[t._v(t._s(t.stackBeautify(e.row.err)))])])]):t._e(),o("expand-item",{attrs:{type:e.row.type,title:"用户名",value:t.get(e.row.user,"name","")}}),o("expand-item",{attrs:{type:e.row.type,title:"uuid",value:e.row.uuid}}),o("expand-item",{attrs:{type:e.row.type,title:"token",value:e.row.token}}),o("expand-item",{attrs:{type:e.row.type,title:"页面地址",value:e.row.url}}),o("expand-item",{attrs:{type:e.row.type,title:"时间",value:e.row.time}})],1)}}])}),o("el-table-column",{attrs:{prop:"type",label:"类型",width:"80px",align:"center",filters:[{text:"日志",value:"log"},{text:"异常",value:"error"}],"filter-multiple":!1,"filter-method":t.filterType,"filter-placement":"bottom"},scopedSlots:t._u([{key:"default",fn:function(e){return["error"===e.row.type?o("el-tag",{attrs:{size:"mini",type:"danger"}},[o("d2-icon",{attrs:{name:"bug"}}),t._v(" Bug\n      ")],1):o("el-tag",{attrs:{size:"mini",type:"info"}},[o("d2-icon",{attrs:{name:"dot-circle-o"}}),t._v(" Log\n      ")],1)]}}])}),o("el-table-column",{attrs:{label:"地址",prop:"url",width:"140px","show-overflow-tooltip":!0}}),o("el-table-column",{attrs:{label:"内容",prop:"info","show-overflow-tooltip":!0}}),o("el-table-column",{attrs:{label:"错误类型",width:"140px","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      "+t._s(t.get(e.row.err,"name",""))+"\n    ")]}}])}),o("el-table-column",{attrs:{label:"错误信息",width:"300px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      "+t._s(t.get(e.row.err,"message",""))+"\n    ")]}}])})],1)},[],!1,null,null,null));c.options.__file="index.vue";var p={components:{D2ErrorLogList:c.exports},data:function(){return{dialogVisible:!1}},computed:Object(r.a)({},Object(l.c)("d2admin",{logLength:"log/length",logLengthError:"log/lengthError"}),{tooltipContent:function(){return 0===this.logLength?"没有日志或异常":"".concat(this.logLength," 条日志").concat(this.logLengthError>0?" | 包含 ".concat(this.logLengthError," 个异常"):"")}}),methods:Object(r.a)({},Object(l.d)("d2admin/log",["clean"]),{handleClick:function(){this.logLength>0&&(this.dialogVisible=!0)},handleLogClean:function(){this.dialogVisible=!1,this.clean()}})},d=Object(i.a)(p,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-tooltip",{attrs:{effect:"dark",content:t.tooltipContent,placement:"bottom"}},[o("el-button",{staticClass:"d2-ml-0 d2-mr btn-text can-hover",attrs:{type:"text"},on:{click:t.handleClick}},[t.logLength>0?o("el-badge",{attrs:{max:99,value:t.logLengthError,"is-dot":0===t.logLengthError}},[o("d2-icon",{staticStyle:{"font-size":"20px"},attrs:{name:0===t.logLengthError?"dot-circle-o":"bug"}})],1):o("d2-icon",{staticStyle:{"font-size":"20px"},attrs:{name:"dot-circle-o"}})],1)],1),o("el-dialog",{attrs:{title:t.tooltipContent,fullscreen:!0,visible:t.dialogVisible,"append-to-body":!0},on:{"update:visible":function(e){t.dialogVisible=e}}},[o("div",{staticClass:"d2-mb-10"},[o("el-button",{attrs:{type:"danger",size:"mini"},on:{click:t.handleLogClean}},[o("d2-icon",{attrs:{name:"trash-o"}}),t._v("\n        清空\n      ")],1)],1),o("d2-error-log-list")],1)],1)},[],!1,null,null,null);d.options.__file="index.vue";e.default=d.exports},9983:function(t,e,o){},e032:function(t,e,o){"use strict";var r=o("9983");o.n(r).a}}]);