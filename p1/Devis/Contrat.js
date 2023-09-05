import { useEffect } from 'react';
import {useState}from 'react'
import { Button} from 'react-bootstrap';
import Forms from "./Forms";
import { Document, Text, Page, BlobProvider , StyleSheet,View, Image } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import logo from '../../assets/images/logo.png'


/*
 Nom: "",
    Prenom: "",
    Sexe: "",
    Wilaya: "",
    Telephone: "",
    Email: "",
    Puissance: "",
    Valeur: "",
    Duree: "",
    Formule: "",
*/ 





const Contrat = (props) => {
   const [tab,setTab]=useState(props.formData)
   const [rc,setRc]=useState();
   const [garantie,setGarantie]=useState(0);
   const [bdg,setBdg]=useState(0);//2000 da pour vehicule inferieure à 3.5 tonnes 
   const [df,setDf]=useState(400);// 400 da obligatoire
   const [incendie,setIncendie]=useState(0);
   const [vol,setVol]=useState(0);
   const [assistance,setAssistance]=useState(0);
   const [pt,setPt]=useState(125);//25 da par place  25*5


   // calcule after get the data 
   const [coti,setCoti]=useState(0);
   const [complement,setComplement]=useState(500); // 500 da
   const [tva,setTva]=useState(0);
   const [fga,setFga]=useState(0);
   const [timbreD,setTimbreD]=useState(40);
   const [p1d,setP1d]=useState(0);
   const [p1,setP1]=useState(coti);
   const [p2,setP2]=useState(0);
   const [p3,setP3]=useState(0);
   const [p4,setP4]=useState(0);
   const [timbreG,setTimbreG]=useState(0);
   const [primeNet,setPrimeNet]=useState(0);
   const [etat,setEtat]=useState(true);
   const[affiche,setAffiche]=useState(false);

   const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
      },
      page: {
         padding: 20,
       //  alignItems: 'center',
     },
      image: {
         alignSelf: 'center' ,
         width: 50,
         height: 50,
     }
    });
   const MyDocument = () => (
      <Document>
        <Page>
          <Text>Facture Proforma</Text>
        </Page>
      </Document>
    );


    const CustomDocument = (props) => ( 
      <Document>
        <Page size="A4" style={styles.page}>
        <View>
        <Image 
         src={logo} 
         // src='src\assets\images\logo.png' 
          style={styles.image} />
      </View>
          <Text  style={{ color: '#111', textAlign: 'center', margin: 30, fontSize:22 }}> Caisse Nationale de Mutualité Agricole </Text>
          <br/>
           <View> <Text style={{ color: '#111', textAlign: 'center', margin: 30, fontSize:19 }}> Devis en ligne  </Text> </View>
          
           <View >
            <Text style={{ color: '#111',textAlign: 'left',padding:15, fontSize:12 }}>Nom :   {tab.Nom} </Text>  
          <Text style={{ color: '#111',textAlign: 'left',padding:15, fontSize:12 }}>Prénom  :   {tab.Prenom}</Text>
          <Text style={{ color: '#111',textAlign: 'left',padding:15, fontSize:12 }}>N° de Telephone :   {tab.Telephone}</Text>
          <Text style={{ color: '#111',textAlign: 'left',padding:15, fontSize:12 }}>E-mail :   {tab.Email}</Text>
          <Text style={{ color: '#111',textAlign: 'left', padding:15,fontSize:12 }}>Formule d'assurance :   {tab.Formule}</Text>
          <Text style={{ color: '#111',textAlign: 'left', padding:15,fontSize:12 }}>Valeur du Véhicule :   {tab.Valeur} DA</Text>
          <Text style={{ color: '#111',textAlign: 'left', padding:10,fontSize:12,bottom:0 }}>Options Ajoutée :     </Text>
          <Text style={{ color: '#111',textAlign: 'left',left:120, padding:5,fontSize:10 }}>{tab.bdg && "BDG"} { tab.Formule==='Tous Risques avec reduction 50%'&& "BDG"}</Text>
          <Text style={{ color: '#111',textAlign: 'left', left:120,padding:5,fontSize:10 }}>{tab.Incendie && "Incendie"}{ tab.Formule==='Tous Risques avec reduction 50%'&& "Incendie"}</Text>
          <Text style={{ color: '#111',textAlign: 'left',left:120,padding:5,fontSize:10 }}>{tab.Depannage}</Text>

          
          
          </View>
          <View>
          <Text style={{ color: '#111', textAlign: 'center', margin: 30, fontSize:15 }}>Prime d'assurance  : {primeNet.toFixed(2) } DA</Text>
          </View>
          
          {/* <View style={styles.section}>
            <Text>Section #2</Text>
          </View> */}
    <View>
       <Image 
         src={logo} 
         // src='src\assets\images\logo.png' 
          style={styles.image} />
      </View>
        </Page>
      </Document> 
    );
