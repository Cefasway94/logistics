export const projectMixin = {

    data () {

        return {

            hashmap:'',

            available_countries:[],
        }
    },

    created(){

        this.initializeHashMap();

        this.getCountries();
        
    },

    methods:{

        initializeHashMap(){

            this.hashmap = new Map([
                ['Tanzania, United Republic of',['Arusha','Dar es Salaam','Dodoma','Geita','Iringa','Kagera','Kaskazini Pemba','Kaskazini Unguja','Katavi','Kigoma','Kilimanjaro','Kusini Pemba','Kusini Unguja','Lindi','Manyara','Mara','Mbeya','Mjini Magharibi','Morogoro','Mtwara','Mwanza','Njombe','Pwani','Rukwa','Ruvuma','Shinyanga','Simiyu','Singida','Tabora','Tanga']],

                ['Kenya',['Baringo','Bomet','Bungoma','Busia','Elgeyo/Marakwet','Embu','Garissa','Homa bay','Isiolo','Kajiado','Kakamega','Kericho','Kiambu','Kilifi','Kirinyaga','Kisii','Kisumu','Kitui','Kwale','Laikipia','Lamu','Machakos','Makueni','Mandera','Marsabit','Meru','Migori','Mombasa',"Murang'a",'Nairobi City','Nakuru','Nandi','Narok','Nyamira','Nyandarua','Nyeri','Samburu','Siaya','Taita/Taveta','Tana River','Tharaka-Nithi','Trans Nzoia','Turukana','Uasingishu','Vihiga','Wajir','West Pokot']],

                ['Uganda',
                    [ 
                    "Abim",	
                    
                    "Adjumani",
                    
                    "Agago",
                    
                    "Alebtong",
                    
                    "Amolatar",
                    
                    "Amudat",
                    
                    "Amuria",
                    
                    "Amuru",
                    
                    "Apac",
                    
                    "Arua",
                    
                    "Budaka",
                    
                    "Bududa",
                    
                    "Bugiri",
                    
                    "Buhweju",
                    
                    "Buikwe",
                    
                    "Bukedea",
                    
                    "Bukomansibi",
                    
                    "Bukwa",
                    
                    "Bulambuli",
                    
                    "Buliisa",
                    
                    "Bundibugyo",
                    
                    "Bushenyi",
                    
                    "Busia",
                    
                    "Butalaje",
                    
                    "Buvuma",
                    
                    "Buyende",
                    
                    "Dokolo",
                    
                    "Gomba",
                    
                    "Gulu",
                    
                    "Hoima",
                    
                    "Ibanda",
                    
                    "Iganga",
                    
                    "Isingiro",
                    
                    "Jinja",
                    
                    "Kaabong",
                    
                    "Kabale",
                    
                    "Kabarole",
                    
                    "Kaberamaido",
                    
                    "Kalangala",
                    
                    "Kaliro",
                    
                    "Kalungu",
                    
                    "Kampala",
                    
                    "Kamuli",
                    
                    "Kamwenge",
                    
                    "Kanungu",
                    
                    "Kapchorwa",
                    
                    "Kasese",
                    
                    "Katakwi",
                    
                    "Kayunga",
                    
                    "Kibaale",
                    
                    "Kiboga",
                    
                    "Kibuku",
                    
                    "Kiruhura",
                    
                    "Kiryandongo",
                    
                    "Kisoro",
                    
                    "Kitgumu",
                    
                    "Koboko",
                    
                    "Kole",
                    
                    "Kotido",
                    
                    "Kumi",
                    
                    "Kween",
                    
                    "Kyankwanzi",
                    
                    "Kyegegwa",
                    
                    "Kyenjojo",
                    
                    "Lamwo",
                    
                    "Lira",
                    
                    "Luuka",
                    
                    "Luwero",
                    
                    "Lwengo",
                    
                    "Lyantonde",
                    
                    "Manafwa",
                    
                    "Maracha",
                    
                    "Masaka",
                    
                    "Masindi",
                    
                    "Mayuge",
                    
                    "Mbale",
                    
                    "Mbarara",
                    
                    "Mitooma",
                    
                    "Mityana",
                    
                    "Moroto",
                    
                    "Moyo",
                    
                    "Mpigi",
                    
                    "Mbende",
                    
                    "Mukono",
                    
                    "Nakapiripirit",
                    
                    "Nakaseke",
                    
                    "Nakasongola",
                    
                    "Namayingo",
                    
                    "Namutunga",
                    
                    "Napak",
                    
                    "Nebbi",
                    
                    "Ngora",
                    
                    "Ntoroka",
                    
                    "Ntungamo",
                    
                    "Nwoya",
                    
                    "Otuke",
                    
                    "Oyam",
                    
                    "Pader",
                    
                    "Pallisa",
                    
                    "Rakai",
                    
                    "Rubirizi",
                    
                    "Rukingiri",
                    
                    "Sembabule",
                    
                    "Serere",
                    
                    "Sheema",
                    
                    "Sironko",
                    
                    "Soroti",
                    
                    "Tororo",
                    
                    "Wakiso",
                    
                    "Yumbe",
                    
                    "Zombo"
                    ]
                ],

                ['Rwanda',['Est','Nord','Ouest','Sud','Ville de Kigali']],

                ['Burundi',['Bubanza','Bunjumbura Mairie','Bururi','Cankuzo','Cibitoke','Gitega','Karuzi','Kayanza','Kirundo','Makamba','Muramvya','Muyinga','Mwaro','Ngozi','Rutana','Ruyigi']],

                ['Congo (the Democratic Republic of the)',['Bas-Uele','Equateur','Haut-Katanga','Haut-Lomami','Haut-Uele','Ituri','Kasai','Kasai Central','Kasai Oriental','Kinsasha','Kongo Central','Kwango','Kwilu','Lomami','Lualaba','Mai-Ndombe','Maniema','Mongala','Nord-Kivu','Nord-Ubangi','Sankuru','Sud-Kivu','Tanganyika','Tshopo','Tshuapa']],

                ['Zambia',['Central','Copperbelt','Eastern','Luapula','Lusaka','North-Western','Northern','Southern','Western']],

                ['Malawi',['Balaka','Blantyre','Chikwawa','Chiradzulu','Chitipa','Dedza','Dowa','Karonga','Kasungu','Likoma','Lilongwe','Machinga','Mangochi','Mchinji','Mulanje','Mwanza','Mzimba','Neno','Nkhata Bay','Nkhotakota','Nsanje','Ntcheu','Ntchisi','Phalombe','Rumphi','Salima','Thyolo','Zomba']],

                ['Mozambique',['Cabo Delgado','Gaza','Inhambane','Manica','Maputo','Nampula','Niassa','Sofala','Tete','Zambezia']],

            ]);


        },

        getCountries(){

            this.available_countries = Array.from(this.hashmap.keys());
        
        },

        getRegions(country){

            return Array.from(this.hashmap.get(country));
        },
    },


}