//Upute za igranje 1mora da se kreira heroj sa codom // const imeheroja = new izaberes macevaoca ili carobnjaka
// const macevaoc = new Macevalac(150,hero) 100 je broj health poena a hero je ime
//heroj mora da pokupi oruzije da bi mogao da se bori
//macevalac.takeWepon('mac') sada heroj ima mac
//Moraju da se kreiraju cudovista
//const cudoviste = new Zmaj('zmaj')

//da bi simulirali borbu creira se novi game
//const game=new Game()
//game ima metodu koja se koirsti za igru u koju unsesemo heroja i cudoviste
//game.play(macevalac,cudoviste)
//ako se sve uradi kako treba na Console bi trebali da izbaciva sta se desava u igri
// SORRY NA GRAMATICKIM GRESKAMA TRUDIO SAM SE STO PRIJE ODRADITI ZADATAK

//ovo je nasa glavna klasa od koje pravimo carobnjaka i macevalaca gdje koriste iste metode
class Char {
  health;
  bag = [];
  activnoOruzije;
  ime;
  constructor(health, ime) {
    this.health = health;
    this.ime = ime;
  }
  // ova metoda omoguvava da se pokupi oruzje ali samo 2 su moguca Zadatak 3 i 4
  takeWepon(wepon) {
    if (wepon.length <= 2) {
      console.log("ne moze uzeti vise oruzija");
      return;
    }
    this.bag.push(wepon);
  }
  //ova metoda se koristi da se mjenja oruzija
  promjeniOruzije() {
    if (this.bag.length === 0) console.log("nema oruzija u torbi");
    if (this.bag.length === 1) console.log("nemate drugo oruzije");
    this.activnoOruzije = this.bag[0];
    if (this.activnoOruzije === this.bag[0]) {
      this.activnoOruzije = this.bag[1];
      console.log(`uzeli ste oruzije ${this.activnoOruzije}`);
    }
    if (this.activnoOruzije === this.bag[1]) {
      this.activnoOruzije = this.bag[0];
      console.log(`uzeli ste oruzije ${this.activnoOruzije}`);
    }
  }
  baciOruzje() {
    if (this.bag.length === 0) {
      console.log("nema oruzija u torbi");
      return;
    }
    console.log(`bacili ste ${this.bag[this.bag.length - 1]}`);
    this.bag.pop();
  }
}

class Carobnjak extends Char {
  constructor(helth, ime) {
    super(helth, ime);
    this.health = helth;
  }

  //ova metoda ce biti koristena da carobnjak uzme oruzije ali je moguce samo uzeti koplje
  learMagic(wepon) {
    if (wepon !== "carolija") return;
    if (this.bag.length >= 2) {
      console.log("cant take more wepon");
      return;
    }
    this.bag.push(wepon);
    console.log("carobnjak je naucio caroliju");
  }
  //sa ovom metodom carobnjak pokusava da uzme oruzije ali ne moze
  takeWepon(wepon) {
    console.log(`carobnjak ne moze uzeti ${wepon}`);
  }
  //this method is carobnjak attac
  napada() {
    console.log("carobnjak koristi caroliju health -20hp");
    return 20;
  }
}
class Macevalac extends Char {
  constructor(helth, ime) {
    super(helth, ime);
    this.health = helth;
  }

