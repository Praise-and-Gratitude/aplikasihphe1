




function calculate2() 
/* Input spesifikasi Dimensi dan Spesifikasi HPHE*/
{   let baris=document.getElementById("baris").value
	let xt=document.getElementById("xt").value
	let xl=document.getElementById("xl").value
    let bariss=document.getElementById("bariss").value	
    let kolom=document.getElementById("kolom").value	
    let evap=document.getElementById("evap").value	
    let adiab=document.getElementById("adiab").value	
    let kond=document.getElementById("kond").value	
/* End of Input spesifikasi Dimensi dan Spesifikasi HPHE*/
	
   
 /* Perhitungan Jarak antar Fin terhadap Biaya Material Fin yang dilambangkan dengan konstanta selllect */   
    const e = document.getElementById('jarakfin')
    const selllect =e.options[e.selectedIndex].text;
/* Perhitungan Jarak antar Fin terhadap Biaya Material Fin yang dilambangkan dengan konstanta selllect */   

    
/*Perhitungan L2 dan L3 */
    let lebar = (Math.round(xl* bariss));
    let kedalaman = (Math.round(xt * kolom));
/* End of Perhitungan L2 dan L3 */


/* Input Kondisi Operasional ; Line 350 HTML*/
let seleect1 = document.getElementById('jumlahmodul2');
let seleect2 = document.getElementById('tei');
let seleect3 = document.getElementById('vei');

/*Penentuan heat recovery berdasarkan jumlah baris, temperatur dan kecepatan memasuki evaporator */
const chooice1  = seleect1.value
const chooice2 = seleect2.value;
const chooice3 = seleect3.value;


  if (chooice1 === '11' && chooice2 === '30' && chooice3 === '15') {
     tes10 = 80.4
    } else if (chooice1 === '11' && chooice2 === '30' && chooice3 === '20') {
      tes10 = 114.1
    } else if (chooice1 === '11' && chooice2 === '30' && chooice3 === '25') {
        tes10 = 167.6
    } else if (chooice1 === '22' && chooice2 === '30' && chooice3 === '15') {
        tes10 = 88.4
    } else if (chooice1 === '22' && chooice2 === '30' && chooice3 === '20') {
        tes10 = 133.4
    } else if (chooice1 === '22' && chooice2 === '30' && chooice3 === '25') {
        tes10 = 186.1
    } else if (chooice1 === '33' && chooice2 === '30' && chooice3 === '15') {
        tes10 = 117.4
    } else if (chooice1 === '33' && chooice2 === '30' && chooice3 === '20') {
        tes10 = 165.6
    } else if (chooice1 === '33' && chooice2 === '30' && chooice3 === '25') {
        tes10 = 209.0
    } else if (chooice1 === '11' && chooice2 === '35' && chooice3 === '15') {
        tes10 = 168.1
    } else if (chooice1 === '11' && chooice2 === '35' && chooice3 === '20') {
        tes10 = 223.8
      } else if (chooice1 === '11' && chooice2 === '35' && chooice3 === '25') {
          tes10 = 277.5
      } else if (chooice1 === '22' && chooice2 === '35' && chooice3 === '15') {
          tes10 = 261.8
      } else if (chooice1 === '22' && chooice2 === '35' && chooice3 === '20') {
          tes10 = 316.2
      } else if (chooice1 === '22' && chooice2 === '35' && chooice3 === '25') {
          tes10 = 396.9
      } else if (chooice1 === '33' && chooice2 === '35' && chooice3 === '15') {
          tes10 = 260.8
      } else if (chooice1 === '33' && chooice2 === '35' && chooice3 === '20') {
          tes10 = 339.7
      } else if (chooice1 === '33' && chooice2 === '35' && chooice3 === '25') {
          tes10 = 410.5
      } else if (chooice1 === '11' && chooice2 === '40' && chooice3 === '15') {
          tes10 = 250.8 
       } else if (chooice1 === '11' && chooice2 === '40' && chooice3 === '20') {
          tes10 = 335.0
       } else if (chooice1 === '11' && chooice2 === '40' && chooice3 === '25') {
           tes10 = 417.3
       } else if (chooice1 === '22' && chooice2 === '40' && chooice3 === '15') {
           tes10 = 320.1
       } else if (chooice1 === '22' && chooice2 === '40' && chooice3 === '20') {
           tes10 = 413.1
       } else if (chooice1 === '22' && chooice2 === '40' && chooice3 === '25') {
           tes10 = 508.3
       } else if (chooice1 === '33' && chooice2 === '40' && chooice3 === '15') {
           tes10 = 341.4
       } else if (chooice1 === '33' && chooice2 === '40' && chooice3 === '20') {
           tes10 = 493.7
       } else if (chooice1 === '33' && chooice2 === '40' && chooice3 === '25') {
           tes10 = 624.9
       }else if (chooice1 === '11' && chooice2 === '45' && chooice3 === '15') {
           tes10 = 344.9 
       } else if (chooice1 === '11' && chooice2 === '45' && chooice3 === '20') {
           tes10 = 470.4
       } else if (chooice1 === '11' && chooice2 === '45' && chooice3 === '25') {
           tes10 = 591.4
       } else if (chooice1 === '22' && chooice2 === '45' && chooice3 === '15') {
           tes10 = 423.8
       } else if (chooice1 === '22' && chooice2 === '45' && chooice3 === '20') {
           tes10 = 573.7
       } else if (chooice1 === '22' && chooice2 === '45' && chooice3 === '25') {
           tes10 = 716.2
       } else if (chooice1 === '33' && chooice2 === '45' && chooice3 === '15') {
           tes10 = 499.5
       } else if (chooice1 === '33' && chooice2 === '45' && chooice3 === '20') {
           tes10 = 694.8
       } else if (chooice1 === '33' && chooice2 === '45' && chooice3 === '25') {
           tes10 = 870.7
       }

/*End of Penentuan heat recovery berdasarkan jumlah baris, temperatur dan kecepatan memasuki evaporator */

let dailyuse2 = document.getElementById("dailyuse").value;
let monthlyuse2 = document.getElementById("monthlyuse").value;
let biayalistrik= document.getElementById("biayalistrik").value;


/* End of Input Kondisi Operasional */


    
    
/*Perhitungan biaya investasi HPHE */  
    let dudukan = 2 *lebar * kedalaman * 3/1000000000* 777796794
    let rangka = 4*(+adiab + +kond)*30*20/1000000000 *47709091

    let rawgalvalum = +rangka + +dudukan

    let rawvfin = (+evap + +kond) *lebar *kedalaman*2/selllect*843/100000

    

    let galvalum =new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format( Math.round(+rangka + +dudukan))
   
    let heatpipe =new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(Math.floor(bariss*kolom*baris))

    
    

    let vfin = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format((Math.round((+evap + +kond) *lebar *kedalaman*2/selllect*843/100000)));

    let produksi =  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format( Math.round(3*(+rawgalvalum + +rawvfin)))

    let instalasi = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(250000)

    let benefitmargin1= 3*(+rawgalvalum + +rawvfin)

    let benefitmargin2 = bariss*kolom*baris

    let benefitmargin3= 250000

    let benefitmargin = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(Math.round((+benefitmargin1 + +benefitmargin2 + +benefitmargin3)/4))
    
    const biayatotal = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(Math.round((+benefitmargin1 + +benefitmargin2 + +benefitmargin3)*5/4))
    let rawbiayatotal= (+benefitmargin1 + +benefitmargin2 + +benefitmargin3)*5/4
    const biayatotal2 = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(Math.round((+benefitmargin1 + +benefitmargin2 + +benefitmargin3)*5/4*2/3))
    const biayatotal3 = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(Math.round((+benefitmargin1 + +benefitmargin2 + +benefitmargin3)*5/4*4/3))
    let rawbiayatotal2 = Math.round((+benefitmargin1 + +benefitmargin2 + +benefitmargin3)*5/4*2/3)
    let rawbiayatotal3 = Math.round((+benefitmargin1 + +benefitmargin2 + +benefitmargin3)*5/4*4/3)
    
    
    
    
    document.getElementById('tesst2').innerHTML = vfin
    
    document.getElementById('tesst3').innerHTML = galvalum

    document.getElementById('tesst4').innerHTML = heatpipe

    document.getElementById('tesst5').innerHTML = produksi

    document.getElementById('tesst7').innerHTML = instalasi

    document.getElementById('tesst8').innerHTML = benefitmargin

    document.getElementById('tesst9').innerHTML = biayatotal

    document.getElementById('tesst9x').innerHTML = biayatotal2

    document.getElementById('tesst9xx').innerHTML = biayatotal3

/* End of perhitungan biaya investasi HPHE */  
   
    
    




    
	

/*Perhitungan Penghematan Listrik */

const pengembalian = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(tes10*dailyuse2*monthlyuse2*4*biayalistrik/1000)
let rawpengembalian= tes10*dailyuse2*monthlyuse2*4*biayalistrik/1000

/*End of Perhitungan Penghematan Listrik */

        

    

  
  

/*Perhitungan Payback Period */

document.getElementById('testes10').innerHTML = tes10
    
document.getElementById('testes13').innerHTML = pengembalian



document.getElementById('newpembagian').innerHTML= Math.trunc(Math.round(rawbiayatotal)/Math.round(rawpengembalian))

document.getElementById('sisapembagian2').innerHTML= Math.trunc((rawbiayatotal%rawpengembalian)/Math.round(rawpengembalian)*12)

document.getElementById('newpembagian3').innerHTML= Math.trunc(Math.round(rawbiayatotal2)/Math.round(rawpengembalian))

document.getElementById('sisapembagian3').innerHTML= Math.trunc((rawbiayatotal2%rawpengembalian)/Math.round(rawpengembalian)*12)

document.getElementById('newpembagian4').innerHTML= Math.trunc(Math.round(rawbiayatotal3)/Math.round(rawpengembalian))
  
document.getElementById('sisapembagian4').innerHTML= Math.trunc((rawbiayatotal3%rawpengembalian)/Math.round(rawpengembalian)*12)

}

/*End of Perhitungan Payback Period */

/*Pengubahan Tombol 'Hitung' menjadi 'Hitung Lagi' */
  let button = document.getElementById('button3');
  let visible= document.getElementById('invisible')
  
  function changebutton () {
      
          button.innerHTML= 'Hitung Lagi'
          invisible.style.display = 'block';
      
      
      
      
      
  }
      
  
  button.addEventListener('click', changebutton)
  /*End of Pengubahan Tombol 'Hitung' menjadi 'Hitung Lagi' */
  
