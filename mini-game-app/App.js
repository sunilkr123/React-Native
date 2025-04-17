import { StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
// import LinearGradient from 'react-native-linear-gradient';
import Colors from './Constant/Colors';
import StartGameScreen from './Screens/StartGameScreen';
import GameScreen from './Screens/GameScreen';
import GameOverScreen from './Screens/GameOverScreen';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  const [pickedNumber, setPickedNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRound, setGuessRound] = useState(0);

  function handledPickedNumber(pickedNumber){
    setPickedNumber(pickedNumber);
    setGameIsOver(false)
  }

  const [fonstLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if (!fonstLoaded) {
    <AppLoading />
  }

  function handleGameIsOver(numberOfRounds) {
    setGameIsOver(true)
    setGuessRound(numberOfRounds)
  }

  function handleStartNewGame(){
    setPickedNumber(null);
    setGuessRound(0);
  }
  let screen = <StartGameScreen onPickNumber={handledPickedNumber}/>

  if (pickedNumber) {
    screen =  <GameScreen userNumber={pickedNumber} onGameOver={handleGameIsOver}/>
  }

  if (gameIsOver && pickedNumber) {
    screen = <GameOverScreen  roundNumber={guessRound} userNumber={pickedNumber} onStartNewGame={handleStartNewGame}/>
  }

  return (
    <> 
    <StatusBar style='light'/>
  <LinearGradient colors={[Colors.primary700, Colors.accent500]}
  style={styles.rootScreen}>
  
<ImageBackground source={require('./assets/images/background.png')}
resizeMode='cover'
style={styles.rootScreen}
imageStyle={styles.imageBackground}
>
  <SafeAreaView style={styles.rootScreen}>
  {screen}
  </SafeAreaView>
</ImageBackground>
      </LinearGradient>
      </>
);
}

const styles = StyleSheet.create({
  rootScreen:{
    flex: 1
  },
  imageBackground:{
 opacity: 0.35
  }
});
