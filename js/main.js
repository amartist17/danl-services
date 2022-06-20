fetch('../js/credit.txt') // add remote url here
    .then(response => response.text())
    .then(data => document.getElementById('credit').innerHTML = data);