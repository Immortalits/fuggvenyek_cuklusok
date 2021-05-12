const nums = ['a', 4, 2, 2, 1, 1];

let sum = 0;

for (let i = 0; i < nums.length; i++) {
  if
    // vizsgáljuk a nums[i] típusát, hogy szám vagy egyéb...
    ((typeof nums[i]) !== 'number') {
    // ha nem szám, kiírjuk konzolra, hogy melyik elem nem az
    console.log('A(z) ' + [i + 1] + '. elem nem szám.')
    // vizsgáljuk, hogy számmá koonvertálva az elem szám e vagy sem...
    if (isNaN(parseInt(nums[i]))) {
      // ...ha nem szám, akkor kiírjuk, hogy a konvertálás sikertelen...
      console.log('A elem számmá konvertálása sikertelen!')
      // és 0 értéket állítunk be neki
      nums[i] = 0;
    }
  }
  // összegezzük a nums[i] konvertált elemeit
  sum = sum + parseInt(nums[i]);
}
console.log('A számok összege: ' + sum)