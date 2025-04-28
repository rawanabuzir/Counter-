import { createContext, useState } from "react";

export const RandomContext = createContext({
  randomNum: () => {}, 
  getrandinit: 0,
  Firstname : ' Rawan Khaled Aref'

});

function RandomProvider({ children }) {
  const [getrandinit, setrandnew] = useState(0);
    const [Firstname, setFirstname] = useState(' Rawan Khaled Aref');

  function randomNum() {
    const random = Math.floor(Math.random() * 101);
    setrandnew(random);
    return random;
  }

  const value = {
    randomNum,
    getrandinit,
    Firstname,

  };

  return (
    <RandomContext.Provider value={value}>
      {children}
    </RandomContext.Provider>
  );
}

export default RandomProvider;
