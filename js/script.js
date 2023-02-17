const global = {
  currentPage: window.location.pathname,
};

console.log(global.currentPage);

//Highlight active link
function highlightActiveLink() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active');
    }
  });
}

// init app
function init() {
  switch (global.currentPage) {
    case '/':
    case '/index.html':
      console.log('Home');
      break;
    case '/shows.html':
      console.log('Shows');
      break;
    case '/movies-details.html':
      console.log('Movie Details');
    case '/tv-details.html':
      console.log('TV Details');
    case '/search.html':
      console.log('Search');
  }

  highlightActiveLink();
}

document.addEventListener('DOMContentLoaded', init);
