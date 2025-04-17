import {
    TextInput,
    View,
    StyleSheet,
    Alert,
    useWindowDimensions,
    KeyboardAvoidingView,
    ScrollView
} from "react-native";
import { useState } from "react";
import PrimaryButton from '../Components/UI/PrimaryButton'
import Colors from "../Constant/Colors";
import Title from "../Components/UI/Title";
import Card from "../Components/UI/Card";
import InstructionText from "../Components/UI/InstructionText";

function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');
    const {width, height} = useWindowDimensions();


function numberInputHandler(enteredNumber){
setEnteredNumber(enteredNumber);
}

function resethandler(){
    setEnteredNumber('');
}



function confrimHandler(){
console.log('Confirm handler pressed')
const chosenNumber = parseInt(enteredNumber);
if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
Alert.alert(
    'Invalid Number',
    "Number has to be between 1 and 99.",
    [{text:'Okay',
        style: 'destructive',
        onPress:resethandler
    }]
)
return
console.log('Valid number')
}
onPickNumber(chosenNumber);
}
    let topMarginDistance = height < 380 ? 0 : 100;
    return (
<ScrollView>
    <KeyboardAvoidingView>
    <View style={[styles.rootContainer, {marginTop: topMarginDistance}]}>
        <Title>
            Guess My Number
        </Title>
        <Card>
         <InstructionText>Enter a Number</InstructionText>
        <TextInput style={styles.numberInput} 
        maxLength={2}
         keyboardType="number-pad"
         autoCorrect={false}
         value={enteredNumber}
         onChangeText={numberInputHandler}
         />
<View style={styles.buttonsContainer}>
<View style = {styles.buttonContainer}>
    <PrimaryButton onPress={resethandler}>  Reset </PrimaryButton>
    </View>
<View style = {styles.buttonContainer}>
<PrimaryButton onPress={confrimHandler}> Confirm </PrimaryButton>
</View>
</View>
    </Card>
            </View>
            </KeyboardAvoidingView>
            </ScrollView>
            )
}

export default StartGameScreen;


const styles = StyleSheet.create({
    rootContainer: {
        marginTop: 100,
        alignItems: 'center'
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500
    },
    buttonsContainer:{
        flexDirection:'row',
        justifyContent: 'center'
    },
    buttonContainer:{
        flex: 1
    },
    instructionText: {
        color: Colors.accent500,
        fontSize: 26
    }
});