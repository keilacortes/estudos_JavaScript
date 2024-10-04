const slide1 = document.querySelector('.slide1')
const slide2 = document.querySelector('.slide2')
const slide3 = document.querySelector('.slide3')
const slide4 = document.querySelector('.slide4')

const toClick1 = document.getElementById('click1')
const toClick2 = document.getElementById('click2')
const toClick3 = document.getElementById('click3')
const toClick4 = document.getElementById('click4')
const toClick5 = document.getElementById('click5')
const toClick6 = document.getElementById('click6')


function sld1 () {
    if (slide1.classList.contains('hidden')){
        slide1.classList.remove('hidden')
        slide2.classList.add('hidden')
        slide3.classList.add('hidden')
        slide4.classList.add('hidden')
    }
}

function sld2 () {
    if(slide2.classList.contains('hidden')){
        slide2.classList.remove('hidden')
        slide1.classList.add('hidden')
        slide3.classList.add('hidden')
        slide4.classList.add('hidden')
    }
}

function sld3 () {
    if(slide3.classList.contains('hidden')){
        slide3.classList.remove('hidden')
        slide1.classList.add('hidden')
        slide2.classList.add('hidden')
        slide4.classList.add('hidden')
    }
}

function sld4 () {
    if(slide4.classList.contains('hidden')){
        slide4.classList.remove('hidden')
        slide1.classList.add('hidden')
        slide2.classList.add('hidden')
        slide3.classList.add('hidden')
    }
}

toClick1.addEventListener('click', sld2)
toClick2.addEventListener('click', sld1)
toClick3.addEventListener('click', sld3)
toClick4.addEventListener('click', sld2)
toClick5.addEventListener('click', sld4)
toClick6.addEventListener('click', sld3)