import { FlatList, View, StyleSheet, TextInput, Button, ScrollView } from 'react-native';
import { useState } from 'react';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoal] = useState([]);
  const [modelIsVisible, setModelVisibile] = useState(false);

  function startAddGoalHandler(){
    console.log('startAddGoalHandler')

    setModelVisibile(true)
  }

  function endAddGoalHandler(){
    console.log('setModelVisibile')
    setModelVisibile(false)
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoal((currentGoal) => [...currentGoal, {text: enteredGoalText, id: Math.random().toString()}])
    endAddGoalHandler();
    console.log(`courseGoals is ${courseGoals}`)
  }

  function deleteItem(id) {
    console.log('item haved presed to delete {id}', id)
    setCourseGoal( (currentGoal) => {
      return currentGoal.filter((goal) => goal.id != id)
    }
    )
  }

  return (
    <View style={styles.container}>
      <Button title='Add New Goal' onPress={startAddGoalHandler} color={'#5e0acc'}/>

      {modelIsVisible && <GoalInput  
      visible={modelIsVisible}
      inputHandler={addGoalHandler} 
      onCancel={endAddGoalHandler}/>}

     <View style={styles.goalContainer}>
     <FlatList data={courseGoals}
     renderItem={
    (item) => {
      return (
        <GoalItem text={item.item.text} 
        id={item.item.id}
        deleteGoalItem={deleteItem}/>
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

  goalContainer: {
  flex: 6,
  }
});
