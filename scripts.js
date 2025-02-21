
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
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    details: ["<strong><h4>Project Overview:</h4></strong><br>Analyzed a large online retail dataset to uncover sales trends, identify high-value customers, and support business strategy through data-driven insights.<br><br>",

      "<strong><h4>Dataset:</h4></strong><br>Size: 500,000+ rows and 4.3 million values.<br>Contains transactional data including invoices, stock codes, descriptions, quantities, prices, and countries.<br><br>",

      "<strong><h4>Key Steps:</h4></strong><br><br><strong>Data Cleaning & Preprocessing:</strong><br>- Handled missing values and removed outliers to ensure data accuracy.<br>- Merged relevant columns and standardized stock descriptions.<br><br>",

      "<strong>Feature Engineering:</strong><br>- Created new columns: total price, months, hours, and weekdays for enhanced analysis.<br><br>",

      "<strong>Visualizations:</strong><br>- Analyzed peak sales hours, sales distribution by weekdays, monthly sales trends, and top 5 products and countries.<br>- Created interactive charts using Matplotlib and Seaborn.<br><br>",

      "<strong>Business Analytics:</strong><br>- Performed RFM (Recency, Frequency, Monetary) analysis to segment customers and identify high-value cohorts.<br>- Conducted churn analysis to track customer retention patterns and predict churn risk."
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
    details: ["<h4>Project Overview:</h4> This project leverages a <strong>hybrid deep learning model (CNN-LSTM)</strong> to accurately detect and analyze <strong>bottlenecks in IoT networks</strong>. By combining <strong>Convolutional Neural Networks (CNNs)</strong> for feature extraction and <strong>Long Short-Term Memory (LSTM)</strong> networks for temporal pattern analysis, the system efficiently identifies congestion points that impact IoT device communication.<br><br>",

      "<h4>Dataset:</h4> - <strong>N-BaIoT Dataset:</strong> A real-world IoT dataset containing network traffic data from various IoT devices.<br> - Contains <strong>multiple attack types</strong> (DDoS, Botnet, etc.) affecting IoT networks.<br> - Preprocessed to remove noise and extract relevant features for deep learning.<br><br>",

      "<h4>Key Steps:</h4><br>",

      "<strong>1. Data Preprocessing & Feature Engineering:</strong> <br> - Collected and cleaned network traffic logs to ensure high-quality data.<br> - Extracted time-series features (packet flow, transmission delays, device behavior patterns).<br> - Applied <strong>data normalization and encoding</strong> for deep learning compatibility.<br><br>",

      "<strong>2. Hybrid Deep Learning Model (CNN-LSTM):</strong> <br>- <strong>CNN Layer:</strong> Extracts spatial features from network traffic sequences.<br> - <strong>LSTM Layer:</strong> Captures sequential dependencies to detect bottleneck trends.<br> - Achieved <strong>98% accuracy</strong> in identifying congestion patterns and anomalies.<br><br>",

      "<strong>3. Real-time Bottleneck Detection & Prediction:</strong> <br> - Implemented a <strong>live monitoring system</strong> that detects anomalies in IoT traffic.<br> - Integrated <strong>SQL databases</strong> to store historical congestion patterns for trend analysis.<br> - Deployed <strong>a web-based dashboard (HTML, CSS, JavaScript)</strong> for interactive visualization of detected bottlenecks.<br><br>",
    ],
    images: [
      { src: "Assets/project2_img1.png", caption: "Homepage" },
      { src: "Assets/project2_img2.png", caption: "Prediction of Attack Type" },
      { src: "Assets/project2_img3.png", caption: "Architecture" }
    ]
  },
  {
    title: "Project 3:Statistical Analysis of India’s All-Time Best Cricket XI",
    tools: ["Python", "BeautifulSoup", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
    details: ["<h4>Project Overview:</h4> This project scrapes cricket player statistics from <strong>ESPN Cricinfo</strong>, preprocesses the data, performs <strong>Exploratory Data Analysis (EDA)</strong>, and engineers new performance metrics. Using a <strong>weighted scoring system</strong>, it ranks players based on various Key Performance Indicators (KPIs) to construct India's <strong>all-time playing XI</strong> for Test, ODI, and T20I formats.<br><br>",

      "<h4>Data Scraping & Preprocessing:</h4> - Used <strong>BeautifulSoup & Requests</strong> to scrape player statistics (batting, bowling, fielding) from ESPN Cricinfo.<br> - Handled <strong>missing values, duplicate records, and inconsistencies</strong> in scraped data.<br> - Merged different data sources (batting, bowling, and fielding stats) into a structured dataset.<br><br>",

      "<h4>Feature Engineering:</h4> - Created  custom performance indexes  to better evaluate players:<br> - <strong>Batting Index:</strong> Combines runs, batting average, strike rate, and consistency.<br> - <strong>Bowling Index:</strong> Factors in wickets, bowling average, economy rate, and match impact.<br> - <strong>Fielding Index:</strong> Based on catches, stumpings, and fielding effectiveness.<br> - <strong>All-Rounder Score:</strong> A composite metric integrating batting, bowling, and fielding scores.<br><br>",

      "<h4>Exploratory Data Analysis (EDA):</h4> - Used <strong>Matplotlib & Seaborn</strong> to visualize player trends, comparing different eras.<br> - Analyzed correlations between <strong>strike rate & average for batsmen</strong>, and <strong>wickets & economy rate for bowlers</strong>.<br> - Identified <strong>players with high clutch performances</strong> in pressure situations.<br><br>",

      "<h4>Player Ranking & Team Selection:</h4> - Developed a  weighted ranking algorithm  to sort players by different metrics.<br> - Categorized players based on playing style (e.g., power hitters, anchor batsmen, aggressive bowlers).<br> - Constructed India's <strong>best XI</strong> for <strong>Test, ODI, and T20I</strong> formats.<br> - Created an  all-format team  considering performance across all game styles.<br><br>",
      "<h4>Power BI Dashboard:</h4> - Designed an  interactive Power BI dashboard  to visualize and compare player statistics.<br> - Created  filters and slicers  for easy selection based on format, era, and performance metrics.<br> - Integrated  heatmaps, bar charts, and scatter plots  for performance trends.<br> - Provided  drill-down capabilities  to analyze individual players in-depth.<br><br>"
    ],
    images: [
      { src: "project3_img1.png", caption: "Dataset" },
      { src: "project3_img2.png", caption: "Weighted Scoring System" },
      { src: "project3_img3.png", caption: "Playing XI" }
    ]
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

