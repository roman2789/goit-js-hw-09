function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var u=o("eWCmQ");const i={submitBtn:document.querySelector("button"),form:document.querySelector(".form")};function l(e,t){return new Promise(((n,r)=>{const o=Math.random()>.3;setTimeout((()=>{o?n(`✅ Fulfilled promise ${e} in ${t}ms`):r(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}i.submitBtn.addEventListener("submit",l),i.form.addEventListener("submit",(function(t){t.preventDefault();const n=t.currentTarget;let r=n.elements.delay.value;const o=n.elements.amount.value,d=n.elements.step.value;for(let t=1;t<=o;t++)s=t,l(s,r).then((t=>{e(u).Notify.success(t)})).catch((t=>{e(u).Notify.failure(t)})),r=Number(r)+Number(d);i.form.reset()}));let s=0;
//# sourceMappingURL=03-promises.1055281e.js.map
