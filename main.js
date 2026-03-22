document.addEventListener('DOMContentLoaded', () => {

    const hikingData = [
        { id: 1, mountain: '관악산', date: '2024-05-12', distance: 8.2, elevation: 632, lat: 37.445, lng: 126.964, image: 'https://via.placeholder.com/400x200.png?text=Gwanaksan' },
        { id: 2, mountain: '북한산', date: '2024-04-28', distance: 9.5, elevation: 836, lat: 37.659, lng: 126.977, image: 'https://via.placeholder.com/400x200.png?text=Bukhansan' },
        { id: 3, mountain: '도봉산', date: '2024-04-14', distance: 7.1, elevation: 740, lat: 37.699, lng: 127.016, image: 'https://via.placeholder.com/400x200.png?text=Dobongsan' },
        { id: 4, mountain: '수락산', date: '2024-03-31', distance: 6.8, elevation: 638, lat: 37.701, lng: 127.086, image: 'https://via.placeholder.com/400x200.png?text=Suraksan' },
        { id: 5, mountain: '청계산', date: '2024-03-17', distance: 10.5, elevation: 620, lat: 37.424, lng: 127.062, image: 'https://via.placeholder.com/400x200.png?text=Cheonggyesan' },
        { id: 6, mountain: '남산', date: '2024-02-25', distance: 5.5, elevation: 262, lat: 37.551, lng: 126.988, image: 'https://via.placeholder.com/400x200.png?text=Namsan' },
        { id: 7, mountain: '인왕산', date: '2024-02-11', distance: 4.0, elevation: 338, lat: 37.579, lng: 126.958, image: 'https://via.placeholder.com/400x200.png?text=Inwangsan' },
    ];

    const logContainer = document.getElementById('log-container');
    const summaryContainer = document.getElementById('summary');
    const mapElement = document.getElementById('map');

    function renderLogs() {
        logContainer.innerHTML = '';
        hikingData.forEach(hike => {
            const card = document.createElement('div');
            card.className = 'log-card';
            card.id = `hike-${hike.id}`;
            card.innerHTML = `
                <img src="${hike.image}" alt="${hike.mountain}">
                <div class="log-card-content">
                    <h3>${hike.mountain}</h3>
                    <p><strong>날짜:</strong> ${hike.date}</p>
                    <p><strong>거리:</strong> ${hike.distance} km</p>
                    <p><strong>상승고도:</strong> ${hike.elevation} m</p>
                </div>
            `;
            logContainer.appendChild(card);
        });
    }

    function renderSummary() {
        const totalHikes = hikingData.length;
        const totalDistance = hikingData.reduce((sum, hike) => sum + hike.distance, 0).toFixed(1);
        const totalElevation = hikingData.reduce((sum, hike) => sum + hike.elevation, 0);

        summaryContainer.innerHTML = `
            <div class="summary-item"><h3>총 등반 횟수</h3><p>${totalHikes}회</p></div>
            <div class="summary-item"><h3>총 거리</h3><p>${totalDistance} km</p></div>
            <div class="summary-item"><h3>총 상승고도</h3><p>${totalElevation} m</p></div>
        `;
    }

    function initializeMap() {
        const map = L.map(mapElement).setView([37.5665, 126.9780], 10); // Centered on Seoul

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        hikingData.forEach(hike => {
            const marker = L.marker([hike.lat, hike.lng]).addTo(map);
            marker.bindPopup(`<b>${hike.mountain}</b>`);

            marker.on('click', () => {
                const card = document.getElementById(`hike-${hike.id}`);
                if (card) {
                    card.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const updateButtonText = () => {
        themeToggle.textContent = body.classList.contains('dark-mode') ? '라이트모드' : '다크모드';
    };

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    }
    updateButtonText();

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark-mode' : '');
        updateButtonText();
    });

    // Initial Render
    renderLogs();
    renderSummary();
    initializeMap();
});