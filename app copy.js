/* 













import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import  {HomeScreen}  from "./Components/home";
import  {SettingsScreen}  from "./Components/seetings";
import  {LoginPage}  from "./Components/loginpage";

/*
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



<Button
                title="Go to Setting Screen."
                onPress={() => navigation.navigate('SettingsScreen')}
            />

























import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import  {HomeScreen}  from "./Components/home";
import  {SettingsScreen}  from "./Components/seetings";
import  {LoginPage}  from "./Components/loginpage";

/*
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;




















import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  {HomeScreen}  from "./Components/home";
import  {SettingsScreen}  from "./Components/seetings";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={HomeScreen}/>
        <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



function HomeScreen() {
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
     useEffect(async ()=>{


        try{
            const fetchdata=  fetch('https://jsonplaceholder.typicode.com/photos');
            const fetchjson =  fetchdata.json();

           
              setUser({user:fetchjson});
              setIsLoading({isLoading:false});
              
        } catch(error) {
            console.log('error fetching....'+error);
        }
    
         
        
    });

    if(!isLoading){
        return (
       
            <View style={styles.container}>
            <Text>Home!</Text>
            <FlatList
                data={user}  
                //data={DATA}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.containerImg}>
                            <Text style={{ flex: 1, borderBottomWidth: 2, margin: 5, fontSize: 16, textAlign: 'center' }}>{item.title}</Text>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <Image
                                    source={item.url}
                                    style={{
                                        width: 120,
                                        height: 180,
                                        borderWidth: 2,
                                        borderColor: '#d35647',
                                        resizeMode: 'contain',
                                        margin: 8
                                    }}
                                    title="Images111"
                                />
                                <Text style={{ width: 200, borderWidth: 2, margin: 5, fontSize: 16, textAlign: 'center' }}>{item.title}</Text>
                            </View>
                        </View>
                    );
                }}
                keyExtractor={(item) => item.id}
    
            />
        </View> );
    }else{
       return <Text style={{ width: 200, borderWidth: 2, margin: 5, fontSize: 16, textAlign: 'center' }}>Data not loaded</Text>;
    }
   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
    },
    containerImg: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        borderWidth: 2,
        margin: 7,
        marginTop: 8
    }

});



const DATA = [
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "https://via.placeholder.com/600/d32776",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
];
 function SettingsScreen() {
    const [user, setUser] = useState([DATA]);
    /* useEffect(async()=>{
        await fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => response.json())
        .then((responseJson) => {
          setUser({user:responseJson})
          console.log(responseJson)
        })  
    });



    return (
        <View style={styles.container}>
            <Text>Settings!</Text>
            <FlatList
                //data={user}  
                data={DATA}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.containerImg}>
                            <Text style={{ flex: 1, borderBottomWidth: 2, margin: 5, fontSize: 16, textAlign: 'center' }}>{item.title}</Text>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <Image
                                    source={item.url}
                                    style={{
                                        width: 120,
                                        height: 150,
                                        borderWidth: 2,
                                        borderColor: '#d35647',
                                        resizeMode: 'contain',
                                        margin: 8
                                    }}
                                    title="Images111"
                                />
                                <Text style={{ width: 200, borderWidth: 2, margin: 5, fontSize: 16, textAlign: 'center' }}>{item.title}</Text>
                            </View>
                        </View>
                    );
                }}
                keyExtractor={(item) => item.id}

            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
    },
    containerImg: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        borderWidth: 2,
        margin: 7,
        marginTop: 8
    }

});
 */