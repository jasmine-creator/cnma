import './TopNav.css'
import {FaFacebookF,FaInstagram,FaLinkedin,FaYoutube} from 'react-icons/fa'
import{MdMail} from 'react-icons/md'
import{AiFillPhone} from 'react-icons/ai'
import {SiYoutube} from 'react-icons/si'
import {Link}from 'react-router-dom'





const TopNav = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
        <div className="container text-light">
            <div className="w-100 d-flex justify-content-between">
                <div>
                    <i className="fa fa-envelope mx-2"></i>
                    {/* <span style={{"color":'yellow'}}><CiMail/>  </span> */}
                    <span ><MdMail/>  </span>
                    <a className="navbar-sm-brand text-light text-decoration-none" href="mailto:info@company.com">info@cnma.dz</a>
                    <i className="fa fa-phone mx-2"></i>
                    <span> <AiFillPhone/> </span>
                    <a className="navbar-sm-brand text-light text-decoration-none" href="tel:010-020-0340">020-06-11-02 / 020-06-11-96</a>
                </div>
                <div>
                    <span>  <FaFacebookF onClick ={() => window.open("https://www.facebook.com/CNMA.Assurances?fref=ts",'_blank')} /> </span>
                   <span> <FaLinkedin onClick ={() => window.open("https://www.linkedin.com/companhttps://www.linkedin.com/company/cnma-assurances/y/cnma-assurances/",'_blank')}/>    </span>
                  <span> &#160;</span>  <span> <SiYoutube  onClick ={() => window.open("https://www.youtube.com/@MutualiteAgricole_CNMA/videos",'_blank')}/>  </span>
   
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default TopNav