import React, { Component } from "react";
import { View, Text, Image} from 'react-native';
import { TouchableOpacity } from 'react-native'; //botão - estilizar botão
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      mensagem: ''
    };
  }

  entrar = () => {
    if (this.state.nome.trim() !== '') {
      this.setState({ mensagem: `Seja bem-vindo(a) ao menu da doceria, ${this.state.nome}!` });
    } else {
      this.setState({ mensagem: 'Por favor, insira seu nome!' });
    }
  };

  render() {
    return (
      <View style={{ marginTop: 25, alignItems: 'center' }}>
        <Text style={{ color: '#B03052', fontSize: 35, margin: 10, textAlign: 'center' }}>Doceria</Text>
        <Text style={{ color: '#B03052', fontSize: 28, margin: 10, textAlign: 'center' }}>Menu doceria</Text>

        {/* Campo para inserir nome */}
        <TextInput
          style={{ width: 200, height: 40, borderColor: '#B03052', borderWidth: 1, borderRadius: 5, padding: 10, textAlign: 'center', marginBottom: 10 }}
          placeholder="Digite seu nome"
          onChangeText={(text) => this.setState({ nome: text })}
          value={this.state.nome}
        />

        {/* Botão de entrada */}
        <TouchableOpacity
          style={{ width: 200, backgroundColor: '#B03052', padding: 10, borderRadius: 5, alignItems: 'center' }}
          onPress={this.entrar}
        >
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>Entrar</Text>
        </TouchableOpacity>

        {/* Mensagem de boas-vindas */}
        {this.state.mensagem !== '' && (
          <Text style={{ fontSize: 30, color: '#c44365', textAlign: 'center', marginTop: 20 }}>{this.state.mensagem}</Text>
        )}

      <Jobs width={200} height={200}/>
      </View>
    );
  }
}

// Componente do card para exibir as informações
const Card = ({ imagem, nome, preco }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{uri: imagem}} 
        style={{width: '100%', height: 150, borderRadius: 10}} 
      />
      <Text style={styles.titulo}>{nome}</Text>
      <Text style={styles.descricao}>Preço: {preco}</Text>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFEDFA',
    elevation: 7,
    width: 220,
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#c2516f',
    marginTop: 10,
  },
  descricao: {
    fontSize: 14,
    color: '#c2516f',
    marginTop: 5,
  },
  bordacard: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'green',
  },
});

// Componente para exibir os produtos
class Jobs extends Component {
  render() {
    let imgCupcake = 'https://images.pexels.com/photos/1055270/pexels-photo-1055270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    let imgDonut = 'https://images.pexels.com/photos/4686962/pexels-photo-4686962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    let imgMacaron = 'https://img.freepik.com/fotos-gratis/tres-macarons-de-sabor-variado_198174-26.jpg?t=st=1741373747~exp=1741377347~hmac=8f4fad8e8cafbadef8bb13824da5862b91419d955a8d3881e9b7041a52888952&w=740';
    let imgCookie = 'https://img.freepik.com/fotos-gratis/bolachas-de-chocolate_1401-441.jpg?t=st=1741377189~exp=1741380789~hmac=563079b0519473c86489f9aa23df6159579da5f7837160c66f948b2828e7b2e7&w=740';
    let imgBolo = 'https://images.pexels.com/photos/18160775/pexels-photo-18160775/free-photo-of-cheesecake-de-morango.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

    return(
      <View style={{flexDirection: 'column', flexWrap: 'wrap', alignItems: "center", justifyContent: "center"}}>
        <Card imagem={imgCupcake} nome="Cupcake" preco="R$ 5,00" />
        <Card imagem={imgDonut} nome="Donuts" preco="R$ 4,00" />
        <Card imagem={imgMacaron} nome="Macarons" preco="R$ 2,50" />
        <Card imagem={imgCookie} nome="Cookie" preco="R$ 3,00" />
        <Card imagem={imgBolo} nome="Fatia de bolo" preco="R$ 10,00" />
      </View>
    );
  }
}

export default App;
