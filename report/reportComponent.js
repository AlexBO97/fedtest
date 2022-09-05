class ReportComponent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">

            <style>
                .overlay {
                    position: absolute;
                    right: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0.3;
                    background-color:black;
                }
                .report-body {
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    background-color: white;
                    width: calc(100% - 7em);
                    height: calc(100% - 6em);
                    padding: 1.5em 0em 0em 3em;
                }

                .widget {
                    height: inherit;
                    overflow-y: auto;
                    overflow-x: hidden;
                }

                .button-area {
                    height: 5em;
                    display: flex;
                    gap: 2em;
                }

                .button {
                    border-radius: 20px;
                    width: fit-content;
                    padding: 8px 40px;
                    margin: auto 0;
                }

                .save {
                    background-color: #027EE6;
                    color: white;
                }

                .cancel {
                    border: 1px solid black;
                    color: #868686;
                }

                .top-report-bar {
                    display: flex;
                    justify-content: space-between;
                    padding-right:3em;
                }

                .separator {
                    width: calc(100% + 6em);
                    height: 1px;
                    margin-top: 1em;
                    margin-bottom: 4em;
                    background-color: #ddd;
                    position: relative;
                    left: -3em;
                }

                .report-row {
                    display: flex;
                    justify-content: space-between;
                    width: 55%;
                    min-width: 35em;
                    margin-block: 1em;
                }

                .report-row p {
                    margin-block: auto;
                }

                .btn {
                    width: 18em;
                    background-color: white;
                    color: black;
                    display: flex;
                    justify-content: space-between;
                    border-color: #ced4da;
                }

                .btn.show {
                    color: black;
                    background-color: white;
                    border-color: #ced4da;
                }

                .btn.show:focus, .btn:active:focus {
                    box-shadow: 0 0 0 0;
                }

                .btn:focus {
                }

                .btn-secondary {
                    --bs-btn-hover-color: black; 
                    --bs-btn-hover-bg: white;
                }

                .dropdown-menu {
                    width: 18em;
                }

                .dropdown-toggle::after {
                    margin-block: auto;
                }

                .input-group {
                    width: 18em;
                }

                .input-group>.form-control {
                    font-style: italic;
                }

                .form-check {
                    margin-block: 1.6em;
                    width: 18em;
                }
            </style>

            <div class="overlay"></div>
            <div class="report-body">
                <div class="widget">
                    <div class="top-report-bar">
                        <h3>Create report</h3>
                        <img src="../images/close.svg">
                    </div>

                    <div class="separator"></div>

                    <h4>Details</h4>
                    <div class="report-row">
                        <p>Type</p>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <p>Executive Summary</p>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="report-row">
                        <p>Company</p>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <p>Company Name</p>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="report-row">
                        <p>Name<span style="color: #0A82E7">*</span></p>
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Placeholder" aria-label="Placeholder" aria-describedby="button-addon2">
                        </div>
                    </div>

                    <h4 style="margin-top:3em;">Settings</h4>
                    
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                        <label class="form-check-label" for="flexRadioDefault1">
                            Export now
                        </label>
                    </div>
                    
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                        <label class="form-check-label" for="flexRadioDefault2">
                            Scheduled
                        </label>
                    </div>

                    <div class="report-row">
                        <p style="margin-left: 24px;">Recurrence</p>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <p>Weekly</p>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Daily</a></li>
                                <li><a class="dropdown-item" href="#">Monthly action</a></li>
                                <li><a class="dropdown-item" href="#">Yearly</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="report-row">
                        <p style="margin-left: 24px;">On</p>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <p>Monday</p>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Tuesday</a></li>
                                <li><a class="dropdown-item" href="#">Wednesday</a></li>
                                <li><a class="dropdown-item" href="#">Thursday</a></li>
                                <li><a class="dropdown-item" href="#">Friday</a></li>
                                <li><a class="dropdown-item" href="#">Saturday</a></li>
                                <li><a class="dropdown-item" href="#">Sunday</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="report-row" style="margin-top: 2em;">
                        <p>Reporting interval</p>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <p>Last 7 days</p>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="report-row" style="margin-top: 2em;">
                        <p style="margin-block: 1.6em;">Attach files</p>
                        <div class="attach-files">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                                <label class="form-check-label" for="flexCheckChecked">
                                    Dashboard PDF
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                                <label class="form-check-label" for="flexCheckChecked">
                                    Word Document
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                                <label class="form-check-label" for="flexCheckChecked">
                                    Excel file
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                                <label class="form-check-label" for="flexCheckChecked">
                                    Image
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="button-area">
                    <div class="button save">save</div>
                    <div class="button cancel">cancel</div>
                </div>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
        `;
    }
}

window.customElements.define('report-component', ReportComponent);