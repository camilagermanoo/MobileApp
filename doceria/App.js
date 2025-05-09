import React, { useState } from "react";
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity, StyleSheet, TextInput, Switch, Modal} from 'react-native';
import { useFonts } from 'expo-font';
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { Jost_400Regular } from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';
import { Ionicons } from '@expo/vector-icons' // icones
import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';

const App = () => {
  const [fontsLoaded] = useFonts({
    PacificoRegular: Pacifico_400Regular,
    JostRegular: Jost_400Regular,
  });

  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [carrinho, setCarrinho] = useState([]);
  const [corTexto, setCorTexto] = useState(''); 
  const [mostrarSalgados, setMostrarSalgados] = useState(false);
  const [busca, setBusca] = useState('');
  const [borderFocus, setBorderFocus] = useState(false);
  const [modalVisibleCarrinho, setModalVisibleCarrinho] = useState(false);
  const [modalVisibleLogin, setModalVisibleLogin] = useState(false);
  const [formaPagamento, setFormaPagamento] = useState("debito");
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [itemsPerPage2, setItemsPerPage2] = useState(1);
  const [isMaior, setIsMaior] = useState(false);

  {/* Calcular total do carrinho */}
const calcularTotal = () => {
  return carrinho.reduce((total, item) => {
    const precoNumerico = parseFloat(item.preco.replace("R$", "").replace(",", "."));
    return total + precoNumerico;
  }, 0).toFixed(2);
}

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const entrar = () => {
    if (nome.trim() !== '') {
      setMensagem(`Seja bem-vindo(a) ao menu da Sweet Vibes, ${nome}!`);
    } else {
      setMensagem('Por favor, insira seu nome!');
      setCorTexto('#FF0000'); // mensagem vai aparecer de cor vermelha se o nome não for válido
    }
  };

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prevCarrinho) => [...prevCarrinho, produto]);
  };

  return (
    <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
    <View style={{ flex: 1, alignItems: 'center', paddingTop: 20 }}>
      <Text style={styles.tituloPrincipal}>Sweet Vibes</Text>
      <Text style={styles.subTitulo}>Menu:</Text>

      {/* Campo para inserir nome */}
      <TextInput
        style={[styles.input, borderFocus && styles.inputFocus]}
        placeholder="Digite seu nome"
        onChangeText={setNome}
        value={nome}
        onFocus={() => setBorderFocus(true)}
        onBlur={() => setBorderFocus(false)}
      />

      {/* Botão de entrar depois de por o nome*/}
      <TouchableOpacity style={styles.botaoEntrar} onPress={entrar}>
        <Text style={styles.textoBotaoEntrar}>Entrar</Text>
      </TouchableOpacity>

      {/* Mensagem de boas-vindas */}
      {mensagem !== '' && <Text style={[styles.mensagemBoasVindas, { color: corTexto }]}>{mensagem}</Text>}
    
      {/* Switch para trocar de doce para salgado*/}
      <View style={styles.switchContainer}>
          <Text style={styles.textoSwitch}>Doces</Text>
          <Switch
            value={mostrarSalgados}
            onValueChange={() => setMostrarSalgados(!mostrarSalgados)}
          />
          <Text style={styles.textoSwitch}>Salgados</Text>
      </View>

        {/* Ícone de carrinho de compras para abrir modal*/}
        <TouchableOpacity onPress={() => setModalVisibleCarrinho(true)}>
        <Ionicons style={styles.iconeCarrinho} name="bag-sharp" size={24} color='#B03052' />
      </TouchableOpacity>

      {/* Modal do carrinho de compras*/}
      <Modal visible={modalVisibleCarrinho} animationType="fade" transparent={true}>
        <View style={styles.modalBackground}>
        <View style={styles.modalContainerCarrinho}>
          <Text style={styles.tituloModal}>Carrinho</Text>

      {/* Lista de itens no carrinho */}
      {carrinho.length > 0 ? (
        <View style={{borderWidth: 2, borderColor:'#DEDEDE', borderRadius: 5}}>
            <FlatList data={carrinho} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => (
        <View style={styles.itemCarrinho}>
          <Text style={styles.textoItemCarrinho}>{item.nome} - {item.preco}</Text>
        </View>
        )}/> </View>) : (
      <Text style={styles.textoCarrinho}>Seu carrinho está vazio.</Text>
        )}

      {/* Texto que exibe o preço total */}
      {carrinho.length > 0 && <Text style={styles.textoTotalCarrinho}>Total: R$ {calcularTotal()}</Text>}

      {/* Picker pra escolher forma de pagamento */}
      <Text style={styles.textoCarrinho}>Forma de Pagamento:</Text>
          <Picker style={styles.pickerPagamento} selectedValue={formaPagamento} onValueChange={(itemValue) => setFormaPagamento(itemValue)}>
            <Picker.Item label="Crédito" value="Cartão de Crédito" />
            <Picker.Item label="Débito" value="Cartão de Débito" />
            <Picker.Item label="Pix" value="Pix" />
            <Picker.Item label="Dinheiro" value="Dinheiro" />
          </Picker>

      {/* Imagem do pagamento */}
      <Image source={require('./assets/imagemPagamento.png')} style={styles.imagemModalCarrinho} />

      {/* Botão para fechar o modal */}
      <TouchableOpacity style={styles.botaoFechar} onPress={() => setModalVisibleCarrinho(false)}>
        <Text style={styles.textoBotaoFechar}>Fechar</Text>
      </TouchableOpacity>
      </View>
    </View>
    </Modal>

        {/* Ícone do login para abrir modal*/}
        <TouchableOpacity onPress={() => setModalVisibleLogin(true)}>
          <Ionicons style={styles.iconeLogin} name="person" size={24} color='#B03052' />
        </TouchableOpacity>

        <Modal visible={modalVisibleLogin} animationType="fade" transparent={true}>
          <View style={styles.modalBackground}>
          <View style={styles.modalContainerLogin}>
      
          <Text style={styles.tituloModal}>Cadastro</Text>
          <Text style={styles.textoDescontoLogin}>Com cadastro em nosso aplicativo você ganha descontos!</Text>

          <View style={styles.containerCampos}>
          <Text style={styles.labelCampo}>Digite seu nome completo:</Text>
          <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#A0A0A0" />

        <Text style={styles.labelCampo}>Digite seu email:</Text>
        <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#A0A0A0" />

        <Text style={styles.labelCampo}>Crie sua senha:</Text>
        <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#A0A0A0" secureTextEntry />
      </View>

      <View style={styles.containerSwitch}>
        <Text style={styles.labelCampo}>Você é maior de idade?</Text>
        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>Não</Text>
          <Switch value={isMaior} onValueChange={setIsMaior} trackColor={{ false: "#ccc", true: "#ff7faa" }} thumbColor={isMaior ? "#d6336c" : "#888"} />
          <Text style={styles.switchLabel}>Sim</Text>
        </View>
      </View>

      <Text style={styles.labelCampo}>O quanto você gostou do nosso aplicativo de 1 a 10?</Text>
      <View style={styles.containerSlider}>
        <Text style={styles.numeroSlider}>1</Text>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={10}
          step={1}
          value={itemsPerPage}
          onValueChange={setItemsPerPage}
          minimumTrackTintColor="#d6336c"
          maximumTrackTintColor="#ccc"
          thumbTintColor="#d6336c"
        />
        <Text style={styles.numeroSlider}>10</Text>
      </View>

      {/* Botão para fechar o modal */}
      <TouchableOpacity style={styles.botaoFechar} onPress={() => setModalVisibleLogin(false)}>
        <Text style={styles.textoBotaoFechar}>Fechar</Text>
      </TouchableOpacity>

    </View>
  </View>
