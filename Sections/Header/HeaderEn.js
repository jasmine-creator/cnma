import './Header.css'
import logo from '../../assets/images/logo.png'
import Navitem,{NavitemDropDown} from '../../components/Navitem/Navitem';
import {Link}from 'react-router-dom'

const HeaderEn = () => {
  return (
    <div>
      {/* fixed-top */}
        <div className="navbar navbar-expand-md bg-light navbar-light text-white ">
        <div className="container">
          <Link to='/welcome'> </Link>
            <a style={{"color":'grey'}}  href="/En/welcome" className="navbar-brand">
            <img src={logo} alt=""/>   C N M A 
            {/* <br/> Assurance toutes branches */}
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
           
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                <Navitem>
                {/* <a href="/#" className="nav-link " >Qui sommes-nous</a> */}
                <Link to="/Qui_En"  className="nav-link " > Who we are</Link>
                </Navitem>
                <Navitem>
                
                <Link to='/Services'  className="nav-link " > Our services</Link>

                </Navitem>
                <NavitemDropDown>
                        <a href="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Our produits</a>
                        <ul className="dropdown-menu">
                        <li> <Link to='#' className="dropdown-item"> Pour Particuliers</Link></li>
                        <li> <Link to='#' className="dropdown-item"> Pour Entreprise</Link></li>
                        <li> <Link to='#' className="dropdown-item"> Conseils et Prevention</Link></li>


                            {/* <li><a href="/#"  className="dropdown-item">Details du Produit</a></li> */}
                            {/* <li><a href="/#" className="dropdown-item">Faire un Devis</a></li> */}
                        </ul>
                    </NavitemDropDown>
                    <NavitemDropDown>
                        <a href="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Our network</a>
                        <ul className="dropdown-menu">
                        <li> <Link to='#' className="dropdown-item"> Région Centre</Link></li>
                        <li> <Link to='#' className="dropdown-item"> Région Est</Link></li>
                        <li> <Link to='#' className="dropdown-item">Région Ouest</Link></li>
                        <li> <Link to='#' className="dropdown-item"> Région Sud</Link></li>


                            {/* <li><a href="/#"  className="dropdown-item">Details du Produit</a></li> */}
                            {/* <li><a href="/#" className="dropdown-item">Faire un Devis</a></li> */}
                        </ul>
                    </NavitemDropDown>
                <NavitemDropDown>
                        <a href="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Devis en ligne</a>
                        <ul className="dropdown-menu">
                        <li> <Link to='/Automobile' className="dropdown-item"> Details du Produit Automobile</Link></li>
                        <li> <Link to='/Devis' className="dropdown-item"> Faire un Devis Automobile</Link></li>
                        <li><a href="/#" className="dropdown-item">Faire un Devis MultiRisques Habitation</a></li>


                            {/* <li><a href="/#"  className="dropdown-item">Details du Produit</a></li> */}
                            {/* <li><a href="/#" className="dropdown-item">Faire un Devis</a></li> */}
                        </ul>
                    </NavitemDropDown>
              
                   
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
            
                
                <NavitemDropDown>
                        <a href="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Language</a>
                        <ul className="dropdown-menu">
                        <li> <a  href="/react/" className="dropdown-item"> Français</a></li>
                        <li> <Link to='/' className="dropdown-item"> Anglais</Link></li>

                        </ul>
                    </NavitemDropDown>

                    <Navitem>
                <a href="http://webcavedz.site/revuetest/" target="_blank" className="nav-link  siten" >CNMA news</a>
                </Navitem>

                </ul>
            </div>
        </div>
    </div>
    
    </div>
  )
}

export default HeaderEn