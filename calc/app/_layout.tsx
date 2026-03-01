import { Button } from "@react-navigation/elements";
import { useState } from "react";
import { TouchableOpacity,StyleSheet,View,Text} from "react-native";
import CalculaButtons from "../components/calculaButtons";

export default function RootLayout() { 

  return (
    <View>
      <View style={styles.resultado}>
        <Text style={{fontSize: 20, margin: 10}}>2+2 = 5</Text> {/* parte do input do resultado */}
      </View>
      <View style={styles.botao}> {/* parte dos botoes */}
        <CalculaButtons />
      </View>   
    </View>
  );
}


const styles = StyleSheet.create({
  resultado:{
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    height: 300,
    backgroundColor: '#f5f5f5'
  },

  botao:{
    width: '100%',
    paddingHorizontal: 12,
    paddingBottom: 20,
  },

})
