document.getElementById('contact-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

document.getElementById('about-me-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('about-me').scrollIntoView({behavior:'smooth', block: 'start'})
})

document.getElementById('home-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('home-start').scrollIntoView({behavior:'smooth', block: 'start'})
})

