document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll(".galerie-thumbnails img");
    const galleryMain = document.querySelector(".gallery-main");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("mouseover", function() {
            const newImage = document.createElement("img");
            newImage.src = this.src;
            newImage.alt = this.alt;

             // Supprimer les anciens boutons s'ils existent
             const existingButtons = galleryMain.querySelectorAll("button");
             existingButtons.forEach(button => {
                 button.remove();
             });

           // Remplacer l'image actuelle par la nouvelle
           const currentImage = galleryMain.querySelector("img");
           if (currentImage) {
               currentImage.replaceWith(newImage);
           } else {
               galleryMain.appendChild(newImage);
           }

           const buttonContainer = document.createElement("div");
           buttonContainer.className = "button-container";

           const prevButton = document.createElement("button");
           prevButton.appendChild(document.createTextNode("\u25C0"));

           const nextButton = document.createElement("button");
           nextButton.appendChild(document.createTextNode("\u25B6"));

           buttonContainer.appendChild(prevButton);
           buttonContainer.appendChild(nextButton);
           galleryMain.appendChild(buttonContainer);


       });
   });
});

document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll(".galerie-thumbnails img");
    const galleryMain = document.querySelector(".gallery-main");
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";
    let currentImageIndex = 0;

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", function() {
            // Mise à jour de l'index de l'image courante
            currentImageIndex = index;
            updateMainImage();
        });
    });

    // Fonction pour mettre à jour l'image principale
    function updateMainImage() {
        // Supprimer les anciens boutons s'ils existent
        const existingButtons = galleryMain.querySelectorAll(".button-container button");
        existingButtons.forEach(button => {
            button.remove();
        });

        // Créer une nouvelle image
        const newImage = new Image();
        newImage.src = thumbnails[currentImageIndex].src;
        newImage.alt = thumbnails[currentImageIndex].alt;

        // Remplacer l'image actuelle par la nouvelle
        const currentImage = galleryMain.querySelector("img");
        if (currentImage) {
            galleryMain.removeChild(currentImage);
        }
        galleryMain.appendChild(newImage);

        // Créer les boutons "prev" et "next" avec les symboles des flèches
        const buttonContainer = document.createElement("div");
        buttonContainer.className = "button-container";

        const prevButton = document.createElement("button");
        prevButton.appendChild(document.createTextNode("\u25C0")); // Ajoute le symbole de la flèche gauche
        prevButton.addEventListener("click", function() {
            currentImageIndex = (currentImageIndex - 1 + thumbnails.length) % thumbnails.length;
            updateMainImage();
        });

        const nextButton = document.createElement("button");
        nextButton.appendChild(document.createTextNode("\u25B6")); // Ajoute le symbole de la flèche droite
        nextButton.addEventListener("click", function() {
            currentImageIndex = (currentImageIndex + 1) % thumbnails.length;
            updateMainImage();
        });

        // Ajouter les boutons au conteneur de boutons
        buttonContainer.appendChild(prevButton);
        buttonContainer.appendChild(nextButton);
        
        // Ajouter le conteneur de boutons à la galerie principale
        galleryMain.appendChild(buttonContainer);
    }

    // Afficher l'image initiale
    updateMainImage();
});

