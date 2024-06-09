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

