
const menu = document.querySelector('.c_mkthy7')
const nav-top = document.querySelector('.c_3pxgwb')

menu.addEventListener('click', () => {
    nav-top.classList.toggle('c_advksl')
    menu.classList.toggle('c_advksl')
})



const video = document.querySelector('.c_pege9y')
const btn = document.querySelector('.c_z62gxv i')
const bar = document.querySelector('.c_mm96lc')

const playPause = () => {
    if(video.paused) {
        video.play()
        btn.className = 'far fa-pause-circle'
        video.style.opacity = '.7'
    } else {
        video.pause()
        btn.className = 'far fa-play-circle'
        video.style.opacity = '.3'
    }
}

btn.addEventListener('click', () => {
    playPause()
})

video.addEventListener('timeupdate', () => {
    const barWidth = video.currentTime / video.duration
    bar.style.width = `${barWidth * 100}%`
    if(video.ended) {
        btn.className = 'far fa-play-circle'
        video.style.opacity = '.3'
    }
})



var swiper = new Swiper('.c_6kfnxo', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 70,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });
