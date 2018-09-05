Apoorva Pethe- Web developer Portfolio
===================================================

This is a responsive (desktop, tablet, mobile compatible) portfolio developed in ReactJS to showcase my experience as a front end engineer / web developer.
It has 5 sections: Home, About Me, Skills, My work, and Contact details.
It also has my social media links.

Project Setup:
===================================================
Project was bootstrapped with [Create React App]. 
The features are detailed section-wise:
Home-----
Personal logo with animation
Overview/Landing page

About Me----
This section has details about my professional journey so far. 

Skills and Experience---
This section speaks about my area of expertise including the depth of experience and technical stack.
It uses a tag cloud library utility to display a set of skills in an animated fashion.

My Work-----
This section is a carousel with details of key projects that I have worked on in my professional career and their important aspects. 

Contact Me-----
This section uses Google map API and key to highlight my location of work and current address. 
It also has other contact details.


The portfolio loads only if the api call to https://hub.deloitte.com/api/portfolio/ab087a597208a761f1d11eafb6a75f68ff628444397697b3896947f4ea85122e is successful as it hosts key data points of my portfolio. (the URL is accessible only through Deloitte network / Deloitte VPN and Wifi).

How to serve the build folder using express js
===================================================
Open cmd and go to the folder folder location-- cd "add build folder path here"
Then execute the commands below:
npm install -g serve
serve -s build

View the portfolio on localhost port as displayed in the command prompt.


