const CACHE='moneos-cache-v1';
const ASSETS=['/','/index.html','/style.css','/app.js','/login.html','/tableau_de_bord.html','/staking.html','/assets/logo-moneos-gold.png','/manifest.json'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
