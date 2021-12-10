# Back To School 

![alt text](assets/images/amiresponsive.webp 'Home page on screen devices')


## Overview

‘Back to school’ is a fun interactive quiz targeted specifically at primary KS2 students. The website aims to offer a simple but fun way for students from year 3 - 6 to test their subject knowledge against questions that are linked to the KS2 primary national curriculum. In the U.K, children between the age of 5 - 16 spend an average of 6.3 hours on screens per day.  Therefore, providing a simple easy access quiz that tests and boosts student’s knowledge can supplement their screen time with an educational, yet fun benefit. 

You can view the website here - [Back To School](https://nadsbuhdha.github.io/portfolio-project-2/)

## Aims
The aim of this website is to provide an easy to access, fun and interactive quiz for primary school KS2 students. Questions are based on the KS2 curriculum therefore are accessible for students. User’s scores are displayed so users can try to compete against their own score, answering more correct questions and therefore developing their subject knowledge.

## Target Audience
The primary target audience for the site is KS2 children who want a fun way to revise and test their knowledge. A secondary target audience is parents of students who would like to engage with their child’s learning. As well as teachers who would like to audit their subject knowledge.

## User Expectations

As the primary target audience for the site is children, the following user expectations were considered when creating the site:
* Easy to access, simple and clear
* Responsive as students will be accessing on multiple devices
* Questions in quiz should be relevant to the national curriculum 
* Dynamic real-time feedback should be presented to users so they are aware of correct and incorrect answers

## Colour schemes 

A warm, bright UI was chosen for the colour scheme of this website. As the primary target audience is children between 7 - 12, bright attractive colours were utilised to gain the attention of the user as well as present a warm and friendly application. A white ‘gamebox’ was used in order for the users to easily see the questions and there is adequate contrast between colours. Imagecolourpicker.com was used in order to select the colours from the background image to keep colour consistency throughout the site. rgba(255,208,224,255), a shade of pink, was used for buttons and answer boxes. To stand out, the footer is in black and the icons are in the colour rgba(255,208,224,255). When the icons are hovered over, the colour scheme shifts to rgba(111,216,187,255). This colour was also taken from the background image using Imagecolourpicker.com 

## Fonts

‘Indie flower’ was used as the primary font for this website. As this website is aimed for primary school students, I wanted a font that emulated handwriting as students at this age handwrite the majority of their work. Having a handwriting styled font would add a layer of familiarity to the website. Indie flower was also chosen as, comparatively to other handwritten styled fonts, it appeared more legible and readable. I chose to use ‘Indie flower’ for both the h tags and the p tags as I wanted the consistency of the handwritten theme throughout the website and having two separate styled handwritten themes appeared incongruent. ‘san-serif’ was chosen as a backup font for the site should indie flower fail to load. 

## Wireframes 

### Mobile Home Page

![alt text](assets/images/phone_home_page.webp 'mob home page')

### Mobile 'Home To Play' Page

![alt text](assets/images/pone_about_page.webp 'mob how to play')

### Mobile Game Page

![alt text](assets/images/phone_gamepage.webp 'mob Game Page')

### Mobile Game Over Page

![alt text](assets/images/phone_endpage.webp 'mob over page')


### Desktop Home Page

![alt text](assets/images/desktop_hp.webp 'desktop homepage')

### Desktop 'How to Play' Page

![alt text](assets/images/desktop_about.webp 'desktop how to play page')


### Desktop Game Page

![alt text](assets/images/desktop_quiz_page.webp 'desktop game page')

### Desktop Gameover page

![alt text](assets/images/desktop_gameover_page.webp 'desktop game over page')

![alt text](assets/images/desktop_gameover_page_form.webp 'desktop game over page with form')


## Features 

### Home page

### Logo navigation

The home page features a logo which directly tells the user what the name and purpose of the website is. The logo can also be clicked on in order to navigate back the index page. This allows users to transfer back to the index page without using the back buttons. 

![alt text](assets/images/logo-nav.webp 'nav logo') 

### Homepage buttons

The home page features two buttons which direct the user either to start the game or the rules page, which has additional information for the user, should they need it. 

![alt text](assets/images/homepage-buttons.webp 'home page buttons')

Each button is interactive and features a hover effect whereby the buttons increase in size once hovered hover. 

### Background

The background image, which is featured on all pages, is a multicoloured image which features grid style paper and styled ripped coloured paper. This is to emulate the visuals of being in a classroom; and the equipment which is synonymous with being in a classroom. 

![alt text](assets/images/background_image.webp 'background')

### Footer

The bottom of each page features a footer which includes social media links. The social media links are coloured rgba(255,208,224,255) which, when hovered over, change to the colour rgba(111,216,187,255). This keeps the colour theme of the website. The social media links open on a new page and do not direct away from the current page. 

![alt text](assets/images/footer.webp 'footer')

### Game page

### Score and Question counter

![alt text](assets/images/scorehud.webp 'score counter')

Above the game box, the site features a score counter and a question counter. This displays the user’s current question and their current score. This is achieved by the use of inner.text property. 

### Gamebox questions

Within the game box, questions, which have been stored in an array, are randomly selected for the user to answer. A multiple choice of 4 answers is then presented to the user and they can pick one of the four answers. When hovered over, the multiple-choice answers increase in size to display to the user which choice they are about to click on. 

![alt text](assets/images/quiz-box.webp 'gamebox')

When a correct answer is chosen, the answer is highlighted green and a correct answer sound effect is played.

![alt text](assets/images/correct-answer.webp 'correct answer')

When the incorrect answer is chosen, the answer is highlighted red and an incorrect answer sound effect is played. 

![alt text](assets/images/incorrect-answer.webp 'incorrect answer')

### Gameover Page

Once the user completes the set amount of questions, the page is redirected to a gameover page which displays the users results. 

The results shown are based on the users score.

If they have a score greater than 0 the results are displayed in green

![alt text](assets/images/greenanswer.webp 'positive answer')

If the they have a negative score the results are displayed in red 

![alt text](assets/images/redanswer.webp 'minus score')

There are three messages that are dynamically updated depending on the users score.

If the user score is 0 or less, this message is shown:

![alt text](assets/images/negative-score.webp 'low score')


If the user scores between 1 and 20, this message is shown:

![alt text](assets/images/midscore.webp 'mid score')

If the user scores above 20, this message is shown: 

![alt text](assets/images/highscore.webp 'high score')

Two buttons are shown to allow the user to navigate back to the home screen or play again. 
![alt text](assets/images/playagain.webp 'high score')

A contact form is featured which allows users to enter a user name, email and message so they can send feedback about their experience of the game. The contact form includes a mandatory field where users must input their information in order to submit.

![alt text](assets/images/form.webp 'contact form')

The score input is automatically updated with the users final score and has a ‘readonly’ property so the user cannot change their score. 


## Technologies used 

* HTML5 – for structuring the website
* CSS3 – for styling the website
* Javascript - for the functionality of the game
* Balsamiq – for wireframes of the site
* Googlefonts – for Indie flower font
* Resizepixel – for compressing images and converting image files
* Font awesome – for site icons
* W3C Markup and Jigsaw validation - used to test and validate the HTML and CSS
* Jshint - used to test and validate the javascript files


## Testing

### Homepage
Feature | Test | Outcome
--- | --- | ---
Logo | Logo to link back to homepage | Pass
Play game button | Play button to link to game | Pass
How to play button | How to play button to link to about and rules page | Pass
Buttons | Buttons to increase in size when hovered hover | Pass


### Footer 

Feature | Test | Outcome
--- | --- | ---
Footer | Footer to stay stuck at bottom of page | Pass
Social media links | Icons to highlight when hovered over | Pass
Social media links | Links to open in a new page when clicked on | Pass


### Game Page
Feature | Test | Outcome
--- | --- | ---
Question Hud | Question hud to indicate what question the player is on and update when next question appears | pass 
Scorehud | Score hud to update in real-time depending on correct or incorrect answer | Pass
Question | New question to generate each time a question is answered | Pass
Multiple Choice Answers | Answers to increase insize when hovered hover | Pass
Multiple Choice Answers | Answers to highlight green if correct and red if incorrect | Pass
Multiple Choice Answers | Sound effects to play whether the question is correct or incorrect | Pass
Final question | Final question to link to a 'gameover' page | Pass


### Game over page
Feature | Test | Outcome
--- | --- | ---
Score update | Users locally stored score to be displayed | Pass
Score update | Score to display green if a positive score and red if a negative score | Pass
Game Over Message | Different game over message to be displayed to user depending on the score | Pass
Play again button | Play again and home buttons to increase in size when hovered hover | Pass

### Form
Feature | Test | Outcome
--- | --- | ---
Form | Form to require users to submit all relevant information | Pass
Score input | Score input disabled for user and automatically updated with user score | Pass
Form | Form to accurately submit all data | Pass

## Manuel Testing

### Browser Responsiveness 

Device | Test | Outcome
--- | --- | ---
Firefox, Google Chrome, Safari | responsive with no functionality issues | Pass
Chrome developer tools | responsive with no functionality issues | Pass
Firefox developer tools | responsive with no functionality issues | Pass

### Device responsiveness 

Device | Test | Outcome
--- | --- | ---
Macbook Pro 13 Inch | responsive with no functionality issues | Pass
Ipad (7th Generation) | responsive with no functionality issues | Pass
Iphone 12 | responsive with no functionality issues | Pass
Huawei p30 | responsive with no functionality issues | Pass

## W3C Validator Tools

W3C Validator was used to check for error within my HTML code.

The final check presented error free HTML

### Index Page

![alt text](assets/images/index.webp 'index page validated')

### Rules Page

![alt text](assets/images/rules_val.webp 'rules page validated')

### Game Page 

![alt text](assets/images/game_val.webp 'game page validated')

### Game Over Page 

![alt text](assets/images/gamover_val.webp 'game over page validated')

## CSS Validator 

The CSS passed through the validator without any errors. 

![alt text](assets/images/css_val.webp 'css validated')

## Javascript Validating 

### sctipt.js

No errors were found when passing the script.js file through JSHint. Two warnings appeared noting 
that dot notation could be used alternatively. 

![alt text](assets/images/scipt_validator.webp 'script jshint')

Metrics returned :
* There are 8 functions in this file.
* Function with the largest signature take 1 arguments, while the median is 1.
* Largest function has 18 statements in it, while the median is 2.
* The most complex function has a cyclomatic complexity value of 6 while the median is 1.

### endgame.js

No errors were found when passing the endgame.js file through JSHint. 
![alt text](assets/images/gameover_validate.webp 'gameover jshint')

The Metrics returned : 
* There is only one function in this file.
* It takes no arguments.
* This function contains 13 statements.
* Cyclomatic complexity number for this function is 5.


## Lighthouse 

Lighthouse was utilised to test the performance, accessibility, best practices and SEO of the website. Both desktop and mobile were tested.

### Desktop Homepage

![alt text](assets/images/home_lighthouse_d.webp 'home page')

### Desktop Rules Page

![alt text](assets/images/rules_lighthouse_d.webp 'rules page')

### Desktop Game Page

![alt text](assets/images/game_lighthouse_d.webp 'rules page')

### Desktop Game Over Page

![alt text](assets/images/endgame_lighthouse_d.webp 'game over page')

### Mobile Home Page

![alt text](assets/images/homemob_lighthouse.webp 'mob home page')

### Mobile Rules Page

![alt text](assets/images/rulesmob_lighthouse.webp 'rules page')

### Mobile Game Page

![alt text](assets/images/gamemob_lighthouse.webp 'game page')

### Mobile Game Over Page

![alt text](assets/images/endgamemob_lighthouse.webp 'game over')

Throughout the site, there is significant accessibility. Font are easy to read and colours adequality contrast. 

## Bugs 

### solved bugs 

* During development, when using google developer tools, an error message appeeared. 

![alt text](assets/images/type-error.webp 'type error')

This error was caused by javascript attempting to access a HTML element which was on a different HTML page. This error was solved by splitting the javascript into separate files and embedding them on relevant HTML pages. 

* During the HTML validation, errors appeared 

![alt text](assets/images/html_error.webp 'html error')

This error was caused by a missing h2 closing tag before the closing a tag. This error was solved by adding the closing h2 tag

* Within the Git command box, an error 404 favicon message not found repeatedly appeared. Through searching stackoverflow, I found a way to solve this error was to add "link rel="shortcut icon" href="#" into the head of the HTML files. Once this was added, the error messages ceased. 


* A bug which appeared on the game page was that the questions would either go over the max questions or finish before it had reached the amount of questions programmed to do. 

![alt text](assets/images/question_bug.webp 'question bug')

In order to fix this bug, a quick escape if statement was created so that the game rerouted to the endgame page once the last question out of the max questions had been answered. 

* The footer for the site presented some issues. Initially, as the content of the page was limited in height, therefore the footer would float towards the middle of the page. 

![alt text](assets/images/footer_bug.webp 'footer bug') 

CSS styling was used to solve this bug. Alternate CSS properties were utilised in order to get the footer to 'stick' to the bottom of the page on each of the HTML pages. 


## Deployment 

The site was developed using Gitpod, which was then committed and pushed to GitHub.
The site was deployed to GitHub pages. The following steps were used to deploy :

* In the GitHub repository, navigate to the Settings tab
* Select the Pages sub-menu
* From the source section drop-down menu, select the Master Branch, and then hit save
* Once the master branch has been selected, the page provided a link to the live website.

The link to the live website is [here](https://nadsbuhdha.github.io/portfolio-project-2/)


## Finished Product 

### Homepage 

![alt text](assets/images/homepage_finished.webp 'Home Page')

### Rules Page

![alt text](assets/images/rules_page_finished.webp 'Rules Page')

### Game Page

![alt text](assets/images/game_page.webp 'Game Page')

### Game Over Page

![alt text](assets/images/endgame_finished.webp 'Game Over Page')

![alt text](assets/images/form_finished.webp 'form game over page')

## Credits

* The background image for the site was taken from https://www.freepik.com/

* Some of the questions for the quiz were taken from https://www.bbc.co.uk/bitesize/articles/z24mqhv

* Two youtube tutorials were used to kick start and support the quiz project in regards to the javascript https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=3064s and https://www.youtube.com/watch?v=riDzcEQbX6k

* https://stackoverflow.com/ was used to help find solutions to problems

