const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

// Functionality Check

console.log('project wired!');

// Anchor Tags

const aTags = document.querySelectorAll('a');
aTags.forEach((currentValue, index) => {
  currentValue.textContent = siteContent.nav['nav-item-' + (index + 1)];
  currentValue.classList.add('italic');
});

// Logo

const logoImg = document.getElementById('logo-img');
logoImg.setAttribute('src', 'http://localhost:9000/img/logo.png');

// Call to Action Update

const heading1 = document.querySelector('.cta h1');
heading1.textContent = siteContent.cta['h1'];

const button1 = document.querySelector('.cta button');
button1.textContent = siteContent.cta['button'];

// Main Content

const mainContent = document.querySelector('.main-content');
const header4 = mainContent.querySelectorAll('h4');
const mainp = mainContent.querySelectorAll('p');

// go through each h4
// for each h4 go through the keys in main content
// if key ends in h4
// set current h4 to the value of the h4 key who's index matches the h4; i.e. match first h4 tag to first h4 description and so on; 

for (let i = 0; i < header4.length; i++){
  for(let key in siteContent['main-content']) {
    if(key.slice(-3) === '-h4'){ 
      header4[i].textContent = Object.values(siteContent['main-content'])[i*2];
    }
  };
}

for (let p = 0; p < mainp.length; p++){
  for(let key in siteContent['main-content']) {
    if(key.slice(-8) === '-content'){ 
      mainp[p].textContent = Object.values(siteContent['main-content'])[(p * 2) + 1];
    }
  };
}


// CTA Code Snippet img

const codeImg = document.getElementById('cta-img');
codeImg.setAttribute('src', 'http://localhost:9000/img/cta.png');


// Middle Snippet img

const midImg = document.getElementById('middle-img');
midImg.setAttribute('src', 'http://localhost:9000/img/accent.png');


// Contact Section
// Contact Header:
const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

// Contact Info:
const contactSection = document.querySelectorAll('.contact p');

for (let i = 0; i < contactSection.length; i++){
  for(let key in siteContent['contact']) {
    if(key.slice(-3) !== '-h4'){ 
      contactSection[i].textContent = Object.values(siteContent['contact'])[(i + 1)];
    }
  };
}

// Footer

const copyright = document.querySelector('footer a');
copyright.classList.add('bold');
copyright.classList.remove('italic');
copyright.textContent = 'Copyright Great Idea! 2021';