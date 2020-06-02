function saveCanvas(t,e){t&&blobPNGFromCanvas(document.getElementById(t),function(t){saveAs(t,e)})}function blobPNGFromCanvas(t,e){t.toBlobHD(e,"image/png")}function saveAs(t,e){"use strict";var n=document.createElement("a");document.body.appendChild(n),n.style.cssText="display: none";var o=window.URL.createObjectURL(t);n.href=o,n.download=e,n.click(),window.URL.revokeObjectURL(o),n.parentNode.removeChild(n)}!function(t){"use strict";if(t.URL=t.URL||t.webkitURL,t.Blob&&t.URL)try{return void new Blob}catch(t){}var e=t.BlobBuilder||t.WebKitBlobBuilder||t.MozBlobBuilder||function(t){var e=function(t){return Object.prototype.toString.call(t).match(/^\[object\s(.*)\]$/)[1]},n=function(){this.data=[]},o=function(t,e,n){this.data=t,this.size=t.length,this.type=e,this.encoding=n},i=n.prototype,a=o.prototype,r=t.FileReaderSync,s=function(t){this.code=this[this.name=t]},c="NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" "),l=c.length,d=t.URL||t.webkitURL||t,u=d.createObjectURL,f=d.revokeObjectURL,b=d,p=t.btoa,h=t.atob,R=t.ArrayBuffer,g=t.Uint8Array,w=/^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;for(o.fake=a.fake=!0;l--;)s.prototype[c[l]]=l+1;return d.createObjectURL||(b=t.URL=function(t){var e,n=document.createElementNS("http://www.w3.org/1999/xhtml","a");return n.href=t,"origin"in n||("data:"===n.protocol.toLowerCase()?n.origin=null:(e=t.match(w),n.origin=e&&e[1])),n}),b.createObjectURL=function(t){var e,n=t.type;return null===n&&(n="application/octet-stream"),t instanceof o?(e="data:"+n,"base64"===t.encoding?e+";base64,"+t.data:"URI"===t.encoding?e+","+decodeURIComponent(t.data):p?e+";base64,"+p(t.data):e+","+encodeURIComponent(t.data)):u?u.call(d,t):void 0},b.revokeObjectURL=function(t){"data:"!==t.substring(0,5)&&f&&f.call(d,t)},i.append=function(t){var n=this.data;if(g&&(t instanceof R||t instanceof g)){for(var i="",a=new g(t),c=0,l=a.length;c<l;c++)i+=String.fromCharCode(a[c]);n.push(i)}else if("Blob"===e(t)||"File"===e(t)){if(!r)throw new s("NOT_READABLE_ERR");var d=new r;n.push(d.readAsBinaryString(t))}else t instanceof o?"base64"===t.encoding&&h?n.push(h(t.data)):"URI"===t.encoding?n.push(decodeURIComponent(t.data)):"raw"===t.encoding&&n.push(t.data):("string"!=typeof t&&(t+=""),n.push(unescape(encodeURIComponent(t))))},i.getBlob=function(t){return arguments.length||(t=null),new o(this.data.join(""),t,"raw")},i.toString=function(){return"[object BlobBuilder]"},a.slice=function(t,e,n){var i=arguments.length;return i<3&&(n=null),new o(this.data.slice(t,i>1?e:this.data.length),n,this.encoding)},a.toString=function(){return"[object Blob]"},a.close=function(){this.size=0,delete this.data},n}(t);t.Blob=function(t,n){var o=n&&n.type||"",i=new e;if(t)for(var a=0,r=t.length;a<r;a++)Uint8Array&&t[a]instanceof Uint8Array?i.append(t[a].buffer):i.append(t[a]);var s=i.getBlob(o);return!s.slice&&s.webkitSlice&&(s.slice=s.webkitSlice),s};var n=Object.getPrototypeOf||function(t){return t.__proto__};t.Blob.prototype=n(new t.Blob)}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this),function(t){"use strict";var e,n=t.Uint8Array,o=t.HTMLCanvasElement,i=o&&o.prototype,a=/\s*;\s*base64\s*(?:;|$)/i,r="toDataURL";n&&(e=new n([62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,0,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51])),!o||i.toBlob&&i.toBlobHD||(i.toBlob||(i.toBlob=function(t,o){if(o||(o="image/png"),this.mozGetAsFile)t(this.mozGetAsFile("canvas",o));else if(this.msToBlob&&/^\s*image\/png\s*(?:$|;)/i.test(o))t(this.msToBlob());else{var i,s=Array.prototype.slice.call(arguments,1),c=this[r].apply(this,s),l=c.indexOf(","),d=c.substring(l+1),u=a.test(c.substring(0,l));Blob.fake?((i=new Blob).encoding=u?"base64":"URI",i.data=d,i.size=d.length):n&&(i=u?new Blob([function(t){for(var o,i,a=t.length,r=new n(a/4*3|0),s=0,c=0,l=[0,0],d=0,u=0;a--;)i=t.charCodeAt(s++),255!==(o=e[i-43])&&void 0!==o&&(l[1]=l[0],l[0]=i,u=u<<6|o,4==++d&&(r[c++]=u>>>16,61!==l[1]&&(r[c++]=u>>>8),61!==l[0]&&(r[c++]=u),d=0));return r}(d)],{type:o}):new Blob([decodeURIComponent(d)],{type:o})),t(i)}}),!i.toBlobHD&&i.toDataURLHD?i.toBlobHD=function(){r="toDataURLHD";var t=this.toBlob();return r="toDataURL",t}:i.toBlobHD=i.toBlob)}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content||this);