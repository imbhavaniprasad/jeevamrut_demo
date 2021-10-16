import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem,Avatar } from 'react-native-elements'

const CustomListItem = ({id,chatName}) => {
    return (
        <ListItem key={id} bottomDivider>
            <Avatar 
            rounded
            source={{
                uri : "https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png",
            }}
            />
            <ListItem.Content>
                <ListItem.Title style={{fontWeight:"800"}}>{chatName}</ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                    This is my Name
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})
