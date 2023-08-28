// @ts-check
// NAME: Zoom Theme
// AUTHOR: SyndiShanX
// DESCRIPTION: Zooms Theme and Fixes Tippy Boxes.
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
					if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] != '34') {
						setTippy(2, 'tippy-main tippy-spicetify')
					} else {
						setTippy(1, 'tippy-sidebar')
					}
				} else if (/Theme Dev Tools/ig.test(tippyText)) {
					setTippy(1, 'tippy-tools')
				} else if (/Remove /ig.test(tippyText)) {
					if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] > parseInt('800')) {
						setTippy(1, 'tippy-remove-song')
					} else {
						setTippy(1, 'tippy-main')
					}
				} else if (/Library/ig.test(tippyText) || /Create/ig.test(tippyText) || /More options for /ig.test(tippyText) || /Switch to /ig.test(tippyText) || /Invite collaborators to /ig.test(tippyText) || /Duration/ig.test(tippyText)) {
					if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] > parseInt('800')) {
						setTippy(1, 'tippy-song-info')
					} else if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] == '437') {
						setTippy(1, 'tippy-playlist')
					} else {
						setTippy(1, 'tippy-sidebar')
					}
				} else if (/Search in Playlists/ig.test(tippyText)) {
					if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] < parseInt('350')) {
						setTippy(1, 'tippy-sidebar-search')
					} else {
						setTippy(1, 'tippy-large-sidebar-search')
					}
				} else if (/Settings/ig.test(tippyText)) {
					setTippy(1, 'tippy-settings')
				} else if (/Play /ig.test(tippyText)) {
					setTippy(1, 'tippy-song-play')
				} else if (/Download/ig.test(tippyText)) {
					setTippy(1, 'tippy-playlist')
				} else if (/Search in playlist/g.test(tippyText)) {
					setTippy(1, 'tippy-playlist-search')
				} else if (!/Remove/ig.test(tippyText) && !/Install/ig.test(tippyText)) {
					setTippy(1, 'tippy-main')
				}
				if (document.getElementsByClassName('Root__right-sidebar')[0].style.cssText != '' && document.getElementsByClassName('Root__right-sidebar')[0].style.cssText.split('width: ')[1].split('px')[0] > 0) {
					if (/Remove /ig.test(tippyText)) {
						if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] > parseInt('1300')) {
							setTippy(1, 'tippy-song-info')
						} else if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] > parseInt('800') && tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] < parseInt('1300')) {
							setTippy(1, 'tippy-remove-song-offset')
						} else {
							setTippy(1, 'tippy-main')
						}
					} else if (/Library/ig.test(tippyText) || /Create/ig.test(tippyText) || /More options for /ig.test(tippyText) || /Switch to /ig.test(tippyText) || /Invite collaborators to /ig.test(tippyText) || /Duration/ig.test(tippyText)) {
						if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] > parseInt('1300')) {
							setTippy(1, 'tippy-song-info')
						} else if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] > parseInt('800') && tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] < parseInt('1300')) {
							setTippy(1, 'tippy-song-info-offset')
						} else {
							setTippy(1, 'tippy-sidebar')
						}
					} else if (/Search in playlist/g.test(tippyText)) {
						if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] > parseInt('800') && tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] < parseInt('1200')) {
							setTippy(1, 'tippy-playlist-search-offset')
						} else {
							setTippy(1, 'tippy-playlist-search')
						}
					}
				}
			}
		} else {
			setTimeout(function(){ fixTippyBoxes() }, 50);
		}
	}
	
	fixTippyBoxes()
	
})();

var zoomCss = `
/* Zoom */
html {
	zoom: 85%!important;
}
.main-nowPlayingBar-container, #tippy-main, .main-navBar-mainNav .os-padding {
	zoom: 117.5%!important;
}
#tippy-spicetify {
	position: relative!important;
	top: -835px!important;
	left: -85px!important;
	width: max-content!important;
	margin-bottom: -810px!important;
}
#tippy-tools {
	left: 55px!important;
}
#tippy-settings {
	left: 260px!important;
}
#tippy-sidebar {
	position: relative!important;
	top: -95px!important;
	width: max-content!important;
	margin-bottom: -95px!important;
}
#tippy-sidebar-search {
	position: relative!important;
	top: -50px!important;
	width: max-content!important;
	margin-bottom: -50px!important;
}
#tippy-large-sidebar-search {
	position: relative!important;
	top: -90px!important;
	width: max-content!important;
	margin-bottom: -90px!important;
}
#tippy-song-info {
	position: relative!important;
	top: -100px!important;
	left: 260px!important;
	width: max-content!important;
	margin-bottom: -100px!important;
}
#tippy-song-info-offset {
	position: relative!important;
	top: -100px!important;
	left: 0px!important;
	width: max-content!important;
	margin-bottom: -100px!important;
}
#tippy-remove-song {
	position: relative!important;
	top: -100px!important;
	left: 230px!important;
	width: max-content!important;
	margin-bottom: -100px!important;
}
#tippy-remove-song-offset {
	position: relative!important;
	top: -100px!important;
	left: 0px!important;
	width: max-content!important;
	margin-bottom: -100px!important;
}
#tippy-song-play {
	position: relative!important;
	top: -100px!important;
	width: max-content!important;
	margin-bottom: -100px!important;
}
#tippy-playlist {
	position: relative!important;
	top: -90px!important;
	width: max-content!important;
	margin-bottom: -90px!important;
}
#tippy-playlist-search {
	position: relative!important;
	top: -90px!important;
	left: 165px!important;
	width: max-content!important;
	margin-bottom: -100px!important;
}
#tippy-playlist-search-offset {
	position: relative!important;
	top: -90px!important;
	left: 0px!important;
	width: max-content!important;
	margin-bottom: -100px!important;
}
#tippy-artist {
	position: relative!important;
	top: -90px!important;
	width: max-content!important;
	margin-bottom: -90px!important;
}
.main-nowPlayingBar-extraControls>div>.tippy-box {
	top: 150px!important;
	left: 270px!important;
}
`

var head = document.getElementsByTagName('head')[0];
var stylesheet = document.createElement("style");
stylesheet.type = 'text/css'
stylesheet.innerText = zoomCss
head.appendChild(stylesheet);