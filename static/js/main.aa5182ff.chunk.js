(this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]=this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),c=a.n(r),u=a(2),o=function(){return fetch("https://swapi-trybe.herokuapp.com/api/planets/").then((function(e){return e.json()})).then((function(e){return e.results}))},i=Object(n.createContext)(),m=Object(n.createContext)();a(14),a(15);var s=function(){var e=Object(n.useContext)(i).planets;return l.a.createElement("table",{className:"Table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Rotation Period"),l.a.createElement("th",null,"Orbital Period"),l.a.createElement("th",null,"Diameter"),l.a.createElement("th",null,"Climate"),l.a.createElement("th",null,"Gravity"),l.a.createElement("th",null,"Terrain"),l.a.createElement("th",null,"Surface Water"),l.a.createElement("th",null,"Population"),l.a.createElement("th",null,"Films"),l.a.createElement("th",null,"Created"),l.a.createElement("th",null,"Edited"),l.a.createElement("th",null,"Url"))),l.a.createElement("tbody",null,e.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.rotation_period),l.a.createElement("td",null,e.orbital_period),l.a.createElement("td",null,e.diameter),l.a.createElement("td",null,e.climate),l.a.createElement("td",null,e.gravity),l.a.createElement("td",null,e.terrain),l.a.createElement("td",null,e.surface_water),l.a.createElement("td",null,e.population),l.a.createElement("td",null,e.films),l.a.createElement("td",null,e.created),l.a.createElement("td",null,e.edited),l.a.createElement("td",null,e.url))}))))},E=a(6),f=a(5),d=a(1),p={column:"population",comparison:"maior que",value:"0"};var b=function(){var e=Object(n.useState)(p),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useContext)(m),o=c.filters,i=c.setFilters,s=function(e){var t=e.target,n=t.name,l=t.value;r(Object(d.a)(Object(d.a)({},a),{},Object(f.a)({},n,l)))};return l.a.createElement("div",null,l.a.createElement("input",{onChange:function(e){var t=e.target;i(Object(d.a)(Object(d.a)({},o),{},{filterByName:{name:t.value}}))},placeholder:"Buscar Nome","data-testid":"name-filter"}),l.a.createElement("label",{htmlFor:"column"},"Selecione a coluna",l.a.createElement("select",{onChange:s,value:a.column,name:"column","data-testid":"column-filter"},l.a.createElement("option",{value:"population"},"population"),l.a.createElement("option",{value:"orbital_period"},"orbital_period"),l.a.createElement("option",{value:"diameter"},"diameter"),l.a.createElement("option",{value:"rotation_period"},"rotation_period"),l.a.createElement("option",{value:"surface_water"},"surface_water"))),l.a.createElement("label",{htmlFor:"comparison"},"Selecione a Condi\xe7\xe3o",l.a.createElement("select",{onChange:s,value:a.comparison,name:"comparison","data-testid":"comparison-filter"},l.a.createElement("option",{value:"maior que"},"maior que"),l.a.createElement("option",{value:"menor que"},"menor que"),l.a.createElement("option",{value:"igual a"},"igual a"))),l.a.createElement("label",{htmlFor:"value"},"Digite o valor:",l.a.createElement("input",{onChange:s,value:a.value,type:"number",name:"value","data-testid":"value-filter"})),l.a.createElement("button",{type:"button",onClick:function(){i(Object(d.a)(Object(d.a)({},o),{},{filterByNumericValues:[].concat(Object(E.a)(o.filterByNumericValues),[a])}))},"data-testid":"button-filter"},"Buscar"),l.a.createElement("section",null,l.a.createElement("ul",null,o.filterByNumericValues.map((function(e,t){return l.a.createElement("li",{"data-testid":"filter",key:t},"".concat(e.column," ").concat(e.comparison,": ").concat(e.value),l.a.createElement("button",{type:"button",onClick:function(){return function(e){var t=o.filterByNumericValues;t.splice(e,1);var a=Object(d.a)(Object(d.a)({},o),{},{filterByNumericValues:Object(E.a)(t)});console.log(a),i(Object(d.a)({},a))}(t)}},"X"))})))))},v={filterByName:{name:""},filterByNumericValues:[]};var h=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(v),E=Object(u.a)(c,2),f=E[0],d=E[1],p=Object(n.useState)([]),h=Object(u.a)(p,2),j=h[0],O=h[1];return Object(n.useEffect)((function(){o().then((function(e){return O(e)}))}),[]),Object(n.useEffect)((function(){var e=j,t=f.filterByName.name;j!==[]&&""!==t&&(e=e.filter((function(e){return e.name.includes(t)}))),r(e)}),[j,f]),Object(n.useEffect)((function(){var e=f.filterByName.name;f.filterByNumericValues.forEach((function(t){var a=t.comparison,n=t.column,l=t.value,c=j.filter((function(t){var r=t.name.toLowerCase().includes(e.toLowerCase());switch(a){case"maior que":return+t[n]>+l&&r;case"menor que":return+t[n]<+l&&r;case"igual a":return+t[n]===+l&&r;default:return r}}));r(c)}))}),[j,f]),l.a.createElement(m.Provider,{value:{filters:f,setFilters:d}},l.a.createElement(i.Provider,{value:{data:j,planets:a,setPlanets:r}},l.a.createElement(b,null),l.a.createElement(s,null)))};c.a.render(l.a.createElement(h,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.aa5182ff.chunk.js.map