# Classified Records
Classified Records is an independent record store based in Dundalk, Ireland.

Table of contents:
- [UX](#ux)
  * [User Goals](#user-goals)
  * [Site Owner Goals](#site-owner-goals)
  * [The 5 Planes Considerations](#the-5-planes-considerations)
    + [Strategy Plane](#strategy-plane)
    + [Scope Plane](#scope-plane)
    + [Structure Plane](#structure-plane)
    + [Skeleton Plane](#skeleton-plane)
    + [Surface Plane](#surface-plane)
  * [Design](#design)
    + [Colours](#colours)
    + [Fonts](#fonts)
    + [Logos](#logos)
    + [Wireframes](#wireframes)
- [Features](#features)
  * [Existing Features](#existing-features)
  * [Planned Features](#planned-features)
  * [Technologies Used](#technologies-used)
- [Testing](#testing)
  * [Manual Testing](#manual-testing)
  * [Testing on Different Browsers](#testing-on-different-browsers)
  * [Code Validation](#code-validation)
  * [User Stories](#user-stories)
  * [Deployment](#deployment)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


# UX
![amiresponsive](/assets/images/responsive-screenshot.png)

The aim of this project is to build a website which enables a small independent business to better engage with it's audience in order to drive the growth of the business.

## User Goals
- As a new user I want to know **where** the business is located
- As a new user I want to know the store's **opening hours** and how to **contact** the store
- As a user I want to see what **latest releases** the store has in stock
- As a user I want to be able to contact the store to enquire about the **availability** of records
- As a user I want to be able to **order and/or buy records** through the website
- As a user I want to find the store's **social media channels** and interact with them

## Site Owner Goals
- As a site owner I want users to have access to an **interactive** website which **looks great** and is **easy to use**
- As a site owner I want the website to drive **customer engagement**
- As a site owner I want the website to drive **sales growth**

## The 5 Planes Considerations

### Strategy Plane
The main goals for the store when deciding to undertake this project were to increase engagement with new and existing customers and to increase sales growth via an increased online presence.
The target audience is a broad demographic of audiophiles with various musical and cultural interests. With this in mind I set out to create an uncluttered, clean website that is easy and fun to interact with for all.

### Scope Plane
The key interactive features on the website which users can engage with are:  
- Quiz - multiple choice questions which are a bit of fun to test users music knowledge  
- Contact form to submit any queries 
- Google Maps API

Other important features that I decided to include were easily accessible links to the store's Discogs marketplace page and social links, info on new records in stock and info on a weekly offer that users can avail of.

### Structure Plane
In line with the desire to "keep it simple" I settled on using a single page structure with four separate sections:
- Welcome / home page  
- New In
- Quiz
- Contact Us

Links to external sites appear prominently in the navbar.
- Discogs - as this is a marketplace where the business can sell to customers, it is important that it is easily found and accessible to users.
- Social - as the store already has an active social media presence with strong customer base engagement, being able to easily navigate to those sites will be user friendly.

### Skeleton Plane
As outlined in the Structure Plane section above I decided to use a single page format for simplicity. 
Within the structure of the site I then needed to drill down to the navigation options I felt suited the project.

- Navigation around the page is simplified as the navbar remains visible at the top of the page when scrolling through the content.
A click on any of the navbar options will bring the user direct to their selected section.
- The navbar also contains a drop down menu which contains links to the store's social media pages.
- A scroll to top button also becomes visible when a user scrolls away from the welcome page.
- Links in the footer also provide another easily accessible option to visit external links (social media and Discogs).

### Surface Plane
I wanted to create a theme which bears strong resemblance to the bricks and mortar store. Hence the use of the colours as outlined below in the design section.
Finding a striking hero image which also blends in nicely with the rest of the page was important, and I settled on a beautiful close up image of a turntable which I found on Unsplash.  

The main body of the page is mainly white which ties in with the clean, modern look of the store. The fonts are mostly in red  ![#fc6161](https://via.placeholder.com/15/fc6161/000000?text=+) `#fc6161` or black for smaller font sizes.
Again the reasoning behind these choices was to evoke the look of the real world store in users minds while they browse the site.

## Design

### Colours
The main colours used are as follows

- ![#fc6161](https://via.placeholder.com/15/fc6161/000000?text=+) `#fc6161`
- ![#fafafa](https://via.placeholder.com/15/fafafa/000000?text=+) `#fafafa`
- Black
- White

These align with the look of the bricks and mortar store.

### Fonts
The font used throughout the site is Exo 2 from [Google Fonts](https://fonts.google.com/).

### Logos
- I designed the "CR" mini logo and favicon using [Free Logo Design](https://www.freelogodesign.org).
- The main Classified Records logos were generated using [Tailor Brands](https://www.tailorbrands.com).
- The Discogs logo is property of [Discogs](https://www.discogs.com/).

### Wireframes

- I created site mockups using [Balsamiq](https://balsamiq.com/) for wireframes. The focus of this exercise was on defining the layout and structure of the site. Importantly, consideration was given to responsive design, with a mobile first philosphy employed. Identifying how the site layout should change at different screen sizes was an integral part of the wireframe process.

# Features

## Existing Features
- Interactive navbar with responsive dropdown menu and social links
- Navbar link to Classified Records Discogs page
- Welcome page, "New In" page which shows new items in stock
- Album reviews which appear on screen when an album cover is hovered over (desktop only)
- Multiple choice quiz
- A scroll to top button, to allow easy navigation back to the top of the page (especially on mobile devices)
- Interactive contact form which allows users to submit queries to the store
- Interactive map with marker on store location
- Store contact and location info
- Additional link to Discogs marketplace in the contact us section
- Info on store opening hours
- Footer containing external links to Discogs and social media sites
- Documentation: ReadMe file
- Accessibility
- Git version control
- GitHub remote repository
- Deployed - hosted on GitHub Pages

## Planned Features
- Back-end focused development (Mailing list, customer database)
- Add info on in-store events when it becomes possible to host them again in future

## Technologies Used
- [HTML](https://www.w3.org/html/)
  - HTML used for structure
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
  - CSS used for styling
- [JavaScript](https://www.ecma-international.org/default.htm)
  - JavaScript used to add interactivity (DOM manipulation, contact form and maps APIs)
- [jQuery](https://jquery.com/)
  - JavaScript library 
- [Bootstrap](https://getbootstrap.com/docs/4.5/layout/overview/)
  - Bootstrap HTML/CSS framework used to structure and style page elements
- [Google Maps API](https://developers.google.com/maps/documentation)
  - Used to embed map in the web page
- [EmailJS](https://www.emailjs.com/)
  - Used to wire up contact form to send user queries to store email address
- [Git](https://git-scm.com/)
  - Git version control
- [GitHub](https://github.com/)
  - Repository hosted on GitHub
- [GitPod](https://www.gitpod.io/)
  - Code for the project was written in the GitPod IDE
- [Google Chrome](https://www.google.com/chrome/)
  - Used for dev tools and browser
- [Microsoft Edge](https://www.microsoft.com/en-us/edge)
  - Used for dev tools and browser
- [Am I Responsive](http://ami.responsivedesign.is/#)
  - Used to test responsiveness of the site
- [Free Formatter](https://www.freeformatter.com/html-formatter.html#ad-output)
  - Used to format HTML in GitHub repository

# Testing

  The site was manually tested on different devices and browsers to check responsiveness and functionality.

## Manual Testing
The site was tested on the following devices:

Samsung S10 - Viewport size 360px * 760px  
Samsung S9+ - Viewport size 412px * 846px  
Apple iPad - Viewport size 768px * 1024px  

The site was found to be responsive and displaying as expected across the above screen sizes.

## Issues Uncovered

1. The size of paragraph text was found to be slightly too small on smaller mobile devices.
- Fix: font size for all paragraph elements was increased from 0.875rem to 1 rem.

2. The transparent overlay was not scrolling away fixed with the hero image when scrolling from the top of the page.
- Fix: fixed the overlay to top left position
- Revised: I decided that the image did not require the overlay as I felt the red color on the logo contrasted nicely against the background when the overlay was removed.

3. Heading sizes were initially inconsistent down through the page sections. It didn't appear clear when users were moving from one distinct part of the page from another.
- Fixes: All h1 section headings were given a margin-top of 5vh  
- hr elements were added to give more emphasis to the section headings.


## Testing on Different Browsers
I used Google Chrome and Microsoft Edge dev tools throughout the project.  
No issues / inconsistencies were uncovered during testing in these browsers.

## Code Validation
### HTML
HTML was validated using the [W3 Markup Validation Service](https://validator.w3.org/)

The following issues were flagged by the validator:  
Error:  
Attribute "type" not allowed on textarea elements  

Warnings:
"type" attribute unnecessary for javascript resources

These attributes were removed from index.html to rectify the errors.

### CSS
CSS was validated using [Jigsaw](https://jigsaw.w3.org/css-validator/)

Errors and warnings returned related to external resources (e.g Bootstrap, Fontawesome).

### JavaScript
[JS Hint](https://jshint.com/) was used to test JavaScript code.


## User Stories

1. As a new user I want to know **where** the business is located:  
New users can find the store location by clicking on the Contact Us link in the navbar.
The info can also be accessed by manually scrolling down the page.

2. As a new user I want to know the store's **opening hours** and how to **contact** the store:  
New users can find the store opening hours and contact info by clicking on the Contact Us link in the navbar.
The info can also be accessed by manually scrolling down the page.

3. As a user I want to see what **latest releases** the store has in stock:  
Latest releases can be found by clicking the New In link in the navbar  
By clicking on one of the Discogs links in the navbar, Contact Us section or footer, the user can find out what records the store is currently selling online.

4. As a user I want to be able to contact the store to enquire about the **availability** of records:  
By clicking the Contact Us link in the navbar the user is brought to the contact form where they can submit queries  
The store's phone number is also in this section

5. As a user I want to be able to **order and/or buy records** through the website
To order a record a user can use:  
- Contact Form  
- Links to Social media to submit order via the users preferred social media channel  
- Navigate to the store's contact info and contact the store via telephone  
- The website cannot currently handle payments / sales - this is a planned feature for the future  

6. As a user I want to find the store's **social media channels** and interact with them
Users can find links to the store's social channels by clicking on the Social dropdown menu in the navbar, or by accessing the links in the footer.


## Deployment
The site is hosted on [GitHub Pages](https://dermot-k.github.io/MS2-Classified-Records/).

The process involved:

- Host a git repository on GitHub. Explained here.
- The root folder contains README.md and index.html files
- On GitHub repository settings page move to GitHub Pages section
- Change source to master branch. (Or any desired branch)
- Provided link will be your projects home (index) page.

To deploy your own version of the website:

- Have git installed
- Visit the repository
- Click 'Clone or download' and copy the code for http
- Open your chosen IDE (GitPod, VS Code, etc.)
- Open a terminal in your root directory
- Type 'git clone ' followed by the code taken from github repository
- git clone [https://github.com/Dermot-K/MS2-Classified-Records](https://github.com/Dermot-K/MS2-Classified-Records)
- When this completes you have your own version of the website
- Feel free to make any changes to it
- The website can be run by opening one of the HTML files within a web browser
- Visit the link provided
- Your website with any made changes will appear
- Saved changes to the website will appear here after refreshing the page
- The benefits of hosting your website on GitHub pages is that any pushed changes to your project will automatically update the website. Development branches can be created and merged to the master when complete.

It may take a moment for changes to appear on the hosted website.

# Credits
- Seun Owonikoko for her valuable advice and mentoring
- Code Institute
- [CodePen](https://codepen.io/deveb22/pen/QxPmGz) - for the scroll to top button code
- [Sitepoint](https://www.sitepoint.com/simple-javascript-quiz/) - for guidance on putting the quiz together
- The Discogs logo is property of [Discogs](www.discogs.com)
