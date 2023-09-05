export const questions= [
{
    Sections:1,
    items :[
        {
            label:'Nom',
            type:'text',
            value:"Nom"
        },
        {
            label:'Prénom',
            type:'text',
            value:"Prénom"
        },
        {
            label:'Date de naissance',
            type:'date',
            value:"Date de naissance"
        },
        
        {
            label:'Sexe',
            type:'select',
            value:"Sexe",
            options:["",'Homme','Femme']
        },
        {
            label:'Wilaya',
            type:'select',
            value:"Wilaya",
            options:["","Adrar","Chlef","Laghouat","Oum El Bouaghi","Batna","Béjaïa"
                    ,"Biskra","Béchar","Blida","Bouïra","Tamanrasset","Tébessa","Tlemcen","Tiaret","Tizi Ouzou"
                    ,"Algiers","Djelfa","Jijel","Sétif","Saïda","Skikda","Sidi Bel Abbès"
                    ,"Annaba","Guelma","Constantine","Médéa","Mostaganem","M'Sila","Mascara"
                    ,"Ouargla","Oran","El Bayadh","Illizi","Bordj Bou Arréridj","Boumerdès","El Tarf"
                    ,"Tindouf","Tissemsilt","El Oued","Khenchela","Souk Ahras",""
                    ,"Tipaza","Mila","Aïn Defla","Naâma","Aïn Témouchent","Ghardaïa"
                    ,"Relizane","El M'Ghair","El Menia","Ouled Djellal","Bordj Baji Mokhtar","Béni Abbès"
                    ,"Timimoun","Touggourt","Djanet","Ain Salah","Ain Guezzam"]

        },
        {
            label:'Téléphone',
            type:'text',
            value:"Téléphone"
        },
        {
            label:'Email',
            type:'email',
            value:"Email"
        },
        
        {
            label:"Date d'obtention du permis",
            type:'date',
            value:"Date d'obtention du permis"
        },
      
    ]

    
},
{
    Sections:2,
    items :[
        {
            label:'Puissance du vehicule',
            type:'select',
            value:"1",
            options:['1','2','3','4','5','6','7','8','9','10','11','12','13','14','16','17','18','19','20','21']
        },
        {
            label:'Valeur du Véhicule',
            type:'text',
            value:'Valeur du Véhicule'
        },
       
    ]

    
},
{ Sections:3,
    items:[
        {
            label:'Durée (mois)',
            type:'select',
            value:"Durée",
            options:['3','6','12']
        },
        {
            label:'Formule',
            type:'select',
            value:"Formule",
            options:['Dommage Collision','Tous Risques','Par Pallier']
        },
        {
            label:"si vous êtes prêt cliquer sur  `Valider`",
            type:'information'
        }
    ]

},

]