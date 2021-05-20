// létrehozzuk a nums arrayt és meghatározzuk az elemeit
const nums = [4, 2, 2, 1, 1];

// létrehozzuk a sum változót és 0 kezdőértéket adunk neki
let sum = 0;

// deklaráljuk a fuggveny2 függvényt
function fuggveny2() {
  for (let i = 0; i < nums.length; i++) {
    // összegezzük a nums[i] elemeit a sum változóban
    sum = sum + nums[i];
  }
  // kiírjuk a sum változót string kiegészítéssel
  console.log('A számok összege: ' + sum);
}
// meghívjuk a fuggveny2 függvényt nums változóval
fuggveny2(nums);

