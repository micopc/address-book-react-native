import React from 'react';

import axios from 'axios';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button
} from 'react-native';

import Input from '../components/Input';

import { API_URL } from '../config/variables';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  btn: {
    paddingVertical: 20,
  },
});

class Form extends React.Component {
  static navigationOptions = {
    title: 'Nuevo Contacto'
  }

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
    };
  }

  onSavePress = () => {
    console.log(this.props);
    axios({
      method: 'POST',
      url: API_URL + '/api/contacts',
      headers: {
        'Api-Key': '1720074127',
        'Content-Type': 'application/json',
      },
      data: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phone: this.state.phone,
      },
    }).then((response) => {
      console.log(response);
      this.props.navigation.state.params.getContacts();
      this.props.navigation.goBack();
    })
    .catch((error) => {
      console.log(error, error.response);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text>INGRESE LOS DATOS:</Text>
        </View>
        <Input
          label="Nombre"
          value={this.state.firstName}
          onChange={(firstName) => this.setState({ firstName })}
        />
        <Input
          label="Apellido"
          value={this.state.lastName}
          onChange={(lastName) => this.setState({ lastName })}
        />
        <Input
          label="Teléfono"
          value={this.state.phone}
          onChange={(phone) => this.setState({ phone })}
        />
        <View style={styles.btn}>
          <Button
            onPress={this.onSavePress}
            style={styles.btn}
            title="Guardar"
          />
        </View>
      </View>
    )
  }
}

export default Form;