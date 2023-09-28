# Simple News App

## Overview
The Simple News App is a basic web application developed to fetch and display top news headlines using the News API. This project is part of the Week 5: Asynchronous Programming and APIs module of the Nucamp Boot Camp. It's designed to provide hands-on experience with working with APIs, managing API keys securely, and handling asynchronous operations in JavaScript.

## Technologies Used
- JavaScript
- Parcel Bundler
- Node.js
- News API

## Setup

### Project Setup
1. Create a new folder named `news-app` in your course directory.
2. Navigate to the `news-app` directory in your terminal.
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
- `.env`
- `.gitignore`

Update `package.json`:
```json
"description": "A simple news website",
"source": "index.html",
"scripts": {
    "start": "parcel --open"
}
```

### Adding Basic HTML
In `index.html`, add the following content:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple News App</title>
</head>
<body>
    <h1>Top Headlines</h1>
    <div id="news"></div>
    <script src="scripts.js" type="module"></script>
</body>
</html>
```

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
Parcel will open the app in your default web browser. The app will fetch and display top headlines from the News API on the page.

## Additional Resources
- [Parcel Getting Started Guide](https://parceljs.org/getting-started/webapp/)
- [Parcel ENV Documentation](https://parceljs.org/env.html)
- [Git Basics - Git Book](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- [GitHub Guide on Ignoring Files](https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files)

## License
This project is for educational purposes and is unlicensed.