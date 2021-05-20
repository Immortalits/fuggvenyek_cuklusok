const nums = ['a', 4, 2, 2, 1, 1];

let sum = 0;

// deklaráljuk a fuggveny3 függvényt
function fuggveny3() {
  for (let i = 0; i < nums.length; i++) {
    // vizsgáljuk, hogy a nums elemei számok e, ha igen...
    if (isNaN(nums[i])) {
      // ...akkor kiírjuk konzolra, hogy az adott elem nem szám...
      console.log('A(z) ' + [i + 1] + '. elem nem szám.');
      // és 0 értéket állítunk be neki
      nums[i] = 0;
    }
    sum = sum + nums[i];
  }
  console.log('A számok összege: ' + sum);
}
// meghívjuk a fuggveny3 függvényt nums változóval
fuggveny3(nums);