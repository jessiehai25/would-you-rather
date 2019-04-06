# Would You Rather Project

Would You Rather is a platform for people to raise questions and answer other's question. And all members will be ranked based on the number of questions they raised and number of answers they have answered. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation


* install all project dependencies with `npm install`
* start the development server with `npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## What You're Getting
```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
│   ├── index.css # Styles for the app. 
│   ├── index.js # This is the root of the app. 
│   ├── serviceWorker.js # This is the root of the app. 
│   ├── actions
│   │   ├── authedUser.js
│   │   ├── questions.js
│   │   ├── shared.js
│   │   └── users.js
│   ├── components
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── Dashboard.js
│   │   ├── ErrorPage.js
│   │   ├── LeaderBoard.js
│   │   ├── Login.js
│   │   ├── Nav.js
│   │   ├── NewQuestion.js
│   │   ├── Question.js
│   │   ├── QuestionBtn.js
│   │   └── Result.js
│   ├── middleware
│   │   ├── index.js
│   │   └── logger.js
│   ├── reducers
│   │   ├── authedUser.js
│   │   ├── index.js
│   │   ├── questions.js
│   │   └── users.js
│   └── utils
│   │   ├── _DATA.js
│   │   ├── api.js
│   │   └── helper.js
