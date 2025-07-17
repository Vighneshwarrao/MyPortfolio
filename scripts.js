// DOM Elements
document.addEventListener('DOMContentLoaded', function () {
    // Preloader
    window.addEventListener('load', function () {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.display = 'none';
        }
    });

    // Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a nav link
    navLinksItems.forEach(item => {
        item.addEventListener('click', function () {
            if (hamburger && navLinks) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function () {
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });

    // Active navigation link based on scroll position
    const sections = document.querySelectorAll('section[id]');

    function highlightNavLink() {
        const scrollY = window.pageYOffset;

        let currentSectionId = '';

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 150; // Account for header height
            const sectionHeight = section.offsetHeight;

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinksItems.forEach((link) => {
            const href = link.getAttribute('href').slice(1); // remove '#'

            if (href === currentSectionId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }


    window.addEventListener('scroll', highlightNavLink);

    // Scroll animations
    const animateOnScroll = function () {
        const elements = document.querySelectorAll('.animate-on-scroll');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight - 50) {
                element.classList.add('animated');
            }
        });
    };

    // Add animate-on-scroll class to elements
    const addAnimationClasses = function () {
        // Skill items animation
        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach((item, index) => {
            item.classList.add('animate-on-scroll');
            item.style.animationDelay = `${index * 0.1}s`;
        });

        // About cards animation
        const aboutCards = document.querySelectorAll('.about-card');
        aboutCards.forEach((card, index) => {
            card.classList.add('animate-on-scroll');
            card.style.animationDelay = `${index * 0.2}s`;
        });

        // Project cards animation
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.classList.add('animate-on-scroll');
            card.style.animationDelay = `${index * 0.2}s`;
        });

        // Certification cards animation
        const certCards = document.querySelectorAll('.cert-card');
        certCards.forEach((card, index) => {
            card.classList.add('animate-on-scroll');
            card.style.animationDelay = `${index * 0.2}s`;
        });

        // Contact cards animation
        const contactCards = document.querySelectorAll('.contact-card');
        contactCards.forEach((card, index) => {
            card.classList.add('animate-on-scroll');
            card.style.animationDelay = `${index * 0.2}s`;
        });

        // Blog cards animation
        const blogCards = document.querySelectorAll('.blog-card');
        blogCards.forEach((card, index) => {
            card.classList.add('animate-on-scroll');
            card.style.animationDelay = `${index * 0.2}s`;
        });
    };

    addAnimationClasses();
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check

    // Project Modal
    const popupContainer = document.getElementById('popup-container');
    const closeBtn = document.querySelector('.close-btn');
    const swiperWrapper = document.getElementById('swiper-wrapper');
    const toolsList = document.getElementById('tools-list');
    const projectDetails = document.getElementById('project-details');
    const projectTitle = document.getElementById('popup-title');
    const projectButtons = document.querySelectorAll('.project-btn');
    const githubButton = document.getElementById('github-button');
    const liveButton = document.getElementById('live-btn');

    // Project data
    const projects = [
        {
            title: "Online Retail Sales Analysis",
            tools: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
            details: ["<strong><h2>📌 Project Overview:</h2></strong><br>Analyzed a large online retail dataset to uncover sales trends, identify high-value customers, and support business strategy through data-driven insights.<br><br>",

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
            title: "A/B Testing Platform",
            tools: ["Python", "Pandas", "NumPy", "SciPy", "FastAPI", "SQLAlchemy", "MySQL", "AWS S3", "Matplotlib", "HTML", "CSS", "JavaScript", "Render", "Github"],
            details: [
                "<h2>📌 Project Overview:</h2> This project is a complete <strong>end-to-end A/B testing platform</strong> that allows users to upload experiment data, run statistical tests (t-test or chi-square), generate visualizations, and store results in a structured database. It's designed for experimentation use cases in product, UX, and marketing.<br><br>",

                "<h4>📤 Data Upload & Storage:</h4> - Developed an <strong>upload route</strong> in FastAPI to receive CSV files from the frontend.<br> - Parsed variants, metrics, and test types from uploaded files.<br> - Stored experiment details in a <strong>MySQL database</strong> using SQLAlchemy ORM.<br> - Offloaded file storage to <strong>AWS S3</strong> to avoid storing files on the EC2 instance.<br><br>",

                "<h4>📊 Statistical Testing Engine:</h4> - Applied <strong>t-tests</strong> for numerical metrics and <strong>chi-square tests</strong> for categorical metrics.<br> - Automatically selected the test type based on input data.<br> - Returned detailed results including <strong>p-values</strong>, <strong>confidence intervals</strong>, and <strong>significance flags</strong>.<br> - Handled edge cases like missing data or low sample sizes.<br><br>",

                "<h4>📈 Visualizations & Insights:</h4> - Created distribution plots and group-wise charts using <strong>Matplotlib</strong>.<br> - Uploaded generated plots to <strong>AWS S3</strong> and returned URLs for frontend access.<br> - Delivered complete summaries including visual insights for both test types.<br><br>",

                "<h4>⚙️ Backend Architecture:</h4> - Built a modular FastAPI backend with separate routes for <strong>uploading data</strong>, <strong>generating summaries</strong>, and <strong>visualizing results</strong>.<br> - Used <strong>SQLAlchemy</strong> for ORM and session management.<br> - Implemented dependency injection for clean and scalable code structure.<br><br>",

                "<h4>🌐 Web Application & Deployment:</h4> - Built a user-facing frontend using <strong>HTML, CSS, and JavaScript</strong>.<br> - Integrated frontend with backend via REST API calls.<br> - Deployed the application backend on <strong>Render</strong>.<br> - Ensured secure file uploads and cross-origin requests using proper <strong>CORS configuration</strong>.<br><br>"
            ],
            images: [
                { src: "Assets/project2_img1.png", caption: "Upload Data Interface" },
                { src: "Assets/project2_img2.png", caption: "t-test Summary Output" },
                { src: "Assets/project2_img3.png", caption: "Chi-square Visualization" },
            ],
            github: "https://github.com/Vighneshwarrao/A-BTestingPlatform",
            live: "https://vighneshwarrao.github.io/ABplatform/"
        },
        {

            title: "Cricket Analytics",
            tools: ["Python", "BeautifulSoup", "Selenium", "Pandas", "NumPy", "FastAPI", "HTML", "CSS", "JavaScript", "Render", "Github"],
            details: [
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
            live: "https://vighneshwarrao.github.io/CricketTeam/"
        },
        {
            title: "Bangalore House Price Prediction",
            tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "FastAPI", "HTML", "CSS", "JavaScript", "GitHub Pages", "Render"],
            details: [
                "<h2>📌 Project Overview:</h2> This full-stack ML project predicts house prices in Bangalore based on user-input features like location, square footage, BHK, and more. It uses a cleaned dataset from <strong>Kaggle</strong>, applies rigorous data preprocessing, trains a <strong>Linear Regression model</strong>, and deploys it with a responsive frontend and backend API.<br><br>",

                "<h4>🧹 Data Cleaning & Preprocessing:</h4> - Cleaned raw data from <strong>Kaggle’s Bengaluru House Price Dataset</strong>.<br> - Converted textual fields like size to numerical values.<br> - Handled missing data and removed inconsistent or extreme entries.<br> - Computed <strong>price per square foot</strong> and filtered outliers using statistical techniques.<br><br>",

                "<h4>🧬 Feature Engineering & Encoding:</h4> - Performed <strong>one-hot encoding</strong> on 'location'.<br> - Applied <strong>label encoding</strong> for 'area_type'.<br> - Selected relevant numerical and categorical variables for model training.<br><br>",

                "<h4>📈 Model Training & Evaluation:</h4> - Used <strong>Linear Regression</strong> from Scikit-learn.<br> - Split dataset using <strong>train_test_split</strong> (80% train, 20% test).<br> - Achieved an <strong>R² Score of 84%</strong> and a low RMSE.<br> - Saved the model as <code>model.pkl</code> and feature metadata in <code>columns.json</code>.<br><br>",

                "<h4>💻 FastAPI Backend:</h4> - Created a backend using <strong>FastAPI</strong>.<br> - Loaded model and column data at runtime.<br> - Exposed a <code>/predict</code> endpoint that takes user input and returns predicted price rounded to 2 decimal places.<br><br>",

                "<h4>🌐 Frontend Integration & Deployment:</h4> - Developed a simple, intuitive UI using <strong>HTML, CSS, and JavaScript</strong>.<br> - Inputs include: <code>sqft, BHK, bathrooms, area type, location</code>.<br> - Dynamically sends input to FastAPI backend and renders the result in INR.<br> - Deployed frontend on <strong>GitHub Pages</strong> and backend on <strong>Render</strong>.<br><br>"
            ],
            images: [
                { src: "Assets/project4_img1.png", caption: "Raw Dataset from Kaggle" },
                { src: "Assets/project4_img2.png", caption: "Outlier Removal & Feature Engineering" },
                { src: "Assets/project4_img3.png", caption: "Frontend Interface & API Integration" }
            ],
            github: "https://github.com/Vighneshwarrao/House-Prediction",
            live: "https://vighneshwarrao.github.io/Bangalore-House-Prediction/"
        }

    ];

    // Initialize Swiper
    let projectSwiper;

    // Show popup and load data
    if (projectButtons.length > 0) {
        projectButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const projectId = parseInt(e.target.dataset.projectId, 10);
                loadProjectData(projectId);
                if (popupContainer) {
                    popupContainer.style.display = 'flex';
                    document.body.style.overflow = 'hidden'; // Disable scroll
                }
            });
        });
    }

    // Load project data into the modal
    function loadProjectData(projectId) {
        const project = projects[projectId];

        // Set project title
        if (projectTitle) {
            projectTitle.textContent = project.title;
        }

        // Set tools used
        if (toolsList) {
            toolsList.innerHTML = project.tools.map(tool => `<li>${tool}</li>`).join('');
        }

        // Set project details
        if (projectDetails) {
            projectDetails.innerHTML = project.details.map(details => `<li>${details}</li>`).join('');
        }

        // Set swiper slides
        if (swiperWrapper) {
            swiperWrapper.innerHTML = project.images
                .map((image) => `
                    <div class="swiper-slide">
                        <img src="${image.src}" alt="${image.caption}">
                        <div class="swiper-slide-caption">${image.caption}</div>
                    </div>
                `).join('');

            // Initialize Swiper after adding slides
            if (projectSwiper) {
                projectSwiper.destroy();
            }

            // Enhanced Swiper configuration
            projectSwiper = new Swiper('.swiper-container', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoHeight: true, // Adjusts height based on slide content
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: true, // Better pagination for many slides
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                keyboard: {
                    enabled: true, // Enable keyboard control
                },
                a11y: {
                    prevSlideMessage: 'Previous slide',
                    nextSlideMessage: 'Next slide',
                },
                on: {
                    init: function () {
                        // Ensure proper layout after initialization
                        setTimeout(() => {
                            this.update();
                        }, 100);
                    }
                }
            });
        }

        // Set GitHub button URL
        if (githubButton) {
            if (project.github) {
                githubButton.href = project.github;
                githubButton.style.display = 'inline-flex';
            } else {
                githubButton.style.display = 'none';
            }
        }

        // Set Live button URL
        if (liveButton) {
            if (project.live) {
                liveButton.href = project.live;
                liveButton.style.display = 'inline-flex';
            } else {
                liveButton.style.display = 'none';
            }
        }
    }

    // Close popup
    if (closeBtn && popupContainer) {
        closeBtn.addEventListener('click', closePopup);
        popupContainer.addEventListener('click', (e) => {
            if (e.target === popupContainer) closePopup();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closePopup();
        });
    }

    function closePopup() {
        if (popupContainer) {
            popupContainer.style.display = 'none';
            document.body.style.overflow = ''; // Re-enable scroll
        }
    }

    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Add CSS animation class
    document.body.classList.add('loaded');

    // Medium Blog Integration
    const mediumBlogsContainer = document.getElementById('medium-blogs-container');
    const mediumUsername = 'vighneshwarraobandaru';
    const rssUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUsername}`;

    // Fetch Medium blog posts
    function fetchMediumPosts() {
        if (!mediumBlogsContainer) return;

        fetch(rssUrl)
            .then(response => response.json())
            .then(data => {
                // Clear loading indicator
                mediumBlogsContainer.innerHTML = '';

                if (data.status === 'ok') {
                    const items = data.items;

                    if (items.length === 0) {
                        // No blog posts found
                        mediumBlogsContainer.innerHTML = `
                            <div class="blog-empty">
                                <p>No blog posts found. Check back soon for new content!</p>
                                <a href="https://medium.com/@${mediumUsername}" target="_blank" class="primary-btn">
                                    <i class="fab fa-medium"></i> Visit Medium Profile
                                </a>
                            </div>
                        `;
                        return;
                    }

                    // Create blog cards for each post
                    // Limit blogs to the latest 6
                    const limitedItems = items.slice(0, 6);

                    limitedItems.forEach(item => {
                        let imgUrl = 'https://miro.medium.com/max/1200/1*jfdwtvU6V6g99q3G7gq7dQ.png'; // default fallback
                        const imgRegex = /<img[^>]+src="([^">]+)"/g;
                        const match = imgRegex.exec(item.content);
                        if (match && match[1]) {
                            imgUrl = match[1];
                        }

                        const pubDate = new Date(item.pubDate);
                        const formattedDate = pubDate.toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        });

                        let excerpt = item.content.replace(/<[^>]*>/g, '');
                        excerpt = excerpt.substring(0, 150) + (excerpt.length > 150 ? '...' : '');

                        const blogCard = document.createElement('div');
                        blogCard.className = 'blog-card animate-on-scroll';
                        blogCard.innerHTML = `
        <div class="blog-image">
            <img src="${imgUrl}" alt="${item.title}">
        </div>
        <div class="blog-content">
            <div class="blog-date">
                <i class="far fa-calendar-alt"></i>
                <span>${formattedDate}</span>
            </div>
            <h3 class="blog-title">${item.title}</h3>
            <p class="blog-excerpt">${excerpt}</p>
            <a href="${item.link}" target="_blank" class="blog-link">Read More</a>
        </div>
    `;
                        mediumBlogsContainer.appendChild(blogCard);
                    });

                    // ✨ Add a "View All Blogs" button
                    const viewAllBtn = document.createElement('div');
                    viewAllBtn.className = 'view-all-blogs';
                    viewAllBtn.innerHTML = `
    <a href="https://medium.com/@${mediumUsername}" target="_blank" class="primary-btn" style="margin-top: 20px; display: inline-block;">
        <i class="fa-solid fa-blog"></i> View All Blogs on Medium →
    </a>
`;
                    mediumBlogsContainer.appendChild(viewAllBtn);


                    // Re-run animation classes
                    addAnimationClasses();
                    animateOnScroll();

                } else {
                    // Error fetching blog posts
                    mediumBlogsContainer.innerHTML = `
                        <div class="blog-error">
                            <p>Unable to load blog posts. Please try again later.</p>
                            <a href="https://medium.com/@${mediumUsername}" target="_blank" class="primary-btn">
                                <i class="fab fa-medium"></i> Visit Medium Profile
                            </a>
                        </div>
                    `;
                }
            })
            .catch(error => {
                console.error('Error fetching Medium posts:', error);
                mediumBlogsContainer.innerHTML = `
                    <div class="blog-error">
                        <p>Error loading blog posts. Please try again later.</p>
                        <a href="https://medium.com/@${mediumUsername}" target="_blank" class="primary-btn">
                            <i class="fab fa-medium"></i> Visit Medium Profile
                        </a>
                    </div>
                `;
            });
    }

    // Initialize Medium blog posts
    fetchMediumPosts();
});
