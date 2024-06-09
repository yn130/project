
document.getElementById('carousel-next').addEventListener('click', function() {
    const storyList = document.querySelector('.story-list');
    storyList.scrollLeft += 320;
});

document.getElementById('carousel-prev').addEventListener('click', function() {
    const storyList = document.querySelector('.story-list');
    storyList.scrollLeft -= 320;
});

