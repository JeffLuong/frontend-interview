# Assignment

## Code Challenge

The starter application included has some signficant issues that make it not work correctly, and a few underdeveloped features. Your task is to fix any errors in the code already, and build some simple features to match the given requirements below.

### Requirements

- Create a fork of this repository. All code changes should be made to your fork. If you'd rather not have a public fork, that's cool too. In that case please provide a zip of your solution, including the local .git folder, so that we can view your commit history!

- As a user (here just a fake one) should be able to login, with my extremely secure password, 'password'. An email address should also be required, but any should work.

- Once logged in, a user should be able to navigate to the `Profile` page, and update my name so that it appears on the home page instead of `Test User`

- On the repository page (which should mount the Repositories component), a user should be able to enter text into a field in order to search for repositories on github.

  - These results should automatically populate (without requiring a button press or enter keypress), however the request should only be sent when there's a lull in typing (rather than on every keystroke)
  - The results should be displayed as cards or a list, containing at least the following info:
    - Full name | description | Stargazers Count | Open issues Count | match score
  - Clicking the list or card of the item should change to a page /repositories/:id

- The page /repositories/:id should show extra detail about a specific repository

  - This page should show the info from the card, as well as
    - link to the Repos Issues
    - link to the Repos Pull Requests
    - Display the license, if there is one, with it's name, spdx_id and url (if exists)

- The app should strive to have high levels of accessibility, please take steps to enable where possible

- Write `production` level code while completing this task. Please be sure to handle potential errors where necessary, remove any unncessary logs/debugger statements, etc

### Limitations

`styled-components` and `react-router-dom` are both added as dependencies already. No other packages should be added.

Any http requests should be handled using `fetch`.

Styles should be added using only styled-components.

### Time

You should not take more than 4 hours of time on this, even if you feel incomplete, that's fine. Your time is important, too! We'd rather see what you can accomplish in that timeframe, rather than what you can do in unlimited time

## Question

Please, answer the following questions in this readme, underneath the question

1. Name a newer feature of javascript that you believe is extra useful, and discuss how you have used it in this project, or how you would use it if needed.

One newer feature of JS (ES2020) is the native support for dynamic imports. Although this was already kind of available using Webpack 4 + Babel 7, this new feature will allow apps to be chunked/code-splitted which will improve better initial load time (because the app will only load the currently required chunks rather than the entire app itself). I would have used this new feature to split the app at the route level, so the app will only load the currently viewed route.

2. What are 3 things you think `React` does very poorly? What tools do this better, if any?
- Although I love hooks in React, I feel that for any engineer who is learning it for the first time (or even experienced engineers) may take more time reading / understanding what hooks are doing in any given component. Class component lifecycle methods are clear and separated (visually) so it's easier to read at a quick glance.
- Global state management is quite difficult - especially if integrated with Redux. For any new engineer, it will take some time to wrap their head around all the different parts: reducers, actions, mapping state to props, mapping actions to props, etc. Ember.js may do this _slightly_ better from an intuitive standpoint (using Ember Data) because it is based on a more typical data modelling system. However that too has it's drawbacks.
- A pro of React is that you can easily make components and reuse them. However, in larger engineering teams it may be _too_ easy to create new components for every feature or change, which may lead to too much bloat. Engineering teams should take stock of current existing components in a project and re-use (or adapt them) any where necessary.

## Submissions

When submitting, please send a link to your fork of this repository or a zip of your completed project to the link provided when you received this repo

### Questions

Please, feel free to reach out directly with any questions you have about this project, let us know
