import React from 'react'
import {Hero,Branches,Nouveautés,Statistiques,Motdg, Ecoute} from '../../Sections/index';

const Acceuil = () => {
  return (
    <>
    <Hero/>
    <Motdg/>
    <Ecoute/>
    {/* <Services/> */}
    <Branches/>
    <Nouveautés/>

    </>
  )
}

export default Acceuil