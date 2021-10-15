import Head from "next/head";
import styles from "../styles/Home.module.css";
import QRCode from "qrcode.react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//const saveSvgAsPng = require('save-svg-png-ext')

const imageOptions = {
  backgroundColor: "red",
};

export default function Qr() {
  const [fname, setName] = useState("");
  const [lname, setLname] = useState("");
  const [lname2, setLname2] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [role, setRole] = useState("");
  const [org, setOrg] = useState("");
  const [std, setStd] = useState("");
  const [ext, setExt] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }
  function handleLname(e) {
    setLname(e.target.value);
  }
  function handleLname2(e) {
    setLname2(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePhone(e) {
    setPhone(e.target.value);
  }
  function handleTitle(e) {
    setTitle(e.target.value);
  }
  function handleRole(e) {
    setRole(e.target.value);
  }
  function handleOrg(e) {
    setOrg(e.target.value);
  }
  function handleStd(e) {
    setStd(e.target.value);
  }
  function handleExt(e) {
    setExt(e.target.value);
  }

  function handleClear() {
    setStd("");
    setName('');
    setLname('');
    setLname2('');
    setEmail('');
    setPhone('');
    setTitle('');
    setExt('');
    setOrg("");
  }

  let handleClick = () => {
    saveSvgAsPng.saveSvgAsPng(
      document.getElementById("svg-chart"),
      `${fname}-${title}.png`,
      imageOptions
    );
  };

  function download() {
    var canvas = document.getElementById("canvas");
    var url = canvas.toDataURL("image/png");
    var link = document.createElement("a");
    link.download = `${fname}-${title}.png`;
    link.href = url;
    link.click();
  }

  const divStyle = {
    justifyContent: 'center',
  };

  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
          integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
          crossOrigin="anonymous"
        />
      </Head>
      <QRCode
        value={`BEGIN:VCARD
VERSION:3.0
FN;CHARSET=UTF-8:Jaime Perez
N;CHARSET=UTF-8:Perez;Jaime;;;
EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:none@hotmail.com
TEL;TYPE=CELL:6641234567
TEL;TYPE=WORK,VOICE:6649876543
TITLE;CHARSET=UTF-8:Secretario de Seguridad de Tijuana
ORG;CHARSET=UTF-8:SSPCM
REV:2021-10-15T15:40:50.278Z
END:VCARD
`}
        renderAs="png"
        size="200"
        level="L"
        id="canvas"

      />
      <br />
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Grado</Form.Label>
                <Form.Control
                  value={std}
                  type="text"
                  placeholder="Lic."
                  onChange={handleStd}
                />
              </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                value={fname}
                type="text"
                placeholder="Juan"
                onChange={handleName}
              />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Apellido Paterno</Form.Label>
              <Form.Control
                value={lname}
                type="text"
                placeholder="Perez"
                onChange={handleLname}
              />
            </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Apellido Materno</Form.Label>
              <Form.Control
                value={lname2}
                type="text"
                placeholder="Perez"
                onChange={handleLname2}
              />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={email}
              type="email"
              placeholder="nombre@ejemplo.com"
              onChange={handleEmail}
            />
          </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              value={phone}
              type="tel"
              placeholder="6649876543"
              onChange={handlePhone}
            />
          </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Extension</Form.Label>
            <Form.Control
              value={ext}
              type="text"
              placeholder="8520"
              onChange={handleExt}
            />
          </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Puesto</Form.Label>
            <Form.Control
              value={title}
              type="text"
              placeholder="Secretario"
              onChange={handleTitle}
            />
          </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Empresa</Form.Label>
            <Form.Control
              value={org}
              type="text"
              placeholder="Juan"
              onChange={handleOrg}
            />
          </Form.Group>
            </Col>
          </Row>

          <Row style={{justifyContent: 'space-evenly'}}>
            <Button style={{width: '15%'}} onClick={download}>Descargar QR</Button>
            <Button style={{width: '15%'}} onClick={handleClear}>Limpiar</Button>
          </Row>
          
        </Form>
      </Container>
    </div>
  );
}
