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
    <View style={{ alignItems: "center", justifyContent: "center", }}>
      {produtos.map((item, index) => (
        <Card key={index} imagem={item.imagem} nome={item.nome} preco={item.preco} />
      ))}
    </View>
  );
};

// Componente para exibir os funcionários
const Lista = () => {
  const [selecionado, setSelecionado] = useState(null);
  const feed = [
    { id: '1', nome: 'João', profissao: 'Confeiteiro', descricao: 'Desde pequeno, João se encantava com os doces feitos por sua avó. Cresceu experimentando receitas e desenvolvendo técnicas até se tornar um confeiteiro talentoso. Seu amor pela confeitaria vem da alegria de criar sobremesas que encantam os clientes.', imagem:"https://img.freepik.com/fotos-gratis/chef-masculino-decorando-uma-deliciosa-sobremesa-no-prato_23-2147863807.jpg?uid=R190518562&ga=GA1.1.2083948576.1741373729&semt=ais_hybrid" },
    { id: '2', nome: 'Maria', profissao: 'Confeiteira', descricao: 'Maria sempre teve paixão pela arte de decorar bolos e criar doces especiais. Escolheu a confeitaria porque ama transformar ingredientes simples em verdadeiras obras-primas saborosas, tornando momentos especiais ainda mais doces.', imagem:"https://img.freepik.com/fotos-gratis/pessoas-cozinhando-e-desfrutando-de-comida_23-2149257448.jpg?uid=R190518562&ga=GA1.1.2083948576.1741373729&semt=ais_hybrid" },
    { id: '3', nome: 'Fernanda', profissao: 'Caixa', descricao: 'Fernanda gosta de organização e atendimento ao público, e por isso escolheu trabalhar como caixa. Sua atenção aos detalhes garante que cada pedido seja registrado corretamente, proporcionando uma experiência tranquila e eficiente para os clientes.', imagem:"https://img.freepik.com/fotos-gratis/trabalhador-de-supermercado-medindo-e-vendendo-carne-para-o-cliente_342744-1074.jpg?uid=R190518562&ga=GA1.1.2083948576.1741373729&semt=ais_hybrid" },
    { id: '4', nome: 'Pedro', profissao: 'Garçom', descricao: 'Pedro sempre foi comunicativo e gostava de interagir com pessoas. Escolheu ser garçom porque adora oferecer um atendimento acolhedor, garantindo que os clientes tenham uma experiência agradável e sintam-se bem recebidos.', imagem:"https://img.freepik.com/fotos-gratis/servimos-os-melhores-bolos_637285-7884.jpg?uid=R190518562&ga=GA1.1.2083948576.1741373729&semt=ais_hybrid" },
    { id: '5', nome: 'Paulo', profissao: 'Motoboy', descricao: 'Paulo ama a liberdade de estar nas ruas e sempre foi apaixonado por motos. Tornou-se motoboy porque gosta da adrenalina do trânsito e da satisfação de entregar pedidos com rapidez e eficiência, garantindo que cada cliente receba sua encomenda no tempo certo.', imagem: "https://img.freepik.com/fotos-gratis/jovem-adulto-levar-e-conceito-de-entrega_1194-589238.jpg?uid=R190518562&ga=GA1.1.2083948576.1741373729&semt=ais_hybrid"},
  ];


  return (
    <View style={styles.container}>
      <Text style={styles.subTitulo}>Nossos funcionários:</Text>
      <FlatList
        data={feed}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelecionado(selecionado === item.id ? null : item.id)}>
            <View style={[styles.listaItem, selecionado === item.id && styles.listaItemExpandido]}>
              <Image source={{ uri: item.imagem }} style={styles.imagemLista} />
              <View style={styles.textoContainer}>
                <Text style={styles.nomeLista}>{item.nome} - {item.profissao}</Text>
                {selecionado === item.id && (
                  <Text style={styles.descricaoFuncionario}>{item.descricao}</Text>
                )}
              </View>
            </View>
          </TouchableOpacity>
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
  },
  descricaoFuncionario: {
    fontSize: 14,
    color: '#c2516f',
    textAlign: 'center',
    fontFamily: 'JostRegular',
    marginTop: 5,
    backgroundColor: '#FFEDFA',
    padding: 10,
    borderRadius: 5,
    width: 150, 
    alignSelf: 'center',
    textAlign: 'center'
  }
});

export default App;
