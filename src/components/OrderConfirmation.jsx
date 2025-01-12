import React from "react";
import './OrderConfirmation.css'
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import logo from '/images/iteration-1-images/logo.svg';

export default function OrderConfirmation({ orderData }) {



    return (
        <div className="order-conformation-page">

            <div className="center-container">
                <img src={logo} alt="" />
                <p>Lezzetin yolda</p>
                <h4>SİPARİŞ ALINDI</h4>
                <hr />

                <div className="siparis-ozeti">

                    <h5>Position Absolute Acı Pizza</h5>
                    <p>Boyut: <span>{orderData.boyut}</span> </p>
                    <p>Hamur: <span>{orderData.hamur}</span></p>
                    <p>Ek Malzemeler: <span>{orderData.malzemeler.join(", ")}</span></p>
                    <p>Hızlı Teslimat: <span>{orderData.hizliSiparis ? "Evet" : "Hayır"}</span></p>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h6">
                                Sipariş Toplamı
                            </CardTitle>
                            <CardText >
                                <strong>Seçimler:<span>{orderData.malzemeler.length * 5}₺</span></strong>
                            </CardText>
                            <CardText >
                                <strong>Toplam : <span>{(85.5 * orderData.adet) + (orderData.malzemeler.length * 5) + (orderData.hizliSiparis ? 50 : 0)}₺</span></strong>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>


        </div>
    );

}