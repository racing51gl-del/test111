document.addEventListener('DOMContentLoaded', () => {

    // 사용자 안내: 이 곳의 hikingData 배열을 수정하여 등산 기록을 관리할 수 있습니다.
    // 각 {} 블록이 하나의 등산 기록 카드에 해당합니다.
    // 예시: { id: 21, mountain: '새로운 산', date: '2024-12-31', distance: 10, elevation: 1000, lat: 37.0, lng: 127.0, caption: '새해 첫 등산!', image: '이미지_URL' },
    const hikingData = [
        { id: 1, mountain: '관악산', date: '2024-05-12', distance: 8.2, elevation: 632, lat: 37.445, lng: 126.964, caption: '오랜만에 찾은 관악산. 날씨가 정말 좋았어요!', image: 'https://images.unsplash.com/photo-1589182373726-e4f658852a35?q=80&w=2070&auto=format&fit=crop' },
        { id: 2, mountain: '북한산', date: '2024-04-28', distance: 9.5, elevation: 836, lat: 37.659, lng: 126.977, caption: '백운대 정상에서 바라본 서울 풍경은 언제나 최고!', image: 'https://images.unsplash.com/photo-1579343343355-175a13aa555c?q=80&w=2070&auto=format&fit=crop' },
        { id: 3, mountain: '도봉산', date: '2024-04-14', distance: 7.1, elevation: 740, lat: 37.699, lng: 127.016, caption: '자운봉 코스는 조금 힘들었지만 보람 있었네요.', image: 'https://images.unsplash.com/photo-1615848576475-b016f4425656?q=80&w=2070&auto=format&fit=crop' },
        { id: 4, mountain: '수락산', date: '2024-03-31', distance: 6.8, elevation: 638, lat: 37.701, lng: 127.086, caption: '기차바위, 언제 타도 짜릿한 경험.', image: 'https://images.unsplash.com/photo-1593431684942-2521a2f3c35b?q=80&w=1974&auto=format&fit=crop' },
        { id: 5, mountain: '청계산', date: '2024-03-17', distance: 10.5, elevation: 620, lat: 37.424, lng: 127.062, caption: '매봉에서 먹는 막걸리 맛은 꿀맛!', image: 'https://images.unsplash.com/photo-1533221343306-697f48a4a754?q=80&w=2070&auto=format&fit=crop' },
        { id: 6, mountain: '남산', date: '2024-02-25', distance: 5.5, elevation: 262, lat: 37.551, lng: 126.988, caption: '가볍게 산책하기 좋은 남산 둘레길.', image: 'https://images.unsplash.com/photo-1572903127362-a7d36952b6d0?q=80&w=2070&auto=format&fit=crop' },
        { id: 7, mountain: '인왕산', date: '2024-02-11', distance: 4.0, elevation: 338, lat: 37.579, lng: 126.958, caption: '성곽길을 따라 걷는 야경이 정말 아름다워요.', image: 'https://images.unsplash.com/photo-1566453775191-45f8f5e71c4a?q=80&w=2070&auto=format&fit=crop' },
        { id: 8, mountain: '설악산', date: '2023-10-15', distance: 15.2, elevation: 1708, lat: 38.119, lng: 128.465, caption: '가을 단풍 구경은 역시 설악산 대청봉!', image: 'https://images.unsplash.com/photo-1572339891823-64a665b3994c?q=80&w=2070&auto=format&fit=crop' },
        { id: 9, mountain: '지리산', date: '2023-09-20', distance: 25.5, elevation: 1915, lat: 35.337, lng: 127.731, caption: '천왕봉 일출, 평생 잊지 못할 감동.', image: 'https://images.unsplash.com/photo-1594954452263-95633a2a44e9?q=80&w=2070&auto=format&fit=crop' },
        { id: 10, mountain: '한라산', date: '2023-08-05', distance: 18.6, elevation: 1950, lat: 33.361, lng: 126.530, caption: '백록담의 신비로운 분위기에 압도당하다.', image: 'https://images.unsplash.com/photo-1578978749039-4aa651d62bed?q=80&w=2070&auto=format&fit=crop' },
        { id: 11, mountain: '아차산', date: '2023-11-12', distance: 3.5, elevation: 287, lat: 37.556, lng: 127.102, caption: '고구려의 숨결이 느껴지는 아차산성.', image: 'https://images.unsplash.com/photo-1622359302685-6129885885c3?q=80&w=2070&auto=format&fit=crop' },
        { id: 12, mountain: '불암산', date: '2023-11-26', distance: 5.0, elevation: 508, lat: 37.668, lng: 127.103, caption: '거북바위를 찾아보는 재미가 쏠쏠.', image: 'https://images.unsplash.com/photo-1593504149026-66d4d16e0436?q=80&w=1974&auto=format&fit=crop' },
        { id: 13, mountain: '용마산', date: '2023-12-10', distance: 4.2, elevation: 348, lat: 37.568, lng: 127.094, caption: '용마봉에서 바라보는 중랑천과 서울의 모습.', image: 'https://images.unsplash.com/photo-1660934165992-491b2e55a8ab?q=80&w=1974&auto=format&fit=crop' },
        { id: 14, mountain: '소요산', date: '2023-07-22', distance: 6.0, elevation: 587, lat: 37.935, lng: 127.065, caption: '여름 계곡 산행으로 더위를 싹 날렸어요.', image: 'https://images.unsplash.com/photo-1533221343306-697f48a4a754?q=80&w=2070&auto=format&fit=crop' },
        { id: 15, mountain: '감악산', date: '2023-06-18', distance: 7.5, elevation: 675, lat: 37.899, lng: 126.904, caption: '출렁다리 위에서 아찔한 스릴을 맛보다!', image: 'https://images.unsplash.com/photo-1615848576475-b016f4425656?q=80&w=2070&auto=format&fit=crop' },
        { id: 16, mountain: '명성산', date: '2023-05-21', distance: 8.0, elevation: 923, lat: 38.106, lng: 127.319, caption: '억새밭이 장관, 가을에 다시 와야겠어요.', image: 'https://images.unsplash.com/photo-1589182373726-e4f658852a35?q=80&w=2070&auto=format&fit=crop' },
        { id: 17, mountain: '계룡산', date: '2023-04-09', distance: 11.0, elevation: 845, lat: 36.353, lng: 127.242, caption: '삼불봉 자연성릉의 멋진 경치.', image: 'https://images.unsplash.com/photo-1579343343355-175a13aa555c?q=80&w=2070&auto=format&fit=crop' },
        { id: 18, mountain: '속리산', date: '2023-03-12', distance: 12.5, elevation: 1058, lat: 36.541, lng: 127.834, caption: '문장대에 올라 속세를 벗어난 기분.', image: 'https://images.unsplash.com/photo-1594954452263-95633a2a44e9?q=80&w=2070&auto=format&fit=crop' },
        { id: 19, mountain: '내장산', date: '2022-11-06', distance: 9.0, elevation: 763, lat: 35.485, lng: 126.883, caption: '내장사 단풍 터널은 정말 환상적!', image: 'https://images.unsplash.com/photo-1572339891823-64a665b3994c?q=80&w=2070&auto=format&fit=crop' },
        { id: 20, mountain: '덕유산', date: '2022-12-25', distance: 13.0, elevation: 1614, lat: 35.856, lng: 127.742, caption: '크리스마스에 만난 환상적인 설경, 상고대.', image: 'https://images.unsplash.com/photo-1578978749039-4aa651d62bed?q=80&w=2070&auto=format&fit=crop' },
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
                    <p class="caption">${hike.caption}</p>
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
        const map = L.map(mapElement).setView([37.5665, 126.9780], 9);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        hikingData.forEach(hike => {
            const marker = L.marker([hike.lat, hike.lng]).addTo(map);
            marker.bindPopup(`<b>${hike.mountain}</b><br>${hike.caption}`);

            marker.on('click', () => {
                const card = document.getElementById(`hike-${hike.id}`);
                if (card) {
                    card.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

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

    renderLogs();
    renderSummary();
    initializeMap();
});