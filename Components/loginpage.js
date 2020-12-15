import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TextInput, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';


const userInfo = { firstname: 'admin', lastname: 'pass12345' };
export  function LoginPage({ navigation }) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [emailid, setEmailid] = useState("");

  const [image, setImage] = useState(null);
  
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.text}>Login Page</Text>
      <TouchableOpacity style={styles.userBtnpick}
          onPress={pickImage}
        >
          <Text style={styles.btnText}>Pick Profile</Text>
          {image && <Image source={{ uri: image }} style={styles.picImage} />}

        </TouchableOpacity>

      <TextInput style={styles.inputtext}
        placeholder="First name:"
        focusable='true'
        autoFocus
        onChangeText={(firstname) => { setFirstname( firstname ) }}

        value={firstname}

      />

      <TextInput style={styles.inputtext}
        placeholder="Last name:"
       

       onChangeText={(lastname) => { setLastname( lastname ) }}

       value={lastname}

      />
      <TextInput style={styles.inputtext}
        placeholder="Phone no.:"
        keyboardType="number-pad"
      
        onChangeText={(phoneno) => { setPhoneno(phoneno ) }}
        value={phoneno}
      />
      <TextInput style={styles.inputtext}
        placeholder="Email Id:"
      
      
        onChangeText={(emailid) => { setEmailid( emailid ) }}
        value={emailid}
      />

    
        <TouchableOpacity style={styles.userBtn}
          onPress={loginMethod}

        // onPress={() => navigation.push('Home',{image: image})}
        >
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>

      
      <Text style={styles.textdev}>Dev. Rcd503</Text>
      
    </View>
  );


   function loginMethod() {
    if (!firstname || !lastname || !phoneno || !emailid) {
      if (!firstname && !lastname && !phoneno && !emailid) {
        alert("enter data...");
        return;
      }
      if (!firstname) {
        alert("enter firstname...");
        return;
      }
      if (!lastname) {
        alert("enter lastname...");
        return;
      }
      if (!phoneno) {
        alert("enter phoneno...");
        return;
      }
      if (!emailid) {
        alert("enter emailid...");
        return;
      }
    } else {
     
        
        return navigation.navigate('Home',{image: image});

    }
     
   }

    }




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
  },
  text: {

    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    borderBottomWidth: 5,
    borderColor: '#FFD700'

  },
  textdev: {

    fontSize: 12,
    color: '#FFD700',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    borderBottomWidth: 3,
    borderColor: '#FFD700',

    marginTop: 50,

  },
  inputtext: {
    fontSize: 20,
    width: '90%',
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 86,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  userBtn: {
    backgroundColor: '#FFD700',
    padding: 15,
    width: '60%',
    borderRadius: 86,
    alignContent:'center'
  },
  userBtnpick:{
    backgroundColor: '#1e90ff',
    borderWidth:2,
    marginBottom:5,
    
    padding: 15,
    //width: '85%',
    borderRadius: 200,
  },
  btnText: {

    fontSize: 18,
    textAlign: 'center',
  
  },
  picImage:{ 
    width: 100, 
    height: 100 ,
    //borderWidth:2,
    borderRadius:50,
    alignItems:'center',
    alignContent:'center',
    borderColor:'black'
  }
});
