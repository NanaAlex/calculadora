import { TouchableOpacity,StyleSheet,View} from "react-native";

export default function RootLayout() {

  return (
    <>
    <View>
        <TouchableOpacity style={styles.button}>
                a
        </TouchableOpacity>
    </View>
  </>
  );
}


const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: '#070606ff',
      padding: 40,
      borderRadius: 10,
      width: 70,
      alignSelf: 'center',
      marginTop: 5
    },

})
