import { Component, OnInit } from "@angular/core";
import { ChildActivationStart } from "@angular/router";

@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.css"]
})
export class CustomerComponent implements OnInit {
  districts;
  mandals;
  villages;

  andhraDistricts = [
    "Anantapur",
    "Chitoor",
    "East Godavari",
    "Guntur",
    "Krishna",
    "Kurnool",
    "Prakasam",
    "Srikakulam",
    "SriPotti Sri Ramulu Nellore",
    "Vishakhapatnam",
    "Vizianagaram",
    "West Godavari",
    "Cudappah"
  ];

  mandalsUnderAnantapurDistrict = [
    "D Hirchal",
    "Bommanahal",
    "Vidapanakal",
    "Vajrakarur",
    "Guntakal",
    "Gooty",
    "Peddavadugur",
    "Yadiki",
    "Tadpatri",
    "Peddapappur",
    "Singanamala",
    "Pamidi",
    "Garladinne",
    "Kudair",
    "Uravakonda",
    "Beluguppa",
    "Kanekal",
    "Rayadurg",
    "Gummagatta",
    "Brahmasamudram",
    "Settur",
    "Kunurpi",
    "Kalyandrug",
    "Atmakur",
    "Anantapur",
    "Bukkarayasamudram",
    "Narpala",
    "Putlur",
    "Yellanur",
    "Tadimarri",
    "Bathalapalle",
    "Raptadu",
    "Kanaganapalle",
    "Kambadur",
    "Ramagiri",
    "Chenne Kothapalle",
    "Dharmavaram",
    "Mudigubba",
    "Talupula",
    "Nambulipulikunta",
    "Tanakal",
    "Nallacheruvu",
    "Gandlapenta",
    "Kadiri",
    "Amadagur",
    "Obuladevaracheruvu",
    "Nallamada",
    "Gorantla",
    "Puttaparthi",
    "Bukkapatnam",
    "Kothacheruvu",
    "Penu Konda",
    "Roddam",
    "Somandepalle",
    "Chilamathur",
    "Lepakshi",
    "Hindupur",
    "Parigi",
    "Madakasira",
    "Gudibanda",
    "Amarapuram",
    "Agali",
    "Rolla"
  ];
  mandalsUnderKrishnaDistrict = [
    "Jaggayyapeta",
    "Vatsavai",
    "Penuganchiprolu",
    "Nandigama",
    "Chandarlapadu",
    "Kanchika Cherla",
    "Veerulapadu",
    "Ibrahimpatnam",
    "G Konduru",
    "Mylaram",
    "A Konduru",
    "Gampalagudem",
    "Tiruvuru",
    "Vissannapet",
    "Reddigudem",
    "Vijayawada Rural",
    "Vijayawada Urban",
    "Penamaluru",
    "Thotlavalluru",
    "Kannipadu",
    "Gannavaram",
    "Agiripalle",
    "Nuzvid",
    "Chatrai",
    "Musunuru",
    "Bapulapad",
    "Unguturu",
    "Vuyyuru",
    "Pamidimukkala",
    "Movva",
    "Ghantasala",
    "Challapalle",
    "Mopidevi",
    "Avanigada",
    "Nagayalanka",
    "Koduru",
    "Machilipatnam",
    "Gudur",
    "Pamarru",
    "Pedaparupudi",
    "Nandivada",
    "Gudivada",
    "Gudlavalleru",
    "Pedana",
    "Bantumilli",
    "Mudinapalle",
    "Mandavalli",
    "Kaikalur",
    "Kalidindi",
    "Kruthivennu"
  ];

