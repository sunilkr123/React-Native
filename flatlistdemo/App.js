import { FlatList, StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {
const [enteredGoalText, setEnteredGoalText] = useState('');
const [courseGoals, setCourseGoal] = useState([]);

  function goalInputHandler(enteredGoal) {
    console.log(`enteredGoal goal is ${enteredGoal}`)
    setEnteredGoalText(enteredGoal)
  }

  function addGoalHandler() {
    setCourseGoal((currentGoal) => [...currentGoal, {text: enteredGoalText, id: Math.random().toString()}])
    console.log(`courseGoals is ${courseGoals}`)
  }

  return (
    <View style={styles.container}>
     <View style={styles.inAppContainer}>
      <TextInput placeholder='Your course goal' style={styles.inputText} onChangeText={goalInputHandler}/>
      <Button title='Add goal' onPress={addGoalHandler}/>
     </View>
     <View style={styles.goalContainer}>
     <FlatList data={courseGoals}
     renderItem={
    (item) => {
      console.log(`logs are ${item.item.text}`)
      console.log(`item.item.id logs are ${item.item.id}`)
      return (
        <View style={styles.goalItem}> 
        <Text style={styles.goalText}>{item.item.text}</Text>
        </View>
      );
      }
     }
     keyExtractor={
      (item, index) => {
        console.log(`item.id logs are ${item.id}`)
        return item.id;
      }
     }
     alwaysBounceVertical = {false}
     />
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
paddingHorizontal: 20,
paddingTop: 70,
flex: 1,
  },
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
  goalContainer: {
  flex: 6,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#5e0acc',
  },
  goalText:{
    color: 'white'
  }
});