// wilaya du sud : Timimoune ,Bordj badji Mokhrat, Beni Abbes, Ouled Djellah , in salah , in guezzam , touggourt
//djanet , el M'ghair , El Menia

const CalculeRc=(wilaya,valeur)=>{
 if(wilaya==='Timimoun' || wilaya==='Bordj Baji Mokhtar' || wilaya==='Béni Abbès' || wilaya==='Ouled Djellal' || wilaya==='Ain Salah' || wilaya==='Ain Guezzam' || wilaya==='Touggourt' || wilaya==='Djanet' || wilaya==="El M'Ghair" || wilaya==='El Menia')
 {
   calculeRcSud(valeur);
 }
 else{
   calculeRcNord(valeur)

 }
 //calcule default 
 VolVenale();
 console.log("vol::",vol)
 IncendieVenale();
 console.log("incendie::",incendie)
 BdgVenale();
 Assistance();
 Formule();
 
 //calculeDefault();
// CalculeTimbreG();
// calcule();
// afficher();

}

useEffect(()=>{
  Formule2();
   afficher();
   

 },[rc]);

 useEffect(()=>{
   calculeDefault();
   

 },[garantie]);
 useEffect(()=>{
   CalculeTimbreG();
   afficher();

 },[coti]);
 useEffect(()=>{
   calcule();

 },[timbreG]);

 useEffect(()=>{
   afficher();

 },[rc]);

const calculeRcNord=(valeur)=>{
   if (valeur===1 || valeur===2){
      setRc(377.28);
   }
   if(valeur===3 || valeur=== 4){
      setRc(551.52);
   }
   if(valeur===5 || valeur=== 6){
      setRc(684);
   }
  if(valeur=== 7 || valeur=== 10){
   setRc(858.24);
  }
  if(valeur=== 11 || valeur=== 14){
   setRc(1769.76);
  }
  if(valeur=== 15  || valeur=== 23 ){
   setRc(1977.12);
  }
  if(valeur>=24){
   setRc(2257.92);
  }


}

