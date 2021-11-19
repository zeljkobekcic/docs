(self.webpackChunkdocs_datalbry_io=self.webpackChunkdocs_datalbry_io||[]).push([[695],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),m=r,u=h["".concat(l,".").concat(m)]||h[m]||d[m]||o;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5410:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i={},s={unversionedId:"Integrations/Connector-SDK/CONCEPT",id:"Integrations/Connector-SDK/CONCEPT",isDocsHomePage:!1,title:"Concepts",description:"Preamble",source:"@site/docs/Integrations/Connector-SDK/CONCEPT.mdx",sourceDirName:"Integrations/Connector-SDK",slug:"/Integrations/Connector-SDK/CONCEPT",permalink:"/Integrations/Connector-SDK/CONCEPT",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Quickstart",permalink:"/Connectors/GitHub/QUICKSTART"},next:{title:"Overview",permalink:"/Integrations/Connector-SDK/OVERVIEW"}},l=[{value:"Preamble",id:"preamble",children:[]},{value:"Graph",id:"graph",children:[{value:"Nodes",id:"nodes",children:[]},{value:"Edges",id:"edges",children:[]},{value:"Documents",id:"documents",children:[]},{value:"Container",id:"container",children:[]}]},{value:"Modes",id:"modes",children:[{value:"Content Traversal",id:"content-traversal",children:[]}]},{value:"Parallelization",id:"parallelization",children:[]},{value:"Integration Cycle",id:"integration-cycle",children:[]}],c={toc:l};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"preamble"},"Preamble"),(0,o.kt)("p",null,"This document is meant to describe the core-concepts of the Connector-SDK.\nIt might be complicated by the first glimpse, but if you are familiar with graph-algorithms,\nit will be rather easy to understand."),(0,o.kt)("h2",{id:"graph"},"Graph"),(0,o.kt)("p",null,"Most systems can easily be described with a graph of information,\nsome nodes in the graph are simply there to point to other nodes,\nwhile other nodes are simply there to describe a specific resource."),(0,o.kt)("p",null,"Is rather abstract in the very first moment, but gets clearer with an example."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We want to integrate the data from Slack into the Knowledge Cloud.\nTherefore, we are analysing the information graph within Slack."),(0,o.kt)("p",{parentName:"div"},"There is an object called ",(0,o.kt)("strong",{parentName:"p"},"Chat"),", which is directly related to ",(0,o.kt)("strong",{parentName:"p"},"n")," different user.\nThe chat also contains any arbitrary amount of messages.\nEach message can contain a limited amount of attachments."),(0,o.kt)("p",{parentName:"div"},"For our information graph we are following exactly the described path.\nFirst we have a node ",(0,o.kt)("strong",{parentName:"p"},"Chat")," with a unique identifier, linking to all ",(0,o.kt)("strong",{parentName:"p"},"n")," user plus all messages.\nWhile each and every message will also have a unique identifier plus a reference to its attachments."))),(0,o.kt)("h3",{id:"nodes"},"Nodes"),(0,o.kt)("p",null,"Nodes are parts of the system, containing information of the system, such as:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"References (",(0,o.kt)("inlineCode",{parentName:"li"},"Edges"),") to other ",(0,o.kt)("inlineCode",{parentName:"li"},"Nodes")),(0,o.kt)("li",{parentName:"ol"},"Information of ",(0,o.kt)("inlineCode",{parentName:"li"},"Document"),"s")),(0,o.kt)("h3",{id:"edges"},"Edges"),(0,o.kt)("p",null,"Edges are parts of the system, describing the information necessary to access another node of the source.\nIn most parts its sufficient to describe the resource which should be accessed using the edge, as well as the identifier."),(0,o.kt)("p",null,"For Atlassian Confluence a valid edge might contain the following information: ",(0,o.kt)("inlineCode",{parentName:"p"},"Type:Space"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Id:DEV"),".\nThese two information are already sufficient to describe the ",(0,o.kt)("inlineCode",{parentName:"p"},"Space")," named ",(0,o.kt)("inlineCode",{parentName:"p"},"Dev"),"."),(0,o.kt)("p",null,"The information which have to be provided in edges heavily varies from system to system and from\nconnector implementation to implementation."),(0,o.kt)("h3",{id:"documents"},"Documents"),(0,o.kt)("p",null,"Documents are a specific type of Node containing information about a single entity in the source system.\nEach and every Document is described by at least it's primary key,\nwhich has to be unique for the whole source graph.\nDocuments are described by metadata, plus their content."),(0,o.kt)("h3",{id:"container"},"Container"),(0,o.kt)("p",null,"Container are also a specific type of Node, but in contrast to Documents container only provide information of Edges\nContainer are especially useful when there are Nodes without much metadata, and which might not be useful to integrate as a Document."),(0,o.kt)("h2",{id:"modes"},"Modes"),(0,o.kt)("p",null,"The Connector-SDK currently supports a single mode: ",(0,o.kt)("strong",{parentName:"p"},"Content Traversal"),".\nThere are more planned for the future.\nSuch as ",(0,o.kt)("strong",{parentName:"p"},"Principal Traversal"),", which will traverse the security information of the system."),(0,o.kt)("h3",{id:"content-traversal"},"Content Traversal"),(0,o.kt)("p",null,"A content traversal is a simple traversal of the whole system,\nstarting at the very root and traversing the whole graph."),(0,o.kt)("h2",{id:"parallelization"},"Parallelization"),(0,o.kt)("p",null,"The Connector-SDK is able to parallelize the processing of nodes.\nWhile the integration cycle is being single threaded for each node,\nthere might be multiple cycles running at a time,\neach on a different node of the source system."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To parallelize set the property ",(0,o.kt)("em",{parentName:"p"},"io.datalbry.connector.concurrency")," to 2 or more.\nWe highly recommend not using a value greater than 10.\nNegative values, as well as the value 0 are unsupported."))),(0,o.kt)("h2",{id:"integration-cycle"},"Integration Cycle"),(0,o.kt)("p",null,"The Connector-SDK itself is a state-ful application, requiring to persist the current structure of the knowledge graph.\nWhenever running a subsequent traversal, the Connector will continuously check for deleted nodes within the graph.\nDeleted nodes can simply be a Page which has been deleted within e.g. Atlassian Confluence,\nor sometimes a whole Space which will result into deleting all its documents."),(0,o.kt)("p",null,"The integration cycle refers to a single node.\nThe Connector-SDK parallelize running integration cycles on multiple nodes at once."),(0,o.kt)("p",null,"The cycle runs the following steps"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Detection: Searching for references to new nodes"),(0,o.kt)("li",{parentName:"ol"},"Propagate References: Propagate the new references to the message broker"),(0,o.kt)("li",{parentName:"ol"},"Propagate Documents: Propagate the documents to the target system"),(0,o.kt)("li",{parentName:"ol"},"Calculate Deletions: Deletions are being calculated in simply running a diff between the current and last run of the specific node")))}p.isMDXComponent=!0}}]);