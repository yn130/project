const prevButton = document.getElementById('carousel-prev');
const nextButton = document.getElementById('carousel-next');
const storyList = document.querySelector('.story-list');
const scrollAmount = 200;

prevButton.addEventListener('click', function() {
    if (storyList.scrollLeft > 0) {
        storyList.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
});

nextButton.addEventListener('click', function() {
    if (storyList.scrollLeft < (storyList.scrollWidth - storyList.clientWidth)) {
        storyList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
});

// let carouselCount = 0;

// const handleClickBtn = (e) => {
//     const { value } = e.currentTarget.dataset;

//     if (value === 'left') {
//         carouselCount = Math.max(carouselCount - 200, 0);
//     } else {
//         const storyList = document.querySelector('.story-list');
//         const maxScrollLeft = storyList.scrollWidth - storyList.clientWidth;
//         carouselCount = Math.min(carouselCount + 200, maxScrollLeft);
//     }

//     document.querySelector('.story-list').scrollTo({
//         left: carouselCount,
//         behavior: 'smooth'
//     });
// };

// document.getElementById('carousel-prev').addEventListener('click', handleClickBtn);
// document.getElementById('carousel-next').addEventListener('click', handleClickBtn);

// console.log(handleClickBtn);