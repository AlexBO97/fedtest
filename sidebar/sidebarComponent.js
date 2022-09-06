const template = document.createElement('template');
template.innerHTML = `
<link rel="stylesheet" href="../sidebar/sidebar.css">

<div class="sidebar-body">
    <img class="logo" src="../images/bitdefender.svg">
    <div style="padding-bottom: 2em; background-color: #181f2c;">
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

class SidebarComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('sidebar-component', SidebarComponent);