document.addEventListener('DOMContentLoaded', () => {

    const hikingData = [
        {
            mountain: '관악산',
            date: '2024-05-12',
            distance: 8.2,
            elevation: 632,
            image: 'https://via.placeholder.com/400x200.png?text=Gwanaksan'
        },
        {
            mountain: '북한산',
            date: '2024-04-28',
            distance: 9.5,
            elevation: 836,
            image: 'https://via.placeholder.com/400x200.png?text=Bukhansan'
        },
        {
            mountain: '도봉산',
            date: '2024-04-14',
            distance: 7.1,
            elevation: 740,
            image: 'https://via.placeholder.com/400x200.png?text=Dobongsan'
        },
        {
            mountain: '수락산',
            date: '2024-03-31',
            distance: 6.8,
            elevation: 638,
            image: 'https://via.placeholder.com/400x200.png?text=Suraksan'
        },
        {
            mountain: '청계산',
            date: '2024-03-17',
            distance: 10.5,
            elevation: 620,
            image: 'https://via.placeholder.com/400x200.png?text=Cheonggyesan'
        }
    ];

    const logContainer = document.getElementById('log-container');
    const summaryContainer = document.getElementById('summary');

    function renderLogs() {
        logContainer.innerHTML = '';
        hikingData.forEach(hike => {
            const card = document.createElement('div');
            card.className = 'log-card';
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
            <div class="summary-item">
                <h3>총 등반 횟수</h3>
                <p>${totalHikes}회</p>
            </div>
            <div class="summary-item">
                <h3>총 거리</h3>
                <p>${totalDistance} km</p>
            </div>
            <div class="summary-item">
                <h3>총 상승고도</h3>
                <p>${totalElevation} m</p>
            </div>
        `;
    }

    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const updateButtonText = () => {
        if (body.classList.contains('dark-mode')) {
            themeToggle.textContent = '라이트모드';
        } else {
            themeToggle.textContent = '다크모드';
        }
    };

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    }

    updateButtonText();

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.setItem('theme', '');
        }
        updateButtonText();
    });

    // Initial Render
    renderLogs();
    renderSummary();
});