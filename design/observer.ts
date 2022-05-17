interface Crew {
  update(msg: String);
}

interface Coach {
  subscribe(crew: Crew);
  unsubscribe(crew: Crew);
  notifyCrew(msg: String);
}

class Singco implements Coach {
  private crews = [];

  public eatFood(): void {
    console.log("Singco가 밥을 먹는다.");
    this.notifyCrew("나 밥먹었다.");
  }

  public runaway(): void {
    console.log("Singco가 도망간다.");
    this.notifyCrew("나 도망갔다.");
  }

  public sleep(): void {
    console.log("Singco가 잔다.");
    this.notifyCrew("나 잔다.");
  }

  public subscribe(crew: Crew): void {
    this.crews.push(crew);
  }

  public unsubscribe(crew: Crew): void {
    this.crews = this.crews.filter((member) => member !== crew);
  }

  public notifyCrew(msg: String): void {
    this.crews.forEach((crew) => crew.update(msg));
  }
}

class Loopy implements Crew {
  public update(msg: String): void {
    console.log(`Loopy 수신 : ${msg}`);
  }
}

class Mimmi implements Crew {
  public update(msg: String): void {
    console.log(`Mimmi 수신 : ${msg}`);
  }
}
class Fry implements Crew {
  public update(msg: String): void {
    console.log(`Fry 수신 : ${msg}`);
  }
}

const singco = new Singco();
const loopy = new Loopy();
const mimmi = new Mimmi();
const fry = new Fry();

singco.subscribe(loopy);
singco.subscribe(mimmi);
singco.subscribe(fry);

singco.sleep();
