function navigateToLogin() {
    const loginPage = document.getElementById("loginSelect").value;
    if (loginPage) {
        window.location.href = loginPage;
    }
}
