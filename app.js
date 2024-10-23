// แสดงเวลาแบบ real time
function updateTime() {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const timeString = now.toLocaleTimeString('th-TH', options);
    document.getElementById('timeDisplay').textContent = timeString;
}
setInterval(updateTime, 1000);
updateTime();

// Burger bar
function toggleMenu() {
    const modal = document.getElementById('menuModal');
    modal.style.display = (modal.style.display === "block") ? "none" : "block";
}

// ปิด Burger bar
window.onclick = function(event) {
    const modal = document.getElementById('menuModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

//Header Type
document.addEventListener('DOMContentLoaded', function () {
    const text = "Welcome to my Portfolio";
    const h1 = document.querySelector('.typed');
    let index = 0;
    const lineLength = 30;

    function type() {
        if (index < text.length) {
            if (index > 0 && index % lineLength === 0) {
                h1.innerHTML += '<br>';
            }
            h1.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 30);
        }
    }

    type();
});

//about Copy
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied: ' + text);
    }).catch(err => {
        console.error('Error copying text: ', err);
    });
}
