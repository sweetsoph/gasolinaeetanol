import { StatusBar } from 'expo-status-bar';
import { React, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const[vlEtanol, setVlEtanol] = useState();
  const[vlGasolina, setVlGasolina] = useState();
  const[vlResultado, setVlResultado] = useState();

  function verificaResultado(){
    setVlResultado (parseFloat(vlEtanol) / parseFloat(vlGasolina));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>ETANOL OU GASOLINA?</Text>
      <Text style={styles.subtexto}>Sabemos que, no dia de hoje, abastecer um veículo é uma tarefa que exige uma certa informação sobre preços, pois a escolha certa do tipo de combustível pode ser muitas vezes essencial para que possamos utilizar o veículo com tranquilidade com o que temos em mãos. É por isso então que vamos calcular o que vale mais a pena: Etanol ou Gasolina!</Text>
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Valor da Gasolina</Text>
          <TextInput 
            style={styles.input}
            keyboardType="numeric"
            value={valor1}
            onChangeText={(texto)=>setValor1(texto)}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontSize: 45,
    color: '#DB9344',
    fontFamily: 'fantasy'
  },
  subtexto:{
    fontSize: 45,
    color: '#000',
    fontFamily: 'fantasy'
  },
  textoBloco:{
    fontSize:30,
    color: '#37259C',
    fontFamily: 'monospace'
  },
  input:{
    borderColor:'#000',
    borderWidth:2,
    fontSize:30,
    width:'80%'
  },
  bloco:{
    width:'100%',
    alignItems:'center',
    marginTop:30
  },
  botao:{
    backgroundColor:'#DB9344',
    width:'80%',
    textAlign:'center'
  },
  textoBotao:{
    color:"#fff",
    fontSize:30
  }
});
