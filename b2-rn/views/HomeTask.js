import { StatusBar } from "expo-status-bar"
import { useState, useEffect } from "react"
import { StyleSheet, Text, TextInput, View, Image, ImageBackground } from "react-native"
import { Button } from 'react-native-paper';
import myImage from '../Image_TP.jpg'
// import { Colors } from "react-native/Libraries/NewAppScreen";
// import * as FileSystem from 'expo-file-system';
import { writefile, deleteFile } from '../components/addContent/';


function HomeTask () {
  const [showInput, setShowInput] = useState(false);

  const handleShowInput = () => {
      setShowInput(true);
  };

  const handleHideInput = () => {
      setShowInput(false);
  };

  const [enteredTodo, setEnteredTodo] = useState('');

  const addTodoHandler = async () => {
      // ecrire dans un fichier
      await writefile(enteredTodo)
  };

  const today = new Date();

    return (
        <View style={styles.containerFlex}>
            <View style={styles.topScreen}>
              <ImageBackground source={myImage} resizeMode="cover" style={styles.image}>
              {/* <Button icon="plus" mode='contained' style={styles.myButton} onPress={handleShowInput}/> */}
              {!showInput ? (
                <Button icon="plus" mode='contained' style={styles.myButton} onPress={handleShowInput}/>
                ): (
                  <View>
                    <TextInput
                      style={styles.input}
                      value={enteredTodo} 
                      onChangeText={(value) => {setEnteredTodo(value)}} 
                      placeholder="Saisir une nouvelle tache"
                    />
                    <View>
                      <Button icon="plus" mode='contained' style={styles.myButton} onPress={addTodoHandler}/>
                      <Button icon="eye" mode='contained' style={styles.myButton} onPress={handleHideInput}/>
                    </View>
                  </View>
                )}
              <View style={styles.textContainer}>
                <Text style={styles.myText}>{today.getDate()}/{today.getMonth()}</Text>
                <Text style={styles.myText}>My Day</Text>
              </View>

            </ImageBackground>
            </View>

            <View style={styles.topScreen}>
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
    topScreen: {
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
    bottomScreen: {
      flex: 5,
      justifyContent: 'center',
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
    input: {
      marginTop: 10,
      padding: 10,
      borderRadius: 10,
      backgroundColor:'#87CEFA',
      width: '45%',
    },
    box: {
      backgroundColor: '#87CEFA',
      width: '100%',
      borderRadius: 10,
      padding: 20,
      margin: 10,
    },
    taskText: {
      color: 'black',
    },
  });
  