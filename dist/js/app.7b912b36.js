(function(t){function e(e){for(var s,o,i=e[0],c=e[1],l=e[2],u=0,p=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},r=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("b-navbar",{attrs:{type:"dark",variant:"dark"}},[a("b-navbar-nav",[t.isLoggedIn?t._e():a("b-nav-item",[a("router-link",{attrs:{to:"/login"}},[t._v("Login")])],1),t.isLoggedIn?t._e():a("b-nav-item",[a("router-link",{attrs:{to:"/register"}},[t._v("Register")])],1),t.isLoggedIn?a("b-nav-item",[a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1):t._e(),t.isLoggedIn?a("b-nav-item-dropdown",{staticClass:"float-right",attrs:{text:t.getUser.name,right:""}},[a("b-dropdown-item",{on:{click:t.logOut}},[t._v("Log out")])],1):t._e()],1)],1),a("router-view")],1)])},r=[],o=a("1da1"),i=a("5530"),c=(a("96cf"),a("2f62")),l={components:{},data:function(){return{}},methods:Object(i["a"])(Object(i["a"])({},Object(c["c"])(["setUser"])),{},{logOut:function(){this.setUser(null),localStorage.removeItem("token"),this.$router.push("/login")}}),created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.callApi("POST","https://to-do-app-vianova.herokuapp.com/api/v1/auth/me","",{Authorization:"Bearer "+localStorage.getItem("token")});case 2:a=e.sent,200===a.status?t.setUser(a.data):401===a.status&&(localStorage.removeItem("token"),t.setUser(null),t.$router.push("/login"));case 4:case"end":return e.stop()}}),e)})))()},computed:Object(i["a"])({},Object(c["b"])(["isLoggedIn","getUser"]))},d=l,u=(a("034f"),a("2877")),p=Object(u["a"])(d,n,r,!1,null,null,null),h=p.exports,m=(a("b0c0"),a("8c4f")),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mt-5"},[a("b-modal",{ref:"add-modal",attrs:{"no-close-on-backdrop":!0,"hide-header-close":!0,"hide-footer":"",title:"Add New Task"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("b-form-input",{staticClass:"mb-2",attrs:{placeholder:"Enter task name"},model:{value:t.newTaskData.name,callback:function(e){t.$set(t.newTaskData,"name",e)},expression:"newTaskData.name"}}),a("b-form-select",{attrs:{options:t.levelImportanceOfTask},model:{value:t.newTaskData.level,callback:function(e){t.$set(t.newTaskData,"level",e)},expression:"newTaskData.level"}})],1),a("div",{staticClass:"col-12 d-flex"},[a("div",{staticClass:"col-6 ml-auto"},[a("b-button",{staticClass:"mt-3 ml-4 mr-1",attrs:{variant:"info"},on:{click:t.hideModal}},[t._v("Close")]),a("b-button",{staticClass:"mt-3",attrs:{variant:"primary",disabled:!!t.isAdding},on:{click:t.addTask}},[t._v(t._s(t.isAdding?"Adding":"Add task"))])],1)])])]),a("b-modal",{ref:"edit-modal",attrs:{"no-close-on-backdrop":!0,"hide-header-close":!0,"hide-footer":"",title:"Edit Task"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("b-form-input",{staticClass:"mb-2",attrs:{placeholder:"Enter task name"},model:{value:t.editData.name,callback:function(e){t.$set(t.editData,"name",e)},expression:"editData.name"}}),a("b-form-select",{attrs:{options:t.levelImportanceOfTask},model:{value:t.editData.level,callback:function(e){t.$set(t.editData,"level",e)},expression:"editData.level"}})],1),a("div",{staticClass:"col-12 d-flex"},[a("div",{staticClass:"col-6 ml-auto"},[a("b-button",{staticClass:"mt-3 ml-4 mr-1",attrs:{variant:"info"},on:{click:t.hideEditModal}},[t._v("Close")]),a("b-button",{staticClass:"mt-3",attrs:{variant:"primary",disabled:!!t.isUpdating},on:{click:t.updateTask}},[t._v(t._s(t.isUpdating?"Editing":"Edit task"))])],1)])])]),a("b-modal",{ref:"delete-modal",attrs:{"no-close-on-backdrop":!0,"hide-header-close":!0,"hide-footer":"",title:"Delete Task!"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h6",[t._v("Are you sure you want to delete this task?")])]),a("div",{staticClass:"col-12 d-flex"},[a("div",{staticClass:"col-6 ml-auto"},[a("b-button",{staticClass:"mt-3 ml-3 mr-1",attrs:{variant:"info"},on:{click:t.hideDeleteModal}},[t._v("Cancel")]),a("b-button",{staticClass:"mt-3",attrs:{variant:"danger"},on:{click:t.deleteTask}},[t._v("Delete task")])],1)])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("b-button",{staticClass:"float-right",attrs:{variant:"primary",id:"show-btn"},on:{click:t.showModal}},[t._v("New Task")])],1)]),a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col-4 mt-5"},[a("div",{staticClass:"p-2 alert alert-primary"},[a("h3",[t._v("To Do")]),a("draggable",{key:t.toDoTasks.id,staticClass:"list-group column",attrs:{list:t.toDoTasks,group:"tasks",id:"toDoTasks",disabled:t.isUpdating},on:{end:t.checkEndToDo}},t._l(t.toDoTasks,(function(e,s){return a("div",{key:e.id,staticClass:"list-group-item mb-2",class:[t.changeBackgroundByLevel(e.level)],on:{dblclick:function(a){return t.editTask(e,s)}}},[t._v(" "+t._s(e.name)+" ")])})),0)],1)]),a("div",{staticClass:"col-4 mt-5"},[a("div",{staticClass:"p-2 alert alert-warning"},[a("h3",[t._v("In Progress")]),a("draggable",{staticClass:"list-group column",attrs:{list:t.onProgressTasks,group:"tasks",id:"onProgressTasks",disabled:t.isUpdating},on:{end:t.checkEndOnProgress}},t._l(t.onProgressTasks,(function(e,s){return a("div",{key:e.id,staticClass:"list-group-item mb-2",class:[t.changeBackgroundByLevel(e.level)],on:{dblclick:function(a){return t.editTask(e,s)}}},[t._v(" "+t._s(e.name)+" ")])})),0)],1)]),a("div",{staticClass:"col-4"},[a("b-form-input",{staticClass:"mb-2",attrs:{placeholder:"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("div",{staticClass:"p-2 alert alert-success position-relative"},[a("h3",[t._v("Done")]),a("draggable",{staticClass:"list-group column position-relative",attrs:{list:t.doneTasks,group:"tasks",id:"doneTasks",disabled:t.isUpdating},on:{end:t.checkEndDoneTasks}},t._l(t.doneTasks,(function(e,s){return a("div",{key:e.id,staticClass:"list-group-item mb-2 position-relative",class:[t.changeBackgroundByLevel(e.level)],on:{dblclick:function(a){return t.editTask(e,s)}}},[a("p",[t._v(t._s(e.name))]),a("span",{staticStyle:{"font-size":"15px",position:"absolute",bottom:"0",right:"0"}},[t._v(t._s(e.updated_at))]),a("b-icon",{staticStyle:{position:"absolute",top:"25%",right:"0",cursor:"pointer"},attrs:{icon:"trash-fill","aria-hidden":"true"},on:{click:function(a){return t.showDeleteModal(s,e.id)}}})],1)})),0)],1)],1)])],1)},g=[],k=(a("a434"),a("ac1f"),a("841c"),a("b76a")),f=a.n(k),b={name:"todo-app",components:{draggable:f.a},data:function(){return{toDoTasks:[],onProgressTasks:[],doneTasks:[],newTaskData:{name:"",level:null},selected:null,levelImportanceOfTask:[{value:1,text:"Low"},{value:2,text:"Medium"},{value:3,text:"High"}],index:null,editData:{name:"",level:null,status:null},editIndex:null,search:"",deleteData:{deleteIndex:"",deleteTaskId:""},isUpdating:!1,isAdding:!1,orderDesc:!1,orderAsc:!1}},methods:{showModal:function(){this.$refs["add-modal"].show()},hideModal:function(){this.$refs["add-modal"].hide()},hideEditModal:function(){this.$refs["edit-modal"].hide(),this.editData={}},showDeleteModal:function(t,e){this.$refs["delete-modal"].show(),this.deleteData.deleteIndex=t,this.deleteData.deleteTaskId=e},hideDeleteModal:function(){this.$refs["delete-modal"].hide(),this.deleteData={}},deleteTask:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.callApi("POST","https://to-do-app-vianova.herokuapp.com/api/v1/task/".concat(t.deleteData.deleteTaskId,"/delete"));case 2:a=e.sent,1===a.data.data.status?t.toDoTasks.splice(t.deleteData.deleteIndex,1):2===a.data.data.status?t.onProgressTasks.splice(t.deleteIndex,1):t.doneTasks.splice(t.deleteData.deleteIndex,1),t.$toast.success("Task has been removed successfully!",{position:"top-right"}),t.$refs["delete-modal"].hide();case 6:case"end":return e.stop()}}),e)})))()},addTask:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isAdding=!0,e.next=3,t.callApi("POST","https://to-do-app-vianova.herokuapp.com/api/v1/task/store",t.newTaskData);case 3:if(a=e.sent,200===a.status)1===a.data.data.status?t.toDoTasks.unshift(a.data.data):2===a.data.data.status?t.onProgressTasks.unshift(a.data.data):t.doneTasks.unshift(a.data.data),t.data={},t.$refs["add-modal"].hide(),t.$toast.success("Task has been added successfully",{position:"top-right"});else if(a.data.errors)for(s in a.data.errors)for(n=0;n<a.data.errors[s].length;n++)t.$toast.error(a.data.errors[s][n],{position:"top-right"});t.newTaskData={name:"",level:null},t.isAdding=!1;case 7:case"end":return e.stop()}}),e)})))()},editTask:function(t,e){this.$refs["edit-modal"].show(),this.editData={id:t.id,name:t.name,level:t.level,status:t.status},this.editIndex=e},updateTask:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isUpdating=!0,e.next=3,t.callApi("PATCH","https://to-do-app-vianova.herokuapp.com/api/v1/task/".concat(t.editData.id,"/edit"),t.editData);case 3:a=e.sent,200===a.status&&(1===a.data.data.status?t.toDoTasks.splice(t.editIndex,1,a.data.data):2===a.data.data.status?t.onProgressTasks.splice(t.editIndex,1,a.data.data):t.doneTasks.splice(t.editIndex,1,a.data.data),t.$refs["edit-modal"].hide(),t.editData={},t.$toast.success("Task updated successfully!",{position:"top-right"}),t.isUpdating=!1);case 5:case"end":return e.stop()}}),e)})))()},checkEndToDo:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.isUpdating=!0,"onProgressTasks"!==t.to.id){a.next=7;break}return a.next=4,e.callApi("POST","https://to-do-app-vianova.herokuapp.com/api/v1/task/".concat(e.onProgressTasks[t.newIndex].id,"/change-status"),{status:2});case 4:e.$toast.success("Task moved to on progress tasks!",{position:"top-right"}),a.next=11;break;case 7:if("doneTasks"!==t.to.id){a.next=11;break}return a.next=10,e.callApi("POST","https://to-do-app-vianova.herokuapp.com/api/v1/task/".concat(e.doneTasks[t.newIndex].id,"/change-status"),{status:3});case 10:e.$toast.success("Task moved to done tasks!",{position:"top-right"});case 11:e.isUpdating=!1;case 12:case"end":return a.stop()}}),a)})))()},checkEndOnProgress:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.isUpdating=!0,"toDoTasks"!==t.to.id){a.next=7;break}return a.next=4,e.callApi("POST","https://to-do-app-vianova.herokuapp.com/api/v1/task/".concat(e.toDoTasks[t.newIndex].id,"/change-status"),{status:1});case 4:e.$toast.success("Task moved to do tasks!",{position:"top-right"}),a.next=13;break;case 7:if("doneTasks"!==t.to.id){a.next=13;break}return a.next=10,e.callApi("POST","https://to-do-app-vianova.herokuapp.com/api/v1/task/".concat(e.doneTasks[t.newIndex].id,"/change-status"),{status:3});case 10:s=a.sent,e.doneTasks.splice(t.newIndex,1,s.data.task),e.$toast.success("Task moved to done tasks!",{position:"top-right"});case 13:e.isUpdating=!1;case 14:case"end":return a.stop()}}),a)})))()},checkEndDoneTasks:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.isUpdating=!0,"toDoTasks"!==t.to.id){a.next=7;break}return a.next=4,e.callApi("POST","https://to-do-app-vianova.herokuapp.com/api/v1/task/".concat(e.toDoTasks[t.newIndex].id,"/change-status"),{status:1});case 4:e.$toast.success("Task moved to do tasks!",{position:"top-right"}),a.next=11;break;case 7:if("onProgressTasks"!==t.to.id){a.next=11;break}return a.next=10,e.callApi("POST","https://to-do-app-vianova.herokuapp.com/api/v1/task/".concat(e.onProgressTasks[t.newIndex].id,"/change-status"),{status:2});case 10:e.$toast.success("Task moved to on progress tasks!",{position:"top-right"});case 11:e.isUpdating=!1;case 12:case"end":return a.stop()}}),a)})))()},changeBackgroundByLevel:function(t){return 1===t?"low":2===t?"medium":"high"}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.callApi("GET","https://to-do-app-vianova.herokuapp.com/api/v1/task/1/all");case 2:return a=e.sent,e.next=5,t.callApi("GET","https://to-do-app-vianova.herokuapp.com/api/v1/task/2/all");case 5:return s=e.sent,e.next=8,t.callApi("GET","https://to-do-app-vianova.herokuapp.com/api/v1/task/3/all");case 8:n=e.sent,200===a.status&&(t.toDoTasks=a.data),200===s.status&&(t.onProgressTasks=s.data),200===n.status&&(t.doneTasks=n.data);case 12:case"end":return e.stop()}}),e)})))()},watch:{search:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""===this.search){t.next=7;break}return t.next=3,this.callApi("GET","https://to-do-app-vianova.herokuapp.com/api/v1/task/".concat(this.search,"/search"));case 3:e=t.sent,200===e.status&&(console.log(e.data),this.doneTasks=e.data.data),t.next=11;break;case 7:return t.next=9,this.callApi("GET","https://to-do-app-vianova.herokuapp.com/api/v1/task/3/all");case 9:a=t.sent,this.doneTasks=a.data;case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},w=b,T=(a("cccb"),Object(u["a"])(w,v,g,!1,null,null,null)),x=T.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col-6 mx-auto"},[a("h1",{staticClass:"mb-5"},[t._v("Log in")]),a("form",[a("b-form-input",{staticClass:"mb-2",attrs:{type:"email",placeholder:"Enter your email",required:""},model:{value:t.auth.email,callback:function(e){t.$set(t.auth,"email",e)},expression:"auth.email"}}),a("b-form-input",{staticClass:"mb-2",attrs:{type:"password",placeholder:"Enter your password",required:""},model:{value:t.auth.password,callback:function(e){t.$set(t.auth,"password",e)},expression:"auth.password"}}),a("b-button",{staticClass:"float-right",attrs:{variant:"primary",disabled:!!t.isLogging},on:{click:t.login}},[t._v(t._s(t.isLogging?"Loading":"Log in"))])],1)])])])])},O=[],_={name:"Login",data:function(){return{auth:{email:"",password:""},isLogging:!1}},methods:Object(i["a"])(Object(i["a"])({},Object(c["c"])(["setUser"])),{},{login:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var s,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.preventDefault(),e.isLogging=!0,""===e.auth.email||""===e.auth.password){a.next=19;break}return a.next=5,e.callApi("POST","https://to-do-app-vianova.herokuapp.com/api/v1/auth/login",e.auth);case 5:if(s=a.sent,200!==s.status){a.next=16;break}return a.next=9,e.callApi("POST","https://to-do-app-vianova.herokuapp.com/api/v1/auth/me","",{Authorization:"Bearer "+s.data.access_token});case 9:n=a.sent,e.setUser(n.data),localStorage.setItem("token",s.data.access_token),e.$router.push("/"),e.$toast.success("You are logged in!",{position:"top-right"}),a.next=17;break;case 16:401===s.status&&e.$toast.error(s.data.error+"!",{position:"top-right"});case 17:a.next=20;break;case 19:e.$toast.error("Please fill the blank fields!",{position:"top-right"});case 20:e.isLogging=!1;case 21:case"end":return a.stop()}}),a)})))()}})},D=_,y=Object(u["a"])(D,C,O,!1,null,null,null),$=y.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col-6 mx-auto"},[a("h1",{staticClass:"mb-5"},[t._v("Register")]),a("form",[a("b-form-input",{staticClass:"mb-2",attrs:{type:"text",placeholder:"Enter your name"},model:{value:t.register.name,callback:function(e){t.$set(t.register,"name",e)},expression:"register.name"}}),a("b-form-input",{staticClass:"mb-2",attrs:{type:"email",placeholder:"Enter your email"},model:{value:t.register.email,callback:function(e){t.$set(t.register,"email",e)},expression:"register.email"}}),a("b-form-input",{staticClass:"mb-2",attrs:{type:"password",placeholder:"Enter your password"},model:{value:t.register.password,callback:function(e){t.$set(t.register,"password",e)},expression:"register.password"}}),a("b-form-input",{staticClass:"mb-2",attrs:{type:"password",placeholder:"Confirm your password"},model:{value:t.register.password_confirmation,callback:function(e){t.$set(t.register,"password_confirmation",e)},expression:"register.password_confirmation"}}),a("b-button",{staticClass:"float-right",attrs:{variant:"primary",disabled:!!t.isRegistering},on:{click:t.registerUser}},[t._v(t._s(t.isRegistering?"Loading":"Register"))])],1)])])])])},I=[],j={data:function(){return{register:{name:"",email:"",password:"",password_confirmation:""},isRegistering:!1}},methods:Object(i["a"])(Object(i["a"])({},Object(c["c"])(["setUser"])),{},{registerUser:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,s,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isRegistering=!0,e.next=3,t.callApi("POST","https://to-do-app-vianova.herokuapp.com/api/v1/auth/register",t.register,{});case 3:if(a=e.sent,console.log(a),200!==a.status){e.next=14;break}return e.next=8,t.callApi("POST","https://to-do-app-vianova.herokuapp.com/api/v1/auth/me","",{Authorization:"Bearer "+a.data.access_token});case 8:s=e.sent,t.setUser(s.data),localStorage.setItem("token",a.data.access_token),t.$router.push("/"),e.next=15;break;case 14:if(422===a.status)for(n in console.log(a),a.data.errors)for(r=0;r<a.data.errors[n].length;r++)t.$toast.error(a.data.errors[n][r],{position:"top-right"});case 15:t.isRegistering=!1;case 16:case"end":return e.stop()}}),e)})))()}})},A=j,R=Object(u["a"])(A,P,I,!1,null,null,null),S=R.exports;s["default"].use(m["a"]);var E=[{path:"/login",name:"Login",component:$},{path:"/register",name:"Register",component:S},{path:"/",name:"Home",component:x}],U=new m["a"]({mode:"history",base:"/",routes:E});U.beforeEach((function(t,e,a){"Login"===t.name&&null!==localStorage.getItem("token")||"Register"===t.name&&null!==localStorage.getItem("token")?a({name:"Home"}):"Home"===t.name&&null===localStorage.getItem("token")?a({name:"Login"}):a()}));var L=U;s["default"].use(c["a"]);var M=new c["a"].Store({state:{user:null},mutations:{setUser:function(t,e){t.user=e}},actions:{},modules:{},getters:{isLoggedIn:function(t){return!!t.user},getUser:function(t){return t.user}}}),B=a("bc3a"),H=a.n(B),G={data:function(){return{}},methods:{callApi:function(t,e,a,s){return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,H()({method:t,url:e,data:a,headers:s});case 3:return n.abrupt("return",n.sent);case 6:return n.prev=6,n.t0=n["catch"](0),n.abrupt("return",n.t0.response);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))()}}},z=a("5f5b"),q=a("b1e0"),J=(a("f9e3"),a("2dd8"),a("6c42"));a("da96");s["default"].mixin(G),s["default"].use(z["a"]),s["default"].use(q["a"]),s["default"].use(J["a"],{timeout:4e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1}),s["default"].config.productionTip=!1,s["default"].prototype.$http=H.a,new s["default"]({router:L,store:M,render:function(t){return t(h)}}).$mount("#app")},"5ced":function(t,e,a){},"85ec":function(t,e,a){},cccb:function(t,e,a){"use strict";a("5ced")}});
//# sourceMappingURL=app.7b912b36.js.map