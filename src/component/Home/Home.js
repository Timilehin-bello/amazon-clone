import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
    return (
      <div className="home">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How constant Innovation Creates Radically Successful Business Paperback"
            price={11.96}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,403,200_.jpg"
          />
          <Product
            id="34594274"
            title="Stand Mixer,Kuccu 5.5 Quart Tilt-Head, 660w Electric Kitchen mixer, 6-Speeds With Stainless Steel "
            price={129.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/710m-D+-UuL._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="843693489"
            title="Samsung Gear Fit2 Smartwatch Large, Black"
            price={11.96}
            rating={4}
            image="https://m.media-amazon.com/images/I/81LFjgZS9qL._AC_UY218_.jpg"
          />
          <Product
            id="234445930"
            title="Echo Shell (fits Echo 2nd Generation only) – Heather Gray Fabric"
            price={500.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/715cMI1mDvL._AC_UY218_.jpg"
          />
          <Product
            id="3254354345"
            title="Apple iPhone 11 Pro Max (64GB, Midnight Green) [Locked] + Carrier Subscription"
            price={986.99}
            rating={5}
            image="https://m.media-amazon.com/images/G/01/appcore/phone/AMZ_FamiyStripe_iPhone_11ProMax.png"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung CJ89 43 Curved UltraWide 3840 X 1200 Resolution 120Hz Monitor (LC43J890DKNXZA), Black"
            price={899.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81v90JtbImL._AC_UY218_.jpg"
          />
        </div>
      </div>
    );
}

export default Home;
