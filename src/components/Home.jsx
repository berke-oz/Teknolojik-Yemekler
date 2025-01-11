import React from "react";
import './Home.css'
import { Button, Card, CardImg, CardImgOverlay, CardText, CardTitle, Col, Container, Navbar, NavbarBrand, NavItem, NavLink, Row } from "reactstrap";
import Footer from "./Footer";


export default function Home({ onButtonClick }) {


    return (
        <>
            <header className="header">
                <div className="header-content">
                    <img className="logo" src="./images/iteration-1-images/logo.svg" alt="" />
                    <p className="header-subtitle">fırsatı kaçırma</p>
                    <h2 className="header-main-text">KOD ACIKTIRIR, <br />PİZZA, DOYURUR</h2>
                    <Button className="header-button" onClick={onButtonClick}>ACIKTIM</Button>
                </div>
            </header>
            <div className="category-navbar">
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col xs="auto" className="category-item">
                            <img src="./images/iteration-2-images/icons/1.svg" alt="Yeni Kore" className="category-icon" />
                            <p className="category-text">YENİ! Kore</p>
                        </Col>
                        <Col xs="auto" className="category-item">
                            <img src="./images/iteration-2-images/icons/2.svg" alt="Pizza" className="category-icon" />
                            <p className="category-text">Pizza</p>
                        </Col>
                        <Col xs="auto" className="category-item">
                            <img src="./images/iteration-2-images/icons/3.svg" alt="Burger" className="category-icon" />
                            <p className="category-text">Burger</p>
                        </Col>
                        <Col xs="auto" className="category-item">
                            <img src="./images/iteration-2-images/icons/4.svg" alt="Kızartmalar" className="category-icon" />
                            <p className="category-text">Kızartmalar</p>
                        </Col>
                        <Col xs="auto" className="category-item">
                            <img src="./images/iteration-2-images/icons/5.svg" alt="Fast food" className="category-icon" />
                            <p className="category-text">Fast food</p>
                        </Col>
                        <Col xs="auto" className="category-item">
                            <img src="./images/iteration-2-images/icons/6.svg" alt="Gazlı İçecek" className="category-icon" />
                            <p className="category-text">Gazlı İçecek</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="card-container">
                <Card className="card-custom-1">
                    <CardImg
                        alt="Card image cap"
                        src="./images/iteration-2-images/cta/kart-1.png"
                    />
                    <CardImgOverlay>
                        <CardTitle tag="h5">Özel <br /> Lezzetus</CardTitle>
                        <CardText tag="p">Position: Absolute Acı Pizza</CardText>
                        <Button color="warning">Sipariş Ver</Button>
                    </CardImgOverlay>
                </Card>
                <div className="card-row">
                    <Card className="card-custom-2">
                        <CardImg
                            alt="Card image cap"
                            src="./images/iteration-2-images/cta/kart-2.png"
                        />
                        <CardImgOverlay>
                            <CardTitle tag="h5">Hackathlon <br /> Burger Menü</CardTitle>
                            <Button color="warning">Sipariş Ver</Button>
                        </CardImgOverlay>
                    </Card>

                    <Card className="card-custom-3">
                        <CardImg
                            alt="Card image cap"
                            src="./images/iteration-2-images/cta/kart-3.png"
                        />
                        <CardImgOverlay>
                            <CardTitle tag="h5"> <span>Çoooooook </span> hızlı <br /> npm gibi kurye</CardTitle>
                            <Button color="warning">Sipariş Ver</Button>
                        </CardImgOverlay>
                    </Card>
                </div>

            </div >

            <div className="menü-alt-baslik">
                <p>en çok paketlenen menüler</p>
                <span>Acıktıran Kodlara Doyuran Lezzetler</span>
            </div>

            <div className="category-buttons">
                <Button>
                    <img src="./images/iteration-2-images/icons/1.svg   " alt="" />
                    Ramen
                </Button>

                <Button>
                    <img src="./images/iteration-2-images/icons/2.svg   " alt="" />
                    Pizza
                </Button>

                <Button>
                    <img src="./images/iteration-2-images/icons/3.svg   " alt="" />
                    Burger
                </Button>

                <Button>
                    <img src="./images/iteration-2-images/icons/4.svg   " alt="" />
                    French Fries
                </Button>

                <Button>
                    <img src="./images/iteration-2-images/icons/5.svg   " alt="" />
                    Fast Food
                </Button>

                <Button>
                    <img src="./images/iteration-2-images/icons/6.svg   " alt="" />
                    Soft Drink
                </Button>

            </div>
            <div className="menü-yemek-kartları">
                <Card className="yemek-kartı-1">
                    <CardImg
                        alt="Card image cap"
                        src="./images/iteration-2-images/pictures/food-1.png"
                    />
                    <CardImgOverlay>
                        <CardTitle tag="h5">Terminal Pizza</CardTitle>
                        <CardText tag="p">4.9  (200)  <span>60₺</span></CardText>
                    </CardImgOverlay>
                </Card>

                <Card className="yemek-kartı-2">
                    <CardImg
                        alt="Card image cap"
                        src="./images/iteration-2-images/pictures/food-2.png"
                    />
                    <CardImgOverlay>
                        <CardTitle tag="h5">Position: Absolute Acı Pizza</CardTitle>
                        <CardText tag="p">4.9  (200)  <span>60₺</span></CardText>
                    </CardImgOverlay>
                </Card>

                <Card className="yemek-kartı-3">
                    <CardImg
                        alt="Card image cap"
                        src="./images/iteration-2-images/pictures/food-3.png"
                    />
                    <CardImgOverlay>
                        <CardTitle tag="h5">useEffect Tavuklu Burger</CardTitle>
                        <CardText tag="p">4.9  (200)  <span>60₺</span></CardText>
                    </CardImgOverlay>
                </Card>



            </div>


            <Footer />




        </>
    )

}