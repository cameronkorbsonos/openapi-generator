(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{213:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return r})),a.d(e,"metadata",(function(){return c})),a.d(e,"rightToc",(function(){return O})),a.d(e,"default",(function(){return i}));var b=a(1),n=a(9),l=(a(0),a(312)),r={title:"Documentation for the scala-finch Generator"},c={id:"generators/scala-finch",title:"Documentation for the scala-finch Generator",description:"## METADATA",source:"@site/../docs/generators/scala-finch.md",permalink:"/docs/generators/scala-finch",editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/generators/scala-finch.md",lastUpdatedBy:"Arne Beer",lastUpdatedAt:1655132592},O=[{value:"METADATA",id:"metadata",children:[]},{value:"CONFIG OPTIONS",id:"config-options",children:[]},{value:"IMPORT MAPPING",id:"import-mapping",children:[]},{value:"INSTANTIATION TYPES",id:"instantiation-types",children:[]},{value:"LANGUAGE PRIMITIVES",id:"language-primitives",children:[]},{value:"RESERVED WORDS",id:"reserved-words",children:[]},{value:"FEATURE SET",id:"feature-set",children:[{value:"Client Modification Feature",id:"client-modification-feature",children:[]},{value:"Data Type Feature",id:"data-type-feature",children:[]},{value:"Documentation Feature",id:"documentation-feature",children:[]},{value:"Global Feature",id:"global-feature",children:[]},{value:"Parameter Feature",id:"parameter-feature",children:[]},{value:"Schema Support Feature",id:"schema-support-feature",children:[]},{value:"Security Feature",id:"security-feature",children:[]},{value:"Wire Format Feature",id:"wire-format-feature",children:[]}]}],j={rightToc:O};function i(t){var e=t.components,a=Object(n.a)(t,["components"]);return Object(l.b)("wrapper",Object(b.a)({},j,a,{components:e,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"metadata"},"METADATA"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Property"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Value"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"generator name"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"scala-finch"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"pass this to the generate command after -g")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"generator stability"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"STABLE"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"generator type"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"SERVER"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"generator language"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Scala"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"generator default templating engine"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"mustache"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"helpTxt"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Generates a Scala server application with Finch."),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}))))),Object(l.b)("h2",{id:"config-options"},"CONFIG OPTIONS"),Object(l.b)("p",null,"These options may be applied as additional-properties (cli) or configOptions (plugins). Refer to ",Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://openapi-generator.tech/docs/configuration"}),"configuration docs")," for more details."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Option"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Values"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"apiPackage"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"package for generated api classes"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"null")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"modelPackage"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"package for generated models"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"null")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"packageName"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Finch package name (e.g. org.openapitools)."),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"org.openapitools")))),Object(l.b)("h2",{id:"import-mapping"},"IMPORT MAPPING"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type/Alias"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Imports"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ArrayBuffer"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"scala.collection.mutable.ArrayBuffer")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Date"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"java.util.Date")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"DateTime"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"java.time.LocalDateTime")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"File"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"java.io.File")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"HashMap"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"scala.collection.immutable.HashMap")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"LocalDate"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"java.time.LocalDate")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"LocalDateTime"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"java.time.LocalDateTime")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"LocalTime"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"java.time.LocalTime")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Map"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"scala.collection.immutable.Map")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Seq"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"scala.collection.immutable.Seq")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Timestamp"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"java.sql.Timestamp")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"URI"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"java.net.URI")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"UUID"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"java.util.UUID")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ZonedDateTime"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"java.time.ZonedDateTime")))),Object(l.b)("h2",{id:"instantiation-types"},"INSTANTIATION TYPES"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type/Alias"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Instantiated By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"array"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ArrayList")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"map"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"HashMap")))),Object(l.b)("h2",{id:"language-primitives"},"LANGUAGE PRIMITIVES"),Object(l.b)("ul",{class:"column-ul"},Object(l.b)("li",null,"Any"),Object(l.b)("li",null,"AnyRef"),Object(l.b)("li",null,"AnyVal"),Object(l.b)("li",null,"Boolean"),Object(l.b)("li",null,"Double"),Object(l.b)("li",null,"Float"),Object(l.b)("li",null,"Int"),Object(l.b)("li",null,"Integer"),Object(l.b)("li",null,"Long"),Object(l.b)("li",null,"Object"),Object(l.b)("li",null,"String")),Object(l.b)("h2",{id:"reserved-words"},"RESERVED WORDS"),Object(l.b)("ul",{class:"column-ul"},Object(l.b)("li",null,"abstract"),Object(l.b)("li",null,"assert"),Object(l.b)("li",null,"break"),Object(l.b)("li",null,"byte"),Object(l.b)("li",null,"case"),Object(l.b)("li",null,"catch"),Object(l.b)("li",null,"char"),Object(l.b)("li",null,"class"),Object(l.b)("li",null,"const"),Object(l.b)("li",null,"continue"),Object(l.b)("li",null,"def"),Object(l.b)("li",null,"default"),Object(l.b)("li",null,"do"),Object(l.b)("li",null,"double"),Object(l.b)("li",null,"else"),Object(l.b)("li",null,"enum"),Object(l.b)("li",null,"extends"),Object(l.b)("li",null,"false"),Object(l.b)("li",null,"final"),Object(l.b)("li",null,"finally"),Object(l.b)("li",null,"float"),Object(l.b)("li",null,"for"),Object(l.b)("li",null,"forsome"),Object(l.b)("li",null,"goto"),Object(l.b)("li",null,"if"),Object(l.b)("li",null,"implements"),Object(l.b)("li",null,"implicit"),Object(l.b)("li",null,"import"),Object(l.b)("li",null,"instanceof"),Object(l.b)("li",null,"int"),Object(l.b)("li",null,"interface"),Object(l.b)("li",null,"lazy"),Object(l.b)("li",null,"long"),Object(l.b)("li",null,"match"),Object(l.b)("li",null,"native"),Object(l.b)("li",null,"new"),Object(l.b)("li",null,"null"),Object(l.b)("li",null,"object"),Object(l.b)("li",null,"override"),Object(l.b)("li",null,"package"),Object(l.b)("li",null,"private"),Object(l.b)("li",null,"protected"),Object(l.b)("li",null,"public"),Object(l.b)("li",null,"return"),Object(l.b)("li",null,"sealed"),Object(l.b)("li",null,"short"),Object(l.b)("li",null,"static"),Object(l.b)("li",null,"strictfp"),Object(l.b)("li",null,"super"),Object(l.b)("li",null,"switch"),Object(l.b)("li",null,"synchronized"),Object(l.b)("li",null,"this"),Object(l.b)("li",null,"throw"),Object(l.b)("li",null,"throws"),Object(l.b)("li",null,"trait"),Object(l.b)("li",null,"transient"),Object(l.b)("li",null,"true"),Object(l.b)("li",null,"try"),Object(l.b)("li",null,"type"),Object(l.b)("li",null,"val"),Object(l.b)("li",null,"var"),Object(l.b)("li",null,"void"),Object(l.b)("li",null,"volatile"),Object(l.b)("li",null,"while"),Object(l.b)("li",null,"with"),Object(l.b)("li",null,"yield")),Object(l.b)("h2",{id:"feature-set"},"FEATURE SET"),Object(l.b)("h3",{id:"client-modification-feature"},"Client Modification Feature"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Supported"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"BasePath"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Authorizations"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"UserAgent"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"MockServer"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")))),Object(l.b)("h3",{id:"data-type-feature"},"Data Type Feature"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Supported"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Custom"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Int32"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Int64"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Float"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Double"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Decimal"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"String"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Byte"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Binary"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Boolean"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Date"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"DateTime"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Password"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"File"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Uuid"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Array"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Null"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"AnyType"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Object"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Maps"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"CollectionFormat"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"CollectionFormatMulti"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Enum"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ArrayOfEnum"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ArrayOfModel"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ArrayOfCollectionOfPrimitives"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ArrayOfCollectionOfModel"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ArrayOfCollectionOfEnum"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"MapOfEnum"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"MapOfModel"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"MapOfCollectionOfPrimitives"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"MapOfCollectionOfModel"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"MapOfCollectionOfEnum"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")))),Object(l.b)("h3",{id:"documentation-feature"},"Documentation Feature"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Supported"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Readme"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Model"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Api"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")))),Object(l.b)("h3",{id:"global-feature"},"Global Feature"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Supported"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Host"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"BasePath"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Info"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Schemes"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"PartialSchemes"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Consumes"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Produces"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ExternalDocumentation"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Examples"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"XMLStructureDefinitions"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"MultiServer"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ParameterizedServer"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ParameterStyling"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Callbacks"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"LinkObjects"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS3")))),Object(l.b)("h3",{id:"parameter-feature"},"Parameter Feature"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Supported"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Path"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Query"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Header"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Body"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"FormUnencoded"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"FormMultipart"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Cookie"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS3")))),Object(l.b)("h3",{id:"schema-support-feature"},"Schema Support Feature"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Supported"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Simple"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Composite"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Polymorphism"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Union"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"allOf"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"anyOf"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"oneOf"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"not"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS3")))),Object(l.b)("h3",{id:"security-feature"},"Security Feature"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Supported"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"BasicAuth"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ApiKey"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OpenIDConnect"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"BearerToken"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAuth2_Implicit"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAuth2_Password"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAuth2_ClientCredentials"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAuth2_AuthorizationCode"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")))),Object(l.b)("h3",{id:"wire-format-feature"},"Wire Format Feature"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Supported"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"JSON"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"XML"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"PROTOBUF"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Custom"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")))))}i.isMDXComponent=!0},312:function(t,e,a){"use strict";a.d(e,"a",(function(){return p})),a.d(e,"b",(function(){return d}));var b=a(0),n=a.n(b);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);e&&(b=b.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,b)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function O(t,e){if(null==t)return{};var a,b,n=function(t,e){if(null==t)return{};var a,b,n={},l=Object.keys(t);for(b=0;b<l.length;b++)a=l[b],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(b=0;b<l.length;b++)a=l[b],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var j=n.a.createContext({}),i=function(t){var e=n.a.useContext(j),a=e;return t&&(a="function"==typeof t?t(e):c({},e,{},t)),a},p=function(t){var e=i(t.components);return n.a.createElement(j.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},u=Object(b.forwardRef)((function(t,e){var a=t.components,b=t.mdxType,l=t.originalType,r=t.parentName,j=O(t,["components","mdxType","originalType","parentName"]),p=i(a),u=b,d=p["".concat(r,".").concat(u)]||p[u]||m[u]||l;return a?n.a.createElement(d,c({ref:e},j,{components:a})):n.a.createElement(d,c({ref:e},j))}));function d(t,e){var a=arguments,b=e&&e.mdxType;if("string"==typeof t||b){var l=a.length,r=new Array(l);r[0]=u;var c={};for(var O in e)hasOwnProperty.call(e,O)&&(c[O]=e[O]);c.originalType=t,c.mdxType="string"==typeof t?t:b,r[1]=c;for(var j=2;j<l;j++)r[j]=a[j];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);