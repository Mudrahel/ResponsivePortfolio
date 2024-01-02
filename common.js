function includeHTML(targetElement, htmlFilePath) {
    fetch(htmlFilePath)
        .then(response => response.text())
        .then(html => {
            document.getElementById(targetElement).innerHTML = html;
        });
}

// Include the footer
includeHTML('footer-container', 'footer.html');

// Include the navbar
includeHTML('navbar-container', 'navbar.html');