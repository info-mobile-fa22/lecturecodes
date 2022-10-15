import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import cafe from './assets/cafe.png'
import pin from './assets/pin.png'

var cafes =[{
  coordinate: {latitude:39.1714796, longitude:-86.5346882},
  title:"Crumble Cafe West",
  description:"Cumble Cafe on the west side of Bloomington"
  },
  {
    coordinate: {latitude:39.1668473, longitude:-86.535055},
    title:"Inkwell Cafe",
    description:"Inkwell Cafe on the College ave"
  },
  {
    coordinate: {latitude:39.1662291, longitude:-86.5322359},
    title:"Soma E Kirkwood",
    description:"Soma Coffee Hous and Juice Bar East Kirkwood"
  },
  {
    coordinate: {latitude:39.1664427, longitude:-86.5329044},
    title:"Blu Boy Cafe&Cakery",
    description:"Blu Boy Chocolate and Cafe"
  },
  {
    coordinate: {latitude:39.1673509, longitude:-86.5357833},
    title:"Brilliant Coffee Company",
    description:"Brilliant Coffee & Nourish Bar"
  }
];

export default function App() {
  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map}
        provider="google"
        initialRegion={{
          latitude:39.1720742,
          longitude:-86.5273982,
          latitudeDelta:0.01,
          longitudeDelta:0.01
      }}>

    {/*<Marker
      key={0}
      coordinate={{latitude:39.1670623,longitude:-86.5255006}}
      title="Student Building"
      description="I400/I590 Classroom"
      pinColor="purple"
      image={cafe}
    />*/}
    {cafes.map((item,index)=>
      <Marker
      key={index}
      coordinate={item.coordinate}
      title={item.title}
      description={item.description}
      // pinColor="purple"
      image={pin}
      >
        <Callout>
          <View>
            <Text>More information about {item.title}</Text>
            <Image
              style={{width:40, height:40}}
              source={cafe}/>
          </View>
        </Callout>
      </Marker>
    )}
    </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },map:{
    width: '100%',
    height: '100%'
  }

});
