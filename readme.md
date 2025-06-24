Gabriel's Automation Architect Portfolio
This repository contains the code for Gabriel's personal portfolio website, showcasing expertise in automation architecture and AI engineering. The site is a single-page application with a fixed sidebar navigation and dynamic content sections.

Table of Contents
Site Structure

How to Edit Content

Changing the Profile Picture

Updating the About Me Section

Managing Featured Projects

Adding a New Project

Editing an Existing Project

Adding Images to Projects

Managing Skills & Expertise (Stack)

Updating Blog Posts

Editing Contact Information

Running the Site Locally

1. Site Structure
The website is a single HTML file (index.html within the zip). It uses internal CSS for styling and JavaScript for smooth scrolling, dynamic navigation highlighting, and fetching blog posts.

index.html: The main and only file containing all the HTML structure, CSS styles, and JavaScript logic.

assets/: (Optional, for your own organization) You might want to create an assets folder to store local images if you decide not to use base64 or external URLs.

2. How to Edit Content
All the editable content is directly within the index.html file. You can open this file with any text editor (like VS Code, Notepad++, Sublime Text, Atom).

Changing the Profile Picture
Your current profile picture is embedded directly as a base64 string for convenience.

Locate the profile-img div:
In index.html, search for <div class="profile-img">.

Update the <img> tag:
Inside this div, you'll find an <img> tag:

<img src="data:image/jpeg;base64,/9j/4AAQSk... (long base64 string)..." alt="Gabriel's Profile Picture">

To change it:

Option A (New Base64): Convert your new image (e.g., a JPEG or PNG) to a base64 string using an online converter (search for "image to base64 converter"). Copy the resulting string and replace the existing data:image/... string in the src attribute. Make sure to specify the correct mimeType (e.g., image/png or image/jpeg).

Option B (External URL): If you host your image online (e.g., on GitHub, Imgur, or your own server), simply replace the entire src attribute with the direct URL to your image:

<img src="https://your-image-hosting-site.com/your-new-profile-pic.jpg" alt="Gabriel's Profile Picture">

Option C (Local Asset): If you create an assets folder, place your image there (e.g., assets/new-profile-pic.jpg) and update the src path:

<img src="assets/new-profile-pic.jpg" alt="Gabriel's Profile Picture">

Fallback: The onerror attribute is included in the <img> tag to show a placeholder if your image fails to load. You can keep or remove this.

Updating the About Me Section
Locate the "About Me" section: Search for <!-- About Section Start -->.

Edit the introductory paragraph: The main text is within the <p class="about-intro"> tag. Update this paragraph to reflect any changes you want to make to your professional summary.

Edit Education & Certifications: Within the education-section, you'll find skill-card elements. You can directly edit the <h3>, <p>, and <li> tags inside these cards to update details about your education and certifications. You can also modify the style attribute on the skill-icon div to change its background gradient.

Managing Featured Projects
Locate the "Projects" section: Search for <!-- Projects Section Start -->.

Find the projects-grid: This div contains all your individual project cards.

Adding a New Project
Copy an existing project-card block: Find a block like <!-- Project Card 1 Start --> ... <!-- Project Card 1 End -->. Copy the entire block.

Paste and Customize: Paste the copied block within the projects-grid div.

Update content:

project-title: The title of your new project.

project-subtitle: A brief descriptor (e.g., "Automated workflow solution").

project-description: A detailed description of the project, its goals, and your role.

project-tags: Update the <span> tags with relevant keywords and technologies. You can add or remove as many as needed.

Editing an Existing Project
Locate the desired project-card: Identify the project you want to change within the projects-grid.

Edit content: Modify the <h3>, <p>, and <span> tags as described above.

Adding Images to Projects
Inside a project-card: Locate the project-header div within the project card where you want to add an image.

Insert <img> tag: Directly after the </div> that closes project-header, add an <img> tag.

<div class="project-card">
    <div class="project-header">
        <h3>Your Project Title</h3>
        <p>Your Project Subtitle</p>
    </div>
    <!-- Insert your image tag here -->
    <img src="your-image-url.jpg" alt="Project Image Description" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
    <p class="project-description">...</p>
    <div class="project-tags">...</div>
</div>

Replace your-image-url.jpg with the actual URL of your hosted project image.

Adjust alt text for accessibility.

The style attributes (width, height, object-fit, border-radius, margin-bottom) are provided for a good default appearance; adjust height or other values as needed.

Managing Skills & Expertise (Stack)
Locate the "Stack" section: Search for <!-- Stack Section Start -->.

Find the skills-grid: This div contains all your individual skill cards.

Edit/Add Skills: Each skill-card defines a skill area. You can:

Edit: Modify the <h3> (skill category), <p> (short description), and <li> (specific skills) within an existing skill-card.

Add: Copy an entire skill-card block, paste it, and customize its content. You can also change the background in the style attribute of skill-icon for different colors.

Updating Blog Posts
Locate the "Blog" section: Search for <!-- Blog Section Start -->.

JavaScript Fetch URL: The blog posts are dynamically loaded from your Medium RSS feed using a JavaScript fetch call at the very bottom of the index.html file (within the <script> tags).

Search for: fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ebhgab")

To change the source of your blog posts, modify the rss_url parameter in this URL. For example, if your Medium username changes, update @ebhgab to your new username. If you want to pull from a different RSS feed (e.g., a personal blog), replace the entire rss_url value with the URL of your new RSS feed.

Editing Contact Information
Locate the "Contact" section: Search for <!-- Contact Section Start -->.

Email Address:

For the displayed email: Search for <span>ebhgab@gmail.com</span> within the contact-item and update it.

For the mailto: link (when someone clicks the email icon or submits the form): Search for mailto:ebhgab@gmail.com in the href attribute of the email contact-item and in the action attribute of the contact-form. Update both instances.

LinkedIn Profile:

Search for https://ng.linkedin.com/in/gabrielebhota within the href attribute of the LinkedIn contact-item and update it with your current LinkedIn URL.

3. Running the Site Locally
To view your site locally:

Save the index.html file.

Open index.html in your web browser. You can usually do this by double-clicking the file.

For more complex local development or if you use local assets (images, etc.), you might need a simple local web server. Python's built-in server is an easy option:

Open your terminal or command prompt.

Navigate to the directory where index.html is saved.

Run python -m http.server (for Python 3) or python -m SimpleHTTPServer (for Python 2).

Open your browser and go to http://localhost:8000.