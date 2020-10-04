// import SQLite from 'react-native-sqlite-storage';

// SQLite.DEBUG(true);
// SQLite.enablePromise(true);

// const db_name = 'album.db';
// const db_version = '1.0';
// const db_displayname = 'SQLite React Offline Database';
// const db_size = 200000;

// export default class Sqlite {
//   constructor() {
//     this.koneksi = SQLite.openDatabase(
//       db_name,
//       db_version,
//       db_displayname,
//       db_size,
//       this.suksesOpen,
//       this.gagalOpen,
//     );

//     this.konsumsiData(
//       'create table if not exists album(userId text primary key, id text, title text)',
//       [],
//     ).finaly(() => {
//       this.konsumsiData('insert into album values (?, ?)', ['admin', 'admin'])
//         .then(() => console.info('Successfully insert default user!!'))
//         .catch((err) =>
//           console.warn('Failed create default user: ', err.message),
//         );
//     });

//     this.konsumsiData();
//     suksesOpen = () => {
//       console.info('Sukse dibukas');
//     };

//     gagalOpen = () => {
//       console.info('Gagal dibuka');
//     };

//     konsumsiData = (perintah, param) => {
//       return this.conn.then((ex) => {
//         return ex.executeSql(perintah, param);
//       });
//     };
//   }
// }

import SQLite from 'react-native-sqlite-storage';

class Sqlite {
  constructor() {
    this.state = {
      data: [],
      dataJ: [12],
    };
    SQLite.DEBUG(true);
    SQLite.enablePromise(true);
    this.conn = SQLite.openDatabase(
      'album.db',
      '1.0',
      'Database Album',
      200000,
      this.openConn,
      this.errorConn,
    );
    this.runQuery(
      'CREATE TABLE IF NOT EXISTS album(userId INTEGER NOT NULL, id INTEGER PRIMARY KEY NOT NULL, title TEXT)',
      [],
    ).finally(() => {
      let data = this.state.data;
      // for (let i = 0; i < data.length; i++) {
      this.runQuery(`SELECT * FROM album`, [])
        .then(([hasil]) => console.info('Hasil:', hasil.rows.item(1).id))
        .catch((err) =>
          console.warn('Failed create default user: ', err.message),
        );
      // }
    });

    // let ambil = {};
    // let coba = this.runQuery('SELECT * FROM album', [ambil]);
    // item = coba.rows;
    // console.log(ambil);
  }

  // componentDidMount() {
  //   this.ambilData();
  // }

  // ambilData = async () => {
  //   // const {data} = this.state;
  //   await fetch(`https://jsonplaceholder.typicode.com/albums`)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       this.setState({dataJ: json});
  //     })
  //     .catch((
  //       error, //console.error(error
  //     ) => alert('Cek Koneksi'));
  //   // .finally(() => {
  //   //   this.setState({isLoading: false});
  //   // });
  //   console.info('Rifki Berhasil', this.state.dataJ);
  // };

  openConn = () => {
    console.log('SQLite Database opened!!');
  };

  errorConn = (e) => {
    console.error('Error SQLite: ', err);
  };

  runQuery = (query, params) => {
    return this.conn.then((tx) => {
      return tx.executeSql(query, params);
    });
  };
}

export default Sqlite;
