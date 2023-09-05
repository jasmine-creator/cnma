import './footer.css'
import React from 'react'
import {FaFacebookF,FaInstagram,FaLinkedin,FaYoutube} from 'react-icons/fa'
import{MdMail} from 'react-icons/md'
import{AiFillPhone} from 'react-icons/ai'
import {SiYoutube} from 'react-icons/si'

const footer = () => {
  return (
      <div className="bg-secondary pt-4">
        <div className="container">
            <div className="row py-4">

                <div className="col-lg-3 col-12 align-left">
                <h3 className="h4 pb-lg-3 text-light light-300">CNMA</h3>

                    <ul className="list-unstyled text-light light-300">
                            <li className="pb-2">
                                <i className='bx-fw bx bxs-chevron-right bx-xs'></i><a className="text-decoration-none text-light" href="index.html">Mot de DG</a>
                            </li>
                            <li className="pb-2">
                                <i className='bx-fw bx bxs-chevron-right bx-xs'></i><a className="text-decoration-none text-light py-1" href="about.html">A propos de la CNMA</a>
                            </li>
                            <li className="pb-2">
                                <i className='bx-fw bx bxs-chevron-right bx-xs'></i><a className="text-decoration-none text-light py-1" href="work.html">Offres d'emploi</a>
                            </li>
                         
                        </ul>
                </div>

                <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
                    <h3 className="h4 pb-lg-3 text-light light-300">Liens Rapide</h3>
                        <ul className="list-unstyled text-light light-300">
                            <li className="pb-2">
                                <i className='bx-fw bx bxs-chevron-right bx-xs'></i><a className="text-decoration-none text-light" href="index.html">Home</a>
                            </li>
                            <li className="pb-2">
                                <i className='bx-fw bx bxs-chevron-right bx-xs'></i><a className="text-decoration-none text-light py-1" href="about.html">About Us</a>
                            </li>
                            <li className="pb-2">
                                <i className='bx-fw bx bxs-chevron-right bx-xs'></i><a className="text-decoration-none text-light py-1" href="work.html">Work</a>
                            </li>
                            <li className="pb-2">
                                <i className='bx-fw bx bxs-chevron-right bx-xs'></i><a className="text-decoration-none text-light py-1" href="pricing.html">Price</a>
                            </li>
                            <li className="pb-2">
                                <i className='bx-fw bx bxs-chevron-right bx-xs'></i><a className="text-decoration-none text-light py-1" href="contact.html">Contact</a>
                            </li>
                        </ul>
                </div>

                <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
                    <h2 className="h4 pb-lg-3 text-light light-300">Nos produits</h2>
                    <ul className="list-unstyled text-light light-300">
                        <li className="pb-2">
                            <i className='bx-fw bx bxs-chevron-right bx-xs'></i><a className="text-decoration-none text-light py-1" href="#">Assurance Automobiles</a>
                        </li>
                        <li className="pb-2">
                            <i className='bx-fw bx bxs-chevron-right bx-xs'></i><a className="text-decoration-none text-light py-1" href="#">Assurance Végétales</a>
                        </li>
                        <li className="pb-2">
                            <i className='bx-fw bx bxs-chevron-right bx-xs'></i><a className="text-decoration-none text-light py-1" href="#">Assurance Animales</a>
                        </li>
                        <li className="pb-2">
                            <i className='bx-fw bx bxs-chevron-right bx-xs'></i><a className="text-decoration-none text-light py-1" href="#">Assurance Voyage </a>
                        </li>
                        <li className="pb-2">
                            <i className='bx-fw bx bxs-chevron-right bx-xs'></i><a className="text-decoration-none text-light py-1" href="#">Assurance Multirisque Habitation</a>
                        </li>
                        
                    </ul>
                </div>

                <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
                    <h2 className="h4 pb-lg-3 text-light light-300">Contactez nous</h2>
                    <ul className="list-unstyled text-light light-300">
                        <li className="pb-2">
                            <i className='bx-fw bx bx-phone bx-xs'></i><a className="text-decoration-none text-light py-1" href="tel:010-020-0340">020-06-11-02 / 020-06-11-96</a>
                        </li>
                        <li className="pb-2">
                            <i className='bx-fw bx bx-mail-send bx-xs'></i><a className="text-decoration-none text-light py-1" href="mailto:info@company.com">info@cnma.dz</a>
                        </li>
                        <span>  <FaFacebookF onClick ={() => window.open("https://www.facebook.com/CNMA.Assurances?fref=ts",'_blank')} /> </span>
                       <span> <FaLinkedin onClick ={() => window.open("https://www.linkedin.com/companhttps://www.linkedin.com/company/cnma-assurances/y/cnma-assurances/",'_blank')}/>    </span>
                       <span> &#160;</span>  <span> <SiYoutube  onClick ={() => window.open("https://www.youtube.com/@MutualiteAgricole_CNMA/videos",'_blank')}/>  </span>
   

                    </ul>
                </div>

            </div>
        </div>

        <div className="w-100 bg-dark ">
            <div className="container">
                {/* <div className="row pt-2"> */}
                <div className='row center '>
                    <div style={{margin:"auto"}}  className="col-lg-6 col-sm-12" >
                        <p className="text-lg-start text-center text-light light-300" >
                          Copyright  ©  2023 Caisse de Mutualité Agricole. All Rights Reserved.
                        </p>
                    </div>
                   {/*  <div className="col-lg-6 col-sm-12">
                        <p className="text-lg-end text-center text-light light-300">
                            Designed by <a rel="sponsored" className="text-decoration-none text-light" href="https://templatemo.com/" target="_blank"><strong>Aoub Yasmine</strong></a>
                        </p>
                    </div> */}
                </div>
            </div>
        </div>

        


    </div>
  )
}

export default footer