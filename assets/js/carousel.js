document.addEventListener('DOMContentLoaded', () => {
  const updateCarousel = (carouselParentId) => {
    const carousel = document.querySelector(`${carouselParentId}`);
    const carouselItems = carousel.querySelectorAll('.carousel-item');
    const carouselItemTotal = carouselItems.length;
    const carouselItemsPerPage = 3;
    let carouselCurrentIndex = 0;
    // Function to changing visibility of carousel item 
    const carouselCarousel = () => {
      carouselItems.forEach((item, index) => {
        if (index >= carouselCurrentIndex && index < carouselCurrentIndex + carouselItemsPerPage) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }
    // Initialize
    carouselCarousel();
    // Next button
    carousel.querySelector('.carousel-control-next').addEventListener('click', () => {
      if (carouselCurrentIndex + carouselItemsPerPage < carouselItemTotal) {
        carouselCurrentIndex += 1;
        carouselCarousel();
      }
    });
    // Prev button
    carousel.querySelector('.carousel-control-prev').addEventListener('click', () => {
      if (carouselCurrentIndex - 1 >= 0) {
        carouselCurrentIndex -= 1;
        carouselCarousel();
      }
    });
  }
  
  updateCarousel('#carouselExampleCaptions1');
  updateCarousel('#carouselExampleCaptions2');
});
