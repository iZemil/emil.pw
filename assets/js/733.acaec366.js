"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[733],{6559:(t,e,n)=>{n.d(e,{Z:()=>h});var r={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};const a=function(t,e,n){var a,o=r[t];return a="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a};function o(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var i={date:o({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:o({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:o({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var u={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function s(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function l(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,u=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(s)?c(s,(function(t){return t.test(u)})):d(s,(function(t){return t.test(u)}));i=t.valueCallback?t.valueCallback(l):l,i=n.valueCallback?n.valueCallback(i):i;var f=e.slice(u.length);return{value:i,rest:f}}}function d(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function c(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var f;const h={code:"en-US",formatDistance:a,formatLong:i,formatRelative:function(t,e,n,r){return u[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:s({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:s({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:s({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:s({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:s({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(f={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(f.matchPattern);if(!n)return null;var r=n[0],a=t.match(f.parsePattern);if(!a)return null;var o=f.valueCallback?f.valueCallback(a[0]):a[0];o=e.valueCallback?e.valueCallback(o):o;var i=t.slice(r.length);return{value:o,rest:i}}),era:l({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:l({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:l({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:l({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:l({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}}},4314:(t,e,n)=>{n.d(e,{j:()=>a});var r={};function a(){return r}},4262:(t,e,n)=>{function r(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}n.d(e,{Z:()=>r})},3882:(t,e,n)=>{function r(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}n.d(e,{Z:()=>r})},9474:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(9013),a=n(3882);function o(t,e){(0,a.Z)(2,arguments);var n=(0,r.Z)(t),o=(0,r.Z)(e),i=n.getTime()-o.getTime();return i<0?-1:i>0?1:i}},1397:(t,e,n)=>{n.d(e,{Z:()=>u});var r=n(9013),a=n(3882);function o(t,e){(0,a.Z)(2,arguments);var n=(0,r.Z)(t),o=(0,r.Z)(e);return n.getFullYear()-o.getFullYear()}var i=n(9474);function u(t,e){(0,a.Z)(2,arguments);var n=(0,r.Z)(t),u=(0,r.Z)(e),s=(0,i.Z)(n,u),l=Math.abs(o(n,u));n.setFullYear(1584),u.setFullYear(1584);var d=(0,i.Z)(n,u)===-s,c=s*(l-Number(d));return 0===c?0:c}},1510:(t,e,n)=>{n.d(e,{Z:()=>J});var r=n(3882);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function o(t){return(0,r.Z)(1,arguments),t instanceof Date||"object"===a(t)&&"[object Date]"===Object.prototype.toString.call(t)}var i=n(9013);function u(t){if((0,r.Z)(1,arguments),!o(t)&&"number"!=typeof t)return!1;var e=(0,i.Z)(t);return!isNaN(Number(e))}function s(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function l(t,e){(0,r.Z)(2,arguments);var n=(0,i.Z)(t).getTime(),a=s(e);return new Date(n+a)}function d(t,e){(0,r.Z)(2,arguments);var n=s(e);return l(t,-n)}var c=864e5;function f(t){(0,r.Z)(1,arguments);var e=1,n=(0,i.Z)(t),a=n.getUTCDay(),o=(a<e?7:0)+a-e;return n.setUTCDate(n.getUTCDate()-o),n.setUTCHours(0,0,0,0),n}function h(t){(0,r.Z)(1,arguments);var e=(0,i.Z)(t),n=e.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var o=f(a),u=new Date(0);u.setUTCFullYear(n,0,4),u.setUTCHours(0,0,0,0);var s=f(u);return e.getTime()>=o.getTime()?n+1:e.getTime()>=s.getTime()?n:n-1}function m(t){(0,r.Z)(1,arguments);var e=h(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var a=f(n);return a}var g=6048e5;var v=n(4314);function w(t,e){var n,a,o,u,l,d,c,f;(0,r.Z)(1,arguments);var h=(0,v.j)(),m=s(null!==(n=null!==(a=null!==(o=null!==(u=null==e?void 0:e.weekStartsOn)&&void 0!==u?u:null==e||null===(l=e.locale)||void 0===l||null===(d=l.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==o?o:h.weekStartsOn)&&void 0!==a?a:null===(c=h.locale)||void 0===c||null===(f=c.options)||void 0===f?void 0:f.weekStartsOn)&&void 0!==n?n:0);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=(0,i.Z)(t),w=g.getUTCDay(),b=(w<m?7:0)+w-m;return g.setUTCDate(g.getUTCDate()-b),g.setUTCHours(0,0,0,0),g}function b(t,e){var n,a,o,u,l,d,c,f;(0,r.Z)(1,arguments);var h=(0,i.Z)(t),m=h.getUTCFullYear(),g=(0,v.j)(),b=s(null!==(n=null!==(a=null!==(o=null!==(u=null==e?void 0:e.firstWeekContainsDate)&&void 0!==u?u:null==e||null===(l=e.locale)||void 0===l||null===(d=l.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==o?o:g.firstWeekContainsDate)&&void 0!==a?a:null===(c=g.locale)||void 0===c||null===(f=c.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==n?n:1);if(!(b>=1&&b<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=new Date(0);y.setUTCFullYear(m+1,0,b),y.setUTCHours(0,0,0,0);var p=w(y,e),T=new Date(0);T.setUTCFullYear(m,0,b),T.setUTCHours(0,0,0,0);var M=w(T,e);return h.getTime()>=p.getTime()?m+1:h.getTime()>=M.getTime()?m:m-1}function y(t,e){var n,a,o,i,u,l,d,c;(0,r.Z)(1,arguments);var f=(0,v.j)(),h=s(null!==(n=null!==(a=null!==(o=null!==(i=null==e?void 0:e.firstWeekContainsDate)&&void 0!==i?i:null==e||null===(u=e.locale)||void 0===u||null===(l=u.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==o?o:f.firstWeekContainsDate)&&void 0!==a?a:null===(d=f.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1),m=b(t,e),g=new Date(0);g.setUTCFullYear(m,0,h),g.setUTCHours(0,0,0,0);var y=w(g,e);return y}var p=6048e5;function T(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const M={y:function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return T("yy"===e?r%100:r,e.length)},M:function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):T(n+1,2)},d:function(t,e){return T(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:function(t,e){return T(t.getUTCHours()%12||12,e.length)},H:function(t,e){return T(t.getUTCHours(),e.length)},m:function(t,e){return T(t.getUTCMinutes(),e.length)},s:function(t,e){return T(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,r=t.getUTCMilliseconds();return T(Math.floor(r*Math.pow(10,n-3)),e.length)}};var D="midnight",C="noon",Z="morning",S="afternoon",k="evening",x="night";function U(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+T(o,2)}function P(t,e){return t%60==0?(t>0?"-":"+")+T(Math.abs(t)/60,2):Y(t,e)}function Y(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+T(Math.floor(a/60),2)+n+T(a%60,2)}const W={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return M.y(t,e)},Y:function(t,e,n,r){var a=b(t,r),o=a>0?a:1-a;return"YY"===e?T(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):T(o,e.length)},R:function(t,e){return T(h(t),e.length)},u:function(t,e){return T(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return T(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return T(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return M.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return T(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){var o=function(t,e){(0,r.Z)(1,arguments);var n=(0,i.Z)(t),a=w(n,e).getTime()-y(n,e).getTime();return Math.round(a/p)+1}(t,a);return"wo"===e?n.ordinalNumber(o,{unit:"week"}):T(o,e.length)},I:function(t,e,n){var a=function(t){(0,r.Z)(1,arguments);var e=(0,i.Z)(t),n=f(e).getTime()-m(e).getTime();return Math.round(n/g)+1}(t);return"Io"===e?n.ordinalNumber(a,{unit:"week"}):T(a,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):M.d(t,e)},D:function(t,e,n){var a=function(t){(0,r.Z)(1,arguments);var e=(0,i.Z)(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var a=e.getTime(),o=n-a;return Math.floor(o/c)+1}(t);return"Do"===e?n.ordinalNumber(a,{unit:"dayOfYear"}):T(a,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return T(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return T(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return T(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?C:0===a?D:a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?k:a>=12?S:a>=4?Z:x,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return M.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):M.H(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):T(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):T(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):M.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):M.s(t,e)},S:function(t,e){return M.S(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return P(a);case"XXXX":case"XX":return Y(a);default:return Y(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return P(a);case"xxxx":case"xx":return Y(a);default:return Y(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+U(a,":");default:return"GMT"+Y(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+U(a,":");default:return"GMT"+Y(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return T(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return T((r._originalDate||t).getTime(),e.length)}};var N=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},E=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}};const O={p:E,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return N(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",N(a,e)).replace("{{time}}",E(o,e))}};var F=n(4262),q=["D","DD"],H=["YY","YYYY"];function j(t){return-1!==q.indexOf(t)}function X(t){return-1!==H.indexOf(t)}function z(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var L=n(6559),A=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Q=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,G=/^'([^]*?)'?$/,B=/''/g,R=/[a-zA-Z]/;function J(t,e,n){var a,o,l,c,f,h,m,g,w,b,y,p,T,M,D,C,Z,S;(0,r.Z)(2,arguments);var k=String(e),x=(0,v.j)(),U=null!==(a=null!==(o=null==n?void 0:n.locale)&&void 0!==o?o:x.locale)&&void 0!==a?a:L.Z,P=s(null!==(l=null!==(c=null!==(f=null!==(h=null==n?void 0:n.firstWeekContainsDate)&&void 0!==h?h:null==n||null===(m=n.locale)||void 0===m||null===(g=m.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==f?f:x.firstWeekContainsDate)&&void 0!==c?c:null===(w=x.locale)||void 0===w||null===(b=w.options)||void 0===b?void 0:b.firstWeekContainsDate)&&void 0!==l?l:1);if(!(P>=1&&P<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var Y=s(null!==(y=null!==(p=null!==(T=null!==(M=null==n?void 0:n.weekStartsOn)&&void 0!==M?M:null==n||null===(D=n.locale)||void 0===D||null===(C=D.options)||void 0===C?void 0:C.weekStartsOn)&&void 0!==T?T:x.weekStartsOn)&&void 0!==p?p:null===(Z=x.locale)||void 0===Z||null===(S=Z.options)||void 0===S?void 0:S.weekStartsOn)&&void 0!==y?y:0);if(!(Y>=0&&Y<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!U.localize)throw new RangeError("locale must contain localize property");if(!U.formatLong)throw new RangeError("locale must contain formatLong property");var N=(0,i.Z)(t);if(!u(N))throw new RangeError("Invalid time value");var E=(0,F.Z)(N),q=d(N,E),H={firstWeekContainsDate:P,weekStartsOn:Y,locale:U,_originalDate:N},G=k.match(Q).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,O[e])(t,U.formatLong):t})).join("").match(A).map((function(r){if("''"===r)return"'";var a=r[0];if("'"===a)return I(r);var o=W[a];if(o)return null!=n&&n.useAdditionalWeekYearTokens||!X(r)||z(r,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!j(r)||z(r,e,String(t)),o(q,r,U.localize,H);if(a.match(R))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return r})).join("");return G}function I(t){var e=t.match(G);return e?e[1].replace(B,"'"):t}},6878:(t,e,n)=>{n.d(e,{Z:()=>M});var r=n(4314),a=n(9474),o=n(9013),i=n(3882);function u(t,e){(0,i.Z)(2,arguments);var n=(0,o.Z)(t),r=(0,o.Z)(e),a=n.getFullYear()-r.getFullYear(),u=n.getMonth()-r.getMonth();return 12*a+u}function s(t){(0,i.Z)(1,arguments);var e=(0,o.Z)(t);return e.setHours(23,59,59,999),e}function l(t){(0,i.Z)(1,arguments);var e=(0,o.Z)(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}function d(t){(0,i.Z)(1,arguments);var e=(0,o.Z)(t);return s(e).getTime()===l(e).getTime()}function c(t,e){(0,i.Z)(2,arguments);var n,r=(0,o.Z)(t),s=(0,o.Z)(e),l=(0,a.Z)(r,s),c=Math.abs(u(r,s));if(c<1)n=0;else{1===r.getMonth()&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-l*c);var f=(0,a.Z)(r,s)===-l;d((0,o.Z)(t))&&1===c&&1===(0,a.Z)(t,s)&&(f=!1),n=l*(c-Number(f))}return 0===n?0:n}function f(t,e){return(0,i.Z)(2,arguments),(0,o.Z)(t).getTime()-(0,o.Z)(e).getTime()}var h={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}};function m(t){return t?h[t]:h.trunc}function g(t,e,n){(0,i.Z)(2,arguments);var r=f(t,e)/1e3;return m(null==n?void 0:n.roundingMethod)(r)}var v=n(6559);function w(t,e){if(null==t)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}function b(t){return w({},t)}var y=n(4262),p=1440,T=43200;function M(t,e,n){var u,s;(0,i.Z)(2,arguments);var l=(0,r.j)(),d=null!==(u=null!==(s=null==n?void 0:n.locale)&&void 0!==s?s:l.locale)&&void 0!==u?u:v.Z;if(!d.formatDistance)throw new RangeError("locale must contain formatDistance property");var f=(0,a.Z)(t,e);if(isNaN(f))throw new RangeError("Invalid time value");var h,m,M=w(b(n),{addSuffix:Boolean(null==n?void 0:n.addSuffix),comparison:f});f>0?(h=(0,o.Z)(e),m=(0,o.Z)(t)):(h=(0,o.Z)(t),m=(0,o.Z)(e));var D,C=g(m,h),Z=((0,y.Z)(m)-(0,y.Z)(h))/1e3,S=Math.round((C-Z)/60);if(S<2)return null!=n&&n.includeSeconds?C<5?d.formatDistance("lessThanXSeconds",5,M):C<10?d.formatDistance("lessThanXSeconds",10,M):C<20?d.formatDistance("lessThanXSeconds",20,M):C<40?d.formatDistance("halfAMinute",0,M):C<60?d.formatDistance("lessThanXMinutes",1,M):d.formatDistance("xMinutes",1,M):0===S?d.formatDistance("lessThanXMinutes",1,M):d.formatDistance("xMinutes",S,M);if(S<45)return d.formatDistance("xMinutes",S,M);if(S<90)return d.formatDistance("aboutXHours",1,M);if(S<p){var k=Math.round(S/60);return d.formatDistance("aboutXHours",k,M)}if(S<2520)return d.formatDistance("xDays",1,M);if(S<T){var x=Math.round(S/p);return d.formatDistance("xDays",x,M)}if(S<86400)return D=Math.round(S/T),d.formatDistance("aboutXMonths",D,M);if((D=c(m,h))<12){var U=Math.round(S/T);return d.formatDistance("xMonths",U,M)}var P=D%12,Y=Math.floor(D/12);return P<3?d.formatDistance("aboutXYears",Y,M):P<9?d.formatDistance("overXYears",Y,M):d.formatDistance("almostXYears",Y+1,M)}},9013:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(3882);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function o(t){(0,r.Z)(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===a(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}}}]);