
import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import Footer from "components/Footer/Footer.jsx";

import bigChartData from "variables/charts.jsx";

class LandingPage extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }
  render() {
    return (
      <>
        <div className="wrapper">
          <section className="page-header">
            <img
              alt="..."
              className="shapes triangle"
              src={require("assets/img/triunghiuri.png")}
            />

            <img
              alt="..."
              className="shapes squares"
              src={require("assets/img/patrat.png")}
            />
            <img
              alt="..."
              className="shapes circle"
              src={require("assets/img/cercuri.png")}
            />
            <div className="content-center">
              <Row className="row-grid justify-content-between align-items-center text-left">
                <Col lg="6" md="6">
                  <h1 className="text-white">
                    Deine Plattform um Datenwissenschaften zu erlernen und anzuwenden<br />
                  </h1>
                  <p className="mb-3">
                    Data Science ist als wachsender Technologiezweig bekannt, der im Digitalisierungsprozess
                    nicht mehr wegzudenken ist. Aber was genau steckt dahinter? Was macht eigentlich ein Data Scientist?
                  </p>
                  <div className="btn-wrapper mb-3">
                    <Button className="btn-round" color="primary" type="button">
                      Erfahre Mehr
                    </Button>
                  </div>
                </Col>
                <Col lg="5" md="5">
                  <img
                    alt="icon datenwissenschaften sektion"
                    className="img-fluid"
                    src={require("assets/img/017-document.png")}
                  />
                </Col>
              </Row>
            </div>
          </section>
          <section className="section section-l">
            <section className="section">
            <img
              alt="..."
              className="shapes circle"
              src={require("assets/img/cercuri.png")}
            />
              <Container>
                <Row className="row-grid justify-content-between">
                  <Col lg="5" md="5">
                  <img
                    alt="icon datenwissenschaften sektion"
                    className="img-fluid"
                    src={require("assets/img/002-artificial-intelligence.png")}
                  />
                </Col>
                  <Col md="6">
                    <div className="pl-md-5">
                      <h1 className="text-white">
                        Maschinelles <br />
                        Lernen
                      </h1>
                       <hr className="line-primary" />
                      <p>
                        Maschinelles Lernen ist ein Zweig im Bereich der <a
                        className="font-weight-bold text-info mt-5"
                        href="#placeholder"
                        onClick={e => e.preventDefault()}
                      >
                        Künstlichen Intelligenz{" "}
                      </a>. Anhand von Daten "lernen" Programme, so dass sie menschliche Fähigkeiten imitieren können.
                        Das Sammeln und organisieren großer Datenmengen, die unter anderem für den Lernprozess nötig sind,
                        wird
                        <a
                        className="font-weight-bold text-info mt-5"
                        href="#placeholder"
                        onClick={e => e.preventDefault()}
                      >  Big Data{" "}
                      </a> genannt.
                      </p>
                      <br />
                      <p>Die Daten müssen erstmal verschiedenen Vorvearbeitungsschritte durchlaufen, damit ein
                        Maschine Learning Algorithmus Erkennungsmerkmale daraus ermitteln kann.
                      </p>
                      <br />
                      <div className="btn-wrapper mb-3">
                    <Button className="btn-round" color="primary" type="button">
                      Erfahre Mehr
                    </Button>
                  </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </section>

           <section className="section section-l">
            <section className="section">
              <Container>
                <Row className="row-grid justify-content-between">
                  <Col md="6">
                    <div className="pl-md-5">
                      <h1 className="text-white">
                        Big Data
                      </h1>
                       <hr className="line-primary" />
                      <p>Das Sammeln und Auswerten riesiger Datenmengen fällt unter den Begriff Big Data.
                        Systeme im Bereich des <a
                        className="font-weight-bold text-info mt-5"
                        href="#placeholder"
                        onClick={e => e.preventDefault()}
                      >
                        Machine Learning{" "}
                      </a>
                        basieren auf riesige Datenmengen, um sie trainieren zu können.
                      </p>
                      <br />

                      <p>Auch im analytischen Bereich finden Daten einen hohen Nutzen um Informationen zu extrahieren und sich
                        Marketingtechnische Vorteile zu verschaffen.
                      </p>
                      <br />
                      <div className="btn-wrapper mb-3">
                    <Button className="btn-round" color="primary" type="button">
                      Erfahre Mehr
                    </Button>
                  </div>
                    </div>
                  </Col>
                   <Col lg="5" md="5">
                  <img
                    alt="icon datenwissenschaften sektion"
                    className="img-fluid"
                    src={require("assets/img/007-data.png")}
                  />
                </Col>

                </Row>

              </Container>

            </section>
          </section>



        </div>
      </>
    );
  }
}

export default LandingPage;
