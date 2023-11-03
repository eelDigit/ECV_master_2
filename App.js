// import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
  Button,
  Alert,
} from "react-native";

export default function App() {
  // console.log("app started");

  // let x;
  // x.toString();
  // console.log(require("./assets/icon.png"));
  const handlPress = () => console.log("text pressed");
  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.curentHeight : 0,
        backgroundColor: "teal",
        flex: 1,
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // alignItems: "baseline",
      }}
    >
      {/* <View
        style={{
          backgroundColor: "dodgerblue",
          flex: 1,
          width: 100,
          height: 300,
          alignSelf: "flex-start",
        }}
      />
      <View
        style={{
          backgroundColor: "red",
          width: 100,
          height: 200,
          flex: 2,
          // alignSelf: "flex-start",
        }}
      />
      <View
        style={{
          backgroundColor: "green",
          width: 100,
          height: 100,
          flex: 3,
          alignSelf: "flex-end",
        }}
      /> */}

      {/* // <SafeAreaView> */}
      {/* SafeAreaView valable pour IOS */}
      <Text numberOfLines={1} onPress={handlPress}>
        Done voici un texte tres long , encore plus long , encore plus long Done
        voici un texte tres long , encore plus long , encore plus long
      </Text>

      {/* <Image source={require("./assets/icon.png")} /> */}

      <TouchableWithoutFeedback onPress={() => console.log("image tapped")}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/id/237/200/300",
          }}
          // style={{ width: 40, height: 40 }}
        />
      </TouchableWithoutFeedback>

      <Button
        title="Click me"
        onPress={() =>
          Alert.alert("My title", "My message", [
            { text: "yes", onPress: () => console.log("yes") },
            { text: "No", onPress: () => console.log("No") },
          ])
        }
        color="orange"
      />
      <Button
        title="clic"
        onPress={() =>
          Alert.prompt("My itle", "My message", (text) => console.log(text))
        }
        color="tomato"
      />

      {/* <StatusBar style="auto" /> */}
      {/* </SafeAreaView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
