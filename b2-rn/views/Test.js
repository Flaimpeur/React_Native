import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import * as FileSystem from 'expo-file-system';
import { writefile, deleteFile } from '../components/addContent/';
import sendFileOnEmail from '../components/sendMail/'

function Test() {

    const [enteredTodo, setEnteredTodo] = useState('')

    const addTodoHandler = async () => {
        // ecrire dans un fichier
        await writefile(enteredTodo)
    }

    const deleteTodoHandler = async () => {
        await deleteFile('file.txt')
    }

    const sendEmailTodoHandler = async () => {
        // const fileContent = await FileSystem.readAsStringAsync(FileSystem.documentDirectory + 'file.txt')
        // console.log(fileContent)
        // console.log('LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', FileSystem.documentDirectory + 'file.txt')
        await sendFileOnEmail(FileSystem.documentDirectory + 'file.txt')
    }

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TextInput value={enteredTodo} onChangeText={(value) => {setEnteredTodo(value)}} placeholder="Saisir une nouvelle tache" />
            <Button
                onPress={addTodoHandler}
                title='New Task' />
            <Button
                onPress={deleteTodoHandler}
                title='Delete File' />
            <Button
                onPress={sendEmailTodoHandler}
                title='Send the file' />
        </View>
    )
}

export default Test