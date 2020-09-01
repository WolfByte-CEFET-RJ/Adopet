import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
} from 'react-native';

import Modal2 from '../../../components/Modal';
import Button from '../../../components/Button';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        modalVisible: false,
     };
    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }

  entrar(){
      this.setState({modalVisible: true});
  }

  sair(visible){
      this.setState({modalVisible: visible});
  }

  render(){
    return(
      <View style={styles.container}>

          <Button
            onPress={() => {this.entrar()}}
            text='Entrar'
            colors={['#12947F','#0AB599']}
          />

          <Modal transparent={true} animationType='fade' visible={this.state.modalVisible}>
            <View style={{margin:15, flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Modal2 fechar={ () => this.sair(false)} />
            </View>
          </Modal>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
});
