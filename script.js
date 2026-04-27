function drawLines() {
    const svg = document.querySelector('.connections-svg');
    const container = document.querySelector('.main-container');
    if (!svg || !container) return;

    svg.innerHTML = '';
    const containerRect = container.getBoundingClientRect();

    document.querySelectorAll('.hub').forEach(hub => {
        const title = hub.querySelector('.hub-title');
        const nodes = hub.querySelectorAll('.node');
        const titleRect = title.getBoundingClientRect();
        
        // ხაზი იწყება სათაურის შუა წერტილიდან
        const startX = (titleRect.left + titleRect.width / 2) - containerRect.left;
        const startY = titleRect.bottom - containerRect.top;

        nodes.forEach(node => {
            const nodeRect = node.getBoundingClientRect();
            
            // ხაზი სრულდება რგოლის ცენტრში
            const endX = (nodeRect.left + nodeRect.width / 2) - containerRect.left;
            const endY = (nodeRect.top + nodeRect.height / 2) - containerRect.top;

            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", startX);
            line.setAttribute("y1", startY);
            line.setAttribute("x2", endX);
            line.setAttribute("y2", endY);
            line.setAttribute("stroke", "rgba(255, 255, 255, 0.1)");
            line.setAttribute("stroke-width", "1");
            svg.appendChild(line);
        });
    });
}

// მუდმივი განახლება რხევის დასაჭერად
function animate() {
    drawLines();
    requestAnimationFrame(animate);
}

// ვარსკვლავები
function createStars() {
    const starContainer = document.getElementById('stars-container');
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2 + 'px';
        star.style.width = size;
        star.style.height = size;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        starContainer.appendChild(star);
    }
}

// პარალაქს ეფექტი
document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 60;
    const y = (window.innerHeight / 2 - e.pageY) / 60;
    document.querySelector('.main-container').style.transform = `translateX(${x}px) translateY(${y}px)`;
});

createStars();
window.addEventListener('load', () => {
    animate(); // ვიწყებთ მუდმივ ხატვას
});
window.addEventListener('resize', drawLines);
