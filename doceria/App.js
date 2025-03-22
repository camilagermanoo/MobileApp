import React, { useState } from "react";
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { Jost_400Regular } from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';

const App = () => {
  const [fontsLoaded] = useFonts({
    PacificoRegular: Pacifico_400Regular,
    JostRegular: Jost_400Regular,
  });

  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const entrar = () => {
    if (nome.trim() !== '') {
      setMensagem(`Seja bem-vindo(a) ao menu da doceria, ${nome}!`);
    } else {
      setMensagem('Por favor, insira seu nome!');
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', paddingTop: 20 }}>
      <Text style={styles.tituloPrincipal}>Confeitaria Sweet Vibes</Text>
      <Text style={styles.subTitulo}>Menu:</Text>

      {/* Campo para inserir nome */}
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        onChangeText={setNome}
        value={nome}
      />

      {/* Botão de entrada */}
      <TouchableOpacity style={styles.botao} onPress={entrar}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>

      {/* Mensagem de boas-vindas */}
      {mensagem !== '' && <Text style={styles.mensagem}>{mensagem}</Text>}

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <Jobs />
        <Lista />
      </ScrollView>
    </View>
  );
};

// Componente do card para exibir as informações
const Card = ({ imagem, nome, preco }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imagem }} style={styles.imagem} />
      <Text style={styles.titulo}>{nome}</Text>
      <Text style={styles.descricao}>Preço: {preco}</Text>
    </View>
  );
};

// Componente para exibir os produtos
const Jobs = () => {
  const produtos = [
    { nome: "Cupcake", preco: "R$ 5,00", imagem: "https://images.pexels.com/photos/1055270/pexels-photo-1055270.jpeg" },
    { nome: "Donuts", preco: "R$ 4,00", imagem: "https://images.pexels.com/photos/4686962/pexels-photo-4686962.jpeg" },
    { nome: "Macarons", preco: "R$ 2,50", imagem: "https://img.freepik.com/fotos-gratis/tres-macarons-de-sabor-variado_198174-26.jpg" },
    { nome: "Cookie", preco: "R$ 3,00", imagem: "https://img.freepik.com/fotos-gratis/bolachas-de-chocolate_1401-441.jpg" },
    { nome: "Fatia de bolo", preco: "R$ 10,00", imagem: "https://images.pexels.com/photos/18160775/pexels-photo-18160775.jpeg" }
  ];

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      {produtos.map((item, index) => (
        <Card key={index} imagem={item.imagem} nome={item.nome} preco={item.preco} />
      ))}
    </View>
  );
};

// Componente para exibir os clientes
const Lista = () => {
  const feed = [
    { id: '1', nome: 'João', profissao: 'Confeiteiro' },
    { id: '2', nome: 'Maria', profissao: 'Confeiteira' },
    { id: '3', nome: 'José', profissao: 'Caixa' },
    { id: '4', nome: 'Ana', profissao: 'Garçonete' }
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={feed}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listaItem}>
            <Text style={styles.nomeLista}>{item.nome} - {item.profissao}</Text>
          </View>
        )}
      />
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  tituloPrincipal: {
    color: '#B03052',
    fontSize: 35,
    textAlign: 'center',
    fontFamily: 'PacificoRegular',
  },
  subTitulo: {
    color: '#B03052',
    fontSize: 28,
    margin: 10,
    textAlign: 'center',
    fontFamily: 'PacificoRegular',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: '#B03052',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    textAlign: 'center',
    marginBottom: 20
  },
  botao: {
    width: 200,
    backgroundColor: '#B03052',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20
  },
  textoBotao: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20
  },
  mensagem: {
    fontSize: 20,
    color: '#c44365',
    textAlign: 'center',
    marginTop: 20
  },
  scroll: {
    width: '100%'
  },
  card: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFEDFA',
    elevation: 7,
    width: 220,
    alignItems: "center",
    justifyContent: "center",
    margin: 15
  },
  imagem: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#c2516f',
    marginTop: 10,
    fontFamily: 'JostRegular',
  },
  descricao: {
    fontSize: 14,
    color: '#c2516f',
    marginTop: 5,
    fontFamily: 'JostRegular',
  },
  container: {
    flex: 1,
    padding: 10
  },
  listaItem: {
    backgroundColor: '#FFEDFA',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  nomeLista: {
    fontSize: 16,
    color: '#c2516f',
    textAlign: "center",
    fontFamily: 'JostRegular',
  }
});

export default App;
