fetch('../js/credit.txt')
    .then(response => response.text())
    .then(data => document.getElementById('credit').innerHTML = data);