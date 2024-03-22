// Fonction pour générer un problème mathématique aléatoire
function generateMathProblem() {
    var operand1 = Math.floor(Math.random() * 10) + 1; // Nombre aléatoire entre 1 et 10
    var operand2 = Math.floor(Math.random() * 10) + 1; // Nombre aléatoire entre 1 et 10
    return operand1 + " + " + operand2 + " = ";
  }
  
  // Fonction pour insérer le problème mathématique dans le champ de réponse
  function insertMathProblem() {
    // Récupérer le champ de réponse
    var mathResponseInput = document.getElementById("mathResponse");
    
    // Générer le problème mathématique
    var mathProblem = generateMathProblem();
    
    // Mettre le problème mathématique comme placeholder du champ de réponse
    mathResponseInput.placeholder = mathProblem;
  }
  
  // Appel de la fonction pour insérer le problème mathématique
  insertMathProblem();
  