  mandalsUnderPrakasamDistrict = [
    "Addanki",
    "Ardhaveedu",
    "Ballikurava",
    "Bestawaripeta",
    "Chandra Sekhara Puram",
    "Chimakurthi",
    "Chinaganjam",
    "Chirala",
    "Cumbum",
    "Darsi",
    "Donakonda",
    "Dornala",
    "Giddalur",
    "Gudluru",
    "Hanumanthuni Padu",
    "Inkollu",
    "Janakavarampanguluru",
    "Kandukur",
    "Kanigiri",
    "Karamchedu",
    "Komarolu",
    "Konakanamitla",
    "Kondepi",
    "Korisapadu",
    "Kotha Patnam",
    "Kurichedu",
    "Lingasamudram",
    "Maddipadu",
    "Markapur",
    "Marripudi",
    "Martur",
    "Mundlamuru",
    "Naguluppala Padu",
    "Ongole",
    "Pamur",
    "Parchur",
    "Peda Araveedu",
    "Pedacherlo Palle",
    "Podili",
    "Ponnaluru",
    "Pullalacheruvu",
    "Racherla",
    "Santhamaguluru",
    "Santhanuthala Padu",
    "Singarayakonda",
    "Tangutur",
    "Tarlupadu",
    "Thallur",
    "Tripuranthakam",
    "Ulavapadu",
    "Veligandla",
    "Vetapalem",
    "Voletivaripalem",
    "Yeddana Pudi",
    "Yerragondapalem",
    "Zarugumilli"
  ];

  villagesUnderAddanki = [
    "Addanki (North) (U)",
    "Addanki (South) (U)",
    "Bommanampadu",
    "Chakraya Palem",
    "Chinakotha Palle",
    "Dharmavaram",
    " Dhenuva Konda",
    "Gopalapuram",
    "Kalavakuru",
    "Kotikalapudi",
    "Kunkupadu",
    "Mani Keswaram",
    "Modepalle",
    "Mylavaram",
    "Nannurupadu",
    "Narasimha Puram",
    "Ramayapalem (U)",
    "Uppalapadu",
    "Vemparala"
  ];
  villagesUnderArdhaveedu = [
    "Ardhaveedu",
    "Ayyavari Palle",
    "Bogolu",
    "Bollu palle",
    "Donakonda",
    "Gannepalle",
    "Kakarla",
    "Magutur",
    "Papineni Palle",
    "Peda Kandukur",
    "Potti Basavai Palle",
    "Velagalapaya",
    "Yerraguntla"
  ];

  villagesUnderBallikurava = [
    "Ballikurava",
    "Chennupalle",
    "Gorre Padu",
    "Guntupalle",
    "Konidena",
    "Koppera Padu",
    "Koppera Palem",
    "Kukatla Palle",
    "Mukteswaram",
    "Sankaralingam Gudipadu",
    "Uppumaguluru",
    "Vaidana",
    "Valla Palle",
    "Vemavaram"
  ];

  villagesUnderBestawaripeta = [
    "Basine Palle",
    "Bestawaripeta",
    "China Obeneni Palle",
    "Chinthala Palem",
    "Dathara Krishnapuram",
    "Galijerugulla",
    "Jaggambotla Krishnapuram",
    "Kona Palle",
    "Madhana Pullala Cheruvu",
    "Moksha Gundum",
    "Nekunambad",
    "Ondutla",
    "Pachala Venkata Puram",
    "Papayapalle",
    "	Peda Obeneni Palle",
    "	Pitikayagulla",
    "Pothavaram",
    "Pusalapadu",
    "	Retla Palle",
    "Salakalaveedu",
    "Somavarapeta"
  ];

  villagesUnderChandraSekharaPuram = [
    "Ambavaram",
    "Anikalla Palle",
    "Arivemula",
    "Bodavula Dinne",
    "Bontha Vari Palle",
    "Boyamadugula",
    "Chandra Sekhara Puram",
    "Chennapanayuni Palle",
    "Chintala Palem",
    "Chinthapudi",
    "Darsi Thimmakka Palle",
    "Darsigunta Peta",
    "Devaki Marri",
    "Guntachennam Palle",
    "Kambham Padu",
    "Komatigunta",
    "Kondabaina Palle",
    "Kotha Palle",
    "Kovilam Padu",
    "Malameedi Palle",
    "Medanulu Vengana Palle",
    "Mundlapadu",
    "Musunoor",
    "Nagulavaram",
    "Nalajanam Padu",
    "Nallamadugula",
    "Pedagogulapalle",
    "Pedaraju Palem",
    "Ranganayuni Palle",
    "Regula Chilaka",
    "Talaneelamala",
    "Thummagunta",
    "Thungodu",
    "Uppalapadu",
    "Vatla Bayulu",
    "Venkataya Cheruvu",
    "Viranchi Puram",
    "Yekunam Puram"
  ];

