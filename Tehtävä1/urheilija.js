"use strict"; 

//henkilo-luokka, joka sisältää konstruktorin muutamalle henkilön attribuutille
class Person {
    constructor(EtuNimi,SukuNimi,Lempinimi,s_vuosi) {
        this._EtuNimi = EtuNimi;
        this._SukuNimi = SukuNimi;
        this._Lempinimi = Lempinimi;
        this._s_vuosi = s_vuosi;
        console.log("Uusi henkilo luotu!", this);
    }

//Getterit ja setterit henkilolle

    //_Etunimet
    get firstNames() {
        return this._EtuNimi;
    }
    set firstNames(value) {
        this._EtuNimi = value;
    }

    //_Sukunimet
    get lastName() {
        return this._SukuNimi;
    }
    set lastName(value) {
        this._SukuNimi = value;
    }

    //_Lempinimet
    get nickName() {
        return this._Lempinimi;
    }
    set nickName(value) {
        this._Lempinimi = value;
    }

    //_syntymavuosi
    get yearOfBirth() {
        return this._s_vuosi;
    }
    set yearOfBirth(value) {
        this._s_vuosi = value;
    }

}
// käytetään date tyypin oliota määrittelemään aika
var date = new Date('1998-12-12');  
// luodaan henkilö-olio
var person = new Person("Mikki", "Hiiri", "hiirulainen",date);



//Urheilija-luokka, joka perii henkilon ominaisuuksia ja lisaa muutaman oman
class Urheilija extends Person{
    
    constructor(EtuNimi,SukuNimi,Lempinimi,s_vuosi,linkki, paino, laji, saavutukset){
    super(EtuNimi,SukuNimi,Lempinimi,s_vuosi);
        this._linkki = linkki;
        this._paino = paino;
        this._laji = laji;
        this._saavutukset = saavutukset;
        console.log("Uusi Urheilija luotu!", this);
        
    }
    
    //Getterit ja setterit urheilija-luokan uusille ominaisuuksille

    //Linkit
    get Linkit() {
        return this._linkki;
    }
    set Linkit(value) {
        this._linkki = value;
    }

    //_Paino
    get Painot() {
        return this._paino;
    }
    set Painot(value) {
        this._paino = value;
    }

    //_Laji
    get Laji() {
        return this._laji;
    }
    set Laji(value) {
        this._laji = value;
    }

    //_Saavutukset
    get Saavutukset() {
        return this._saavutukset;
    }
    set Saavutukset(value) {
        this._saavutukset = value;
    }
    
    
}
//Luodaan urheilija-olio
var urheilija1 = new Urheilija("Mikki", "Hiiri", "hiirulainen", date, "www.kuva.fi", "85kg", "jalkapallo", "ei ole");



