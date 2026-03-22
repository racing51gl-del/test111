
# Project Blueprint

## Overview

A simple, static "Partnership Inquiry" contact form website. The form collects a user's name, email, and a message and submits the data to Formspree.

## Current Features & Design

*   **Structure:** A single `index.html` page.
*   **Styling:** A single `style.css` file providing basic layout and styles.
*   **Functionality:** An HTML form that sends data to a Formspree endpoint upon submission.

## Plan for Current Request: Dark/Light Mode

1.  **HTML:** Add a toggle button to `index.html` to allow users to switch between themes.
2.  **CSS:**
    *   Refactor `style.css` to use CSS variables for colors to facilitate easy theme switching.
    *   Create two color palettes: one for light mode (default) and one for dark mode.
    *   The dark mode styles will be applied when a `.dark-mode` class is present on the `<body>` element.
3.  **JavaScript:**
    *   Create a new file, `main.js`.
    *   Implement logic to toggle the `.dark-mode` class on the `<body>` when the button is clicked.
    *   Use `localStorage` to save the user's theme preference, so it persists across sessions.
4.  **Link JS:** Link the new `main.js` file in `index.html`.
5.  **GitHub:** Commit and push all changes to the remote repository.
