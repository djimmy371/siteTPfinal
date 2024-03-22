// Filtre taille
document.getElementById("categories").addEventListener("change", function() {
    var categorie = this.value;
    var tailleSelect = document.getElementById("taille");

    // Supprimer toutes les options existantes
    while (tailleSelect.options.length > 0) {
        tailleSelect.remove(0);
    }

    // Créer des options de taille en fonction de la catégorie sélectionnée
    var options = [];
    if (categorie === "chaussure") {
        options = ["36", "37", "38","39","40","41","42","43","44","45","46","47","48"];
    } else if (categorie === "pulls") {
        options = ["S", "M", "L", "XL", "XXL"];
    } else if (categorie === "maillots") {
        options = ["S", "M", "L", "XL", "XXL"];
    }

    // Ajouter les options au select
    options.forEach(function(optionValue) {
        var option = document.createElement("option");
        option.value = option.innerText = optionValue;
        tailleSelect.appendChild(option);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var clearFiltersButton = document.getElementById("clearFilters");
    var selectElements = document.querySelectorAll("select");

    clearFiltersButton.addEventListener("click", function() {
        selectElements.forEach(function(select) {
            select.selectedIndex = 0; // Réinitialiser à la première option
        });
    });
});
// filtre produit
document.addEventListener("DOMContentLoaded", function() {
    const produits = document.querySelectorAll('.produit-galerie-container > div');

    // Fonction pour filtrer les produits
    function filtrerProduits() {
        const genre = document.querySelector('select[name="genre"]').value;
        const categorie = document.querySelector('select[name="categories"]').value;
        const marque = document.querySelector('select[name="marque"]').value;
        const taille = document.querySelector('select[name="taille"]').value;
        const prix = document.querySelector('select[name="prix"]').value;
        const couleur = document.querySelector('select[name="couleur"]').value;

        produits.forEach(produit => {
            const produitGenre = produit.getAttribute('data-genre');
            const produitCategorie = produit.getAttribute('data-categorie');
            const produitMarque = produit.getAttribute('data-marque');
            const produitTaille = produit.getAttribute('data-taille');
            const produitPrix = produit.getAttribute('data-prix');
            const produitCouleur = produit.getAttribute('data-couleur');

            const correspondGenre = genre === '' || (produitGenre && produitGenre.toLowerCase().includes(genre.toLowerCase()));
            const correspondCategorie = categorie === '' || (produitCategorie && produitCategorie.toLowerCase().includes(categorie.toLowerCase()));
            const correspondMarque = marque === '' || (produitMarque && produitMarque.toLowerCase().includes(marque.toLowerCase()));
            const correspondTaille = taille === '' || (produitTaille && produitTaille.toLowerCase().split(',').includes(taille.toLowerCase()));
            const correspondPrix = prix === '' || (produitPrix && (prix === 'plus100' && parseFloat(produitPrix) > 100));
            const correspondCouleur = couleur === '' || (produitCouleur && produitCouleur.toLowerCase() === couleur.toLowerCase());

            if (correspondGenre && correspondCategorie && correspondMarque && correspondTaille && correspondPrix && correspondCouleur) {
                produit.style.display = 'block';
            } else {
                produit.style.display = 'none';
            }
        });
    }

    // Fonction pour réinitialiser les filtres
    function resetFilters() {
        console.log("Filtres réinitialisés");
        // Réinitialiser les valeurs de tous les éléments de filtre à leur valeur par défaut
        var selectElements = document.querySelectorAll('.filtres select');
        selectElements.forEach(function(select) {
            select.selectedIndex = 0;
        });
    
        // Réappliquer les filtres après avoir réinitialisé
        filtrerProduits();
    }

    // Appeler la fonction pour réinitialiser les filtres au chargement de la page
    resetFilters();

    // Écouteur d'événement pour effacer les filtres
    var clearFiltersButton = document.getElementById("clearFilters");
    if (clearFiltersButton) {
        clearFiltersButton.addEventListener("click", resetFilters);
    } else {
        console.error("L'élément clearFilters n'a pas été trouvé.");
    }

    // Ajoutez des écouteurs d'événements pour les changements dans les sélecteurs de filtres
    document.querySelectorAll('.filtres select').forEach(select => {
        select.addEventListener('change', filtrerProduits);
    });
});