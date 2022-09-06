class ReportComponent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
            <link rel="stylesheet" href="../report/report.css">

            <div class="overlay"></div>
            <div class="report-wrapper">
                <div class="report-body">
                    <div class="widget">
                        <div class="top-section">
                            <div class="top-report-bar">
                                <h3>Create report</h3>
                                <img class="close-button" src="../images/close.svg">
                            </div>
                            <div class="separator"></div>
                        </div>

                        <div class="scrolling-area">
                            <h4 style="margin-top: 1em;">Details</h4>
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
                            <div class="button cancel close-button">cancel</div>
                        </div>
                    </div>

                    <div class="toast align-items-center text-bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="d-flex">
                            <img style="margin-left: 1em;" src="../images/tick.svg">
                            <div class="toast-body">
                                Successfully saved the report
                            </div>
                            <div class="separator-tooltip"></div>
                            <img class="tool-close" src="../images/toolclose.svg">
                        </div>
                    </div>
                </div>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
        `;

        const save = this.querySelector('.save'); 
        const toolClose = this.querySelector('.tool-close'); 
        const toast = this.querySelector('.toast'); 

        save.addEventListener('click', () => {
            openToast();
        });

        toolClose.addEventListener('click', () => {
            closeToast();
        });

        function closeToast() {
            toast.style.opacity = 0;
        }

        function openToast() {
            toast.style.opacity = 1;
            setTimeout(() => {
                closeToast();
              }, "3000")
        }

        const overlay = this.querySelector('.overlay'); 
        const reportBody = this.querySelector('.report-body'); 
        const closeBtns = this.querySelectorAll('.close-button');
        const createReports = document.querySelector('.create-reports'); 

        for(let i = 0; i < closeBtns.length; ++i)
            closeBtns[i].addEventListener('click', () => {
                reportBody.style.transform = "translateY(100%)";
                reportBody.style.opacity = 0;
                overlay.style.opacity = 0;
                this.style.zIndex = 0;
                closeToast();
                setTimeout(() => {
                    createReports.style.opacity = 1;
                  }, "100")
            })
    }

}

window.customElements.define('report-component', ReportComponent);