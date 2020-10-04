import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Input, Button} from 'react-native-elements';
import ListItem from '../itemList';
import {connect} from 'react-redux';
import {AsyncStorage} from 'react-native';

// import LOGIN from '../../redux/action';
import {SQLiteContext} from '../../database';

const Drawer = createDrawerNavigator();

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: false,
      email: '',
      password: '',
      dataUser: [
        // {email: 'kiki@gmail.com', password: '123'},
        // {email: 'rifki@gmail.com', password: '123'},
      ],
      dataJ: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      // const jsonValue = await AsyncStorage.getItem('data');
      const data = await AsyncStorage.getItem('data');

      if (data !== null) {
        var parse = await JSON.parse(data);

        // alert(data);
      }
      this.setState({dataJ: parse});
      console.info(this.state.dataJ[0].user);
      // console.log(this.SQLiteContext);
      // return jsonValue != null ? this.setState({dataJ: jsonValue}) : null;
    } catch (e) {
      // error reading value
      alert('eror');
    }
  };
  MyDrawer = () => {
    if (this.props.loginState === false) {
      return (
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Login" component={this.Login} />
            <Drawer.Screen name="Register" component={this.Register} />
          </Drawer.Navigator>
        </NavigationContainer>
      );
    } else {
      return (
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Dasbor" component={this.dasBor} />
            <Drawer.Screen name="Album" component={this.album} />
          </Drawer.Navigator>
        </NavigationContainer>
        // <NavigationContainer>
        //   <Drawer.Navigator>
        //     <Drawer.Screen name="Dasbor" component={this.dasBor} />
        //     <Drawer.Screen name="Album" component={this.album} />
        //   </Drawer.Navigator>
        // </NavigationContainer>
      );
    }
    // {
    //   this.state.islogin ? (
    //     <NavigationContainer>
    //       <Drawer.Navigator>
    //         <Drawer.Screen name="Login" component={this.Login} />
    //         <Drawer.Screen name="Register" component={this.Register} />
    //       </Drawer.Navigator>
    //     </NavigationContainer>
    //   ) : (
    //     <NavigationContainer>
    //       <Drawer.Navigator>
    //         <Drawer.Screen name="Dasbor" component={this.dasBor} />
    //         <Drawer.Screen name="Album" component={this.album} />
    //       </Drawer.Navigator>
    //     </NavigationContainer>
    //   );
    // }
  };

  dasBor = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hi {this.state.email}</Text>
        <Button title="Logout" onPress={this.props.tipeLogin} />
      </View>
    );
  };

  album = () => {
    return <ListItem />;
  };

  Validasi = () => {
    let data = this.state.dataJ;
    // let email = this.state.email;
    // let password = this.state.password;
    for (let i = 0; i < data.length; i++) {
      if (
        this.state.email === data[i].user &&
        this.state.password === data[i].password
      ) {
        // this.setState({islogin: true});
        this.props.tipeLogin();
        return alert(`hi${data[i].user}`);
      }
    }
    alert('email/pasword salah');
  };

  ubahdata = (key, nilai) => {
    this.setState({[key]: nilai});
  };

  reagister = async () => {
    let user = this.state.email;
    let password = this.state.password;
    let data = this.state.dataUser;
    await this.ubahdata('dataUser', [
      ...data,
      {
        user: `${this.state.email}`,
        password: `${this.state.password}`,
      },
    ]);
    alert('data tersimpan');
    // this.state.dataUser.push({user, password});

    try {
      await AsyncStorage.setItem('data', JSON.stringify(this.state.dataUser));
    } catch (e) {
      // saving error
      alert('gagal');
    }
    // alert(this.state.dataUser[2].email);
    this.getData();
    console.info(this.state.dataJ);
  };

  Login = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30, color: '#D5DBDB'}}>Silahkan Login</Text>
        <Input
          placeholder="Email"
          onChangeText={(email) => this.setState({email: email})}
          defaultValue={this.state.email}
        />
        <Input
          placeholder="Password"
          onChangeText={(password) => this.setState({password: password})}
          defaultValue={this.state.password}
          secureTextEntry={true}
        />
        <Button title="Login" onPress={this.Validasi} />
      </View>
    );
  };

  Register = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30, color: '#D5DBDB'}}>Silahkan Register</Text>
        <Input
          placeholder="Email"
          onChangeText={(email) => this.setState({email: email})}
          defaultValue={this.state.email}
        />
        <Input
          placeholder="Password"
          onChangeText={(password) => this.setState({password: password})}
          defaultValue={this.state.password}
          secureTextEntry={true}
        />
        <Button title="Register" onPress={this.reagister} />
      </View>
    );
  };

  tes = () => {
    console.warn(this.state.islogin);
  };
  render() {
    return (
      <>
        {this.MyDrawer()}
        {/* {this.props.dataTampung} */}
      </>
    );
  }
}

const reduxState = (state) => ({
  loginState: state.Login.isLogin,
});
const mapDispatchToProps = (dispatch) => ({
  tipeLogin: () => dispatch({type: 'LOGIN'}),
});

export default connect(reduxState, mapDispatchToProps)(Menu);
