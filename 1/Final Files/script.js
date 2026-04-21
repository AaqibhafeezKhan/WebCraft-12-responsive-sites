document.querySelector('.c_xc87jy').addEventListener('click', () => {
	document.querySelectorAll('.c_ch28mr').forEach((item) => {
		item.classList.toggle('c_xlv79v');
	})
})

const icons = document.querySelectorAll('.c_athhpq i')
let i = 1

setInterval(() => {
	i++
	const icon = document.querySelector('.c_athhpq .c_xlv79v')
	icon.classList.remove('c_xlv79v')

	if (i > icons.length) {
		icons[0].classList.add('c_xlv79v')
		i = 1
	} else {
		icon.nextElementSibling.classList.add('c_xlv79v')
	}
}, 4000)