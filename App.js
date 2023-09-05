import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


import { Header, Footer,Hero,Services,Branches,Nouveautés,TopNav,HeaderEn} from './Sections/index';
import{BrowserRouter as Router , Route , Routes} from 'react-router-dom'
// import {Home,Auto,Devie} from './pages/index'

import {Acceuil,Automobile,Devis,Forms,Qui_sommes,NServices, ContactUS,Nv_produit, Connaitre,Afrique,Risque,AcceuilEn , ConnaitreEn,Qui_sommesEn,} from './p1/index'
 

const App = () => {
 

  return (
    <>
   
    <Router basename={'/react'}> 
          <TopNav/> 
          <Header/>            

          <Routes>
            <Route path='/' element={<Acceuil/>}/>
            <Route path='/Automobile' element={<Automobile/>}/>
            <Route path='/Devis' element={<Forms/>}/> 
            <Route path='/Qui' element={<Qui_sommes/>}/> 
            <Route path='/Services' element={<NServices/>}/> 
            <Route path='/Contactez-nous' element={<ContactUS/>}/>
            <Route path='/Connaitre-Benhabiles' element={<Connaitre/>}/>
            <Route path='/slide1' element={<Afrique/>}/>
            <Route path='/slide2' element={<Risque/>}/>
            <Route path='/slide3' element={<Nv_produit/>}/>


            
           
          </Routes>
            
          <Footer/> 
     </Router>  
 
   {/*   <Router basename={'/En'}> 
          <TopNav/> 
          <HeaderEn/>            

          <Routes>
            
            <Route path='/' element={<AcceuilEn/>}/>
            <Route path='/Automobile_En' element={<Automobile/>}/>
            <Route path='/Devis_En' element={<Forms/>}/> 
            <Route path='/Qui_En' element={<Qui_sommesEn/>}/> 
            <Route path='/Services_En' element={<NServices/>}/> 
            <Route path='/Contactez-nous_En' element={<ContactUS/>}/>
            <Route path='/ConnaitreEn' element={<ConnaitreEn/>}/>
            

          </Routes>
            
          <Footer/> 
     </Router>   */}

    
    </>
    )
}

export default App