import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <View>
      <Text>
        We can keep multiple text inside view component
      </Text>
      <Text>
        Another text inside the same view 
      </Text>
     </View>
    <Button title='Click me'onPress={
      () => {
        console.log('You clicked on button')
      }
    }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
