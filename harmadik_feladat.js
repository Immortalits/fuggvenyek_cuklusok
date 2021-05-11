const nums = ['a', 4, 2, 2, 1, 1];


for (let i = 0; i < nums.length; i++) {
  if
    (isNaN(nums[i])) {
    console.log('A(z) ' + [i + 1] + '. elem nem szám.')
    nums[i] = 0;
    let sum = (nums.reduce((a, b) => a + b, 0));
    console.log('A számok összege: ' + sum)
  }
}