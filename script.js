function drawLines() {
    const svg = document.querySelector('.connections-svg');
    const container = document.querySelector('.main-container');
    if (!svg || !container) return;

    svg.innerHTML = ''; // გასუფთავება
    const containerRect = container.getBoundingClientRect();

    document.querySelectorAll('.hub').forEach(hub => {
        const title = hub.querySelector('.hub-title');
        const nodes = hub.querySelectorAll('.node');
        
        if (!title || nodes.length === 0) return;

        const titleRect = title.getBoundingClientRect();
        
        // საწყისი წერტილი სათაურის ქვედა ცენტრია
        const startX = (titleRect.left + titleRect.width / 2) - containerRect.left;
        const startY = titleRect.bottom - containerRect.top;

        nodes.forEach(node => {
            const nodeRect = node.getBoundingClientRect();
            
            // საბოლოო წერტილი რგოლის ზედა ცენტრია
            const endX = (nodeRect.left + nodeRect.width / 2) - containerRect.left;
            const endY = nodeRect.top - containerRect.top;

            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", startX);
            line.setAttribute("y1", startY);
            line.setAttribute("x2", endX);
            line.setAttribute("y2", endY);
            line.setAttribute("stroke", "rgba(255, 255, 255, 0.15)");
            line.setAttribute("stroke-width", "1");
            svg.appendChild(line);
        });
    });
}

// ვარსკვლავები
function createStars() {
    const starContainer = document.getElementById('stars-container');
    if (!starContainer) return;
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2 + 'px';
        star.style.width = size;
        star.style.height = size;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 4 + 's';
        if (Math.random() > 0.8) star.style.background = '#ffcc00'; // ზოგი ყვითელია
        starContainer.appendChild(star);
    }
}

// ინიციალიზაცია
createStars();
// ველოდებით შრიფტების ჩატვირთვას, რომ ზომები ზუსტად გაიზომოს
window.addEventListener('load', drawLines);
window.addEventListener('resize', drawLines);

// დამატებითი შემოწმება GitHub Pages-ისთვის
setTimeout(drawLines, 500);
