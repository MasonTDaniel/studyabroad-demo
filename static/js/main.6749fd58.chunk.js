(this.webpackJsonpfrontenddev=this.webpackJsonpfrontenddev||[]).push([[0],{39:function(e,t,a){e.exports=a.p+"static/media/su-logo.3c1dbbf4.png"},42:function(e,t,a){e.exports=a(79)},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(19),o=a.n(l),s=(a(47),a(10)),i=a(11),m=a(13),c=a(12),u=a(14),g=a(18),d=a(17),h=(a(48),a(49),a(80)),f=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.state.filteredProgramList.map((function(e){return n.a.createElement("tr",{key:e.id},n.a.createElement("td",null,e.country),n.a.createElement("td",null,e.term),n.a.createElement("td",null,e.name),n.a.createElement("td",null,e.areaOfStudy),n.a.createElement("td",null,e.language),n.a.createElement("td",null,e.cost),n.a.createElement("td",null,n.a.createElement("a",{href:"https://"+e.website,target:"_blank",rel:"noopener noreferrer"},e.website)))}));return Array.isArray(e)&&0===e.length?n.a.createElement("div",null,n.a.createElement("h5",{style:{textAlign:"center",marginTop:"2rem"}},"No Results")):n.a.createElement("div",{className:"result"},n.a.createElement(h.a,null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Country"),n.a.createElement("th",null,"Term"),n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Area of Study"),n.a.createElement("th",null,"Language"),n.a.createElement("th",null,"Cost"),n.a.createElement("th",null,"Website"))),n.a.createElement("tbody",null,e)))}}]),t}(r.Component),y=a(81),E=a(82),p=a(83),b=a(84),v=a(16),P=a.n(v),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(c.a)(t).call(this,e))).onSearch=function(e){var t=[];P.a.get("https://studyabroad-test-server.herokuapp.com/allPrograms").then((function(r){t=r.data.map((function(e){return e})),t=a.filterPrograms(t),a.setState({filteredProgramList:t,displayResults:e})}),(function(e){console.log(e)}))},a.filterPrograms=function(e){for(var t=[],r=0;r<e.length;r++)e[r].term!==a.state.filters.termFilter&&"Any"!==a.state.filters.termFilter||e[r].country!==a.state.filters.countryFilter&&"Any"!==a.state.filters.countryFilter||e[r].areaOfStudy!==a.state.filters.areaOfStudyFilter&&"Any"!==a.state.filters.areaOfStudyFilter||e[r].language!==a.state.filters.languageFilter&&"Any"!==a.state.filters.languageFilter||t.push(e[r]);return t},a.resetSearch=function(){a.setState({filters:{termFilter:"Any",countryFilter:"Any",areaOfStudyFilter:"Any",languageFilter:"Any"},filteredProgramList:[],displayResults:!1})},a.state={filters:{termFilter:"Any",countryFilter:"Any",areaOfStudyFilter:"Any",languageFilter:"Any"},filteredProgramList:[],displayResults:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"getUnique",value:function(e){return e.filter((function(t,a){return e.indexOf(t)>=a}))}},{key:"render",value:function(){var e=this,t=this.props.state.programs,a=t.map((function(e){return e.term}));(a=this.getUnique(a)).sort(),(a=a.filter((function(e){return"Any"!==e}))).unshift("Any"),a=a.map((function(e,t){return n.a.createElement("option",{key:t},e)}));var r=t.map((function(e){return e.country}));(r=this.getUnique(r)).sort(),(r=r.filter((function(e){return"Any"!==e}))).unshift("Any"),r=r.map((function(e,t){return n.a.createElement("option",{key:t},e)}));var l=t.map((function(e){return e.areaOfStudy}));(l=this.getUnique(l)).sort(),(l=l.filter((function(e){return"Any"!==e}))).unshift("Any"),l=l.map((function(e,t){return n.a.createElement("option",{key:t},e)}));var o=t.map((function(e){return e.language}));return(o=this.getUnique(o)).sort(),(o=o.filter((function(e){return"Any"!==e}))).unshift("Any"),o=o.map((function(e,t){return n.a.createElement("option",{key:t},e)})),n.a.createElement("div",null,n.a.createElement("div",{style:{justifyContent:"space-evenly",marginTop:"1rem"},className:"form-inline"},n.a.createElement("div",null,n.a.createElement(y.a,null,n.a.createElement(E.a,{style:{marginRight:"0.25rem"},for:"termFilter"},"Term"),n.a.createElement(p.a,{type:"select",value:this.state.filters.termFilter,onChange:function(t){var a=e.state.filters;a.termFilter=t.target.value,e.setState({filters:a})}},a))),n.a.createElement("div",{className:"mr-20 ml-20"},n.a.createElement(y.a,null,n.a.createElement(E.a,{style:{marginRight:"0.25rem",marginLeft:"0.75rem"},for:"countryFilter"},"Country"),n.a.createElement(p.a,{type:"select",id:"countryFilter",value:this.state.filters.countryFilter,onChange:function(t){var a=e.state.filters;a.countryFilter=t.target.value,e.setState({filters:a})}},r))),n.a.createElement("div",{className:"mr-20 ml-20"},n.a.createElement(y.a,null,n.a.createElement(E.a,{style:{marginRight:"0.25rem",marginLeft:"0.75rem"},for:"areaOfStudyFilter"},"Area of Study"),n.a.createElement(p.a,{type:"select",id:"areaOfStudyFilter",value:this.state.filters.areaOfStudyFilter,onChange:function(t){var a=e.state.filters;a.areaOfStudyFilter=t.target.value,e.setState({filters:a})}},l))),n.a.createElement("div",{className:"mr-20 ml-20"},n.a.createElement(y.a,null,n.a.createElement(E.a,{style:{marginRight:"0.25rem",marginLeft:"0.75rem"},for:"languageFilter"},"Language"),n.a.createElement(p.a,{type:"select",id:"languageFilter",value:this.state.filters.languageFilter,onChange:function(t){var a=e.state.filters;a.languageFilter=t.target.value,e.setState({filters:a})}},o))),n.a.createElement(b.a,{className:"btn",style:{background:"#FFCD00",border:"none",color:"#000000",marginLeft:"0.5rem"},onClick:this.onSearch.bind(this,!0)},"Search"),n.a.createElement(b.a,{style:{background:"#FFCD00",border:"none",color:"#000000",marginLeft:"0.5rem"},className:"btn-danger",onClick:this.resetSearch},"Reset Search")),n.a.createElement("div",null,this.state.displayResults&&n.a.createElement(f,{state:this.state})))}}]),t}(r.Component),D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(c.a)(t).call(this,e))).state={programs:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=[];P.a.get("https://studyabroad-test-server.herokuapp.com/db").then((function(a){t=a.data.allPrograms.map((function(e){return e})),e.setState({programs:t})}))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h6",{style:{textAlign:"right",color:"gray"}},"(Demo Version. ",n.a.createElement("a",{href:"https://github.com/MasonTDaniel/studyabroad-demo",target:"_blank",rel:"noopener noreferrer"}," Code for this UI demo")," and ",n.a.createElement("a",{href:"https://github.com/MasonTDaniel/study-abroad-recommender",target:"_blank",rel:"noopener noreferrer"},"Code for the whole project"),")"),n.a.createElement("h5",{style:{textAlign:"center"}},"Search for study abroad programs recommended by SU below"),n.a.createElement(w,{state:this.state}))}}]),t}(r.Component),S=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(D,null))}}]),t}(r.Component),O=a(88),C=a(85),k=a(86),A=a(87),F=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(c.a)(t).call(this))).isDisabled=function(){""==!e.state.newProgramData.country&&""==!e.state.newProgramData.term&&""==!e.state.newProgramData.name&&""==!e.state.newProgramData.areaOfStudy&&""==!e.state.newProgramData.language&&""==!e.state.newProgramData.cost&&""==!e.state.newProgramData.website?e.setState({isDisabled:!1}):e.setState({isDisabled:!0})},e.state={programs:[],newProgramData:{country:"",term:"",name:"",areaOfStudy:"",language:"",cost:"",website:""},editProgramData:{id:"",country:"",term:"",name:"",areaOfStudy:"",language:"",cost:"",website:""},newProgramModal:!1,editProgramModal:!1,isDisabled:!0},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;P.a.get("https://studyabroad-test-server.herokuapp.com/db").then((function(t){e.setState({programs:t.data.allPrograms})}),(function(e){console.log(e)}))}},{key:"toggleNewProgramModal",value:function(){this.setState({newProgramModal:!this.state.newProgramModal})}},{key:"toggleEditProgramModal",value:function(){this.setState({editProgramModal:!this.state.editProgramModal})}},{key:"addProgram",value:function(){var e=this;P.a.post("https://studyabroad-test-server.herokuapp.com/allPrograms",this.state.newProgramData).then((function(t){var a=e.state.programs;console.log("cost: "+e.state.newProgramData.cost),console.log("responsedata: "+t.data.cost),console.log("programs: "+a),a.push(t.data),e.setState({programs:a,newProgramModal:!1,isDisabled:!0,newProgramData:{id:"",country:"",term:"",name:"",areaOfStudy:"",language:"",cost:"",website:""}})}))}},{key:"editProgram",value:function(e,t,a,r,n,l,o,s){this.setState({editProgramData:{id:e,country:t,term:a,name:r,areaOfStudy:n,language:l,cost:o,website:s},editProgramModal:!this.state.editProgramModal})}},{key:"updateProgram",value:function(){var e=this,t=this.state.editProgramData,a=t.country,r=t.term,n=t.name,l=t.areaOfStudy,o=t.language,s=t.cost,i=t.website;P.a.put("https://studyabroad-test-server.herokuapp.com/allPrograms//"+this.state.editProgramData.id,{country:a,term:r,name:n,areaOfStudy:l,language:o,cost:s,website:i}).then((function(t){e.refreshPrograms(),e.setState({editProgramModal:!e.state.editProgramModal,editProgramData:{id:"",country:"",term:"",name:"",areaOfStudy:"",language:"",cost:"",website:""}})}))}},{key:"deleteProgram",value:function(e){var t=this;P.a.delete("https://studyabroad-test-server.herokuapp.com/allPrograms/"+e).then((function(e){t.refreshPrograms()}))}},{key:"refreshPrograms",value:function(){var e=this;P.a.get("https://studyabroad-test-server.herokuapp.com/db").then((function(t){e.setState({programs:t.data.allPrograms})}),(function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.programs.map((function(t){return n.a.createElement("tr",{key:t.id},n.a.createElement("td",null,t.id),n.a.createElement("td",null,t.country),n.a.createElement("td",null,t.term),n.a.createElement("td",null,t.name),n.a.createElement("td",null,t.areaOfStudy),n.a.createElement("td",null,t.language),n.a.createElement("td",null,t.cost),n.a.createElement("td",null,n.a.createElement("a",{href:"https://"+t.website,target:"_blank",rel:"noopener noreferrer"},t.website)),n.a.createElement("td",{style:{width:"10rem"}},n.a.createElement(b.a,{style:{width:"3.75rem",marginRight:"0.2rem",marginLeft:"0.2rem"},color:"success",size:"sm",onClick:e.editProgram.bind(e,t.id,t.country,t.term,t.name,t.areaOfStudy,t.language,t.cost,t.website)},"Edit"),n.a.createElement(b.a,{style:{width:"3.75rem",marginRight:"0.2rem",marginLeft:"0.2rem"},color:"danger",size:"sm",onClick:e.deleteProgram.bind(e,t.id)},"Delete")))}));return n.a.createElement("div",null,n.a.createElement("h6",{style:{textAlign:"right",color:"gray"}},"(Demo Version. ",n.a.createElement("a",{href:"https://github.com/MasonTDaniel/studyabroad-demo",target:"_blank",rel:"noopener noreferrer"}," Code for this UI demo")," and ",n.a.createElement("a",{href:"https://github.com/MasonTDaniel/study-abroad-recommender",target:"_blank",rel:"noopener noreferrer"},"Code for the whole project"),")"),n.a.createElement(b.a,{style:{marginBottom:"0.5rem"},color:"primary",onClick:this.toggleNewProgramModal.bind(this)},"Add Program"),n.a.createElement(O.a,{isOpen:this.state.newProgramModal,toggle:this.toggleNewProgramModal.bind(this)},n.a.createElement(C.a,{toggle:this.toggleNewProgramModal.bind(this)},"Add a new program"),n.a.createElement(k.a,null,n.a.createElement(y.a,null,n.a.createElement(E.a,{for:"Country"},"Country"),n.a.createElement(p.a,{id:"country",placeholder:'e.g. " Spain"',value:this.state.newProgramData.country,onChange:function(t){var a=e.state.newProgramData;a.country=t.target.value,e.setState({newProgramData:a}),console.log(e.state.newProgramData.country),e.isDisabled()}})),n.a.createElement(y.a,null,n.a.createElement(E.a,{for:"Term"},"Term"),n.a.createElement(p.a,{id:"term",placeholder:'e.g. " Fall"',value:this.state.newProgramData.term,onChange:function(t){var a=e.state.newProgramData;a.term=t.target.value,e.setState({newProgramData:a}),e.isDisabled()}})),n.a.createElement(y.a,null,n.a.createElement(E.a,{for:"Name"},"Program Name"),n.a.createElement(p.a,{id:"name",placeholder:'e.g. "Universidad de Vigo"',value:this.state.newProgramData.name,onChange:function(t){var a=e.state.newProgramData;a.name=t.target.value,e.setState({newProgramData:a}),e.isDisabled()}})),n.a.createElement(y.a,null,n.a.createElement(E.a,{for:"AreaOfStudy"},"Area of Study"),n.a.createElement(p.a,{id:"areaOfStudy",placeholder:'e.g. "Intercultural Studies"',value:this.state.newProgramData.areaOfStudy,onChange:function(t){var a=e.state.newProgramData;a.areaOfStudy=t.target.value,e.setState({newProgramData:a}),e.isDisabled()}})),n.a.createElement(y.a,null,n.a.createElement(E.a,{for:"Language"},"Language"),n.a.createElement(p.a,{id:"language",placeholder:'e.g. "English"',value:this.state.newProgramData.language,onChange:function(t){var a=e.state.newProgramData;a.language=t.target.value,e.setState({newProgramData:a}),e.isDisabled()}})),n.a.createElement(y.a,null,n.a.createElement(E.a,{for:"Cost"},"Cost"),n.a.createElement(p.a,{id:"cost",placeholder:'e.g. "20,000"',value:this.state.newProgramData.cost,onChange:function(t){var a=e.state.newProgramData;a.cost=t.target.value,e.setState({newProgramData:a}),e.isDisabled()}})),n.a.createElement(y.a,null,n.a.createElement(E.a,{for:"Website"},"Website"),n.a.createElement(p.a,{id:"website",placeholder:'e.g. "www.southwestern.edu"',value:this.state.newProgramData.website,onChange:function(t){var a=e.state.newProgramData;a.website=t.target.value,e.setState({newProgramData:a}),e.isDisabled()}}))),n.a.createElement(A.a,null,n.a.createElement(b.a,{disabled:this.state.isDisabled,color:"primary",onClick:this.addProgram.bind(this)},"Add Program")," ",n.a.createElement(b.a,{color:"secondary",onClick:this.toggleNewProgramModal.bind(this)},"Cancel"))),n.a.createElement(O.a,{isOpen:this.state.editProgramModal,toggle:this.toggleEditProgramModal.bind(this)},n.a.createElement(C.a,{toggle:this.toggleEditProgramModal.bind(this)},"Edit a program"),n.a.createElement(k.a,null,n.a.createElement(y.a,null,n.a.createElement(E.a,{for:"Country"},"Country"),n.a.createElement(p.a,{id:"country",placeholder:'e.g. " Spain"',value:this.state.editProgramData.country,onChange:function(t){var a=e.state.editProgramData;a.country=t.target.value,e.setState({editProgramData:a})}})),n.a.createElement(y.a,null,n.a.createElement(E.a,{for:"Term"},"Term"),n.a.createElement(p.a,{id:"term",placeholder:'e.g. " Fall"',value:this.state.editProgramData.term,onChange:function(t){var a=e.state.editProgramData;a.term=t.target.value,e.setState({editProgramData:a})}})),n.a.createElement(y.a,null,n.a.createElement(E.a,{for:"Name"},"Program Name"),n.a.createElement(p.a,{id:"name",placeholder:'e.g. "Universidad de Vigo"',value:this.state.editProgramData.name,onChange:function(t){var a=e.state.editProgramData;a.name=t.target.value,e.setState({editProgramData:a})}})),n.a.createElement(y.a,null,n.a.createElement(E.a,{for:"AreaOfStudy"},"Area of Study"),n.a.createElement(p.a,{id:"areaOfStudy",placeholder:'e.g. "Intercultural Studies"',value:this.state.editProgramData.areaOfStudy,onChange:function(t){var a=e.state.editProgramData;a.areaOfStudy=t.target.value,e.setState({editProgramData:a})}})),n.a.createElement(y.a,null,n.a.createElement(E.a,{for:"Language"},"Language"),n.a.createElement(p.a,{id:"language",placeholder:'e.g. "English"',value:this.state.editProgramData.language,onChange:function(t){var a=e.state.editProgramData;a.language=t.target.value,e.setState({editProgramData:a})}})),n.a.createElement(y.a,null,n.a.createElement(E.a,{for:"Cost"},"Cost"),n.a.createElement(p.a,{id:"cost",placeholder:'e.g. "20,000"',value:this.state.editProgramData.cost,onChange:function(t){var a=e.state.editProgramData;a.cost=t.target.value,e.setState({editProgramData:a})}})),n.a.createElement(y.a,null,n.a.createElement(E.a,{for:"Website"},"Website"),n.a.createElement(p.a,{id:"website",placeholder:'e.g. "www.southwestern.edu"',value:this.state.editProgramData.website,onChange:function(t){var a=e.state.editProgramData;a.website=t.target.value,e.setState({editProgramData:a})}}))),n.a.createElement(A.a,null,n.a.createElement(b.a,{color:"primary",onClick:this.updateProgram.bind(this)},"Update")," ",n.a.createElement(b.a,{color:"secondary",onClick:this.toggleEditProgramModal.bind(this)},"Cancel"))),n.a.createElement(h.a,null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"id"),n.a.createElement("th",null,"Country"),n.a.createElement("th",null,"Term"),n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Area Of Study"),n.a.createElement("th",null,"Language"),n.a.createElement("th",null,"Cost"),n.a.createElement("th",null,"Website"),n.a.createElement("th",null))),n.a.createElement("tbody",null,t)))}}]),t}(r.Component),j=a(39),M=a.n(j),N=function(){return n.a.createElement("div",{id:"nav",className:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom shadow-sm"},n.a.createElement("a",{href:"https://www.southwestern.edu",target:"_blank",rel:"noopener noreferrer",className:"my-0 mr-md-auto align-self-start"},n.a.createElement("img",{style:{width:"15rem"},src:M.a,alt:""})),n.a.createElement(g.b,{to:"/",className:"btn"},"Search"),n.a.createElement("a",{className:"btn",href:"https://www.southwestern.edu/study-abroad/contact-us/",target:"_blank",rel:"noopener noreferrer"},"Contact Us"),n.a.createElement(g.b,{to:"/admin-dashboard",className:"btn"},"Admin"))},L=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(g.a,{basename:"/studyabroad-demo"},n.a.createElement(N,null),n.a.createElement("div",{className:"container"},n.a.createElement(d.a,{exact:!0,path:"/",component:S}),n.a.createElement(d.a,{exact:!0,path:"/admin-dashboard",component:F})))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(g.a,null,n.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.6749fd58.chunk.js.map