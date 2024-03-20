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
            const produitGenre = produit.querySelector('p:nth-of-type(2)').textContent.toLowerCase();
            const produitCategorie = produit.querySelector('p:nth-of-type(3)').textContent.toLowerCase();
            const produitMarque = produit.querySelector('img').alt.toLowerCase();
            // Ajoutez d'autres variables pour la taille, le prix et la couleur si nécessaire

            // Vérifiez si le produit correspond aux critères sélectionnés
            const correspondGenre = genre === '' || produitGenre.includes(genre.toLowerCase());
            const correspondCategorie = categorie === '' || produitCategorie.includes(categorie.toLowerCase());
            const correspondMarque = marque === '' || produitMarque.includes(marque.toLowerCase());
            // Ajoutez d'autres conditions pour la taille, le prix et la couleur si nécessaire

            // Affichez ou masquez le produit en fonction des critères
            if (correspondGenre && correspondCategorie && correspondMarque) {
                produit.style.display = 'block';
            } else {
                produit.style.display = 'none';
            }
        });
    }

    // Ajoutez des écouteurs d'événements pour les changements dans les sélecteurs de filtres
    document.querySelectorAll('.filtres select').forEach(select => {
        select.addEventListener('change', filtrerProduits);
    });
});