  villagesUnderChimakurthi = [
    "Bandlamudi",
    "Bhusura Palle",
    "Budavada",
    "Chandrapadu",
    "Chimakurthi",
    "China Ravipadu",
    "Devarapalem",
    "Gonugunta",
    "Gunduvari Laxmipuram",
    "Ilapavuluru",
    "Kandurivari Agraharam",
    "Manchikalapadu",
    "Mylavaram",
    "Nekunambadu",
    "Nippatlapadu",
    "Padamatinaidupalem",
    "Palla Malli",
    "Pidathalapudi",
    "Pulikonda",
    "Rajupalem - Laxmipuram",
    "Ramachandra Puram",
    "Rangasai Puram",
    "Torragudi Padu",
    "Yerragudipadu"
  ];

  villagesUnderChinaganjam = [
    "Chinaganjam",
    "Chinthagum Palle",
    "Gonasapudi",
    "Kadavakuduru",
    "Motu Palle",
    "Pedaganjam",
    "Santharavuru"
  ];
  villagesUnderChirala = ["Chirala", "Gavinivari Palem", "Ipuru Palem", "Wada"];

  villagesUnderCumbum = [
    "Anantha Palle",
    "Auranga Bad",
    "China Cumbum",
    "Cumbum (CT)",
    "Hazarat Gudem",
    "Jangamguntla",
    "Kagitalagudem",
    "Kandula Puram",
    "Lanja Kota",
    "Linga Puram",
    "Lingapuram Khandrika",
    "Nadim Palle",
    "Porumamilla Palle",
    "Ravipadu",
    "Thurimella",
    "Yerrabalem"
  ];

  villagesUnderDarsi = [
    "Abbaya Palem",
    "Akkamamba Puram",
    "Anna Varam",
    "Bala Puram",
    "Bandellapaya",
    "Bandiveligandla",
    "Bukka Puram",
    "Chalivendra",
    "Chandaluru",
    "Cheruvu Komma Palem",
    "China Uyyalawada",
    "Darsi",
    "Devavaram",
    "East Choutapalem",
    "East Veeraya Palem",
    "East Venkata Puram",
    "Ganeswara Puram",
    "Jammigumpala @ K.S.Palem",
    "Jamukuladinne",
    "Korlamadugu",
    "Kothapalle",
    "Krishna Puram",
    "Lakshmi Narayana Puram",
    "Lankojana Palle",
    "Mohiddin Puram",
    "Pedauyyalawada",
    "Potha Kamuru",
    "Potha Varam",
    "Rajam Palle",
    "Ramachandra Puram",
    "Samanthapudi",
    "Seetha Sagaram",
    "Thanam Chinthala",
    "Thimmaya Palem",
    "Thripura Sundari Puram",
    "Thummedalapadu",
    "Venkatachalam Palle",
    "Yerrobana Palle"
  ];

  villagesUnderDonakonda = [
    "Ananthavaram",
    "Aravallipadu",
    "Bada Puram",
    "Battepadu",
    "Bhumanapalle",
    "Chandavaram",
    "Gudipadu",
    "Indla Cheruvu",
    "Kalavala Palle",
    "Kotcherla Kota",
    "Lakshmi Narayana Puram",
    "Mallam Peta",
    "Manginapudi",
    "Narasimhanayuni Palem",
    "Padamara Lakshmipuram",
    "Padamati Venkata Puram",
    "Peddanna Palem",
    "Pochamakka Palle",
    "Pole Palle",
    "Ragamakka Palle",
    "Ramapuram",
    "Rudra Samudram",
    "Sangapuram",
    "Siddayapalem",
    "Tella Padu",
    "Vabbapuram",
    "Vaddipadu",
    "Veera Venkata Puram",
    "West Kambhampadu",
    "Yerrabalem"
  ];

  villagesUnderDornala = [
    "Ayinamukkala",
    "Chilaka Cherla Gudem",
    "China Arutla",
    "China Dornala",
    "China Manthanala",
    "Chinthala",
    "Dornala",
    "Kata Kani Palle",
    "Marripalem",
    "Nalla Guntla Gudem",
    "Nallaguntla",
    "Peda Arutla",
    "Peda Bommala Puram",
    "Pedachama",
    "Pedamanthanala",
    "Rolla Penta",
    "Thummala Bayalu",
    "Yadavalli",
    "Yeguva Cherlo Palle"
  ];

