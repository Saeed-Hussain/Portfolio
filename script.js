// script for responsive sidebar

var sidemenu = document.getElementById("sidemenu");
	function openmenu(){
		sidemenu.style.right = "0";
	}
	function closemenu(){
		sidemenu.style.right = "-350px";
	}
	var menuLinks = sidemenu.getElementsByTagName("a");
    	for (var i = 0; i < menuLinks.length; i++) {
    	menuLinks[i].addEventListener("click", closemenu);
    }


	
  
  
	




// script for about section tabs


var tablinks = document.getElementsByClassName("tab-links");
		var tabcontents = document.getElementsByClassName("tab-contents");

		function opentab(tabname){
			for(tablink of tablinks){
				tablink.classList.remove("active-link");
			}
			for(tabcontent of tabcontents){
				tabcontent.classList.remove("active-tab");
			}
			event.currentTarget.classList.add("active-link");
			document.getElementById(tabname).classList.add("active-tab");
		}



// script for sending gmail

const scriptURL = 'https://script.google.com/macros/s/AKfycbzPKKI4wMBF_jazh-tB4GhkGUv0wEk9QW01QKwXSIZmUtM53QeiYmD4lEBpo9lXHq__/exec';
	const form = document.forms['submit-to-google-sheet'];
	const msg = document.getElementById("msg");
  
	form.addEventListener('submit', e => {
	  e.preventDefault();
	  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		.then(response => {
		  msg.innerHTML = "Message sent to Gmail successfully";
		  setTimeout(() => msg.innerHTML = "", 5000);
		  form.reset();
		})
		.catch(error => {
		  console.error('Error!', error.message);
		  msg.innerHTML = "Error sending message";
		});
	});


// script for typed text

var typed = new Typed('#typed-text', {
    strings: ['Web Developer', 'Web Designer', 'Frontend Developer','Backend developer'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1500,
    loop: true
  });

 

  

// Scroll reveal option

  const scrollRevealOption = {
    distance: "60px",
    origin: "bottom",
    duration: 2000,
    viewFactor: 0.4
};

ScrollReveal().reveal(".logo-text, .nav i", {
    ...scrollRevealOption,
    origin: "top",
    delay: 1500,
    interval: 100,
});


ScrollReveal().reveal(".nav ul li", {
	...scrollRevealOption,
	origin: "top",
	interval: 100,
	delay: 1500,
  });
  
  ScrollReveal().reveal(".header-img", {
    ...scrollRevealOption,
	origin: "top",
    interval: 100,
	  delay: 1500,
});


ScrollReveal().reveal(".header-text", {
    ...scrollRevealOption,
	origin: "bottom",
    interval: 100,
	delay: 1500,
});

ScrollReveal().reveal(".abt-img", {
    ...scrollRevealOption,
	origin: "left",
    interval: 100,
});







ScrollReveal().reveal(".service1", {
    ...scrollRevealOption,
    viewFactor: 0.5
   
  });

  ScrollReveal().reveal(".service1 i", {
    ...scrollRevealOption,
    delay: 300,
  });

  ScrollReveal().reveal(".service1 h2", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".service1 p", {
    ...scrollRevealOption,
    delay: 700,
  });



// Portfolio SCROLLREVEAL

ScrollReveal().reveal(".delay1, .delay2, .delay3, .delay4", {
    ...scrollRevealOption,
	origin: "top",
	interval: 100,

});



  
ScrollReveal().reveal(".layer1, .layer2, .layer3, .layer4", {
    ...scrollRevealOption,
    interval: 100,
	delay: 500.
});


  
  
