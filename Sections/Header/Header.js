import './Header.css'
import logo from '../../assets/images/logo.png'
import Navitem,{NavitemDropDown} from '../../components/Navitem/Navitem';
import {Link}from 'react-router-dom'
import reseau from '../../assets/images/réseau commecial CNMA-1.pdf';

const Header = () => {
  return (
    <div>
      {/* fixed-top */}
        <div className="navbar navbar-expand-md bg-light navbar-light text-white fontf">
        <div className="container prin">
          <Link to='/react'></Link>
            <a style={{"color":'#079347'}}  href="/react" className="navbar-brand">
            <img src={logo} alt=""/>   Caisse Nationale de Mutualité Agricole
            {/* <br/> Assurance toutes branches */}
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                <Navitem>
                {/* <a href="/#" className="nav-link " >Qui sommes-nous</a> */}
                <Link to="/Qui"  className="nav-link " > nous connaite</Link>
                </Navitem>
              {/*   <Navitem>
                
                <Link to='/Services'  className="nav-link " > nos services</Link>

                </Navitem> */}
                <NavitemDropDown>
                        <a href="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">nos services</a>
                        <ul className="dropdown-menu">
                        <li> <Link to='#' className="dropdown-item"> Assurance</Link></li>
                        <li> <Link to='#' className="dropdown-item"> Gestion des risques </Link></li>
                        <li> <Link to='#' className="dropdown-item"> Modernisation des produits </Link></li>
                        <li> <Link to='#' className="dropdown-item"> Dar El Fellah</Link></li>
                        <li> <Link to='#' className="dropdown-item"> Aléas climatiques</Link></li>


                            {/* <li><a href="/#"  className="dropdown-item">Details du Produit</a></li> */}
                            {/* <li><a href="/#" className="dropdown-item">Faire un Devis</a></li> */}
                        </ul>
                    </NavitemDropDown>
                <NavitemDropDown>
                        <a href="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Nos produits</a>
                        <ul className="dropdown-menu">
                        <li> <Link to='#' className="dropdown-item"> Pour Particuliers</Link></li>
                        <li> <Link to='#' className="dropdown-item"> Pour Entreprise</Link></li>
                        <li> <Link to='#' className="dropdown-item"> Conseils et Prevention</Link></li>


                            {/* <li><a href="/#"  className="dropdown-item">Details du Produit</a></li> */}
                            {/* <li><a href="/#" className="dropdown-item">Faire un Devis</a></li> */}
                        </ul>
                    </NavitemDropDown>
                  
                    <Navitem>
                <a href={reseau} target="_blank" className="nav-link  " >Notre réseau</a>
                </Navitem>

                    
        {/*         la partie devis en ligne changement de place 
        
        <NavitemDropDown>
                        <a href="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Devis en ligne</a>
                        <ul className="dropdown-menu">
                        <li> <Link to='/Automobile' className="dropdown-item"> Details du Produit Automobile</Link></li>
                        <li> <Link to='/Devis' className="dropdown-item"> Faire un Devis Automobile</Link></li>
                        <li><a href="/#" className="dropdown-item">Faire un Devis MultiRisques Habitation</a></li>


                        </ul>
                    </NavitemDropDown>
              
                    */}
                    {/* <Navitem>
                    <Link to='/' className="nav-link"> Automobile</Link>
                      {/* <a href="/" className="nav-link">Home</a> */}
                    {/* <NavitemDropDown>
                        <a href="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Maison</a>
                        <ul className="dropdown-menu">
                            <li><a href="/#" className="dropdown-item">Details du Produit</a></li>
                            <li><a href="/#" className="dropdown-item">Faire un Devis</a></li>
                        </ul>
                    </NavitemDropDown>
                    <NavitemDropDown>
                        <a href="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Espace Client</a>
                        <ul className="dropdown-menu">
                            <li><a href="/#" className="dropdown-item">Mon compte CNMA</a></li>
                            <li><a href="/#" className="dropdown-item">Declarer un sinistre</a></li>
                        </ul>
                    </NavitemDropDown>
                    
             */}
            
                
               

                    <Navitem>
                <a href="http://webcavedz.site/revuetest/" target="_blank" className="nav-link  siten" >CNMA news</a>
                </Navitem>


                <NavitemDropDown>
                        <a href="/" className="nav-link dropdown-toggle langue" data-bs-toggle="dropdown">FR</a>
                        <ul className="dropdown-menu">
                        {/* <li> <Link to='/' className="dropdown-item"> Français</Link></li> */}
                        {/* <li> <Link to='/En/welcome' className="dropdown-item"> Anglais</Link></li> */}
                        <li> <a  href="/En" className="dropdown-item"> EN</a></li>

                        </ul>
                    </NavitemDropDown>

                </ul>
            </div>
        </div>
    </div>
    
    </div>
  )
}

export default Header