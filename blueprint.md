# Project Blueprint

## Overview

A web application to systematically display and analyze the hiking records from the Instagram account "slamdunk51". The site features a modern, card-based interface, an interactive map, and a summary of key statistics. It also includes a user-friendly dark/light mode theme toggle.

## Features & Design

*   **Structure:** A single-page application (`index.html`) with an interactive map.
*   **Styling (`style.css`):**
    *   A modern, responsive design with a dark/light theme.
    *   A card-based layout for hiking records.
    *   Dedicated styling for the map container.
*   **Functionality (`main.js`):**
    *   **Manual Data Management:** The application uses a comprehensive, manually curated dataset in `main.js`. This approach was chosen because direct, automated fetching from Instagram is not feasible due to technical and platform restrictions. The data is structured to be easily edited by the user.
    *   **Rich Data Structure:** The dataset includes `id`, `mountain`, `date`, `distance`, `elevation`, `lat`, `lng`, a `caption` for a short description, and a realistic `image` URL for each hike.
    *   **Interactive Map (Leaflet.js):**
        *   An interactive map displays markers for each hike location.
        *   Clicking a map marker smoothly scrolls the page to the corresponding hike card.
    *   **Dynamic Rendering:** Hiking cards (including the new caption) and summary statistics are dynamically generated from the data.
    *   **Theme Toggle:** A persistent dark/light mode toggle.

## Plan for Current Request: Reflect Real Posts via Manual Data Enhancement

1.  **Acknowledge Limitation:** Explain to the user that direct Instagram integration is not possible.
2.  **Propose Manual Curation:** Suggest enhancing the application by manually adding a rich, realistic dataset that mimics the user's actual posts.
3.  **`main.js` Update:**
    *   **Expand Data Structure:** Add a `caption` field to the `hikingData` objects.
    *   **Enrich Data:** Replace the placeholder data with a larger, more realistic dataset (approx. 20 entries) including plausible details and high-quality placeholder images.
4.  **`index.html` & `style.css` Update:**
    *   Modify the card structure in `index.html` (as rendered by `main.js`) to include the new `caption` field.
    *   Add styling for the caption in `style.css` for better visual presentation.
5.  **Commit and Deploy:** Save all changes to the GitHub repository.
6.  **Provide Guidance:** Clearly explain to the user where and how they can edit the `hikingData` array in `main.js` to manage their hiking log in the future.
