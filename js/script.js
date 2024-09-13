document.addEventListener('mousemove', function(event) {
    let x = event.clientX / window.innerWidth;
    let y = event.clientY / window.innerHeight;

    let newGradient = `linear-gradient(${135 + (x * 45)}deg, #722436, #030001)`;
    document.getElementById('gradient-bg').style.background = newGradient;
});
