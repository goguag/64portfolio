function drawLines() {
    const svg = document.querySelector('.connections-svg');
    svg.innerHTML = ''; // გასუფთავება გადახატვისას

    document.querySelectorAll('.hub').forEach(hub => {
        const title = hub.querySelector('.hub-title');
        const nodes = hub.querySelectorAll('.node');
        const titleRect = title.getBoundingClientRect();
        const containerRect = svg.getBoundingClientRect();

        const startX = titleRect.left + titleRect.width / 2 - containerRect.left;
        const startY = titleRect.bottom - containerRect.top;

        nodes.forEach(node => {
            const nodeRect = node.getBoundingClientRect();
            const endX = nodeRect.left + nodeRect.width / 2 - containerRect.left;
            const endY = nodeRect.top - containerRect.top;

            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", startX);
            line.setAttribute("y1", startY);
            line.setAttribute("x2", endX);
            line.setAttribute("y2", endY);
            svg.appendChild(line);
        });
    });
}

// ვარსკვლავების შექმნა
function createStars() {
    const container = document.getElementById('stars-container');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2 + 'px';
        star.style.width = size;
        star.style.height = size;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 4 + 's';
        container.appendChild(star);
    }
}

createStars();
window.onload = drawLines;
window.onresize = drawLines; // ზომის შეცვლისას ხაზები გადაიხატება
