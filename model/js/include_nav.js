function includeNavbar(url, target) {
    fetch(url)
        .then(response => response.text())
        .then(content => {
            document.getElementById(target).innerHTML = content;
        })
        .catch(error => console.error(error));
}
