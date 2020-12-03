/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
// Create global list variable
const listNav = document.querySelector("#navbar__list"),
    // Create sections NodeList to loop over when needed
    sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
// Scrolls the page up upon reload
function scrollOnRefresh(){
    
    window.onbeforeunload = function () {

    window.scrollTo(0,0);

};
}
scrollOnRefresh();

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// Create navbar in the header section
function navConstructor () {

    // ListString variable to concatenate with nav items
    let listString = "";
    // Loop over sections NodeList

    for (const section of sections) {

        const sectionID = section.id,
            sectionDataNav = section.dataset.nav;

        listString += `<li><a class = "menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;

    }
    // Populating the navbar
    listNav.innerHTML = listString;

}

navConstructor();

// Add class 'active' to section when near top of viewport
function sectionInView () {

    for (const section of sections) {

        // Listener for scroll to make the section and link active
        window.addEventListener(
            "scroll",
            () => {

                const currentSection = section.getBoundingClientRect();

                if (currentSection.top <= 100 && currentSection.bottom >= 200) {

                    section.classList.add("your-active-class");

                } else {

                    section.classList.remove("your-active-class");

                }

            }
        );

    }

}
sectionInView();

// Scroll to anchor ID using scrollTO event
function scrollOnClick () {

    const menuLink = document.querySelectorAll(".menu__link");

    for (const navLink of menuLink) {

        const navData = navLink.hash,
            subString = document.getElementById(navData.substring(1));

        navLink.addEventListener(
            "click",
            () => {

                subString.scrollIntoView();

            }
        );

    }

}
scrollOnClick();


/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active