  villagesUnderGiddalur = [
    "Ambavaram",
    "Bogada",
    "Chatti Reddy Palle",
    "Gadikota",
    "Giddaluru (CT)",
    "Isukagundam Gudem",
    "Kanchi Palle",
    "Kommunuru",
    "Kongala Veedu",
    "Kotha Kota",
    "Kristam Setti Palle",
    "Malakondapentagudem",
    "Modam Palle",
    "Mundla Padu",
    "Narasimhuni Palle",
    "Narava",
    "Podili Konda Palle",
    "Sanjeevarao Peta",
    "Thamballa Palle",
    "Thimma Puram",
    "Tripura Puram",
    "Uyyala Wada"
  ];

  villagesUnderGudluru = [
    "Ammavari Palem",
    "Basireddy Palem",
    "Chevuru",
    "Chinala Trapi",
    "Dappalampadu",
    "Darakanipadu",
    "Gudluru",
    "Gundlapalem",
    "Kothapeta",
    "Mocherla",
    "Nayudupalem",
    "Parakonda Paduagraharam",
    "Parakondapadu",
    "Potluru",
    "Puretipalle",
    "Ravur",
    "Swarnajipuram",
    "Venkam Peta"
  ];

  villagesUnderHanumanthuniPadu = [
    "Annada Puram",
    "Chinagolla Palle",
    "Dasalla Palle",
    "Doddi Chintala",
    "Hanumantha Puram",
    "Hanumanthunipadu",
    "Hazee Puram",
    "Kondareddi Palle",
    "Kotathippala",
    "Kutagundla",
    "Masaya Peta",
    "Mohammada Puram",
    "Muppala Padu",
    "Nallagandla",
    "Nandanavanam",
    "Neelakanta Puram",
    "Pedagola Palle",
    "Peddivenkataya Palle",
    "Ramaya Palle",
    "Raseedu Puram",
    "Thimmareddi Palle",
    "Ummana Palle",
    "Upendra Puram",
    "Valicherla",
    "Veeragareddi Palle",
    "Veerarama Puram",
    "Vemula Padu"
  ];

  villagesUnderInkollu = [
    "Bhimavaram",
    "Duddukur",
    "Ganga Varam",
    "Idupulapadu",
    "Inkollu",
    "Koniki",
    "Nagandla",
    "Pavulur",
    "Pusapadu"
  ];

  villagesUnderJanakavarampanguluru = [
    "Alavalapadu",
    "Budavada",
    "Bytamanjulur",
    "Chandalur",
    "Janakavaram Panguluru",
    "Kasyapuram",
    "Konda Manjulur",
    "Kondamur",
    "Kotapadu",
    "Muppavaram",
    "Nuzendla Palle",
    "Ramakuru",
    "Reningavaram",
    "Thurpu Koppera Padu",
    "Thurpu Thakkella Padu"
  ];
  villagesUnderKandukur = [
    "Anandapuram",
    "Anantha Sagaram",
    "Donda Padu",
    "G.Meka Padu",
    "Jillelamudi",
    "Kancharagunta",
    "Kandukur (M)",
    "Kondamudusu Palem",
    "Kondikandukur",
    "Kovur",
    "Machavaram",
    "Madanagopalapuram",
    "Mahadevapuram (R)",
    "Mopadu",
    "Muppalakesaramvarikandrika",
    "Ogur",
    "Palukur",
    "Palur",
    "Pandalapadu",
    "Vikkiralapeta"
  ];
  villagesUnderKaramchedu = [
    "Audi Pudi",
    "Daggubadu",
    "Karamchedu",
    "Kesavarappadu",
    "Kodavalivari Palem",
    "Kunkalamarru",
    "Swarna"
  ];

