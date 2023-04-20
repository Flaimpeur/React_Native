import { View, Text, StyleSheet } from "react-native";
import { Button } from 'react-native-paper';
import { Colors } from "react-native/Libraries/NewAppScreen";

function Calendar() {
  return (
    <View>
        <Text>Welcome to the second screen</Text>
          <Button icon="plus" mode="outline" style={styles.container} onPress={() => console.log('Pressed')}/>
    </View>
  )
}

export default Calendar

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    height:400
  }
});