const root = document.querySelector(':root')

const colorToHex = (color) => {
  const hex = color.toString(16)
  return hex.length == 1 ? "0" + hex : hex
}

const rgbToHex = (r, g, b) => {
  return "#" + colorToHex(r) + colorToHex(g) + colorToHex(b)
}

(async function rainbow(interval = 100) {
	x = 0
	y = 0
	r = 0
	g = 0
	b = 0
	rainbow_color = [0, 0, 0]
	
	while(true) {
		if (y >= 0 && y < 258) {
			r = 255
			g = 0
			b = x
		} else if (y >= 258 && y < 516) {
			r = 255 - x
			g = 0
			b = 255
		} else if (y >= 516 && y < 774) {
			r = 0
			g = x
			b = 255
		} else if (y >= 774 && y < 1032) {
			r = 0
			g = 255
			b = 255 - x
		} else if (y >= 1032 && y < 1290) {
			r = x
			g = 255
			b = 0
		} else if (y >= 1290 && y < 1545) {
			r = 255
			g = 255 - x
			b = 0
		}
		
		x += 3
		if (x > 255) {
			x = 0
		}
		
		y += 3
		if (y > 1545) {
			y = 0
		}
		
		rainbow_color = [r, g, b]
		
		root.style.setProperty('--spice-button-active', rgbToHex(rainbow_color[0], rainbow_color[1], rainbow_color[2]))
		await new Promise(resolve => setTimeout(resolve, interval))
	}
})()