window.addEventListener('DOMContentLoaded', () => {
 
// github Profile card
  async function fetchGitHubFollowers(username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      document.getElementById("github-followers").textContent = data.followers;
    } catch (err) {
      console.error("GitHub API Error:", err);
      document.getElementById("github-followers").textContent = "N/A";
    }
  }

  // Replace with your GitHub username
  fetchGitHubFollowers("punitkaswan");



});




    // Tech grid
    
  document.addEventListener('DOMContentLoaded', () => {
    const spans = document.querySelectorAll('.tech-grid span');
    spans.forEach((span, index) => {
      span.style.opacity = 0;
      setTimeout(() => {
        span.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        span.style.opacity = 1;
        span.style.transform = 'translateY(0)';
      }, index * 100);
      span.style.transform = 'translateY(20px)';
    });
  });

  // testimonials

  const testimonials = document.querySelectorAll('.testimonial');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.3 });

  testimonials.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    observer.observe(card);
  });

  //learning goals

const goalItems = document.querySelectorAll('.learning-goals li');
  const goalObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.2 });

  goalItems.forEach(item => {
    item.style.opacity = 0;
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.6s ease';
    goalObserver.observe(item);
  });


  //Gallery

  const galleryItems = document.querySelectorAll('.gallery-item');
  const galleryObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.2 });

  galleryItems.forEach(item => {
    item.style.opacity = 0;
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'all 0.5s ease-out';
    galleryObserver.observe(item);
  });



// Footer and chat button

  // Show IP using a public API
  fetch('https://api.ipify.org?format=json')
    .then(res => res.json())
    .then(data => {
      document.getElementById('ip').textContent = data.ip;
    })
    .catch(() => {
      document.getElementById('ip').textContent = 'Unavailable';
    });

  // Show current datetime and last update
function updateFooterTime() {
  const now = new Date();

  // Format date as DD/MM/YYYY
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  // Get time in local format
  const formattedTime = now.toLocaleTimeString();

  // Update DOM elements
  document.getElementById('datetime').textContent = `${formattedDate}, ${formattedTime}`;
  document.getElementById('last-update').textContent = formattedDate;
}

updateFooterTime();
setInterval(updateFooterTime, 1000); // Update every 1 seconds



  // copyright year
   document.getElementById("year").textContent = new Date().getFullYear();






  // Loader + Menu Toggle

  // Remove loader once page fully loads
  window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });

  // Toggle mobile menu
 const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    // Toggle the icon text
    menuToggle.textContent = navLinks.classList.contains("show") ? "✖" : "☰";
  });

  // Optional: Close menu when any link is clicked
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
      menuToggle.textContent = "☰";
    });
  });
 


// timeline camel index page and project page


  const camel = document.querySelector('.camel');
  const tolls = document.querySelectorAll('.toll');

  function updateCamelPosition() {
    let scrollY = window.scrollY;
    let closest = null;
    let closestDistance = Infinity;

    tolls.forEach(toll => {
      const rect = toll.getBoundingClientRect();
      const distance = Math.abs(rect.top - window.innerHeight / 2);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = toll;
      }
    });

    if (closest) {
      camel.style.top = closest.style.top;
    }
  }

  window.addEventListener('scroll', updateCamelPosition);
  window.addEventListener('load', updateCamelPosition);



  


  




  // github contributors
  async function loadContributors() {
  const container = document.getElementById('contributor-cards');
  const contributorsUrl = 'https://api.github.com/repos/punitkaswan/punit/contributors';

  try {
    const response = await fetch(contributorsUrl);
    const contributors = await response.json();

    for (const contributor of contributors) {
      // Fetch full user profile to get name
      const userResponse = await fetch(contributor.url);  // this is the /users/:username API
      const userData = await userResponse.json();

      const card = document.createElement('div');
      card.className = 'contributor-card';
      card.innerHTML = `
        <img src="${userData.avatar_url}" alt="${userData.login}">
        <h3>${userData.name ? userData.name : 'Name not available'}</h3>
        <p>@${userData.login}</p>
        <a href="${userData.html_url}" target="_blank">View Profile</a>
      `;
      container.appendChild(card);
    }
  } catch (error) {
    console.error('Error fetching contributors:', error);
    container.innerHTML = '<p>Unable to load contributors at this time.</p>';
  }
}

document.addEventListener('DOMContentLoaded', loadContributors);




/* Success Popup (initially hidden) */
.success-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.success-popup .success-card {
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  position: relative;
  max-width: 400px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  animation: fadeIn 0.3s ease;
}

.success-popup .decor-img {
  max-width: 100%;
  height: auto;
  margin: 10px 0;
}

.success-popup .close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.hidden {
  display: none;
}

@keyframes fadeIn {
  from {opacity: 0; transform: scale(0.95);}
  to {opacity: 1; transform: scale(1);}
}





