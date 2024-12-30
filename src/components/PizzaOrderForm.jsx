import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import './PizzaOrderForm.css'




export default function PizzaOrderForm() {
    const [formData, setFormData] = useState({
        isim: "",
        boyut: "",
        malzemeler: [],
        ozel: "",
        adet: 1,
    });


    const malzemeListesi = [
        "Pepperoni",
        "Tavuk Izgara",
        "Mısır",
        "Sarımsak",
        "Ananas",
        "Sosis",
        "Soğan",
        "Sucuk",
        "Biber",
        "Kabak",
        "Kanada Jambonu",
        "Domates",
        "Jalapeno",
    ];
    return (
        <div className="form-container">
            <Form className="pizza-order-form">
                <div className="pizza-name">
                    <h5>Position Absolute Acı Pizza</h5>
                </div>
                <div className="pizza-price-rating">
                    <p className="price">85.50₺</p>
                    <p className="rating">4.9 <span>(200)</span></p>
                </div>
                <p> Frontend Dev olarak hala position:absolute kullanıyorsan bu pizza tam
                    sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer
                    malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
                    fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş
                    mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir
                    yemektir. Küçük bir pizzaya bazen pizzeta denir.
                </p>
                <div className="form-group">
                    <legend>Boyut Seç</legend>
                    <FormGroup check>
                        <Label check>
                            <Input
                                type="radio"
                                name="boyut"
                                value="Küçük"
                            />
                            Küçük
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input
                                type="radio"
                                name="boyut"
                                value="Orta"
                            />
                            Orta
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input
                                type="radio"
                                name="boyut"
                                value="Büyük"
                            />
                            Orta
                        </Label>
                    </FormGroup>
                </div>
                <div className="form-group">
                    <FormGroup>
                        <Label htmlFor="hamur">Hamur Seç</Label>
                        <Input
                            type="select"
                            name="hamur"
                            id="hamur"
                        >
                            <option value="" disabled>Hamur Kalınlığı</option>
                            <option value="İnce">İnce</option>
                            <option value="Kalın">Kalın</option>
                            <option value="Normal">Normal</option>
                        </Input>
                    </FormGroup>
                </div>
            </Form>
        </div>
    );
}
