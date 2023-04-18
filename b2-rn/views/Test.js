import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import * as FileSystem from 'expo-file-system'

export const writefile = async (data) => {
    // vérifier le contenu du data


    try{
        //vérifier si le fichier est vide
        const fileInfo = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'file.txt')

        if (fileInfo.exists) {
            //Lire le fichier, et recuperer les donnees existantes
            const fileContent = await readAsStringAsync(FileSystem.documentDirectory +'file.txt')
            //Trouver un moyen pour ajouter le contenu passe en param au contenu existant
        }else{
            await FileSystem.writeAsStringAsync(FileSystem.documentDirectory +'file.txt', data)
        }
    } catch(error) {
        console.log('Erreur non catche writefile util.js:', error)
    }
}

function Test() {
    return (
      <View>
          <Text>Test</Text>
      </View>
    )
  }

export default Test