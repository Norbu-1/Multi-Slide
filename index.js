

// Select the first div where we want to update the content
const firstDivContent = document.querySelector('.content');

// Create an IntersectionObserver to detect when slides become visible
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Determine which slide is currently visible
      const visibleSlide = entry.target;

      // Change content of the first div based on the visible slide
      if (visibleSlide.classList.contains('slide-1')) {
        const firstSlide = document.querySelector('.svg-back');
        const secondSlide = document.querySelector('.svg-inside');


        firstSlide.style.backgroundColor = 'indigo';
        secondSlide.style.backgroundColor = 'indigo';
        firstDivContent.innerHTML = `<div class="circle-inside">
        <h1>25M+ Downloads</h1>
        <p>on appstore & google playstore</p>
      </div>
      <div class="left-side">
        <img
          src="./assets/world-communication-awards-for-best-digital-experience.png"
          alt=""
        />
        <h1>ABC 123</h1>
        <p>We are the best web development company in the world</p>
      </div>
      <div class="bottom-side">
        <p>View Case Study</p>
        <p>SKIP</p>
      </div>`;
      } else if (visibleSlide.classList.contains('slide-2')) {
        const firstSlide = document.querySelector('.svg-back');
        const secondSlide = document.querySelector('.svg-inside');


        firstSlide.style.backgroundColor = 'blue';
        secondSlide.style.backgroundColor = 'blue';
        firstDivContent.innerHTML = `
        <div class="circle-inside">
        <p>The Next Big</p>
        <h1>Blockchain</h1>
        <p class="lefty">Revolution</p>
      </div>
      <div class="left-sidey">
        <h1>ABC 234</h1>
        <p>We are the best web development company in the world</p>
      </div>
      <div class="bottom-side">
        <p>Coming Soon</p>
        <p>SKIP</p>
      </div>
        `;
      } else if (visibleSlide.classList.contains('slide-3')) {
        const firstSlide = document.querySelector('.svg-back');
        const secondSlide = document.querySelector('.svg-inside');


        firstSlide.style.backgroundColor = 'navy';
        secondSlide.style.backgroundColor = 'navy';
        firstDivContent.innerHTML = `
        <div class="circle-inside">
        <p>Powered by Advance</p>
        <img
        src="./assets/nasa-mobile-app.png"
        alt=""
        width="200px"
      />
        <p class="lefty">algorithms</p>
      </div>
      <div class="left-sidey">
      <h1>ABC 345</h1>
      <p>We are the best web development company in the world</p>
    </div>
    <div class="bottom-side">
      <p>Coming Soon</p>
      <p>SKIP</p>
    </div>
        `;
      }
      else if(visibleSlide.classList.contains('slide-4'))
      {
        const firstSlide = document.querySelector('.svg-back');
        const secondSlide = document.querySelector('.svg-inside');


        firstSlide.style.backgroundColor = 'rgb(15, 20, 46)';
        secondSlide.style.backgroundColor = 'rgb(15, 20, 46)';
        firstDivContent.innerHTML =  `
        <div class="circle-inside">
        <p>Redefining</p>
        <h1>UX Strategy</h1>
        <p class="lefty">and UI design</p>
      </div>
      <div class="left-sidey">
        <h1>ABC 456</h1>
        <p>We are the best web development company in the world</p>
      </div>
      <div class="bottom-side">
        <p>View Case Study</p>
        <p>SKIP</p>
      </div>
        `;
      }
      else if(visibleSlide.classList.contains('slide-5'))
      {
        const firstSlide = document.querySelector('.svg-back');
        const secondSlide = document.querySelector('.svg-inside');


        firstSlide.style.backgroundColor = 'rgb(59, 87, 226)';
        secondSlide.style.backgroundColor = 'rgb(59, 87, 226)';
        firstDivContent.innerHTML =  `
        <div class="circle-inside">
        <p>Text Headline</p>
        <h1>Text Headline</h1>
        <p class="lefty">Footer headline</p>
      </div>
      <div class="left-sidey">
        <h1>ABC 567</h1>
        <p>We are the best web development company in the world</p>
      </div>
      <div class="bottom-side">
        <p>View Case Study</p>
        <p>SKIP</p>
      </div>
        `;
      }
      else if(visibleSlide.classList.contains('slide-6'))
      {const firstSlide = document.querySelector('.svg-back');
      const secondSlide = document.querySelector('.svg-inside');


      firstSlide.style.backgroundColor = 'navy';
      secondSlide.style.backgroundColor = 'navy';
        firstDivContent.innerHTML = `
        <div class="circle-inside">
        <p>Developing ERP Solution for</p>
        <h1>Text Headline</h1>
        <p class="lefty">in furniture industry</p>
      </div>
      <div class="left-sidey">
        <h1>ABC 678</h1>
        <p>Best since 2017</p>
        <p>We are the best web development company in the world</p>
      </div>
      <div class="bottom-side">
        <p>View Case Study</p>
        <p>SKIP</p>
      </div>
        `;
      }else if(visibleSlide.classList.contains('slide-7'))
      {
        const firstSlide = document.querySelector('.svg-back');
      const secondSlide = document.querySelector('.svg-inside');


      firstSlide.style.backgroundColor = 'rgb(64, 139, 64)';
      secondSlide.style.backgroundColor = 'rgb(64, 139, 64)';
        firstDivContent.innerHTML = `<div class="circle-inside">
        <p>Biggest Classifields</p>
        <h1>East Asia</h1>
        <p class="lefty">Countries</p>
      </div>
      <div class="left-side">
        <img
          src="./assets/mobile-app-of-the-year-by-entrepreneur.png"
          alt=""
        />
        <h1>ABC 23478</h1>
        <p>We are the best web development company in the world</p>
      </div>
      <div class="bottom-side">
        <p>Coming Soon</p>
        <p>SKIP</p>
      </div>`;
      }
      // Add conditions for other slides as needed
    }
  });
}, { threshold: 0 });

// Observe all slides within the ".drop" container
document.querySelectorAll('.drop > div').forEach(slide => {
  observer.observe(slide);
});

var counter=1;
setInterval(function(){
  document.getElementById('radio'+counter).checked=true
;
counter++;
if(counter>7)
{
  counter=1;
}
},5000)


