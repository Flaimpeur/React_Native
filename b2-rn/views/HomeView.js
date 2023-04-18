import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"

const HomeView = ({navigation}) => {
  
    const [enteredTodo, setEnteredTodo] = useState('test')

    const changeTextHandler = (pEnteredTodo) => {
        setEnteredTodo(pEnteredTodo)
    }

    const changeTodoHandler = () => {
        console.log(enteredTodo)
    }

    return (
        <View style={styles.containerFlex}>
            <View style={styles.blueFlexItem}>
                <Text>Blue</Text>
            </View>
            <View style={styles.greenFlexItem}>
                <Text>{enteredTodo}</Text>
                <TextInput
                    placeholder='Entrer nouvelle valeur de state'
                    onChangeText={changeTextHandler}
                />
                <Button
                    onPress={changeTodoHandler}
                    title='Create todo' />
            </View>
            <View style={styles.yellowFlexItem} >
            <Button
                    onPress={() => {navigation.navigate('Second')}}
                    title='Go to second page' />
            </View>

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
      flex: 1,
    },
    blueFlexItem: {
      flex: 2,
      backgroundColor: 'blue'
    },
    greenFlexItem: {
      flex: 5,
      justifyContent: 'center',
      alignItems: 'center'
    },
    yellowFlexItem: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
    },
  });
  