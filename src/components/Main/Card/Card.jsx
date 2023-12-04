import React, { useContext } from "react";
import { UserMail } from "../../../context/UserMail";
const Card = ({ datosUsuario }) => {
  const {usermail} = useContext(UserMail)


  return (
    <>
      {usermail?
                <>
                  <article>
                    <img src={datosUsuario.urlFoto} alt="Foto Usuario" />
                  </article>
                  <article>
                    <h4>NOMBRE: {datosUsuario.nombre}</h4>
                    <h4>EMAIL: {datosUsuario.email}</h4>
                    <h4>EDAD: {datosUsuario.edad}</h4>
                  </article>
                </>
                :""
      }
    </>
  )
};

export default Card;
