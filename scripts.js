// Project Data
const projects = [
  {
    title: "Online Retail Sales Analysis",
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    details: [
      "<strong><h2>📌 Project Overview:</h2></strong><br>Analyzed a large online retail dataset to uncover sales trends, identify high-value customers, and support business strategy through data-driven insights.<br><br>",
      "<strong><h4>🛢️ Dataset:</h4></strong><br>Size: 500,000+ rows and 4.3 million values.<br>Contains transactional data including invoices, stock codes, descriptions, quantities, prices, and countries.<br><br>",
      "<strong><h4>📝 Key Steps:</h4></strong><br><br><strong>➤  Data Cleaning & Preprocessing:</strong><br>- Handled missing values and removed outliers to ensure data accuracy.<br>- Merged relevant columns and standardized stock descriptions.<br><br>",
      "<strong>➤ Feature Engineering:</strong><br>- Created new columns: total price, months, hours, and weekdays for enhanced analysis.<br><br>",
      "<strong>➤ Visualizations:</strong><br>- Analyzed peak sales hours, sales distribution by weekdays, monthly sales trends, and top 5 products and countries.<br>- Created interactive charts using Matplotlib and Seaborn.<br><br>",
      "<strong>➤ Business Analytics:</strong><br>- Performed RFM (Recency, Frequency, Monetary) analysis to segment customers and identify high-value cohorts.<br>- Conducted churn analysis to track customer retention patterns and predict churn risk."
    ],
    images: [
      { src: "Assets/project1_img1.png", caption: "Online Retail Sales Dataset" },
      { src: "Assets/project1_img2.png", caption: "Installation of Dataset" },
      { src: "Assets/project1_img3.png", caption: "Churn Analysis" },
      { src: "Assets/project1_img4.png", caption: "RFM Analysis" }
    ],
    github: "https://github.com/Vighneshwarrao/Online-Retail-Sales-Analysis"
  },
  {
    title: "IOT Bottleneck Detection",
    tools: ["Python", "SQL", "HTML", "CSS", "JavaScript"],
    details: [
      "<h2>📌 Project Overview:</h2> This project leverages a <strong>hybrid deep learning model (CNN-LSTM)</strong> to accurately detect and analyze <strong>bottlenecks in IoT networks</strong>.",
      "<h4>🛢️  Dataset:</h4> - <strong>N-BaIoT Dataset:</strong> A real-world IoT dataset containing network traffic data from various IoT devices.",
      "<h4>📝 Key Steps:</h4><br><strong>➤ Data Preprocessing & Feature Engineering:</strong><br>- Collected and cleaned network traffic logs to ensure high-quality data.",
      "<strong>➤ Hybrid Deep Learning Model (CNN-LSTM):</strong><br>- Achieved <strong>98% accuracy</strong> in identifying congestion patterns and anomalies."
    ],
    images: [
      { src: "Assets/project2_img1.png", caption: "Homepage" },
      { src: "Assets/project2_img2.png", caption: "Prediction of Attack Type" },
      { src: "Assets/project2_img3.png", caption: "Architecture" }
    ]
  },
  {
    title: "Cricket Analytics",
    tools: ["Python", "BeautifulSoup", "Selenium", "Pandas", "FastAPI"],
    details: [
      "<h2>📌 Project Overview:</h2> This project scrapes Indian cricket player statistics from <strong>ESPN Cricinfo</strong>, preprocesses the data, and constructs India's <strong>all-time playing XI</strong>.",
      "<h4>🔍 Data Scraping & Preprocessing:</h4> - Used <strong>BeautifulSoup & Selenium</strong> to scrape player statistics.",
      "<h4>📊 Feature Engineering:</h4> - Designed a <strong>weighted scoring system</strong> to evaluate players.",
      "<h4>🥇 Player Ranking & Team Selection:</h4> - Built a flexible backend using <strong>FastAPI</strong> to generate format-specific teams."
    ],
    images: [
      { src: "Assets/project3_img1.png", caption: "Dataset" },
      { src: "Assets/project3_img2.png", caption: "Weighted Scoring System" },
      { src: "Assets/project3_img3.png", caption: "Playing XI" }
    ],
    github: "https://github.com/Vighneshwarrao/cricket-analytics",
    live: "https://vighneshwarrao.github.io/CricketTeam/"
  }
];

// Initialize libraries
document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true
  });

  // Initialize GSAP
  gsap.registerPlugin(ScrollTrigger);
  
  // Custom cursor
  const cursor = document.querySelector('.cursor');
  const cursorFollower = document.querySelector('.cursor-follower');

  document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0
    });
    gsap.to(cursorFollower, {
      x: e.clientX - 15,
      y: e.clientY - 15,
      duration: 0.1
    });
  });

  // Text reveal animation
  const splitTypes = document.querySelectorAll('.reveal-text');
  splitTypes.forEach(text => {
    const split = new SplitType(text, { types: 'words' });
    gsap.from(split.words, {
      scrollTrigger: {
        trigger: text,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
        markers: false
      },
      opacity: 0.2,
      stagger: 0.1,
      duration: 0.5
    });
  });

  // Project slider
  const projectSlider = new Swiper('.project-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });

  // Modal functionality
  const modal = document.getElementById('project-modal');
  const modalClose = document.querySelector('.modal-close');
  const projectButtons = document.querySelectorAll('[data-project]');

  function openModal(projectId) {
    const project = projects[projectId];
    document.getElementById('modal-title').textContent = project.title;
    
    // Set up gallery
    const galleryContainer = document.getElementById('modal-gallery-container');
    galleryContainer.innerHTML = project.images
      .map(img => `
        <div class="swiper-slide">
          <img src="${img.src}" alt="${img.caption}">
          <div class="caption">${img.caption}</div>
        </div>
      `).join('');

    // Initialize modal gallery slider
    new Swiper('.modal-gallery', {
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });

    // Set up tools
    document.getElementById('tools-list').innerHTML = project.tools
      .map(tool => `<li>${tool}</li>`)
      .join('');

    // Set up details
    document.getElementById('project-details').innerHTML = project.details.join('');

    // Set up buttons
    const githubLink = document.getElementById('github-link');
    const liveLink = document.getElementById('live-link');
    
    if (project.github) {
      githubLink.href = project.github;
      githubLink.style.display = 'inline-flex';
    } else {
      githubLink.style.display = 'none';
    }

    if (project.live) {
      liveLink.href = project.live;
      liveLink.style.display = 'inline-flex';
    } else {
      liveLink.style.display = 'none';
    }

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  projectButtons.forEach(button => {
    button.addEventListener('click', () => {
      openModal(button.dataset.project);
    });
  });

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
});