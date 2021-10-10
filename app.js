// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// 1 ********** set date ************
const date = document.getElementById("date");
//console.log(date);
date.innerHTML = new Date().getFullYear();

// 2 ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  /* Old Way not recommanded because it's kind of static 'if wa add another link we shold resize height in .show-links > 200px' => hadr coded 
  linksContainer.classList.toggle("show-links");
  */
  // best way is get the dynamic height
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  //console.log(containerHeight);
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
    // here in the loading page if we clicked in nav btn and this size is 0 we will show the links using there dynamic height
  } else {
    linksContainer.style.height = 0;
    // here when we close the links we will set the height = 0 to hide the link elements
  }
  // here the calculation of the height is dynamic and even if wa add another LI the height of it will add auto the the whole links using  const linksHeight = links.getBoundingClientRect().height;
});

// 3 ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", () => {
  //console.log(window.pageYOffset);
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  //for the nav bar
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // for the top link
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// 4  ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function (link) {
  link.addEventListener("click", (e) => {
    // prevent default stop going to the section
    e.preventDefault();
    // navigat to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1); // slice(1) = skipe the 0 index which contains here "#" and shownig the id name only
    //console.log(id);
    const element = document.getElementById(id);
    // calculate the height
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight; // offsetTop get the top positionof my element in px
    // for bigg screen
    if (!fixedNav) {
      position = position - navHeight;
    }
    // for small screen
    if (navHeight > 82) {
      position = position + containerHeight;
    }
    console.log(position);
    window.scrollTo({
      left: 0,
      top: position,
    });
    // hide / close the nav bar the contain link
    linksContainer.style.height = 0;
  });
});
