// --- Element Selections ---
        const navItems = document.querySelectorAll('.nav-item');
        const sections = document.querySelectorAll('.section');
        const sidebar = document.querySelector('.sidebar');
        const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        const projectCards = document.querySelectorAll('.project-card');
        const modalOverlay = document.getElementById('projectModal');
        const modalBody = document.getElementById('modalBody');
        const modalCloseBtn = document.getElementById('modalCloseBtn');
        const body = document.body;
        const blogGrid = document.getElementById('blog-grid');
        const contactForm = document.getElementById('contact-form');
        const formStatus = document.getElementById('form-status');

        // --- Navigation ---

        // Smooth scrolling for navigation links
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const targetSectionId = item.getAttribute('data-section');
                const targetHref = item.getAttribute('href');

                if (targetSectionId) {
                    e.preventDefault();
                    const section = document.getElementById(targetSectionId);
                    if (section) {
                        section.scrollIntoView({
                            behavior: 'smooth'
                        });
                        if (window.innerWidth <= 768) {
                            sidebar.classList.remove('active');
                        }
                    }
                } else if (targetHref && targetHref.startsWith('#')) {
                    e.preventDefault();
                    const section = document.getElementById(targetHref.substring(1));
                    if (section) {
                        section.scrollIntoView({
                            behavior: 'smooth'
                        });
                        if (window.innerWidth <= 768) {
                            sidebar.classList.remove('active');
                        }
                    }
                }
            });
        });

        // Update active navigation item on scroll
        function updateActiveNav() {
            const scrollPos = window.scrollY + 100;
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    navItems.forEach(nav => nav.classList.remove('active'));
                    const activeNav = document.querySelector(`.nav-item[data-section="${sectionId}"]`) || document.querySelector(`.nav-item[href="#${sectionId}"]`);
                    if (activeNav) {
                        activeNav.classList.add('active');
                    }
                }
            });
        }
        window.addEventListener('scroll', updateActiveNav);

        // Mobile navigation toggle
        mobileNavToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });

        // --- Project Modal ---

        // Data for the project pop-ups
        const projectsData = {
            1: {
                title: 'E-commerce Order Processing',
                image1: 'https://placehold.co/700x400/667eea/ffffff?text=E-commerce+Workflow',
                image2: 'https://placehold.co/700x400/4ECDC4/ffffff?text=System+Integration',
                image3: 'https://placehold.co/700x400/A8EDEA/ffffff?text=Automated+Email',
                text1: 'This project involved creating a comprehensive, end-to-end automation solution for an e-commerce client using n8n. The primary goal was to eliminate manual order processing, reduce human error, and accelerate the fulfillment lifecycle. The workflow starts when a new order is placed on their Shopify store, triggering a webhook that initiates the n8n automation.',
                text2: 'The automation then validates the order details, checks inventory levels in real-time, and selects the appropriate shipping carrier based on a set of predefined rules, such as package weight and customer location. It generates shipping labels by integrating with various shipping APIs and automatically sends branded, personalized confirmation emails to customers. This has resulted in an 85% reduction in manual tasks and a 60% improvement in fulfillment speed.'
            },
            2: {
                title: 'CRM Data Synchronization',
                image1: 'https://placehold.co/700x400/FF6B6B/ffffff?text=CRM+Data+Flow',
                image2: 'https://placehold.co/700x400/f093fb/ffffff?text=Conflict+Resolution+Logic',
                image3: 'https://placehold.co/700x400/f5576c/ffffff?text=Data+Mapping',
                text1: 'A major challenge for our client was maintaining data consistency between their Salesforce and HubSpot instances. This project focused on building a bi-directional synchronization system using make.com to ensure that both platforms always have up-to-date information. This is crucial for both the sales and marketing teams to have a unified view of the customer.',
                text2: 'The workflow includes advanced features like data mapping for custom fields and a conflict resolution mechanism to handle cases where the same record is updated in both systems simultaneously. The automation runs at regular intervals, checking for new or updated records and syncing them accordingly. This has eliminated data discrepancies and provided a single source of truth for customer data.'
            },
            3: {
                title: 'HR Onboarding Automation',
                image1: 'https://placehold.co/700x400/a8edea/ffffff?text=HR+Onboarding+Process',
                image2: 'https://placehold.co/700x400/4facfe/ffffff?text=Automated+Account+Creation',
                image3: 'https://placehold.co/700x400/00f2fe/ffffff?text=DocuSign+Integration',
                text1: 'Onboarding new employees involved numerous repetitive tasks that were prone to delays and inconsistencies. I designed an automated onboarding workflow using n8n that streamlined the entire process. When a new employee is marked as "hired" in the HR system, the automation is triggered.',
                text2: 'The workflow automatically generates necessary legal documents and sends them for e-signature via DocuSign, creates user accounts in Google Workspace and other internal tools, and enrolls the new hire in relevant training courses. This has significantly improved the onboarding experience for new employees and freed up the HR team to focus on more strategic initiatives.'
            }
        };

        // Open the modal and populate it with project data
        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                const projectId = card.getAttribute('data-project-id');
                const project = projectsData[projectId];

                modalBody.innerHTML = `
                    <h2 class="project-title">${project.title}</h2>
                    <img src="${project.image1}" alt="${project.title} workflow" style="width:100%; border-radius: 8px; margin-bottom: 1rem;" onerror="this.src='https://placehold.co/700x400/ccc/ffffff?text=Image+Not+Found';">
                    <p>${project.text1}</p>
                    <br>
                    <img src="${project.image2}" alt="${project.title} architecture" style="width:100%; border-radius: 8px; margin-bottom: 1rem;" onerror="this.src='https://placehold.co/700x400/ccc/ffffff?text=Image+Not+Found';">
                    <p>${project.text2}</p>
                    <br>
                    <img src="${project.image3}" alt="${project.title} additional image" style="width:100%; border-radius: 8px; margin-bottom: 1rem;" onerror="this.src='https://placehold.co/700x400/ccc/ffffff?text=Image+Not+Found';">
                `;

                modalOverlay.classList.add('active');
                body.classList.add('modal-open');
            });
        });

        // Close the modal
        function closeModal() {
            modalOverlay.classList.remove('active');
            body.classList.remove('modal-open');
        }

        modalCloseBtn.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === "Escape" && modalOverlay.classList.contains('active')) {
                closeModal();
            }
        });

        // --- Animations and RSS Feed ---

        // Animate cards on scroll
        const cards = document.querySelectorAll('.skill-card, .project-card, .contact-item, .blog-card');
        const animateOnScroll = () => {
            cards.forEach((card) => {
                const rect = card.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                if (isVisible && !card.classList.contains('animated')) {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.transition = 'all 0.6s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                        card.classList.add('animated');
                    }, 100);
                }
            });
        };
        window.addEventListener('scroll', animateOnScroll);
        animateOnScroll();

        // Fetch Medium RSS Feed
        const rssUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ebhgab';
        fetch(rssUrl)
            .then(response => response.json())
            .then(data => {
                if (data.status === 'ok') {
                    blogGrid.innerHTML = '';
                    const items = data.items.slice(0, 4);
                    items.forEach(item => {
                        const tempDiv = document.createElement('div');
                        tempDiv.innerHTML = item.description;
                        const firstParagraph = tempDiv.querySelector('p');
                        const excerpt = firstParagraph ? firstParagraph.textContent.substring(0, 150) + '...' : 'Click to read more.';
                        const card = `
                            <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="blog-card">
                                <h3 class="blog-title">${item.title}</h3>
                                <p class="blog-excerpt">${excerpt}</p>
                            </a>
                        `;
                        blogGrid.innerHTML += card;
                    });
                } else {
                    blogGrid.innerHTML = '<p>Could not fetch blog posts. Please visit my <a href="https://medium.com/@ebhgab" target="_blank">Medium profile</a> directly.</p>';
                }
            })
            .catch(error => {
                console.error('Error fetching RSS feed:', error);
                blogGrid.innerHTML = '<p>There was an error loading the blog posts. Please visit my <a href="https://medium.com/@ebhgab" target="_blank">Medium profile</a> directly.</p>';
            });

        // --- Secure Contact Form ---

        // Handle form submission using Formspree
        async function handleSubmit(event) {
            event.preventDefault();
            const data = new FormData(event.target);
            fetch(event.target.action, {
                method: contactForm.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    formStatus.innerHTML = "Thanks for your submission!";
                    formStatus.style.color = '#22c55e';
                    contactForm.reset();
                    setTimeout(() => {
                        formStatus.innerHTML = "";
                    }, 5000);
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            formStatus.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                        } else {
                            formStatus.innerHTML = "Oops! There was a problem submitting your form";
                        }
                        formStatus.style.color = 'red';
                    });
                }
            }).catch(error => {
                formStatus.innerHTML = "Oops! There was a problem submitting your form";
                formStatus.style.color = 'red';
            });
        }
        contactForm.addEventListener("submit", handleSubmit);