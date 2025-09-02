# Moneos Network – Site unifie (statique)
Ce paquet contient une version unifiee du site vitrine Moneos Network pour deploiement sur Vercel.
Pages incluses : Accueil, Connexion (MetaMask), Dashboard, Staking (demo).
Inclus aussi : PWA (manifest + service worker) et dossier assets/pdf.

## Deploiement
- **Vercel (drag & drop)** : dezzipez, puis glissez le dossier dans vercel.com/new.
- **GitHub + Vercel** : poussez ce dossier dans un depot public, importez-le dans Vercel.

## Web3
- Seule la connexion MetaMask (demo) est incluse cote front. Aucune transaction reelle.
- Le dashboard lit l'adresse stockee en localStorage apres connexion.

## PWA
- `manifest.json` et `service-worker.js` ajoutent l'installation “Ajouter a l'ecran d'accueil” et un cache de base.
