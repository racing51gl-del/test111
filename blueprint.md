
# Project Blueprint

## Overview

A simple, static "Partnership Inquiry" contact form website. The form collects a user's name, email, and a message and submits the data to Formspree.

## Current Features & Design

*   **Structure:** A single `index.html` page.
*   **Styling:** A single `style.css` file providing basic layout and styles with CSS variables for theming.
*   **Functionality:** 
    *   An HTML form that sends data to a Formspree endpoint upon submission.
    *   A dark/light mode theme toggle that persists using `localStorage`.

## Plan for Current Request: Dynamic Theme Button Text

1.  **JavaScript (`main.js`):**
    *   Modify the script to dynamically change the text of the `#theme-toggle` button.
    *   On page load, set the button text to "다크모드" (Dark Mode) if the theme is light, and "라이트모드" (Light Mode) if the theme is dark.
    *   Update the button text accordingly whenever the theme is toggled.
2.  **GitHub:** Commit and push the changes to the remote repository.
