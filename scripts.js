
const popupContainer = document.getElementById('popup-container');
const closeBtn = document.querySelector('.close-btn');
const carouselInner = document.getElementById('carousel-inner');
const toolsList = document.getElementById('tools-list');
const projectDetails = document.getElementById('project-details');
const projectTitle = document.getElementById('popup-title');
const projectButtons = document.querySelectorAll('.project-btn');

const projects = [
  {
    title: "Online Retail Sales Analysis",
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn","Jupyter Notebook"],
    details: ["<strong><h2>📌 Project Overview:</h2></strong><br>Analyzed a large online retail dataset to uncover sales trends, identify high-value customers, and support business strategy through data-driven insights.<br><br>",

      "<strong><h4>🛢️ Dataset:</h4></strong><br>Size: 500,000+ rows and 4.3 million values.<br>Contains transactional data including invoices, stock codes, descriptions, quantities, prices, and countries.<br><br>",

      "<strong><h4>📝 Key Steps:</h4></strong><br><br><strong>➤  Data Cleaning & Preprocessing:</strong><br>- Handled missing values and removed outliers to ensure data accuracy.<br>- Merged relevant columns and standardized stock descriptions.<br><br>",

      "<strong>➤ Feature Engineering:</strong><br>- Created new columns: total price, months, hours, and weekdays for enhanced analysis.<br><br>",

      "<strong>➤ Visualizations:</strong><br>- Analyzed peak sales hours, sales distribution by weekdays, monthly sales trends, and top 5 products and countries.<br>- Created interactive charts using Matplotlib and Seaborn.<br><br>",

      "<strong>➤ Business Analytics:</strong><br>- Performed RFM (Recency, Frequency, Monetary) analysis to segment customers and identify high-value cohorts.<br>- Conducted churn analysis to track customer retention patterns and predict churn risk."
    ],
    images: [
      { src: "Assets/project1_img1.png", caption: "Online Retail Sales Dataset" },
      { src: "Assets/project1_img2.png", caption: "Instalation of Dataset" },
      { src: "Assets/project1_img3.png", caption: "Churn Analysis" },
      { src: "Assets/project1_img4.png", caption: "RFM Analysis" }
    ],
    github: "https://github.com/Vighneshwarrao/Online-Retail-Sales-Analysis"
  },
  {
    title: "IOT Bottleneck Detection",
    tools: ["Python", "SQL", "HTML", "CSS", "Java Script"],
    details: ["<h2>📌 Project Overview:</h2> This project leverages a <strong>hybrid deep learning model (CNN-LSTM)</strong> to accurately detect and analyze <strong>bottlenecks in IoT networks</strong>. By combining <strong>Convolutional Neural Networks (CNNs)</strong> for feature extraction and <strong>Long Short-Term Memory (LSTM)</strong> networks for temporal pattern analysis, the system efficiently identifies congestion points that impact IoT device communication.<br><br>",

      "<h4>🛢️  Dataset:</h4> - <strong>N-BaIoT Dataset:</strong> A real-world IoT dataset containing network traffic data from various IoT devices.<br> - Contains <strong>multiple attack types</strong> (DDoS, Botnet, etc.) affecting IoT networks.<br> - Preprocessed to remove noise and extract relevant features for deep learning.<br><br>",

      "<h4>📝 Key Steps:</h4><br>",

      "<strong>➤ Data Preprocessing & Feature Engineering:</strong> <br> - Collected and cleaned network traffic logs to ensure high-quality data.<br> - Extracted time-series features (packet flow, transmission delays, device behavior patterns).<br> - Applied <strong>data normalization and encoding</strong> for deep learning compatibility.<br><br>",

      "<strong>➤ Hybrid Deep Learning Model (CNN-LSTM):</strong> <br>- <strong>CNN Layer:</strong> Extracts spatial features from network traffic sequences.<br> - <strong>LSTM Layer:</strong> Captures sequential dependencies to detect bottleneck trends.<br> - Achieved <strong>98% accuracy</strong> in identifying congestion patterns and anomalies.<br><br>",

      "<strong>➤ Real-time Bottleneck Detection & Prediction:</strong> <br> - Implemented a <strong>live monitoring system</strong> that detects anomalies in IoT traffic.<br> - Integrated <strong>SQL databases</strong> to store historical congestion patterns for trend analysis.<br> - Deployed <strong>a web-based dashboard (HTML, CSS, JavaScript)</strong> for interactive visualization of detected bottlenecks.<br><br>",
    ],
    images: [
      { src: "Assets/project2_img1.png", caption: "Homepage" },
      { src: "Assets/project2_img2.png", caption: "Prediction of Attack Type" },
      { src: "Assets/project2_img3.png", caption: "Architecture" }
    ]
  },
  {
    "title": "Cricket Analytics",
  "tools": ["Python", "BeautifulSoup", "Selenium", "Pandas", "NumPy", "FastAPI", "HTML", "CSS", "JavaScript", "Render","Github"],
  "details": [
    "<h2>📌 Project Overview:</h2> This project scrapes Indian cricket player statistics from <strong>ESPN Cricinfo</strong>, preprocesses the data, performs <strong>Exploratory Data Analysis (EDA)</strong>, and ranks players using a <strong>custom weighted scoring system</strong>. It then constructs India's <strong>all-time playing XI</strong> for different formats based on user-defined criteria for team composition.<br><br>",

    "<h4>🔍 Data Scraping & Preprocessing:</h4> - Used <strong>BeautifulSoup & Selenium</strong> to scrape player statistics from ESPN Cricinfo.<br> - Cleaned the data using <strong>Pandas and NumPy</strong>, handling missing values and inconsistencies.<br> - Consolidated scraped data into a single, structured format for further analysis.<br><br>",

    "<h4>📊 Feature Engineering:</h4> - Designed a <strong>weighted scoring system</strong> to evaluate players based on their international stats.<br> - Assigned scores based on batting, bowling, and all-rounder performance to fairly rank players.<br> - Tailored the scoring to ensure a balance across formats (Test, ODI, T20I).<br><br>",

    "<h4>💻 Exploratory Data Analysis (EDA):</h4> - Analyzed key player statistics to understand performance trends and distributions.<br> - Identified standout performers and created visual summaries (optional extension).<br> - Supported the scoring system with data-driven insights.<br><br>",

    "<h4>🥇 Player Ranking & Team Selection:</h4> - Ranked players based on the weighted scores across formats.<br> - Allowed user customization for selecting the number of <strong>batters, pacers, and spinners</strong> in the playing XI.<br> - Built a flexible backend using <strong>FastAPI</strong> to generate format-specific teams based on user input.<br><br>",

    "<h4>🌐 Web Application & Deployment:</h4> - Deployed the API to <strong>Render</strong> for public access.<br> - Developed a responsive frontend using <strong>HTML, CSS, and JavaScript</strong>.<br> - Connected the frontend to the FastAPI backend to create an interactive web app where users can generate India's best XI by choosing role-based counts.<br><br>"
    ],
    images: [
      { src: "Assets/project3_img1.png", caption: "Dataset" },
      { src: "Assets/project3_img2.png", caption: "Weighted Scoring System" },
      { src: "Assets/project3_img3.png", caption: "Playing XI" }
    ],
    github: "https://github.com/Vighneshwarrao/cricket-analytics",
    live:"https://vighneshwarrao.github.io/CricketTeam/"
  }
];

