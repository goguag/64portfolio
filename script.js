function drawLines() {
    const svg = document.querySelector('.connections-svg');
    if (!svg) return;
    svg.innerHTML = '';

    document.querySelectorAll('.hub').forEach(hub => {
        const title = hub.querySelector('.hub-title');
        const nodes = hub.querySelectorAll('.node');
        
        // ვიღებთ სათაურის პოზიციას
        const titleRect = title.getBoundingClientRect();
        const startX = titleRect.left + titleRect.width / 2;
        const startY = titleRect.bottom;

        nodes.forEach(node => {
            const nodeRect = node.getBoundingClientRect();
            const endX = nodeRect.left + nodeRect.width / 2;
            const endY = nodeRect.top;

            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", startX);
            line.setAttribute("y1", startY);
            line.setAttribute("x2", endX);
            line.setAttribute("y2", endY);
            line.setAttribute("stroke", "rgba(255, 255, 255, 0.2)");
            line.setAttribute("stroke-width", "1");
            svg.appendChild(line);
        });
    });
}
