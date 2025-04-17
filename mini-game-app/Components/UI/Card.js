import { StyleSheet, View } from "react-native";
import Colors from "../../Constant/Colors";

function Card({children}) {
return <View style={styles.card}>{children}</View>
}

export default Card;

const styles = StyleSheet.create({
    card: {
        justifyContent:'center',
        alignItems: 'center',
       padding: 16,
       marginTop: 36,
       backgroundColor: Colors.primary800 ,//'#4e0329', 
       borderRadius: 10,
       marginHorizontal: 24,
       elevation: 10, // this is being used to add shadow in android
       shadowColor: 'black',
       shadowOffset: {width: 0, height: 2},
       shadowRadius: 10,
       shadowOpacity: 0.256 
    },
});