  villagesUnderKanigiri = [
    "Ayyanapalem",
    "Baduguleru",
    "Balavenkata Puram",
    "Balli Palle",
    "Bommireddi Palle",
    "Chakirala",
    "Challagirigala",
    "Chennakesavapuram",
    "China Irlapadu",
    "Chinaalavala Padu",
    "Chirla Dinne",
    "Dirisavancha",
    "Ganuga Penta",
    "Gosulaveedu",
    "Gudipadu",
    "Guravajipeta",
    "Hazis Puram",
    "Jammalamadaka",
    "Kalagatla",
    "Kanchipuram",
    "Kanigiri (U) (CT)",
    "Kodigudla Padu (West)",
    "Krishna Puram",
    "Lingojipuram",
    "Nimma Maheswarapuram",
    "Peramgudi Palle",
    "Polavaram",
    "Punugodu",
    "Punugodu Khandrika",
    "Rachagundlapadu",
    "Sankavaram",
    "Somanapalle",
    "Takkellapadu",
    "Tallur",
    "Thummagunta",
    "Umamaheswarapuram",
    "Vangapadu",
    "Vijaya Gopala Puram",
    "Viswanadha Puram",
    "Yadavalli"
  ];

  villagesUnderKomarolu = [
    "Allinagaram",
    "Badineni Palle",
    "Bedusu Palle",
    "Brahmana Palle",
    "Chinthala Palle",
    "Daddawada",
    "Edamakallu",
    "Guduru Moravai Palle",
    "Komarolu",
    "Kristam Palle",
    "Lingareddi Palle",
    "Mottu Palle",
    "Nagireddipalle",
    "Nallaguntla",
    "Pullareddi Palle",
    "Rajupalem",
    "Ramavari Palle",
    "Reddicherla",
    "Suravari Palle",
    "Taticherla",
    "Vennam Palle"
  ];

  villagesUnderKonakanamitla = [
    "Ambapuram",
    "Aswarayuni Palem",
    "Basava Puram",
    "Batchalakurapadu",
    "Boda Padu",
    "Budamkayala Padu",
    "Burada Palem",
    "Chinamanagundam",
    "Chinarikatla",
    "Chinta Gunta",
    "Ganivani Padu",
    "Garimana Penta",
    "Garladinne",
    "Gotlagattu",
    "Gurrala Madugu",
    "Irasalagundam",
    "Katragunta",
    "Konakanamitla",
    "Marri Palem",
    "Mummayapalem",
    "Munagapadu",
    "Nagampalle",
    "Nagaraju Gunta",
    "Pedarikatla",
    "Regumani Palle",
    "Salanuthala",
    "Siddavaram",
    "Thuvva Padu",
    "Vaddi Madugu",
    "Vagemadugu",
    "Vedurralla Padu",
    "Veerabhadra Puram",
    "Veligandla",
    "Vinjavarthi Padu"
  ];

  villagesUnderKondepi = [
    "Anakarlapudi",
    "C G Anantha Bhotla Vari Khandrika",
    "C G Chamarthivarikhandrika",
    "C G Mamidalavarikhandrika",
    "China Venkana Palem",
    "Chinakandla Gunta",
    "Chodavaram",
    "G Dharbakulavarikhandrika",
    "Gurrappadia",
    "Ilavera",
    "K.Uppalapadu",
    "Kondepi",
    "Kondepi Gadiyaram Vari Khandrika",
    "Mugachintala",
    "Muppavaram",
    "Nennurupadu",
    "Pedakandlagunta",
    "Peridepi",
    "Petluru",
    "Petlurukurugantivarikhandrika",
    "Petlurumocharlavari Khandrika",
    "Vennuru"
  ];

  villagesUnderKorisapadu = [
    "Anamanamur",
    "Bodduvani Palem",
    "Dyvala Ravuru",
    "Korisapadu",
    "Pamidi Padu",
    "Pichikalagudipadu",
    "Prasangula Padu",
    "Rachapudi",
    "Ravinuthala",
    "Somavarappadu"
  ];

  villagesUnderKothaPatnam = [
    "Allur",
    "Alluru Kotha Patnam",
    "Ethamukkala",
    "Madanur",
    "Padarthi",
    "Payakari Khandrika",
    "Raju Palem"
  ];
  villagesUnderKurichedu = [
    "Alavalapadu",
    "Avulamanda",
    "Bayya Varam",
    "Bodanampadu",
    "Dekanakonda",
    "Gangadona Konda",
    "Jagannadhapuram",
    "Kallur",
    "Kurichedu",
    "Mallaya Palem",
    "Mustla Gangavaram",
    "Namassivaya Puram",
    "Peddavaram",
    "Perambotla Palem",
    "Potlapadu",
    "West Gangavaram",
    "West Kasipuram",
    "West Naidupalem",
    "West Veeraya Palem"
  ];

