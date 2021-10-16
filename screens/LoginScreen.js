import React,{useState,useEffect} from 'react'
import {StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Button, Input, Image } from 'react-native-elements';
import { auth } from '../firebase';
const LoginScreen = ({ navigation }) => {
    const[email,setEmail] = useState("");
    const[password,setPassword]=useState("");
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser)=>{
            if(authUser){
                navigation.replace("Home");
            }     
        });
        return unsubscribe;
    }, [])
    const signIn = ()=>{
       auth.signInWithEmailAndPassword(email,password).catch((error)=>alert(error.message));
    }
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light"/>
            <Image source={{
                uri : "https://jeevamrut.in/assets/images/logo.png",
            }}
            style = {{height:200, width : 200}}/>
           <View style={styles.inputContainer}>
               <Input placeholder="Email" autoFocus value={email} onChangeText={text=>setEmail(text)} type="email"/>
               <Input placeholder="Password" onSubmitEditing={signIn} value={password} onChangeText={text=>setPassword(text)} type="password" secureTextEntry/>
           </View>
           <View>
               <Button title="Login" onPress={signIn} containerStyle={styles.button} />
               <Button title="Register" onPress={()=>navigation.navigate("Register")} type="outline" containerStyle={styles.button}/>
           </View>
           <View style={{height:30}}></View>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen
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