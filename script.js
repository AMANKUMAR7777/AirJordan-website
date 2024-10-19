window.onload = function() {
    var viewers = document.querySelectorAll('spline-viewer');
    viewers.forEach(function(viewer) {
        var shadowRoot = viewer.shadowRoot;
        if (shadowRoot) {
            var logo = shadowRoot.querySelector('#logo');
            if (logo) {
                logo.remove();
            }
        }
    });
};





    gsap.to(".head", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.25, // Animates each letter one after the other
      ease: "power2.out",
      delay: 0.5
    });

    gsap.fromTo(".head", {
      y: "100%"  // Starts from below
    }, {
      y: "0%",   // Animates upwards to its original position
      duration: 0.6,
      stagger: 0.25,
      ease: "power2.out",
      delay: 0.5
    });

    


//Paragraph animation

gsap.to("#page1 p", {
    opacity: 1,
    y: 0, // Moves it into place
    duration: 1,
    ease: "power3.out",
    delay: 0.5
  });

  // Animate the image scaling up and fading in
  gsap.to("#page1 p img", {
    opacity: 1,
    scale: 1, // Scale it up to its original size
    duration: 1,
    ease: "back.out(1.7)", // Add a slight "pop" effect
    delay: 1 // Delay slightly after the text
  });

  // Animate the span text with a fade-in
  gsap.to("#page1 p span", {
    opacity: 1,
    duration: 1.5,
    delay: 1.5, // Stagger this to animate later
    ease: "power2.out"
  });


  //shery.js

  Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.makeMagnet("a" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.makeMagnet("#page1 spline-viewer" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  
  Shery.makeMagnet("#page1 img" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });