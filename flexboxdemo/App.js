import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50, 
    flexDirection:'row', 
    width: '80%',
     height: 300,// justifyContent-> main axis that is horizontal axis
      justifyContent:'space-around',
       alignItems: 'stretch'}}>
     <View style={{// alignItems -> cross axis that is vertical axis
    backgroundColor: 'red',
    flex: 1,
    // width: 100,
    // height: 100,
    justifyContent: 'center',
    alignItems: 'center',
}}>
<Text>1</Text>
</View>

<View
style={{
    backgroundColor: 'blue',
    // width: 100,
    // height: 100,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
}}>
<Text>2</Text>
</View>

<View
style={{
    backgroundColor: 'orange',
    flex:1,
    // width: 100,
    // height: 100,
    justifyContent: 'center',
    alignItems: 'center',
}}>
<Text>3</Text>
</View>


   
    </View>
  );
}
