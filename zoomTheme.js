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
		} else if (variant == 3) {
			tippy.id = ids;
			setTimeout(function(){ fixTippyBoxes() }, 50);
		}
	}
	
	function fixTippyBoxes() {
		tippy = document.getElementsByClassName("main-contextMenu-tippy")[0]
		if (tippy != undefined) {
			if (tippy.classList.length == 2) {
				if (/Lyrics /ig.test(tippy.innerText)) {
					setTippy(3, 'tippy-now-playing')
				} else if (tippy.parentElement.style.transform.split('translate3d(')[1].split(', ')[1].split('px')[1] > parseInt('-800')) {
					setTippy(2, 'tippy-sidebar')
				} else {
					setTippy(2, 'tippy-main tippy-spicetify')
				}
			} else {
				tippyText = tippy.children[0].innerText
				if (/Go back/ig.test(tippyText) || /Go forward/ig.test(tippyText)) {
					if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] != '42' && tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split(', ')[1].split('px')[1] < parseInt('-800')) {
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
				} else if (/Library/ig.test(tippyText) || /Create/ig.test(tippyText) || /Switch to /ig.test(tippyText)) {
					if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] > parseInt('800')) {
						setTippy(1, 'tippy-song-info')
					} else if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] == '446') {
						setTippy(1, 'tippy-playlist')
					} else {
						setTippy(1, 'tippy-sidebar')
					}
				} else if (/Duration/ig.test(tippyText)) {
					setTippy(1, 'tippy-song-duration')
				} else if (/Search in Playlists/ig.test(tippyText)) {
					if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] < parseInt('350')) {
						setTippy(1, 'tippy-sidebar-search')
					} else {
						setTippy(1, 'tippy-large-sidebar-search')
					}
				} else if (/Settings/ig.test(tippyText)) {
					setTippy(1, 'tippy-settings')
				} else if (/Enable /ig.test(tippyText)) {
					if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split(', ')[1].split('px')[0] > parseInt('-430')) {
						setTippy(1, 'tippy-now-playing')
					} else {
						setTippy(1, 'tippy-song-shuffle')
					}
				} else if (/More options for /ig.test(tippyText) || /Play /ig.test(tippyText) || /Pause /ig.test(tippyText) || /Close/ig.test(tippyText) || /More options for /ig.test(tippyText) || /Add to /ig.test(tippyText)) {
					if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] > parseInt('800')) {
						if (/More options for /ig.test(tippyText)) {
							setTippy(1, 'tippy-song-info')
						} else if ((/Play /ig.test(tippyText) || /Pause /ig.test(tippyText)) && document.getElementsByClassName('Root__right-sidebar')[0].children[0].style.cssText == '') {
							setTippy(1, 'tippy-song-play')
						}
					} else if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] < parseInt('250')) {
						setTippy(1, 'tippy-now-playing-song')
					} else {
						setTippy(1, 'tippy-playlist')
					}
					if (document.getElementsByClassName('Root__right-sidebar')[0].children[0].style.cssText != '' && document.getElementsByClassName('Root__right-sidebar')[0].children[0].style.cssText.split('width: ')[1].split('px')[0] > 0) {
						if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] > parseInt('800') && tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] > parseInt('1200')) {
							if (/Close/ig.test(tippyText) || /More options for /ig.test(tippyText) || /Add to /ig.test(tippyText)) {
								setTippy(1, 'tippy-sidebar-right')
							} else if (/Play /ig.test(tippyText)) {
								setTippy(1, 'tippy-sidebar-right-play')
							} else {
								setTippy(1, 'tippy-song-info-offset')
							}
						}
					}
				} else if (/Download/ig.test(tippyText) || /Invite collaborators to /ig.test(tippyText) || /More options for /ig.test(tippyText)) {
					setTippy(1, 'tippy-playlist')
				} else if (/Search in playlist/g.test(tippyText)) {
					setTippy(1, 'tippy-playlist-search')
				} else if (/Lyrics/ig.test(tippyText) || /Now Playing /ig.test(tippyText) || /Queue/ig.test(tippyText) || /Connect to a /ig.test(tippyText) || /Mute/ig.test(tippyText) || /Enter /ig.test(tippyText)) {
					setTippy(1, 'tippy-now-playing')
				} else if (!/Remove/ig.test(tippyText) && !/Install/ig.test(tippyText)) {
					setTippy(1, 'tippy-main')
				}
				if (document.getElementsByClassName('Root__right-sidebar')[0].children[0].style.cssText != '' && document.getElementsByClassName('Root__right-sidebar')[0].children[0].style.cssText.split('width: ')[1].split('px')[0] > 0) {
					if (/Remove /ig.test(tippyText)) {
						if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] < parseInt('1200')) {
							setTippy(1, 'tippy-song-info')
						} else if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] > parseInt('800') && tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] > parseInt('1200')) {
							setTippy(1, 'tippy-remove-song-offset')
						} else {
							setTippy(1, 'tippy-main')
						}
					} else if (/Library/ig.test(tippyText) || /Create/ig.test(tippyText) || /Switch to /ig.test(tippyText)) {
						if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] < parseInt('1200')) {
							setTippy(1, 'tippy-song-info')
						} else if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] > parseInt('800') && tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] > parseInt('1200')) {
							setTippy(1, 'tippy-song-info-offset')
						} else {
							setTippy(1, 'tippy-sidebar')
						}
					} else if (/Duration/ig.test(tippyText)) {
						if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] > parseInt('800') && tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] > parseInt('1200')) {
							setTippy(1, 'tippy-song-duration-offset')
						} else {
							setTippy(1, 'tippy-song-duration')
						}
					} else if (/Search in playlist/g.test(tippyText)) {
						if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] > parseInt('800') && tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] > parseInt('1200')) {
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
html:not(:has(.BeautifulLyricsPage.Fullscreen)) {
	zoom: 85%!important;
}
.Root__top-container:not(:has(.BeautifulLyricsPage.Fullscreen)) {
	.main-nowPlayingBar-container, #tippy-main, .main-navBar-mainNav .os-padding {
		zoom: 117.5%!important;
	}
}
.BeautifulLyricsPage.Cinema, .BeautifulLyricsPage.Fullscreen {
	width: 117.5cqw!important;
	height: 117.5cqw!important;
}
#tippy-main {
	position: relative!important;
	top: -95px!important;
	width: max-content!important;
	margin-bottom: -95px!important;
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
#tippy-now-playing {
	position: relative!important;
	top: -45px!important;
	left: 220px!important;
	width: max-content!important;
	margin-bottom: -95px!important;
}
#tippy-now-playing-song {
	position: relative!important;
	top: -45px!important;
	left: 50px!important;
	width: max-content!important;
	margin-bottom: -95px!important;
}
#tippy-sidebar-right {
	position: relative!important;
	top: -100px!important;
	left: 255px!important;
	width: max-content!important;
	margin-bottom: -100px!important;
}
#tippy-sidebar-right-play {
	position: relative!important;
	top: -100px!important;
	left: 150px!important;
	width: max-content!important;
	margin-bottom: -100px!important;
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
	left: 50px!important;
	width: max-content!important;
	margin-bottom: -100px!important;
}
#tippy-song-duration {
	position: relative!important;
	top: -110px!important;
	left: 230px!important;
	width: max-content!important;
	margin-bottom: -110px!important;
}
#tippy-song-duration-offset {
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
	top: -70px!important;
	width: max-content!important;
	margin-bottom: -70px!important;
}
#tippy-song-shuffle {
	position: relative!important;
	top: -80px!important;
	width: max-content!important;
	margin-bottom: -80px!important;
}
#tippy-playlist {
	position: relative!important;
	top: -77px!important;
	width: max-content!important;
	margin-bottom: -77px!important;
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