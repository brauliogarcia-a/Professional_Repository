<script>
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    // Selecciona el botón "Conoce Más" solo dentro del slider de servicio
    const botonServicio = document.querySelector(
      '.swiper-slide.btn-slider-servicio .button.solid_color a.primary-color[href*="aplicaciones/servicio"]'
    );

    if (botonServicio) {
      botonServicio.classList.add("banner-button-servicio");
      console.log("Clase .cta-servicio-banner añadida correctamente");
    } else {
      console.warn("No se encontró el botón del banner de Servicio");
    }
  }, 1200); // Espera 1.2 segundos por si el slider tarda en cargar
});
</script>