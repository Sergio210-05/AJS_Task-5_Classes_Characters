export default class Character {
  static typesOfPersons = [
    'Bowman',
    'Swordsman',
    'Magician',
    'Daemon',
    'Undead',
    'Zombie',
  ];

  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Name is incorrect. The word length should be from 2 to 10 characters');
    } else if (!Character.typesOfPersons.includes(type)) {
      throw new Error('Type is incorrect');
    } else {
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = undefined;
      this.defence = undefined;
    }
  }
}
