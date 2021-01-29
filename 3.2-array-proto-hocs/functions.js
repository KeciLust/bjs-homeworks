console.clear();
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
  const nameWeapons = weapons.map(weapon => weapon.name);
  return nameWeapons;
}

function getCountReliableWeapons(durability) {
  const durabilityWeapons = weapons.filter(weapon => weapon.durability > durability);
  return durabilityWeapons.length;
}

function hasReliableWeapons(durability) {
  return weapons.some(weapon => weapon.durability > durability);
}

function getReliableWeaponsNames(durability) {
  const durabilityWeapons = weapons.filter(weapon => weapon.durability > durability)
    .map(weapon => weapon.name);
  return durabilityWeapons;

}

function getTotalDamage() {
  const totalDamage = weapons.reduce((sum, weapon) => {
    return sum + weapon.attack;
  }, 0);
  return totalDamage;
}

// Необязательное задание  --------


function getValuestCountToSumValues(arr, value) {
  const totalDmage = arr.reduce((sumNumber, number, ) => {
    if (sumNumber.sum < value) {
      sumNumber = {
        sum: sumNumber.sum + number,
        i: sumNumber.i + 1
      }
    } else {
      sumNumber = {
        sum: sumNumber.sum + number,
        i: sumNumber.i
      }
    }
    return sumNumber;
  }, {
    sum: 0,
    i: 0
  });
  return totalDmage.i;
}



//================================================





function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  function isEven(number, index) {
    return number === arr2[index];
  }
  return arr1.every(isEven);
}

function memorize(fn, limit) {
  function optiFn() {
    const memory = [];
    const arr = {};
    arr.result = 0;
    arr.args = Array.from(arguments);
    const ar = memory.find(ar => compareArrays(ar.args, arr.args))
    if (ar.args === undefined) {
      if (memory.length >= limit) {
        memory.shift();
        memory.push(ar);
      } else {
        memory.push(ar);
      }
      return fn();
    } else {
      return ar.result;
    }

  }
  return optiFn();

}

