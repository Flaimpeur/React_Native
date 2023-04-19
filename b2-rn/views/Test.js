import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import * as FileSystem from 'expo-file-system'

export const writefile = async (data) => {
    // vérifier le contenu du data

    try {
        //vérifier si le fichier est vide
        const fileInfo = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'file.txt')

        if (fileInfo.exists) {
            //Lire le fichier, et recuperer les donnees existantes
            const fileContent = await FileSystem.readAsStringAsync(FileSystem.documentDirectory + 'file.txt')
            //Trouver un moyen pour ajouter le contenu passe en param au contenu existant
            console.log('file content if file exists: ', fileContent)

            // tu dois creer une nouvelle chaine a partir de fileContent et data
            const newFile = fileContent + ' ; ' + data
            // ensuite tu ...
            await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'file.txt', newFile)
        } else {
            await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'file.txt', data)
        }
    } catch (error) {
        console.log('Erreur non catche writefile util.js:', error)
    }
}


export const deleteFile = async (file) => {
    try {
        const fileInfo = await FileSystem.getInfoAsync(FileSystem.documentDirectory + file)

        if (fileInfo.exists) {
            await FileSystem.deleteAsync(FileSystem.documentDirectory + file)
        }
    } catch (error) {
        console.log('Error no file : ', error)
    }
}

function Test() {

    const [enteredTodo, setEnteredTodo] = useState('')

    const addTodoHandler = async () => {
        // ecrire dans un fichier
        await writefile(enteredTodo)
    }

    const deleteTodoHandler = async () => {
        await deleteFile('file.txt')
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
        </View>
    )
}

export default Test