// Show popup and load data
projectButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const projectId = parseInt(e.target.dataset.projectId, 10);
    loadProjectData(projectId);
    popupContainer.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Disable scroll
  });
});

// Load project data into the modal
function loadProjectData(projectId) {
  const project = projects[projectId];

  // Set project title
  projectTitle.textContent = project.title;

  // Set tools used
  toolsList.innerHTML = project.tools.map(tool => `<li>${tool}</li>`).join('');

  // Set project details
  projectDetails.innerHTML = project.details.map(details => `<li>${details}</li>`).join('');

  // Set carousel images
  carouselInner.innerHTML = project.images
    .map((image, index) => `
      <div class="carousel-item ${index === 0 ? 'active' : ''}">
        <img src="${image.src}" class="d-block w-100" alt="${image.caption}">
        <div class="carousel-caption">${image.caption}</div>
      </div>
    `).join('');
  // Set GitHub button URL
  const githubButton = document.getElementById('github-button');
  if (project.github) {
    githubButton.href = project.github;
    githubButton.style.display = 'inline-block';
  } else {
    githubButton.style.display = 'none';
  }
    // Set Live button URL
    const liveButton = document.getElementById('live-btn');
    if (project.live) {
      liveButton.href = project.live;
      liveButton.style.display = 'inline-block';
    } else {
      liveButton.style.display = 'none';
    }
}

// Close popup
closeBtn.addEventListener('click', closePopup);
popupContainer.addEventListener('click', (e) => {
  if (e.target === popupContainer) closePopup();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closePopup();
});

function closePopup() {
  popupContainer.style.display = 'none';
  document.body.style.overflow = ''; // Re-enable scroll
}

