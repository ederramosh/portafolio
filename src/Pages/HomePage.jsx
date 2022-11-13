import React from "react";

import photo from "./assets/profile-photo.jpg";

import project01 from "./assets/project-01.JPG";
import project02 from "./assets/project-02.JPG";
import project03 from "./assets/project-03.JPG";
import project04 from "./assets/project-04.JPG";

const HomePage = () => {
  return (
    <div className="container">
      <main className="row mt-5">
        <section className="section-profile-left col-md-6">
          <div className="text-center">
            <p className="fs-1 text-light">Eder Ramos</p>
            <p className="fs-3 text-white-50">ReactJS - Full Stack Developer</p>
            <p>Link de Linkdendi</p>
            <p>Link de github</p>
          </div>
        </section>
        <section className="section-profile-right col-md-6">
          <img src={photo} alt="Eder Ramos" className="photo img-fluid" />
        </section>
      </main>
      <div className="row my-3">
        <section className="col">
          <h3 className="text-light text-center mb-3">Projects</h3>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed bckg-accordion"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Landing Project
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className="row">
                    <div className="col-6">
                      <img
                        src={project01}
                        alt="Landing Page"
                        className="photo-project img-fluid"
                      />
                    </div>
                    <div className="col-6">
                      <p className="fs-3">Description</p>
                      <p>
                        Landing project based with semantic of HTML5, CSS3 and
                        Responsive Design
                      </p>
                      <a
                        href="https://ederramosh.github.io/proyecto-01/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Go to Landing Page Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed bckg-accordion"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  CRUD Project
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className="row">
                    <div className="col-6">
                      <img
                        src={project02}
                        alt="CRUD Application"
                        className="photo-project img-fluid"
                      />
                    </div>
                    <div className="col-6">
                      <p className="fs-3">Description</p>
                      <p>
                        CRUD Application created with HTML5, CSS3 and
                        Javascript, the storage was implemented with
                        localStorage and the responsive design was implemented
                        with Bootstrap 5.2
                      </p>
                      <a
                        href="https://ederramosh.github.io/app-bitacora-viajes/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Go to CRUD Application
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed bckg-accordion"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Dashboard API
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className="row">
                    <div className="col-6">
                      <img
                        src={project03}
                        alt="Dashboard API"
                        className="photo-project img-fluid"
                      />
                    </div>
                    <div className="col-6">
                      <p className="fs-3">Description</p>
                      <p>
                        Dashboard API created with HTML5, Bootstrap 5.2
                        framework and Javascript, it was created consuming two
                        API with Axios and deploy the information with ChartJS
                      </p>
                      <a
                        href="https://ederramosh.github.io/covid-dashboard/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Go to Dashboard - Covid 19
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFour">
                <button
                  className="accordion-button collapsed bckg-accordion"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  Restaurant Page
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className="row">
                    <div className="col-6">
                      <img
                        src={project04}
                        alt="Dashboard API"
                        className="photo-project img-fluid"
                      />
                    </div>
                    <div className="col-6">
                      <p className="fs-3">Description</p>
                      <p>
                        Restaurant Page was created with React JS, NodeJS and
                        Firebase, the webpage consumes the information stored in
                        the Firebase like Menu information, Images and the
                        application is able to make Book with a schedule. The
                        responsive desing was implmented with Bootstrap 5.2
                      </p>
                      <a
                        href="https://visionary-basbousa-abd7b2.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Go to Restaurant Page
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFive">
                <button
                  className="accordion-button collapsed bckg-accordion"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  E-Commerce App
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFive"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className="row">
                    <div className="col-6">
                      <img
                        src={project04}
                        alt="Dashboard API"
                        className="photo-project img-fluid"
                      />
                    </div>
                    <div className="col-6">
                      <p className="fs-3">Description</p>
                      <p>
                        The backend and APIs was created with NodeJS and ExpressJS, the Database used was MongoDB and its pattern desing was Model, Controller and Router. In the other side, the frontend was created with ReactJS and Bootstrap, the application has its login system and the payment was implemented with Paypal (Sandbox Version).
                      </p>
                      <a
                        href="https://visionary-basbousa-abd7b2.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Go to Restaurant Page
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
      <div className="row section-profile">
        <section className="col">
        <h3>Technologies</h3>
        </section>
      </div>
    </div>
  );
};

export default HomePage;