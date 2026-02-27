const images = [
    "WhatsApp Image 2026-02-20 at 18.21.15 (1).jpeg",
    "WhatsApp Image 2026-02-20 at 18.21.15 (2).jpeg",
    "WhatsApp Image 2026-02-20 at 18.21.15.jpeg",
    "WhatsApp Image 2026-02-20 at 18.21.16 (1).jpeg",
    "WhatsApp Image 2026-02-20 at 18.21.16 (2).jpeg",
    "WhatsApp Image 2026-02-20 at 18.21.16.jpeg",
    "WhatsApp Image 2026-02-20 at 18.21.17 (1).jpeg",
    "WhatsApp Image 2026-02-20 at 18.21.17 (2).jpeg",
    "WhatsApp Image 2026-02-20 at 18.21.17 (3).jpeg",
    "WhatsApp Image 2026-02-20 at 18.21.17.jpeg",
    "WhatsApp Image 2026-02-20 at 18.21.18 (1).jpeg",
    "WhatsApp Image 2026-02-20 at 18.21.18 (2).jpeg",
    "WhatsApp Image 2026-02-20 at 18.21.18 (3).jpeg",
    "WhatsApp Image 2026-02-20 at 18.21.18 (4).jpeg",
    "WhatsApp Image 2026-02-20 at 18.21.18.jpeg",
    "WhatsApp Image 2026-02-20 at 18.21.19 (1).jpeg",
    "WhatsApp Image 2026-02-20 at 18.21.19 (2).jpeg",
    "WhatsApp Image 2026-02-20 at 18.21.19 (3).jpeg",
    "WhatsApp Image 2026-02-20 at 18.21.19 (4).jpeg",
    "WhatsApp Image 2026-02-20 at 18.21.19.jpeg",
    "WhatsApp Image 2026-02-20 at 18.21.20 (1).jpeg",
    "WhatsApp Image 2026-02-20 at 18.21.20 (3).jpeg",
    "WhatsApp Image 2026-02-20 at 18.21.20 (4).jpeg",
    "WhatsApp Image 2026-02-20 at 18.21.20.jpeg",
    "WhatsApp Image 2026-02-20 at 18.21.21 (1).jpeg",
    "WhatsApp Image 2026-02-20 at 18.21.21 (3).jpeg",
    "WhatsApp Image 2026-02-20 at 18.21.21 (4).jpeg",
    "WhatsApp Image 2026-02-20 at 18.21.21.jpeg",
    "WhatsApp Image 2026-02-20 at 18.21.22 (1).jpeg",
    "WhatsApp Image 2026-02-20 at 18.21.22.jpeg",
    "proyecto-1.jpeg",
    "proyecto-2.jpeg",
    "proyecto-3.jpeg"
];

const track = document.getElementById('carousel-track');

if (track) {
    // Duplicate the image set for seamless looping
    const allImages = [...images, ...images];
    
    allImages.forEach(imgName => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        
        const img = document.createElement('img');
        img.src = `./images/trabajos/${imgName}`;
        img.alt = "Trabajo Realizado - V. Persy";
        img.loading = "lazy";
        
        item.appendChild(img);
        track.appendChild(item);
    });
}

console.log("App initialized with infinite carousel.");

// WhatsApp Redirect Logic
const whatsappBtn = document.getElementById('whatsapp-btn');
const whatsappInput = document.getElementById('whatsapp-message');

if (whatsappBtn && whatsappInput) {
    whatsappBtn.addEventListener('click', () => {
        const message = encodeURIComponent(whatsappInput.value);
        if (message) {
            window.open(`https://wa.me/5491138566700?text=${message}`, '_blank');
        } else {
            alert('Por favor, escriba un mensaje antes de enviar.');
        }
    });
}

