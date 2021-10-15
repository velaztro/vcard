import Head from "next/head";
import styles from "../styles/Home.module.css";
import QRCode from 'qrcode.react';
import { useState } from "react";


export default function Qr() {

    const [qrText, setQrText] = useState('');

    function handleChange(e) {
        setQrText(e.target.value);
    }

  return (
    <div className={styles.container}>
        <QRCode value = {`http://localhost:3000/user/${qrText}`} />
        <br />
        <input onChange={handleChange} />
    </div>
  );
}



