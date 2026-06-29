'use client';
import Image from "next/image";
import afficheNom from "./afficheNom";
import Nom from "./nom";
import AfficheNom from "./afficheNom";
import Compteur from "./compteur";
import { store } from "./store";
import { Provider } from "react-redux";
import CompteARebours from "./compteArebours";






export default function Home () {
  return (
    <Provider store ={store}>

 <Compteur />
 <CompteARebours />



  </Provider>
   );
}

