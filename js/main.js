// cursor pointer js 
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});

// menu bar icon 
const mobile_menu_container = document.querySelector('.mobile_menu_container')
const mobile_menu_wrapper = document.querySelector('.mobile_menu_wrapper')
const clickx= document.getElementById('pencet');

clickx.addEventListener('click', () =>{
  clickx.classList.toggle('Diam');
  mobile_menu_container.classList.toggle('toggle');
  mobile_menu_wrapper.classList.toggle('toggle');
});







// header section show 
const header_section = document.querySelector('.header_section')
window.addEventListener("scroll", () => {
    if (window.scrollY > 250) {
        header_section.classList.add('is-sticky');
    } else {
        header_section.classList.remove('is-sticky');
    }
});




// current page js 
const links = document.querySelectorAll('.menu_bar li a');
for(let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', (e) => {
        links.forEach(element => {
            if(element.className === 'active') {
                element.classList.remove('active');
            }
        });
        links[i].classList.add('active');

        // mobile menu show and hidden 
        clickx.classList.toggle('Diam');
        mobile_menu_container.classList.toggle('toggle');
        mobile_menu_wrapper.classList.toggle('toggle');
    })
};


// scroll to back top 
let intervalId = 0;
const scroll_to_top = document.querySelector('.scroll_to_top');
const back_to_top = document.querySelector('.back_to_top');
window.addEventListener('scroll', () => {
    if(window.scrollY >= 350) {
        back_to_top.classList.add('show')
    }else {
        back_to_top.classList.remove('show')
    }
} );

function scrollStep() {
    if (window.scrollY === 0) {
        clearInterval(intervalId);
    }
    window.scroll(0, window.scrollY - 50);
}

function scrollToTop() {
    // Call the function scrollStep() every 16.66 millisecons
    intervalId = setInterval(scrollStep, 16.66);
}
scroll_to_top.addEventListener('click', scrollToTop);




// slider js 
const sliderContainer = document.querySelector('.client_slider_container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.slider-up-button')
const downButton = document.querySelector('.slider-down-button')
const slidesLength = slideRight.querySelectorAll('.right_slider_item').length

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 50}vh`;

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}



// current time 
const currentYear = document.getElementById('current_year');
const year = new Date().getFullYear();
currentYear.innerText = year;











