import React from 'react';


const Form = ({ handleSubmit }) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="nombre">Nombre</label>
              </td>
              <td>
                <input type="text" name="nombre" placeholder="Pepe" required />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="email">Email</label>
              </td>
              <td>
                <input type="email" name="email" placeholder="pepe@gmail.com" required />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="urlFoto">Foto</label>
              </td>
              <td>
                <input type="text" name="urlFoto" placeholder="URL de tu foto" required />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="edad">Edad</label>
              </td>
              <td>
                <input type="number" name="edad" min="18" placeholder="18" required />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button type="submit">Enviar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>

    </>
  )
};

export default Form;