  villagesUnderLingasamudram = [
    "Anneboinapalle",
    "Cheemalapenta",
    "Chinapavani",
    "Gangapalem",
    "Jagamreddi Khandrika",
    "Lingasamudram",
    "Mala Konda Rayunipalem",
    "Mogilicherla",
    "Mukteswaram",
    "Mutyalapadu",
    "Narasimhapuram",
    "Pentrala",
    "Racheruvurajupalem",
    "Rallapadu",
    "Thimmareddy Palem",
    "Thunugunta",
    "Thurpurajupalem",
    "Veera Raghavuni Kota",
    "Vengalapuram",
    "Viswanadhapuram"
  ];

  villagesUnderMaddipadu = [
    "Annangi",
    "Doddavaram",
    "Doddavarappadu",
    "Edugundlapadu",
    "Gadiyapudi",
    "Garlapadu",
    "Gundla Palle",
    "Inamanamellur",
    "Keerthi Padu",
    "Kolachanakota",
    "Lingamgunta",
    "Maddipadu",
    "Mallavaram",
    "Nandipadu",
    "Nelatur",
    "Peda Kotha Palle",
    "Rachavari Palem",
    "Seetharampuram",
    "Vellam Palle",
    "Venkateswarapuram"
  ];

  villagesUnderMarkapur = [
    "Akkacheruvu",
    "Badekhanpeta",
    "Bhupathi Palle",
    "Bondala Padu",
    "Chintakunta",
    "Gajjala Konda",
    "Goguladinne",
    "Gottipadia",
    "Idupur",
    "Jammana Palle",
    "Kolabhimunipadu",
    "Krishnapuram",
    "Malyavanthuni Padu",
    "Markapur",
    "Narasimha Puram",
    "Nikaram Palle",
    "Peda Nagulavaram",
    "Peda Yachavaram",
    "Rayavaram",
    "Sivaram Puram",
    "Thippaya Palem",
    "Vemula Kota",
    "Yella Puram"
  ];

  villagesUnderMundlamuru = [
    "Avisanavaripalem",
    "Basava Puram",
    "Bhatla Palle",
    "Bheemavaram",
    "Brundavanam",
    "Chinnavullagallu",
    "Chintalapudi",
    "Edara",
    "Jammalamadaka",
    "Kellam Palle",
    "Khambham Padu (East)",
    "Kommavaram",
    "Marella",
    "Mundlamuru",
    "Nadimpallivari Khandrika",
    "Nuzella Palle",
    "Pasupugallu",
    "Pedavullagallu",
    "Peddaravipadu",
    "Polavaram",
    "Pulipadu",
    "Purimetla",
    "Sankarapuram",
    "Singana Palem",
    "Thammaluru",
    "Umamaheswarapuram",
    "Vempadu",
    "Vemula",
    "Vemulabanda"
  ];

  villagesUnderMarripudi = [
    "Ankepalle",
    "Ayyaparaju Palem",
    "Chilamkuru",
    "Chimata",
    "Dharamavaram",
    "Ganjipalem",
    "Garla Peta",
    "Gosukonda Agraharam",
    "Gundla Samudram",
    "Juvvi Gunta",
    "Kakarla",
    "Kellam Palle",
    "Kuchipudi",
    "Marripudi",
    "Nirmanapuram",
    "Pannuru",
    "Raju Palem",
    "Ramachandrapuram",
    "Ramayapalem",
    "Sannamur",
    "Thangella",
    "Thippala Devi Palle",
    "Vallaya Palem",
    "Vankamarri Palem",
    "Vema Varam",
    "Venkata Krishna Puram"
  ];

  villagesUnderMartur = [
    "Bobbe Palle",
    "Bolla Palle",
    "Darsiagraharam",
    "Dronadula",
    "Jangamaheswarapuram",
    "Jonna Thali Agraharam",
    "Kolala Pudi",
    "Konanki",
    "Lakkavaram Agraharam",
    "Martur",
    "Nagaraju Palle",
    "Rajupalem",
    "Valaparla"
  ];
  constructor() {}

