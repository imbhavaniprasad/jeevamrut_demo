import React, { useEffect, useLayoutEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Avatar, Button } from 'react-native-elements';
import {AntDesign,SimpleLineIcons} from "@expo/vector-icons"
import CustomListItem from '../components/CustomListItem'
import { auth, db } from '../firebase';
const HomeScreen = ({navigation}) => {
    const[chats,setChats] = useState([]);
    useEffect(()=>{
               const unsubscribe = db.collection("chats").onSnapshot(snapshot=>{
                   setChats(snapshot.docs.map(doc=>
                   ({
                       id : doc.id,
                       data : doc.data(),
                   })));
    });
    return unsubscribe;
},[]);
    const signOut = ()=>{
        auth.signOut().then(()=>{
            navigation.replace("Login");
        })
    };
    useLayoutEffect(()=>{
        navigation.setOptions({
            title : "Jeevamrut",
            headerStyle : {backgroundColor : "#fff"},
            headerTitleStyle : {color : "black"},
            headerTintColor : "black",
            headerLeft : ()=>(
                <View style={{marginLeft:10}}>
                <TouchableOpacity onPress={signOut} activeOpacity={0.5}>
                 <Avatar rounded
                 source={{
                   uri : auth?.currentUser?.photoURL
                 }}/>
                 </TouchableOpacity>
                </View>
                            ),
             headerRight : () => (
                 <View style={{marginRight:20,
                    width : 80,
                    flexDirection : 'row',
                    justifyContent:'space-between',
                 }} >
                        <TouchableOpacity activeOpacity={0.5}>
                            <AntDesign name="camera" size={24} color="black"/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> navigation.navigate("AddChat")} activeOpacity={0.5}>
                            <SimpleLineIcons name="pencil" size={24} color="black"/>
                            </TouchableOpacity>
                 </View>
             )               
        });
    },[navigation]);
    return(
    <SafeAreaView>
        <ScrollView style={{height:"100%"}}>
            {chats.map(({id,data : {chatName}})=>(
           <CustomListItem key={id} id={id} chatName={chatName} />
            ))}
        </ScrollView>
    </SafeAreaView>
    );
}

export default HomeScreen;
const styles = StyleSheet.create({})
