
# Project Blueprint

## Overview

A simple, static "Partnership Inquiry" contact form website. The form collects a user's name, email, and a message and submits the data to Formspree.

## Current Features & Design

*   **Structure:** A single `index.html` page.
*   **Styling:** A single `style.css` file providing basic layout and styles with CSS variables for theming.
*   **Functionality:** 
    *   An HTML form that sends data to a Formspree endpoint upon submission.
    *   A dark/light mode theme toggle that persists using `localStorage`.
    *   The theme toggle button dynamically shows "다크모드" (Dark Mode) or "라이트모드" (Light Mode) based on the current theme.

## Plan for Current Request: Update Initial Button Text

1.  **HTML (`index.html`):**
    *   Change the default text of the `#theme-toggle` button from "Toggle Theme" to "다크모드". This ensures the correct text is displayed before the JavaScript loads.
2.  **GitHub:** Commit and push the changes to the remote repository.
