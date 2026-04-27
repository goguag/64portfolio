// ვარსკვლავების გენერაცია
const container = document.getElementById('stars-container');
for (let i = 0; i < 150; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 2 + 'px';
    star.style.width = size;
    star.style.height = size;
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    if (Math.random() > 0.8) star.style.background = '#ffcc00'; // ყვითელი ვარსკვლავები
    container.appendChild(star);
}

// მაუსის მოძრაობაზე რხევა
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    document.querySelectorAll('.hub').forEach(hub => {
        hub.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});
