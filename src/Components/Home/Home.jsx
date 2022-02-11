import React, { useEffect, useState } from "react";
import "./Home.css";
import { carouselImage } from "./CarouselImage";
import { ButtonCarousel } from "./ButtonCarousel/ButtonCarousel";
import { ButtonChange } from "./ButtonChange/ButtonChange";

export function Home() {
  const [image, setImage] = useState(0);

  const onRight = () => {
    if (image < carouselImage.length - 1) {
      setImage(image + 1);
    } else {
      setImage(0);
    }
  };
  const onLeft = () => {
    if (image > 0) {
      setImage(image - 1);
    } else {
      setImage(carouselImage.length - 1);
    }
  };
  const onChange = (props) => {
    setImage(props);
  };

  const timer = () => { setTimeout(onRight, 5000)}
  useEffect(()=>{timer()})

  return (
    <div className="containerHome">
      <section className="carouselImageHome">
        <div className="imageHome">
          <ButtonChange
            key={"buttonChangeLeft"}
            onChange={onLeft}
            ico="https://drive.google.com/uc?export=download&id=1oCKFjxAWOLbh1bvUlYOBvf1txXu2oq3i"
          />
          <img id="carouselImage" src={carouselImage[image].url} alt="imagen" />
          <ButtonChange
            key={"buttonChangeRight"}
            onChange={onRight}
            ico="https://drive.google.com/uc?export=download&id=1ilO35o7k7KNaP8RjG5sk_bwyM08-wV1x"
          />
        </div>
        <div className="buttonsCarousel">
          {carouselImage.map((el) => (
            <ButtonCarousel
              onChange={onChange}
              key={"buttonImage" + el.id}
              index={el.position}
            />
          ))}
        </div>
      </section>
      <section className="socialHome">
        <div className="logoHome">
          <img
            src="https://drive.google.com/uc?export=download&id=1qynz1kaVgJnrVVASKH2eKCslhoTuSBK_"
            alt="logo"
          />
        </div>
        <div className="storyHome">
          <h2>Comidas Rapidas Kyrio's Pizza</h2>
          <p>
            Bienvenido a nuestro Gran Negocio Familiar, Disfruta de las mejores
            Pizzas y Comidas Rápidas del Sector de San Francisco - La Acacia,
            con más de 15 años de experiencia complaciendo a nuestra distinguida
            clientela, te esperamos con los brazos abiertos para brindarte una
            experiencia gastronómica de primera, ya sea en nuestras
            instalaciones o enviándote a tu hogar los productos que prefieras,
            hecha les un vistazo en nuestra sección Domicilios y si te antojaste
            de algo no dudes en agregarlo al Carrito de compras para gestionar tu Pedido.
          </p>
        </div>
      </section>
      <section className="contactHome">
        <div className="contactLocation">
          <h2>Visitanos</h2>
          <h3>En la Carrera 19D # 61A - 38 Sur, San Francisco - La Acacia</h3>
          <h4>Servicio de Domicilios sujeto a ubicación del cliente</h4>
          <iframe
            title="iframeMap"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15908.714756566289!2d-74.1427077!3d4.5618709!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfe7284b3a10fe707!2sComidas%20Rapidas%20Kyrios%20Pizza!5e0!3m2!1ses-419!2sco!4v1643654393583!5m2!1ses-419!2sco"
            loading="lazy"
          ></iframe>
        </div>
        <div className="contactPhones">
          <h2>Contacto</h2>
          <div className="phoneNumbers">
            <div className="phoneNumber">
              <a href="tel:+576013229842">
                <img
                  src="https://drive.google.com/uc?export=download&id=1QKMkNLfSGecNgO-hf76rftbpZg_I7eB4"
                  alt="icoPhone"
                />
              </a>
              <a href="tel:+576013229842">
                <h3>(601) 322-98-42</h3>
              </a>
            </div>
            <div className="phoneNumber">
              <a href="tel:+573132812917">
                <img
                  src="https://drive.google.com/uc?export=download&id=1QKMkNLfSGecNgO-hf76rftbpZg_I7eB4"
                  alt="icoPhone"
                />
              </a>
              <a href="tel:+573132812917">
                <h3>(313) 281-29-17</h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
