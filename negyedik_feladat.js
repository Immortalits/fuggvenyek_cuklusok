const nums = ['a', 4, 2, 2, 1, 1];


for (let i = 0; i < nums.length; i++) {
  if (isNaN(nums[i])) {
    console.log('A(z) ' + [i + 1] + '. elem nem szám.');
    if (isNaN(parseInt(nums[i]))) {
      console.log('A elem számmá konvertálása sikertelen!')
      nums[i] = 0;
    } else {
      parseInt(nums[i])
    }
    let sum = (nums.reduce((a, b) => a + b, 0));
    console.log('A számok összege: ' + sum)
  }
}