  ngOnInit() {}

  districtsUnderParticularState(event) {
    console.log(event);
    if (event === "Andhra Pradesh") {
      this.districts = this.andhraDistricts;
    }
  }

  mandalsUnderParticularDistrict(district) {
    console.log(district);
    if (district === "Prakasam") {
      this.mandals = this.mandalsUnderPrakasamDistrict;
    }
    if (district === "Anantapur") {
      this.mandals = this.mandalsUnderAnantapurDistrict;
    }
    if (district === "Krishna") {
      this.mandals = this.mandalsUnderKrishnaDistrict;
    }
  }
  villagesUnderParticularMandal(mandal) {
    if (mandal === "Addanki") {
      this.villages = this.villagesUnderAddanki;
    }
    if (mandal === "Ardhaveedu") {
      this.villages = this.villagesUnderArdhaveedu;
    }
    if (mandal === "Ballikurava") {
      this.villages = this.villagesUnderBallikurava;
    }
    if (mandal === "Bestawaripeta") {
      this.villages = this.villagesUnderBestawaripeta;
    }
    if (mandal === "ChandraSekharaPuram") {
      this.villages = this.villagesUnderChandraSekharaPuram;
    }
    if (mandal === "Chimakurthi") {
      this.villages = this.villagesUnderChimakurthi;
    }
    if (mandal === "Chinaganjam") {
      this.villages = this.villagesUnderChinaganjam;
    }
    if (mandal === "Chirala") {
      this.villages = this.villagesUnderChirala;
    }
    if (mandal === "Cumbum") {
      this.villages = this.villagesUnderCumbum;
    }
    if (mandal === "Darsi") {
      this.villages = this.villagesUnderDarsi;
    }
    if (mandal === "Donakonda") {
      this.villages = this.villagesUnderDonakonda;
    }
    if (mandal === "Dornala") {
      this.villages = this.villagesUnderDornala;
    }
    if (mandal === "Giddalur") {
      this.villages = this.villagesUnderGiddalur;
    }
    if (mandal === "Gudluru") {
      this.villages = this.villagesUnderGudluru;
    }
    if (mandal === "Hanumanthuni Padu") {
      this.villages = this.villagesUnderHanumanthuniPadu;
    }
    if (mandal === "Inkollu") {
      this.villages = this.villagesUnderInkollu;
    }
    if (mandal === "Janakavarampanguluru") {
      this.villages = this.villagesUnderJanakavarampanguluru;
    }
    if (mandal === "Kandukur") {
      this.villages = this.villagesUnderKandukur;
    }
    if (mandal === "Kanigiri") {
      this.villages = this.villagesUnderKanigiri;
    }
    if (mandal === "Karamchedu") {
      this.villages = this.villagesUnderKaramchedu;
    }
    if (mandal === "Komarolu") {
      this.villages = this.villagesUnderKomarolu;
    }
    if (mandal === "Konakanamitla") {
      this.villages = this.villagesUnderKonakanamitla;
    }
    if (mandal === "Kondepi") {
      this.villages = this.villagesUnderKondepi;
    }
    if (mandal === "Korisapadu") {
      this.villages = this.villagesUnderKorisapadu;
    }
    if (mandal === "Kotha Patnam") {
      this.villages = this.villagesUnderKothaPatnam;
    }
    if (mandal === "Kurichedu") {
      this.villages = this.villagesUnderKurichedu;
    }
    if (mandal === "Lingasamudram") {
      this.villages = this.villagesUnderLingasamudram;
    }
    if (mandal === "Maddipadu") {
      this.villages = this.villagesUnderMaddipadu;
    }

    if (mandal === "Markapur") {
      this.villages = this.villagesUnderMarkapur;
    }
    if (mandal === "Marripudi") {
      this.villages = this.villagesUnderMarripudi;
    }
    if (mandal === "Martur") {
      this.villages = this.villagesUnderMartur;
    }

    if (mandal === "Mundlamuru") {
      this.villages = this.villagesUnderMundlamuru;
    }
  }
}
