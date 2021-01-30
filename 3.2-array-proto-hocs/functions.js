console.clear();
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
  return weapons.map(weapon => weapon.name);
}

function getCountReliableWeapons(durability) {
  const durabilityWeapons = weapons.filter(weapon => weapon.durability > durability);
  return durabilityWeapons.length;
}

function hasReliableWeapons(durability) {
  return weapons.some(weapon => weapon.durability > durability);
}

function getReliableWeaponsNames(durability) {
  return weapons.filter(weapon => weapon.durability > durability)
    .map(weapon => weapon.name);
}

function getTotalDamage() {
  return weapons.reduce((sum, weapon) => sum + weapon.attack, 0);

}

// Необязательное задание  --------


function getValuestCountToSumValues(arr, value) {
  const totalDmage = arr.reduce((sumNumber, number, ) => {
    if (sumNumber.sum < value) {
      {
        sumNumber.sum += number;
        sumNumber.i++;
      }
    } else {
      sumNumber;
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
  return arr1.every((number, index) =>
    number === arr2[index] && arr1.length === arr2.length);
}



function memorize(fn, limit) {
  const memory = [];

  return function (...array) {
    const arr = {};
    arr.args = array;
    const needArr = memory.find(ar => compareArrays(ar.args, arr.args))
    if (needArr) {
      return needArr.result;
    }
    arr.result = fn(...array);
    memory.push(arr);

    if (memory.length >= limit + 1) {
      memory.shift();
    }
    return arr.result;
  }
}