"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[349],{2349:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});var i,r,a,o,d,s,c,l=t(2791),u=t(9434),p=t(4383),x=function(n){return n.contacts.items},m=function(n){return n.contacts.isLoading},h=function(n){return n.contacts.error},f=t(5218),g=t(168),b=t(6444),w=b.ZP.main(i||(i=(0,g.Z)(["\n  display: block;\n  width: 100%;\n  /* height: 100%; */\n"]))),j=b.ZP.section(r||(r=(0,g.Z)(["\n  display: block;\n  max-width: 1600px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 64px 0px;\n  @media screen and (max-width: 768px) {\n  }\n  @media screen and (max-width: 1200px) {\n  }\n  @media screen and (min-width: 1200px) {\n  }\n"]))),v=b.ZP.div(a||(a=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  min-height: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  & > h1 {\n    font-size: 22px;\n    margin-bottom: 16px;\n  }\n  & > p {\n    margin-bottom: 16px;\n    font-size: 10px;\n    font-style: italic;\n  }\n  @media screen and (min-width: 480px) {\n    & > p {\n      margin-bottom: 16px;\n      font-size: 14px;\n      font-style: italic;\n    }\n  }\n  @media screen and (min-width: 768px) {\n    & > h1 {\n      font-size: 32px;\n    }\n  }\n  @media screen and (min-width: 1200px) {\n    width: 1200px;\n    & > p {\n      margin-bottom: 32px;\n    }\n  }\n"]))),y=b.ZP.div(o||(o=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  min-width: 300px;\n  margin: 0;\n  @media screen and (min-width: 480px) {\n    min-width: 400px;\n  }\n  @media screen and (min-width: 1200px) {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: start;\n    width: 800px;\n  }\n"]))),Z=b.ZP.div(d||(d=(0,g.Z)(["\n  width: 100%;\n  & > ul {\n    margin-left: auto;\n    margin-right: auto;\n  }\n  @media screen and (min-width: 1200px) {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: start;\n    width: 80%;\n    border: 1px solid #729599;\n    border-radius: 5px;\n    padding: 8px 16px;\n  }\n"]))),k=t(9439),P=t(4827),C=t(2609),z=b.ZP.form(s||(s=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 80%;\n  min-width: 80px;\n  margin-right: 20px;\n  margin-bottom: 20px;\n  border: 1px solid #32a1ce;\n  border-radius: 5px;\n  padding: 10px 20px 10px 20px;\n"]))),_=b.ZP.label(c||(c=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 16px;\n  font-weight: bold;\n  margin-bottom: 10px;\n  & > input {\n    border: 1px solid black;\n    border-radius: 3px;\n    padding: 4px;\n  }\n"]))),A=t(3329);function F(){var n=(0,l.useState)(""),e=(0,k.Z)(n,2),t=e[0],i=e[1],r=(0,l.useState)(""),a=(0,k.Z)(r,2),o=a[0],d=a[1],s=(0,u.v9)(x),c=(0,u.I0)(),p=function(n){var e=n.currentTarget,t=e.name,r=e.value;switch(t){case"name":i(r);break;case"number":d(r);break;default:return}},m=function(){i(""),d("")};return(0,A.jsxs)(z,{onSubmit:function(n){n.preventDefault();var e={name:t,number:o};if(null!==s&&void 0!==s&&s.some((function(n){return n.name===t})))return alert("".concat(t," is already in contacts."));c((0,P.uK)(e)),m()},children:[(0,A.jsxs)(_,{children:["Name",(0,A.jsx)("input",{type:"text",name:"name",value:t,onChange:p,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,autoFocus:!0})]}),(0,A.jsxs)(_,{children:["Number",(0,A.jsx)("input",{type:"tel",name:"number",value:o,onChange:p,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,A.jsx)(C.z,{children:"Add"})]})}var L,N,S,B,D,I=function(n){return n.filter},T=b.ZP.ul(L||(L=(0,g.Z)(["\n  padding-left: 20px;\n  color: black;\n"]))),q=t(8445),E=function(n){var e=n.type,t=void 0===e?"button":e,i=n.children,r=n.actionHandler;return(0,A.jsx)(q.v,{type:t,onClick:r,children:i})},H=b.ZP.li(N||(N=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 5px;\n  max-width: 100%\n  padding-right: 20px;\n  color: #07c;\n  &::before {\n    content: '';\n    width: 10px;\n    height: 8px;\n    margin-right: 10px;\n    border-radius: 50%;\n    background-color: #07c;\n  }\n"]))),J=b.ZP.span(S||(S=(0,g.Z)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding-right: 20px;\n  color: black;\n"]))),K=function(n){var e=n.id,t=n.name,i=n.number,r=n.onDeleteButton;return(0,A.jsx)(H,{children:(0,A.jsxs)(J,{children:["".concat(t,": ").concat(i),(0,A.jsx)(E,{actionHandler:function(){return r(e)},children:"X"})]})})},Y=function(){var n=(0,u.v9)(x),e=(0,u.v9)(I),t=(0,u.I0)();(0,l.useEffect)((function(){t((0,P.yF)())}),[t]);var i=function(){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))}();if(i.length>0)return(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(T,{children:i.map((function(n){var e=n.id,i=n.name,r=n.number;return(0,A.jsx)(K,{id:e,name:i,number:r,onDeleteButton:function(n){return t((0,P.GK)(n))}},e)}))})})},G=t(5653),M=b.ZP.label(B||(B=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 16px;\n  font-weight: bold;\n  width: 80%;\n  min-width: 80px;\n  margin-right: auto;\n  margin-left: auto;\n  & > input {\n    border: 1px solid black;\n    border-radius: 3px;\n    padding: 4px;\n  }\n"]))),X=b.ZP.input(D||(D=(0,g.Z)(["\n  width: 97%;\n"]))),$=function(){var n=(0,u.v9)(I),e=(0,u.I0)();return(0,A.jsxs)(M,{children:["Find contacts by name",(0,A.jsx)(X,{type:"text",name:"filter",value:n,onChange:function(n){return e((0,G.A4)(n.currentTarget.value))}})]})},O=t(5243),Q=function(){return(0,A.jsx)(O.g4,{height:"64",width:"64",radius:"9",color:"#729599",ariaLabel:"three-dots-loading",wrapperStyle:{justifyContent:"center"},wrapperClassName:"",visible:!0})};function R(){var n=(0,u.v9)(m),e=(0,u.v9)(h);return(0,l.useEffect)((function(){e&&(0,p.c)(e)}),[e]),(0,A.jsx)(w,{children:(0,A.jsx)(j,{children:(0,A.jsxs)(v,{children:[(0,A.jsx)("h1",{children:"This is Your Phonebook"}),(0,A.jsx)("p",{children:"You can add, delete and search contacts. Just try!"}),(0,A.jsxs)(y,{children:[(0,A.jsx)(F,{}),(0,A.jsxs)(Z,{children:[(0,A.jsx)($,{}),(0,A.jsx)(Y,{}),n&&(0,A.jsx)(Q,{})]})]}),(0,A.jsx)(f.x7,{})]})})})}}}]);
//# sourceMappingURL=349.3817eb75.chunk.js.map