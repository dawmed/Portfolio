// JavaScript for Flex Slider (using FlexSlider library)

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide", // or "fade"
    slideshowSpeed: 5000, // Adjust slideshow speed
    animationSpeed: 600, // Adjust animation speed
    controlNav: true, // Show navigation controls
    directionNav: true // Show previous/next arrows
  });
});

// JavaScript for Accordion functionality

const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click',   
 () => {
    const content = header.nextElementSibling;
    content.classList.toggle('active');   


    const allContents = document.querySelectorAll('.accordion-content');
    allContents.forEach(c => {
      if (c !== content) {
        c.classList.remove('active');
      }
    });
  });
});

// JavaScript for Counter animations

const counters = document.querySelectorAll('.counter');

function countUp() {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const inc = target / 200; // Adjust speed

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(countUp, 1);
    } else {
      counter.innerText = target;
    }
  });
}

// Trigger counter animation when the section is in view
// (You'll need to add a way to detect when the section is in view, 

// Example with Intersection Observer
const counterSection = document.querySelector('.counter-section');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting)   
 {
        countUp();
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5 // Adjust threshold as needed
  }
);

observer.observe(counterSection);
