import React from 'react';
import "./Home.css";
import Product from "./Product.js"

function Home() {
    return (
        <div className="home">
            <div className="homeContainer">
              <img className="backgroundImage" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

              <div className="homeRow">
                <Product 
                id="1-1"
                tittle="VeGue Máquina de karaoke inalámbrica, altavoz Bluetooth con sistema PA portátil con subwoofer de 8 pulgadas" 
                price={59.99} 
                image="https://images-na.ssl-images-amazon.com/images/I/41WXx2Xa3fL._SX160_QL100_AC_SCLZZZZZZZ_.jpg" 
                rating={4} />
                
                <Product 
                id="1-2"
                tittle="Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB"
                image="https://images-na.ssl-images-amazon.com/images/I/615YaAiA-ML._AC_UL160_SR160,160_.jpg"
                price={299.00}
                rating={5} />


              </div>

              <div className="homeRow">
                <Product 
                id="2-1"
                tittle="Minecraft Starter Collection - PlayStation 4" 
                price={28.55}
                image="https://images-na.ssl-images-amazon.com/images/I/51CvqVQaz0L._SY430_SX215_QL70_FMwebp_.jpg"
                rating={5} />
                
                <Product 
                id="2-2"
                tittle="Acer Predator Galea 310 True Harmony Sound Gaming Headset: Controladores de 1.575 in - Micrófono omnidireccional giratorio"
                image="https://m.media-amazon.com/images/I/41cI3DZmN1L._AC_SR160,160_.jpg"
                price={44.13}
                rating={5}/>

                <Product 
                id="2-3"
                tittle="Roku Streaming Stick + | Dispositivo de transmisión HD / 4K / HDR con control remoto inalámbrico de largo alcance y de voz Roku con controles de TV"
                image="https://m.media-amazon.com/images/I/71r1+BhQTnL._AC_UL320_.jpg"
                price={299.00}
                rating={5} />

              </div>

              <div className="homeRow">
                <Product 
                id="3-1"
                tittle="Portátil Acer Aspire 5 Slim A515-46-R14K, pantalla IPS Full HD de 15.6 pulgadas, procesador móvil de doble núcleo AMD Ryzen 3 3350U, memoria DDR4 de 4GB, unidad de estado sólido SSD NVMe de 128 GB, WiFi 6, teclado retroiluminado, Amazon Alexa, Windows 10 Home (modo S)"
                image="https://m.media-amazon.com/images/I/71+2H96GHZL._AC_UL320_.jpg"
                price={396.88}
                rating={4} />

              </div>

            </div>
        </div>
    )
}

export default Home
