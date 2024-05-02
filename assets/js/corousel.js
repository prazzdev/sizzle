document.addEventListener('DOMContentLoaded', function () {
    // Carousel pertama
    const carousel1 = document.querySelector('#carouselExampleCaptions1');
    const carouselItems1 = carousel1.querySelectorAll('.carousel-item');
    const totalItems1 = carouselItems1.length;
    const itemsPerPage1 = 3;
    let currentIndex1 = 0;

    // Fungsi untuk memperbarui visibilitas item-carousel pertama
    function updateCarousel1() {
      carouselItems1.forEach((item, index) => {
        if (index >= currentIndex1 && index < currentIndex1 + itemsPerPage1) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }

    // Initial update carousel pertama
    updateCarousel1();

    // Tombol Next carousel pertama
    carousel1.querySelector('.carousel-control-next').addEventListener('click', function () {
      if (currentIndex1 + itemsPerPage1 < totalItems1) {
        currentIndex1 += 1;
        updateCarousel1();
      }
    });

    // Tombol Prev carousel pertama
    carousel1.querySelector('.carousel-control-prev').addEventListener('click', function () {
      if (currentIndex1 - 1 >= 0) {
        currentIndex1 -= 1;
        updateCarousel1();
      }
    });

    // Carousel kedua
    const carousel2 = document.querySelector('#carouselExampleCaptions2');
    const carouselItems2 = carousel2.querySelectorAll('.carousel-item');
    const totalItems2 = carouselItems2.length;
    const itemsPerPage2 = 3;
    let currentIndex2 = 0;

    // Fungsi untuk memperbarui visibilitas item-carousel kedua
    function updateCarousel2() {
      carouselItems2.forEach((item, index) => {
        if (index >= currentIndex2 && index < currentIndex2 + itemsPerPage2) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }

    // Initial update carousel kedua
    updateCarousel2();

    // Tombol Next carousel kedua
    carousel2.querySelector('.carousel-control-next').addEventListener('click', function () {
      if (currentIndex2 + itemsPerPage2 < totalItems2) {
        currentIndex2 += 1;
        updateCarousel2();
      }
    });

    // Tombol Prev carousel kedua
    carousel2.querySelector('.carousel-control-prev').addEventListener('click', function () {
      if (currentIndex2 - 1 >= 0) {
        currentIndex2 -= 1;
        updateCarousel2();
      }
    });
  });
