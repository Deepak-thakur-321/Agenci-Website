const counters = document.querySelectorAll(".counter")

function counter(element, endpoint, time) {
   let upto = 0
   let count = setInterval(update, time)

   function update() {
      element.innerHTML = ++upto + "+"
      if (upto === endpoint) {
         clearInterval(count)
      }
   }
}

const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         let target = parseInt(entry.target.getAttribute('data-target'));
         let time = parseInt(entry.target.getAttribute('data-time')) || 10;
         counter(entry.target, target, time);
         observer.unobserve(entry.target);
      }
   });
}, { threshold: 0.5 });

counters.forEach((counter) => {
   observer.observe(counter);
});







