import { Text, StyleSheet } from "react-native";
import Colors from "../../Constant/Colors";

function Title({children}){
return (
<Text style={styles.title}>{children} </Text>
);
}

export default Title;


const styles = StyleSheet.create({
    title:{
        color: 'white',
        fontSize: 24,
        // fontWeight: 'bold',
        textAlign:'center',
        borderColor: 'white',
        borderWidth: 2,
        padding: 12,
        fontFamily: 'open-sans-bold',
        maxWidth: '80%'
        }
});