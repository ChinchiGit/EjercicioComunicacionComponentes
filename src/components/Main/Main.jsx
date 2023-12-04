import React, { useState, useContext } from 'react';
import { UserMail } from '../../context/UserMail';
import Form from "./Form";
import Card from "./Card";

const Main = () => {

  const {updateUserMail} = useContext(UserMail)
  const [datosUsuario, setDatosUsuario] = useState({
    nombre: "",
    email: "",
    urlFoto: "",
    edad:""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      nombre: e.target.nombre.value,
      email: e.target.email.value,
      urlFoto: e.target.urlFoto.value,
      edad: e.target.edad.value
    };
    updateUserMail(data.email);
    setDatosUsuario(data);
    e.target.nombre.value="";
    e.target.email.value="";
    e.target.urlFoto.value="";
    e.target.edad.value="";

  };


  return (
    <>
      <section>
        <Form handleSubmit = {handleSubmit} />
      </section>
      <section>
      <Card datosUsuario={datosUsuario}/>    
      </section>
    </>

  )
};

export default Main;
