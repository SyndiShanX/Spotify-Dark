// @ts-check
// NAME: Fix Tippy Boxes
// AUTHOR: SyndiShanX
// DESCRIPTION: Fixes Tippy Boxes in Zoomed Theme.
/// <reference path="../globals.d.ts" />

(function fixTippyBoxesMain() {
	
	function setTippy(variant, ids) {
		if (variant == 1) {
			tippy.parentElement.parentElement.id = ids;
			setTimeout(function(){ fixTippyBoxes() }, 50);
		} else if (variant == 2) {
			tippy.parentElement.id = ids;
			setTimeout(function(){ fixTippyBoxes() }, 50);
		}
	}
	
	async function fixTippyBoxes() {
		tippy = document.getElementsByClassName("main-contextMenu-tippy")[0]
		if (tippy != undefined) {
			if (tippy.classList.length == 2) {
				setTippy(2, 'tippy-main tippy-spicetify')
			} else {
				tippyText = tippy.children[0].innerText
				if (/Go back/ig.test(tippyText) || /Go forward/ig.test(tippyText)) {
					setTippy(2, 'tippy-main tippy-spicetify')
				} else if (/Theme Dev Tools/ig.test(tippyText)) {
					setTippy(1, 'tippy-tools')
				} else if (/Settings/ig.test(tippyText)) {
					setTippy(1, 'tippy-settings')
				} else if (/Remove /ig.test(tippyText)) {
					setTippy(1, 'tippy-main')
				} else if (!/Remove/ig.test(tippyText) && !/Install/ig.test(tippyText)) {
					setTippy(1, 'tippy-main')
				} 
			}
		} else {
			setTimeout(function(){ fixTippyBoxes() }, 50);
		}
	}
	
	fixTippyBoxes()
	
})();