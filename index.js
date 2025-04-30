function shareOnWhatsApp() {
    const message = "Want to learn about how to help Fiordland National Park?\nCheck out this website:\n\n";
    const pageUrl = "https://jessicarramsay.github.io/supporting-fiordland/index.html"; 
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message + pageUrl)}`;
    window.open(whatsappUrl, '_blank'); 
}