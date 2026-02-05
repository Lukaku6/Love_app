import { loadPage } from "./router.js";

document.querySelectorAll("[data-page]").forEach(btn=>{
  btn.onclick = ()=> loadPage(btn.dataset.page);
});

loadPage("memory");