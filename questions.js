// 30 monivalintakysymystä, jokaisella 4 vaihtoehtoa (A, B, C, D)
// 'correct' kertoo oikean vastauksen kirjaimen

const questions = [
  {
    text: "Mikä oli 1800-luvun lopun siirtomaiden valloitusinnosta käytetty nimitys?",
    options: ["Imperialismi", "Industriaalikausi", "Monarkismi", "Federalismi"],
    correct: "A"
  },
  {
    text: "Mikä oli eurooppalaisten tärkein syy hankkia siirtomaita?",
    options: [
      "Raaka-aineiden ja uusien markkinoiden saaminen",
      "Afrikan sademetsien suojeleminen",
      "Urheilukilpailujen järjestäminen paikallisille",
      "Lomakohteiden perustaminen eurooppalaisille"
    ],
    correct: "A"
  },
  {
    text: "Kuka tunnettu tutkimusmatkailija auttoi Afrikan sisäosien kartoittamisessa 1800-luvulla?",
    options: ["David Livingstone", "James Cook", "Marco Polo", "Vasco da Gama"],
    correct: "A"
  },
  {
    text: "Kuka eteläafrikkalainen liikemies korosti ”valkoisen miehen taakkaa” ja unelmoi reitistä Kapkaupungista Kairoon?",
    options: ["Cecil Rhodes", "Napoleon Bonaparte", "Mahatma Gandhi", "Thomas Edison"],
    correct: "A"
  },
  {
    text: "Mitä tarkoitettiin ”valkoisen miehen taakalla”?",
    options: [
      "Eurooppalaisten uskosta, että heidän velvollisuutensa oli opettaa afrikkalaisille länsimaisia tapoja",
      "Eteläisten valtioiden vastustamista Pohjois-Euroopassa",
      "Pakollista asepalvelusta kaikille yli 18-vuotiaille",
      "Eurooppalaisten aatelisten harrastamaa kulttuurivaihtoa"
    ],
    correct: "A"
  },
  {
    text: "Miksi orjakauppa alkoi vähentyä 1800-luvun alussa?",
    options: [
      "Monet valtiot kielsivät orjakaupan lailla",
      "Orjista tuli yhtäkkiä liian kalliita",
      "Kaikki orjat vapautettiin yhden päivän aikana",
      "Eurooppalaiset eivät enää keksineet, mihin orjia tarvittiin"
    ],
    correct: "A"
  },
  {
    text: "Miksi Afrikan siirtomaiden rajat aiheuttivat myöhemmin ongelmia?",
    options: [
      "Raja-alueet sijoitettiin vuoristoon, jossa kukaan ei voinut asua",
      "Rajaviivat eivät ottaneet huomioon paikallisia kieli- ja kansaryhmiä",
      "Rajat kulkivat tarkalleen jokien mukaisesti, joten niitä ei voinut ylittää",
      "Rajat merkittiin vain karttoihin, joten niitä ei todellisuudessa ollut"
    ],
    correct: "B"
  },
  {
    text: "Minkä valtakunnan Euroopan vallat kohtasivat ”idässä” laajentaessaan vaikutusvaltaansa?",
    options: [
      "Kiinan keisarikunnan",
      "Ottomaanien valtakunnan",
      "Inkojen valtakunnan",
      "Japanin shogunaatin"
    ],
    correct: "B"
  },
  {
    text: "Miksi Istanbul (Konstantinopoli) oli tärkeä kaupunki?",
    options: [
      "Se oli Euroopan vanhimman yliopiston kotipaikka",
      "Se sijaitsi keskellä arktista aluetta",
      "Siellä viljeltiin eniten puuvillaa koko maailmassa",
      "Se oli portti Aasiaan ja Afrikkaan"
    ],
    correct: "D"
  },
  {
    text: "Mikä vuonna 1869 valmistunut kulkureitti lyhensi merimatkaa Euroopasta Aasiaan?",
    options: [
      "Panaman kanava",
      "Suuri valliriutta",
      "Suezin kanava",
      "Bosporinsalmi"
    ],
    correct: "C"
  },
  {
    text: "Minkä tuotteen eurooppalaiset onnistuivat myymään Kiinaan, mikä aiheutti suuria ongelmia?",
    options: [
      "Sokerin",
      "Puuvillan",
      "Oopiumin",
      "Kulta-astioiden"
    ],
    correct: "C"
  },
  {
    text: "Miksi oopiumista tuli ongelma Kiinalle?",
    options: [
      "Sen käytön leviäminen aiheutti riippuvuutta ja yhteiskunnallisia ongelmia",
      "Se teki kiinalaisista vastustuskykyisiä kauppaa kohtaan",
      "Se lopetti kaiken kaupankäynnin Euroopan ja Kiinan välillä",
      "Sitä ei saatu myytyä muualle kuin yhden kaupungin satamaan"
    ],
    correct: "A"
  },
  {
    text: "Mikä sota puhkesi vuonna 1839 Kiinan ja Britannian välillä?",
    options: [
      "Mansikkasota",
      "Krimin sota",
      "Oopiumsota",
      "Ensimmäinen maailmansota"
    ],
    correct: "C"
  },
  {
    text: "Minkä alueen Kiina joutui luovuttamaan Britannialle oopiumsodan jälkeen?",
    options: [
      "Macaon",
      "Hongkongin",
      "Singaporen",
      "Malesian"
    ],
    correct: "B"
  },
  {
    text: "Mikä oli boksarikapinan (1899–1901) tavoite Kiinassa?",
    options: [
      "Ulkomaalaisten karkottaminen ja länsimaisten vaikutteiden tuhoaminen",
      "Liittoutuminen Euroopan kanssa oopiumikaupan laajentamiseksi",
      "Kiinan muuttaminen tasavallaksi",
      "Yhteistyön solmiminen Japanin kanssa"
    ],
    correct: "A"
  },
  {
    text: "Mikä hallitsijasuku heikkeni Kiinassa länsimaiden paineen takia 1800-luvulla?",
    options: [
      "Ming-dynastia",
      "Song-dynastia",
      "Tang-dynastia",
      "Qing-dynastia"
    ],
    correct: "D"
  },
  {
    text: "Kuka oli Japanin todellinen hallitsija ennen keisarin vallan palauttamista?",
    options: [
      "Samurait",
      "Daimiot",
      "Shogun",
      "Kenraali MacArthur"
    ],
    correct: "C"
  },
  {
    text: "Minkä maan laivasto saapui vuonna 1853 Japanin rannikolle vaatien satamien avaamista?",
    options: [
      "Ranskan",
      "Iso-Britannian",
      "Yhdysvaltojen",
      "Saksan"
    ],
    correct: "C"
  },
  {
    text: "Miksi shogunin valta romahti Japanissa 1800-luvun puolivälin jälkeen?",
    options: [
      "Japanilaiset ymmärsivät modernisaation tarpeen ja halusivat uudistaa maata",
      "Shogun päätti luopua vallasta vapaaehtoisesti",
      "Kiina hyökkäsi Japaniin",
      "Samurait valitsivat itselleen uuden shogunin"
    ],
    correct: "A"
  },
  {
    text: "Kenelle valta palautettiin Japanissa shogunin kukistuttua?",
    options: [
      "Sotilaskomentajille",
      "Parlamentille",
      "Kuningattarelle",
      "Keisarille"
    ],
    correct: "D"
  },
  {
    text: "Minkä mallin mukaan Japanin hallinto, armeija ja koulutus uudistettiin?",
    options: [
      "Muinaisen Kiinan",
      "Oman perinteensä",
      "Länsimaiden",
      "Afrikan siirtomaiden"
    ],
    correct: "C"
  },
  {
    text: "Miksi Japanista tuli nopeasti merkittävä teollisuusmaa?",
    options: [
      "Sillä oli eniten kultakaivoksia",
      "Se otti länsimaista teollisuusteknologiaa käyttöön ja kehitti omaa tuotantoaan",
      "Koko kansa muutti Yhdysvaltoihin",
      "Japani peri valtavan määrän varoja Ranskalta"
    ],
    correct: "B"
  },
  {
    text: "Miksi Japani alkoi laajentaa alueitaan 1900-luvun alussa?",
    options: [
      "Se halusi tehdä kaikista maista keisarikuntia",
      "Japani kärsi raaka-aineiden puutteesta",
      "Japani pelkäsi eurooppalaisten hyökkäyksiä",
      "Eurooppa pakotti Japanin valloittamaan muita alueita"
    ],
    correct: "B"
  },
  {
    text: "Minkä maan Japani voitti sodassa vuonna 1905?",
    options: [
      "Kiinan",
      "Ranskan",
      "Venäjän",
      "Espanjan"
    ],
    correct: "C"
  },
  {
    text: "Mikä kuuluisa junareitti lisäsi eurooppalaisten kiinnostusta Istanbuliin ja itämaihin?",
    options: [
      "Trans-Siperian rata",
      "Orient-Express",
      "Valtteri-Express",
      "Pacific-Express"
    ],
    correct: "B"
  },
  {
    text: "Mihin muinaiseen imperiumiin britit vertasivat laajaa siirtomaavaltaansa?",
    options: [
      "Egyptin valtakuntaan",
      "Assyriaan",
      "Rooman valtakuntaan",
      "Aleksanteri Suuren imperiumiin"
    ],
    correct: "C"
  },
  {
    text: "Mitä sana ”imperiumi” tarkoittaa?",
    options: [
      "Pientä omakotitaloa",
      "Laajaa valtakuntaa, joka hallitsee useita alueita",
      "Kaupallista sopimusta kahden maan välillä",
      "Yhden kaupungin kaupungintaloa"
    ],
    correct: "B"
  },
  {
    text: "Miksi eurooppalaiset pitivät 1800-luvulla omaa elämäntapaansa afrikkalaista ylempiarvoisena?",
    options: [
      "Koska eurooppalaiset viettivät enemmän aikaa aavikolla",
      "Koska eurooppalainen teollistunut yhteiskunta nähtiin edistyksellisempänä",
      "Koska afrikkalaisten kieliä ei voitu ymmärtää",
      "Koska eurooppalaiset eivät koskaan tienneet Afrikasta mitään"
    ],
    correct: "B"
  },
  {
    text: "Mitä eurooppalaiset toivat Afrikkaan, vaikka se palveli lähinnä siirtomaahallinnon tarpeita?",
    options: [
      "Eri satoja kylveleviä maatalousrobotteja",
      "Kouluja ja terveydenhuoltoa",
      "Ydinvoimaloita",
      "Suuria huvipuistoja"
    ],
    correct: "B"
  },
  {
    text: "Mitä tarkoittaa siirtomaa?",
    options: [
      "Alue, joka on vieraan valtion hallinnassa",
      "Paikka, jossa vain kasvit siirtyvät",
      "Kauppahalli, jossa myydään hedelmiä",
      "Ainoastaan vapaaehtoisesti liitetty alue"
    ],
    correct: "A"
  }
];
