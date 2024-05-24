import { useState } from 'react'
import './App.css'

//comps
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import About from './components/about/About'
import Roadmap from './components/roadmap/Roadmap'
import Tokenomics from './components/tokenomics/Tokenomics'
import Faq from './components/faq/Faq'
import Footer from './components/footer/Footer'

function App() {

  (function() {
    'use strict';
   
    AOS.init();

        /*----------------------------
   Sticky menu active
   ------------------------------ */
   document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 250) {
          document.getElementById('navbar_top').classList.add('fixed-top');
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 




})();


const countDownDate = new Date("May 31, 2024 00:00:00").getTime();

const x = setInterval(function() {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const Days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const Hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const Mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const Sec = Math.floor((distance % (1000 * 60)) / 1000);

  // Add leading zero if needed
  const paddedDays = Days < 10 ? "0" + Days : Days;
  const paddedHours = Hours < 10 ? "0" + Hours : Hours;
  const paddedMins = Mins < 10 ? "0" + Mins : Mins;
  const paddedSec = Sec < 10 ? "0" + Sec : Sec;

  document.getElementById("days").innerHTML = paddedDays + " ";
  document.getElementById("hours").innerHTML = paddedHours + " ";
  document.getElementById("minutes").innerHTML = paddedMins + " ";
  document.getElementById("seconds").innerHTML = paddedSec + " ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 0); // Update every 1000 milliseconds (1 second)





function handleCopyToClipboard(index) {
    var textToCopy = document.getElementById('textToCopy' + index).value;
    navigator.clipboard.writeText(textToCopy)
        .then(function() {
            var copyIcon = document.querySelector('.copy' + index);
            var checkedIcon = document.querySelector('.checked' + index);
            copyIcon.style.display = 'none';
            checkedIcon.style.display = 'inline';
        })
        .catch(function(err) {
            console.error('Failed to copy to clipboard: ', err);
        });
}


document.addEventListener('DOMContentLoaded', function() {
    var headerHeight = document.querySelector('header').offsetHeight;
    var offset = headerHeight + 2;
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', function() {
        var scrollPos = window.scrollY + offset;
        sections.forEach(function(section) {
            var top = section.offsetTop;
            var bottom = top + section.offsetHeight;
            if (scrollPos >= top && scrollPos < bottom) {
                navLinks.forEach(function(navLink) {
                    navLink.parentElement.classList.remove('active');
                    if (navLink.getAttribute('href').substring(1) === section.id) {
                        navLink.parentElement.classList.add('active');
                    }
                });
            }
        });
    });

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = navLink.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);
            var targetPos = targetSection.offsetTop - headerHeight - 2;
            window.scrollTo({
                top: targetPos,
                behavior: 'smooth'
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('header');
  const navbarToggler = document.querySelector('.navbar-toggler');
  const sticky = header.offsetTop;

  window.addEventListener('scroll', function() {
      if (window.pageYOffset > sticky) {
          header.classList.add('sticky');
      } else {
          header.classList.remove('sticky');
      }
  });

  navbarToggler.addEventListener('click', function() {
      header.classList.toggle('toggled');
  });
});



  return (
    <>
    <Navbar />
    <Banner />
    <About />
    <Roadmap />
    <Tokenomics />
    <Faq />
    <Footer />
    </>
  )
}

export default App
