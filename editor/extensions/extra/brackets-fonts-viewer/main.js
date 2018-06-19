define("text",["module"],function(e){"use strict";var t,n,i,r,a,o=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],s=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,l=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,c="undefined"!=typeof location&&location.href,f=c&&location.protocol&&location.protocol.replace(/\:/,""),d=c&&location.hostname,p=c&&(location.port||void 0),u={},h=e.config&&e.config()||{};return t={version:"2.0.10",strip:function(e){if(e){e=e.replace(s,"");var t=e.match(l);t&&(e=t[1])}else e="";return e},jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},createXhr:h.createXhr||function(){var e,t,n;if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;if("undefined"!=typeof ActiveXObject)for(t=0;3>t;t+=1){n=o[t];try{e=new ActiveXObject(n)}catch(i){}if(e){o=[n];break}}return e},parseName:function(e){var t,n,i,r=!1,a=e.indexOf("."),o=0===e.indexOf("./")||0===e.indexOf("../");return-1!==a&&(!o||a>1)?(t=e.substring(0,a),n=e.substring(a+1,e.length)):t=e,i=n||t,a=i.indexOf("!"),-1!==a&&(r="strip"===i.substring(a+1),i=i.substring(0,a),n?n=i:t=i),{moduleName:t,ext:n,strip:r}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(e,n,i,r){var a,o,s,l=t.xdRegExp.exec(e);return l?(a=l[2],o=l[3],o=o.split(":"),s=o[1],o=o[0],!(a&&a!==n||o&&o.toLowerCase()!==i.toLowerCase()||(s||o)&&s!==r)):!0},finishLoad:function(e,n,i,r){i=n?t.strip(i):i,h.isBuild&&(u[e]=i),r(i)},load:function(e,n,i,r){if(r.isBuild&&!r.inlineText)return void i();h.isBuild=r.isBuild;var a=t.parseName(e),o=a.moduleName+(a.ext?"."+a.ext:""),s=n.toUrl(o),l=h.useXhr||t.useXhr;return 0===s.indexOf("empty:")?void i():void(!c||l(s,f,d,p)?t.get(s,function(n){t.finishLoad(e,a.strip,n,i)},function(e){i.error&&i.error(e)}):n([o],function(e){t.finishLoad(a.moduleName+"."+a.ext,a.strip,e,i)}))},write:function(e,n,i,r){if(u.hasOwnProperty(n)){var a=t.jsEscape(u[n]);i.asModule(e+"!"+n,"define(function () { return '"+a+"';});\n")}},writeFile:function(e,n,i,r,a){var o=t.parseName(n),s=o.ext?"."+o.ext:"",l=o.moduleName+s,c=i.toUrl(o.moduleName+s)+".js";t.load(l,i,function(n){var i=function(e){return r(c,e)};i.asModule=function(e,t){return r.asModule(e,c,t)},t.write(e,l,i,a)},a)}},"node"===h.env||!h.env&&"undefined"!=typeof process&&process.versions&&process.versions.node&&!process.versions["node-webkit"]?(n=require.nodeRequire("fs"),t.get=function(e,t,i){try{var r=n.readFileSync(e,"utf8");0===r.indexOf("\ufeff")&&(r=r.substring(1)),t(r)}catch(a){i(a)}}):"xhr"===h.env||!h.env&&t.createXhr()?t.get=function(e,n,i,r){var a,o=t.createXhr();if(o.open("GET",e,!0),r)for(a in r)r.hasOwnProperty(a)&&o.setRequestHeader(a.toLowerCase(),r[a]);h.onXhr&&h.onXhr(o,e),o.onreadystatechange=function(t){var r,a;4===o.readyState&&(r=o.status,r>399&&600>r?(a=new Error(e+" HTTP status: "+r),a.xhr=o,i(a)):n(o.responseText),h.onXhrComplete&&h.onXhrComplete(o,e))},o.send(null)}:"rhino"===h.env||!h.env&&"undefined"!=typeof Packages&&"undefined"!=typeof java?t.get=function(e,t){var n,i,r="utf-8",a=new java.io.File(e),o=java.lang.System.getProperty("line.separator"),s=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(a),r)),l="";try{for(n=new java.lang.StringBuffer,i=s.readLine(),i&&i.length()&&65279===i.charAt(0)&&(i=i.substring(1)),null!==i&&n.append(i);null!==(i=s.readLine());)n.append(o),n.append(i);l=String(n.toString())}finally{s.close()}t(l)}:("xpconnect"===h.env||!h.env&&"undefined"!=typeof Components&&Components.classes&&Components.interfaces)&&(i=Components.classes,r=Components.interfaces,Components.utils["import"]("resource://gre/modules/FileUtils.jsm"),a="@mozilla.org/windows-registry-key;1"in i,t.get=function(e,t){var n,o,s,l={};a&&(e=e.replace(/\//g,"\\")),s=new FileUtils.File(e);try{n=i["@mozilla.org/network/file-input-stream;1"].createInstance(r.nsIFileInputStream),n.init(s,1,0,!1),o=i["@mozilla.org/intl/converter-input-stream;1"].createInstance(r.nsIConverterInputStream),o.init(n,"utf-8",n.available(),r.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),o.readString(n.available(),l),o.close(),n.close(),t(l.value)}catch(c){throw new Error((s&&s.path||"")+": "+c)}}),t}),define("text!htmlContent/font-holder.html",[],function(){return'<div class="font-viewer viewer-wrapper">\n\n    <style class="font-face" data-src="{{{url}}}?ver={{now}}">\n        @font-face {\n            font-family: {{ fontName }};\n            src: url("{{{url}}}?ver={{now}}");\n        }\n\n        .font-display-{{ fontName }} {\n            font-family: {{ fontName }};\n        }\n    </style>\n\n    <div class="viewer-header">\n        <span class="file-type">{{ Strings.FONT_FILE }}</span>\n        <span class="font-data file-details">&nbsp;</span>\n    </div>\n\n    <div class="font-display font-display-{{ fontName }} specimen-wrapper">\n        ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />\n        abcdefghijklmnopqrstuvwxyz<br />\n        0123456789<br />\n        &amp;%$@#?+-*{}()[]&lt;&gt;\n    </div>\n\n    <div class="code-wrapper code-css">\n        <h2 class="code-title">CSS</h2>\n        <pre>\n@font-face {\n  font-family: "{{fontName}}";\n  src: url("{{{relPath}}}");\n}\n\np {\n  font-family: "{{fontName}}";\n}\n</pre>\n    </div>\n\n    <div class="font-samples">\n        <div class="sample">\n            <h3>{{ Strings.FONT_TYPE_BOLD }}</h3>\n            <p class="bold specimen-wrapper font-display-{{ fontName }}">\n                The quick brown fox jumped over the lazy dog.\n            </p>\n            <div class="code-wrapper code-html">\n                <h2 class="code-title">HTML</h2>\n                <pre>&lt;strong&gt;&lt;/strong&gt;</pre>\n            </div>\n\n            <div class="code-wrapper code-css">\n                <h2 class="code-title">CSS</h2>\n                <pre>p {\n  font-weight: bold;\n}</pre>\n            </div>\n        </div>\n\n        <div class="sample">\n            <h3>{{ Strings.FONT_TYPE_ITALIC }}</h3>\n            <p class="italic font-display-{{ fontName }} specimen-wrapper">\n                The quick brown fox jumped over the lazy dog.\n            </p>\n            <div class="code-wrapper code-html">\n                <h2 class="code-title">HTML</h2>\n                <pre>&lt;em&gt;&lt;/em&gt;</pre>\n            </div>\n\n            <div class="code-wrapper code-css">\n                <h2 class="code-title">CSS</h2>\n                <pre>p {\n  font-style: italic;\n}</pre>\n            </div>\n        </div>\n    </div>\n</div>\n'}),define("main",["require","exports","module","text!htmlContent/font-holder.html"],function(e,t,n){"use strict";function i(e){var t=w.basename(e.name).replace(w.extname(e.name),"");return t=t.replace(/\s+/g,"-").trim()}function r(e){return g.getUrl(e)}function a(e,t){this.file=e,this.$container=t,this.relPath=m.makeProjectRelativeIfPossible(this.file.fullPath),this._buildPage(this.file,this.$container,!1),this.fileChangeHandler=b.bind(this._onFilenameChange,this),u.on("fileNameChange",this.fileChangeHandler),P[e.fullPath]=this}function o(e,t){var n=t.getViewForPath(e.fullPath);return n?t.showView(n):(n=new a(e,t.$content),t.addView(n,!0)),(new $.Deferred).resolve(e).promise()}function s(e,t,n,i){if(t&&!t.isDirectory){var r=P[t.fullPath];r&&r.refresh()}}var l=brackets.getModule("utils/AppInit"),c=brackets.getModule("utils/ExtensionUtils"),f=brackets.getModule("thirdparty/mustache/mustache"),d=brackets.getModule("utils/StringUtils"),p=brackets.getModule("strings"),u=brackets.getModule("document/DocumentManager"),h=brackets.getModule("view/MainViewFactory"),m=brackets.getModule("project/ProjectManager"),v=brackets.getModule("filesystem/FileSystem"),g=brackets.getModule("filesystem/impls/filer/UrlCache"),y=brackets.getModule("filesystem/impls/filer/lib/content"),w=brackets.getModule("filesystem/impls/filer/BracketsFiler").Path,b=brackets.getModule("thirdparty/lodash"),x=e("text!htmlContent/font-holder.html"),P={};a.prototype._buildPage=function(e,t,n){n&&t.find(".viewer-wrapper").length>0&&t.find(".viewer-wrapper").remove(),this.$el=$(f.render(x,{url:r(this.file.fullPath),relPath:this.relPath,fontName:i(this.file),now:(new Date).valueOf(),Strings:p})),t.append(this.$el),this.$fontFace=this.$el.find(".font-face"),this.$fontData=this.$el.find(".font-data"),this._updateStats()},a.prototype._updateStats=function(){var e=this;this.file.stat(function(t,n){if(!t&&n._size){var i=d.prettyPrintBytes(n._size,2);e.$fontData.text(i).attr("title",i)}})},a.prototype._onFilenameChange=function(e,t,n){this.file.fullPath===n&&(this.relPath=m.makeProjectRelativeIfPossible(n),this._buildPage(this.file,this.$container,!0))},a.prototype.getFile=function(){return this.file},a.prototype.updateLayout=function(){var e=this.$el.parent(),t=e.position(),n=e.innerWidth(),i=e.innerHeight(),r=e.outerWidth(),a=e.outerHeight();this.$el.css({top:t.top+(a-i)/2,left:t.left+(r-n)/2,width:n,height:i})},a.prototype.destroy=function(){delete P[this.file.fullPath],u.off("fileNameChange",this.fileChangeHandler),this.$el.remove()},a.prototype.refresh=function(){var e=r(this.file.fullPath),t=(new Date).valueOf();e=e+"?ver="+t,this.$fontFace.html("@font-face {font-family:'FontDisplay';src: url('"+e+"');}"),this._updateStats()},v.on("change",s),h.registerViewFactory({canOpenFile:function(e){return y.isFont(w.extname(e))},openFile:function(e,t){return o(e,t)}}),l.appReady(function(){c.loadStyleSheet(n,"styles/main.less")})});