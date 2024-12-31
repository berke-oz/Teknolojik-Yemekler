import React from "react";
import './OrderConfirmation.css'
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

export default function OrderConfirmation() {



    return (
        <>

            <div className="center-container">
                <img src="/images/iteration-1-images/logo.svg" alt="" />
                <p>Lezzetin yolda</p>
                <h4>SİPARİŞ ALINDI</h4>
                <hr />

                <div className="siparis-ozeti">

                    <h5>Position Absolute Acı Pizza</h5>
                    <p>Boyut: <span>L</span> </p>
                    <p>Hamur: <span>Süper İnce</span></p>
                    <p>Ek Malzemeler: <span>Pepperoni, Sosis, Mısır, Ananas</span></p>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h6">
                                Sipariş Toplamı
                            </CardTitle>
                            <CardText >
                                <strong>Seçimler:<span>400₺</span></strong>
                            </CardText>
                            <CardText >
                                <strong>Toplam : <span>800₺</span></strong>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>


        </>
    );

}