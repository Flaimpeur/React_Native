import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"

const HomeView = ({navigation}) => {
  
    const [enteredTodo, setEnteredTodo] = useState('Nouvelle Tache')

    const changeTextHandler = (pEnteredTodo) => {
        setEnteredTodo(pEnteredTodo)
    }

    const changeTodoHandler = () => {
        console.log(enteredTodo)
    }

    return (
        <View style={styles.containerFlex}>
            <View style={styles.blueFlexItem}>
                <Text>My Day, Besoin d'une image en fond</Text>
            </View>
            <View style={styles.greenFlexItem}>
                <Text>{enteredTodo}</Text>
                <TextInput
                    placeholder='Entrer une nouvelle Tache'
                    onChangeText={changeTextHandler}
                />
                <Button
                    onPress={changeTodoHandler}
                    title='Nouvelle Tache' />
            </View>
            {/* <View style={styles.yellowFlexItem} >
            <Button
                    onPress={() => {navigation.navigate('Second')}}
                    title='Aller à la deuxième page' />
            </View> */}
            <StatusBar style="auto" />
        </View>
    )
}


export default HomeView


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerFlex: {
      flex: 2,
    },
    blueFlexItem: {
      flex: 5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'blue'
    },
    greenFlexItem: {
      flex: 5,
      justifyContent: 'center',
      alignItems: 'center'
    },
    yellowFlexItem: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'yellow',
    },
  });
  