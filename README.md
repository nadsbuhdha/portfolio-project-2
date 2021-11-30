## Overview
‘Back to school’ is a fun interactive quiz targeted specifically at primary KS2 students. The website aims to offer a simple but fun way for students from year 3 - 6 to test their subject knowledge against questions that are linked to the KS2 primary national curriculum. Students spend on average **** a day on phones and tablets. Therefore, providing a simple easy access quiz that tests and boosts student’s knowledge can supplement their screen time with an educational, yet fun benefit. 

## Aims
The aim of this website is to provide an easy to access, fun, interactive quiz for primary school ks2 students. Questions are based on the KS2 curriculum therefore are accessible for students. User’s scores are displayed so users can try to compete against their own score, answering more correct questions and therefore developing their subject knowledge.

## Target Audience
The primary target audience for the site is ks2 children who want a fun way to revise and test their knowledge. A secondary target audience is parents of students who would like to engage with their child’s learning. As well as teacher who would like to audit their subject knowledge.

## User Expectations

As the primary target audience for the site is children, for this website the following user expectations were considered when creating the site:
* Easy to access, simple and clear
* Responsive as students will be accessing on multiple devices
* Questions in quiz should be relevant to the national curriculum 
* Dynamic real-time feedback should be presented to users so they are aware of correct and incorrect answers

## Colour schemes 

A warm, bright UI was chosen for the colour scheme of this website. As the primary target audience is children between 7 - 12, bright attractive colours were utilised to gain the attention of the user as well as present a warm and friendly application. A white ‘gamebox’ was used in order for the users to easily see the questions and there is adequate contrast between colours. Imagecolourpicker.com was used in order to select the colours from the background image to keep colour consistency throughout the site. rgba(255,208,224,255), a shade of pink, was used for buttons and answer boxes. To stand out, the footer is in black and the icons are in the colour rgba(255,208,224,255). When the icons are hovered over, the colour scheme shifts to rgba(111,216,187,255). This colour was also taken from the background image using Imagecolourpicker.com 

## Fonts

‘Indie flower’ was used as the primary font for this website. As this website is aimed for primary school students, I wanted a font that emulated handwriting as students at this age handwrite the majority of their work. Having a handwriting styled font would add a layer of familiarity to the website. Indie flower was also chosen as comparatively to other handwritten styled fonts, as it appeared more legible and readable. I chose to use ‘Indie flower’ for both the h tags and the p tags as I wanted the consistency of the handwritten theme throughout the website and having two separate styled handwritten themes appeared incongruent. ‘san-serif’ was chosen as a backup font for the site should indie flower fail to load. 

## Wireframes 
add images

## Features 

## Home page

### Logo navigation

The home page features a logo which directly tells the user what is the name and purpose of the website. The logo can also be clicked on in order to navigate back the index page. This allows users to transfer back to the index page without using the back buttons. 

### Homepage buttons

The home page features two buttons which direct the user either to start the game or the rules page which has additional information for the user should they need it. 

Each button is interactive and features a hover effect whereby the buttons increase in size once hovered hover. 

### Background

The background image, which is featured on all pages, is a multicoloured image which features grid style paper and styled ripped coloured paper. This is to emulate the visuals of being in a classroom; and the equipment which is synonymous with being in a classroom. 

### Footer

The bottom of each page features a footer which includes social media links. The social media links are coloured rgba(255,208,224,255) which, when hovered over, change to the colour rgba(111,216,187,255). This keeps the colour theme of the website. The social media links open on a new page and do not direct away from the current page. 

## Game page

Score and Question counter

Above the game box, the site features a score counter and a question counter. This displays the user’s current question and their current score. This is achieved by the use of inner.text property. 

### Gamebox questions

Within the game box, questions, which have been stored in an array, are randomly selected for the user to answer. A multiple choice of 4 answers is then presented to the user and they can pick one of the four answers. When hovered over, the multiple-choice answers increase in size to display to the user which choice they are about to choose. 

When a correct answer is chosen. The answer is highlighted green and a correct answer sound effect is played.

When the incorrect answer is chosen. The answer is highlighted red and an incorrect answer sound effect is played. 


