// @ts-check
// NAME: Fix Tippy Boxes
// AUTHOR: SyndiShanX
// DESCRIPTION: Fixes Tippy Boxes in Zoomed Theme.
/// <reference path="../globals.d.ts" />

(function fixTippyBoxesMain() {
	
	async function fixTippyBoxes() {
		if (document.getElementsByClassName("main-contextMenu-tippy")[0] != undefined) {
			if (document.getElementsByClassName("main-contextMenu-tippy")[0].classList.length == 2) {
				setTimeout(function(){ document.getElementsByClassName("main-contextMenu-tippy")[0].parentElement.id = 'tippy-main tippy-spicetify'; }, 50);
				setTimeout(function(){ fixTippyBoxes() }, 50);
			} else {
				if (document.getElementsByClassName("main-contextMenu-tippy")[0].children[0].innerText == 'Go back' || document.getElementsByClassName("main-contextMenu-tippy")[0].children[0].innerText == 'Go forward') {
					setTimeout(function(){ document.getElementsByClassName("main-contextMenu-tippy")[0].parentElement.id = 'tippy-main tippy-spicetify'; }, 50);
					setTimeout(function(){ fixTippyBoxes() }, 50);
				} else {
					setTimeout(function(){ document.getElementsByClassName("main-contextMenu-tippy")[0].parentElement.parentElement.id = 'tippy-main'; }, 50);
					setTimeout(function(){ fixTippyBoxes() }, 50);
				}
			}
		} else {
			setTimeout(function(){ fixTippyBoxes() }, 50);
		}
	}
	
	fixTippyBoxes()
	
})();