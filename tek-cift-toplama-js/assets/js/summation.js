// Kullanıcıya kaç adet sayı girmek istediğini soralım.
// Vereceği cevaba göre kullanıcıdan sayıları alalım.
// Cevaplar sayilar dizisine eklensin.
// Kullanıdan alınan sayılar çift ise ayrı toplayıp cevabını yazdıralım, tek ise ayrı toplayıp cevabını yazdıralım.

function topla() {
  let sayilar = [];
  let tekSonuc = 0;
  let ciftSonuc = 0;

  let adet = Number(prompt("Kaç adet sayı girilecek?"));

  for (let i = 0; i < adet; i++) {
    let sayi = Number(prompt((i+1) + ". sayıyı giriniz:"));
    sayilar.push(sayi); 
    
    if (sayi %2 === 0) {
      ciftSonuc += sayi; 
    } else {
      tekSonuc += sayi; 
    }
  }

  console.log(`Girilen sayılar:  ${sayilar}`);
  console.log(`Tek sayılar sonuç :  ${tekSonuc}`);
  console.log(`Çift sayılar sonuç :  ${ciftSonuc}`);
}

topla();