import{b as w}from"./sessionService-Dd70vbx6.js";const b=document.getElementById("summaryStats"),u=document.getElementById("histogramContainer"),f=document.getElementById("intervalContainer"),p=document.getElementById("tabRoot");let i=null,o="all";function $(e){var t;return((t=i==null?void 0:i.scenarios[e])==null?void 0:t.label)??(e==="disaster"?"Disaster relief":e==="chore"?"Household chores":String(e))}function v(e){p.innerHTML="",[{value:"all",label:"All"}].concat(e.map(n=>({value:n,label:$(n)}))).forEach(n=>{const s=document.createElement("button");s.type="button",s.dataset.filter=n.value,s.textContent=n.label,s.classList.toggle("active",o===n.value),s.addEventListener("click",()=>{o=n.value,v(e),y()}),p.appendChild(s)})}function g(){return i?o==="all"?i.completed_sessions:i.completed_sessions.filter(e=>e.scenario===o):[]}function L(){const e=g(),t=e.map(s=>s.query_count),n=t.length?(t.reduce((s,a)=>s+a,0)/t.length).toFixed(2):"0.00";b.innerHTML=`
    <div class="stat">Completed runs<strong>${e.length}</strong></div>
    <div class="stat">Average queries<strong>${n}</strong></div>
    <div class="stat">Filter<strong>${o==="all"?"All":$(o)}</strong></div>
  `}function z(){const e=g();if(e.length===0){u.innerHTML='<p class="empty">No completed sessions are available for this filter.</p>';return}const t=20,n=Array.from({length:t},()=>0);e.forEach(d=>{const m=Math.min(t-1,Math.floor(d.normalized.pmiddle*t));n[m]+=1});const s=Math.max(...n,1),a=920,l=260,r=200,c=a/t,h=n.map((d,m)=>{const x=d/s*r,M=m*c,H=r-x+20;return`<rect x="${M+6}" y="${H}" width="${Math.max(c-12,6)}" height="${x}" rx="8" fill="#b45f37"></rect>`}).join("");u.innerHTML=`
    <svg viewBox="0 0 ${a} ${l}" role="img" aria-label="Histogram of normalized pmiddle values">
      <line x1="0" y1="${r+20}" x2="${a}" y2="${r+20}" stroke="#6d5a4b" stroke-width="2"></line>
      ${h}
      <text x="0" y="${l-10}" fill="#6d5a4b" font-size="14">1</text>
      <text x="${a-20}" y="${l-10}" fill="#6d5a4b" font-size="14">inf</text>
    </svg>
  `}function T(){const e=g();if(e.length===0){f.innerHTML='<p class="empty">No completed sessions are available for this filter.</p>';return}const t=920,n=24,s=Math.max(120,e.length*n+30),a=e.map((l,r)=>{const c=20+r*n,h=Math.max(0,Math.min(1,l.normalized.plower))*t,d=Math.max(0,Math.min(1,l.normalized.pupper))*t,m=Math.max(0,Math.min(1,l.normalized.pmiddle))*t;return`
      <line x1="${h}" y1="${c}" x2="${d}" y2="${c}" stroke="#b45f37" stroke-width="6" stroke-linecap="round"></line>
      <circle cx="${m}" cy="${c}" r="5" fill="#23160f"></circle>
    `}).join("");f.innerHTML=`
    <svg viewBox="0 0 ${t} ${s}" role="img" aria-label="Normalized final intervals">
      <line x1="0" y1="10" x2="${t}" y2="10" stroke="#6d5a4b" stroke-width="2"></line>
      ${a}
      <text x="0" y="${s-8}" fill="#6d5a4b" font-size="14">1</text>
      <text x="${t-20}" y="${s-8}" fill="#6d5a4b" font-size="14">inf</text>
    </svg>
  `}function y(){L(),z(),T()}async function C(){i=await w.summaryPayload(),o!=="all"&&!i.enabled_scenarios.includes(o)&&(o="all"),v(i.enabled_scenarios),y()}C().catch(e=>{const t=e.message||"Unable to load the summary.";b.innerHTML=`<p class="empty">${t}</p>`,u.innerHTML=`<p class="empty">${t}</p>`,f.innerHTML=`<p class="empty">${t}</p>`});
