// létrehozzuk a nums arrayt és meghatározzuk az elemeit
const nums = [4, 2, 2, 1, 1];

// létrehozzuk a sum változót és 0 kezdőértéket adunk neki
let sum = 0;

for (let i = 0; i < nums.length; i++) {
  // összegezzük a nums[i] elemeit a sum változóban
  sum = sum + nums[i]
}
// kiírjuk a sum változót string kiegészítéssel
console.log('A számok összege: ' + sum)