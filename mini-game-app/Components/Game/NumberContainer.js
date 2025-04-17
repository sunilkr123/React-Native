import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from '../../Constant/Colors'

function NumberContainer({children}){
return (
    <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>)
}

export default NumberContainer;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    numberText: {
        fontSize: 30,
        // fontWeight: 'bold',
         fontFamily: 'open-sans-bold',
        color: Colors.accent500
    }
})