  //ova metoda ce biti koristena da macevalac uze moruzije koje se navede mac/koplje
  takeWepon(wepon) {
    if (wepon === "Mac" || wepon === "Koplje") {
      if (this.bag.length >= 2) {
        console.log("cant take more wepon");
        return;
      }
      this.bag.push(wepon);
      console.log(`macevalac je uzeo ${wepon}`);
    }
    return;
  }
  //macevalac pokusava nauciti magiju ali ne uspijeva
  learnMagicPower(magic) {
    console.log(`macevalac ne moze nauciti ${magic}`);
  }
  // heroj moze da napadne cudoviste i nanosi im stetu zadatak 7
  napada() {
    const napad = Math.floor(Math.random() * 2);
    if (napad === 0) {
      console.log("macevalac napada macem health-10 ");
      return 10;
    }
    if (napad === 1) {
      console.log("Macevalac napada kopljem health -15");
      return 15;
    }
    console.log(napad);
  }
}
//this is our class for crating dragon
// kreacija cudovista zmaja i pauka Zadatak 5
class Zmaj {
  ime;
  aktivnoOruzije;
  constructor(ime) {
    this.ime = ime;
    this.health = 100;
  }
  napada() {
    const napad = Math.floor(Math.random() * 2);
    if (napad === 0) {
      console.log("Zmaj udara health-5 hp");
      this.aktivnoOruzija = "udarac";
      return 5;
    }
    if (napad === 1) {
      console.log("Zmaj Bljuje vatru health-20 hp");
      this.aktivnoOruzija = "vatre";
      return 20;
    }
    console.log(napad);
  }
}
// this is our class for crating spider
class Pauk {
  aktivnoOruzije;
  constructor(ime) {
    this.ime = ime;
    this.health = 80;
  }
  // ovu metodu koristimo kao napad gdje se odlucuje koji napad koristi
  napada() {
    const napad = Math.floor(Math.random() * 2);
    if (napad === 0) {
      console.log("Pauk udara health-5 hp");
      this.aktivnoOruzija = "udaraca";
      return 5;
    }
    if (napad === 1) {
      console.log("Pauk ujeda skida 8 hp");
      this.aktivnoOruzija = "ujeda";
      return 8;
    }
    console.log(napad);
  }
}
//THIS IS OUR PLAYING MAGE kracija macevalaca i carobnaka je Zadatak 1
const carobnjak = new Carobnjak(100, "heroj");
//this is our playing macevalac
const macevalac = new Macevalac(150, "heroj");
//this is our playing zmaj
const zmaj = new Zmaj("zmaj");
const pauk = new Pauk("pauk");
carobnjak.learMagic("magija");
// mogucnost da heroji uzmu oruzije Zadatak 2 gdje se filtriraju doyvoljeno i ne dozvoljeno oruzije
macevalac.takeWepon("Mac");
macevalac.takeWepon("Koplje");
macevalac.takeWepon("Mac");

macevalac.promjeniOruzije();
macevalac.promjeniOruzije();
//ovo je nasa glava klasa simulacija borbe izmedju cudovista i heroja Zadatak 8
//ovo loguje u consolu sta se desava i ko koda napada Zadatak 9
class Game {
  heroHealth;
  monsterHealth;
  //koristimo pley metodu da pokrenemo borbu izmedju heroja i cudovista
  play(hero, monster) {
    this.heroHealth = hero.health;
    this.monsterHealth = monster.health;
    const randomNumber = Math.floor(Math.random() * 100);
    // ovo odluciva da li ce heroj napasti prvi ili cudoviste random number izmedju 0 & 100
    if (randomNumber < 50) {
      //ovaj dio koda se aktivira ako heroj nije uzeo oruzije prije borbe
      if (!hero.activnoOruzije) {
        console.log(`${hero.ime} nema oruzija u torbi da napadne`);
        return;
      }
      //ovo se aktivira kada borba krene i printa u konzolu sta se desava ko koga napada
      console.log(
        `${hero.ime} napada ${monster.ime} pomocu ${
          hero.activnoOruzije
        } i skida mu ${hero.napada() + ""} healtha `
      );
      //ovo racuna koliko cudoviste ima heltha
      this.monsterHealth = this.monsterHealth - hero.napada();
      console.log(this.monsterHealth);
    }
    //ovo je dio koda koji pokrece da cudoviste napada heroja
    if (randomNumber > 50) {
      console.log(
        `${monster.ime} napada ${hero.ime} i skida mu ${
          monster.napada() + ""
        } healtha `
      );
      //ovaj dio koda racuna health od heroja
      this.heroHealth = this.heroHealth - monster.napada();
      console.log(this.heroHealth);
    }
  }
}
const game = new Game();
console.log(macevalac.activnoOruzije);
game.play(macevalac, zmaj);
