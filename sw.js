if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>n(e,t),l={module:{uri:t},exports:o,require:c};i[t]=Promise.all(s.map((e=>l[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-19b00789.css",revision:null},{url:"assets/index-3fc0c2af.js",revision:null},{url:"index.html",revision:"bc10e92305132161e8e18ef70ab37e23"},{url:"pwa-icon.png",revision:"f871091fca8cb4095f75d77d0331d9c2"},{url:"pwa-icon-192x192.png",revision:"259600584904563d17d2068c5c997a17"},{url:"manifest.webmanifest",revision:"868cc541107d8d03758851da0eaff5f6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
