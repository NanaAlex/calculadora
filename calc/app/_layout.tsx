import { Button } from "@react-navigation/elements";
import { useState } from "react";
import { TouchableOpacity,StyleSheet,View,Text} from "react-native";

export default function RootLayout() { 
const [display     , setDisplay]     = useState('0');
const [firstNumber , setFirstNumber] = useState();
const [opButton    , setOpButton]    = useState();

// -> Puxar a logica das funções aqui
const pressNumber = (number : string) => {
  if (display == '0') {
    setDisplay(number.toString());
  } else {
    setDisplay(display + number.toString());
  }
};

const pressOp = (op : string) => {
  setFirstNumber(parseFloat(display));
  setOpButton(op);
  setDisplay('0');
};

const equalPress = () => {
  const secondNum = parseFloat(display);
  let result = 0;

  switch (op) {
    case '+': result = firstNumber + secondNum; break;
    case '-': result = firstNumber - secondNum; break;
    case '*': result = firstNumber * secondNum; break;
    case '/': result = firstNumber / secondNum; break;
  }

  setDisplay(result.toString());
  setFirstNumber();
  setOpButton();

};

const pressClear = () => {
  setDisplay('0');
  setFirstNumber();
  setOpButton();
};


  return (
    <View style={styles.container}>
       <View style={styles.display}>
       </View>

       <View style={styles.buttons}>
        <TouchableOpacity onPress={() => pressClear('X')} >
            <Text>X</Text>
          </TouchableOpacity>
       </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1
  },
  
  display: {
    flex: 1,
    backgroundColor: 'white'
  },

  buttons: {
    flex: 1,
    backgroundColor: 'pink'
  },

});
