
function GoalInput() {
return (
         <View style={styles.inAppContainer}>
          <TextInput placeholder='Your course goal' style={styles.inputText} onChangeText={goalInputHandler}/>
          <Button title='Add goal' onPress={addGoalHandler}/>
         </View>
)
}


export default GoalInput;


