class NavbarComponent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <style>
                .navbar-body {
                    display: flex;
                    justify-content: end;
                    gap: 2em;
                    padding-top: 2.9em;
                    padding-right: 3em;
                }

                .navbar-icon {
                    width: 1.5em;
                }

                .notification {
                    position: relative;
                }

                .notification-popup {
                    background-color: #FF883F;
                    width: 1.5em;
                    height: 1.5em;
                    border-radius: 100%;
                    position: absolute;
                    top: -0.6em;
                    right: -0.8em;
                    color: white;
                }

                .notification-popup p{
                    font-size: 0.85em;
                    width: fit-content;
                    margin: auto;
                    position: relative;
                    top: 50%;
                    transform: translateY(-50%);
                }

                .login-bar {
                    display: flex;
                    padding-right: 3em;
                }

                .login-bar img {
                    width: 1em;
                }

                .login-bar:after {
                    content: " ";
                    display: block;
                    background: #e8e8e8;
                    height: 2px;
                    width: 15em;
                    position: absolute;
                    bottom: -5px;
                    margin-left: -10px;
                }

                .welcome-bar {
                    height: fit-content;
                    margin: auto 0;
                    display: flex;
                }

                .user-name {
                    padding-inline: 1em;
                }
            </style>

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