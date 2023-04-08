async function fetchImages() {
    const response = await fetch('/images');
    const images = await response.json();
    const imageGrid = document.getElementById('image-grid');
  
    images.forEach(image => {
      const container = document.createElement('div');
      container.className = 'image-container';
  
      const img = document.createElement('img');
      img.src = '/uploads/' + image.path;
  
      const imageName = document.createElement('div');
      imageName.className = 'image-name';
      imageName.textContent = image.name;
  
      container.appendChild(img);
      container.appendChild(imageName);
      imageGrid.appendChild(container);
    });
  }
  
  fetchImages();
  