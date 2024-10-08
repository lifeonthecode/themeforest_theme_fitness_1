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
const clickx = document.getElementById('pencet');

clickx.addEventListener('click', () => {
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


// current page active js code 
const nav_links = document.querySelectorAll('.menu_bar');
const activePage = (links) => {
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        link.addEventListener('click', () => {
            links.forEach(element => {
                if (element.className == 'active') {
                    element.classList.remove('active');
                }
            });
            links[i].classList.add('active');
            // mobile menu show and hidden  
            clickx.classList.toggle('Diam');
            mobile_menu_container.classList.toggle('toggle');
            mobile_menu_wrapper.classList.toggle('toggle');
        })

    }
}

activePage(nav_links[0].childNodes)
activePage(nav_links[1].childNodes)


// scroll to back top 
let intervalId = 0;
const scroll_to_top = document.querySelector('.scroll_to_top');
const back_to_top = document.querySelector('.back_to_top');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 350) {
        back_to_top.classList.add('show')
    } else {
        back_to_top.classList.remove('show')
    }
});

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






// current time 
const currentYear = document.getElementById('current_year');
const year = new Date().getFullYear();
currentYear.innerText = year;











