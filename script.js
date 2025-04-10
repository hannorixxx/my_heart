window.onload = function() {
    const heart = document.getElementById('heart');
    // Здесь можно добавить логику для генерации уникальных сердечек, если нужно
    heart.style.transform = `rotate(${Math.random() * 360}deg)`; // случайное вращение сердца
};