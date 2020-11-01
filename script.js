// Exercice 1
document.getElementById("envoyer").addEventListener("click", repondre);

function repondre() {
    var nom = document.getElementById("username").value;
    var lrg = nom.length;

    if (nom === "") {
        alert("Veuillez indiquer votre nom!");
    }
    else if (lrg < 1 || lrg > 10) {
        alert("Le nom doit avoir entre 1 et 10 caractères");
    }
    else {
        alert("Bonjour " + nom + " !");
    }
}


// Exercice 3
document.getElementById("login").addEventListener("click", tlogin);

function tlogin() {
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("mdp").value;
    var emlrg = email.length;
    var ematch = email.match(/@/g);

    if (!ematch) {
        alert("L'adresse mail doit contenir un @");
    }
    else if (emlrg < 4) {
        alert("L'adresse mail doit comprendre plus de 4 caractères");
    }
    else if (pwd != "a6E353_5" && email !== "léa@gmail.com") {
        alert("Adresse mail ou mot de passe incorrecte");
    }
    else {
        alert("Bonjour " + email + " !");
    }
}

// Exercice 4
document.getElementById("verif").addEventListener("click", vcalc);

function rnd_op() {

    var sgns = ["+", "-", "*"];
    var chsg = sgns[Math.floor(Math.random() * sgns.length)];

    document.getElementById("num-1").innerHTML = Math.floor(Math.random() * 11);
    document.getElementById("sgop").innerHTML = chsg;
    document.getElementById("num-2").innerHTML = Math.floor(Math.random() * 11);

}

function vcalc() {

    var myres = document.getElementById("calcul").value;
    var num1 = document.getElementById("num-1").innerHTML;
    var sgop = document.getElementById("sgop").innerHTML;
    var num2 = document.getElementById("num-2").innerHTML;

    if (sgop === "+") {
        var nwop = num1 + num2;
    }
    if (sgop === "-") {
        var nwop = num1 - num2;
    }
    if (sgop === "*") {
        var nwop = num1 * num2;
    }

    if (myres != nwop) {
        alert("Mauvaise réponse");
    }
    else {
        alert("Bravo!");
    }
}

// Exercice 5
answer.onload = notes();

function notes() {

    var rnmb = Math.floor;
    var mrnd = Math.random;

    var ntls = [
        rnmb(mrnd() * 21),
        rnmb(mrnd() * 21),
        rnmb(mrnd() * 21),
        rnmb(mrnd() * 21),
        rnmb(mrnd() * 21),
        rnmb(mrnd() * 21),
        rnmb(mrnd() * 21),
        rnmb(mrnd() * 21),
        rnmb(mrnd() * 21),
        rnmb(mrnd() * 21)
    ];

    // a la place de ceci -> var ntls = [rnmb(Math.random() * 21), rnmb(Math.random() * 21), rnmb(Math.random() * 21), rnmb(Math.random() * 21), rnmb(Math.random() * 21), rnmb(Math.random() * 21), rnmb(Math.random() * 21), rnmb(Math.random() * 21), rnmb(Math.random() * 21), rnmb(Math.random() * 21)];

    var res1 = ntls.reduce(function (a, b) {
        return a + b;
    }, 0);

    var resl = res1 / 10;

    document.getElementById("lsnt")
        .innerHTML = "<tr><td>" + String(ntls)
            .replace(/,/g, "</td><td>")
            .replace(/,/g, "</td><td>");

    document.getElementById("moy").innerHTML = ("Moyenne de " + resl + "/20");
}

// Exercice 6
document.getElementById("tenter").addEventListener("click", tirer);

function tirer() {

    let ndj = Math.floor(Math.random() * 11);
    let usnum = document.getElementById("chiffre").value;

    if (ndj > usnum) {
        alert("Pas de chance, ton numéro est inferieur. Le numéro du jour est : " + ndj);
    }
    if (ndj == usnum) {
        alert("Bravo! C'est ton jour de chance! Le numéro du jour est : " + ndj);
    }
    if (ndj < usnum) {
        alert("Pas de chance, ton numéro est supérieur. Le numéro du jour est : " + ndj);
    }
}
