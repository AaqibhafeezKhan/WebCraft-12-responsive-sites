
document.querySelectorAll('.c_l8mfv3').forEach(logo => {
    logo.addEventListener('click', () => {
        document.querySelector('.c_jksyv7').style.display = 'block'
        document.querySelector('.c_dg6ea7').style.display = 'none'
        document.querySelector('.c_w0v4mx').style.display = 'none'
    })
})

document.querySelectorAll('.c_3149xz').forEach(loginBtn => {
    loginBtn.addEventListener('click', () => {
        document.querySelector('.c_jksyv7').style.display = 'none'
        document.querySelector('.c_dg6ea7').style.display = 'block'
        document.querySelector('.c_w0v4mx').style.display = 'none'
    })
})

document.querySelectorAll('.c_ib4mbj').forEach(signupBtn => {
    signupBtn.addEventListener('click', () => {
        document.querySelector('.c_jksyv7').style.display = 'none'
        document.querySelector('.c_dg6ea7').style.display = 'none'
        document.querySelector('.c_w0v4mx').style.display = 'flex'
    })
})



const dropdownItems = document.querySelectorAll('.c_yak0jr')

if(window.innerWidth < 1000) {
    const menuIcon = document.querySelector('.c_1amki4')
    const nav-top = document.querySelector('.c_38tdjn')
    
    menuIcon.addEventListener('click', () => {
        nav-top.classList.toggle('c_fp8nhq')

        if(!nav-top.classList.contains('c_fp8nhq')) {
            document.querySelectorAll('.c_pee7w9').forEach(dropdown => {
                dropdown.style.left = '-20rem'
            })
        }
    })

    document.querySelectorAll('.c_gp952c').forEach(link => {
        link.addEventListener('click', () => {
            link.nextElementSibling.style.left = '0'
        })
    })

    document.querySelectorAll('.c_debzxu').forEach(headingLink => {
        headingLink.addEventListener('click', () => {
            headingLink.parentElement.parentElement.style.left = '-20rem'
        })
    })
} else {
    dropdownItems.forEach(dropdownItem => {
        dropdownItem.addEventListener('mouseover', () => {
            dropdownItem.lastElementChild.style.cssText = 'opacity: 1; visibility: visible'
            document.querySelector('.c_9iagiz').style.background = 'linear-gradient(to right, #066399, #2f8fdf, #066399)'
            dropdownItem.firstElementChild.firstElementChild.style.transform = 'rotate(180deg)'
        })
        dropdownItem.addEventListener('mouseout', () => {
            dropdownItem.lastElementChild.style.cssText = 'opacity: 0; visibility: hidden'
            document.querySelector('.c_9iagiz').style.background = 'none'
            dropdownItem.firstElementChild.firstElementChild.style.transform = 'rotate(0)'
        })
    })
}

window.addEventListener('resize', () => {
    window.location.reload()
})

