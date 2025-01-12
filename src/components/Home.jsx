import React from "react";
import './Home.css'
import { Button, Card, CardImg, CardImgOverlay, CardText, CardTitle, Col, Container, Navbar, NavbarBrand, NavItem, NavLink, Row } from "reactstrap";
import Footer from "./Footer";
import logo from '/images/iteration-1-images/logo.svg';
import icon1 from '/images/iteration-2-images/icons/1.svg';
import icon2 from '/images/iteration-2-images/icons/2.svg';
import icon3 from '/images/iteration-2-images/icons/3.svg';
import icon4 from '/images/iteration-2-images/icons/4.svg';
import icon5 from '/images/iteration-2-images/icons/5.svg';
import icon6 from '/images/iteration-2-images/icons/6.svg';
import kart1 from '/images/iteration-2-images/cta/kart-1.png';
import kart2 from '/images/iteration-2-images/cta/kart-2.png';
import kart3 from '/images/iteration-2-images/cta/kart-3.png';
import food1 from '/images/iteration-2-images/pictures/food-1.png';
import food2 from '/images/iteration-2-images/pictures/food-2.png';
import food3 from '/images/iteration-2-images/pictures/food-3.png';


export default function Home({ onButtonClick }) {


    return (
        <>
            <header className="header">
                <div className="header-content">
                    <img className="logo" src={logo} alt="" />
                    <p className="header-subtitle">fırsatı kaçırma</p>
                    <h2 className="header-main-text">KOD ACIKTIRIR, <br />PİZZA, DOYURUR</h2>
                    <Button className="header-button" onClick={onButtonClick}>ACIKTIM</Button>
                </div>
            </header>
            <div className="category-navbar">
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col xs="auto" className="category-item">
                            <img src={icon1} alt="Yeni Kore" className="category-icon" />
                            <p className="category-text">YENİ! Kore</p>
                        </Col>
                        <Col xs="auto" className="category-item">
                            <img src={icon2} alt="Pizza" className="category-icon" />
                            <p className="category-text">Pizza</p>
                        </Col>
                        <Col xs="auto" className="category-item">
                            <img src={icon3} alt="Burger" className="category-icon" />
                            <p className="category-text">Burger</p>
                        </Col>
                        <Col xs="auto" className="category-item">
                            <img src={icon4} alt="Kızartmalar" className="category-icon" />
                            <p className="category-text">Kızartmalar</p>
                        </Col>
                        <Col xs="auto" className="category-item">
                            <img src={icon5} alt="Fast food" className="category-icon" />
                            <p className="category-text">Fast food</p>
                        </Col>
                        <Col xs="auto" className="category-item">
                            <img src={icon6} alt="Gazlı İçecek" className="category-icon" />
                            <p className="category-text">Gazlı İçecek</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="card-container">
                <Card className="card-custom-1">
                    <CardImg
                        alt="Card image cap"
                        src={kart1}
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
                            src={kart2}
                        />
                        <CardImgOverlay>
                            <CardTitle tag="h5">Hackathlon <br /> Burger Menü</CardTitle>
                            <Button color="warning">Sipariş Ver</Button>
                        </CardImgOverlay>
                    </Card>

                    <Card className="card-custom-3">
                        <CardImg
                            alt="Card image cap"
                            src={kart3}
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
                    <img src={icon1} alt="" />
                    Ramen
                </Button>

                <Button>
                    <img src={icon2} alt="" />
                    Pizza
                </Button>

                <Button>
                    <img src={icon3} alt="" />
                    Burger
                </Button>

                <Button>
                    <img src={icon4} alt="" />
                    French Fries
                </Button>

                <Button>
                    <img src={icon5} alt="" />
                    Fast Food
                </Button>

                <Button>
                    <img src={icon6} alt="" />
                    Soft Drink
                </Button>

            </div>
            <div className="menü-yemek-kartları">
                <Card className="yemek-kartı-1">
                    <CardImg
                        alt="Card image cap"
                        src={food1}
                    />
                    <CardImgOverlay>
                        <CardTitle tag="h5">Terminal Pizza</CardTitle>
                        <CardText tag="p">4.9  (200)  <span>60₺</span></CardText>
                    </CardImgOverlay>
                </Card>

                <Card className="yemek-kartı-2">
                    <CardImg
                        alt="Card image cap"
                        src={food2}
                    />
                    <CardImgOverlay>
                        <CardTitle tag="h5">Position: Absolute Acı Pizza</CardTitle>
                        <CardText tag="p">4.9  (200)  <span>60₺</span></CardText>
                    </CardImgOverlay>
                </Card>

                <Card className="yemek-kartı-3">
                    <CardImg
                        alt="Card image cap"
                        src={food3}
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