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
//Scrolls the page up upon reload (currently not fully functional)
function scrollOnRefresh(){
    
    window.onbeforeunload = function () {

    window.scrollTo(0,0);

}
}
scrollOnRefresh();
/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// create navbar in the header section
function navConstructor() {
    // listString variable to concatenate with nav items
    let listString = "";

    //loop over sections NodeList (elegant way)
    for (const section of sections) {

        
        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;

        listString += `<li><a class = "menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;
    }
    //populating the navbar
    listNav.innerHTML = listString;
}

navConstructor();

/* A long way... 

function navConstructor() {
    
    
    //loop over sections NodeList
    for (const section of sections) {
        
        //construct every part in chunks and append them

        const sectionDataNav = section.dataset.nav;
        const sectionID = section.id;
        const liItem = document.createElement("li");
        const anchorItem = document.createElement("a");
        anchorItem.classList.add("menu__link");
        anchorItem.setAttribute("href", `#${sectionID}`);
        anchorItem.textContent = sectionDataNav;
        liItem.appendChild(anchorItem);
        listNav.appendChild(liItem); 
        

    }
    return listNav;
    
}
navConstructor();

*/

// Add class 'active' to section when near top of viewport
function sectionInView () {
    for (const section of sections) {
        window.addEventListener("scroll", function () {
              const currentSection = section.getBoundingClientRect();
            if (currentSection.top <= 100 && currentSection.bottom >= 200) {
                section.classList.add("your-active-class");
                } else {
                section.classList.remove("your-active-class");
            }
        });
    }
}
sectionInView();

// Scroll to anchor ID using scrollTO event
function scrollOnClick() {
    const menuLink = document.querySelectorAll(".menu__link")
    for (const navLink of menuLink) {
        const navData = navLink.hash;
        const subString = document.getElementById(navData.substring(1));
        navLink.addEventListener("click", function(event) {
            event.preventdefault();
            subString.scrollIntoView();

        });
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