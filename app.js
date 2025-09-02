const els={address:document.querySelector('[data-address]'),status:document.querySelector('[data-status]'),btnConnect:document.querySelector('[data-connect]'),btnDisconnect:document.querySelector('[data-disconnect]')};
function setAddress(a){if(els.address)els.address.textContent=a||'Non connecte';}
function setStatus(m){if(els.status)els.status.textContent=m||'';}
async function connect(){if(!window.ethereum){setStatus('MetaMask non detecte');return;}
try{const accounts=await window.ethereum.request({method:'eth_requestAccounts'});const a=accounts[0];localStorage.setItem('moneos_address',a);setAddress(a);setStatus('Connecte');}catch(e){setStatus('Connexion annulee');}}
function disconnect(){localStorage.removeItem('moneos_address');setAddress(null);setStatus('Deconnecte');}
(function(){const s=localStorage.getItem('moneos_address');if(s){setAddress(s);setStatus('Connecte');}
if(els.btnConnect)els.btnConnect.addEventListener('click',connect);
if(els.btnDisconnect)els.btnDisconnect.addEventListener('click',disconnect);})();