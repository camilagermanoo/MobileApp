import React, { Component } from "react";
import { View, Text, Image} from 'react-native';
import { Platform } from "react-native"; // fontes

class App extends Component {
  render() {
    return(
      <View>
        <Text style={{color: '#BE5985', fontSize: 25, margin: 10}}>Projeto de doceria</Text>
        <Text style={{color: '#BE5985', fontSize: 23, margin: 10}}>Doceria</Text>
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
        <View>
          <Image
          source={{uri: imgCupcake}} style={{width: this.props.largura, height: this.props.altura}}
          />
          <Text style={{color: '#F37199', fontSize: 18, margin: 10}}>Cupcake</Text>
          <Text style={{color: '#F37199', fontSize: 18, margin: 10}}>Preço: R$ 5,00</Text>

          <Image
          source={{uri: imgDonut}} style={{width: this.props.largura, height: this.props.altura}}
          />
          <Text style={{color: '#F37199', fontSize: 18, margin: 10}}>Donuts</Text>
          <Text style={{color: '#F37199', fontSize: 18, margin: 10}}>Preço: R$ 4,00</Text>

          <Image
          source={{uri: imgMacaron}} style={{width: this.props.largura, height: this.props.altura}}
          />
          <Text style={{color: '#F37199', fontSize: 18, margin: 10}}>Macarons</Text>
          <Text style={{color: '#F37199', fontSize: 18, margin: 10}}>Preço: R$ 1,50</Text>

          <Image
          source={{uri: imgCookie}} style={{width: this.props.largura, height: this.props.altura}}
          />
          <Text style={{color: '#F37199', fontSize: 18, margin: 10}}>Cookie</Text>
          <Text style={{color: '#F37199', fontSize: 18, margin: 10}}>Preço: R$ 3,00</Text>

          <Image
          source={{uri: imgBolo}} style={{width: this.props.largura, height: this.props.altura}}
          />
          <Text style={{color: '#F37199', fontSize: 18, margin: 10}}>Fatia de bolo</Text>
          <Text style={{color: '#F37199', fontSize: 18, margin: 10}}>Preço: R$ 10,00</Text>
        </View>
        
      );
  }
}