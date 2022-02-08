import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCardInCart } from "./ProductCardInCart/ProductCardInCart";
import { addToCart, dellFromCart, clearCart } from "../Redux/actions";
import "./ShoppingCart.css";

export function ShoppingCart() {
  const state = useSelector((state) => state);
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const dispatch = useDispatch();
  const { products, cart } = state.shopping;

  const alertClear = () => {
    if (window.confirm("¿Desea limpiar el Carrito de Compras?")) {
      dispatch(clearCart());
    }
  };


  const totalArray = cart.map((item) => (item.quantity * item.value));
  const sum = (previousValue, currentValue) => previousValue + currentValue;
  const total = cart.length > 0 ? totalArray.reduce(sum) : null;
  const productList =
    cart.map((item) => ("%0a*" + item.name + "*%20" + "Cantidad:%20" + item.quantity + "%20Subtotal:%20" +
      item.quantity * item.value + "%20"
    ));
  const apiMessage = "Hola%20KYRIO's,%0ami%20Nombre%20es:%20*" + userName + "*%0ami%20Número%20de%20celular%20es:%20*" + userPhone + "*%0aMi%20pedido%20es:%0a" + productList + "%0a%0aPara%20un%20Total%20de:%0a*" + total + "*%0a%0aMi%20Dirección%20es:%20*" + userAddress + "*%0aMensaje%20adicional:%0a_Por favor"+userMessage+"_%0a*Gracias*"
  const phoneNumber = 3192171931;
  const urlApiWhatsApp = "https://api.whatsapp.com/send?phone=57"+phoneNumber+"&text="+apiMessage

  const alertSend = () => {
    if (window.confirm("Su pedido será gestionado a partir de WhatsApp, permita redireccionar el pedido, ¿Está seguro de los datos del pedido y el usuario son correctos? una vez enviado no podra acceder a ellos")) {
      window.open(urlApiWhatsApp, '_blank');
      setUserPhone("");
      setUserName("");
      setUserMessage("");
      setUserAddress("");
      dispatch(clearCart())}
  };


  const handleSent = event => {
    event.preventDefault()
    alertSend()
  };
  return (
    <div className="containerCart">
      <div className="infoCart">
        <div className="logoCart">
          <img
            src="https://drive.google.com/uc?export=download&id=1qynz1kaVgJnrVVASKH2eKCslhoTuSBK_"
            alt="logo"
          />
        </div>
      </div>
      <div className="titleCart">
        <h2>Carrito de compras</h2>
        <h3>
          {cart.length > 0
            ? "Lista de productos seleccionados"
            : "Vacio, por favor agregar productos desde el Menú"}
        </h3>
      </div>
      <article className="productsCart">
        {cart.length > 0 ? (
          <button className="clearCart" onClick={alertClear}>
            Limpiar Carrito de Compras
          </button>
        ) : null}

        <div className="productsSelectedCart">
          {cart.map((item) => (
            <ProductCardInCart
              key={item.id}
              id={item.id}
              quantity={item.quantity}
              size={item.size ? item.size : null}
              data={products.find((e) => e.id === item.dataID)}
              value={item.value}
              addToCart={() => dispatch(addToCart(item.id))}
              dellOneFromCart={() => dispatch(dellFromCart(item.id))}
              dellAllFromCart={() => dispatch(dellFromCart(item.id, true))}
            />
          ))}
        </div>
      </article>
      <div className="resultsCart">
        <div className="resultCartText">
          <h2>TOTAL</h2>
          <h4>
            {total < 12000 ? "Recuerde que el valor minimo para realizar el domicilio es de $12.000 (Doce mill pesos)" : null}
          </h4>
        </div>
        <div className="resultCartValue">
          <h3>${cart.length > 0 ? total : "Valor Total"}"</h3>
        </div>
      </div>
      <section className="formCart">
        <h2>DATOS DEL PEDIDO</h2>
        <form onSubmit={handleSent}>
          <input
            type="text"
            id="name"
            name="user_name"
            placeholder="Ingrese su Nombre"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="text"
            id="cel"
            name="user_cel"
            placeholder="Ingrese su Número de Celular"
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
          />
          <input
            type="text"
            id="address"
            name="user_text"
            placeholder="Ingrese su Direccón"
            value={userAddress}
            onChange={(e) => setUserAddress(e.target.value)}
          />
          <input
            type="text"
            id="message"
            name="user_message"
            placeholder="Mensaje Adicional para su pedido, selección de saboreso especificaciones, ejemplo sabores de bebidas o de pizza personalizada, Hamburgesa sin salsas y cebolla, etc..."
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          />
          <input type="submit" id="submit" value="Enviar" disabled={total>12000 && userName!=="" && userAddress !=="" && userPhone !==""?false:true}/>
        </form>
      </section>
    </div>
  );
}
