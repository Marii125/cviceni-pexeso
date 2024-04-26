console.log('Funguju!');

const herniKarticky = (event) => {
  let otocenaKarticka = document.querySelector('button:not(.otocena)');
  if (otocenaKarticka) {
    console.log('Uz existuje nejaka otocena');
    stejneDvojice(otocenaKarticka, event.target);
  }
  event.target.classList.toggle('otocena');
};

const karticky = document.querySelectorAll('.karticka');
karticky.forEach((karta) => {
  karta.addEventListener('click', herniKarticky); //vsem kartickam po jedne pridame eventListener na click, ktery bude volat funkci herniKarticky
});

const casovac = () => {
  let otoceneKarticky = document.querySelectorAll('button:not(.otocena)'); //najdeme vsechny karticky co nemaji tridu .otocena to znamena, vsechny karticky, ktere jsou otocene
  otoceneKarticky.forEach((otocenaKarta) => {
    //po jednom ty otocene karticky projdeme
    if (otocenaKarta.disabled === false) {
      //pokud karticka nema tridu disabled tak ji otocime zpet (pokud nema disabled tak tam nebyla shoda)
      otocenaKarta.classList.add('otocena');
    }
  });
};

const stejneDvojice = (prvniKarticka, druhaKarticka) => {
  console.log(prvniKarticka);
  console.log(druhaKarticka);
  const prvniObrazek = prvniKarticka.querySelector('.karticka__predek img'); //najdeme obrazek karticky, na kterou jsme kliknuli jako prvni
  const druhyObrazek = druhaKarticka.querySelector('.karticka__predek img'); //najdeme obrazek karticky, na kterou jsme kliknuli jako druhou
  if (prvniObrazek.src === druhyObrazek.src) {
    console.log('SHODA!!!');
    prvniKarticka.disabled = true;
    druhaKarticka.disabled = true;
  } else {
    console.log('NENÍ TO SHODA!!!');
    setTimeout(casovac, 1000);
  }
};
//karticky[0].classList.remove('otocena')
