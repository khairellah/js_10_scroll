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

// ********** smooth scroll ************
// select links
