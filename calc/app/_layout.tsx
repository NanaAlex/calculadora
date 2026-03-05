import { Button } from "@react-navigation/elements";
import { useState } from "react";
import { TouchableOpacity,StyleSheet,View,Text} from "react-native";
import { ImageBackground } from 'react-native';

export default function RootLayout() { 
const [display     , setDisplay]     = useState('0');
const [firstNumber , setFirstNumber] = useState<number | null>(null);
const [opButton    , setOpButton]    = useState<'+' | '-' | '*' | '/' | '%' | null>(null);

// -> Puxar a logica das funções aqui
const pressNumber = (number : string) => {
  if (display == '0') {
    setDisplay(number.toString());
  } else {
    if (display.length < 10) {
      setDisplay(display + number.toString());
    }
  }
};

const pressOp = (op: '+' | '-' | '*' | '/' | '%') => {
  const parsedValue = parseFloat(display);  // -> Converte display de string para número

  if (!isNaN(parsedValue)) {
    setFirstNumber(parsedValue);  // -> Passa o número convertido
  } else {
    setFirstNumber(0);  // -> Em caso de valor inválido, define como 0
  }

  setOpButton(op);  // -> Define a operação selecionada
  setDisplay('0');   // -> (FAZER APARECER 10 + 2)
};

const equalPress = () => {
  if (firstNumber !== null && opButton !== null) {
    const secondNum = parseFloat(display);
    let result = 0;

  switch (opButton) {
    case '+': 
      result = firstNumber + secondNum;
      break;

    case '-': 
      result = firstNumber - secondNum; 
      break;

    case '*': 
      result = firstNumber * secondNum; 
      break;

    case '/':
      if (secondNum !== 0) {
        result = firstNumber / secondNum; 
      } else {
        result = 0; // -> Evita divisão por zero, pode ser ajustado para exibir uma mensagem de erro
      }
      break;

    case '%': 
      result = (firstNumber * secondNum) / 100; 
      break;
  }

  setDisplay(result.toString());
  setFirstNumber(null); 
  setOpButton(null);
  }

};

const pressClear = () => {
  setDisplay('0');
  setFirstNumber(null);
  setOpButton(null);
};

const pressClearX = () => {
  if (display.length > 1) {
    setDisplay(display.slice(0, -1)); // -> Remove o último caractere do display
  } else {
    setDisplay('0'); // -> Se só tiver um caractere, reseta para '0'
  }
}

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://i.pinimg.com/736x/af/32/b7/af32b7607b024fa5f9c980ecbd463b1f.jpg' }} // Caminho da imagem de fundo
        style={styles.buttonsContainer} // Estilos para a área dos botões
        imageStyle={{ resizeMode: 'cover' }}  // Ajusta a imagem para cobrir a área
      >
      <View style={styles.display}>
        <Text style={styles.displayText}>{display}</Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={pressClearX}>
          <Text style={styles.buttonText}>DEL</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={pressClear}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => pressOp('%')}>
          <Text style={styles.buttonText}>%</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => pressOp('/')}>
          <Text style={styles.buttonText}>÷</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={() => pressNumber('7')}>
            <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => pressNumber('8')}>
            <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => pressNumber('9')}>
            <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => pressOp('*')}>
           <Text style={styles.buttonText}>x</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={() => pressNumber('4')}>
            <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => pressNumber('5')}>
            <Text style={styles.buttonText}>5</Text> 
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => pressNumber('6')}>
            <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => pressOp('-')}>
           <Text style={styles.buttonText}>-</Text> 
        </TouchableOpacity>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={() => pressNumber('1')}>
            <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => pressNumber('2')}>
            <Text style={styles.buttonText}>2</Text> 
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => pressNumber('3')}>
            <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => pressOp('+')}>
           <Text style={styles.buttonText}>+</Text> 
        </TouchableOpacity>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.largeButton} onPress={() => pressNumber('0')}>
            <Text style={styles.buttonText}>0</Text> 
        </TouchableOpacity>

        <TouchableOpacity style={styles.largeButton} onPress={() => pressNumber('.')}>
            <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.largeButton} onPress={() => equalPress()}>
           <Text style={styles.buttonText}>=</Text> 
        </TouchableOpacity>
      </View>
      </ImageBackground>
       
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f8f8',
      justifyContent: 'center',
      alignItems: 'center'
  },

  display: {
    width: '95%',  // A largura do display é 90% da tela
    height: 200,   // A altura do display é menor, para ficar retangular
    backgroundColor: '#FFFFFF',
    textAlign: 'right',
    justifyContent: 'flex-end',  // Centraliza o conteúdo
    alignItems: 'flex-end',  // Alinha o texto para a direita
    padding: 5,
    borderBottomWidth: 4,  // Borda inferior para dar destaque
    borderColor: '#e6e6e6',
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 15,  // Bordas arredondadas
    borderWidth: 3,  // Borda visível
  },

  displayText: {
     fontSize: 48,
     color: '#333',
     fontWeight: 'bold'
  },

  buttonText: {
    fontSize: 32,
    color: '#000000',
    fontWeight: 'bold'
  },

  buttonsContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    backgroundColor: 'transparent',
    borderRadius: 15,
  },
  

  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%'
  },

  button: {
    width: 80,
    height: 80,
    backgroundColor: '#dd66ac59',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 5,
    shadowColor: '#333131f8',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 90,
    shadowRadius: 4
  },

   largeButton: {
    width: 100,
    height: 80,
    backgroundColor: '#dd66ac59',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
    shadowColor: '#333131f8',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 90,
    shadowRadius: 4
  }

});
