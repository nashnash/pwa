(function(t){function e(e){for(var n,o,r=e[0],c=e[1],l=e[2],u=0,p=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("64a9")},"1a58":function(t,e,a){},3895:function(t,e,a){"use strict";a("1a58")},"404d":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loggedIn?a("div",{attrs:{id:"doc"}},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("div",{staticClass:"container"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("G-Doc Clone")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-primary dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n                "+t._s(t.currentUser.displayName)+"\n              ")]),a("div",{staticClass:"dropdown-menu"},[a("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:t.logOut}},[t._v("Log Out")])])])])])])])]),a("dashboard",{attrs:{userID:t.currentUser.uid,displayName:t.currentUser.displayName}})],1):a("div",{attrs:{id:"home"}},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("G-Doc Clone")]),t._m(1),a("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[t.logInModalHidden?a("button",{staticClass:"btn btn-primary",on:{click:t.toggleAuthModal}},[t._v("\n            Got an account? Log In\n          ")]):a("button",{staticClass:"btn btn-primary",on:{click:t.toggleAuthModal}},[t._v("\n            No account? Sign Up\n          ")])])])])]),a("div",{staticClass:"container",attrs:{id:"home-body"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 offset-md-4"},[t.logInModalHidden?a("div",{staticClass:"card box-shadow",attrs:{id:"signup-box"}},[a("div",{staticClass:"card-header"},[t._v("\n            New Account\n          ")]),a("div",{staticClass:"card-body"},[a("form",{attrs:{id:"signup-form"},on:{submit:[function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)},t.signUp]}},[t._m(2),t._m(3),t._m(4),a("div",{staticClass:"action text-center"},[a("button",{staticClass:"btn btn-success btn-block"},[t._v("\n                  create account\n                ")]),a("hr"),a("button",{staticClass:"btn btn-link",on:{click:t.toggleAuthModal}},[t._v("already have an account? log in")])])])])]):a("div",{staticClass:"card box-shadow",attrs:{id:"login-box"}},[a("div",{staticClass:"card-header"},[t._v("\n            Login\n          ")]),a("div",{staticClass:"card-body"},[a("form",{attrs:{id:"login-form"},on:{submit:[function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)},t.logIn]}},[t._m(5),t._m(6),a("div",{staticClass:"action text-center"},[a("button",{staticClass:"btn btn-success btn-block"},[t._v("\n                  log in\n                ")]),a("hr"),a("button",{staticClass:"btn btn-link",on:{click:t.toggleAuthModal}},[t._v("no account? sign up")])])])])])])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"email"}},[t._v("Email")]),a("input",{staticClass:"form-control",attrs:{type:"email",placeholder:"email",id:"email"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"display-name"}},[t._v("Display Name")]),a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"display name",id:"display-name"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"password"}},[t._v("Password")]),a("input",{staticClass:"form-control",attrs:{type:"password",placeholder:"password",id:"password"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"email"}},[t._v("Email")]),a("input",{staticClass:"form-control",attrs:{type:"email",placeholder:"email",id:"email"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"password"}},[t._v("Password")]),a("input",{staticClass:"form-control",attrs:{type:"password",placeholder:"password",id:"password"}})])}],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"document"},[a("section",{staticClass:"row document-page",staticStyle:{padding:"10px 0"}},[a("div",{staticClass:"col-md-2"},[a("a",{staticClass:"btn btn-link",staticStyle:{padding:"0",color:"#007bff"},on:{click:t.toggleDashboard}},[a("i",{staticClass:"fa fa-angle-left"}),t._v(" Return to dashboard\n            ")])]),a("div",{staticClass:"col-md-8"},[a("textarea",{staticClass:"card",attrs:{id:"input-area",placeholder:"Start typing here...",height:t.inputHeight},on:{focus:t.documentFocused,blur:t.documentBlurred,keyup:t.processContent}})]),a("div",{staticClass:"col-md-2"},[t._m(0),a("div",{attrs:{id:"link-share"}},[a("input",{staticClass:"form-control",attrs:{type:"text",disabled:"",id:"link-text"},domProps:{value:t.docID}}),a("div",[a("button",{staticClass:"btn btn-primary btn-block",on:{click:t.copyLink}},[t._v("\n                        share link\n                    ")])])])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("span",{staticClass:"badge badge-light hide",attrs:{id:"saving-indicator"}},[t._v("\n                    Saving...\n                ")])])}],c=(a("6b54"),{name:"doc",data:function(){return{}},props:{docID:String},mounted:function(){firestore.collection("pages").doc(this.docID).onSnapshot((function(t){document.querySelector("#input-area").value=t.data().content}))},methods:{toggleDashboard:function(){window.location.reload("/")},doc:function(){return document.querySelector("#input-area")},savingIndicator:function(){return document.querySelector("#saving-indicator")},copyLink:function(){var t=document.querySelector("#link-text");t.select(),document.execCommand("copy"),alert("Link copied!")},documentFocused:function(){this.doc().classList.toggle("document-focused")},documentBlurred:function(){this.doc().classList.toggle("document-focused")},inputHeight:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return t||this.doc().offsetHeight},expandInput:function(){var t=this.inputHeight(),e=this.doc().value.length;this.doc().style.height=e>2350?(t+.05*t).toString()+"px":"initial"},addToFirebase:function(){firestore.collection("pages").doc(this.docID).set({content:this.doc().value},{merge:!0}).then((function(t){var e=document.querySelector("#saving-indicator");e.innerHTML="saved!",setTimeout((function(){e.classList.add("hide"),e.innerHTML="saving..."}),3e3)}))},processContent:function(){this.savingIndicator().innerHTML="saving...",this.savingIndicator().classList.remove("hide"),this.addToFirebase()}}}),l=c,d=(a("3895"),a("2877")),u=Object(d["a"])(l,o,r,!1,null,"7b82f416",null),p=u.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t.currentlyEditing?a("doc",{attrs:{docID:t.currentDoc}}):a("div",{staticClass:"row",attrs:{id:"cards-row"}},[a("div",{staticClass:"col-md-3 cards-div"},[a("div",{staticClass:"card",attrs:{id:"new-document"}},[a("a",{attrs:{href:"#",id:"new-document-link"},on:{click:t.createNewDocument}},[a("div",{staticClass:"card-body",attrs:{id:"new-document-body"}},[a("div",{attrs:{id:"icon-area"}},[a("div",{attrs:{id:"icon-div"}},[a("i",{staticClass:"fa fa-plus"})]),a("div",{attrs:{id:"icon-text-div"}},[a("h5",[t._v("New Document")])])])])])])])])],1)},v=[],h=(a("ac6a"),a("28a5"),{name:"dashboard",data:function(){return{currentlyEditing:!1,currentDoc:""}},components:{doc:p},props:{userID:String},mounted:function(){var t=window.location.pathname.split("/")[1];20==t.length&&(this.currentDoc=t.toString(),this.currentlyEditing=!0),firestore.collection("pages").where("user","==",this.userID).get().then((function(t){t.forEach((function(t){var e=document.querySelector("#cards-row"),a=document.createElement("div"),n=document.createElement("div"),s=document.createElement("a"),i=document.createElement("div"),o=document.createElement("p"),r="margin-bottom: 15px;",c="height: 180px; text-align: center; margin: 15px 0; cursor: pointer;",l="margin-top: 40px;";o.setAttribute("style",l),o.innerHTML="Doc <br><span><b>"+t.id+"</b></span>",a.setAttribute("class","col-md-3"),n.setAttribute("class","card document"),n.setAttribute("style",r),n.setAttribute("onmouseover","this.classList.add('box-shadow')"),n.setAttribute("onmouseout","this.classList.remove('box-shadow')"),s.setAttribute("onclick",'window.location.replace("/'+t.id+'")'),i.setAttribute("class","card-body"),i.setAttribute("style",c),i.appendChild(o),s.appendChild(i),n.appendChild(s),a.appendChild(n),e.appendChild(a)}))}))},methods:{createNewDocument:function(){var t=this;firestore.collection("pages").add({user:this.userID,content:""}).then((function(e){t.currentlyEditing=!0,t.currentDoc=e.id}))}}}),m=h,g=(a("5e0f"),Object(d["a"])(m,f,v,!1,null,"70d7060c",null)),b=g.exports,C={name:"app",components:{dashboard:b},data:function(){return{loggedIn:!1,logInModalHidden:!0,currentUser:Object}},mounted:function(){var t=firebase.auth().currentUser;t?(this.loggedIn=!0,this.currentUser=t):this.loggedIn=!1},methods:{email:function(){return document.querySelector("#email")},displayName:function(){return document.querySelector("#display-name")},password:function(){return document.querySelector("#password")},toggleAuthModal:function(){this.logInModalHidden=!this.logInModalHidden},checkAuthState:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=firebase.auth().currentUser;e?(t&&e.updateProfile({displayName:t}).then((function(){})).catch((function(t){})),this.loggedIn=!0,this.currentUser=e):this.loggedIn=!1},signUp:function(){var t=this.email().value,e=this.displayName().value,a=this.password().value,n=this;firebase.auth().createUserWithEmailAndPassword(t,a).then((function(t){n.checkAuthState(e)})).catch((function(t){t.code,t.message}))},logIn:function(){var t=this.email().value,e=this.password().value,a=this;firebase.auth().signInWithEmailAndPassword(t,e).then((function(t){a.checkAuthState()})).catch((function(t){t.code,t.message}))},logOut:function(){var t=this;firebase.auth().signOut().then((function(){t.checkAuthState()})).catch((function(t){}))}}},y=C,_=(a("034f"),Object(d["a"])(y,s,i,!1,null,null,null)),w=_.exports,x=a("8c4f");n["a"].use(x["a"]);var S=new x["a"]({routes:[{path:"/doc",name:"doc",component:p}]}),k=S;n["a"].config.productionTip=!1,new n["a"]({router:k,render:function(t){return t(w)}}).$mount("#app")},"5e0f":function(t,e,a){"use strict";a("404d")},"64a9":function(t,e,a){}});
//# sourceMappingURL=app.661c7e57.js.map