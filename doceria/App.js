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
      setMensagem(`Seja bem-vindo(a) ao menu da Sweet Vibes, ${nome}!`);
    } else {
      setMensagem('Por favor, insira seu nome!');
    }
  };

  return (
    <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
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

      {/* Botão de entrar */}
      <TouchableOpacity style={styles.botao} onPress={entrar}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>

      {/* Mensagem de boas-vindas */}
      {mensagem !== '' && <Text style={styles.mensagem}>{mensagem}</Text>}

        <Jobs />
        <Lista />
    </View>
    </ScrollView>
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
    { id: '1', nome: 'João', profissao: 'Confeiteiro', imagem:"https://img.freepik.com/fotos-gratis/chef-masculino-decorando-uma-deliciosa-sobremesa-no-prato_23-2147863807.jpg?uid=R190518562&ga=GA1.1.2083948576.1741373729&semt=ais_hybrid" },
    { id: '2', nome: 'Maria', profissao: 'Confeiteira', imagem:"https://img.freepik.com/fotos-gratis/pessoas-cozinhando-e-desfrutando-de-comida_23-2149257448.jpg?uid=R190518562&ga=GA1.1.2083948576.1741373729&semt=ais_hybrid" },
    { id: '3', nome: 'Fernanda', profissao: 'Caixa', imagem:"https://img.freepik.com/fotos-gratis/trabalhador-de-supermercado-medindo-e-vendendo-carne-para-o-cliente_342744-1074.jpg?uid=R190518562&ga=GA1.1.2083948576.1741373729&semt=ais_hybrid" },
    { id: '4', nome: 'Pedro', profissao: 'Garçom', imagem:"https://img.freepik.com/fotos-gratis/servimos-os-melhores-bolos_637285-7884.jpg?uid=R190518562&ga=GA1.1.2083948576.1741373729&semt=ais_hybrid" },
    { id: '5', nome: 'Paulo', profissao: 'Motoboy', imagem: "https://img.freepik.com/fotos-gratis/jovem-adulto-levar-e-conceito-de-entrega_1194-589238.jpg?uid=R190518562&ga=GA1.1.2083948576.1741373729&semt=ais_hybrid"},
  ];


  return (
    <View style={styles.container}>
      <FlatList
        data={feed}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listaItem}>
            <Image source={{ uri: item.imagem }} style={styles.imagemLista} />
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
    borderWidth: 3,
    borderRadius: 7,
    padding: 10,
    textAlign: 'center',
    marginBottom: 20,
    color: '#DBDBDB',
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
    fontSize: 20,
    fontFamily: 'JostRegular',
  },
  mensagem: {
    fontSize: 18,
    color: '#B03052',
    textAlign: 'center',
    fontFamily: 'JostRegular', 
    padding: 10,
    backgroundColor: '#FFEDFA', 
    borderRadius: 10, 
    elevation: 5, 
    width: 220, 
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
    borderRadius: 10
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
    marginTop: 5
  },
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  listaItem: {
    backgroundColor: '#FFEDFA',
    padding: 15, 
    marginVertical: 5,
    borderRadius: 10, 
    flexDirection: 'row',
    alignItems: 'center',
    width: 220, 
    justifyContent: "flex-start", 
    elevation: 7,
  },
  nomeLista: {
    fontSize: 16,
    color: '#c2516f',
    textAlign: "center",
    fontFamily: 'JostRegular',
  },
  imagemLista: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  }
});

export default App;
