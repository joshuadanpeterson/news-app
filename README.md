# HeadlineHub

## Overview
HeadlineHub, formerly known as Simple News App, is a refined web application aimed at aggregating and displaying top news headlines utilizing the News API. This project is a continuation of the Week 5: Asynchronous Programming and APIs module of the Nucamp Boot Camp, now enhanced with a more intuitive user interface and additional functionalities like search and better organization of news items. It's crafted to provide a more engaging hands-on experience with working with APIs, managing API keys securely, and handling asynchronous operations in JavaScript.

## Technologies Used
- JavaScript
- Bootstrap for styling
- Parcel Bundler
- Node.js
- News API

## Setup

### Project Setup
1. Create a new folder named `headline-hub` in your course directory.
2. Navigate to the `headline-hub` directory in your terminal.
3. Initialize a new Node.js project with the command:
```bash
npm init -y
```
4. Install Parcel as a development dependency:
```bash
npm install --save-dev parcel
```

### File Structure
Create the following files:
- `index.html`
- `scripts.js`
- `styles.css`
- `.env`
- `.gitignore`

Update `package.json`:
```json
"description": "HeadlineHub is a lightweight and user-friendly news aggregation web application.",
"source": "index.html",
"scripts": {
    "start": "parcel --open"
}
```

### Adding Enhanced HTML
In `index.html`, add the new structured HTML to accommodate Bootstrap styling and a better layout for news items, as per the latest updates made in the project.

### Securing the API Key
1. Open `.env` and add your News API key:
```env
NEWS_API_KEY=YourApiKeyHere
```
2. Ensure the API key is kept secret and not committed to version control by updating `.gitignore` to exclude the `.env` file:
```gitignore
node_modules
.env
.parcel-cache
dist
```

### Initializing Git
1. Initialize a new Git repository in your project folder:
```bash
git init
```
2. Create a new repository on GitHub.
3. Connect your local repository to the remote repository:
```bash
git remote add origin YOUR_REPOSITORY_URL
```
4. Stage, commit, and push your files to the remote repository:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

## Usage
Run the following command to start the development server:
```bash
npm run start
```
Parcel will open the app in your default web browser. The app will now fetch and display top headlines from the News API on the page, with additional functionalities like search and a more visually appealing layout.

## Additional Resources
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [Parcel Getting Started Guide](https://parceljs.org/getting-started/webapp/)
- [Parcel ENV Documentation](https://parceljs.org/env.html)
- [Git Basics - Git Book](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- [GitHub Guide on Ignoring Files](https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files)

## License
This project is for educational purposes and is unlicensed under the ISC license, allowing for free use, modification, and distribution.