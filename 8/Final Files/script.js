
document.querySelectorAll('.c_apuyq7, .c_v2jllt a, .c_58g2d3').forEach(control => {
    control.addEventListener('click', e => {
        e.preventDefault()
    })
})



let x = 0
let y = 20
let z = 0
let bool = true
let interval;

const cube = document.querySelector('.c_d1qwna')

document.querySelector('.c_yavus6').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x += 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})

document.querySelector('.c_0i3oj2').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x -= 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})

document.querySelector('.c_kxie48').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y -= 20}deg) rotateZ(${z}deg) `
})

document.querySelector('.c_lhxl4e').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y += 20}deg) rotateZ(${z}deg) `
})

document.querySelector('.c_n52ewp').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z -= 20}deg) `
})

document.querySelector('.c_x35fxk').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z += 20}deg) `
})

const playPause = () => {
    if(bool) {
        interval = setInterval(() => {
            cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`
        }, 100)
    } else {
        clearInterval(interval)
    }
}

playPause()

document.querySelector('.c_v2jllt').addEventListener('mouseover', () => {
    bool = false
    playPause()
})

document.querySelector('.c_v2jllt').addEventListener('mouseout', () => {
    bool = true
    playPause()
})




const slideshowDivs = () => {
    for(let i = 1; i <= 5; i++) {
        const div = document.createElement('div')

        div.style.backgroundImage = `url(images/c_lg5ikf/layer-box-1-bg-${i}.jpg)`

        i === 1 && div.classList.add('c_4pbvcy')

        document.querySelector('.c_lg5ikf').appendChild(div)
    }
}

slideshowDivs()

const divs = document.querySelectorAll('.c_lg5ikf div')

let a = 1

const slideshow = () => {
    setInterval(() => {
        a++

        const div = document.querySelector('.c_lg5ikf .c_4pbvcy')

        div.classList.remove('c_4pbvcy')

        if(a < divs.length) {
            div.nextElementSibling.classList.add('c_4pbvcy')
        } else {
            divs[0].classList.add('c_4pbvcy')
            a = 1
        }
    }, 20000)
}

slideshow()



const section3Content = document.querySelector('.c_a5nkl5')

window.addEventListener('scroll', () => {
    if(window.pageYOffset + window.innerHeight >= section3Content.offsetTop + section3Content.offsetHeight / 2) {
        section3Content.classList.add('c_4pbvcy')
    }
})



const watchBands = document.querySelector('.c_4p7vmg')
const watchCases = document.querySelector('.c_3svy8v')

const watchTopControl = document.querySelector('.c_vj828i')
const watchRightControl = document.querySelector('.c_tqc9uy')
const watchBottomControl = document.querySelector('.c_k98mje')
const watchLeftControl = document.querySelector('.c_q8pzxy')

let axisY = 0
let axisX = 0

const hideControl = () => {
    if(axisY === -280) {
        watchTopControl.classList.add('c_p1scw6')
    } else {
        watchTopControl.classList.remove('c_p1scw6')
    }

    if(axisY === 280) {
        watchBottomControl.classList.add('c_p1scw6')
    } else {
        watchBottomControl.classList.remove('c_p1scw6')
    }

    if(axisX === 280) {
        watchRightControl.classList.add('c_p1scw6')
    } else {
        watchRightControl.classList.remove('c_p1scw6')
    }

    if(axisX === -280) {
        watchLeftControl.classList.add('c_p1scw6')
    } else {
        watchLeftControl.classList.remove('c_p1scw6')
    }
}

watchTopControl.addEventListener('click', () => {
    watchCases.style.marginTop = `${axisY -= 70}rem`
    hideControl()
})

watchBottomControl.addEventListener('click', () => {
    watchCases.style.marginTop = `${axisY += 70}rem`
    hideControl()
})

watchRightControl.addEventListener('click', () => {
    watchBands.style.marginRight = `${axisX += 70}rem`
    hideControl()
})

watchLeftControl.addEventListener('click', () => {
    watchBands.style.marginRight = `${axisX -= 70}rem`
    hideControl()
})

