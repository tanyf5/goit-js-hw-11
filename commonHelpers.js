import{S as u,i as p}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",m="43864553-6e6fc803e67c38d9a685f3364",f=(s="sdsdsd")=>{const r=new URLSearchParams({key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9});return fetch(`${d}?${r}`).then(o=>{if(!o.ok)throw new Error;return o.json()})},h=s=>s.map(({webformatURL:r,largeImageURL:o,tags:l,likes:e,views:t,comments:n,downloads:c})=>`<li class="gallery-item">
        <a class="gallery-link" href="${o}">
          <img
            class="gallery-image"
            src="${r}"
            alt="${l}"
          />
        </a>
        <ul class="description">
          <li class="description-item">
            <h3>Likes</h3>
            <p>${e}</p>
          </li>
          <li class="description-item">
            <h3>Views</h3>
            <p>${t}</p>
          </li>
          <li class="description-item">
            <h3>Comments</h3>
            <p>${n}</p>
          </li>
          <li class="description-item">
            <h3>Downloads</h3>
            <p>${c}</p>
          </li>
        </ul>
      </li>`).join(""),i={form:document.querySelector(".form"),input:document.querySelector("input"),button:document.querySelector("button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},a=new u(".gallery a");a.options.captionsData="alt";a.options.captionDelay=250;i.form.addEventListener("submit",s=>{s.preventDefault();const r=i.input.value.trim();i.gallery.innerHTML="",r&&(i.loader.style="display:block",setTimeout(()=>{f(r).then(o=>{o.hits.length?(i.gallery.innerHTML=h(o.hits),a.refresh()):p.warning({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight"})}).catch(o=>{}).finally(()=>{i.loader.style="display:none"})},500)),i.form.reset()});a.on("show.simplelightbox",()=>{});
//# sourceMappingURL=commonHelpers.js.map
