(this["webpackJsonpcheang150.github.io"]=this["webpackJsonpcheang150.github.io"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(1),s=a.n(i),c=a(7),n=a.n(c),r=(a(15),a(16),a(2)),o=a(3),l=a(5),d=a(4),h=(a(17),a(8)),b=a(0),p=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("header",{id:"header",children:[Object(b.jsxs)("p",{id:"name",children:["I'm ",Object(b.jsx)("span",{children:"Wai Bin."})]}),Object(b.jsx)("h1",{children:Object(b.jsx)(h.Typewriter,{words:["> Hello;"]})}),Object(b.jsx)("p",{id:"description",children:"A Passionate Software Developer."}),Object(b.jsx)("a",{href:"#",className:"buttonAnimation",download:!0,children:"Get CV"})]})}}]),a}(s.a.Component),j=(a(19),a(9)),m=a.n(j),g=a(10),f=a.n(g),u=(a(20),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){f.a.init({easing:"ease-in-out"})}},{key:"render",value:function(){var e=this,t={backgroundColor:this.props.bgColor,margin:this.props.alignLeft?"0 10% 0 0":"0 0 0 10%"},a={backgroundColor:this.props.iconColor,borderRadius:"50%",padding:"2%"},i={marginLeft:this.props.alignLeft?"45%":"",marginRight:this.props.alignLeft?"":"45%"};return Object(b.jsx)("section",{id:this.props.id,style:t,"data-aos":this.props.alignLeft?"fade-right":"fade-left",children:Object(b.jsxs)("div",{className:"innerSectionMargin",style:i,children:[Object(b.jsx)("img",{src:this.props.icon,alt:this.props.id+" icon",style:a,"data-aos":this.props.alignLeft?"fade-right":"fade-left"}),Object(b.jsx)("h1",{className:"sectionTitle","data-aos":this.props.alignLeft?"fade-right":"fade-left",children:this.props.id}),Object(b.jsxs)("article",{className:"expArticle",children:[Object(b.jsx)("p",{"data-aos":this.props.alignLeft?"fade-right":"fade-left",children:this.props.datas[0].name}),Object(b.jsx)("p",{className:"role","data-aos":this.props.alignLeft?"fade-right":"fade-left",children:this.props.datas[0].role}),Object(b.jsx)("ul",{children:this.props.datas[0].descriptions.map((function(t){return Object(b.jsx)("li",{"data-aos":e.props.alignLeft?"fade-right":"fade-left",children:t})}))})]}),Object(b.jsx)(m.a,{trigger:"SEE MORE",triggerWhenOpen:"",children:this.props.datas.slice(1).map((function(e){return Object(b.jsxs)("article",{className:"expArticle",children:[Object(b.jsx)("p",{children:e.name}),Object(b.jsx)("p",{className:"role",children:e.role}),Object(b.jsx)("ul",{children:e.descriptions.map((function(e){return Object(b.jsx)("li",{children:e})}))})]})}))})]})})}}]),a}(s.a.Component)),O=a.p+"static/media/hat.472bd5cb.svg",x=a.p+"static/media/bag.7ba639b9.svg",v=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={education:[{name:"The University of Nottingham",role:"BSc Hons Computer Science with Artificial Intelligence",descriptions:["First-class Honours","Recipient of Dean\u2019s List Academic Achievement Award"]},{name:"The University of Nottingham Malaysia Campus",role:"Foundation in Science (Computer Science)",descriptions:["First-class Honours","Recipient of High Achiever Award"]}],work:[{name:"Inari Technology Sdn Bhd",role:"Software Automation Intern",descriptions:["Collaborated closely with a team of 3 people to design an employee entry system based on their health status.","Reverse-engineered government\u2019s healthcare application to identify the AES encryption secret key.","Discovered opportunity to automate web form-based information extractor with pyTesseract Optical Character Recognition and improved user in-app time by 80%.","Researched Python Selenium and developed a web scraper to optimize previous OCR information extractor accuracy by 15%."]},{name:"Inari Technology Sdn Bhd",role:"Production Technician",descriptions:["Coordinated effectively with a production engineer to streamline an automated extract-transform-load process to push datas from machines\u2019 log files to database.","Modelled and visualize data extracted from log files and successfully create business values that lead to 30% workforce reduction with Pandas and Seaborn.","Automate manual back-office processing through VBA scripting and automation engine."]}],icons:[O,x]},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(b.jsxs)(s.a.Fragment,{children:[Object(b.jsx)(u,{id:Object.keys(this.state)[0],alignLeft:!1,bgColor:"rgb(252,248,246)",iconColor:"rgb(247,218,184)",icon:this.state.icons[0],datas:this.state.education}),Object(b.jsx)(u,{id:Object.keys(this.state)[1],alignLeft:!0,bgColor:"rgb(245,250,250)",iconColor:"rgb(217,243,249)",icon:this.state.icons[1],datas:this.state.work})]})}}]),a}(s.a.Component),y=(a(21),a(22),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(b.jsx)("article",{className:"skillArticle",children:Object(b.jsx)("article",{className:"images",children:this.props.datas.map((function(e){return Object(b.jsxs)("figure",{style:{backgroundColor:e.color},"data-aos":"fade-right",children:[Object(b.jsx)("img",{src:e.src,alt:e.name}),Object(b.jsx)("p",{className:"description",children:e.name})]})}))})})}}]),a}(s.a.Component)),k=a.p+"static/media/html.5804150e.svg",w=a.p+"static/media/css.6ec1697a.svg",C=a.p+"static/media/react.7dbda72a.svg",S=a.p+"static/media/node.dd47e26e.svg",A=a.p+"static/media/php.2eb2596e.svg",L=a.p+"static/media/git.32c0058c.svg",N=a.p+"static/media/sql.dc13c077.svg",M=a.p+"static/media/scikit.e5d55118.svg",R=a.p+"static/media/pandas.04d44888.svg",T=a.p+"static/media/opencv.0d8d7a5e.svg",P=a.p+"static/media/seaborn.9b5bf9c6.svg",H=a.p+"static/media/matplotlib.a3a9e876.svg",I=a.p+"static/media/selenium.47a7b909.svg",z=a.p+"static/media/mocha.09bec610.svg",B=a.p+"static/media/haskell.13f0acb9.svg",_=a.p+"static/media/python.063da199.svg",q=a.p+"static/media/java.5386b56c.svg",D=a.p+"static/media/c.ee4cde06.svg",E=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={skills:[{name:"HTML",src:k,color:"rgba(227, 79, 38, 0.15)"},{name:"CSS",src:w,color:"rgba(38, 77, 228, 0.15)"},{name:"React",src:C,color:"rgba(97, 218, 251, 0.15)"},{name:"NodeJS",src:S,color:"rgba(104, 159, 99, 0.15)"},{name:"PHP",src:A,color:"rgba(119, 123, 179, 0.15)"},{name:"Mocha",src:z,color:"rgba(141, 103, 72, 0.15)"},{name:"SQL",src:N,color:"rgba(0, 117, 143, 0.15)"},{name:"Python",src:_,color:"rgba(75, 138, 190, 0.15)"},{name:"Scikit-learn",src:M,color:"rgba(248, 153, 57, 0.15)"},{name:"Pandas",src:R,color:"rgba(19, 7, 84, 0.15)"},{name:"OpenCV",src:T,color:"rgba(242, 242, 242, 1)"},{name:"Seaborn",src:P,color:"rgba(92, 125, 162, 0.15)"},{name:"Matplotlib",src:H,color:"rgba(242, 242, 242, 1)"},{name:"Selenium",src:I,color:"rgba(44, 177, 52, 0.15)"},{name:"Java",src:q,color:"rgba(21, 101, 192, 0.15)"},{name:"C",src:D,color:"rgba(40, 53, 147, 0.15)"},{name:"Haskell",src:B,color:"rgba(94, 80, 134, 0.15)"},{name:"Git",src:L,color:"rgba(240, 82, 51, 0.15)"}]},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("section",{className:"skills",children:[Object(b.jsx)("h1",{id:"sectionTitle","data-aos":"fade-right",children:"Core Competencies"}),Object(b.jsx)("p",{id:"sectionDescription","data-aos":"fade-up",children:"Capabilities that comprise the strategic advantages of your company"}),Object(b.jsx)(y,{datas:this.state.skills})]})}}]),a}(s.a.Component),F=(a(23),a.p+"static/media/faq.e08bd837.svg"),J=a.p+"static/media/blob.277856b9.svg",V=a.p+"static/media/github.5e903b81.svg",G=a.p+"static/media/linkedin.a4464e90.svg",U=a.p+"static/media/instagram.f3694804.svg",W=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("footer",{children:[Object(b.jsxs)("section",{"data-aos":"fade-up","data-aos-offset":"150",children:[Object(b.jsx)("img",{src:F,alt:"question icon",id:"faq"}),Object(b.jsxs)("section",{className:"actualSection",children:[Object(b.jsxs)("article",{children:[Object(b.jsx)("h1",{"data-aos":"fade-right",children:"Contact Me"}),Object(b.jsx)("p",{"data-aos":"fade-right",children:"Let's work together towards a common vision"})]}),Object(b.jsx)("a",{href:"mailto:cwb_chg@hotmail.com","data-aos":"zoom-in","data-aos-offset":"220",children:"Let's Chat!"}),Object(b.jsx)("img",{src:J,alt:"blob",id:"blob"})]})]}),Object(b.jsxs)("section",{class:"contactInfo",children:[Object(b.jsx)("p",{className:"quote",children:"Stay Connected"}),Object(b.jsx)("p",{children:"Penang, MY"}),Object(b.jsx)("p",{children:"cwb_chg@hotmail.com"}),Object(b.jsx)("p",{children:"(+60)13-446-0268"}),Object(b.jsx)("a",{href:"https://github.com/cheang150",class:"profile",target:"_blank",children:Object(b.jsx)("figure",{id:"github","data-aos":"zoom-in","data-aos-offset":"45",children:Object(b.jsx)("img",{src:V,alt:"github"})})}),Object(b.jsx)("a",{href:"https://www.linkedin.com/in/cheang-wai-bin",class:"profile",target:"_blank",children:Object(b.jsx)("figure",{id:"linkedin","data-aos":"zoom-in","data-aos-offset":"45",children:Object(b.jsx)("img",{src:G,alt:"linkedin"})})}),Object(b.jsx)("a",{href:"https://www.instagram.com/cheang_waibin/",class:"profile",target:"_blank",children:Object(b.jsx)("figure",{id:"instagram","data-aos":"zoom-in","data-aos-offset":"45",children:Object(b.jsx)("img",{src:U,alt:"instagram"})})})]})]})}}]),a}(s.a.Component);var Q=function(){return Object(b.jsxs)(s.a.Fragment,{children:[Object(b.jsx)(p,{}),Object(b.jsx)(v,{}),Object(b.jsx)(E,{}),Object(b.jsx)(W,{})]})};n.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(Q,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.bd112b1d.chunk.js.map