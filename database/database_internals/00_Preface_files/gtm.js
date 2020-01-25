
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"311",
  
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.location.hostname.match(\/(([^.\\\/]+\\.[^.\\\/]{2,3}\\.[^.\\\/]{2})|(([^.\\\/]+\\.)[^.\\\/]{2,4}))(\\\/.*)?$\/)[1];return a=a.toLowerCase()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return window.top!==window.self}catch(a){return!1}})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"VPUrl"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",2],8,16],".replace(\"\/conferences.oreilly.com\",\"\")})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formSuccessURL"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",4],8,16],";if(void 0!=a\u0026\u0026\"\"!=a\u0026\u0026null!=a)return a;if(2==",["escape",["macro",5],8,16],".split(\"\/\").length\u0026\u0026!",["escape",["macro",5],8,16],".endsWith(\".html\")){if(-1\u003C",["escape",["macro",6],8,16],".indexOf(\"?\")\u0026\u00260\u003E",["escape",["macro",6],8,16],".indexOf(\"\/?\"))return ",["escape",["macro",5],8,16],"+\"\/?\"+",["escape",["macro",6],8,16],".split(\"?\")[1];if(!(-1\u003C",["escape",["macro",6],8,16],".indexOf(\"\/?\")))return ",["escape",["macro",5],8,16],"+\"\/\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){var c=\/www.oreilly.com\\\/member\\\/(register|login|reset-password|profile)?\\\/?(\\?(.*))?$\/i,d=\/linkedin\\.com\\\/(oauth\\\/v(.*)\\\/login-success|uas\\\/login|uas\\\/oauth2\\\/authorization)\\\/?(\\?(.*))?$\/i,e=\/facebook\\.com\\\/(login\\.php|v(.*)\\\/dialog\\\/oauth(.*))\/i,f=\/api\\.twitter\\.com\\\/oauth\\\/(authorize|authenticate)\\\/?(\\?(.*))?$\/i,g=\/accounts\\.google\\.(.*)\\\/(signin\\\/oauth\\\/consent|accounts\\\/SetSID|signin\\\/oauth\\\/oauthchooseaccount)(\\?(.*))?$\/i,a=document.referrer;(c.test(a)||d.test(a)||\ne.test(a)||f.test(a)||g.test(a))\u0026\u0026b.set(\"referrer\",null)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(-1\u003Cdocument.location.href.indexOf(\"www.safaribooksonline.com\"))return\"oreilly.com\";if(-1\u003Cdocument.location.href.indexOf(\"oreilly.com\"))return\"www.safaribooksonline.com\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){max=100;min=1;return Math.floor(Math.random()*(max-min+1))+min})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",11],8,16],";switch(a){case \"start\":return\"play\";case \"progress\":return\"\"+",["escape",["macro",12],8,16],"+\"%\"}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"nonInteraction"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCat"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAct"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLbl"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",14],8,16],";if(\"profile icon\"==",["escape",["macro",15],8,16],"\u0026\u0026\"hover\"==",["escape",["macro",16],8,16],"||\"global\"==",["escape",["macro",15],8,16],"\u0026\u0026\"navigation\"==",["escape",["macro",16],8,16],"\u0026\u0026\"your oreilly|hover\"==",["escape",["macro",17],8,16],")a=1;return a})();"]
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_customUrlSource":["macro",6],
      "vtp_queryKey":"subscribed",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"amt",
      "vtp_customUrlSource":["macro",6],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conference.year"
    },{
      "function":"__remm",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*\\.oreilly\\.com.*schedule\\\/(grid|full|presentations|stype|stopic|proceedings).*","value","Schedule"],["map","key",".*\\.oreilly\\.com.*schedule\\\/speaker.*","value","Speakers"],["map","key",".*\\.oreilly\\.com.*public\\\/register.*","value","Registration"],["map","key",".*\\.oreilly\\.com.*user\\\/account.*","value","User Info"],["map","key",".*\\.oreilly\\.com.*\\\/hotel.*","value","Venue, travel, and hotel"],["map","key",".*\\.oreilly\\.com.*schedule\\\/detail\\\/.*","value","Sessions, Tutorials, Keynotes"],["map","key",".*\\.oreilly\\.com.*users\\\/sign_in.*","value","Sign In or Create a New Account"],["map","key",".*\\.oreilly\\.com.*\\\/sponsors.*","value","Sponsors"],["map","key",".*\\.oreilly\\.com.*\\\/about.*","value","About"],["map","key",".*\\.oreilly\\.com.*\\\/resources.*","value","Resources"],["map","key",".*\\.oreilly\\.com.*\\\/(cfp|proposal|reviewing).*","value","CFP"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userIdentifier"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conference.franchise"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conference.location"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"businessLine"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"paymentMethod"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^.*conferences.oreilly.com\\\/(strata($|\\\/|\\?).*)|^.*conferences.oreilly.com\\\/(strata\\-data\\-ai($|\\\/|\\?).*)","value","UA-112091926-2"],["map","key","^.*conferences.oreilly.com\\\/(software-?architecture($|\\\/|\\?).*)","value","UA-112091926-3"],["map","key","^.*conferences.oreilly.com\\\/(artificial-intelligence($|\\\/|\\?).*)","value","UA-112091926-4"],["map","key","^.*ai.oreilly.com.cn\\\/ai-cn(\\\/?|(.*))$","value","UA-112091926-4"],["map","key","^.*conferences.oreilly.com\\\/(velocity($|\\\/|\\?).*)","value","UA-112091926-5"],["map","key","^.*conferences.oreilly.com\\\/(fluent($|\\\/|\\?).*)","value","UA-112091926-6"],["map","key","^.*conferences.oreilly.com\\\/(oscon($|\\\/|\\?).*)","value","UA-112091926-7"],["map","key","^.*conferences.oreilly.com\\\/(jupyter($|\\\/|\\?).*)","value","UA-112091926-8"],["map","key","(.*)oreilly.com\\\/blended-courses.*","value","UA-112091926-11"],["map","key","^.*conferences.oreilly.com\\\/(tensorflow($|\\\/|\\?).*)","value","UA-112091926-12"],["map","key","^.*conferences.oreilly.com\\\/(infrastructure-ops($|\\\/|\\?).*)","value","UA-112091926-13"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","2","group",["macro",24]],["map","index","1","group",["macro",25]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":["macro",0],
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",8]],["map","fieldName","allowLinker","value","true"],["map","fieldName","userId","value",["macro",26]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",27]],["map","index","2","dimension",["macro",28]],["map","index","3","dimension",["macro",24]],["map","index","4","dimension",["macro",29]],["map","index","5","dimension",["macro",30]],["map","index","6","dimension",["macro",26]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventVal"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"VPTitle"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.parentTopic"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.formatType"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",37],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","www.safaribooksonline.com|learning.oreilly.com","value","Learning Platform"],["map","key","www.oreilly.com|get.oreilly.com|members.oreilly.com","value","Content \u0026 Marketing"]]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"loggedIn"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"membersLoggedIn"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.title"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.type"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.identifier"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.title"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.identifier"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.author"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.publisher"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.releaseDate"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.topic"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.free"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.subdirectory"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.subTopic"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"learningPaidAccount"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"learningAccountType"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"organization"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"myTopics.add"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"myTopics.remove"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"slider.name"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"slider.cardTitle"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sectionName"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cardTitle"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"filterName"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sponsorName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"orgID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"topicSearchValue"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","(.*)(get.oreilly.com|www.oreilly.com|members.oreilly.com|shop.oreilly.com|ssearch.oreilly.com|learning.oreilly.com|oreilly.review|nc\\-proxy.binderhub\\-prod.gcp.oreilly.com)(.*)","value","UA-112091926-1"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","3","group",["macro",35]],["map","index","4","group",["macro",36]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_autoLinkDomains":["macro",9],
      "vtp_cookieDomain":["macro",0],
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",7]],["map","fieldName","allowLinker","value","true"],["map","fieldName","userId","value",["macro",26]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",38]],["map","index","2","dimension",["macro",39]],["map","index","4","dimension",["macro",40]],["map","index","9","dimension",["macro",41]],["map","index","10","dimension",["macro",42]],["map","index","11","dimension",["macro",43]],["map","index","12","dimension",["macro",44]],["map","index","13","dimension",["macro",36]],["map","index","14","dimension",["macro",45]],["map","index","15","dimension",["macro",46]],["map","index","16","dimension",["macro",47]],["map","index","17","dimension",["macro",48]],["map","index","18","dimension",["macro",35]],["map","index","19","dimension",["macro",49]],["map","index","20","dimension",["macro",50]],["map","index","21","dimension",["macro",51]],["map","index","27","dimension",["macro",52]],["map","index","22","dimension",["macro",30]],["map","index","6","dimension",["macro",53]],["map","index","7","dimension",["macro",54]],["map","index","8","dimension",["macro",55]],["map","index","25","dimension",["macro",56]],["map","index","26","dimension",["macro",57]],["map","index","23","dimension",["macro",58]],["map","index","24","dimension",["macro",59]],["map","index","28","dimension",["macro",60]],["map","index","30","dimension",["macro",61]],["map","index","29","dimension",["macro",62]],["map","index","31","dimension",["macro",63]],["map","index","32","dimension",["macro",64]],["map","index","33","dimension",["macro",26]],["map","index","34","dimension",["macro",65]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",66],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"Campaign-170"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"oid",
      "vtp_customUrlSource":["macro",6],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"type",
      "vtp_customUrlSource":["macro",6],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"ccy",
      "vtp_customUrlSource":["macro",6],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"false",
      "vtp_map":["list",["map","key",".*www.oreilly.com.*","value","true"],["map","key",".*learning.oreilly.com.*learning-paths.*","value","true"],["map","key",".*learning.oreilly.com.*case-studies.*","value","true"],["map","key",".*learning.oreilly.com.*live-training.*","value","true"],["map","key",".*conferences.oreilly.com.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*www.oreilly.com.*data-science.*|.*conferences.oreilly.com.*data-science.*","value","true"],["map","key",".*www.oreilly.com.*big-data.*|.*conferences.oreilly.com.*big-data.*","value","true"],["map","key",".*www.oreilly.com.*machine-learning.*|.*conferences.oreilly.com.*machine-learning.*","value","true"],["map","key",".*www.oreilly.com.*data-engineering.*|.*conferences.oreilly.com.*data-engineering.*","value","true"],["map","key",".*www.oreilly.com.*data-architecture.*|.*conferences.oreilly.com.*data-architecture.*","value","true"],["map","key",".*www.oreilly.com.*business-intelligence.*|.*conferences.oreilly.com.*business-intelligence.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*www.oreilly.com.*data-science.*|.*conferences.oreilly.com.*data-science.*","value","true"],["map","key",".*www.oreilly.com.*big-data.*|.*conferences.oreilly.com.*big-data.*","value","true"],["map","key",".*www.oreilly.com.*machine-learning.*|.*conferences.oreilly.com.*machine-learning.*","value","true"],["map","key",".*www.oreilly.com.*data-engineering.*|.*conferences.oreilly.com.*data-engineering.*","value","true"],["map","key",".*www.oreilly.com.*data-architecture.*|.*conferences.oreilly.com.*data-architecture.*","value","true"],["map","key",".*www.oreilly.com.*business-intelligence.*|.*conferences.oreilly.com.*business-intelligence.*","value","true"],["map","key",".*www.oreilly.com.*databases.*|.*conferences.oreilly.com.*databases.*","value","true"],["map","key",".*www.oreilly.com.*analytics.*|.*conferences.oreilly.com.*analytics.*","value","true"],["map","key",".*www.oreilly.com.*data-show-podcasts.*|.*conferences.oreilly.com.*data-show-podcasts.*","value","true"]]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.revenue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"logged_in"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"term",
      "vtp_customUrlSource":["macro",6],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-39299553-7",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-39299553-8",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*www.oreilly.com.*artificial-intelligence.*|.*conferences.oreilly.com.*artificial-intelligence.*","value","true"],["map","key",".*www.oreilly.com.*machine-learning.*|.*conferences.oreilly.com.*machine-learning.*","value","true"],["map","key",".*www.oreilly.com.*deep-learning.*|.*conferences.oreilly.com.*deep-learning.*","value","true"],["map","key",".*www.oreilly.com.*reinforcement-learning.*|.*conferences.oreilly.com.*reinforcement-learning.*","value","true"],["map","key",".*www.oreilly.com.*neural-networks.*|.*conferences.oreilly.com.*neural-networks.*","value","true"],["map","key",".*www.oreilly.com.*GANS.*|.*conferences.oreilly.com.*GANS.*","value","true"],["map","key",".*www.oreilly.com.*NLP.*|.*conferences.oreilly.com.*NLP.*","value","true"],["map","key",".*www.oreilly.com.*natural-language-processing.*|.*conferences.oreilly.com.*natural-language-processing.*","value","true"],["map","key",".*www.oreilly.com.*NSTM.*|.*conferences.oreilly.com.*NSTM.*","value","true"],["map","key",".*www.oreilly.com.*tensorflow.*|.*conferences.oreilly.com.*tensorflow.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny\/public\/content\/sponsors","value","True"],["map","key","https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny\/public\/content\/resources","value","True"]]
    },{
      "function":"__smm",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",11],
      "vtp_map":["list",["map","key","start","value","play"],["map","key","progress","value",["macro",12]]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/conferences.oreilly.com\/strata\/strata-ca\/public\/schedule\/topic\/2867","value","True"],["map","key","conferences.oreilly.com\/strata\/strata-ca\/public\/register\/purchased","value","True"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","conferences.oreilly.com\/strata\/strata-ca\/public\/register\/purchased*","value","true"],["map","key","conferences.oreilly.com\/strata\/strata-ca\/public\/register\/invoice*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*www.oreilly.com.*machine-learning.*|.*conferences.oreilly.com.*machine-learning.*","value","true"],["map","key",".*www.oreilly.com.*deep-learning.*|.*conferences.oreilly.com.*deep-learning.*","value","true"],["map","key",".*www.oreilly.com.*reinforcement-learning.*|.*conferences.oreilly.com.*reinforcement-learning.*","value","true"],["map","key",".*www.oreilly.com.*neural-networks.*|.*conferences.oreilly.com.*neural-networks.*","value","true"],["map","key",".*www.oreilly.com.*natural-language-processing.*|.*conferences.oreilly.com.*natural-language-processing.*","value","true"],["map","key",".*www.oreilly.com.*bots.*|.*conferences.oreilly.com.*bots.*","value","true"],["map","key",".*www.oreilly.com.*agents.*|.*conferences.oreilly.com.*agents.*","value","true"],["map","key",".*www.oreilly.com.*tensorflow.*|.*conferences.oreilly.com.*tensorflow.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*www.oreilly.com.*open-source.*|.*conferences.oreilly.com.*open-source.*","value","true"],["map","key",".*www.oreilly.com.*cloud-native.*|.*conferences.oreilly.com.*cloud-native.*","value","true"],["map","key",".*www.oreilly.com.*software-development.*|.*conferences.oreilly.com.*software-development.*","value","true"],["map","key",".*www.oreilly.com.*blockchain.*|.*conferences.oreilly.com.*blockchain.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/conferences.oreilly.com\/oscon\/oscon-or\/public\/content\/sponsors","value","True"],["map","key","https:\/\/conferences.oreilly.com\/oscon\/oscon-or\/public\/content\/resources","value","True"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","conferences.oreilly.com\/strata\/strata-ny\/public\/content\/sponsors","value","True"],["map","key","conferences.oreilly.com\/strata\/strata-ny\/public\/content\/resources","value","True"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*artificial-intelligence.*","value","true"],["map","key",".*tensorflow.*","value","true"],["map","key",".*neural-networks.*","value","true"],["map","key",".*data-mining.*","value","true"],["map","key",".*unsupervised-learning.*","value","true"],["map","key",".*deep-learning.*","value","true"],["map","key",".*machine-learning.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","conferences.oreilly.com\/software-architecture\/sa-eu\/public\/content\/sponsors","value","True"],["map","key","conferences.oreilly.com\/software-architecture\/sa-eu\/public\/content\/resources","value","True"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Revenue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderID"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":10,
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(){!1===c\u0026\u0026(c=!0,Munchkin.init(\"107-FMS-070\"))}var c=!1,a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/munchkin.marketo.net\/munchkin.js\";a.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||b()};a.onload=b;document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "priority":1,
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/get.oreilly.com\/rs\/107-FMS-070\/images\/digitalpi-utm-tracker-oreilly.com.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1047975969",
      "vtp_conversionLabel":"WjAECOPA2nMQobDb8wM",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":31
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"1047975969",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",20],
      "vtp_enableRdpCheckbox":false,
      "tag_id":32
    },{
      "function":"__bzi",
      "once_per_event":true,
      "vtp_id":"70561",
      "tag_id":34
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"837681939",
      "vtp_conversionLabel":"tfRcCMnwwHQQk4a4jwM",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":35
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"837681939",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",20],
      "vtp_enableRdpCheckbox":false,
      "tag_id":36
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"837681939",
      "vtp_conversionLabel":"zLNTCNHo-XYQk4a4jwM",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":39
    },{
      "function":"__baut",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_tagId":"5794699",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":40
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_eventCategory":"Safari",
      "vtp_tagId":"5794699",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":"Submit",
      "tag_id":41
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":53
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",14],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",33],
      "vtp_eventCategory":["macro",15],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":["macro",16],
      "vtp_eventLabel":["macro",17],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":54
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]],["map","fieldName","title","value",["macro",34]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":56
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"837681939",
      "vtp_conversionLabel":"pYI4CLSnrXwQk4a4jwM",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":60
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_trackingId":"UA-39299553-7",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":63
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]],["map","fieldName","title","value",["macro",34]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",67],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":66
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",18],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",33],
      "vtp_eventCategory":["macro",15],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",67],
      "vtp_eventAction":["macro",16],
      "vtp_eventLabel":["macro",17],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":67
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",67],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":68
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":78
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_eventCategory":"form",
      "vtp_tagId":"5794699",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":"submit",
      "vtp_eventLabel":"free trial",
      "tag_id":85
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":90
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"scroll tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",67],
      "vtp_eventAction":["template",["macro",70],"%"],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":93
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"AW-773515308",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",20],
      "vtp_enableRdpCheckbox":false,
      "tag_id":130
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"773515308",
      "vtp_conversionLabel":"3NkcCNrj2ZMBEKzQ6_AC",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":133
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":162
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"video plays",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",67],
      "vtp_eventAction":["macro",13],
      "vtp_eventLabel":["macro",44],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":188
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":293
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",14],
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventValue":["macro",33],
      "vtp_eventCategory":["macro",15],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",67],
      "vtp_eventAction":["macro",16],
      "vtp_eventLabel":["macro",17],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":294
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",71],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1011620147",
      "vtp_conversionLabel":"k3B8CNWP_awBELOysOID",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":297
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"1011620147",
      "vtp_customParamsFormat":"NONE",
      "vtp_conversionLabel":"k3B8CNWP_awBELOysOID",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",20],
      "vtp_enableRdpCheckbox":false,
      "tag_id":725
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"VWO",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Custom",
      "vtp_dimension":["list",["map","index","35","dimension",["macro",72]]],
      "vtp_trackingId":"UA-112091926-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":726
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-N4KPR77","nickname","Account App"]],
      "vtp_boundaries":["list",["zb","_eq",["macro",6],"\/account\/",false,false]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","hl"],["map","typeId","sdl"],["map","typeId","fsl"],["map","typeId","cl"],["map","typeId","tl"],["map","typeId","jel"],["map","typeId","ytl"],["map","typeId","lcl"],["map","typeId","evl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","ua"]],
      "tag_id":745
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"3000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"1669222_110",
      "tag_id":746
    },{
      "function":"__cl",
      "tag_id":747
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"25,50,75,95",
      "vtp_captureComplete":false,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":false,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"1669222_203",
      "vtp_enableTriggerStartOption":true,
      "tag_id":748
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25, 50, 75, 95",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"1669222_204",
      "vtp_enableTriggerStartOption":true,
      "tag_id":749
    },{
      "function":"__hl",
      "tag_id":750
    },{
      "function":"__hl",
      "tag_id":751
    },{
      "function":"__hl",
      "tag_id":752
    },{
      "function":"__cl",
      "tag_id":753
    },{
      "function":"__cl",
      "tag_id":754
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"input[name='promotionCode']",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"1669222_1064",
      "tag_id":755
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"div.orm-ff-NavigationWidget-navigationWidgetContainer",
      "vtp_firingFrequency":"MANY_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"1669222_1106",
      "tag_id":756
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Ciframe height=\"1\" width=\"1\" frameborder=\"0\" scrolling=\"no\" src=\"https:\/\/www.emjcd.com\/tags\/c?containerTagId=2775\u0026amp;ITEM1=Safari-Subscription\u0026amp;AMT1=",["escape",["macro",22],12],"\u0026amp;QTY1=1\u0026amp;CID=1525054\u0026amp;OID=",["escape",["macro",73],12],"\u0026amp;TYPE=",["escape",["macro",74],12],"\u0026amp;CURRENCY=",["escape",["macro",75],12],"\" name=\"cj_conversion\"\u003E\u003C\/iframe\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":30
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1732687426968531\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1732687426968531\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":33
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"trackCustom\",\"SafariSubscription\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":46
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar domains_to_track,docHost=document.location.hostname;if(\"conferences.oreilly.com\"==docHost.toLowerCase()||\"ai.oreilly.com.cn\"==docHost.toLowerCase()){domains_to_track=[\"conference.oreilly.com\"];var folders_to_track=",["escape",["macro",5],8,16],".split(\"\/\")[1]}else if(\"oreilly.com\"==docHost.toLowerCase()||\"www.oreilly.com\"==docHost.toLowerCase())domains_to_track=[\"www.oreilly.com\"],folders_to_track=\"\";\nvar extDoc=\".doc .docx .xls .xlsx .xlsm .ppt .pptx .exe .zip .pdf .js .txt .csv\".split(\" \"),socSites=\"\",isSubDomainTracker=!0,isSeparateDomainTracker=!0,isGTM=!0,eValues={downloads:{category:\"Assets\",action:\"Download\",label:\"\",value:0,nonInteraction:0},outbound_downloads:{category:\"Outbound Assets\",action:\"Download\",label:\"\",value:0,nonInteraction:0},outbounds_oreilly:{category:\"Outbound Links\",action:\"Oreilly\",label:\"\",value:0,nonInteraction:0},outbounds:{category:\"Outbound Links\",action:\"Non-Oreilly\",\nlabel:\"\",value:0,nonInteraction:0},email:{category:\"Email Clicks\",action:\"Click\",label:\"\",value:0,nonInteraction:0},outbound_email:{category:\"Outbound Email Clicks\",action:\"Click\",label:\"\",value:0,nonInteraction:0},telephone:{category:\"Telephone Clicks\",action:\"Click\",label:\"\",value:0,nonInteraction:0},social:{category:\"Social Profiles\",action:\"Click\",label:\"\",value:0,nonInteraction:0}},mainDomain=document.location.hostname.match(\/(([^.\\\/]+\\.[^.\\\/]{2,3}\\.[^.\\\/]{2})|(([^.\\\/]+\\.)[^.\\\/]{2,4}))(\\\/.*)?$\/)[1];\nmainDomain=mainDomain.toLowerCase();1==isSubDomainTracker\u0026\u0026(mainDomain=document.location.hostname.replace(\"www.\",\"\").toLowerCase());var arr=document.getElementsByTagName(\"a\");\nfor(i=0;i\u003Carr.length;i++){var flag=0;if(!isExcluded(arr[i])){var mDownAtt=arr[i].getAttribute(\"onmousedown\"),doname=\"\",linkType=\"\",mailPattern=\/^mailto:[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/i,urlPattern=\/^(ftp|http|https):\\\/\\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\\/|\\\/([\\w#!:.?+=\u0026%@!\\-\\\/]))?\/i,telPattern=\/^tel:(.*)([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$\/i,internalDomain=\/(.*)(oreilly.com|safaribooksonline.com)(.*)\/i;if(mailPattern.test(arr[i].href)||urlPattern.test(arr[i].href)||telPattern.test(arr[i].href)){try{!urlPattern.test(arr[i].href)||\nmailPattern.test(arr[i].href)||telPattern.test(arr[i].href)?!mailPattern.test(arr[i].href)||telPattern.test(arr[i].href)||urlPattern.test(arr[i].href)?!telPattern.test(arr[i].href)||urlPattern.test(arr[i].href)||mailPattern.test(arr[i].href)||(doname=arr[i].href.toLowerCase(),linkType=\"tel\"):(doname=arr[i].href.toLowerCase().split(\"@\")[1],linkType=\"mail\"):(doname=arr[i].hostname.toLowerCase().replace(\"www.\",\"\"),linkType=\"url\")}catch(b){continue}if(null!=mDownAtt\u0026\u0026(mDownAtt=String(mDownAtt),-1\u003CmDownAtt.indexOf(\"dataLayer.push\")||\n-1\u003CmDownAtt.indexOf(\"('send'\")))continue;var condition=!1;if(condition=isSeparateDomainTracker?doname==mainDomain:-1!=doname.indexOf(mainDomain))\"mail\"===linkType?(eValues.email.label=arr[i].href.toLowerCase().match(\/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/i),_tagLinks(arr[i],eValues.email.category,eValues.email.action,eValues.email.label,eValues.email.value,eValues.email.nonInteraction,mDownAtt)):\"url\"===linkType\u0026\u0026(\"\"==folders_to_track||_isInternalFolder(arr[i].href)?_isDownload(arr[i].href)\u0026\u0026\n(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.downloads.category,eValues.downloads.action,eValues.downloads.label,eValues.downloads.value,eValues.downloads.nonInteraction,mDownAtt)):_isDownload(arr[i].href)?(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.outbound_downloads.category,eValues.outbound_downloads.action,eValues.outbound_downloads.label,eValues.outbound_downloads.value,eValues.outbound_downloads.nonInteraction,mDownAtt)):internalDomain.test(arr[i].href)?\n(eValues.outbounds_oreilly.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds_oreilly.category,eValues.outbounds_oreilly.action,eValues.outbounds_oreilly.label,eValues.outbounds_oreilly.value,eValues.outbounds_oreilly.nonInteraction,mDownAtt)):(eValues.outbounds.label=arr[i].href.toLowerCase().replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds.category,eValues.outbounds.action,eValues.outbounds.label,eValues.outbounds.value,eValues.outbounds.nonInteraction,\nmDownAtt)));else for(var k=0;k\u003Cdomains_to_track.length;k++){var condition1=!1;condition1=isSeparateDomainTracker?doname==domains_to_track[k]:-1!=doname.indexOf(domains_to_track[k]);condition1?\"mail\"===linkType?(eValues.email.label=arr[i].href.toLowerCase().match(\/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/i),_tagLinks(arr[i],eValues.email.category,eValues.email.action,eValues.email.label,eValues.email.value,eValues.email.nonInteraction,mDownAtt)):\"url\"===linkType\u0026\u0026(\"\"==folders_to_track||_isInternalFolder(arr[i].href)?\n_isDownload(arr[i].href)\u0026\u0026(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.downloads.category,eValues.downloads.action,eValues.downloads.label,eValues.downloads.value,eValues.downloads.nonInteraction,mDownAtt)):_isDownload(arr[i].href)?(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.outbound_downloads.category,eValues.outbound_downloads.action,eValues.outbound_downloads.label,eValues.outbound_downloads.value,eValues.outbound_downloads.nonInteraction,mDownAtt)):internalDomain.test(arr[i].href)?\n(eValues.outbounds_oreilly.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds_oreilly.category,eValues.outbounds_oreilly.action,eValues.outbounds_oreilly.label,eValues.outbounds_oreilly.value,eValues.outbounds_oreilly.nonInteraction,mDownAtt)):(eValues.outbounds.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds.category,eValues.outbounds.action,eValues.outbounds.label,eValues.outbounds.value,eValues.outbounds.nonInteraction,\nmDownAtt))):(flag++,flag==domains_to_track.length\u0026\u0026(\"mail\"===linkType\u0026\u0026(eValues.outbound_email.label=arr[i].href.toLowerCase().match(\/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/),_tagLinks(arr[i],eValues.outbound_email.category,eValues.outbound_email.action,eValues.outbound_email.label,eValues.outbound_email.value,eValues.outbound_email.nonInteraction,mDownAtt)),\"tel\"===linkType\u0026\u0026(eValues.telephone.label=arr[i].href.toLowerCase().split(\"tel:\")[1],_tagLinks(arr[i],eValues.telephone.category,eValues.telephone.action,\neValues.telephone.label,eValues.telephone.value,eValues.telephone.nonInteraction,mDownAtt)),\"url\"===linkType\u0026\u0026(_isDownload(arr[i].href)?(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.outbound_downloads.category,eValues.outbound_downloads.action,eValues.outbound_downloads.label,eValues.outbound_downloads.value,eValues.outbound_downloads.nonInteraction,mDownAtt)):_isSocial(arr[i].href)?(eValues.social.label=arr[i].href.toLowerCase().replace(\"www.\",\"\").split(\"\/\/\")[1],eValues.social.action=\neValues.social.label.split(\".\")[0],_tagLinks(arr[i],eValues.social.category,eValues.social.action,eValues.social.label,eValues.social.value,eValues.social.nonInteraction,mDownAtt)):internalDomain.test(arr[i].href)?(eValues.outbounds_oreilly.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds_oreilly.category,eValues.outbounds_oreilly.action,eValues.outbounds_oreilly.label,eValues.outbounds_oreilly.value,eValues.outbounds_oreilly.nonInteraction,mDownAtt)):(eValues.outbounds.label=\narr[i].href.toLowerCase().replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds.category,eValues.outbounds.action,eValues.outbounds.label,eValues.outbounds.value,eValues.outbounds.nonInteraction,mDownAtt)))))}}}}function _isSocial(b){return\"\"!=socSites?null!=b.toLowerCase().replace(\/[+#]\/,\"\").match(new RegExp(\"^(.*)(\"+socSites.toLowerCase()+\")(.*)$\"))?!0:!1:!1}\nfunction _isInternalFolder(b){return\"\"!=folders_to_track?null!=b.toLowerCase().match(new RegExp(\"^(.*)(\"+folders_to_track+\")(.*)$\"))?!0:!1:!1}function _isDownload(b){for(var c=0,a=0;a\u003CextDoc.length;a++){var d=b.split(\".\");d=d[d.length-1].split(\/[#?\u0026?]\/);if(\".\"+d[0].toLowerCase()==extDoc[a])return!0;c++;if(c==extDoc.length)return!1}}\nfunction _setDownloadData(b,c){var a=b.toLowerCase().split(\".\");a=a[a.length-1].split(\/[#?\u0026?]\/);var d=b.toLowerCase().split(c);d=d[1].split(\/[#?\u0026?]\/);eValues.downloads.action=eValues.outbound_downloads.action=a;eValues.downloads.label=eValues.outbound_downloads.label=d}\nfunction _tagLinks(b,c,a,d,g,e,f){isGTM?b.setAttribute(\"onmousedown\",(null!=f?f+\"; \":\"\")+\"dataLayer.push({'event': 'eventTracker', 'eventCat': '\"+c+\"', 'eventAct':'\"+a+\"', 'eventLbl': '\"+d+\"', 'eventVal': \"+g+\", 'nonInteraction': \"+e+\"});\"):(e=0==e?!1:!0,b.setAttribute(\"onmousedown\",(null!=f?f+\"; \":\"\")+\"ga('send', 'event', '\"+c+\"', '\"+a+\"', '\"+d+\"', \"+g+\", { nonInteraction: \"+e+\"});\"))}\nfunction isExcluded(b){var c=document.getElementsByTagName(\"footer\")[0];1\u003Cdocument.getElementsByTagName(\"footer\").length\u0026\u0026(c=document.getElementsByTagName(\"footer\")[document.getElementsByTagName(\"footer\").length-1]);for(var a=b.parentNode;null!=a;){if(a==c)return!0;a=a.parentNode}c=\/(.*)(conferences.oreilly.com|www.safaribooksonline.com|learning.oreilly.com|shop.oreilly.com)(.*)\/i;a=\/((.*)oreilly.com\\\/(learning|radar|idea)(.*))\/i;return c.test(b.href)\u0026\u0026a.test(document.location.href)\u0026\u0026jQuery\u0026\u0026(jQuery(b).parents(\".article-body\").length||\njQuery(b).parents(\".block-product\").length||jQuery(this).closest(\"[data-type \\x3d 'note']\").length)?!0:!1};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":55
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript defer type=\"text\/gtmscript\"\u003E(function(){window.medalliaUserIdentifier=document.documentElement.dataset.userUuid;window.medalliaUserName=document.documentElement.dataset.username})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/nebula-cdn.kampyle.com\/wu\/314849\/onsite\/embed.js\" async\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":61
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar checkin=new Date,checkout=new Date;checkin.setDate((new Date).getDate()+10);checkout.setDate((new Date).getDate()+24);\nvar trialends=(1==(checkin.getMonth()+1).toString().length?\"0\"+(checkin.getMonth()+1):checkin.getMonth()+1)+\"\/\"+(1==checkin.getDate().toString().length?\"0\"+checkin.getDate():checkin.getDate())+\"\/\"+checkin.getFullYear(),trialends2=(1==(checkout.getMonth()+1).toString().length?\"0\"+(checkout.getMonth()+1):checkout.getMonth()+1)+\"\/\"+(1==checkout.getDate().toString().length?\"0\"+checkout.getDate():checkout.getDate())+\"\/\"+checkout.getFullYear();window.criteo_q=window.criteo_q||[];\nvar deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";\nwindow.criteo_q.push({event:\"manualFlush\"},{event:\"setAccount\",account:47920},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"viewHome\"},{event:\"flushEvents\"},function(){setTimeout(function(){criteo_q.push({event:\"viewSearch\",din:trialends,dout:trialends2},{event:\"viewHome\"},{event:\"setData\",trialends:trialends},{event:\"flushEvents\"})},1E3)});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":64
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:47920},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"##user_email##\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"##subscription_cost##\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":65
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E \u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:47920},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":70
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":71
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript defer type=\"text\/gtmscript\"\u003E(function(){window.medalliaUserIdentifier=document.documentElement.dataset.userUuid;window.medalliaUserName=document.documentElement.dataset.username})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/nebula-cdn.kampyle.com\/wu\/314849\/onsite\/embed.js\" async\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":76
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar domains_to_include_regex=\/(.*)(conferences.oreilly.com|www.safaribooksonline.com|learning.oreilly.com|shop.oreilly.com)(.*)\/i;jQuery(\".block-product\").on(\"mousedown\",\"a\",function(){domains_to_include_regex.test(this.href)\u0026\u0026dataLayer.push({event:\"eventTracker\",eventCat:\"content promo\",eventAct:\"right sidebar\",eventLbl:this.href,eventVal:0})});\njQuery('[data-type\\x3d\"note\"]').on(\"mousedown\",\"a\",function(){domains_to_include_regex.test(this.href)\u0026\u0026dataLayer.push({event:\"eventTracker\",eventCat:\"content promo\",eventAct:\"editor note\",eventLbl:this.href,eventVal:0})});\njQuery(\".article-body\").on(\"mousedown\",\"a\",function(){!domains_to_include_regex.test(this.href)||jQuery(this).closest(\"[data-type \\x3d 'note']\").length||jQuery(this).parents(\".block-product\").length||dataLayer.push({event:\"eventTracker\",eventCat:\"content promo\",eventAct:\"body\",eventLbl:this.href,eventVal:0})});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":94
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript data-gtmsrc=\"https:\/\/w.soundcloud.com\/player\/api.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var t=function(e){var a,c,b,h,k,l,m,d,n=\"podcast\",f=0;var p=",["escape",["macro",44],8,16],";var g=SC.Widget(e);g.bind(SC.Widget.Events.READY,function(){g.bind(SC.Widget.Events.PLAY,function(){1E3\u003CDate.now()-f\u0026\u0026(a=\"Play\",q(n,a,p),f=Date.now())});g.bind(SC.Widget.Events.PLAY_PROGRESS,function(e){d=!1;c=Math.round(100*e.relativePosition);10!==c||b||(a=\"10%\",d=b=!0);25!==c||h||(a=\"25%\",d=h=!0);50!==c||k||(a=\"50%\",d=k=!0);75!==c||l||(a=\"75%\",d=l=!0);95!==c||m||(a=\"75%\",d=m=!0);d\u0026\u0026q(n,a,p)});g.bind(SC.Widget.Events.FINISH,\nfunction(){a=\"100%\";b=h=k=l=m=!1;q(n,a,p)})})},q=function(b,a,c){window.dataLayer.push({event:\"eventTracker\",eventCat:b,eventAct:a,eventLbl:c,eventVal:0,nonInteraction:0})},f,r=document.querySelectorAll('iframe[src*\\x3d\"api.soundcloud.com\"]');var b=0;for(f=r.length;b\u003Cf;b+=1)t(r[b])}catch(e){console.log(\"Error with SoundCloud API: \"+e.message)}})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":96
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":154
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"376595806465162\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=376595806465162\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":163
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){if(null!==document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]')\u0026\u0026void 0!==document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]')){var a=!1;window.addEventListener(\"blur\",function(){a\u0026\u0026dataLayer.push({event:\"eventTracker\",eventCat:\"social\",eventAct:\"share\",eventLbl:\"facebook\",eventVal:0,nonInteraction:0})});document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]').addEventListener(\"mouseover\",function(){window.focus();\na=!0});document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]').addEventListener(\"mouseout\",function(){a=!1})}try{window.twttr=function(b,a,d){var c,e=b.getElementsByTagName(a)[0];if(!b.getElementById(d))return b=b.createElement(a),b.id=d,b.src=\"\/\/platform.twitter.com\/widgets.js\",e.parentNode.insertBefore(b,e),window.twttr||(c={_e:[],ready:function(a){c._e.push(a)}})}(document,\"script\",\"twitter-wjs\"),twttr.ready(function(a){a.events.bind(\"tweet\",trackTwitter)})}catch(b){}})();\nnull!==document.querySelector(\".IN-widget\")\u0026\u0026void 0!==document.querySelector(\".IN-widget\")\u0026\u0026document.querySelector(\".IN-widget\").addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"social\",eventAct:\"share\",eventLbl:\"linkedin\",eventVal:0,nonInteraction:0})});\nfunction trackTwitter(a){a\u0026\u0026(a.target\u0026\u0026\"IFRAME\"==a.target.nodeName\u0026\u0026(opt_target=extractParamFromUri(a.target.src,\"url\")),dataLayer.push({event:\"eventTracker\",eventCat:\"social\",eventAct:\"share\",eventLbl:\"twitter\",eventVal:0,nonInteraction:0}))}function extractParamFromUri(a,b){if(a){var c=new RegExp(\"[\\\\?\\x26#]\"+b+\"\\x3d([^\\x26#]*)\");c=c.exec(a);if(null!=c)return unescape(c[1])}};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":168
    },{
      "function":"__html",
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"443792972845831\");fbq(\"set\",\"agent\",\"tmgoogletagmanager\",\"443792972845831\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=443792972845831\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":202
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"443792972845831\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=443792972845831\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":203
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=4E3;window.setTimeout(function(){window.dataLayer.push({event:\"custom.historyChange\",custom:{historyChangeSource:",["escape",["macro",68],8,16],"}})},a)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":209
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=4E3;window.setTimeout(function(){window.dataLayer.push({event:\"domReadyTimer\"})},a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":210
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":260
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._pp=window._pp||[];if(\"",["escape",["macro",5],7],"\"==\"\/confirmation\/nnv\/\"\u0026\u0026\"",["escape",["macro",79],7],"\"==\"https:\/\/learning.oreilly.com\/register\/\")_pp.targetUrl=\"\/confirm\/trial\";else if(\"",["escape",["macro",5],7],"\"==\"\/confirmation\/nv\/\"\u0026\u0026\"",["escape",["macro",79],7],"\"==\"https:\/\/learning.oreilly.com\/subscribe\/\")_pp.targetUrl=\"\/confirm\/paid\";else if(\"",["escape",["macro",5],7],"\"==\"\/confirmation\/nnv\/\"\u0026\u0026\"",["escape",["macro",79],7],"\"==\"https:\/\/learning.oreilly.com\/signup\/\")_pp.targetUrl=\"\/confirm\/paid\";_pp.siteId=\"2508\";\n_pp.siteUId=\"",["escape",["macro",26],7],"\";_pp.orderValue=\"",["escape",["macro",80],7],"\";_pp.orderId=\"",["escape",["macro",81],7],"\";(function(){var ppjs=document.createElement(\"script\");ppjs.type=\"text\/javascript\";ppjs.async=true;ppjs.src=(\"https:\"==document.location.protocol?\"https:\":\"http:\")+\"\/\/cdn.pbbl.co\/r\/\"+_pp.siteId+\".js\";var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(ppjs,s)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":269
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1732687426968531\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1732687426968531\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":287
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction forceInputUppercase(a){var b=a.target.selectionStart,c=a.target.selectionEnd;a.target.value=a.target.value.toUpperCase();a.target.setSelectionRange(b,c)}void 0!=document.getElementById(\"id_promotion\")\u0026\u0026null!=document.getElementById(\"id_promotion\")\u0026\u0026document.getElementById(\"id_promotion\").addEventListener(\"keyup\",forceInputUppercase,!1);\nvoid 0!=document.getElementsByName(\"promotionCode\")[0]\u0026\u0026null!=document.getElementsByName(\"promotionCode\")[0]\u0026\u0026document.getElementsByName(\"promotionCode\")[0].addEventListener(\"keyup\",forceInputUppercase,!1);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":295
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"2241084802780624\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=2241084802780624\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":298
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"2241084802780624\");fbq(\"track\",\"PageView\");fbq(\"track\",\"Purchase\",{value:.01,currency:\"USD\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=2241084802780624\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":299
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SAConNY20\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":300
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"setData\",ui_strata:\"SAConNY20\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":301
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SAConNY20\"},{event:\"viewHome\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":302
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SAConNY20\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":303
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SAConNY20\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":304
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv2po\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":305
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"M2ZEQWT5KBAELF4UZPEU34\";adroll_pix_id=\"C3PBWNOSTFB7FOPPRQFSJT\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":306
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cbutton id=\"addToCartButton\"\u003EAdd To Cart\u003C\/button\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E$(\"#addToCartButton\").click(function(){qp(\"track\",\"Purchase\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":710
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"64888aa28b024c7388d63e9b444316de\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/64888aa28b024c7388d63e9b444316de\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":711
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"64888aa28b024c7388d63e9b444316de\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/64888aa28b024c7388d63e9b444316de\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Eqp(\"track\",\"Purchase\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":712
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":717
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar nonwExpandable=document.querySelectorAll(\".orm-ff-NavigationSubnav-headerListItem a, .orm-ff-NavigationView-headerListItem a\");nonwExpandable.forEach(function(a,b){b+1!=nonwExpandable.length?a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"global nav\",eventAct:\"navigation\",eventLbl:a.childNodes[1].textContent})}):b+1==nonwExpandable.length\u0026\u0026a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"user login\",eventAct:\"logout\",eventLbl:\"global nav | unified\"})})});\nvar nonwExpandableFo=document.querySelectorAll(\".drop-content li:not(.flyout-parent) a\");\nnonwExpandableFo.forEach(function(a,b){\"drop-content\"==a.parentNode.parentNode.parentNode.className\u0026\u0026b+1!=nonwExpandableFo.length?a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"global nav\",eventAct:\"navigation\",eventLbl:a.childNodes[1].textContent})}):\"drop-content\"==a.parentNode.parentNode.parentNode.className\u0026\u0026b+1==nonwExpandableFo.length\u0026\u0026a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"user login\",eventAct:\"logout\",eventLbl:\"global nav | unified\"})})});\nvar expandable=document.querySelectorAll(\".orm-ff-NavigationSubnav-toggleControls a, .orm-ff-NavigationView-toggleControls a\");expandable.forEach(function(a){a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"global nav\",eventAct:\"navigation\",eventLbl:a.parentNode.parentNode.parentNode.querySelectorAll(\".orm-Button-btnContentWrap span\")[0].childNodes[1].textContent+\" | \"+a.textContent})})});var flyoutLinks=document.querySelectorAll(\".flyout a\");\nflyoutLinks.forEach(function(a){a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"global nav\",eventAct:\"navigation\",eventLbl:a.closest(\"li.flyout-parent\").getElementsByTagName(\"a\")[0].textContent+\" | \"+a.textContent})})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":724
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":727
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":728
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"528172990687200\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=528172990687200\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":729
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"528172990687200\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=528172990687200\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":730
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"stai-ca-20\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":731
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"stai-eu-20\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":732
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"setData\",ui_strata:\"stai-ca-20\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":733
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"setData\",ui_strata:\"stai-eu-20\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":734
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"stai-ca-20\"},{event:\"viewHome\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":735
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"stai-eu-20\"},{event:\"viewHome\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":736
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"stai-ca-20\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":737
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"stai-eu-20\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":738
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"stai-ca-20\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":739
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"stai-eu-20\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":740
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nuqsj\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":741
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nuqsj\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":742
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\"undefined\"!==typeof kWidget\u0026\u0026kWidget.addReadyCallback(function(c){var b=document.getElementById(c);b.kBind(\"playerPlayEnd.pe\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"End\",eventLbl:",["escape",["macro",44],8,16],",eventVal:0,nonInteraction:0});b.kUnbind(\".pe\")});var d=!1,e=!1,f=!1,g=!1,h=!1,k=!1,l=!1,m=!1,n=!1,p=!1;b.addJsListener(\"playerUpdatePlayhead\",function(){var a=b.evaluate(\"{video.player.currentTime}\"),c=b.evaluate(\"{mediaProxy.entry.duration}\");a=100*parseFloat(a\/\nc);0\u003Ca\u0026\u0026!d\u0026\u0026(d=!0,dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"play\",eventLbl:",["escape",["macro",44],8,16],",eventVal:0,nonInteraction:0}));10\u003Ca\u0026\u0026!e\u0026\u0026(e=!0,dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"10%\",eventLbl:",["escape",["macro",44],8,16],",eventVal:0,nonInteraction:0}));20\u003Ca\u0026\u0026!f\u0026\u0026(f=!0,dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"20%\",eventLbl:",["escape",["macro",44],8,16],",eventVal:0,nonInteraction:0}));30\u003Ca\u0026\u0026!g\u0026\u0026(g=!0,dataLayer.push({event:\"eventTracker\",\neventCat:\"video plays\",eventAct:\"30%\",eventLbl:",["escape",["macro",44],8,16],",eventVal:0,nonInteraction:0}));40\u003Ca\u0026\u0026!h\u0026\u0026(h=!0,dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"40%\",eventLbl:",["escape",["macro",44],8,16],",eventVal:0,nonInteraction:0}));50\u003Ca\u0026\u0026!k\u0026\u0026(k=!0,dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"50%\",eventLbl:",["escape",["macro",44],8,16],",eventVal:0,nonInteraction:0}));60\u003Ca\u0026\u0026!l\u0026\u0026(l=!0,dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"60%\",eventLbl:",["escape",["macro",44],8,16],",\neventVal:0,nonInteraction:0}));70\u003Ca\u0026\u0026!m\u0026\u0026(m=!0,dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"70%\",eventLbl:",["escape",["macro",44],8,16],",eventVal:0,nonInteraction:0}));80\u003Ca\u0026\u0026!n\u0026\u0026(n=!0,dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"80%\",eventLbl:",["escape",["macro",44],8,16],",eventVal:0,nonInteraction:0}));90\u003Ca\u0026\u0026!p\u0026\u0026(p=!0,dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"90%\",eventLbl:",["escape",["macro",44],8,16],",eventVal:0,nonInteraction:0}));b.kUnbind(\".pp\")})});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":744
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"\\\/enterprise\\\/how\\-learning\\-accelerates\\-change\\-download\\\/|\\\/enterprise\\\/one\\-size\\-fits\\-all\\-training\\-doesnt\\-work\\-download\\\/|\\\/enterprise\\\/six\\-ways\\-leaders\\-can\\-navigate\\-change\\-download\\\/"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"ent.*_confirm\\.html"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"oreilly.com"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-ca\/public\/content\/sponsor-strata"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"get.oreilly.com"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"true"
    },{
      "function":"_gt",
      "arg0":["macro",22],
      "arg1":"0.0"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/velocity"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"Start your free trial"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"gtm.click"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)conferences.oreilly.com(.*)|(.*)ai.oreilly.com.cn(.*)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)oreilly.com\\\/blended-courses.*"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"eventTracker"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":".*oreilly.com\\\/blended-courses.*"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"VPTracker"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"\\\/account\\\/insights"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)www.oreilly.com(\\\/?$|\\\/about\\\/approach.html|\\\/sign-in\\.html|(.*\\\/)*free\\\/(.*)*|\\\/ideas(\\\/.*)*|\\\/radar(\\\/.*)*|\\\/learning(\\\/.*)*|\\\/topics(\\\/.*)*|\\\/people(\\\/.*)*|\\\/feed\\\/four\\-short\\-links\\\/?|\\\/all)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)get.oreilly.com(.*)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)www.oreilly.com\\\/online-learning(\\\/?$|\\\/enterprise\\.html|\\\/teams\\.html|\\\/individuals\\.html|\\\/government\\.html|\\\/academic\\.html|\\\/pricing\\.html|\\\/try-now\\.html)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"(.*)oreilly.com|www.safaribooksonline.com|learning.oreilly.review|oreilly.review",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"conferences.oreilly.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)www\\.oreilly\\.com\\\/blended-courses.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"(.*)oreilly.com|www.safaribooksonline.com|learning.oreilly.review|oreilly.review|nc\\-proxy.binderhub\\-prod.gcp.oreilly.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)www\\.oreilly\\.com\\\/blended-courses.*|learning\\.oreilly\\.(review|com)\\\/(case-studies|learning-paths|videos|resource-centers).*|www\\.oreilly\\.(review|com)\\\/(resource-centers).*",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",68],
      "arg1":"pushState"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"learning\\.oreilly\\.(review|com)\\\/(resource-centers|case-studies|learning-paths|videos).*|www\\.oreilly\\.(review|com)\\\/(resource-centers).*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"gtm.historyChange"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"learning\\.oreilly\\.(review|com)\\\/(case-studies|learning-paths|videos|resource-centers).*|www\\.oreilly\\.(review|com)\\\/(resource-centers).*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"domReadyTimer"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"custom.historyChange"
    },{
      "function":"_cn",
      "arg0":["macro",36],
      "arg1":"video"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"gtm.dom"
    },{
      "function":"_re",
      "arg0":["macro",36],
      "arg1":"article|podcast",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",36],
      "arg1":"jupyter notebook"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"(^$|((^|,)1669222_204($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/blended-courses\/data-science\/public\/register\/purchased\/"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"oreilly.com\/skills\/"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"gtm.video"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"(^$|((^|,)1669222_203($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"learning platform sign up",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"updatedEcommerce"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny\/public\/register\/purchased\/"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"-patterns-of-enterprise-transformation.html"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"oreilly.com\/ind_how-a-multi-cloud-strategy-enables-digital-transformation.html"
    },{
      "function":"_eq",
      "arg0":["macro",72],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"VWO"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"((.*)(oreilly.com\/(feed\/four\\-short\\-links|all)(\/?))$)|((.*)oreilly.com\/(ideas|learning|topics|people)(\\\/(.*)|$|\\?(.*)))",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"gtm.load"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com"
    },{
      "function":"_cn",
      "arg0":["macro",76],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)conferences.oreilly.com(.*)|(.*)ai.oreilly.com.cn(.*)|(.*)www.oreilly.com(.*)"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)oreilly.com\\\/(learning|radar|ideas)(\\\/(.*)|\\?(.*))",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)learning.oreilly.review(.*)|www.oreilly.review\\\/register\\\/"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/tensorflow\/tf-ca\/public\/register"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"safaribooksonline.com\/subscribe\/"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"\/signup\/"
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)oreilly.com\\\/(learning|ideas|radar)(\\\/(.*)|\\?(.*))",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",36],
      "arg1":"podcast"
    },{
      "function":"_eq",
      "arg0":["macro",78],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":".*www.oreilly.com.*data-science.*"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"get.oreilly.com\/ind_introduction-to-machine-learning-interpretability.html"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)learning.oreilly.com(.*)|www.oreilly.com\\\/register\\\/"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"(^$|((^|,)1669222_1064($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"ind_understanding-patterns-of-enterprise-transformation"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/software-architecture\/sa-ny\/public\/register\/order"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/software-architecture\/sa-ny"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"purchased"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"order"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"resources"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"sponsors"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"sa-ny\/public\/content\/resources"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"sa-ny\/public\/content\/sponsors"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/software-architecture\/sa-ny\/public\/register"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny\/public\/register\/order"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"Continue"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"get.oreilly.com\/ind_streaming-data.html"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"get.oreilly.com\/ind_the-care-and-feeding-of-data-scientists.html"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"get.oreilly.com\/ind_getting-dataops-right.html"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"(^$|((^|,)1669222_1106($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/strata-data-ai\/stai-ca"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/strata-data-ai\/stai-eu"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata-data-ai\/stai-ca\/public\/register\/order"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata-data-ai\/stai-eu\/public\/register\/order"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata-data-ai\/stai-ca\/public\/register\/purchased"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata-data-ai\/stai-eu\/public\/register\/purchased"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"stai-ca\/public\/content\/sponsors"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"\/stai-ca\/public\/content\/resources"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"stai-eu\/public\/content\/resources"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"stai-eu\/public\/content\/sponsors"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/strata-data-ai\/stai-ca\/public\/register"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"stai-eu\/public\/register"
    }],
  "rules":[
    [["if",0,1],["add",2,13]],
    [["if",1,2],["add",2,13]],
    [["if",1],["add",3,8,22,31,47,58,59,33,34,36,37,38,39,40,41,42]],
    [["if",1,3],["add",4]],
    [["if",1,4],["add",4]],
    [["if",1,5],["add",4]],
    [["if",1,6,7],["add",5,43,45,49]],
    [["if",1],["unless",8],["add",6,18]],
    [["if",9,10],["add",7,9,19,48,64]],
    [["if",1,11,12],["add",10]],
    [["if",1,13],["add",10]],
    [["if",11,14],["add",11]],
    [["if",14,15],["add",11]],
    [["if",11,16],["add",12]],
    [["if",1,17],["add",14]],
    [["if",16,18],["add",15]],
    [["if",16,19],["add",15]],
    [["if",16,20],["add",15]],
    [["if",14,21],["unless",22,23],["add",16]],
    [["if",1,24],["unless",22,25],["add",17]],
    [["if",26,28],["unless",27],["add",17]],
    [["if",29,30],["add",17]],
    [["if",29,31],["add",17,96]],
    [["if",32,33],["add",20]],
    [["if",34,36,37],["unless",35],["add",21]],
    [["if",1,38],["add",23]],
    [["if",1,39],["add",24,56]],
    [["if",32,40,41],["add",25]],
    [["if",14,42],["add",26]],
    [["if",43],["add",27]],
    [["if",1,44],["add",28,67,69,77],["block",66,76]],
    [["if",1,45],["add",29,66,73,74]],
    [["if",1,46],["add",29,66,73,74]],
    [["if",48],["unless",47],["add",30]],
    [["if",1,49],["add",32]],
    [["if",50],["add",35,57,65,79]],
    [["if",1],["unless",51],["add",44]],
    [["if",1,52],["add",0,1]],
    [["if",33,53],["unless",54],["add",46]],
    [["if",33,55],["add",47,52,63]],
    [["if",1,56],["add",47,52]],
    [["if",1,57],["add",50]],
    [["if",1,58],["add",50]],
    [["if",1,59],["add",51]],
    [["if",50,60],["add",53]],
    [["if",33,61],["add",54]],
    [["if",1,62],["add",55]],
    [["if",1,63],["add",56]],
    [["if",26,28,29],["add",60]],
    [["if",29,33],["add",61]],
    [["if",1,64],["add",62]],
    [["if",1,65],["add",63]],
    [["if",66,67],["add",65]],
    [["if",1,68],["add",66,73,74,76]],
    [["if",1,69],["add",66,73,74]],
    [["if",1,70],["add",68],["block",72]],
    [["if",1,71],["add",70]],
    [["if",1,76],["add",71]],
    [["if",1,77],["add",71]],
    [["if",1,78],["add",72]],
    [["if",10,79,80],["add",75]],
    [["if",1,81],["add",78]],
    [["if",1,82],["add",78]],
    [["if",1,83],["add",78]],
    [["if",66,84],["add",79]],
    [["if",1,85],["add",80,82,88,94]],
    [["if",1,86],["add",81,83,89,95]],
    [["if",1,87],["add",84],["block",92]],
    [["if",1,88],["add",85],["block",93]],
    [["if",1,89],["add",86]],
    [["if",1,90],["add",87]],
    [["if",1,91],["add",90]],
    [["if",1,92],["add",90]],
    [["if",1,93],["add",91]],
    [["if",1,94],["add",91]],
    [["if",1,95],["add",92]],
    [["if",1,96],["add",93]],
    [["if",32,50],["add",96]],
    [["if",1,72],["block",70,72,88,89,92,93]],
    [["if",1,73],["block",70,88,89]],
    [["if",1,74],["block",70,88,89]],
    [["if",1,75],["block",70,88,89]]]
},
"runtime":[
[],[]
]



};
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},da;if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var fa;a:{var ha={sf:!0},ia={};try{ia.__proto__=ha;fa=ia.sf;break a}catch(a){}fa=!1}da=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ka=da,la=this||self,ma=/^[\w+/_-]+[=]{0,2}$/,oa=null;var pa=function(){},qa=function(a){return"function"==typeof a},f=function(a){return"string"==typeof a},ra=function(a){return"number"==typeof a&&!isNaN(a)},ua=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},t=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},va=function(a,b){if(a&&ua(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},wa=function(a,b){if(!ra(a)||
!ra(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ya=function(a,b){for(var c=new xa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},za=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Aa=function(a){return Math.round(Number(a))||0},Ca=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Da=function(a){var b=[];if(ua(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ea=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Fa=function(){return(new Date).getTime()},xa=function(){this.prefix="gtm.";this.values={}};xa.prototype.set=function(a,b){this.values[this.prefix+a]=b};xa.prototype.get=function(a){return this.values[this.prefix+a]};xa.prototype.contains=function(a){return void 0!==this.get(a)};
var Ga=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ha=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ia=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ja=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ka=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},La=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ma=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Na=function(a){if(null==a)return String(a);var b=Ma.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Oa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Pa=function(a){if(!a||"object"!=Na(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Oa(a,"constructor")&&!Oa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Oa(a,b)},C=function(a,b){var c=b||("array"==Na(a)?[]:{}),d;for(d in a)if(Oa(a,d)){var e=a[d];"array"==Na(e)?("array"!=Na(c[d])&&(c[d]=[]),c[d]=C(e,c[d])):Pa(e)?(Pa(c[d])||(c[d]={}),c[d]=C(e,c[d])):c[d]=e}return c};
var Qa=[],Ra={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Sa=function(a){return Ra[a]},Ta=/[\x00\x22\x26\x27\x3c\x3e]/g;var Xa=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Ya={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},bb=function(a){return Ya[a]};Qa[7]=function(a){return String(a).replace(Xa,bb)};
Qa[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Xa,bb)+"'"}};var hb=/['()]/g,ib=function(a){return"%"+a.charCodeAt(0).toString(16)};Qa[12]=function(a){var b=
encodeURIComponent(String(a));hb.lastIndex=0;return hb.test(b)?b.replace(hb,ib):b};var kb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,lb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},mb=function(a){return lb[a]};Qa[16]=function(a){return a};var ob;
var pb=[],qb=[],rb=[],sb=[],ub=[],vb={},wb,xb,yb,zb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Ab=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=vb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[void 0!==d?g:g.substr(4)]=a[g]);return void 0!==d?d(e):ob(c,e,b)},Cb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Bb(a[e],b,c));
return d},Db=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=vb[b];return c?c.priorityOverride||0:0},Bb=function(a,b,c){if(ua(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Bb(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=pb[g];if(!h||b.Jc(h))return;c[g]=!0;try{var k=Cb(h,b,c);k.vtp_gtmEventId=b.id;d=Ab(k,b);yb&&(d=yb.Uf(d,k))}catch(y){b.he&&b.he(y,Number(g)),d=!1}c[g]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Bb(a[l],b,c)]=Bb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=Bb(a[n],b,c);xb&&(m=m||q===xb.zb);d.push(q)}return xb&&m?xb.Xf(d):d.join("");case "escape":d=Bb(a[1],b,c);if(xb&&ua(a[1])&&"macro"===a[1][0]&&xb.Dg(a))return xb.Og(d);d=String(d);for(var u=2;u<a.length;u++)Qa[a[u]]&&(d=Qa[a[u]](d));return d;case "tag":var p=a[1];if(!sb[p])throw Error("Unable to resolve tag reference "+p+".");return d={Wd:a[2],
index:p};case "zb":var r={arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var v=Fb(r,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Fb=function(a,b,c){try{return wb(Cb(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Gb=function(){var a=function(b){return{toString:function(){return b}}};return{ld:a("convert_case_to"),md:a("convert_false_to"),nd:a("convert_null_to"),od:a("convert_true_to"),pd:a("convert_undefined_to"),uh:a("debug_mode_metadata"),ma:a("function"),ff:a("instance_name"),hf:a("live_only"),jf:a("malware_disabled"),kf:a("metadata"),wh:a("original_vendor_template_id"),lf:a("once_per_event"),Jd:a("once_per_load"),Kd:a("setup_tags"),Ld:a("tag_id"),Md:a("teardown_tags")}}();var Hb=null,Kb=function(a){function b(q){for(var u=0;u<q.length;u++)d[q[u]]=!0}var c=[],d=[];Hb=Ib(a);for(var e=0;e<qb.length;e++){var g=qb[e],h=Jb(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<sb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Jb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Hb(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],g=0;g<e.length;g++){var h=Hb(e[g]);if(2===h)return null;
if(1===h)return!1}return!0},Ib=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Fb(rb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var Xb,Yb=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.Gf&&(l["fix_"+m]=!0),l.Xd=l.Xd||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},q={comment:function(){var p=k.indexOf("--\x3e");if(0<=p)return{content:k.substr(4,p),length:p+3}},endTag:function(){var p=k.match(d);if(p)return{tagName:p[1],length:p[0].length}},atomicTag:function(){var p=q.startTag();
if(p){var r=k.slice(p.length);if(r.match(new RegExp("</\\s*"+p.tagName+"\\s*>","i"))){var v=r.match(new RegExp("([\\s\\S]*?)</\\s*"+p.tagName+"\\s*>","i"));if(v)return{tagName:p.tagName,M:p.M,content:v[1],length:v[0].length+p.length}}}},startTag:function(){var p=k.match(c);if(p){var r={};p[2].replace(e,function(v,w,y,x,z){var B=y||x||z||g.test(w)&&w||null,A=document.createElement("div");A.innerHTML=B;r[w]=A.textContent||A.innerText||B});return{tagName:p[1],M:r,ob:!!p[3],length:p[0].length}}},chars:function(){var p=
k.indexOf("<");return{length:0<=p?p:k.length}}},u=function(){for(var p in n)if(n[p].test(k)){var r=q[p]();return r?(r.type=r.type||p,r.text=k.substr(0,r.length),k=k.slice(r.length),r):null}};l.Xd&&function(){var p=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,r=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.fe=function(){return this[this.length-1]};v.Mc=function(A){var E=this.fe();return E&&E.tagName&&E.tagName.toUpperCase()===A.toUpperCase()};v.Tf=
function(A){for(var E=0,J;J=this[E];E++)if(J.tagName===A)return!0;return!1};var w=function(A){A&&"startTag"===A.type&&(A.ob=p.test(A.tagName)||A.ob);return A},y=u,x=function(){k="</"+v.pop().tagName+">"+k},z={startTag:function(A){var E=A.tagName;"TR"===E.toUpperCase()&&v.Mc("TABLE")?(k="<TBODY>"+k,B()):l.Hh&&r.test(E)&&v.Tf(E)?v.Mc(E)?x():(k="</"+A.tagName+">"+k,B()):A.ob||v.push(A)},endTag:function(A){v.fe()?l.gg&&!v.Mc(A.tagName)?x():v.pop():l.gg&&(y(),B())}},B=function(){var A=k,E=w(y());k=A;if(E&&
z[E.type])z[E.type](E)};u=function(){B();return w(y())}}();return{append:function(p){k+=p},Xg:u,Oh:function(p){for(var r;(r=u())&&(!p[r.type]||!1!==p[r.type](r)););},clear:function(){var p=k;k="";return p},Ph:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.Vh="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.Qh=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,g=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.Wh=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,q;for(q in m.M){var u=m.M[q];
n+=" "+q+'="'+(u?u.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.ob?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.Gh=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var h in b)a.Kf=a.Kf||!b[h]&&h;Xb=a})();(function(){function a(){}function b(q){return void 0!==q&&null!==q}function c(q,u,p){var r,v=q&&q.length||0;for(r=0;r<v;r++)u.call(p,q[r],r)}function d(q,u,p){for(var r in q)q.hasOwnProperty(r)&&u.call(p,r,q[r])}function e(q,
u){d(u,function(p,r){q[p]=r});return q}function g(q,u){q=q||{};d(u,function(p,r){b(q[p])||(q[p]=r)});return q}function h(q){try{return m.call(q)}catch(p){var u=[];c(q,function(r){u.push(r)});return u}}var k={wf:a,xf:a,yf:a,zf:a,Hf:a,If:function(q){return q},done:a,error:function(q){throw q;},ah:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function q(p,r,v){var w="data-ps-"+r;if(2===arguments.length){var y=p.getAttribute(w);return b(y)?String(y):y}b(v)&&""!==v?p.setAttribute(w,
v):p.removeAttribute(w)}function u(p,r){var v=p.ownerDocument;e(this,{root:p,options:r,qb:v.defaultView||v.parentWindow,Ga:v,Ub:Xb("",{Gf:!0}),yc:[p],Vc:"",Wc:v.createElement(p.nodeName),nb:[],sa:[]});q(this.Wc,"proxyof",0)}u.prototype.write=function(){[].push.apply(this.sa,arguments);for(var p;!this.Lb&&this.sa.length;)p=this.sa.shift(),"function"===typeof p?this.Of(p):this.fd(p)};u.prototype.Of=function(p){var r={type:"function",value:p.name||p.toString()};this.Sc(r);p.call(this.qb,this.Ga);this.je(r)};
u.prototype.fd=function(p){this.Ub.append(p);for(var r,v=[],w,y;(r=this.Ub.Xg())&&!(w=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("script"):!1)&&!(y=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("style"):!1);)v.push(r);this.sh(v);w&&this.mg(r);y&&this.ng(r)};u.prototype.sh=function(p){var r=this.Lf(p);r.Pd&&(r.Hc=this.Vc+r.Pd,this.Vc+=r.Tg,this.Wc.innerHTML=r.Hc,this.qh())};u.prototype.Lf=function(p){var r=this.yc.length,v=[],w=[],y=[];c(p,function(x){v.push(x.text);if(x.M){if(!/^noscript$/i.test(x.tagName)){var z=
r++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+z+" $1"));"ps-script"!==x.M.id&&"ps-style"!==x.M.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+z+(x.ob?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{Xh:p,raw:v.join(""),Pd:w.join(""),Tg:y.join("")}};u.prototype.qh=function(){for(var p,r=[this.Wc];b(p=r.shift());){var v=1===p.nodeType;if(!v||!q(p,"proxyof")){v&&(this.yc[q(p,"id")]=p,q(p,"id",null));var w=p.parentNode&&q(p.parentNode,"proxyof");
w&&this.yc[w].appendChild(p)}r.unshift.apply(r,h(p.childNodes))}};u.prototype.mg=function(p){var r=this.Ub.clear();r&&this.sa.unshift(r);p.src=p.M.src||p.M.xh;p.src&&this.nb.length?this.Lb=p:this.Sc(p);var v=this;this.rh(p,function(){v.je(p)})};u.prototype.ng=function(p){var r=this.Ub.clear();r&&this.sa.unshift(r);p.type=p.M.type||p.M.yh||"text/css";this.th(p);r&&this.write()};u.prototype.th=function(p){var r=this.Nf(p);this.Ag(r);p.content&&(r.styleSheet&&!r.sheet?r.styleSheet.cssText=p.content:
r.appendChild(this.Ga.createTextNode(p.content)))};u.prototype.Nf=function(p){var r=this.Ga.createElement(p.tagName);r.setAttribute("type",p.type);d(p.M,function(v,w){r.setAttribute(v,w)});return r};u.prototype.Ag=function(p){this.fd('<span id="ps-style"/>');var r=this.Ga.getElementById("ps-style");r.parentNode.replaceChild(p,r)};u.prototype.Sc=function(p){p.Kg=this.sa;this.sa=[];this.nb.unshift(p)};u.prototype.je=function(p){p!==this.nb[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.nb.shift(),this.write.apply(this,p.Kg),!this.nb.length&&this.Lb&&(this.Sc(this.Lb),this.Lb=null))};u.prototype.rh=function(p,r){var v=this.Mf(p),w=this.gh(v),y=this.options.wf;p.src&&(v.src=p.src,this.eh(v,w?y:function(){r();y()}));try{this.zg(v),p.src&&!w||r()}catch(x){this.options.error(x),r()}};u.prototype.Mf=function(p){var r=this.Ga.createElement(p.tagName);d(p.M,function(v,w){r.setAttribute(v,w)});p.content&&(r.text=p.content);return r};u.prototype.zg=function(p){this.fd('<span id="ps-script"/>');
var r=this.Ga.getElementById("ps-script");r.parentNode.replaceChild(p,r)};u.prototype.eh=function(p,r){function v(){p=p.onload=p.onreadystatechange=p.onerror=null}var w=this.options.error;e(p,{onload:function(){v();r()},onreadystatechange:function(){/^(loaded|complete)$/.test(p.readyState)&&(v(),r())},onerror:function(){var y={message:"remote script failed "+p.src};v();w(y);r()}})};u.prototype.gh=function(p){return!/^script$/i.test(p.nodeName)||!!(this.options.ah&&p.src&&p.hasAttribute("async"))};
return u}();l.postscribe=function(){function q(){var w=r.shift(),y;w&&(y=w[w.length-1],y.xf(),w.stream=u.apply(null,w),y.yf())}function u(w,y,x){function z(J){J=x.If(J);v.write(J);x.zf(J)}v=new n(w,x);v.id=p++;v.name=x.name||v.id;var B=w.ownerDocument,A={close:B.close,open:B.open,write:B.write,writeln:B.writeln};e(B,{close:a,open:a,write:function(){return z(h(arguments).join(""))},writeln:function(){return z(h(arguments).join("")+"\n")}});var E=v.qb.onerror||a;v.qb.onerror=function(J,M,R){x.error({Lh:J+
" - "+M+":"+R});E.apply(v.qb,arguments)};v.write(y,function(){e(B,A);v.qb.onerror=E;x.done();v=null;q()});return v}var p=0,r=[],v=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=g(x,k);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.Kh?w[0]:w;var z=[w,y,x];w.Ng={cancel:function(){z.stream?z.stream.abort():z[1]=a}};x.Hf(z);r.push(z);v||q();return w.Ng},{streams:{},Nh:r,zh:n})}();Yb=l.postscribe}})();var D=window,F=document,Zb=navigator,$b=F.currentScript&&F.currentScript.src,ac=function(a,b){var c=D[a];D[a]=void 0===c?b:c;return D[a]},bc=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},cc=function(a,b,c){var d=F.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;bc(d,b);c&&(d.onerror=c);var e;if(null===oa)b:{var g=la.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&ma.test(k)){oa=k;break b}}oa=""}e=oa;e&&d.setAttribute("nonce",e);var l=F.getElementsByTagName("script")[0]||F.body||F.head;l.parentNode.insertBefore(d,l);return d},dc=function(){if($b){var a=$b.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},ec=function(a,b){var c=F.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=F.body&&F.body.lastChild||
F.body||F.head;d.parentNode.insertBefore(c,d);bc(c,b);void 0!==a&&(c.src=a);return c},fc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},gc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},hc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},G=function(a){D.setTimeout(a,0)},ic=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},jc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},kc=function(a){var b=F.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},lc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},mc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var oc=function(a){return nc?F.querySelectorAll(a):null},pc=function(a,b){if(!nc)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!F.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},qc=!1;if(F.querySelectorAll)try{var sc=F.querySelectorAll(":root");sc&&1==sc.length&&sc[0]==F.documentElement&&(qc=!0)}catch(a){}var nc=qc;var H={la:"_ee",gc:"event_callback",Ra:"event_timeout",w:"gtag.config",O:"allow_ad_personalization_signals",oc:"restricted_data_processing",U:"cookie_expires",Qa:"cookie_update",Ba:"session_duration",V:"user_properties"};var Ic=/[A-Z]+/,Jc=/\s/,Kc=function(a){if(f(a)&&(a=Ea(a),!Jc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Ic.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],h:d}}}}},Mc=function(a){for(var b={},c=0;c<a.length;++c){var d=Kc(a[c]);d&&(b[d.id]=d)}Lc(b);var e=[];za(b,function(g,h){e.push(h)});return e};
function Lc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.h[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Nc={},Oc=null,Pc=Math.random();Nc.m="GTM-5P4V6Z";Nc.Db="c61";var Qc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Rc="www.googletagmanager.com/gtm.js";var Sc=Rc,Tc=null,Uc=null,Vc=null,Wc="//www.googletagmanager.com/a?id="+Nc.m+"&cv=311",Xc={},Yc={},Zc=function(){var a=Oc.sequence||0;Oc.sequence=a+1;return a};var $c={},I=function(a,b){$c[a]=$c[a]||[];$c[a][b]=!0},ad=function(a){for(var b=[],c=$c[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var cd=function(){return"&tc="+sb.filter(function(a){return a}).length},fd=function(){dd||(dd=D.setTimeout(ed,500))},ed=function(){dd&&(D.clearTimeout(dd),dd=void 0);void 0===gd||hd[gd]&&!id&&!jd||(kd[gd]||ld.Fg()||0>=md--?(I("GTM",1),kd[gd]=!0):(ld.Zg(),fc(nd()),hd[gd]=!0,od=jd=id=""))},nd=function(){var a=gd;if(void 0===a)return"";var b=ad("GTM"),c=ad("TAGGING");return[pd,hd[a]?"":"&es=1",qd[a],b?"&u="+b:"",c?"&ut="+c:"",cd(),id,jd,od,"&z=0"].join("")},rd=function(){return[Wc,"&v=3&t=t","&pid="+
wa(),"&rv="+Nc.Db].join("")},sd="0.005000">Math.random(),pd=rd(),td=function(){pd=rd()},hd={},id="",jd="",od="",gd=void 0,qd={},kd={},dd=void 0,ld=function(a,b){var c=0,d=0;return{Fg:function(){if(c<a)return!1;Fa()-d>=b&&(c=0);return c>=a},Zg:function(){Fa()-d>=b&&(c=0);c++;d=Fa()}}}(2,1E3),md=1E3,ud=function(a,b){if(sd&&!kd[a]&&gd!==a){ed();gd=a;id="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";qd[a]="&e="+c+"&eid="+a;fd()}},vd=function(a,b,c){if(sd&&!kd[a]&&b){a!==gd&&
(ed(),gd=a);var d=String(b[Gb.ma]||"").replace(/_/g,"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;id=id?id+"."+e:"&tr="+e;fd();2022<=nd().length&&ed()}},wd=function(a,b,c){if(sd&&!kd[a]){a!==gd&&(ed(),gd=a);var d=c+b;jd=jd?jd+"."+d:"&epr="+d;fd();2022<=nd().length&&ed()}};var xd={},yd=new xa,zd={},Ad={},Dd={name:"dataLayer",set:function(a,b){C(La(a,b),zd);Bd()},get:function(a){return Cd(a,2)},reset:function(){yd=new xa;zd={};Bd()}},Cd=function(a,b){if(2!=b){var c=yd.get(a);if(sd){var d=Ed(a);c!==d&&I("GTM",5)}return c}return Ed(a)},Ed=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:Gd(d)},Gd=function(a){for(var b=zd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Id=function(a,b){Ad.hasOwnProperty(a)||(yd.set(a,b),C(La(a,b),zd),Bd())},Bd=function(a){za(Ad,function(b,c){yd.set(b,c);C(La(b,void 0),zd);C(La(b,c),zd);a&&delete Ad[b]})},Jd=function(a,b,c){xd[a]=xd[a]||{};var d=1!==c?Ed(b):yd.get(b);"array"===Na(d)||"object"===Na(d)?xd[a][b]=C(d):xd[a][b]=d},Kd=function(a,b){if(xd[a])return xd[a][b]};var Ld=function(){var a=!1;return a};var P=function(a,b,c,d){return(2===Md()||d||"http:"!=D.location.protocol?a:b)+c},Md=function(){var a=dc(),b;if(1===a)a:{var c=Sc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=F.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var ae=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),be={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},ce={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},de="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var fe=function(a){Yc.pntr=Yc.pntr||["nonGoogleScripts"];Yc.snppx=Yc.snppx||["nonGoogleScripts"];Yc.qpx=Yc.qpx||["nonGooglePixels"];var b=Cd("gtm.whitelist");b&&I("GTM",9);
var c=b&&Ka(Da(b),be),d=Cd("gtm.blacklist");d||(d=Cd("tagTypeBlacklist"))&&I("GTM",3);d?I("GTM",8):d=[];ee()&&(d=Da(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=t(Da(d),"google")&&I("GTM",2);var e=d&&Ka(Da(d),ce),g={};return function(h){var k=h&&h[Gb.ma];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];
var l=Yc[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>t(c,k))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>t(c,l[q])){I("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var u=!1;if(d){var p=0<=t(e,k);if(p)u=p;else{var r=ya(e,l||[]);r&&I("GTM",10);u=r}}var v=!m||u;v||!(0<=t(l,"sandboxedScripts"))||c&&-1!==t(c,"sandboxedScripts")||(v=ya(e,de));return g[k]=v}},ee=function(){return ae.test(D.location&&D.location.hostname)};var ge={Uf:function(a,b){b[Gb.ld]&&"string"===typeof a&&(a=1==b[Gb.ld]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Gb.nd)&&null===a&&(a=b[Gb.nd]);b.hasOwnProperty(Gb.pd)&&void 0===a&&(a=b[Gb.pd]);b.hasOwnProperty(Gb.od)&&!0===a&&(a=b[Gb.od]);b.hasOwnProperty(Gb.md)&&!1===a&&(a=b[Gb.md]);return a}};var he={active:!0,isWhitelisted:function(){return!0}},ie=function(a){var b=Oc.zones;!b&&a&&(b=Oc.zones=a());return b};var je=function(){};var ke=!1,le=0,me=[];function ne(a){if(!ke){var b=F.createEventObject,c="complete"==F.readyState,d="interactive"==F.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){ke=!0;for(var e=0;e<me.length;e++)G(me[e])}me.push=function(){for(var g=0;g<arguments.length;g++)G(arguments[g]);return 0}}}function oe(){if(!ke&&140>le){le++;try{F.documentElement.doScroll("left"),ne()}catch(a){D.setTimeout(oe,50)}}}var pe=function(a){ke?a():me.push(a)};var qe={},re={},se=function(a,b,c,d){if(!re[a]||Qc[b]||"__zone"===b)return-1;var e={};Pa(d)&&(e=C(d,e));e.id=c;e.status="timeout";return re[a].tags.push(e)-1},te=function(a,b,c,d){if(re[a]){var e=re[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function ue(a){for(var b=qe[a]||[],c=0;c<b.length;c++)b[c]();qe[a]={push:function(d){d(Nc.m,re[a])}}}
var xe=function(a,b,c){re[a]={tags:[]};qa(b)&&ve(a,b);c&&D.setTimeout(function(){return ue(a)},Number(c));return we(a)},ve=function(a,b){qe[a]=qe[a]||[];qe[a].push(Ha(function(){return G(function(){b(Nc.m,re[a])})}))};function we(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ha(function(){b++;d&&b>=c&&ue(a)})},Ef:function(){d=!0;b>=c&&ue(a)}}};var ye=function(){function a(d){return!ra(d)||0>d?0:d}if(!Oc._li&&D.performance&&D.performance.timing){var b=D.performance.timing.navigationStart,c=ra(Dd.get("gtm.start"))?Dd.get("gtm.start"):0;Oc._li={cst:a(c-b),cbt:a(Uc-b)}}};var Ce=!1,De=function(){return D.GoogleAnalyticsObject&&D[D.GoogleAnalyticsObject]},Ee=!1;
var Fe=function(a){D.GoogleAnalyticsObject||(D.GoogleAnalyticsObject=a||"ga");var b=D.GoogleAnalyticsObject;if(D[b])D.hasOwnProperty(b)||I("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);D[b]=c}ye();return D[b]},Ge=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=De();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Ie=function(){},He=function(){return D.GoogleAnalyticsObject||"ga"};/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Ke=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Le=/:[0-9]+$/,Me=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},Pe=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Ne(a.protocol)||Ne(D.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:D.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||D.location.hostname).replace(Le,"").toLowerCase());var g=b,h,k=Ne(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=Oe(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(Le,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||I("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=t(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=Me(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},Ne=function(a){return a?a.replace(":","").toLowerCase():""},Oe=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
Qe=function(a){var b=F.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||I("TAGGING",1),c="/"+c);var d=b.hostname.replace(Le,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};function Ve(a,b,c,d){var e=sb[a],g=We(a,b,c,d);if(!g)return null;var h=Bb(e[Gb.Kd],c,[]);if(h&&h.length){var k=h[0];g=Ve(k.index,{s:g,o:1===k.Wd?b.terminate:g,terminate:b.terminate},c,d)}return g}
function We(a,b,c,d){function e(){if(g[Gb.jf])k();else{var w=Cb(g,c,[]),y=se(c.id,String(g[Gb.ma]),Number(g[Gb.Ld]),w[Gb.kf]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var A=Fa()-B;vd(c.id,sb[a],"5");te(c.id,y,"success",A);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var A=Fa()-B;vd(c.id,sb[a],"6");te(c.id,y,"failure",A);k()}};w.vtp_gtmTagId=g.tag_id;
w.vtp_gtmEventId=c.id;vd(c.id,g,"1");var z=function(){var A=Fa()-B;vd(c.id,g,"7");te(c.id,y,"exception",A);x||(x=!0,k())};var B=Fa();try{Ab(w,c)}catch(A){z(A)}}}var g=sb[a],h=b.s,k=b.o,l=b.terminate;if(c.Jc(g))return null;var m=Bb(g[Gb.Md],c,[]);if(m&&m.length){var n=m[0],q=Ve(n.index,{s:h,o:k,terminate:l},c,d);if(!q)return null;h=q;k=2===n.Wd?l:q}if(g[Gb.Jd]||g[Gb.lf]){var u=g[Gb.Jd]?ub:c.ih,p=h,r=k;if(!u[a]){e=Ha(e);var v=Xe(a,u,e);h=v.s;k=v.o}return function(){u[a](p,r)}}return e}
function Xe(a,b,c){var d=[],e=[];b[a]=Ye(d,e,c);return{s:function(){b[a]=Ze;for(var g=0;g<d.length;g++)d[g]()},o:function(){b[a]=$e;for(var g=0;g<e.length;g++)e[g]()}}}function Ye(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Ze(a){a()}function $e(a,b){b()};var cf=function(a,b){for(var c=[],d=0;d<sb.length;d++)if(a.kb[d]){var e=sb[d];var g=b.add();try{var h=Ve(d,{s:g,o:g,terminate:g},a,d);h?c.push({ze:d,oe:Db(e),eg:h}):(af(d,a),g())}catch(l){g()}}b.Ef();c.sort(bf);for(var k=0;k<c.length;k++)c[k].eg();return 0<c.length};function bf(a,b){var c,d=b.oe,e=a.oe;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.ze,k=b.ze;g=h>k?1:h<k?-1:0}return g}
function af(a,b){if(!sd)return;var c=function(d){var e=b.Jc(sb[d])?"3":"4",g=Bb(sb[d][Gb.Kd],b,[]);g&&g.length&&c(g[0].index);vd(b.id,sb[d],e);var h=Bb(sb[d][Gb.Md],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var df=!1,ef=function(a,b,c,d,e){if("gtm.js"==b){if(df)return!1;df=!0}ud(a,b);var g=xe(a,d,e);Jd(a,"event",1);Jd(a,"ecommerce",1);Jd(a,"gtm");var h={id:a,name:b,Jc:fe(c),kb:[],ih:[],he:function(){I("GTM",6)}};h.kb=Kb(h);var k=cf(h,g);
if(!k)return k;for(var l=0;l<h.kb.length;l++)if(h.kb[l]){var m=sb[l];if(m&&!Qc[String(m[Gb.ma])])return!0}return!1};var gf=/^https?:\/\/www\.googletagmanager\.com/;function hf(){var a;return a}function kf(a,b){}
function jf(a){0!==a.indexOf("http://")&&0!==a.indexOf("https://")&&(a="https://"+a);"/"===a[a.length-1]&&(a=a.substring(0,a.length-1));return a}function lf(){var a=!1;return a};var mf=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.Ma={};this.globalConfig={};this.s=function(){};this.o=function(){}},nf=function(a){var b=new mf;b.eventModel=a;return b},of=function(a,b){a.targetConfig=b;return a},pf=function(a,b){a.containerConfig=b;return a},qf=function(a,b){a.Ma=b;return a},rf=function(a,b){a.globalConfig=b;return a},sf=function(a,b){a.s=b;return a},tf=function(a,b){a.o=b;return a};
mf.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.Ma[a])return this.Ma[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var uf=function(a){function b(e){za(e,function(g){c[g]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];za(c,function(e){d.push(e)});return d};var vf={},wf=["G"];vf.Be="";var xf=vf.Be.split(",");function yf(){var a=Oc;return a.gcq=a.gcq||new zf}
var Af=function(a,b,c){yf().register(a,b,c)},Bf=function(a,b,c,d){yf().push("event",[b,a],c,d)},Cf=function(a,b){yf().push("config",[a],b)},Df={},Ef=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.Ma={};this.pe=null;this.ae=!1},Ff=function(a,b,c,d,e){this.type=a;this.Ae=b;this.L=c||"";this.Hb=d;this.defer=e},zf=function(){this.Sd={};this.$d={};this.eb=[]},Gf=function(a,b){var c=Kc(b);return a.Sd[c.containerId]=a.Sd[c.containerId]||new Ef},Hf=function(a,b,c,d){if(d.L){var e=
Gf(a,d.L),g=e.pe;if(g){var h=C(c),k=C(e.targetConfig[d.L]),l=C(e.containerConfig),m=C(e.Ma),n=C(a.$d),q=Cd("gtm.uniqueEventId"),u=Kc(d.L).prefix,p=tf(sf(rf(qf(pf(of(nf(h),k),l),m),n),function(){wd(q,u,"2");}),function(){wd(q,u,"3");});try{wd(q,u,"1");3===g.length?g(b,d.Ae,p):4===g.length&&
g(d.L,b,d.Ae,p)}catch(r){wd(q,u,"4");}}}};
zf.prototype.register=function(a,b,c){if(3!==Gf(this,a).status){Gf(this,a).pe=b;Gf(this,a).status=3;c&&(Gf(this,a).Ma=c);var d=Kc(a),e=Df[d.containerId];if(void 0!==e){var g=Oc[d.containerId].bootstrap,h=d.prefix.toUpperCase();Oc[d.containerId]._spx&&(h=h.toLowerCase());var k=Cd("gtm.uniqueEventId"),l=h,m=Fa()-g;if(sd&&!kd[k]){k!==gd&&(ed(),gd=k);var n=l+"."+Math.floor(g-e)+"."+Math.floor(m);od=od?od+","+n:"&cl="+n}delete Df[d.containerId]}this.flush()}};
zf.prototype.push=function(a,b,c,d){var e=Math.floor(Fa()/1E3);if(c){var g=Kc(c),h;if(h=g){var k;if(k=1===Gf(this,c).status)a:{var l=g.prefix;k=!0}h=k}if(h&&(Gf(this,c).status=2,this.push("require",[],g.containerId),Df[g.containerId]=Fa(),!Ld())){var m=encodeURIComponent(g.containerId),n=("http:"!=D.location.protocol?"https:":"http:")+
"//www.googletagmanager.com";cc(n+"/gtag/js?id="+m+"&l=dataLayer&cx=c")}}this.eb.push(new Ff(a,e,c,b,d));d||this.flush()};
zf.prototype.flush=function(a){for(var b=this;this.eb.length;){var c=this.eb[0];if(c.defer)c.defer=!1,this.eb.push(c);else switch(c.type){case "require":if(3!==Gf(this,c.L).status&&!a)return;break;case "set":za(c.Hb[0],function(l,m){C(La(l,m),b.$d)});break;case "config":var d=c.Hb[0],e=!!d[H.yb];delete d[H.yb];var g=Gf(this,c.L),h=Kc(c.L),k=h.containerId===h.id;e||(k?g.containerConfig={}:g.targetConfig[c.L]={});g.ae&&e||Hf(this,H.w,d,c);g.ae=!0;delete d[H.la];k?C(d,g.containerConfig):C(d,g.targetConfig[c.L]);
break;case "event":Hf(this,c.Hb[1],c.Hb[0],c)}this.eb.shift()}};var If=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Lf=function(a,b,c,d){var e=Jf(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Kf(e,function(g){return g.Mb},b);if(1===e.length)return e[0].id;e=Kf(e,function(g){return g.lb},c);return e[0]?e[0].id:void 0}};
function Mf(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=If(b,e).indexOf(c)}
var Qf=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var q=void 0,u=void 0,p;for(p in h)if(h.hasOwnProperty(p)){var r=h[p];if(null!=r)switch(p){case "secure":r&&(m+="; secure");break;case "domain":q=r;break;default:"path"==p&&(u=r),"expires"==p&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+p+"="+r}}if("auto"===q){for(var v=Nf(),w=0;w<v.length;++w){var y="none"!=v[w]?v[w]:void 0;if(!Pf(y,u)&&Mf(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else q&&"none"!=q&&(m+="; domain="+q),k=!Pf(q,u)&&Mf(m,a,l)}return k};function Kf(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function Jf(a,b){for(var c=[],d=If(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Mb:1*k[0]||1,lb:1*k[1]||1}))}}return c}
var Rf=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Sf=/(^|\.)doubleclick\.net$/i,Pf=function(a,b){return Sf.test(document.location.hostname)||"/"===b&&Rf.test(a)},Nf=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Sf.test(e)||Rf.test(e)||a.push("none");return a};var Tf="".split(/,/),Uf=!1;var Vf=null,Wf={},Xf={},Yf;function Zf(a,b){var c={event:a};b&&(c.eventModel=C(b),b[H.gc]&&(c.eventCallback=b[H.gc]),b[H.Ra]&&(c.eventTimeout=b[H.Ra]));return c}
var eg={config:function(a){},
event:function(a){var b=a[1];if(f(b)&&!(3<a.length)){var c;if(2<a.length){if(!Pa(a[2])&&void 0!=a[2])return;c=a[2]}var d=Zf(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){3===a.length&&(void 0).Ih().Ah(a[1],a[2])},set:function(a){var b;2==a.length&&Pa(a[1])?b=
C(a[1]):3==a.length&&f(a[1])&&(b={},Pa(a[2])||ua(a[2])?b[a[1]]=C(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},fg={policy:!0};var gg=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},ig=function(a){var b=hg(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var pg=function(a){if(og(a))return a;this.ph=a};pg.prototype.lg=function(){return this.ph};var og=function(a){return!a||"object"!==Na(a)||Pa(a)?!1:"getUntrustedUpdateValue"in a};pg.prototype.getUntrustedUpdateValue=pg.prototype.lg;var qg=!1,rg=[];function sg(){if(!qg){qg=!0;for(var a=0;a<rg.length;a++)G(rg[a])}}var tg=function(a){qg?G(a):rg.push(a)};var ug=[],vg=!1,wg=function(a){return D["dataLayer"].push(a)},xg=function(a){var b=Oc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function yg(a){var b=a._clear;za(a,function(g,h){"_clear"!==g&&(b&&Id(g,void 0),Id(g,h))});Tc||(Tc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Zc(),a["gtm.uniqueEventId"]=d,Id("gtm.uniqueEventId",d));Vc=c;var e=zg(a);Vc=null;switch(c){case "gtm.init":I("GTM",19),e&&I("GTM",20)}return e}
function zg(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Oc.zones;d=e?e.checkState(Nc.m,c):he;return d.active?ef(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function Ag(){for(var a=!1;!vg&&0<ug.length;){vg=!0;delete zd.eventModel;Bd();var b=ug.shift();if(null!=b){var c=og(b);if(c){var d=b;b=og(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=Cd(h,1);if(ua(k)||Pa(k))k=C(k);Ad[h]=k}}try{if(qa(b))try{b.call(Dd)}catch(v){}else if(ua(b)){var l=b;if(f(l[0])){var m=
l[0].split("."),n=m.pop(),q=l.slice(1),u=Cd(m.join("."),2);if(void 0!==u&&null!==u)try{u[n].apply(u,q)}catch(v){}}}else{var p=b;if(p&&("[object Arguments]"==Object.prototype.toString.call(p)||Object.prototype.hasOwnProperty.call(p,"callee"))){a:{if(b.length&&f(b[0])){var r=eg[b[0]];if(r&&(!c||!fg[b[0]])){b=r(b);break a}}b=void 0}if(!b){vg=!1;continue}}a=yg(b)||a}}finally{c&&Bd(!0)}}vg=!1}
return!a}function Bg(){var a=Ag();try{gg(D["dataLayer"],Nc.m)}catch(b){}return a}
var Dg=function(){var a=ac("dataLayer",[]),b=ac("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};pe(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});tg(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Oc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new pg(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);ug.push.apply(ug,d);if(300<
this.length)for(I("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Ag()&&h};ug.push.apply(ug,a.slice(0));Cg()&&G(Bg)},Cg=function(){var a=!0;return a};var Eg={};Eg.zb=new String("undefined");
var Fg=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Eg.zb?b:a[d]);return c.join("")}};Fg.prototype.toString=function(){return this.resolve("undefined")};Fg.prototype.valueOf=Fg.prototype.toString;Eg.qf=Fg;Eg.wc={};Eg.Xf=function(a){return new Fg(a)};var Gg={};Eg.$g=function(a,b){var c=Zc();Gg[c]=[a,b];return c};Eg.Td=function(a){var b=a?0:1;return function(c){var d=Gg[c];if(d&&"function"===typeof d[b])d[b]();Gg[c]=void 0}};Eg.Dg=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};Eg.Og=function(a){if(a===Eg.zb)return a;var b=Zc();Eg.wc[b]=a;return'google_tag_manager["'+Nc.m+'"].macro('+b+")"};Eg.Hg=function(a,b,c){a instanceof Eg.qf&&(a=a.resolve(Eg.$g(b,c)),b=pa);return{Hc:a,s:b}};var Hg=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||ic(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Ig=function(a){Oc.hasOwnProperty("autoEventsSettings")||(Oc.autoEventsSettings={});var b=Oc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Jg=function(a,b,c){Ig(a)[b]=c},Kg=function(a,b,c,d){var e=Ig(a),g=Ga(e,b,d);e[b]=c(g)},Lg=function(a,b,c){var d=Ig(a);return Ga(d,b,c)};var Mg=function(){for(var a=Zb.userAgent+(F.cookie||"")+(F.referrer||""),b=a.length,c=D.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Fa()/1E3)].join(".")},Pg=function(a,b,c,d){var e=Ng(b);return Lf(a,e,Og(c),d)},Qg=function(a,b,c,d){var e=""+Ng(c),g=Og(d);1<g&&(e+="-"+g);return[b,e,a].join(".")},Ng=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Og=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var Rg=["1"],Sg={},Wg=function(a,b,c,d){var e=Tg(a);Sg[e]||Ug(e,b,c)||(Vg(e,Mg(),b,c,d),Ug(e,b,c))};function Vg(a,b,c,d,e){var g=Qg(b,"1",d,c);Qf(a,g,c,d,0==e?void 0:new Date(Fa()+1E3*(void 0==e?7776E3:e)))}function Ug(a,b,c){var d=Pg(a,b,c,Rg);d&&(Sg[a]=d);return d}function Tg(a){return(a||"_gcl")+"_au"};var Xg=function(){for(var a=[],b=F.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({cd:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].cd]||(g[a[h].cd]=[]),g[a[h].cd].push({timestamp:k[1],ig:k[2]}))}return g};function Yg(){for(var a=Zg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function $g(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Zg,ah;function bh(a){Zg=Zg||$g();ah=ah||Yg();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(n=64));b.push(Zg[l],Zg[m],Zg[n],Zg[q])}return b.join("")}
function ch(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=ah[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Zg=Zg||$g();ah=ah||Yg();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var dh;function eh(a,b){if(!a||b===F.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var ih=function(){var a=fh,b=gh,c=hh(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){gc(F,"mousedown",d);gc(F,"keyup",d);gc(F,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},hh=function(){var a=ac("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var jh=/(.*?)\*(.*?)\*(.*)/,kh=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,lh=/^(?:www\.|m\.|amp\.)+/,mh=/([^?#]+)(\?[^#]*)?(#.*)?/,nh=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,ph=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(bh(String(d))))}var e=b.join("*");return["1",oh(e),e].join("*")},oh=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=dh)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}dh=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^dh[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},rh=function(){return function(a){var b=Qe(D.location.href),c=b.search.replace("?",""),d=Me(c,"_gl",!0)||"";a.query=qh(d)||{};var e=Pe(b,"fragment").match(nh);a.fragment=qh(e&&e[3]||
"")||{}}},sh=function(){var a=rh(),b=hh();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ia(c,d.query),Ia(c,d.fragment));return c},qh=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=jh.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===oh(k,n)){l=!0;break a}l=!1}if(l){for(var q={},u=k?k.split("*"):[],p=0;p<u.length;p+=2)q[u[p]]=ch(u[p+1]);return q}}}}catch(r){}};
function th(a,b,c){function d(m){var n=m,q=nh.exec(n),u=n;if(q){var p=q[2],r=q[4];u=q[1];r&&(u=u+p+r)}m=u;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=mh.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function uh(a,b,c){for(var d={},e={},g=hh().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&eh(k.domains,b)&&(k.fragment?Ia(e,k.callback()):Ia(d,k.callback()))}if(Ja(d)){var l=ph(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],q=!1,u=0;u<n.length;u++){var p=n[u];if("_gl"===p.name){p.setAttribute("value",l);q=!0;break}}if(!q){var r=F.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=th(l,a.action);Ke.test(v)&&(a.action=v)}}}else vh(l,a,!1)}if(!c&&Ja(e)){var w=ph(e);vh(w,a,!0)}}function vh(a,b,c){if(b.href){var d=th(a,b.href,void 0===c?!1:c);Ke.test(d)&&(b.href=d)}}
var fh=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||uh(e,e.hostname,!1)}}catch(h){}},gh=function(a){try{if(a.action){var b=Pe(Qe(a.action),"host");uh(a,b,!0)}}catch(c){}},wh=function(a,b,c,d){ih();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};hh().decorators.push(e)},xh=function(){var a=F.location.hostname,b=kh.exec(F.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(lh,""),l=e.replace(lh,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},yh=function(a,b){return!1===a?!1:a||b||xh()};var zh={};var Ah=/^\w+$/,Bh=/^[\w-]+$/,Ch=/^~?[\w-]+$/,Dh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"};function Eh(a){return a&&"string"==typeof a&&a.match(Ah)?a:"_gcl"}var Gh=function(){var a=Qe(D.location.href),b=Pe(a,"query",!1,void 0,"gclid"),c=Pe(a,"query",!1,void 0,"gclsrc"),d=Pe(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Me(e,"gclid",void 0);c=c||Me(e,"gclsrc",void 0)}return Fh(b,c,d)};
function Fh(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(Bh))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==zh.gtm_3pds?0:zh.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d}var Ih=function(a){var b=Gh();Hh(b,a)};
function Hh(a,b,c){function d(q,u){var p=Jh(q,e);p&&Qf(p,u,h,g,l,!0)}b=b||{};var e=Eh(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Ja?7776E3:b.Ja;c=c||Fa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(q){return["GCL",m,q].join(".")};a.aw&&(!0===b.Yh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]));a.gp&&d("gp",n(a.gp[0]))}
var Lh=function(a,b,c,d,e){for(var g=sh(),h=Eh(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==Dh[l]){var m=Jh(l,h),n=g[m];if(n){var q=Math.min(Kh(n),Fa()),u;b:{for(var p=q,r=If(m,F.cookie),v=0;v<r.length;++v)if(Kh(r[v])>p){u=!0;break b}u=!1}u||Qf(m,n,c,d,0==e?void 0:new Date(q+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};Hh(Fh(g.gclid,g.gclsrc),w)},Jh=function(a,b){var c=Dh[a];if(void 0!==c)return b+c},Kh=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Mh(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Nh=function(a,b,c,d,e){if(ua(b)){var g=Eh(e);wh(function(){for(var h={},k=0;k<a.length;++k){var l=Jh(a[k],g);if(l){var m=If(l,F.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Oh=function(a){return a.filter(function(b){return Ch.test(b)})},Ph=function(a,b){for(var c=Eh(b&&b.prefix),d={},e=0;e<a.length;e++)Dh[a[e]]&&(d[a[e]]=Dh[a[e]]);za(d,function(g,h){var k=If(c+h,F.cookie);if(k.length){var l=k[0],m=Kh(l),n={};n[g]=[Mh(l)];Hh(n,b,m)}})};var Qh=/^\d+\.fls\.doubleclick\.net$/;function Rh(a){var b=Qe(D.location.href),c=Pe(b,"host",!1);if(c&&c.match(Qh)){var d=Pe(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Sh(a,b){if("aw"==a||"dc"==a){var c=Rh("gcl"+a);if(c)return c.split(".")}var d=Eh(b);if("_gcl"==d){var e;e=Gh()[a]||[];if(0<e.length)return e}var g=Jh(a,d),h;if(g){var k=[];if(F.cookie){var l=If(g,F.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Mh(l[m]);n&&-1===t(k,n)&&k.push(n)}h=Oh(k)}else h=k}else h=k}else h=[];return h}
var Th=function(){var a=Rh("gac");if(a)return decodeURIComponent(a);var b=Xg(),c=[];za(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].ig);g=Oh(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},Uh=function(a,b,c,d,e){Wg(b,c,d,e);var g=Sg[Tg(b)],h=Gh().dc||[],k=!1;if(g&&0<h.length){var l=Oc.joined_au=Oc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var q="http://ad.doubleclick.net/ddm/regclk",u=q=q+"?gclid="+h[n]+"&auiddc="+g;Zb.sendBeacon&&Zb.sendBeacon(u)||fc(u);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var p=Tg(b),r=Sg[p];r&&Vg(p,r,c,d,e)}};var Vh;if(3===Nc.Db.length)Vh="g";else{var Wh="G";Vh=Wh}
var Xh={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Vh,OPT:"o"},Yh=function(a){var b=Nc.m.split("-"),c=b[0].toUpperCase(),d=Xh[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===Nc.Db.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+Nc.Db+e};var ci=["input","select","textarea"],di=["button","hidden","image","reset","submit"],ei=function(a){var b=a.tagName.toLowerCase();return!va(ci,function(c){return c===b})||"input"===b&&va(di,function(c){return c===a.type.toLowerCase()})?!1:!0},fi=function(a){return a.form?a.form.tagName?a.form:F.getElementById(a.form):lc(a,["form"],100)},gi=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,g=1;e<a.elements.length;e++){var h=a.elements[e];if(ei(h)){if(h.getAttribute(c)===d)return g;
g++}}return 0};var ji=!!D.MutationObserver,ki=void 0,li=function(a){if(!ki){var b=function(){var c=F.body;if(c)if(ji)(new MutationObserver(function(){for(var e=0;e<ki.length;e++)G(ki[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;gc(c,"DOMNodeInserted",function(){d||(d=!0,G(function(){d=!1;for(var e=0;e<ki.length;e++)G(ki[e])}))})}};ki=[];F.body?b():G(b)}ki.push(a)};
var wi=function(){var a=F.body,b=F.documentElement||a&&a.parentElement,c,d;if(F.compatMode&&"BackCompat"!==F.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(g,h){return g&&h?Math.min(g,h):Math.max(g,h)};I("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},xi=function(a){var b=wi(),c=b.height,d=b.width,e=a.getBoundingClientRect(),g=e.bottom-e.top,h=e.right-e.left;return g&&h?(1-Math.min((Math.max(0-e.left,0)+
Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/g,1)):0},yi=function(a){if(F.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!D.getComputedStyle)return!0;var c=D.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var g=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),g=Math.min(h,g))}if(void 0!==g&&0>=g)return!0;(d=d.parentElement)&&(e=D.getComputedStyle(d,null))}return!1};var zi=[],Bi=!(!D.IntersectionObserver||!D.IntersectionObserverEntry),Ci=function(a,b,c){for(var d=new D.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var g=0;g<zi.length;g++)if(!zi[g])return zi[g]=d,g;return zi.push(d)-1},Di=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,
height:0},n={boundingClientRect:k.getBoundingClientRect(),intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:Fa()};G(function(){return a(n)})}for(var e=[],g=[],h=0;h<b.length;h++)e.push(0),g.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=xi(b[k]);if(l>e[k])for(;g[k]<c.length-1&&l>=c[g[k]+1];)d(b[k],l),g[k]++;else if(l<e[k])for(;0<=g[k]&&l<=c[g[k]];)d(b[k],l),g[k]--;e[k]=l}}},Ei=function(a,b,c){for(var d=0;d<c.length;d++)1<
c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Bi){var e=!1;G(function(){e||Di(a,b,c)()});return Ci(function(g){e=!0;for(var h={Oa:0};h.Oa<g.length;h={Oa:h.Oa},h.Oa++)G(function(k){return function(){return a(g[k.Oa])}}(h))},b,c)}return D.setInterval(Di(a,b,c),1E3)},Fi=function(a){Bi?0<=a&&a<zi.length&&zi[a]&&(zi[a].disconnect(),zi[a]=void 0):D.clearInterval(a)};
var Gi=function(a,b,c){function d(){var h=a();g+=e?(Fa()-e)*h.playbackRate/1E3:0;e=Fa()}var e=0,g=0;return{Nb:function(h,k,l){var m=a(),n=m.Ud,q=void 0!==l?Math.round(l):void 0!==k?Math.round(m.Ud*k):Math.round(m.Yf),u=void 0!==k?Math.round(100*k):0>=n?0:Math.round(q/n*100),p=F.hidden?!1:.5<=xi(c);d();var r=Hg(c,"gtm.video",[b]);r["gtm.videoProvider"]="youtube";r["gtm.videoStatus"]=h;r["gtm.videoUrl"]=m.url;r["gtm.videoTitle"]=m.title;r["gtm.videoDuration"]=Math.round(n);r["gtm.videoCurrentTime"]=
Math.round(q);r["gtm.videoElapsedTime"]=Math.round(g);r["gtm.videoPercent"]=u;r["gtm.videoVisible"]=p;wg(r)},bh:function(){e=Fa()},xc:function(){d()}}};var Hi=D.clearTimeout,Ii=D.setTimeout,T=function(a,b,c){if(Ld()){b&&G(b)}else return cc(a,b,c)},Ji=function(){return D.location.href},Ki=function(a){return Pe(Qe(a),"fragment")},Li=function(a){return Oe(Qe(a))},V=function(a,b){return Cd(a,b||2)},Mi=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return wg(a)},Ni=function(a,b){D[a]=b},W=function(a,b,c){b&&(void 0===D[a]||c&&!D[a])&&(D[a]=b);return D[a]},
Oi=function(a,b,c){return If(a,b,void 0===c?!0:!!c)},Pi=function(a,b){if(Ld()){b&&G(b)}else ec(a,b)},Qi=function(a){return!!Lg(a,"init",!1)},Ri=function(a){Jg(a,"init",!0)},Si=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Sc;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";T(P("https://","http://",c))},Ti=function(a,b){var c=a[b];return c};
var Ui=Eg.Hg;var Vi;var rj=new xa;function sj(a,b){function c(h){var k=Qe(h),l=Pe(k,"protocol"),m=Pe(k,"host",!0),n=Pe(k,"port"),q=Pe(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0}
function tj(a){return uj(a)?1:0}
function uj(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ua(c)){for(var d=0;d<c.length;d++)if(tj({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=t(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var q;var u=a.ignore_case?"i":void 0;try{var p=String(c)+u,r=rj.get(p);r||(r=new RegExp(c,u),rj.set(p,r));q=r.test(b)}catch(v){q=!1}return q;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return sj(b,
c)}return!1};var vj=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var wj={},xj=encodeURI,X=encodeURIComponent,yj=fc;var zj=function(a,b){if(!a)return!1;var c=Pe(Qe(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var Aj=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};wj.Eg=function(){var a=!1;return a};var Kk=function(){var a=D.gaGlobal=D.gaGlobal||{};a.hid=a.hid||wa();return a.hid};var Vk=window,Wk=document,Xk=function(a){var b=Vk._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Vk["ga-disable-"+a])return!0;try{var c=Vk.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=If("AMP_TOKEN",Wk.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Wk.getElementById("__gaOptOutExtension")?!0:!1};function $k(a){return"_"===a.charAt(0)}var al=function(a){za(a,function(c){$k(c)&&delete a[c]});var b=a[H.V]||{};za(b,function(c){$k(c)&&delete b[c]})};var el=function(a,b,c){Bf(b,c,a)},fl=function(a,b,c){Bf(b,c,a,!0)},hl=function(a,b){};
function gl(a,b){}var Y={a:{}};

Y.a.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(x){for(var z=[],B=x.split(","),A=0;A<B.length;A++){var E=Number(B[A]);if(isNaN(E))return[];n.test(B[A])||z.push(E)}return z}function c(){var x=0,z=0;return function(){var B=wi(),A=B.height;x=Math.max(v.scrollLeft+B.width,x);z=Math.max(v.scrollTop+A,z);return{$f:x,ag:z}}}function d(){p=W("self");
r=p.document;v=r.scrollingElement||r.body&&r.body.parentNode;y=c()}function e(x,z,B,A){var E=l(z),J={},M;for(M in E){J.va=M;if(E.hasOwnProperty(J.va)){var R=Number(J.va);x<R||(Mi({event:"gtm.scrollDepth","gtm.scrollThreshold":R,"gtm.scrollUnits":B.toLowerCase(),"gtm.scrollDirection":A,"gtm.triggers":E[J.va].join(",")}),Kg("sdl",z,function(ca){return function(Q){delete Q[ca.va];return Q}}(J),{}))}J={va:J.va}}}function g(){var x=y(),z=x.$f,B=x.ag,A=z/v.scrollWidth*100,E=B/v.scrollHeight*100;e(z,"horiz.pix",
q.Bb,u.Id);e(A,"horiz.pct",q.Ab,u.Id);e(B,"vert.pix",q.Bb,u.Od);e(E,"vert.pct",q.Ab,u.Od);Jg("sdl","pending",!1)}function h(){var x=250,z=!1;r.scrollingElement&&r.documentElement&&p.addEventListener&&(x=50,z=!0);var B=0,A=!1,E=function(){A?B=Ii(E,x):(B=0,g(),Qi("sdl")&&!a()&&(hc(p,"scroll",J),hc(p,"resize",J),Jg("sdl","init",!1)));A=!1},J=function(){z&&y();B?A=!0:(B=Ii(E,x),Jg("sdl","pending",!0))};return J}function k(x,z,B){if(z){var A=b(String(x));Kg("sdl",B,function(E){for(var J=0;J<A.length;J++){var M=
String(A[J]);E.hasOwnProperty(M)||(E[M]=[]);E[M].push(z)}return E},{})}}function l(x){return Lg("sdl",x,{})}function m(x){G(x.vtp_gtmOnSuccess);var z=x.vtp_uniqueTriggerId,B=x.vtp_horizontalThresholdsPixels,A=x.vtp_horizontalThresholdsPercent,E=x.vtp_verticalThresholdUnits,J=x.vtp_verticalThresholdsPixels,M=x.vtp_verticalThresholdsPercent;switch(x.vtp_horizontalThresholdUnits){case q.Bb:k(B,z,"horiz.pix");break;case q.Ab:k(A,z,"horiz.pct")}switch(E){case q.Bb:k(J,z,"vert.pix");break;case q.Ab:k(M,
z,"vert.pct")}Qi("sdl")?Lg("sdl","pending")||(w||(d(),w=!0),G(function(){return g()})):(d(),w=!0,v&&(Ri("sdl"),Jg("sdl","pending",!0),G(function(){g();if(a()){var R=h();gc(p,"scroll",R);gc(p,"resize",R)}else Jg("sdl","init",!1)})))}var n=/^\s*$/,q={Ab:"PERCENT",Bb:"PIXELS"},u={Od:"vertical",Id:"horizontal"},p,r,v,w=!1,y;(function(x){Y.__sdl=x;Y.__sdl.b="sdl";Y.__sdl.g=!0;Y.__sdl.priorityOverride=0})(function(x){x.vtp_triggerStartOption?m(x):tg(function(){m(x)})})}();

Y.a.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.b="jsm";Y.__jsm.g=!0;Y.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Y.a.sp=["google"],function(){(function(a){Y.__sp=a;Y.__sp.b="sp";Y.__sp.g=!0;Y.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure;ye();T(b,function(){var d=W("google_trackConversion");if(qa(d)){var e={};"DATA_LAYER"==a.vtp_customParamsFormat?e=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(e=Aj(a.vtp_customParams,
"key","value"));var g={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(e.event=a.vtp_eventName),a.vtp_eventValue&&(g.value=a.vtp_eventValue),a.vtp_eventItems&&(g.items=a.vtp_eventItems));var h={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:e,google_gtag_event_data:g,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:Yh()};a.vtp_rdp&&(h.google_restricted_data_processing=!0);d(h)||c()}else c()},c)})}();

Y.a.e=["google"],function(){(function(a){Y.__e=a;Y.__e.b="e";Y.__e.g=!0;Y.__e.priorityOverride=0})(function(a){return String(Kd(a.vtp_gtmEventId,"event"))})}();
Y.a.f=["google"],function(){(function(a){Y.__f=a;Y.__f.b="f";Y.__f.g=!0;Y.__f.priorityOverride=0})(function(a){var b=V("gtm.referrer",1)||F.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Pe(Qe(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Li(String(b)):String(b)})}();
Y.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Hg(c,"gtm.click");Mi(d)}}(function(b){Y.__cl=b;Y.__cl.b="cl";Y.__cl.g=!0;Y.__cl.priorityOverride=0})(function(b){if(!Qi("cl")){var c=W("document");gc(c,"click",a,!0);Ri("cl")}G(b.vtp_gtmOnSuccess)})}();Y.a.k=["google"],function(){(function(a){Y.__k=a;Y.__k.b="k";Y.__k.g=!0;Y.__k.priorityOverride=0})(function(a){return Oi(a.vtp_name,V("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Y.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.b="u";Y.__u.g=!0;Y.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:V("gtm.url",1))||Ji();var d=b[a("vtp_component")];if(!d||"URL"==d)return Li(String(c));var e=Qe(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?ua(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var q=Pe(e,"QUERY",void 0,void 0,m[n]);if(void 0!=q&&(!l||""!==q)){g=q;break a}}g=void 0}else g=Pe(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Y.a.v=["google"],function(){(function(a){Y.__v=a;Y.__v.b="v";Y.__v.g=!0;Y.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=V(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Y.a.tl=["google"],function(){function a(b){return function(){if(b.Nc&&b.Pc>=b.Nc)b.Ic&&W("self").clearInterval(b.Ic);else{b.Pc++;var c=(new Date).getTime();Mi({event:b.aa,"gtm.timerId":b.Ic,"gtm.timerEventNumber":b.Pc,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.Nc,"gtm.timerStartTime":b.ye,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.ye,"gtm.triggers":b.nh})}}}(function(b){Y.__tl=b;Y.__tl.b="tl";Y.__tl.g=!0;Y.__tl.priorityOverride=0})(function(b){G(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{aa:b.vtp_eventName,Pc:0,interval:Number(b.vtp_interval),Nc:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),nh:String(b.vtp_uniqueTriggerId||"0"),ye:(new Date).getTime()};c.Ic=W("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Y.a.ua=["google"],function(){var a,b={},c=function(d){var e={},g={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;C(Aj(n.vtp_fieldsToSet,"fieldName","value"),g);C(Aj(n.vtp_contentGroup,"index","group"),h);C(Aj(n.vtp_dimension,"index","dimension"),k);C(Aj(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var q=C(n);d=C(d,q)}C(Aj(d.vtp_fieldsToSet,"fieldName","value"),g);C(Aj(d.vtp_contentGroup,
"index","group"),h);C(Aj(d.vtp_dimension,"index","dimension"),k);C(Aj(d.vtp_metric,"index","metric"),l);var u=Fe(d.vtp_functionName);if(qa(u)){var p="",r="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(r=d.vtp_trackerName,p=r+"."):(r="gtm"+Zc(),p=r+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},y=function(O){var K=[].slice.call(arguments,0);K[0]=p+K[0];u.apply(window,K)},x=function(O,K){return void 0===K?K:O(K)},z=function(O,K){if(K)for(var sa in K)K.hasOwnProperty(sa)&&y("set",O+sa,K[sa])},B=function(){
var O=function(cm,Ai,dm){if(!Pa(Ai))return!1;for(var bd=Ga(Object(Ai),dm,[]),Of=0;bd&&Of<bd.length;Of++)y(cm,bd[Of]);return!!bd&&0<bd.length},K;if(d.vtp_useEcommerceDataLayer){var sa=!1;sa||(K=V("ecommerce",1))}else d.vtp_ecommerceMacroData&&(K=d.vtp_ecommerceMacroData.ecommerce);if(!Pa(K))return;K=Object(K);var Eb=Ga(g,"currencyCode",K.currencyCode);
void 0!==Eb&&y("set","&cu",Eb);O("ec:addImpression",K,"impressions");if(O("ec:addPromo",K[K.promoClick?"promoClick":"promoView"],"promotions")&&K.promoClick){y("ec:setAction","promo_click",K.promoClick.actionField);return}for(var Ba="detail checkout checkout_option click add remove purchase refund".split(" "),Za="refund purchase remove checkout checkout_option add click detail".split(" "),$a=0;$a<Ba.length;$a++){var jb=K[Ba[$a]];if(jb){O("ec:addProduct",jb,"products");y("ec:setAction",Ba[$a],jb.actionField);
if(sd)for(var tb=0;tb<Za.length;tb++){var rc=K[Za[tb]];if(rc){rc!==jb&&I("GTM",13);break}}break}}},A=function(O,K,sa){var Eb=0;if(O)for(var Ba in O)if(O.hasOwnProperty(Ba)&&(sa&&v[Ba]||!sa&&void 0===v[Ba])){var Za=w[Ba]?Ca(O[Ba]):O[Ba];"anonymizeIp"!=Ba||Za||(Za=void 0);K[Ba]=Za;Eb++}return Eb},E={name:r};A(g,E,!0);u("create",d.vtp_trackingId||e.trackingId,E);y("set","&gtm",Yh(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(O,K){void 0!==d[K]&&y("set",O,d[K])})("nonInteraction","vtp_nonInteraction");z("contentGroup",h);z("dimension",k);z("metric",l);var J={};A(g,J,!1)&&y("set",J);var M;
d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var O=g&&g.hitCallback;qa(O)&&O();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),B());var R={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(Aa,d.vtp_eventValue||
e.value)};A(M,R,!1);y("send",R);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(y("require","ec","ec.js"),B());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var na=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:na})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var ja="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:ja})}M?y("send","pageview",M):y("send","pageview");d.vtp_autoLinkDomains&&Ge(p,d.vtp_autoLinkDomains,!!d.vtp_useHashAutoLink,!!d.vtp_decorateFormsAutoLink);
}if(!a){var ta=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(ta="internal/"+ta);a=!0;var ab=P("https:","http:","//www.google-analytics.com/"+ta,g&&g.forceSSL);T(ab,function(){var O=De();O&&O.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else G(d.vtp_gtmOnFailure)};Y.__ua=c;Y.__ua.b="ua";Y.__ua.g=!0;Y.__ua.priorityOverride=0}();



Y.a.ytl=["google"],function(){function a(){var w=Math.round(1E9*Math.random())+"";return F.getElementById(w)?a():w}function b(w,y){if(!w)return!1;for(var x=0;x<u.length;x++)if(0<=w.indexOf("//"+u[x]+"/"+y))return!0;return!1}function c(w){var y=-1!==w.indexOf("?")?"&":"?";if(-1<w.indexOf("origin="))return w+y+"enablejsapi=1";if(!r){var x=W("document");r=x.location.protocol+"//"+x.location.hostname;x.location.port&&(r+=":"+x.location.port)}return w+y+"enablejsapi=1&origin="+encodeURIComponent(r)}function d(w,
y){var x=w.getAttribute("src");if(b(x,"embed/")){if(0<x.indexOf("enablejsapi=1"))return!0;if(y)return w.setAttribute("src",c(x)),!0}return!1}function e(w,y){if(!w.getAttribute("data-gtm-yt-inspected-"+y.dd)&&(w.setAttribute("data-gtm-yt-inspected-"+y.dd,"true"),d(w,y.Yd))){w.id||(w.id=a());var x=W("YT"),z=x.get(w.id);z||(z=new x.Player(w.id));var B=h(z,y),A={},E;for(E in B)A.Pa=E,B.hasOwnProperty(A.Pa)&&z.addEventListener(A.Pa,function(J){return function(M){return B[J.Pa](M.data)}}(A)),A={Pa:A.Pa}}}
function g(w){G(function(){function y(){for(var z=x.getElementsByTagName("iframe"),B=z.length,A=0;A<B;A++)e(z[A],w)}var x=W("document");y();li(y)})}function h(w,y){var x,z;function B(){ea=Gi(function(){return{url:S,title:U,Ud:L,Yf:w.getCurrentTime(),playbackRate:na}},y.dd,w.getIframe());L=0;U=S="";na=1;return A}function A(O){switch(O){case p.PLAYING:L=Math.round(w.getDuration());S=w.getVideoUrl();if(w.getVideoData){var K=w.getVideoData();U=K?K.title:""}na=w.getPlaybackRate();y.Rf?ea.Nb("start"):ea.xc();
N=m(y.Rg,y.Qg,w.getDuration());return E(O);default:return A}}function E(){ja=w.getCurrentTime();ta=(new Date).getTime();ea.bh();Z();return J}function J(O){var K;switch(O){case p.ENDED:return R(O);case p.PAUSED:K="pause";case p.BUFFERING:var sa=w.getCurrentTime()-ja;K=1<Math.abs(((new Date).getTime()-ta)/1E3*na-sa)?"seek":K||"buffering";w.getCurrentTime()&&(y.Qf?ea.Nb(K):ea.xc());Q();return M;case p.UNSTARTED:return B(O);default:return J}}function M(O){switch(O){case p.ENDED:return R(O);case p.PLAYING:return E(O);
case p.UNSTARTED:return B(O);default:return M}}function R(){for(;z;){var O=x;Hi(z);O()}y.Pf&&ea.Nb("complete",1);return B(p.UNSTARTED)}function ca(){}function Q(){z&&(Hi(z),z=0,x=ca)}function Z(){if(N.length&&0!==na){var O=-1,K;do{K=N[0];if(K.qa>w.getDuration())return;O=(K.qa-w.getCurrentTime())/na;if(0>O&&(N.shift(),0===N.length))return}while(0>O);x=function(){z=0;x=ca;0<N.length&&N[0].qa===K.qa&&(N.shift(),ea.Nb("progress",K.ne,K.ve));Z()};z=Ii(x,1E3*O)}}var ea,N=[],L,S,U,na,ja,ta,ab=B(p.UNSTARTED);
z=0;x=ca;return{onStateChange:function(O){ab=ab(O)},onPlaybackRateChange:function(O){ja=w.getCurrentTime();ta=(new Date).getTime();ea.xc();na=O;Q();Z()}}}function k(w){for(var y=w.split(","),x=y.length,z=[],B=0;B<x;B++){var A=parseInt(y[B],10);isNaN(A)||100<A||0>A||z.push(A/100)}z.sort(function(E,J){return E-J});return z}function l(w){for(var y=w.split(","),x=y.length,z=[],B=0;B<x;B++){var A=parseInt(y[B],10);isNaN(A)||0>A||z.push(A)}z.sort(function(E,J){return E-J});return z}function m(w,y,x){var z=
w.map(function(E){return{qa:E,ve:E,ne:void 0}});if(!y.length)return z;var B=y.map(function(E){return{qa:E*x,ve:void 0,ne:E}});if(!z.length)return B;var A=z.concat(B);A.sort(function(E,J){return E.qa-J.qa});return A}function n(w){w.vtp_triggerStartOption?q(w):pe(function(){q(w)})}function q(w){var y=!!w.vtp_captureStart,x=!!w.vtp_captureComplete,z=!!w.vtp_capturePause,B=k(w.vtp_progressThresholdsPercent+""),A=l(w.vtp_progressThresholdsTimeInSeconds+""),E=!!w.vtp_fixMissingApi;if(y||x||z||B.length||
A.length){var J={Rf:y,Pf:x,Qf:z,Qg:B,Rg:A,Yd:E,dd:void 0===w.vtp_uniqueTriggerId?"":w.vtp_uniqueTriggerId},M=W("YT"),R=function(){g(J)};G(w.vtp_gtmOnSuccess);if(M)M.ready&&M.ready(R);else{var ca=W("onYouTubeIframeAPIReady");Ni("onYouTubeIframeAPIReady",function(){ca&&ca();R()});G(function(){for(var Q=W("document"),Z=Q.getElementsByTagName("script"),ea=Z.length,N=0;N<ea;N++){var L=Z[N].getAttribute("src");if(b(L,"iframe_api")||b(L,"player_api"))return}for(var S=Q.getElementsByTagName("iframe"),U=S.length,
na=0;na<U;na++)if(!v&&d(S[na],J.Yd)){T("https://www.youtube.com/iframe_api");v=!0;break}})}}else G(w.vtp_gtmOnSuccess)}var u=["www.youtube.com","www.youtube-nocookie.com"],p={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},r,v=!1;Y.__ytl=n;Y.__ytl.b="ytl";Y.__ytl.g=!0;Y.__ytl.priorityOverride=0}();


Y.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"];(function(b){Y.__gclidw=b;Y.__gclidw.b="gclidw";Y.__gclidw.g=!0;Y.__gclidw.priorityOverride=100})(function(b){G(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;if(b.vtp_enableCrossDomainFeature&&(!b.vtp_enableCrossDomain||!1!==b.vtp_acceptIncoming)&&(b.vtp_enableCrossDomain||
xh())){Lh(a,h,k,l,void 0);}var m={prefix:e,path:c,domain:d,Ja:void 0};Ih(m);Ph(["aw","dc"],m);Uh(g,e,c,d);var n=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var q=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(","),u=b.vtp_urlPosition,p=!!b.vtp_formDecoration;Nh(a,q,u,p,n);}})}();


Y.a.aev=["google"],function(){function a(p,r){var v=Kd(p,"gtm");if(v)return v[r]}function b(p,r,v,w){w||(w="element");var y=p+"."+r,x;if(n.hasOwnProperty(y))x=n[y];else{var z=a(p,w);if(z&&(x=v(z),n[y]=x,q.push(y),35<q.length)){var B=q.shift();delete n[B]}}return x}function c(p,r,v){var w=a(p,u[r]);return void 0!==w?w:v}function d(p,r){if(!p)return!1;var v=e(Ji());ua(r)||(r=String(r||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<r.length;y++)if(r[y]instanceof RegExp){if(r[y].test(p))return!1}else{var x=
r[y];if(0!=x.length){if(0<=e(p).indexOf(x))return!1;w.push(e(x))}}return!zj(p,w)}function e(p){m.test(p)||(p="http://"+p);return Pe(Qe(p),"HOST",!0)}function g(p,r,v){switch(p){case "SUBMIT_TEXT":return b(r,"FORM."+p,h,"formSubmitElement")||v;case "LENGTH":var w=b(r,"FORM."+p,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(r,"id",v);case "INTERACTED_FIELD_NAME":return l(r,"name",v);case "INTERACTED_FIELD_TYPE":return l(r,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(r,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(r,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(p){switch(p.tagName.toLowerCase()){case "input":return ic(p,"value");case "button":return jc(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var r=0,v=0;v<p.elements.length;v++)ei(p.elements[v])&&r++;return r}}function l(p,r,v){var w=a(p,"interactedFormField");return w&&ic(w,r)||v}var m=/^https?:\/\//i,n={},q=[],u={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Y.__aev=p;Y.__aev.b="aev";Y.__aev.g=!0;Y.__aev.priorityOverride=0})(function(p){var r=p.vtp_gtmEventId,v=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var y=a(r,"element");return y&&y.tagName||
v;case "TEXT":return b(r,w,jc)||v;case "URL":var x;a:{var z=String(a(r,"elementUrl")||v||""),B=Qe(z),A=String(p.vtp_component||"URL");switch(A){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,p.vtp_affiliatedDomains);break a;default:x=Pe(B,A,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===p.vtp_attribute)E=c(r,w,v);else{var J=p.vtp_attribute,M=a(r,"element");E=M&&ic(M,J)||v||""}return E;case "MD":var R=p.vtp_mdValue,ca=b(r,"MD",si);return R&&ca?vi(ca,
R)||v:ca||v;case "FORM":return g(String(p.vtp_component||"SUBMIT_TEXT"),r,v);default:return c(r,w,v)}})}();
Y.a.gas=["google"],function(){(function(a){Y.__gas=a;Y.__gas.b="gas";Y.__gas.g=!0;Y.__gas.priorityOverride=0})(function(a){var b=C(a),c=b;c[Gb.ma]=null;c[Gb.ff]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Y.a.hl=["google"],function(){function a(g){return g.target&&g.target.location&&g.target.location.href?g.target.location.href:Ji()}function b(g,h){gc(g,"hashchange",function(k){var l=a(k);h({source:"hashchange",state:null,url:Li(l),J:Ki(l)})})}function c(g,h){gc(g,"popstate",function(k){var l=a(k);h({source:"popstate",state:k.state,url:Li(l),J:Ki(l)})})}function d(g,h,k){var l=h.history,m=l[g];if(qa(m))try{l[g]=function(n,q,u){m.apply(l,[].slice.call(arguments,0));k({source:g,state:n,url:Li(Ji()),
J:Ki(Ji())})}}catch(n){}}function e(){var g={source:null,state:W("history").state||null,url:Li(Ji()),J:Ki(Ji())};return function(h){var k=g,l={};l[k.source]=!0;l[h.source]=!0;if(!l.popstate||!l.hashchange||k.J!=h.J){var m={event:"gtm.historyChange","gtm.historyChangeSource":h.source,"gtm.oldUrlFragment":g.J,"gtm.newUrlFragment":h.J,"gtm.oldHistoryState":g.state,"gtm.newHistoryState":h.state};m["gtm.oldUrl"]=g.url,m["gtm.newUrl"]=h.url;
g=h;Mi(m)}}}(function(g){Y.__hl=g;Y.__hl.b="hl";Y.__hl.g=!0;Y.__hl.priorityOverride=0})(function(g){var h=W("self");if(!Qi("hl")){var k=e();b(h,k);c(h,k);d("pushState",h,k);d("replaceState",h,k);Ri("hl")}G(g.vtp_gtmOnSuccess)})}();
Y.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=W("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(k){ye();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:Yh()};k.vtp_rdp&&(l.google_restricted_data_processing=!0);var m=function(v){return function(w,y,x){var z="DATA_LAYER"==v?V(x):k[y];z&&(l[w]=z)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id",
"vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}}));var q=function(v,w){(l.google_additional_conversion_params=l.google_additional_conversion_params||
{})[v]=w},u=function(v){return function(w,y,x,z){var B="DATA_LAYER"==v?V(x):k[y];z(B)&&q(w,B)}},p=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js";k.vtp_enableNewCustomerReporting&&(n=u(k.vtp_newCustomerReportingDataSource),n("vdnc","vtp_awNewCustomer","new_customer",function(v){return void 0!=v&&""!==v}),n("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(v){return void 0!=
v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var r=!0;r&&b.push(l);a||(a=!0,T(p,g(),e(p)))};Y.__awct=h;Y.__awct.b="awct";Y.__awct.g=!0;Y.__awct.priorityOverride=0}();
Y.a.bzi=["nonGoogleScripts"],function(){(function(a){Y.__bzi=a;Y.__bzi.b="bzi";Y.__bzi.g=!0;Y.__bzi.priorityOverride=0})(function(a){try{D._bizo_data_partner_id=a.vtp_id,D._bizo_data_partner_title=a.vtp_title,D._bizo_data_partner_domain=a.vtp_domain,D._bizo_data_partner_company=a.vtp_company,D._bizo_data_partner_location=a.vtp_location,D._bizo_data_partner_employee_range=a.vtp_employeeRange,D._bizo_data_partner_sics=a.vtp_standardIndustrialClassification,D._bizo_data_partner_email=a.vtp_email,T(P("https://sjs",
"http://js",".bizographics.com/insight.min.js"),a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)}catch(b){G(a.vtp_gtmOnFailure)}})}();Y.a.remm=["google"],function(){(function(a){Y.__remm=a;Y.__remm.b="remm";Y.__remm.g=!0;Y.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[g].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();

Y.a.baut=["nonGoogleScripts"],function(){var a=!1,b=function(c){var d=c.vtp_uetqName||"uetq",e=W(d,[],!0);if("VARIABLE_REVENUE"==c.vtp_eventType)e.push({gv:c.vtp_goalValue}),c.vtp_gtmOnSuccess();else if("CUSTOM"==c.vtp_eventType){var g={},h=function(k,l){void 0!==c[k]&&(g[l]=c[k])};h("vtp_goalValue","gv");h("vtp_eventCategory","ec");h("vtp_eventAction","ea");h("vtp_eventLabel","el");h("vtp_eventValue","ev");e.push(g);c.vtp_gtmOnSuccess()}else if(a)c.vtp_gtmOnSuccess();else try{T("//bat.bing.com/bat.js",
function(){var k=vj(W("UET"),{ti:c.vtp_tagId,q:e});D[d]=k;k.push("pageLoad");c.vtp_gtmOnSuccess()},c.vtp_gtmOnFailure),a=!0}catch(k){G(c.vtp_gtmOnFailure)}};Y.__baut=b;Y.__baut.b="baut";Y.__baut.g=!0;Y.__baut.priorityOverride=0}();Y.a.smm=["google"],function(){(function(a){Y.__smm=a;Y.__smm.b="smm";Y.__smm.g=!0;Y.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Aj(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Y.a.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.b="paused";Y.__paused.g=!0;Y.__paused.priorityOverride=0})(function(a){G(a.vtp_gtmOnFailure)})}();
Y.a.zone=[],function(){function a(q){for(var u=q.vtp_boundaries||[],p=0;p<u.length;p++)if(!u[p])return!1;return!0}function b(q){var u=Nc.m,p=u+":"+q.vtp_gtmTagId,r=V("gtm.uniqueEventId")||0,v=ie(function(){return new h}),w=a(q),y=q.vtp_enableTypeRestrictions?q.vtp_whitelistedTypes.map(function(J){return J.typeId}):null;y=y&&Ka(y,g);if(v.registerZone(p,r,w,y))for(var x=q.vtp_childContainers.map(function(J){return J.publicId}),z=0;z<x.length;z++){var B=String(x[z]);if(v.registerChild(B,u,p)){var A=
0!==B.indexOf("GTM-");if(A){var E=function(J,M){Mi(arguments)};E("js",new Date);m?(E("config",B),l||Si(B,A)):Cf({},B)}else Si(B,A)}}}var c={active:!1,isWhitelisted:function(){return!1}},d={active:!0,isWhitelisted:function(){return!0}},e={zone:!0,cn:!0,css:!0,ew:!0,eq:!0,ge:!0,gt:!0,lc:!0,le:!0,lt:!0,re:!0,sw:!0,um:!0},g={cl:["ecl"],ecl:["cl"],ehl:["hl"],hl:["ehl"]},h=function(){this.Ib={};this.hd={}};h.prototype.checkState=function(q,u){var p=this.Ib[q];if(!p)return d;var r=this.checkState(p.me,u);
if(!r.active)return c;for(var v=[],w=0;w<p.gd.length;w++){var y=this.hd[p.gd[w]];y.ib(u)&&v.push(y)}return v.length?{active:!0,isWhitelisted:function(x,z){z=z||[];if(!r.isWhitelisted(x,z))return!1;for(var B=0;B<v.length;++B)if(v[B].isWhitelisted(x,z))return!0;return!1}}:c};h.prototype.unregisterChild=function(q){delete this.Ib[q]};h.prototype.registerZone=function(q,u,p,r){var v=this.hd[q];if(v)return v.Yg(u,p),!1;if(!p)return!1;this.hd[q]=new k(u,r);return!0};h.prototype.registerChild=function(q,
u,p){var r=this.Ib[q];if(!r&&Oc[q]||r&&r.me!==u)return!1;if(r)return r.gd.push(p),!1;this.Ib[q]={me:u,gd:[p]};return!0};var k=function(q,u){this.fa=[{eventId:q,ib:!0}];this.pb=null;if(u){this.pb={};for(var p=0;p<u.length;p++)this.pb[u[p]]=!0}};k.prototype.Yg=function(q,u){var p=this.fa[this.fa.length-1];q<=p.eventId||p.ib!=u&&this.fa.push({eventId:q,ib:u})};k.prototype.ib=function(q){if(!this.fa||0==this.fa.length)return!1;for(var u=this.fa.length-1;0<=u;u--)if(this.fa[u].eventId<=q)return this.fa[u].ib;
return!1};k.prototype.isWhitelisted=function(q,u){u=u||[];if(!this.pb||e[q]||this.pb[q])return!0;for(var p=0;p<u.length;++p)if(this.pb[u[p]])return!0;return!1};var l=!1;var m=!0;var n=function(q){b(q);G(q.vtp_gtmOnSuccess)};Y.__zone=n;Y.__zone.b="zone";Y.__zone.g=!0;Y.__zone.priorityOverride=0}();
Y.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=F.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,bc(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];k.firstChild;)q.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,q,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(u){G(h)}}}var b=function(d,e,g){pe(function(){var h,k=Oc;k.postscribe||(k.postscribe=Yb);h=k.postscribe;var l={done:e},m=F.createElement("div");m.style.display="none";m.style.visibility="hidden";F.body.appendChild(m);try{h(m,d,l)}catch(n){G(g)}})};var c=function(d){if(F.body){var e=
d.vtp_gtmOnFailure,g=Ui(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.Hc,k=g.s;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(F.body,kc(h),k,e)()}else Ii(function(){c(d)},
200)};Y.__html=c;Y.__html.b="html";Y.__html.g=!0;Y.__html.priorityOverride=0}();







Y.a.evl=["google"],function(){function a(g,h){this.element=g;this.uid=h}function b(){var g=Number(V("gtm.start"))||0;return(new Date).getTime()-g}function c(g,h,k,l){function m(){if(!yi(g.target)){h.has(e.Cb)||h.set(e.Cb,""+b());h.has(e.uc)||h.set(e.uc,""+b());var q=0;h.has(e.Fb)&&(q=Number(h.get(e.Fb)));q+=100;h.set(e.Fb,""+q);if(q>=k){var u=Hg(g.target,"gtm.elementVisibility",[h.uid]),p=xi(g.target);u["gtm.visibleRatio"]=Math.round(1E3*p)/10;u["gtm.visibleTime"]=k;u["gtm.visibleFirstTime"]=Number(h.get(e.uc));
u["gtm.visibleLastTime"]=Number(h.get(e.Cb));Mi(u);l()}}}if(!h.has(e.$a)&&(0==k&&m(),!h.has(e.Ca))){var n=W("self").setInterval(m,100);h.set(e.$a,n)}}function d(g){g.has(e.$a)&&(W("self").clearInterval(Number(g.get(e.$a))),g.remove(e.$a))}var e={$a:"polling-id-",uc:"first-on-screen-",Cb:"recent-on-screen-",Fb:"total-visible-time-",Ca:"has-fired-"};a.prototype.has=function(g){return!!this.element.getAttribute("data-gtm-vis-"+g+this.uid)};a.prototype.get=function(g){return this.element.getAttribute("data-gtm-vis-"+
g+this.uid)};a.prototype.set=function(g,h){this.element.setAttribute("data-gtm-vis-"+g+this.uid,h)};a.prototype.remove=function(g){this.element.removeAttribute("data-gtm-vis-"+g+this.uid)};(function(g){Y.__evl=g;Y.__evl.b="evl";Y.__evl.g=!0;Y.__evl.priorityOverride=0})(function(g){function h(){var y=!1,x=null;if("CSS"===l){try{x=oc(m)}catch(J){}y=!!x&&v.length!=x.length}else if("ID"===l){var z=F.getElementById(m);z&&(x=[z],y=1!=v.length||v[0]!==z)}x||(x=[],y=0<v.length);if(y){for(var B=0;B<v.length;B++){var A=
new a(v[B],p);d(A)}v=[];for(var E=0;E<x.length;E++)v.push(x[E]);0<=w&&Fi(w);0<v.length&&(w=Ei(k,v,[u]))}}function k(y){var x=new a(y.target,p);y.intersectionRatio>=u?x.has(e.Ca)||c(y,x,q,"ONCE"===r?function(){for(var z=0;z<v.length;z++){var B=new a(v[z],p);B.set(e.Ca,"1");d(B)}Fi(w);if(n&&ki)for(var A=0;A<ki.length;A++)ki[A]===h&&ki.splice(A,1)}:function(){x.set(e.Ca,"1");d(x)}):(d(x),"MANY_PER_ELEMENT"===r&&x.has(e.Ca)&&(x.remove(e.Ca),x.remove(e.Fb)),x.remove(e.Cb))}var l=g.vtp_selectorType,m;"ID"===
l?m=String(g.vtp_elementId):"CSS"===l&&(m=String(g.vtp_elementSelector));var n=!!g.vtp_useDomChangeListener,q=g.vtp_useOnScreenDuration&&Number(g.vtp_onScreenDuration)||0,u=(Number(g.vtp_onScreenRatio)||50)/100,p=g.vtp_uniqueTriggerId,r=g.vtp_firingFrequency,v=[],w=-1;h();n&&li(h);G(g.vtp_gtmOnSuccess)})}();

var $l={};$l.macro=function(a){if(Eg.wc.hasOwnProperty(a))return Eg.wc[a]},$l.onHtmlSuccess=Eg.Td(!0),$l.onHtmlFailure=Eg.Td(!1);$l.dataLayer=Dd;$l.callback=function(a){Xc.hasOwnProperty(a)&&qa(Xc[a])&&Xc[a]();delete Xc[a]};function am(){Oc[Nc.m]=$l;Ia(Yc,Y.a);xb=xb||Eg;yb=ge}
function bm(){zh.gtm_3pds=!0;Oc=D.google_tag_manager=D.google_tag_manager||{};if(Oc[Nc.m]){var a=Oc.zones;a&&a.unregisterChild(Nc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)pb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)sb.push(e[g]);for(var h=b.predicates||[],k=0;k<
h.length;k++)rb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},u=0;u<n.length;u++)q[n[u][0]]=Array.prototype.slice.call(n[u],1);qb.push(q)}vb=Y;wb=tj;am();Dg();ke=!1;le=0;if("interactive"==F.readyState&&!F.createEventObject||"complete"==F.readyState)ne();else{gc(F,"DOMContentLoaded",ne);gc(F,"readystatechange",ne);if(F.createEventObject&&F.documentElement.doScroll){var p=!0;try{p=!D.frameElement}catch(y){}p&&oe()}gc(D,"load",ne)}qg=!1;"complete"===F.readyState?sg():gc(D,
"load",sg);a:{if(!sd)break a;D.setInterval(td,864E5);}
Uc=(new Date).getTime();
}}bm();

})()
