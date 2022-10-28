import { StyleSheet, View, Image, Text, ImageBackground,
    TextInput,Button, KeyboardAvoidingView, TouchableOpacity} from 'react-native'
  
  export default function Login() {
    return (
  
      // for logo
      
      <View style={styles.img}>  <ImageBackground
      source={require("../assets/health.png")}
      style={{ width: 200, height: 200 }}
    />  
  
       {/* for heading */}
      <View>
        <Text style={styles.welcome}>Welcome to Zahra's Bakery</Text>
      </View>
    
    {/* for form validation  */}
  
      <KeyboardAvoidingView style={styles.inputGroup}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={(text) => {}}
          />
        </View>
  
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => {}}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(text) => {}}
            secureTextEntry
          />
        </View>
      </KeyboardAvoidingView>
   
        {/* for sign up */}
  
      <TouchableOpacity style={styles.sign}>
        <Text style={styles.signUp}>SignUp</Text>
      </TouchableOpacity>
  
      <View style={styles.account}>
        <Text style={styles.acc}>
           Do You Have an Account?
               &nbsp;
          <Text
            style={[styles.acc, styles.link]}
            onPress={() => Linking.openURL("#")}
          >
            Login
          </Text>
        </Text>
      </View>
  
    </View>
    
      
   
    );
      }
  const styles = StyleSheet.create({
    img: {
      paddingTop: 12,
      justifyContent: "center",
      alignItems: "center",
    },
    welcome: {
      fontSize: 25,
      textAlign: 'center',
      margin: 7,
      fontWeight: 'bold',
      color: 'green',
      fontFamily:"times new roman"
    },
    inputGroup: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      },
      container: {
          // backgroundColor: "tomato",
          width: "110%",
          padding: 7,
      },
      input: {    
          padding: 15,
          borderWidth: 2,
          borderColor: 'black',
          marginBottom: 5,
          fontSize: 18,
          borderRadius: 15,
      },
      sign: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
      },
      signUp: {
        fontSize: 18,
        backgroundColor: "blue",
        paddingVertical: 13,
        paddingHorizontal: 30,
        borderRadius: 20,
      },
      account: {
        alignItems: "center",
        marginTop: 20,
        fontSize: 18,
      },
      acc: {
        fontWeight: "bold",
        },
        link: {
        color: "red",
        }
  });