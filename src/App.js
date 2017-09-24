import React, { Component } from 'react';
import name from './Assets/js/name';
import people from './Assets/js/people';

class App extends Component {
  componentWillMount() {
    const persons = people;
    const names = name;

    // Filtreleme ~~ filter

    // ID'si 50 den büyük ve 60 dan küçükler
    const f1 = persons.filter(per => per.id > 50 && per.id < 60);
    // Email içinde com geçen objeleri getirir.
    const f11 = persons.filter(per => per.email.includes('com'));
    // console.log(f1);
    // console.log(f11);


    // Bellirli başlıkları çekme ~~ map
    // People listesinde sadece isim ve soyisim çekme
    const f2 = persons.map(per => `${per.first_name} ${per.last_name}`);
    // console.log(f2);

    // Sıralama ~~ sort
    // Eğer tek kolon üzerinden sıralama yapacaksan direk a ve b parametrelerine kolon key'ini ata ve birbirlerinden çıkar.
    const f3 = persons.sort((a, b) => a.year - b.year);
    // Email listesini ayırıp sıralama
    const f31 = persons.sort((a, b) => {
      const [last, first] = a.email.split('@');
      // console.log(last, first);
    });
    // console.table(f3);

    // Ruduce
    // Reduce'lar genelde array içindeki sayıları toplama çarpma işlemlerinde kullanılır. 
    // a'nın üstüne her b objesindeki year değerini tek tek ekler.
    // a'ya default bir değer(0) vermek gerekir.
    const f4 = persons.reduce((a, b) => a + b.year, 0);
    const f41 = names.reduce((obj, item) => {
      if (!obj[item]) {
        obj[item] = 0;
      }
      obj[item]++;
      return obj;
    }, {});
    // console.log(f4);
    console.log(f41);
  }
  render() {
    return (
      <div className="App" />
    );
  }
}

export default App;
