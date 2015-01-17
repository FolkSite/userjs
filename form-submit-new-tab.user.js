// ==UserScript==
// @name         form-submit-new-tab
// @version      0.0.1
// @namespace    http://kafene.org
// @description  Submit forms in a new tab by holding control when submitting
// @include      *
// @run-at       document-start
// @grant        none
// @license      MIT <https://raw.githubusercontent.com/kafene/userscripts/mater/LICENSE>
// @downloadURL  https://raw.githubusercontent.com/kafene/userscripts/master/form-submit-new-tab.js
// @updateURL    https://raw.githubusercontent.com/kafene/userscripts/master/form-submit-new-tab.js
// ==/UserScript==

/**
 * What happens:
 * Usually, pressing enter in any select or input element of a form submits
 * that form. Now, pressing control+Enter will submit it in a new tab instead.
 * Usually, pressing enter on the submit button of a form submits that form.
 * Now, pressing control+Enter will submit it in a new tab instead.
 * Usually, left clicking on the submit button of a form submits that form.
 * Now, holding control and clicking, or middle clicking on the button,
 * will submit it in a new tab instead.
 *
 * Not likely to work on every form, especially ones that are generated by
 * scripts and dynamically inserted, or use Javascript to handle submissions.
 * If I notice it's breaking many sites, I'll update accordingly, but until
 * then, for any site that doesn't work... just don't submit it to a new tab!
 *
 * By the way, this is written for up-to-date versions of Firefox, and uses
 * some ES6 syntax that will be incompatible with browsers that don't yet
 * implement features such as:
 *     - Arrow functions
 *     - event.stopImmediatePropagation
 *     - Array.from
 *     - const
 *     - event.key
 */

window.addEventListener("load", event => {
    const modKey = "ctrlKey";

    const handle = (event, condition) => {
        if (condition) {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();

            const form = event.target.form;
            const originalTarget = form.target;

            form.target = "_blank";

            setTimeout(() => {
                form.submit();
                form.target = originalTarget;
            });
        }
    };

    Array.from(document.forms).forEach(form => {
        Array.from(form.querySelectorAll("input,select")).forEach(node => {
            node.addEventListener("keydown", e => handle(e, e.key === "Enter" && e[modKey]));
        });

        Array.from(form.querySelectorAll("[type=submit]")).forEach(node => {
            node.addEventListener("keydown", e => handle(e, e.key === "Enter" && e[modKey]));
            node.addEventListener("mousedown", e => handle(e, e.button === 1 || e[modKey]));
        });
    });
});
