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
				/* Fullscreen Now Playing Tippy */
				if (/Enter Fullscreen/ig.test(tippy.innerText) || /Fullscreen/ig.test(tippy.innerText)) {
					setTippy(2, 'tippy-now-playing-fullscreen')
				/* Lyrics Now Playing Tippy */
				} else if (/Lyrics /ig.test(tippy.innerText)) {
					setTippy(3, 'tippy-now-playing-lyrics')
				/* Spicetify Button Tippy */
				} else {
					setTippy(2, 'tippy-main tippy-spicetify')
				}
			} else {
				tippyText = tippy.children[0].innerText
				/* Page Navigation Buttons Tippy */
				if (/Go back/ig.test(tippyText) || /Go forward/ig.test(tippyText)) {
					if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] == '31' || tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] == '51') {
						setTippy(2, 'tippy-main tippy-spicetify')
					} else {
						setTippy(1, 'tippy-sidebar')
					}
				} else if (/Theme Dev Tools/ig.test(tippyText)) {
					setTippy(1, 'tippy-tools')
				/* Left Sidebar Misc Tippy */
				} else if (/Collapse /ig.test(tippyText) || /Create playlist /ig.test(tippyText) || /Switch to /ig.test(tippyText)) {
					if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] > parseInt('800')) {
						setTippy(1, 'tippy-song-info')
					} else if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] == '446') {
						setTippy(1, 'tippy-playlist')
					} else {
						setTippy(1, 'tippy-sidebar')
					}
				/* Left Sidebar Search Tippy */
				} else if (/Search in Playlists/ig.test(tippyText) || /Search in Your Library/ig.test(tippyText)) {
					if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] < parseInt('350')) {
						setTippy(1, 'tippy-sidebar-search')
					} else {
						setTippy(1, 'tippy-large-sidebar-search')
					}
				/* Settings Tippy (Not sure where this is) */
				} else if (/Settings/ig.test(tippyText)) {
					setTippy(1, 'tippy-settings')
				/* Shuffle Button Tippy */
				} else if (/Enable /ig.test(tippyText) || /Disable /ig.test(tippyText)) {
					if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] > parseInt('400')) {
						setTippy(1, 'tippy-now-playing-shuffle')
					} else {
						setTippy(1, 'tippy-song-shuffle')
					}
				/* Playlist Song Tippy Collection */
				} else if (/More options for /ig.test(tippyText) || /Play /ig.test(tippyText) || /Pause /ig.test(tippyText) || /Close/ig.test(tippyText) || /More options for /ig.test(tippyText) || /Add to /ig.test(tippyText) || /Save to /ig.test(tippyText) || /Remove from /ig.test(tippyText)) {
					if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] > parseInt('800')) {
						if (/More options for /ig.test(tippyText)) {
							setTippy(1, 'tippy-song-info')
						} else if ((/Play /ig.test(tippyText) || /Pause /ig.test(tippyText)) && document.getElementsByClassName('Root__right-sidebar')[0].children[0].style.cssText == '') {
							setTippy(1, 'tippy-song-play')
						}
					/* Now Playing Remove Liked Song Tippy */
					} else if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] < parseInt('250')) {
						setTippy(1, 'tippy-now-playing-song')
					/* More Options Playlist Tippy */
					} else {
						setTippy(1, 'tippy-playlist')
					}
					/* Right Sidebar Tippy Collection */
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
				/* Playlist Tippy Collection */
				} else if (/Download/ig.test(tippyText) || /Invite collaborators to /ig.test(tippyText) || /More options for /ig.test(tippyText)) {
					setTippy(1, 'tippy-playlist')
				/* Now Playing Bar Right Side Tippy Collection */
				} else if (/Lyrics/ig.test(tippyText) || /Now Playing /ig.test(tippyText) || /Queue/ig.test(tippyText) || /Connect to a /ig.test(tippyText) || /Mute/ig.test(tippyText)) {
					setTippy(1, 'tippy-now-playing')
				/* Failsafe */
				} else if (!/Remove/ig.test(tippyText) && !/Install/ig.test(tippyText)) {
					setTippy(1, 'tippy-main')
				}
				/* Checks if Right Sidebar exists and is Visible */
				if (document.getElementsByClassName('Root__right-sidebar')[0].children[0].style.cssText != '' && document.getElementsByClassName('Root__right-sidebar')[0].children[0].style.cssText.split('width: ')[1].split('px')[0] > 0) {
					if (/Remove /ig.test(tippyText)) {
						if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] < parseInt('1200')) {
							/* Unknown */
							if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] > parseInt('250')) {
								setTippy(1, 'tippy-song-info')
								console.log('Trippity Trop')
							}
						/* Playlist Remove Liked Song Tippy */
						} else if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] > parseInt('800') && tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] > parseInt('1200')) {
							setTippy(1, 'tippy-remove-song-offset')
						/* Failsafe */
						} else {
							setTippy(1, 'tippy-main')
						}
					/* Playlist Song Duration Tippy */
					} else if (/Duration/ig.test(tippyText)) {
						if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] > parseInt('800') && tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] > parseInt('1200')) {
							setTippy(1, 'tippy-song-duration-offset')
						} else {
							setTippy(1, 'tippy-song-duration')
						}
					/* Playlist Search Tippy */
					} else if (/Search in playlist/g.test(tippyText)) {
						if (tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] > parseInt('800') && tippy.parentElement.parentElement.style.transform.split('translate3d(')[1].split('px')[0] > parseInt('1200')) {
							setTippy(1, 'tippy-playlist-search-offset')
						} else {
							setTippy(1, 'tippy-playlist-search')
						}
					}
				}
			}
		/* Blue Listen to Speaker Tippy */
		} else if (document.getElementsByClassName("main-contextMenu-tippyWrapper")[0] != undefined) {
			if (document.getElementsByClassName("main-contextMenu-tippyWrapper")[0].children[1] != undefined) {
				if (document.getElementsByClassName("main-contextMenu-tippyWrapper")[0].children[1].children[0] != undefined) {
					tippy = document.getElementsByClassName("main-contextMenu-tippyWrapper")[0].children[1].children[0]
					tippyText = tippy.children[0].children[0].children[0].children[0].innerText
					setTippy(3, 'tippy-speaker')
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

var zoomCss = `
/* Zoom */
html:not(.BeautifulLyricsPage.Fullscreen) {
	zoom: 85%!important;
}
.Root__top-container:not(.BeautifulLyricsPage.Fullscreen) {
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
}
#tippy-spicetify {
	position: relative!important;
	top: -835px!important;
	left: -85px!important;
	width: max-content!important;
}
#tippy-speaker, #nudgeBody {
	position: relative!important;
	top: 100px!important;
	left: -58px!important;
	width: max-content!important;
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
}
#tippy-now-playing-fullscreen {
	position: relative!important;
	top: -45px!important;
	left: 255px!important;
	width: max-content!important;
}
#tippy-now-playing-song {
	position: relative!important;
	top: -45px!important;
	left: 50px!important;
	width: max-content!important;
}
#tippy-sidebar-right {
	position: relative!important;
	top: -100px!important;
	left: 255px!important;
	width: max-content!important;
}
#tippy-sidebar-right-play {
	position: relative!important;
	top: -100px!important;
	left: 150px!important;
	width: max-content!important;
}
#tippy-sidebar {
	position: relative!important;
	top: -95px!important;
	width: max-content!important;
}
#tippy-sidebar-search {
	position: relative!important;
	top: -95px!important;
	width: max-content!important;
}
#tippy-large-sidebar-search {
	position: relative!important;
	top: -90px!important;
	width: max-content!important;
}
#tippy-song-info {
	position: relative!important;
	top: -100px!important;
	left: 260px!important;
	width: max-content!important;
}
#tippy-song-info-offset {
	position: relative!important;
	top: -100px!important;
	left: 50px!important;
	width: max-content!important;
}
#tippy-song-duration {
	position: relative!important;
	top: -110px!important;
	left: 230px!important;
	width: max-content!important;
}
#tippy-song-duration-offset {
	position: relative!important;
	top: -100px!important;
	left: 0px!important;
	width: max-content!important;
}
#tippy-remove-song {
	position: relative!important;
	top: -100px!important;
	left: 230px!important;
	width: max-content!important;
}
#tippy-remove-song-offset {
	position: relative!important;
	top: -100px!important;
	left: 0px!important;
	width: max-content!important;
}
#tippy-song-play {
	position: relative!important;
	top: -70px!important;
	width: max-content!important;
}
#tippy-now-playing-lyrics {
	position: relative!important;
	top: -15px!important;
	left: 205px!important;
	width: max-content!important;
}
#tippy-now-playing-shuffle {
	position: relative!important;
	top: -45px!important;
	left: 120px!important;
	width: max-content!important;
}
#tippy-song-shuffle {
	position: relative!important;
	top: -80px!important;
	width: max-content!important;
}
#tippy-playlist {
	position: relative!important;
	top: -77px!important;
	width: max-content!important;
}
#tippy-playlist-search {
	position: relative!important;
	top: -90px!important;
	left: 165px!important;
	width: max-content!important;
}
#tippy-playlist-search-offset {
	position: relative!important;
	top: -90px!important;
	left: 0px!important;
	width: max-content!important;
}
#tippy-artist {
	position: relative!important;
	top: -90px!important;
	width: max-content!important;
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