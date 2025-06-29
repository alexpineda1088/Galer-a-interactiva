const imageUrlInput = document.getElementById('imageUrl');
const addImageBtn = document.getElementById('addImageBtn');
const deleteImageBtn = document.getElementById('deleteImageBtn');
const gallery = document.getElementById('gallery');

let selectedImage = null;

addImageBtn.addEventListener('click', () => {
    const url = imageUrlInput.value.trim();
    if (url) {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Imagen de galería';
        img.addEventListener('click', () => selectImage(img));
        gallery.appendChild(img);
        imageUrlInput.value = '';
    } else {
        alert('Ingrese una URL válida.');
    }
});

function selectImage(img) {
    if (selectedImage) {
        selectedImage.classList.remove('selected');
    }
    img.classList.add('selected');
    selectedImage = img;
}

deleteImageBtn.addEventListener('click', () => {
    if (selectedImage) {
        gallery.removeChild(selectedImage);
        selectedImage = null;
    } else {
        alert('No hay imagen seleccionada para eliminar.');
    }
});

// Atajo de teclado: presionar "Enter" para agregar imagen
imageUrlInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addImageBtn.click();
    }
});
