import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Card = ({titulo, descricao}) => {
    return(
    <View style={styles.card}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
    </View>
    );
};

export default function App() {
return(
    <View style={styles.bordacard}>
        <Card titulo="Filme XY" descricao="Este filme é um exemplo de vida"/>
        <Card titulo="Filme XY" descricao="Este filme é um exemplo de vida"/>
        
    </View>
);
}

const styles = StyleSheet.create({
    card: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: 'grey',
        shadowOffset: {width: 0, height: 3},
        elevation: 7,
    },

    titulo: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Big Shoulders Stencil',
    },

    descricao: {
        fontSize: 12,
    },

    bordacard: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'green',
    },
});