function oblicz(){
    let jezemes_staw = 0.007;
    let obsz_stawka = 5.6;
    let suma_kredyta = document.getElementById("suma_kredyta").value*1;
    let miesiecy = document.getElementById("miesiecy").value*1;
    let nadplata = document.getElementById("nadplata").value*1;
    let jezemes_plat = suma_kredyta * 0.007 * 5.6 / (5.6 - 1);
    let ostatok_dolga = suma_kredyta;
    for (let i = 1; i <= miesiecy; i++)
    {
        procentnaja_czast = ostatok_dolga *0.007;
        osnowna_zcast = jezemes_plat - procentnaja_czast;
        ostatok_dolga = ostatok_dolga - osnowna_zcast - nadplata;
        document.getElementById("wypis").innerHTML= i + " " + procentnaja_czast + " " + osnowna_zcast + " " + ostatok_dolga;
    
}
}
