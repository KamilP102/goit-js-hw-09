function e(e,t){return new Promise(((o,n)=>{const s=Math.random()>.3;setTimeout((()=>{s?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(t=>{t.preventDefault();const o=new FormData(t.target),n=parseInt(o.get("delay"),10),s=parseInt(o.get("step"),10),i=parseInt(o.get("amount"),10);for(let t=0;t<i;t++)e(t+1,n+t*s).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}));
//# sourceMappingURL=03-promises.8ded0699.js.map