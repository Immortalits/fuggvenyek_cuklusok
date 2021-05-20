// létrehozzuk a names array-t
const names = ['István', 'Katalin', 'Attila', 'Gábor', 'Péter', 'Anna', 'Kitti'];

// deklaráljuk a fuggveny1 függvényt
function fuggveny1() {
  // for-on belül létrehozzuk az i változót, ami 0-tól a names hosszáig (elemeinek mennyiségéig) megy egyesével
  for (let i = 0; i < names.length; i++) {
    // ha a names egyik eleme = Gábor, akkor...
    if (names[i] === 'Gábor') {
      // ...kiírjuk console-ra, hogy 'Van Gábor, aki a(z) (i+1). eleme a sornak.'
      console.log('Van Gábor, aki a(z) ' + [i + 1] + '. eleme a sornak.');
    }
  }
}

// meghívjuk a fuggveny1 függvényt a names változóval
fuggveny1(names);