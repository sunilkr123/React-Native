
import { View, Button, TextInput, StyleSheet, Modal, Image, StatusBar } from "react-native";
import { useState } from "react";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredGoal) {
        console.log(`enteredGoal goal is ${enteredGoal}`)
        setEnteredGoalText(enteredGoal)
      }

      function InputHandler(){
        props.inputHandler(enteredGoalText);
      }
  
      // function endModelView(){
      //   console.log(`endModelView`)
      //   props.onCancel()
      // }

    return (
        < Modal visible = {props.visible} animationType="slide">
          <>
          <StatusBar style={'Light'}/>
          <View style={styles.inAppContainer}>
          <Image style={styles.image} source={require('../assets/images/goal.png')}/>
          <TextInput
           placeholder='Your course goal' 
          style={styles.inputText} 
          onChangeText={goalInputHandler}/>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
            <Button 
            color={'#b180f0'}
          title='Add goal' 
          onPress={InputHandler}/>
            </View>
            <View style={styles.button}>
               <Button color={'#f31282'}
               title="Cancel" 
               onPress={props.onCancel
               }/>
               </View>
         
          </View>

         </View>
          </>
        </Modal>
)
}


export default GoalInput;


const styles = StyleSheet.create(
    {
        inAppContainer: {
            // flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            padding: 16,
            backgroundColor: '#311b6b'
          },
          inputText: {
            borderWidth: 1,
            borderColor: '#cccccc',
            width: '100%',
            padding: 16,
            marginRight: 8,
            color: '#120438',
            backgroundColor: '#e4d0ff'
          },

          buttonContainer:{
            flexDirection:'row',
            marginTop: 20
          },
          button:{
            width: '40%',
            marginHorizontal:8,
          },
          image: {
            height: 100,
            width: 100,
            margin: 20
          }

    }
)