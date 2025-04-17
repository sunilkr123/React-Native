import { View, Image, StyleSheet, Text, Dimensions} from "react-native";
import Title from "../Components/UI/Title";
import Colors from "../Constant/Colors";
import PrimaryButton from "../Components/UI/PrimaryButton";

function GameOverScreen({roundNumber, userNumber, onStartNewGame}) {
    return (
        <View style={styles.rootContainer}>
            <Title>Game is Over</Title>
            <View style = {styles.imageConatiner}>
            <Image source={require('../assets/images/success.png')} style={styles.image}/>
            </View>
            <Text style={styles.sumarryText}>Your phone needed <Text style={styles.hightedText}>{roundNumber}</Text> round to guess the number <Text style={styles.hightedText}>{userNumber}</Text></Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    )
}

export default GameOverScreen;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    rootContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 24
    },
    imageConatiner:{
        width: deviceWidth < 380 ? 150 : 260,
        height: deviceWidth < 380 ? 150 : 260,
        borderRadius: deviceWidth < 380 ? 75 : 130,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    sumarryText: {
        fontFamily:'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 10
    },
    hightedText: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    }
});