import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { StyleSheet, Text, TextInput, View, Image, ImageBackground } from "react-native"
import { Button, Divider } from 'react-native-paper';
import myImage from './Image_TP.jpg'
import { Colors } from "react-native/Libraries/NewAppScreen";


const HomeTask = ({navigation}) => {
  
    const [enteredTodo, setEnteredTodo] = useState('Nouvelle Tache')

    const changeTextHandler = (pEnteredTodo) => {
        setEnteredTodo(pEnteredTodo)
    }

    const changeTodoHandler = () => {
        console.log(enteredTodo)
    }
    const today = new Date();

    return (
        <View style={styles.containerFlex}>
            <View style={styles.blueFlexItem}>
              <ImageBackground source={myImage} resizeMode="cover" style={styles.image}>
              <Button icon="plus" mode='contained' style={styles.myButton} onPress={() => console.log('Pressed')}/>
              
              <View style={styles.textContainer}>
                <Text style={styles.myText}>{today.getDate()}/{today.getMonth()}</Text>
                
                <Text style={styles.myText}>My Day</Text>
              </View>

            </ImageBackground>
            </View>

            <View style={styles.greenFlexItem}>
                {/* <Text>{enteredTodso}</Text>
                <TextInput
                    placeholder='Entrer une nouvelle Tache'
                    onChangeText={changeTextHandler}
                /> */}
                {/* <Button
                    onPress={changeTodoHandler}
                    title='Nouvelle Tache' /> */}
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


export default HomeTask


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
      
    },
    myText:{
      fontSize:35,
      color:'#CFA0E9',
      shadowColor:'black',
      textShadowRadius: 50,
      textDecorationLine:'underline'
    },
    textContainer:{
      flex:5,
      verticalAlign:'bottom',
      flexDirection:'column-reverse'
    },
    greenFlexItem: {
      flex: 5,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    // yellowFlexItem: {
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   backgroundColor: 'yellow',
    // },
    myButton: {
      alignSelf:'flex-end',
      width:10,
      backgroundColor:'#DA70D6'
    },
    image: {
      flex: 1,
      width: '100%',
    },  
  });
  