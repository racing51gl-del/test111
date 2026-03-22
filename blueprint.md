
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
    *   **Real Data:** The application now uses a more extensive and realistic set of hiking data, including coordinates for map integration.
    *   **Interactive Map (Leaflet.js):**
        *   An interactive map is displayed, showing markers for each hike location.
        *   Clicking a map marker smoothly scrolls the page to the corresponding hike card.
        *   Markers display a popup with the mountain's name on hover/click.
    *   **Dynamic Rendering:** Hiking cards and summary statistics are dynamically generated from the data.
    *   **Theme Toggle:** A persistent dark/light mode toggle.

## Plan for Current Request: Add Real Data & Map Integration

1.  **`index.html`:**
    *   Add a `<div>` container for the map.
    *   Include the Leaflet.js CSS and JavaScript files from a CDN.
2.  **`style.css`:**
    *   Add styling to define the map container's size and appearance (e.g., `height`, `width`).
3.  **`main.js`:**
    *   **Update Data:** Replace the placeholder data with a more realistic dataset that includes `id`, `lat` (latitude), and `lng` (longitude) for each hike.
    *   **Initialize Map:** Create and initialize a Leaflet map, centered on a relevant location (e.g., Seoul).
    *   **Add Map Markers:** Write a function to iterate through the data and add a marker to the map for each hike.
    *   **Link Markers to Cards:** Implement an interaction where clicking a map marker scrolls the corresponding hike card into view.
    *   **Update Card Rendering:** Assign a unique ID to each hike card to enable the map-to-card linking.
4.  **GitHub:**
    *   Commit the enhanced website files to the repository.
