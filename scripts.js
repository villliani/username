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
                title: 'Sales Bot for Automotive Dealership',
                image1: "\salesbotworkflow.jpeg",
                image2: '\salesbotelegram.jpeg',
                image3: '\salesbotworkflow.jpeg',
                text1: 'This n8n workflow processes 1000+ daily interactions across text/voice channels. The modular design enables rapid scaling - easily add WhatsApp, Facebook Messenger, or web chat integrations. Memory management maintains customer context across sessions, while the AI engine can be trained on specific product catalogs, pricing databases, and CRM systems. Perfect for dealerships, real estate, or any business requiring 24/7 customer engagement with personalized responses and lead qualification',
                text2:  'Bot handles customer inquiries, product details, pricing, and appointment scheduling 24/7. Integrated multiple APIs seamlessly with custom data transformation and real-time response indicators for enhanced user experience'
            },
            2: {
                title: 'Ad Copy Generator',
                image1: '\adcopywrkflow.jpeg',
                image2: "\Adcopybot.jpeg",
                image3: '\adcopywrkflow.jpeg',
                text1: 'Complete automation in action - from user input to professional marketing copy delivered to your phone in under 2 minutes. No more waiting days for copywriters or struggling with blank pages. Just instant, conversion-ready content that businesses can use immediately for their marketing campaigns. Value: Transforms hours of work into minutes of automation.',
                text2: 'This workflow automatically transforms basic business information into professional marketing materials and distributes them across multiple channels. Currently configured for Telegram delivery, but easily extended to send directly to Gmail, LinkedIn, Facebook, Instagram, your website, or any social media platform via API integration. Value: One workflow, unlimited distribution possibilities - scale your marketing across every channel automatically.RetryClaude can make mistakes. Please double-check responses.orkflow includes advanced features like data mapping for custom fields and a conflict resolution mechanism to handle cases where the same record is updated in both systems simultaneously. The automation runs at regular intervals, checking for new or updated records and syncing them accordingly. This has eliminated data discrepancies and provided a single source of truth for customer data.',
            },
            3: {
                title: 'AI Research Assistant & Report Generator',
                image1: "\DeepResearch.png",
                image2: "\PdfDeepresearcjcreenshot.png",
                image3: "\Deepresearchemail.png",
                text1: 'The workflow begins by taking a topic and using AI to break it down into five distinct chapters. Parallel Research: It then performs parallel web research for each chapter, gathering information from multiple sources. Content Generation: AI agents synthesize the researched information to write the full content for the introduction and each chapterOnboarding new employees involved numerous repetitive tasks that were prone to delays and inconsistencies. I designed an automated onboarding workflow using n8n that streamlined the entire process. When a new employee is marked as "hired" in the HR system, the automation is triggered.',
                text2: 'Finally, all sections are compiled, formatted into a complete report, and saved as the polished PDF document shown This "Deep Research" workflow demonstrates a sophisticated application of AI agents, parallel processing, and seamless integration of multiple web services to execute a complex task that would otherwise require significant manual effort. It serves as an excellent example of building advanced, practical, and efficient automation solutions.',
            },
            4: {
                title: 'Gmail Auto-Labeller Workflow',
                image1: "\Emaillabeller.png",
                image2: "\labelerlabel.png",
                image3: "\Emaillabeller.png",
                text1: "Describing the Workflow's Outcome/Result Scheduled Trigger: The process initiates automatically every two minutes, ensuring the inbox is consistently kept up-to-date. Fetch & Filter: The workflow retrieves the 20 most recent Gmail messages. It then intelligently filters out any emails that have already been assigned specific, pre-defined labels (like 'Newsletter', 'Invoice', or 'Spam'), ensuring it only processes new or uncategorized items. Loop & Analyze: The system processes each remaining email one by one in a loop. For each email, it extracts the essential content (sender, subject, and body)",
                text2: "Label Sanitization: The raw output from the AI is cleaned by a custom code step to ensure it's a valid Gmail label (removing special characters, trimming spaces, and enforcing length limits). Dynamic Label Management: The workflow checks if the sanitized label already exists in the user's Gmail account. If the label exists, it is immediately applied to the email. If the label does not exist, the workflow first creates the new label in Gmail and then applies it to the email. Completion: The loop continues until all new emails in the batch have been successfully labeled, at which point the workflow waits for the next scheduled run.",
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
