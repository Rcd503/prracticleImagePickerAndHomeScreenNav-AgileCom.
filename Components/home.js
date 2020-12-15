import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, SafeAreaView, StatusBar, ScrollView, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
//import { ScrollView } from 'react-native-gesture-handler';


export function HomeScreen({ navigation, route }) {
    const [user, setUser] = useState([]);



    useEffect()
    {
       async () => {
            try {
                const fetchdata = await fetch('https://randomuser.me/api/?results=10');
                const fetchjson = await fetchdata.json();
                setUser({ user: fetchjson.results });
            } catch (error) {
                console.log('error fetching....' + error);
            }
        }
    };





    return (

        <View style={styles.container}>

            <FlatList
                data={user}

                renderItem={({ item }) => {
                    return (
                        <View style={styles.containerImg}>

                            <Image source={{ uri: route.params.image }} style={styles.picImage} />

                            <ScrollView>

                                <Text >{item.gender}</Text>
                                <Text  style={styles.userText}>{item.gender}</Text>
                                <Text  style={styles.userText}>{item.name.title}</Text>
                                <Text  style={styles.userText}>{item.name.first}</Text>

                                <Text  style={styles.userText}>{item.location.street.number}</Text>
                                <Text  style={styles.userText}>{item.location.street.name}</Text>
                                <Text  style={styles.userText}>{item.location.city}</Text>
                                <Text  style={styles.userText}>{item.location.state}</Text>
                                <Text  style={styles.userText}>{item.location.country}</Text>
                                <Text  style={styles.userText}>{item.location.postcode}</Text>
                                <Text  style={styles.userText}>{item.location.coordinates.latitude}</Text>
                                <Text  style={styles.userText}>{item.location.coordinates.longitude}</Text>
                                <Text  style={styles.userText}>{item.location.timezone.offset}</Text>
                                <Text  style={styles.userText}>{item.location.timezone.description}</Text>
                                <Text  style={styles.userText}>{item.email}</Text>
                                <Text  style={styles.userText}>{item.login.uuid}</Text>
                                <Text  style={styles.userText}>{item.login.username}</Text>
                                <Text  style={styles.userText}>{item.login.password}</Text>
                                <Text  style={styles.userText}>{item.login.salt}</Text>
                                <Text  style={styles.userText}>{item.login.md5}</Text>
                                <Text  style={styles.userText}>{item.login.sha1}</Text>

                                <Text  style={styles.userText}>{item.dob.date}</Text>
                                <Text  style={styles.userText}>{item.dob.age}</Text>
                                <Text  style={styles.userText}>{item.registered.date}</Text>
                                <Text  style={styles.userText}>{item.registered.age}</Text>
                                <Text  style={styles.userText}>{item.phone}</Text>
                                <Text  style={styles.userText}>{item.cell}</Text>
                                <Text  style={styles.userText}>{item.id.name}</Text>
                                <Text  style={styles.userText}>{item.id.value}</Text>

                                <Text  style={styles.userText}>{item.nat.date}</Text>
                            </ScrollView>

                        </View>
                    );
                }}
                keyExtractor={(item) => item.id}

            />
            <Button
                title="LogOut"
                onPress={() => navigation.navigate('LoginPage')}
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
    },
    userText: {
        flex: 1,
        borderBottomWidth: 2,
        margin: 5,
        fontSize: 16,
        textAlign: 'center'
    }

});


