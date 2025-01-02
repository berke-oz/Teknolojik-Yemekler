import React from "react";
import './Home.css'
import { Button } from "reactstrap";

export default function Home({ onButtonClick }) {


    return (
        <div className="home-page">
            <div className="container">
                <img src="/images/iteration-1-images/logo.svg" alt="" />
                <h3>KOD ACIKTIRIR</h3>
                <h3>PİZZA, DOYURUR</h3>
                <Button onClick={onButtonClick}>Acıktım</Button>
            </div>
        </div>
    );

}