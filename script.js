const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !phone) {
    formMessage.textContent = 'Veuillez remplir votre nom et votre téléphone.';
    return;
  }

  formMessage.textContent = 'Merci ! Votre demande a bien été envoyée. Nous vous contacterons bientôt.';
  contactForm.reset();

  const whatsappMessage = `Nom: ${name}\nTéléphone: ${phone}\nMessage: ${message}`;
  const whatsappUrl = `https://wa.me/212684329935?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(whatsappUrl, '_blank');
});