const calculeRcSud=(valeur)=>{
   if (valeur===1 || valeur===2){
      setRc(321.12);
   }
   if(valeur===3 || valeur===4){
      setRc(423.36);
   }
   if(valeur===5 || valeur===6){
      setRc(519.84);
   }
  if(valeur===7 || valeur===10){
   setRc(659.52);
  }
  if(valeur=== 11|| valeur===14){
   setRc(1363.68);
  }
  if(valeur===15 || valeur===23){
   setRc(1495.29);
  }
  if(valeur>=24){
   setRc(1769.33);
  }


} 
  const afffichertab=()=>{
      console.log(tab);
      console.log(tab.Wilaya);
      console.log(tab.Puissance);
      console.log("RC",rc)
      console.log("valeur",tab.Valeur);
      console.log("bdg",tab.bdg);

      console.log("coti",coti);
      console.log("garantie",garantie);
      console.log("incendie",incendie);
      console.log("bdg",bdg);
      console.log("vole",vol);
      console.log("timbre g",timbreG);
      console.log("timbre d",timbreD);
      console.log("tva",tva);
      console.log("fga",fga);
      console.log("prime net",primeNet);





      
      




   }

   const calculeDefault = ()=>{
      setCoti(rc+garantie+bdg+df+incendie+vol+assistance+pt+complement)
      console.log("incendie :::",incendie)
      setTva(((rc+garantie+bdg+df+incendie+vol+assistance+complement)*19)/100);
      setFga(((rc+complement)*3)/100);
      //Formule();
      
     

    }
    const etape1=()=>{
      if(coti>=2500) {
        
         setP1(coti-2500) ;
         setP1d(300);

         console.log("-----------------")
         console.log("nvp1",p1) 
    }}
    const etape2=()=>{
      if(p1>2500 && p1<10000){
         setP2(p1*5/100);
         console.log("-----------------")
         console.log("p2",p2)}
      }
    const etape3=()=>{
      if(p2>10000 && p2<50000){
         setP3(p2*3/100);
         console.log("-----------------")
         console.log("p3",p3)
    }}
    const etape4=()=>{
      if(p3>50000 ){
         setP4(p3*3/100);
         console.log("-----------------")
         console.log("p4",p4)

            
         }
    }


    const calculeTimbreg2=()=>{
      //setP1(coti);
   
     
         {etape1()}
        {etape2()}
         {etape3()}
         {etape4()}



                  setTimbreG(p1d+p2+p3+p4);
               /*    console.log("*******************");

                  console.log("p1 ",p1d);
                  console.log("p2",p2);
                  console.log("p3",p3);
                 console.log("timbre g",p1d+p2+p3+p4);
                   */ 
 
       }
       const affichert=()=>{
         console.log("*******************");

         console.log("p1 ",p1d);
         console.log("p2",p2);
         console.log("p3",p3);
         console.log("timbre g",p1d+p2+p3+p4);
         console.log("timbre g",timbreG);

         
       }

    
    const CalculeTimbreG=()=>{
      /* if(coti>=2500) {
         //setP1(coti-2500);
         setP1d(300);
         
         if(p1>2500 && p1<10000){
         setP2(p1*5/100);
         if(p2>10000 && p2<50000){
            setP3(p2*3/100);
            if(p3>50000 ){
               setP4(p3*3/100);
                  
               } 
               
            }
           }
        
         }
          */
        
         setTimbreG(p1d+p2+p3+p4);

      

    }
    useEffect(()=>{
      CalculeTimbreGV2();
      calculeDefault();
      calcule();
      afficher();

    },[coti]);





    useEffect(()=>{
      if(coti>=2500) {
         setP1(coti-2500);
         setP1d(300);
      }

    },[coti]);
    useEffect(()=>{
      if(p1>2500 && p1<10000){
         setP2(p1*5/100);
      }
    },[p1]);
    useEffect(()=>{
      if(p2>10000 && p2<50000){
         setP3(p2*3/100);
      }
    },[p2]);
    useEffect(()=>{
      if(p3>50000 ){
         setP4(p3*3/100);
      }
    },[p3]);



    const calcule=()=>{
       
      setPrimeNet(coti+tva+fga+timbreD+timbreG);

      return setPrimeNet
    }
    const afficher=()=>{
      console.log("*******************");


         console.log("coti ",coti);
         console.log("rc",rc);
         console.log("garantie ",garantie);
         console.log("complement",complement);
         console.log("tva",tva);
         console.log("fga",fga);
         console.log("timbre d",timbreD);
         console.log("timbre g",timbreG)
         console.log("p1",p1)
   
         console.log("prime net",primeNet);
    }


// on commence a coder les données principale comme la rc ect....
 // calcule vol valeur vénale
 const VolVenale =()=>{
  if (tab.Formule==='Tous Risques avec reduction 50%' && tab.Vol===true ){
    setVol((tab.Valeur*2.7/1000+100)*50/100)
  } else 
  if(tab.Formule==='Tous Risques avec reduction 50%'){
    setVol((tab.Valeur*2.7/1000+100)*50/100)

  }else 
   if(tab.Vol===true){
      setVol(tab.Valeur*2.7/1000+100)
   }
   

   
 }
 const IncendieVenale =()=>{
  if (tab.Formule==='Tous Risques avec reduction 50%' && tab.Incendie===true ){
    setIncendie((tab.Valeur*3.2/1000+100)*50/100)
  } else 
  if(tab.Formule==='Tous Risques avec reduction 50%'){
    setIncendie((tab.Valeur*3.2/1000+100)*50/100)

  }else
   if(tab.Incendie===true){
      setIncendie(tab.Valeur*3.2/1000+100)
   }
   
 }
 const BdgVenale=()=>{
  if (tab.Formule==='Tous Risques avec reduction 50%' && tab.bdg===true ){
    setBdg(2000*50/100)
  }else
  if(tab.Formule==='Tous Risques avec reduction 50%') {
    setBdg(2000*50/100)
  }
  if(tab.bdg===true){
    setBdg(2000)
  }
 }

 const Assistance=()=>{
 
   if(tab.Depannage==="Depannage ilimité"){
      setAssistance(4000)
   }else if(tab.Depannage==="Depannage 200 km"){
      setAssistance(1200)
   }else if (tab.Depannage==="Depannage 100 km"){
      setAssistance(500)
   }
   else  if(tab.Formule==='Tous Risques avec reduction 50%'){
    setAssistance(1200)

  }
 }
 const Formule=()=>{
  // const currentYear = new Date().getFullYear();

   if (tab.Formule==='Tous Risques avec reduction 50%'){
      setGarantie((tab.Valeur*5/100)*50/100)
   }else 
   if(tab.Formule==='Dommage Collision Valeur venale'){
      setGarantie(tab.Valeur*3.5/100)

   } }

    const Formule2=()=>{
      const currentYear = new Date().getFullYear();
      console.log("cureentYear",currentYear)
      console.log("diff annee",currentYear-Number(tab.Annee))
    
       if(tab.Formule==='Dommage Collision 40 000 da'){
        console.log("rrrccc",rc*450/100)
        let a=rc*450/100;
          setGarantie(a);
    
        }
        else if(tab.Formule==='Dommage Collision 30 000 da' && currentYear-Number(tab.Annee)>3){
        let a=rc*350/100;
          setGarantie(a);
        }
        else if(tab.Formule==='Dommage Collision 20 000 da' && currentYear-Number(tab.Annee)>15){
          let a=rc*300/100;
          setGarantie(a);
        }
    
      }
