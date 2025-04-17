import {View, StyleSheet, Alert, Text, FlatList } from "react-native";
import {Ionicons} from '@expo/vector-icons'
import { useEffect, useState } from "react";
import Title from '../Components/UI/Title'
import NumberContainer from "../Components/Game/NumberContainer";
import PrimaryButton from "../Components/UI/PrimaryButton";
import Card from "../Components/UI/Card";
import InstructionText from "../Components/UI/InstructionText";
import GuessLogItem from "../Components/Game/GuessLogItem";
 

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }


  let minBoundry = 1;
  let maxBoundry = 100;

function GameScreen({userNumber, onGameOver}){
    const initalGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setcurrentGuess] = useState(initalGuess);
    const [guessRounds, setGuessRounds] = useState([initalGuess]);


    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
      }, [currentGuess, userNumber, onGameOver]);

      useEffect(()=>{
        minBoundry = 1,
        maxBoundry = 100
      },[])

      const roundNumberLenght  = guessRounds.length;

    function guessNextNumber(direction) { // Lower, Greater
        if (direction == 'Lower' && currentGuess < userNumber || direction === 'Greater' && currentGuess > userNumber) {
            Alert.alert("Don't Lie", "You know that is wrong...", [{text: 'Sorry',style: 'cancel'}]);
            return;
        }
        if (direction === 'Lower') {
            maxBoundry = currentGuess;
        }  else {
            minBoundry = currentGuess+1;
        }
        const newRandumNumber = generateRandomBetween(minBoundry, maxBoundry, currentGuess);
        setcurrentGuess(newRandumNumber);
        setGuessRounds((previousGuessROunds) => [...previousGuessROunds, newRandumNumber]);
    }

    return (
    <View style={styles.screen}>
    <Title>Opponent's Guess</Title>
    
    <NumberContainer>{currentGuess}</NumberContainer>
{/* //{roundNumber, guess} */}
    <Card>
        <InstructionText style={styles.instructionText}>Higher or Lower</InstructionText>

        <View style = {styles.buttonsContainer}>
            <View style = {styles.buttonContainer}>
            <PrimaryButton onPress={guessNextNumber.bind(this, 'Lower')}>
            <Ionicons name="add-outline" size={24} color="white" />
                </PrimaryButton>
            </View>
            <View style = {styles.buttonContainer}>
            <PrimaryButton onPress={guessNextNumber.bind(this, 'Greater')}>
            <Ionicons name="remove-outline" size={24} color="white" />
                </PrimaryButton>
            </View>
        </View>
    </Card>
<FlatList data={guessRounds} 
renderItem={(itemData) => <GuessLogItem roundNumber = {roundNumberLenght - itemData.index} guess={itemData.item}/>} 
keyExtractor={(itemData) => itemData}/>
    </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create(
    {
        screen: {
            flex: 1,
            padding: 24,
            alignItems: 'center'
        },
        buttonsContainer:{
            flexDirection:'row',
        },
        buttonContainer:{
            flex: 1
        },
        instructionText: {
            marginBottom: 12,
        }
    }
);