(this["webpackJsonpFoodZilla-Web"]=this["webpackJsonpFoodZilla-Web"]||[]).push([[0],{14:function(e,t,s){},16:function(e,t,s){},18:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s.n(a),n=s(4),c=s.n(n),l=(s(14),s(3)),r=s.n(l),o=s(5),d=s(6),h=s(7),p=s(9),u=s(8),f=(s(16),s(0)),g=function(e){Object(p.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(d.a)(this,s);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={show:!1,recipe:[],lastid:0,isVeg:"",taste:["Sour","Sweet","Tangy","Mild","Spicy"],selectedtaste:"",showdesc:!1},e.changelastid=function(t){console.log(document.getElementById("tastebox").value),t.preventDefault(),e.setState({lastid:e.state.recipe[e.state.recipe.length-1].id+10},(function(){if(""!==e.state.isVeg)var t="https://foodzilla.vercel.app/recipes?last_id="+e.state.lastid+"&is_veg="+e.state.isVeg;else t=""!==e.state.selectedtaste?"https://foodzilla.vercel.app/recipes?last_id="+e.state.lastid+"&taste="+e.state.selectedtaste:""!==e.state.isVeg&""!==e.state.selectedtaste?"https://foodzilla.vercel.app/recipes?last_id="+e.state.lastid+"&is_veg="+e.state.isVeg+"&taste="+e.state.selectedtaste:"https://foodzilla.vercel.app/recipes?last_id="+e.state.lastid;fetch(t).then((function(e){return e.json()})).then((function(t){return e.setState({recipe:t,show:!0})}))})),console.log(e.state.lastid)},e.vegFilter=function(t){t.preventDefault(),e.setState({isVeg:"true"}),e.setState({lastid:e.state.recipe[e.state.recipe.length-1].id+10},(function(){var t="https://foodzilla.vercel.app/recipes?last_id="+e.state.lastid+"&is_veg="+e.state.isVeg;fetch(t).then((function(e){return e.json()})).then((function(t){return e.setState({recipe:t,show:!0})}))})),console.log(e.state.lastid)},e.nonvegFilter=function(t){t.preventDefault(),e.setState({isVeg:"false"}),e.setState({lastid:e.state.recipe[e.state.recipe.length-1].id+10},(function(){var t="https://foodzilla.vercel.app/recipes?last_id="+e.state.lastid+"&is_veg="+e.state.isVeg;fetch(t).then((function(e){return e.json()})).then((function(t){return e.setState({recipe:t,show:!0})}))})),console.log(e.state.lastid)},e.tasteFilter=function(t){t.preventDefault(),e.setState({selectedtaste:document.getElementById("tastebox").value},(function(){var t="https://foodzilla.vercel.app/recipes?last_id="+e.state.lastid+"&taste="+e.state.selectedtaste;fetch(t).then((function(e){return e.json()})).then((function(t){return e.setState({recipe:t,show:!0})}))}))},e.changelastidBackwards=function(t){console.log(e.state.isVeg),t.preventDefault(),e.setState({lastid:e.state.recipe[e.state.recipe.length-1].id-10},(function(){if(""!==e.state.isVeg)var t="https://foodzilla.vercel.app/recipes?last_id="+e.state.lastid+"&is_veg="+e.state.isVeg;else t="https://foodzilla.vercel.app/recipes?last_id="+e.state.lastid;fetch(t).then((function(e){return e.json()})).then((function(t){return e.setState({recipe:t,show:!0})}))})),console.log(e.state.lastid)},e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=Object(o.a)(r.a.mark((function e(){var t,s,a,i=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://foodzilla.vercel.app/recipes?last_id="+this.state.lastid,e.next=3,fetch(t);case 3:return s=e.sent,e.next=6,s.json();case 6:a=e.sent,this.setState({recipe:a,show:!0},(function(){console.log(i.state.recipe)})),console.log(this.state.recipe);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(f.jsx)("div",{className:"App",children:this.state.showdesc?Object(f.jsx)("div",{children:"description"}):Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"FoodZilla"}),Object(f.jsxs)("div",{className:"filterbtns",children:[Object(f.jsx)("button",{className:"btns",onClick:this.vegFilter,children:"veg"}),Object(f.jsx)("button",{className:"btns",onClick:this.nonvegFilter,children:"nonveg"}),Object(f.jsx)("select",{id:"tastebox",onChange:this.tasteFilter,children:this.state.taste.map((function(e){return Object(f.jsx)("option",{value:e,children:e},e)}))})]}),Object(f.jsxs)("div",{className:"npbtns",children:[Object(f.jsx)("button",{type:"submit",onClick:this.changelastidBackwards,children:"Back"}),Object(f.jsx)("button",{onClick:this.changelastid,children:"Next"})]}),this.state.show?Object(f.jsx)("div",{className:"cardholder",children:this.state.recipe.map((function(e){return Object(f.jsxs)("div",{className:"cards",children:[Object(f.jsx)("img",{src:e.image,alt:"something"}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{className:"recipename",style:{fontSize:20},children:e.name}),Object(f.jsxs)("div",{className:"recipetype",style:{fontSize:20},children:["type:",e.is_veg?"veg":"nonveg"]})]},e.id)}))}):Object(f.jsx)("div",{children:"loading..."})]})})}}]),s}(a.Component),v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,19)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,c=t.getTTFB;s(e),a(e),i(e),n(e),c(e)}))};c.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(g,{})}),document.getElementById("root")),v()}},[[18,1,2]]]);
//# sourceMappingURL=main.0577d1b7.chunk.js.map