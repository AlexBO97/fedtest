class SidebarComponent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <style>
                .sidebar-body {
                    background-color: #181f2c;
                    width: 7em;
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding-bottom: 2em;
                }

                .sidebar-body:after {
                    content: url("../images/exp.svg");
                    position: absolute;
                    left: 6.8em;
                    top: 2.3em;
                }

                .sidebar-button {
                    margin: auto;
                    width: 100%;
                }

                .sidebar-text {
                    color: #D1D2D5;
                    font-size: 0.9em;
                    text-align: center;
                }

                .logo {
                    width: 2em;
                    display: flex;
                    margin: 2.5em auto 0.5em;
                }

                .button-image {
                    width: 1.6em;
                    display: flex;
                    margin: 2.5em auto 0.5em;
                }
            </style>

            <div class="sidebar-body">
                <img class="logo" src="../images/bitdefender.svg">
                <div>
                    <div class="sidebar-button">
                        <img class="button-image" src="../images/dashboard.svg">
                        <div class="sidebar-text">Dashboard</div>
                    </div>
                    <div class="sidebar-button">
                        <img class="button-image" src="../images/incidents.svg">
                        <div class="sidebar-text">Incidents</div>
                    </div>
                    <div class="sidebar-button">
                        <img class="button-image" src="../images/network.svg">
                        <div class="sidebar-text">Network</div>
                    </div>
                    <div class="sidebar-button">
                        <img class="button-image" src="../images/risk.svg">
                        <div class="sidebar-text">Risk Management</div>
                    </div>
                    <div class="sidebar-button">
                        <img class="button-image" src="../images/policies.svg">
                        <div class="sidebar-text">Policies</div>
                    </div>
                    <div class="sidebar-button">
                        <img class="button-image" src="../images/reports.svg">
                        <div class="sidebar-text">Reports</div>
                    </div>
                    <div class="sidebar-button">
                        <img class="button-image" src="../images/quarantine.svg">
                        <div class="sidebar-text">Quarantine</div>
                    </div>
                    <div class="sidebar-button">
                        <img class="button-image" src="../images/companies.svg">
                        <div class="sidebar-text">Companies</div>
                    </div>
                    <div class="sidebar-button">
                        <img class="button-image" src="../images/accounts.svg">
                        <div class="sidebar-text">Accounts</div>
                    </div>
                    <div class="sidebar-button">
                        <img class="button-image" src="../images/sandbox.svg">
                        <div class="sidebar-text">Sandbox Analyzer</div>
                    </div>
                </div>
            </div>
        `;
    }
}

window.customElements.define('sidebar-component', SidebarComponent);