/* 
   } else 
   if(tab.Formule==='Dommage Collision Dommage Collision 30 000 da'&& ({currentYear}-Number(tab.Annee))<=3){
      setGarantie(rc*350/100)

   }
  // else {console.log(" l'année du vehicule depasse les 3 ans ")}

   else
   if(tab.Formule==='Dommage Collision 20 000 da' && ({currentYear}-Number(tab.Annee))<=15){
      setGarantie(rc*300/100)

   }
  // else {console.log(" l'année du vehicule depasse les 15 ans ")}
 */
 


 const CalculeTimbreGV2=()=>{
   if(coti<=2500){
      setTimbreG(300)
   }
   else if(coti>2500 && coti<= 10000){
      setTimbreG(coti*5/100 + 175)
   }
   else if(coti>10000 && coti<= 50000){
      setTimbreG(coti*3/100 + 375)
   }
   else if(coti>50000){
      setTimbreG(coti*2/100 +1175)
   }
 }
 const affiche_prime=()=>{
 setAffiche(true);

 }

 const a=()=>{
   return
   <h4>TARIF ANNUEL (DA TTC) {primeNet} </h4>
   ;
   }
  

  return (
    <div style={{ textAlign: "center" }} >
      <br/>
      <br/>
         {/* <Button onClick={() => {calculeDefault(); afficher();}}> calcule default </Button> */}
         <div className='position-absolute translate-middle '>
         <Button onClick={() => {CalculeRc(tab.Wilaya,Number(tab.Puissance));affiche_prime();afffichertab();}}> Calculer la prime</Button>
         </div>
         {/* <Button onClick={() => {calculeDefault()}}> calcule default </Button> */}

         {/* <Button onClick={() => {CalculeTimbreG()}}> calcule timbreG </Button> */}
         {/* <Button onClick={() => {calcule()}}> calcule finale </Button> */}
         {/* <Button onClick={() => { afficher()}}> afficher </Button> */}
      {/* <Button onClick={() => { affichert()}}> afficher t </Button>  */}
      <div >
        <br/>
        <br/>
         <hr/>
         <br/>
         <br/>
         {/* <h4>TARIF ANNUEL (DA TTC)  :  {primeNet} </h4> */}

         { affiche === true &&    <h4 style={{color: "green"}}>TARIF ANNUEL (DA TTC) {primeNet.toFixed(2)} </h4> }
        {/*  <Button onClick={() => {  <PDFViewer>
                <MyDocument />
          </PDFViewer>}}> Devis en pdf</Button>
 */}
         
          <BlobProvider document={<CustomDocument/>}>
      {({ url, ...rest }) => {
        return (
          <a href={url} target="_blank">
            Télécharger votre devis
          </a>
        );
      }}
    </BlobProvider>

      </div>
         
         {/* <Button onClick={() => {afffichertab()}}> afficher tab </Button>         */}
         

        

   

   
   


    </div>
  )
}

export default Contrat