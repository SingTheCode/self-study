class Player {
  constructor() {
    this.strength = 0;
    this.luck = 0;
  }

  get strength() {
    return this.strength;
  }

  getStrength() {
    return this.strength;
  }

  // setter를 사용해야 할 경우는 사용해야됨
  // setter의 메서드 명을 목적에 맞게 분명히
  set increaseStrengthByItem(itemPower) {}
  // 직접 프로퍼티에 접근을 지양
  increaseStrengthWithLevelUp() {
    this.strength += 1;
  }
}

const player = new Player();

player.getStrength();
player.strength;
