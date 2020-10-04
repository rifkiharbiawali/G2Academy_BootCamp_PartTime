import React, {Component} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Tombol from './button';
import {connect} from 'react-redux';

class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
      // url: `https://jsonplaceholder.typicode.com/albums`,

      pages: 1,
      dataSlice: [],
      // tes: 'rifki',
    };
  }

  componentDidMount() {
    this.ambilData();
  }
  // shouldComponentUpdate(props, state) {
  //   return true;
  // }
  // componentDidUpdate() {
  //   this.ambilData();
  // }
  ambilData = async () => {
    // const {data} = this.state;
    await fetch(`https://jsonplaceholder.typicode.com/albums`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({data: json, dataSlice: json.slice(0, 10)});
      })
      .catch((
        error, //console.error(error
      ) => alert('Cek Koneksi'))
      .finally(() => {
        this.setState({isLoading: false});
      });
    console.info('Rifki Ini Berhasil', this.state.data);
  };

  next = async () => {
    let data = this.state.data;
    let page = this.state.pages;
    // for (let i = 0; i <= nilai.length; i++) {
    if (page >= 10) {
      this.setState({
        dataSlice: data.slice(90, 100),
      });
    } else {
      await this.setState({pages: page + 1});
      this.setState({
        dataSlice: data.slice(
          this.state.pages * 10 - 10,
          this.state.pages * 10,
        ),
      });
    }
  };

  prev = async () => {
    let data = this.state.data;
    let page = this.state.pages;
    // for (let i = 0; i <= nilai.length; i++) {

    if (page <= 1) {
      this.setState({
        dataSlice: data.slice(0, 10),
      });
    } else {
      await this.setState({pages: page - 1});
      this.setState({
        dataSlice: data.slice(
          this.state.pages * 10 - 10,
          this.state.pages * 10,
        ),
      });
    }
  };

  nextPrev = () => {
    if (this.state.pages === 1) {
      return (
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Tombol isi="Next" press={this.next} />
          <Tombol isi="ubah" press={this.props.dataFetch} />
          {/* <Text>{this.state.tes}</Text> */}
        </View>
      );
    } else if (this.state.pages === 10) {
      return (
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Tombol isi="Prev" press={this.prev} />
          {/* <Text>{this.state.tes}</Text> */}
        </View>
      );
    } else {
      return (
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Tombol isi="Prev" press={this.prev} />
          <Tombol isi="Next" press={this.next} />
        </View>
      );
    }
  };

  loadPage = async () => {
    await this.setState({pages: this.state.pages + 1});
    let array = this.state.data;
    let dataSlice = array.slice(
      this.state.pages * 10 - 10,
      this.state.pages * 10,
    );
    let dataFix = this.state.dataSlice.concat(dataSlice);
    this.setState({dataSlice: dataFix});
    // return (
    //   <FlatList
    //     data={this.state.dataSlice}
    //     keyExtractor={(item) => item.id}
    //     renderItem={({item}) => (
    //       <View style={styles.item}>
    //         <Text style={styles.title}>
    //           {item.id}, {item.title}
    //         </Text>
    //       </View>
    //     )}
    //     onEndReached={this.loadPage}
    //     onEndReachedThreshold={0.1}
    //   />
    // );
  };

  loadingAnimasi = () => {
    // setTimeout(() => {
    return <ActivityIndicator size="large" color="#0000ff" />;
    // }, 10000);
  };

  render() {
    const {dataSlice, isLoading} = this.state;
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
    });
    return (
      <>
        <View style={styles.container}>
          {isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <FlatList
              data={dataSlice}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => (
                <View style={styles.item}>
                  <Text style={styles.title}>
                    {item.id}, {item.title}
                  </Text>
                </View>
              )}
              onEndReached={this.loadPage}
              onEndReachedThreshold={0.1}
              ListFooterComponent={this.loadingAnimasi}
            />
          )}
          <Text>
            Halaman {this.state.pages} {this.props.DataA}
          </Text>
        </View>
        {/* <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Tombol isi="Prev" press={this.prev} />
          <Tombol isi="Next" press={this.next} /> */}
        {/* <Text>{this.state.tes}</Text> */}
        {this.nextPrev()}
        {/* </View> */}
      </>
    );
  }
}

const reduxData = (state) => ({
  DataA: state.DataB.isData,
});
const mapToProps = (dispatch) => ({
  dataFetch: () => dispatch({type: 'FETCH'}),
});

export default connect(reduxData, mapToProps)(ListItem);
// export default ListItem;
