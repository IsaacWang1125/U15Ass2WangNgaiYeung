document.addEventListener('DOMContentLoaded', function () {
  const image = document.querySelector('.blur-image');

  image.addEventListener('click', function () {
    alert('Image clicked!');
  });
});

// ----------------------------------------------------------------------------------- Body ----------------------------------------------------------------------------------- //

// Array (Store Images)
const images1 = ['image/ChiartyHistory1.jpg', 'image/ChiartyHistory2.jpg', 'image/ChiartyHistory3.jpg']; // Images for first image box
const images2 = ['image/SecondChiartyHistory1.jpg', 'image/SecondChiartyHistory2.jpg', 'image/SecondChiartyHistory3.jpg']; // Images for second image box
const images3 = ['image/ThirdChiartyHistory1.jpg', 'image/ThirdChiartyHistory2.jpg', 'image/ThirdChiartyHistory3.jpg']; // Images for third image box

// Current index; set to 0
let currentIndex1 = 0;
let currentIndex2 = 0;
let currentIndex3 = 0;

function changeImage(direction, imageNumber) {
    let images;
    let currentIndex;

    if (imageNumber === 1) {
        images = images1;
        currentIndex = currentIndex1;
    } else if (imageNumber === 2) {
        images = images2;
        currentIndex = currentIndex2;
    } else if (imageNumber === 3) {
        images = images3;
        currentIndex = currentIndex3;
    }

    if (direction === 'right') {
        currentIndex = (currentIndex + 1) % images.length; // Go to next image, loop back to 0 if at the end
    } else if (direction === 'left') {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Go to previous image, loop back to the last if at the start
    }

    // Set the new image based on the current index
    if (imageNumber === 1) {
        document.getElementById('image1').src = images[currentIndex];
        currentIndex1 = currentIndex;
    } else if (imageNumber === 2) {
        document.getElementById('image2').src = images[currentIndex];
        currentIndex2 = currentIndex;
    } else if (imageNumber === 3) {
        document.getElementById('image3').src = images[currentIndex];
        currentIndex3 = currentIndex;
    }
}
