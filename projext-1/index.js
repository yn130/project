function adjustHeadingSize() {
    const heading = document.getElementById('responsive-heading');
    const viewportWidth = window.innerWidth;

    const padding = viewportWidth / 25; 
    heading.style.padding = `${padding}px`;


    const fontSize = viewportWidth / 15; 
    heading.style.fontSize = `${fontSize}px`;
  }


  document.querySelectorAll('.card-figcaption').forEach(figcaption => {
    const aTag = document.createElement('a');
    aTag.setAttribute('href', '/');
    figcaption.prepend(aTag);
});


// document.querySelectorAll('.card-figcaption').forEach(figcaption => {
//     const aTag = document.createElement('a');
//     aTag.setAttribute('href', '#');
//     aTag.setAttribute('target', '_blank');
//     aTag.classList.add('image-figcaption-atag');
//     aTag.textContent = 'Appreciate this artwork';
    
//     figcaption.innerHTML = ''; 
//     figcaption.appendChild(aTag);
// });

