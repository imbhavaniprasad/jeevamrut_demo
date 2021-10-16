import React, { useState, useLayoutEffect } from 'react'
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import {Text,Button,Input} from 'react-native-elements'
import { auth } from '../firebase'
const RegisterScreen = ({ navigation }) => {
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[url,setUrl] = useState("");
    useLayoutEffect(() => {
      navigation.setOptions({
            title : "Back To Login",
      });
    }, [navigation]);
    const register = ()=>{
        auth.createUserWithEmailAndPassword(email,password).
        then(authUser=>{
             authUser.user.updateProfile({
                displayName : name,
                photoURL : url ||
                 "https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png",
             });
        }).catch((error)=>alert(error.message));
    };
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Text h3>Signup!</Text>
            <View style={styles.inputContainer}>
                <Input autofocus type="text" placeholder="Enter Full Name" value={name} onChangeText={text=>setName(text)}/>
                <Input type="email" placeholder="Enter Email" value={email} onChangeText={text=>setEmail(text)}/>
                <Input type="password" secureTextEntry placeholder="Enter Password" value={password} onChangeText={text=>setPassword(text)}/>
                <Input type="url" placeholder="Enter Profile Image URL" onSubmitEditing={register} value={url} onChangeText={text=>setUrl(text)}/>
            </View>
            <View>
            <Button title="Register" onPress={register} containerStyle={styles.button}/>
            </View>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"white",
        padding: 20,
          },
          inputContainer : {
               width:300,
          },
          button : {
              width:200,
              marginTop:5,
          }
});
