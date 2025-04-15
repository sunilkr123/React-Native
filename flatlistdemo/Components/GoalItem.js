import {StyleSheet, View, Text, Pressable} from 'react-native'

function GoalItem(props) {
return (
  <View style={styles.goalItem}> 
  <Pressable onPress={props.deleteGoalItem.bind(this, props.id)}
  // This is to show efect of the click event 
  style = {({pressed}) => pressed && styles.presedItem}> 
    <Text style={styles.goalText}>{props.text}</Text>
    </Pressable>
    </View>
);
}


export default GoalItem;

const styles = StyleSheet.create(
    {
        goalItem: {
            margin: 8,

            borderRadius: 10,
            backgroundColor: '#5e0acc',
          },  
          goalText:{
            color: 'white',
            padding: 8,
          },
          presedItem: {
            opacity: 0.5
          }
    }
)