</Modal>

    {mostrarSalgados ? <Salgados onAddCarrinho={adicionarAoCarrinho} busca={busca} /> : <Doces onAddCarrinho={adicionarAoCarrinho} busca={busca} />}

      <Lista />
      </View>
    </ScrollView>
  );
};

// Componente do card onde exibe os produtos com nome e preço
const Card = ({ imagem, nome, preco, onAdd }) => {
  return (
    <View style={styles.cardProdutos}>
      <Image source={{ uri: imagem }} style={styles.imagem} />
      <Text style={styles.tituloProdutos}>{nome}</Text>
      <Text style={styles.precoProduto}>Preço: {preco}</Text>
      <TouchableOpacity style={styles.botaoAdicionar} onPress={onAdd}>
        <Text style={styles.textoBotaoAdicionar}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
};

// Componente para exibir os produtos
const Doces = ({ onAddCarrinho, busca }) => {
  const produtos = [
    { nome: "Cupcake", preco: "R$ 5,00", imagem: "https://images.pexels.com/photos/1055270/pexels-photo-1055270.jpeg" },
    { nome: "Donuts", preco: "R$ 4,00", imagem: "https://images.pexels.com/photos/4686962/pexels-photo-4686962.jpeg" },
    { nome: "Macarons", preco: "R$ 2,50", imagem: "https://img.freepik.com/fotos-gratis/tres-macarons-de-sabor-variado_198174-26.jpg" },
    { nome: "Cookie", preco: "R$ 3,00", imagem: "https://img.freepik.com/fotos-gratis/bolachas-de-chocolate_1401-441.jpg" },
    { nome: "Fatia de bolo", preco: "R$ 10,00", imagem: "https://images.pexels.com/photos/18160775/pexels-photo-18160775.jpeg" }
  ];

  const produtosFiltrados = produtos.filter(produto => produto.nome.toLowerCase().includes(busca.toLowerCase()));

  return (
    <View style={{ alignItems: "center" }}>
      {produtosFiltrados.map((item, index) => (
        <Card key={index} {...item} onAdd={() => onAddCarrinho(item)} />
      ))}
    </View>
  );
};

const Salgados = ({ onAddCarrinho, busca }) => {
  const produtos = [
    { nome: "Coxinha", preco: "R$ 5,00", imagem: "https://img.freepik.com/fotos-gratis/comida-brasileira-no-prato-alto_23-2148875245.jpg?ga=GA1.1.1641917442.1743164069&semt=ais_hybrid"},
    { nome: "Enroladinho", preco: "R$ 10,00", imagem: "https://img.freepik.com/fotos-gratis/vista-de-cima-pulseiras-deliciosas-e-doces-com-recheio-na-mesa-de-madeira-cinza-doce-com-acucar-pastelaria-cha_140725-30998.jpg?ga=GA1.1.1641917442.1743164069&semt=ais_hybrid"},
    { nome: "Pão de queijo", preco: "R$ 2,50", imagem: "https://img.freepik.com/fotos-gratis/delicioso-arranjo-de-doces-mexicanos_23-2150172311.jpg?ga=GA1.1.1641917442.1743164069&semt=ais_hybrid"},
    { nome: "Empadinha", preco: "R$ 4,00", imagem: "https://cdn.casaeculinaria.com/wp-content/uploads/2023/08/23123947/Empada-de-frango.webp"},
    { nome: "Esfirra", preco: "R$ 6,00", imagem: "https://img.freepik.com/fotos-gratis/rissois-com-batatas-e-cogumelos_2829-11547.jpg?ga=GA1.1.1641917442.1743164069&semt=ais_hybrid"},
  ]

  const produtosFiltrados = produtos.filter(produto => produto.nome.toLowerCase().includes(busca.toLowerCase()));

  return (
    <View style={{ alignItems: "center" }}>
      {produtosFiltrados.map((item, index) => (
        <Card key={index} {...item} onAdd={() => onAddCarrinho(item)} />
      ))}
    </View>
  );
}

// Componente para exibir os funcionários
const Lista = () => {
  const [selecionado, setSelecionado] = useState(null);
  const feed = [
    { id: '1', nome: 'João', profissao: 'Confeiteiro', descricao: 'Desde pequeno, João se encantava com os doces feitos por sua avó. Cresceu experimentando receitas e desenvolvendo técnicas até se tornar um confeiteiro talentoso. Seu amor pela confeitaria vem da alegria de criar sobremesas que encantam os clientes.', imagem:"https://img.freepik.com/fotos-gratis/chef-masculino-decorando-uma-deliciosa-sobremesa-no-prato_23-2147863807.jpg?uid=R190518562&ga=GA1.1.2083948576.1741373729&semt=ais_hybrid" },
    { id: '2', nome: 'Maria', profissao: 'Confeiteira', descricao: 'Maria sempre teve paixão pela arte de decorar bolos e criar doces especiais. Escolheu a confeitaria porque ama transformar ingredientes simples em verdadeiras obras-primas saborosas, tornando momentos especiais ainda mais doces.', imagem:"https://img.freepik.com/fotos-gratis/pessoas-cozinhando-e-desfrutando-de-comida_23-2149257448.jpg?uid=R190518562&ga=GA1.1.2083948576.1741373729&semt=ais_hybrid" },
    { id: '3', nome: 'Fernanda', profissao: 'Caixa', descricao: 'Fernanda gosta de organização e atendimento ao público, e por isso escolheu trabalhar como caixa. Sua atenção aos detalhes garante que cada pedido seja registrado corretamente, proporcionando uma experiência tranquila e eficiente para os clientes.', imagem:"https://img.freepik.com/fotos-gratis/trabalhador-de-supermercado-medindo-e-vendendo-carne-para-o-cliente_342744-1074.jpg?uid=R190518562&ga=GA1.1.2083948576.1741373729&semt=ais_hybrid" },
    { id: '4', nome: 'Pedro', profissao: 'Garçom', descricao: 'Pedro sempre foi comunicativo e gostava de interagir com pessoas. Escolheu ser garçom porque adora oferecer um atendimento acolhedor, garantindo que os clientes tenham uma experiência agradável e sintam-se bem recebidos.', imagem:"https://img.freepik.com/fotos-gratis/servimos-os-melhores-bolos_637285-7884.jpg?uid=R190518562&ga=GA1.1.2083948576.1741373729&semt=ais_hybrid" },
    { id: '5', nome: 'Paulo', profissao: 'Motoboy', descricao: 'Paulo ama a liberdade de estar nas ruas e sempre foi apaixonado por motos. Tornou-se motoboy porque gosta da adrenalina do trânsito e da satisfação de entregar pedidos com rapidez e eficiência, garantindo que cada cliente receba sua encomenda no tempo certo.', imagem: "https://img.freepik.com/fotos-gratis/jovem-adulto-levar-e-conceito-de-entrega_1194-589238.jpg?uid=R190518562&ga=GA1.1.2083948576.1741373729&semt=ais_hybrid"},
    { id: '6', nome: 'José', profissao: 'Padeiro', descricao: 'oi', imagem: "https://img.freepik.com/fotos-gratis/barista-amigavel-de-avental-preto-dando-pedidos-de-comida-para-viagem-segurando-duas-xicaras-de-cafe-e-sorrindo-de-pe-sobre-um-fundo-amarelo_1258-73701.jpg?t=st=1743164227~exp=1743167827~hmac=274d3df551ccf38574ada1ee61180136b0f150cf9b56359127407bac850034c9&w=996"}
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
  input: { // campo para adicionar nome
    width: 200,
    height: 40,
    borderColor: '#B03052',
    borderWidth: 3,
    borderRadius: 7,
    padding: 10,
    textAlign: 'center',
    marginBottom: 20,
  },
  botaoEntrar: {
    width: 200,
    backgroundColor: '#B03052',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20
  },
  textoBotaoEntrar: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'JostRegular',
  },
  mensagemBoasVindas: {
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
  cardProdutos: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFEDFA',
    elevation: 7,
    width: 220,
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
     //sombra para android
    elevation: 7,
    //sombra pra ios 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,

  },
  imagem: {
    width: '100%',
    height: 150,
    borderRadius: 10
  },
  tituloProdutos: { 
    fontSize: 16,
    fontWeight: 'bold',
    color: '#C2516F',
    marginTop: 10,
    fontFamily: 'JostRegular',
  },
  precoProduto: {
    fontSize: 14,
    color: '##bdbdbd',
  },
  descricaoProdutos: {
    fontSize: 14,
    color: '#C2516F',
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
    margin: 15,
     //sombra para android
    elevation: 7,
    //sombra pra ios 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  nomeLista: {
    fontSize: 16,
    color: '#C2516F',
    textAlign: "center",
    fontFamily: 'JostRegular',
    textDecorationLine: 'underline',
  },
  imagemLista: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  },
  descricaoFuncionario: {
    fontSize: 14,
    color: '#C2516F',
    textAlign: 'center',
    fontFamily: 'JostRegular',
    marginTop: 5,
    backgroundColor: '#FFEDFA',
    padding: 10,
    borderRadius: 5,
    width: 150, 
    alignSelf: 'center',
    textAlign: 'center'
  },
  botaoAdicionar: {
    width: 200,
    backgroundColor: '#B03052',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  textoBotaoAdicionar: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'JostRegular',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  textoSwitch: {
    fontSize: 18,
    marginHorizontal: 10,
    color: '#B03052',
    fontFamily: 'JostRegular',
  },
  inputFocus: {
    borderColor: '#B03052'
  },
  modalContainerCarrinho: {
    backgroundColor: '#FFF0F5',
    borderRadius: 20,
    padding: 20,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  imagemModalCarrinho: {
    width: 100,
    height: 100,
    marginTop: 20,
    resizeMode: 'contain',
  },
  modalContainerLogin: {
    backgroundColor: '#FFF0F5',
    borderRadius: 20,
    padding: 20,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  botaoFechar: {
    backgroundColor: '#d6336c',
    borderRadius: 10,
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  textoBotaoFechar: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'JostRegular',
  },
  tituloModal: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#c2185b',
    fontFamily: 'Cursive',
    marginBottom: 20,
  },
  textoConteudoModal: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'JostRegular',
  },
  containerCampos: {
    width: '80%',        
    alignItems: 'center',    
    justifyContent: 'center',
    marginTop: 20,
  },
  labelCampo: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    marginTop: 15,
  },
  iconeCarrinho: {
    position: 'absolute',
    top: -260,
    left: 120,
  },
  iconeLogin: {
    position: 'absolute',
    top: -260,
    right: 120
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemCarrinho: {
    padding: 8,
    alignItems: 'center',
  },
  textoItemCarrinho: {
    fontSize: 18,
    color: '#333',
    fontFamily: 'JostRegular',
  },
  textoTotalCarrinho: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#c2185b',
    marginTop: 20,
    fontFamily: 'JostRegular',
  },
  textoCarrinho: {
    fontSize: 18,
    color: '#333',
    marginTop: 20,
    marginBottom: 5,
    fontFamily: 'JostRegular',
  },
  pickerPagamento: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#F8BBD0',
    borderRadius: 8,
    width: '100%',
    height: 50,
    marginTop: 10,
    paddingLeft: 10,
  },
  textoDescontoLogin: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'JostRegular',
  },
  inputCadastro: {
    width: 200,
    height: 40,
    borderColor: '#B03052',
    borderWidth: 3,
    borderRadius: 7,
    padding: 10,
    textAlign: 'center',
    marginBottom: 20,
  },
  containerLogin: {
    justifyContent: 'center', 
    alignItems: 'center',
  },
  containerSlider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 20,
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
  switchContainerIdade: {
    flexDirection: 'column', 
    alignItems: 'center', 
    marginTop: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  containerSwitch: {
    marginTop: 20,
    alignItems: 'center',
  },
  switchRow:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  switchLabel: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },
  numeroSlider:{
    width: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  }
});

export default App;
