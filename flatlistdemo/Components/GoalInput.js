
import { View, Button, TextInput, StyleSheet } from "react-native";
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

return (
         <View style={styles.inAppContainer}>
          <TextInput
           placeholder='Your course goal' 
          style={styles.inputText} 
          onChangeText={goalInputHandler}/>
          <Button 
          title='Add goal' 
          onPress={InputHandler}/>
         </View>
)
}


export default GoalInput;


const styles = StyleSheet.create(
    {
        inAppContainer: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginBottom: 24,
            borderBottomWidth: 1,
            borderBottomColor: '#cccccc',
            flex: 1,
          },
          inputText: {
            borderWidth: 1,
            borderColor: '#cccccc',
            width: '75%',
            padding: 10,
            marginRight: 8,
          },

    }
)