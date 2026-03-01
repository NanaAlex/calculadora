import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function CalculaButtons() {
const buttons = [
  'AC','DEL','%'  ,'/',
  '7' ,'8'  ,'9'  ,'x',
  '4' ,'5'  ,'6'  ,'-',
  '1' ,'2'  ,'3'  ,'+',
  '0' ,'.'  ,'+/-','='
];

    return (
        <View style={styles.grid}>
            {buttons.map((btn, index) => (
                <TouchableOpacity key={index} style={styles.button}>
                    <Text style={styles.text}>{btn}</Text>
                </TouchableOpacity>
            ))}
           
        </View>
    );
}

const styles = StyleSheet.create({
   grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
     width: '100%'
  },
  
  button: {
    width: '20%',
    aspectRatio: 1,
   
    margin: 5,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E57373',
    marginBottom: 6,
  },

  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  }
});