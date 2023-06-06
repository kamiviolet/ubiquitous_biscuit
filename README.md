# Ubiquitous Biscuit

## Purpose
Ubiquitous Biscuit (aka NC news) is a full-stack project inspired by Reddit or Quora which I created during the course of Northcoders software engineering bootcamp to demonstrate what I have learnt. This project is still in development and all updates will be announced in github.

The deployed version: https://ubiquitous-biscuit.netlify.app/

This repository is mainly for the front-end part, for the back-end part of the project, please visit the following link:

https://github.com/kamiviolet/my-nc-news


## Toolkit
JavaScript(React), React Router, Vite, Avios, HTML5, CSS3

## Run the app in local environment
Instead of the deployed version abovementioned, you may want to follow the steps below to run the app locally.

1. Fork the repository (If you do not have a github account, you may want to create one. Alternatively, you may download the zipped file in the Code green button - where normally for cloning the repository, and skip step 1 & 2)

2. Clone the repository: https://github.com/[YOUR_GIT_ACCOUNT_NAME]/ubiquitous_biscuit.git

3. Go to terminal of your computer (make sure you have installed Node in your computer), orient yourself to the location you wish to have the repository, run:

   `git clone [URL in step 2]`

4. Still in terminal, change the directory to the newly created folder (the cloned repository), run npm install so it will install all dependencies needed for running the app:

   `cd [local path of the cloned repository]`

5. you may then edit the repository in your preferred IDE (e.g. Visual Studio Code, Atom, etc) and run the following code to preview the app in localhost:

   `npm run dev`

## Required environment
The app is built with Node.js version 20 but has been tested to run in Node.js version 14. Yet, it is highly recommended to run it in the most updated version of Node.

## Core Features
- View a list of articles
- View a list of articles under a particular topic
- Vote an existing article
- Leave comment to an existing article
- Create your own account, i.e. sign up function
- Log in to own account
- View profile of members
- Update account information in own profile
- Post a new article if logged in
- Delete own article(s) or comment(s) 
- Sort a list of article by date / comment count / votes, in either ascending / descending order

## Features to be added
- Edit own article(s) or comment(s)
- Deactivate your membership
- Enable admin to add new topic
- Allow members to bookmark their favorite articles