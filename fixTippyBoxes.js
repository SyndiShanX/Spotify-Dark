// @ts-check
// NAME: Fix Tippy Boxes
// AUTHOR: SyndiShanX
// DESCRIPTION: Fixes Tippy Boxes in Zoomed Theme.
/// <reference path="../globals.d.ts" />

(function fixTippyBoxesMain(){
	
	async function fixTippyBoxes() {
		if (document.getElementsByClassName("X8yW2lJbFCQfV5GjoRwL")[0] != undefined) {
			if (document.getElementsByClassName("X8yW2lJbFCQfV5GjoRwL.parentElement")[0] != undefined) {
				if (document.getElementsByClassName("X8yW2lJbFCQfV5GjoRwL.parentElement.parentElement")[0] != undefined) {
					setTimeout(function(){
						document.getElementsByClassName("X8yW2lJbFCQfV5GjoRwL")[0].parentElement.parentElement.id = 'tippy-test';
					}, 50);
					setTimeout(function(){ fixTippyBoxes() }, 50);
				} else {
					setTimeout(function(){ fixTippyBoxes() }, 50);
				}
			} else {
				setTimeout(function(){ fixTippyBoxes() }, 50);
			}
		} else {
			setTimeout(function(){ fixTippyBoxes() }, 50);
		}
	}
	
	fixTippyBoxes()
	
})();