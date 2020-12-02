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
//Create global list variable
const listNav = document.querySelector("#navbar__list");
// Create sections NodeList to loop over when needed
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// create navbar in the header section
function navConstructor() {
    // listString variable to concatenate with nav items
    let listString = "";
    //loop over sections NodeList
    for (const section of sections){

        const section_ID = section.id;
        const section_Data_Nav = section.dataset.nav;
        
        listString += `<li><a class = "menu__link" href="#${section_ID}">${section_Data_Nav}</a></li>`;
    }
    //populating the navbar
    listNav.innerHTML = listString;
}

navConstructor();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
function scrollOnClick() {

    for(const section of sections){

        const scrolltoSection = section.id;

        section.addEventListener("click",function(){

            scrolltoSection.scrollIntoView({
                behavior: 'smooth'
            });

        });

    }
scrollOnClick();


}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


