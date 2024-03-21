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
    let currentImageIndex = 0;
    let videoElement = null; // Garder une référence à l'élément vidéo actuel

    thumbnails.forEach((thumbnail, index) => {
        // Ajouter un événement de clic sur les miniatures pour afficher l'image correspondante dans galleryMain
        thumbnail.addEventListener("click", function() {
            // Si une vidéo est en cours de lecture, la supprimer
            if (videoElement) {
                videoElement.pause();
                videoElement.remove();
                videoElement = null;
            }

            // Créer une nouvelle image avec la source de la miniature cliquée
            const newImage = new Image();
            newImage.src = this.src;
            newImage.alt = this.alt;

            // Effacer le contenu existant de galleryMain
            while (galleryMain.firstChild) {
                galleryMain.removeChild(galleryMain.firstChild);
            }

            // Ajouter l'image dans galleryMain
            galleryMain.appendChild(newImage);
        });

        // Ajouter un événement de mouseover sur les miniatures pour afficher l'image correspondante dans galleryMain
        thumbnail.addEventListener("mouseover", function() {
            // Si une vidéo est en cours de lecture, la supprimer
            if (videoElement) {
                videoElement.pause();
                videoElement.remove();
                videoElement = null;
            }

            // Créer une nouvelle image avec la source de la miniature survolée
            const newImage = new Image();
            newImage.src = this.src;
            newImage.alt = this.alt;

            // Effacer le contenu existant de galleryMain
            while (galleryMain.firstChild) {
                galleryMain.removeChild(galleryMain.firstChild);
            }

            // Ajouter l'image dans galleryMain
            galleryMain.appendChild(newImage);
        });
    });

    // Ajouter un événement de clic sur l'image de la bannière pour la visualiser en grand
    document.querySelector(".banner img").addEventListener("click", function() {
        const videoSource = "assets/video/video.mp4";

        // Si une vidéo est en cours de lecture, la supprimer
        if (videoElement) {
            videoElement.pause();
            videoElement.remove();
            videoElement = null;
        }

        // Créer un nouvel élément vidéo avec la source de la vidéo
        videoElement = document.createElement("video");
        videoElement.src = videoSource;
        videoElement.controls = true;
        videoElement.style.width = "100%";
        videoElement.style.maxWidth = "800px";

        // Effacer le contenu existant de galleryMain
        while (galleryMain.firstChild) {
            galleryMain.removeChild(galleryMain.firstChild);
        }

        // Ajouter la vidéo dans galleryMain
        galleryMain.appendChild(videoElement);
    });
});
