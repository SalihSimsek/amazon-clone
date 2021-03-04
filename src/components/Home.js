import React from "react";
import "../styles/Home.css";

import Product from "./Product";
const Home = () => {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home_row">
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
        <Product
          id="12321341"
          title='Acer Nitro 5 Gaming Laptop, 10th Gen Intel Core i5-10300H,NVIDIA GeForce GTX 1650 Ti, 15.6" Full HD IPS 144Hz Display, 8GB DDR4,256GB NVMe SSD,WiFi 6'
          price={729.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81Z8NvO2TFL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="12321341"
          title="Govee Smart LED Strip Lights, 16.4ft WiFi LED Lights Work with Alexa and Google Assistant"
          price={23.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71FN5PwrLLL._AC_SL1500_.jpg"
        />
        <Product
          id="12321341"
          title="Mkeke Compatible with iPhone Xr Case,Clear Anti-Scratch Shock Absorption Cases for 6.1 Inch"
          price={8.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71j2Zqi6BGL._AC_SL1250_.jpg"
        />
        <Product
          id="12321341"
          title="amFilm Tempered Glass Screen Protector for Nintendo Switch 2017 (2-Pack)"
          price={7.39}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81Lset7WtQL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="12321341"
          title="SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black"
          price={899.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71tZW1aa%2BPL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
