import React, { useState, useLayoutEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input,Button, Icon } from 'react-native-elements';
import { db } from '../firebase';
const AddChatScreen = ({navigation}) => {
    const[input,setInput] = useState("");
    const addChat = async()=>{
          await db.collection("chats").
          add({
              chatName : input,
          })
          .then(()=>{navigation.goBack()})
          .catch(error=>alert(error.message));
    };
    useLayoutEffect(() => {
       navigation.setOptions({
           title : "Chats",
       });
    }, [navigation]);
    return (
            <View style={{padding:10,margin:10}}>
                <Input leftIcon={
                        <Icon name="wechat" size={24} type="antdesign" color="black"/>
                } onSubmitEditing={addChat} type="text" value={input} onChangeText ={text=>setInput(text)} />
            <Button title="Add Chat" onPress={addChat}/>
        </View>
    )
}

export default AddChatScreen

const styles = StyleSheet.create({})
