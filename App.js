import { React, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const[vlEtanol, setVlEtanol] = useState();
  const[vlGasolina, setVlGasolina] = useState();
  const[vlResultado, setVlResultado] = useState();
  const[txtMensagem, setTxtMensagem] = useState();

  function verificaResultado(){
    let diferenca = (parseFloat(vlEtanol) / parseFloat(vlGasolina));
    setVlResultado (diferenca.toFixed(2));
    if(diferenca <= 0.7){
      setTxtMensagem("É mais vantajoso abastecer com álcool.");
    }else{
      setTxtMensagem("É mais vantajoso abastecer com gasolina.");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>ETANOL OU GASOLINA?</Text>
      <Text style={styles.subtexto}>Sabemos que, no dia de hoje, abastecer um veículo é uma tarefa que exige uma certa informação sobre preços, pois a escolha certa do tipo de combustível pode ser muitas vezes essencial para que possamos utilizar o veículo com tranquilidade com o que temos em mãos. É por isso então que vamos calcular o que vale mais a pena: Etanol ou Gasolina!</Text>
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Valor do Etanol</Text>
          <TextInput 
            style={styles.input}
            keyboardType="numeric"
            value={vlEtanol}
            onChangeText={(texto)=>setVlEtanol(texto)}
          />
      </View>
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Valor da Gasolina</Text>
          <TextInput 
            style={styles.input}
            keyboardType="numeric"
            value={vlGasolina}
            onChangeText={(texto)=>setVlGasolina(texto)}
          />
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
          style={styles.botao}
          onPress={verificaResultado}
          >
            <Text style={styles.textoBotao}>Verificar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
            <Text style={styles.textoBloco}>Resultado: {vlResultado}. {txtMensagem}</Text>
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
  titulo:{
    fontSize: 35,
    color: '#FFF',
    backgroundColor:'#9DD5FA',
    width: '100%',
    textAlign: 'center',
    marginBottom: -10,
    marginTop: -90,
    paddingTop: 20,
    paddingBottom: 20,
    fontFamily: 'fantasy'
  },
  subtexto:{
    fontSize: 20,
    backgroundColor:'#9DD5FA',
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingBottom: 20,
    color: '#000',
    textAlign: 'justify',
    fontFamily: 'sans-serif'
  },
  textoBloco:{
    fontSize:30,
    color: '#DE8152',
    fontFamily: 'sans-serif',
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingBottom: 20
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
    backgroundColor:'#9DD5FA',
    width:'80%',
    textAlign:'center'
  },
  textoBotao:{
    color:"#fff",
    fontSize:30
  }
});
