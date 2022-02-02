import React, { useState } from "react";
import "./Home.css";
import { carouselImage } from "./CarouselImage";

export function Home() {
  const [image, setImage] = useState(0);
  var index = 0;

  const onRight = () => {
    if (index < carouselImage.length) {
      index++;
    } else {
      index = 0;
    }
    onDraw(index)
  };
  const onLeft = () => {
    if (index>0) {
      index--;
    } if (index === 0) {
      index = carouselImage.length-1;
    }
    onDraw(index)
  };
  const onDraw=(a)=>{setImage(a)};

  return (
    <div className="containerHome">
      <section className="carouselImageHome">
        <div>
          <img src={carouselImage[image].url} alt="" />
        </div>
        <div>
        <button onClick={onLeft}>Izq</button>
          <button onClick={onRight}>Derecha</button>
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id,
            delectus. Mollitia itaque optio exercitationem ipsum, eos aut
            consectetur perferendis aperiam. Facere nisi amet nobis dignissimos
            cumque, pariatur ipsum et ipsam.
          </p>
        </div>
      </section>
      <section className="contactHome">
        <div className="contactLocation">
          <h2>Visitanos</h2>
          <h3>En la Carrera 19D # 61A - 38 Sur, San Francisco - La Acacia</h3>
          <iframe
            title="iframeMap"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15908.714756566289!2d-74.1427077!3d4.5618709!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfe7284b3a10fe707!2sComidas%20Rapidas%20Kyrios%20Pizza!5e0!3m2!1ses-419!2sco!4v1643654393583!5m2!1ses-419!2sco"
            data-map="JTdCJTIycG9zaXRpb25UeXBlJTIyJTNBJTIybWFwLWVtYmVkJTIyJTJDJTIyYWRkcmVzcyUyMiUzQSUyMiUyMiUyQyUyMnpvb20lMjIlM0FudWxsJTJDJTIydHlwZUlkJTIyJTNBJTIycm9hZCUyMiUyQyUyMmxhbmclMjIlM0FudWxsJTJDJTIyYXBpS2V5JTIyJTNBbnVsbCUyQyUyMm1hcmtlcnMlMjIlM0ElNUIlNUQlMkMlMjJlbWJlZCUyMiUzQSUyMmh0dHBzJTNBJTJGJTJGd3d3Lmdvb2dsZS5jb20lMkZtYXBzJTJGZW1iZWQlM0ZwYiUzRCExbTE0ITFtOCExbTMhMWQxNTkwOC43MTQ3NTY1NjYyODkhMmQtNzQuMTQyNzA3NyEzZDQuNTYxODcwOSEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHgwJTI1M0EweGZlNzI4NGIzYTEwZmU3MDchMnNDb21pZGFzJTI1MjBSYXBpZGFzJTI1MjBLeXJpb3MlMjUyMFBpenphITVlMCEzbTIhMXNlcy00MTkhMnNjbyE0djE2NDM2NTQzOTM1ODMhNW0yITFzZXMtNDE5ITJzY28lMjIlN0Q="
          ></iframe>
        </div>
        <div className="contactPhones">
          <h2>Contacto</h2>
          <div className="phoneNumber">
            <img
              src="https://drive.google.com/uc?export=download&id=1QKMkNLfSGecNgO-hf76rftbpZg_I7eB4"
              alt="icoPhone"
            />
            <h3>(601) 322-98-42</h3>
          </div>
          <div className="phoneNumber">
            <img
              src="https://drive.google.com/uc?export=download&id=1QKMkNLfSGecNgO-hf76rftbpZg_I7eB4"
              alt="icoPhone"
            />
            <h3>(313) 281-29-17</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
