class NavbarComponent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <link rel="stylesheet" href="../navbar/navbar.css">

            <div class="navbar-body">
                <div class="login-bar">
                    <div class="welcome-bar">Welcome, <span class="user-name">John Smith</span></div>
                    <img class="" src="../images/down.svg">
                </div>
                <img class="navbar-icon" src="../images/gift.svg">
                <img class="navbar-icon" src="../images/question.svg">
                <div class="notification">
                    <img class="navbar-icon" src="../images/notifications-2.svg">
                    <div class="notification-popup">
                        <p>24</p>
                    </div>
                </div>
            </div>
        `;
    }
}

window.customElements.define('navbar-component', NavbarComponent);