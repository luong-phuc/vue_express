webpackJsonp([1],{NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n=(a("K3J8"),a("M4fF"),a("qb6w"),{render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Menu")]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavAltMarkup"}},[a("div",{staticClass:"navbar-nav"},[a("router-link",{staticClass:"nav-item nav-link active",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),a("router-link",{staticClass:"nav-item nav-link active",attrs:{to:"/new-user"}},[t._v("New User")]),t._v(" "),a("router-link",{staticClass:"nav-item nav-link active",attrs:{to:"/about"}},[t._v("About")])],1)]),t._v(" "),t._m(1)]),t._v(" "),a("main",{staticClass:"container-fluid pt-2",attrs:{role:"main"}},[a("div",{staticClass:"swatch-light"},[a("router-view")],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticClass:"form-inline my-2 my-lg-0"},[e("input",{staticClass:"form-control mr-sm-2",attrs:{type:"text",placeholder:"Search","aria-label":"Search"}}),this._v(" "),e("button",{staticClass:"btn btn-secondary my-2 my-sm-0"},[this._v("Search")])])}]});var r=a("VU/8")({name:"App"},n,!1,function(t){a("Rete")},null,null).exports,i=a("/ocq"),l={name:"BreadCrumb",props:{title:[String,Array]},computed:{isArray:function(){return _.isArray(this.title)}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{attrs:{"aria-label":"breadcrumb"}},[t.isArray?a("ol",{staticClass:"breadcrumb"},t._l(t.title,function(e){return a("li",{staticClass:"breadcrumb-item",attrs:{"aria-current":"page"}},[t._v(t._s(e))])}),0):a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.title))])])])},staticRenderFns:[]},u=a("VU/8")(l,o,!1,null,null,null).exports,c={name:"HelloWorld",data:function(){return{title:"Home",message:"Hello Vue!",answer:"waiting input......",message_2:"Bạn đã mở trang này vào "+(new Date).toLocaleString(),seen:(new Date).getTime()%2,groceryList:[{id:1,text:"Cà pháo"},{id:2,text:"Mắm tôm"},{id:3,text:"Miễn ăn được là được"}]}},methods:{reverseMessage:function(){this.message=this.message.split(" ").reverse().join(" "),this.seen=(new Date).getTime()%2},getAnswer:function(){this.answer="thinking...."}},computed:{now:function(){return Date.now()}},watch:{message:function(t,e){this.answer="Waiting for you to stop typing...",this.debouncedGetAnswer()}},components:{BreadCrumb:u},created:function(){this.debouncedGetAnswer=_.debounce(this.getAnswer,500)}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("bread-crumb",{attrs:{title:t.title}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._v(" "),a("p",[t._v(t._s(t.answer))]),t._v(" "),a("button",{on:{click:t.reverseMessage}},[t._v("Reverse Message")]),t._v(" "),a("p",[t._v(t._s(t.message))]),t._v(" "),a("p",{attrs:{title:t.message_2}},[t._v("\n    Rê chuột lên đây một vài giây để xem thuộc tính `title` được bind! "+t._s(t.now)+"\n  ")]),t._v(" "),t.seen?a("p",[t._v("Thoắt ẩn thoắt hiện")]):t._e(),t._v(" "),a("ol",t._l(t.groceryList,function(e){return a("li",{key:e.id},[t._v(t._s(e.text))])}),0)],1)},staticRenderFns:[]};var v=a("VU/8")(c,m,!1,function(t){a("Y6jI")},"data-v-4b78fc48",null).exports,d={name:"About",data:function(){return{title:["About"],msg:"About"}},components:{BreadCrumb:u}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about"},[e("bread-crumb",{attrs:{title:this.title}})],1)},staticRenderFns:[]};var f=a("VU/8")(d,p,!1,function(t){a("v46d")},"data-v-6cf39238",null).exports,b={name:"NewUser",data:function(){return{title:["Home","Create User"],fullName:null,email:null,password:null}},methods:{},computed:{},watch:{},created:function(){this.id=1,this.name="LuongPhuc",this.sex="male"},components:{BreadCrumb:u}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"new-user"},[a("bread-crumb",{attrs:{title:t.title}}),t._v(" "),a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"inputFullName"}},[t._v("Full Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.fullName,expression:"fullName"}],staticClass:"form-control",attrs:{type:"email",id:"inputFullName","aria-describedby":"fullNameHelp",placeholder:"Enter full name",name:"fullName"},domProps:{value:t.fullName},on:{input:function(e){e.target.composing||(t.fullName=e.target.value)}}}),t._v(" "),a("small",{staticClass:"form-text text-muted",attrs:{id:"fullNameHelp"}},[t._v("Please input your full name")])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"inputEmail"}},[t._v("Email address")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail","aria-describedby":"emailHelp",placeholder:"Enter email",name:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),a("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[t._v("We'll never share your email with anyone else.")])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"inputPassword"}},[t._v("Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",name:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Submit")])]),t._v(" "),a("pre",[t._v("    "),a("span",[t._v(" Your information : ")]),t._v("\n    "),a("span",[t._v(" full name : "+t._s(t.fullName)+" ")]),t._v("\n    "),a("span",[t._v(" email : "+t._s(t.email)+" ")]),t._v("\n    "),a("span",[t._v(" password : ********* ")]),t._v("\n  ")])],1)},staticRenderFns:[]};var h=a("VU/8")(b,g,!1,function(t){a("y0iA")},"data-v-2fa3c391",null).exports;s.a.use(i.a);var w=new i.a({routes:[{path:"/",name:"HelloWorld",component:v},{path:"/about",name:"About",component:f},{path:"/new-user",name:"NewUser",component:h}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:w,components:{App:r},template:"<App/>"})},Rete:function(t,e){},Y6jI:function(t,e){},qb6w:function(t,e){},v46d:function(t,e){},y0iA:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.8cb8102783c85575e87f.js.map