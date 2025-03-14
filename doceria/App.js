import React, { Component } from "react";
import { View, Text, Image} from 'react-native';
import { Platform } from "react-native"; // fontes
import { TouchableOpacity } from 'react-native'; //botão - estilizar botão

class App extends Component {
  //Estrutura do Botão
    constructor(props){
      super(props);
      this.state = {
        nome: ''
      };

      this.entrar = this.entrar.bind(this);
    }
    //Estrutura Interna do Botão
      entrar(nome){
        this.setState({
          nome: nome
        })
      }
  render() {

    let nome = 'Camila';

    return(
      <View style={{marginTop: 25, alignItems: "center"}}>
        <Text style={{fontFamily: Platform.select({android: 'Ovo_400Regular',ios: 'Ovo-Regular'}),color: '#B03052', fontSize: 35, margin: 10, textAlign:'center'}}>Doceria</Text>
        <Text style={{fontFamily: Platform.select({android: 'Ovo_400Regular',ios: 'Ovo-Regular'}),color: '#B03052', fontSize: 28, margin: 10, textAlign:'center' }}>Menu doceria</Text>

        {/* botão com mensagem de boas-vindas */}
        <TouchableOpacity 
          style={{ width: 200, backgroundColor: '#B03052', padding: 10, borderRadius: 5, alignItems: 'center'}} 
          onPress={() => this.entrar('Seja bem-vindo(a) ao menu da doceria!')}>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 20}}>Entrar</Text>
        </TouchableOpacity>

        {/* nome */}
        <Text style={{fontSize: 30, color: '#c44365', textAlign:'center'}}>{this.state.nome}</Text>
        <Text style={{fontSize: 25, color: '#c44365', textAlign: 'center'}}> {nome} </Text>

        <Jobs largura={200} altura={200}/>
      </View>
    );
  }
}

export default App;

// Processo de Carregamento rápido da aplicação
class Jobs extends Component {
  render() {
      let imgCupcake = 'https://images.pexels.com/photos/1055270/pexels-photo-1055270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
      let imgDonut = 'https://images.pexels.com/photos/4686962/pexels-photo-4686962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
      let imgMacaron = 'https://img.freepik.com/fotos-gratis/tres-macarons-de-sabor-variado_198174-26.jpg?t=st=1741373747~exp=1741377347~hmac=8f4fad8e8cafbadef8bb13824da5862b91419d955a8d3881e9b7041a52888952&w=740';
      let imgCookie = 'https://img.freepik.com/fotos-gratis/bolachas-de-chocolate_1401-441.jpg?t=st=1741377189~exp=1741380789~hmac=563079b0519473c86489f9aa23df6159579da5f7837160c66f948b2828e7b2e7&w=740'
      let imgBolo = 'https://images.pexels.com/photos/18160775/pexels-photo-18160775/free-photo-of-cheesecake-de-morango.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 

      return(
        <View style={{ alignItems: 'center' }}>
          <Image
          source={{uri: imgCupcake}} style={{width: this.props.largura, height: this.props.altura}}
          />
          <Text style={{color: '#c2516f', fontSize: 18, margin: 10, textAlign:'center', fontWeight: 'bold', textDecorationLine: 'underline' }}>Cupcake</Text>
          <Text style={{color: '#c2516f', fontSize: 18, margin: 10, textAlign:'center', fontFamily:'Ovo'}}>Preço: R$ 5,00</Text>

          <Image
          source={{uri: imgDonut}} style={{width: this.props.largura, height: this.props.altura}}
          />
          <Text style={{color: '#c2516f', fontSize: 18, margin: 10, textAlign:'center', fontWeight: 'bold', textDecorationLine: 'underline'}}>Donuts</Text>
          <Text style={{color: '#c2516f', fontSize: 18, margin: 10, textAlign:'center'}}>Preço: R$ 4,00</Text>

          <Image
          source={{uri: imgMacaron}} style={{width: this.props.largura, height: this.props.altura}}
          />
          <Text style={{color: '#c2516f', fontSize: 18, margin: 10, textAlign:'center', fontWeight: 'bold', textDecorationLine: 'underline'}}>Macarons</Text>
          <Text style={{color: '#c2516f', fontSize: 18, margin: 10, textAlign:'center'}}>Preço: R$ 2,50</Text>

          <Image
          source={{uri: imgCookie}} style={{width: this.props.largura, height: this.props.altura}}
          />
          <Text style={{color: '#c2516f', fontSize: 18, margin: 10, textAlign:'center', fontWeight: 'bold', textDecorationLine: 'underline'}}>Cookie</Text>
          <Text style={{color: '#c2516f', fontSize: 18, margin: 10, textAlign:'center'}}>Preço: R$ 3,00</Text>

          <Image
          source={{uri: imgBolo}} style={{width: this.props.largura, height: this.props.altura}}
          />
          <Text style={{color: '#c2516f', fontSize: 18, margin: 10, textAlign:'center', fontWeight: 'bold', textDecorationLine: 'underline'}}>Fatia de bolo</Text>
          <Text style={{color: '#c2516f', fontSize: 18, margin: 10, textAlign:'center'}}>Preço: R$ 10,00</Text>
        </View>
        
      );
  }
}