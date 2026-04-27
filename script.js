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
        
        const startX = (titleRect.left + titleRect.width / 2) - containerRect.left;
        const startY = titleRect.bottom - containerRect.top;

        nodes.forEach(node => {
            const nodeRect = node.getBoundingClientRect();
            // ხაზი ზუსტად ბურთის ცენტრში უნდა მივიდეს
            const endX = (nodeRect.left + nodeRect.width / 2) - containerRect.left;
            const endY = (nodeRect.top + nodeRect.height / 2) - containerRect.top;

            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", startX);
            line.setAttribute("y1", startY);
            line.setAttribute("x2", endX);
            line.setAttribute("y2", endY);
            line.setAttribute("stroke", "rgba(255, 255, 255, 0.2)");
            line.setAttribute("stroke-width", "1.5");
            svg.appendChild(line);
        });
    });
}

function update() {
    drawLines();
    requestAnimationFrame(update);
}

// ინიციალიზაცია
window.addEventListener('load', () => {
    createStars(); // ვარსკვლავების ფუნქცია იგივე დატოვე
    update(); // იწყებს მუდმივ გადახატვას
});

window.addEventListener('resize', drawLines);
