import React from "react";
import { useContext} from 'react'
import { UserMail } from '../../context/UserMail'

const Header = () => {
  const { usermail,updateUserMail } = useContext(UserMail)


  return (
      <>
        {usermail?
                <>
                  <p>Hola, {usermail}</p>
                  <button size="small" variant="contained" style={{marginLeft: 20, maxHeight:30}} onClick={()=>updateUserMail("")}>Logout</button>
                </>
                  :<p>Rellena el formulario, por favor</p>}
      </>
  )
};

export default Header;
