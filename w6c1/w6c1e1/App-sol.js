import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import icon from './assets/favicon.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>More Text</Text>
      <Image
        style={styles.image}
        source={{uri:"http://placekitten.com/g/200/300"}}
      />
      <Button
        title="This is a button"
        color="purple"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },image:{
    width: 200,
    height: 200
  }

});
