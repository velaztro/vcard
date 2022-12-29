import Head from "next/head";
import styles from "../styles/Home.module.css";
import { QRCodeSVG, QRCodeCanvas } from 'qrcode.react';
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
      <QRCodeCanvas
        value={'https://www.instagram.com/cd.giselazarazua/'}
        size="300"
        level="H"
        id="canvas"
        imageSettings={{
            src: 'https://i.ibb.co/Bw7cBrT/icon.png',
            x: undefined,
            y: undefined,
            height: 64,
            width: 64,
            excavate: true,
          }}
      />
      <br />
      <Container>
        <Form>

          <Row style={{ justifyContent: 'space-evenly' }}>
            <Button style={{ width: '15%' }} onClick={download}>Descargar QR</Button>
          </Row>

        </Form>
      </Container>
    </div>
  );
}
