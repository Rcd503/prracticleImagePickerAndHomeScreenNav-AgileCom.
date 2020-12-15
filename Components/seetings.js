import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, Image,Button } from 'react-native';
import Constants from 'expo-constants';

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
export function SettingsScreen({navigation}) {
    const [user, setUser] = useState([DATA]);
    /* useEffect(async()=>{
        await fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => response.json())
        .then((responseJson) => {
          setUser({user:responseJson})
          console.log(responseJson)
        })  
    });*/


/* <Text>Settings!</Text> */
    return (
        <View style={styles.container}>
            
            
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
            <Button
            title="Go to HomeScreen."
            onPress={() => navigation.navigate('Home')}
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
       margin: 5,
       // marginTop: 8
    }

});
