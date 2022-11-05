import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';

export default function Ludo (){
    return (
        <View style={styles.container}>
            <Text style={styles.logoStyle}>Ludo Classic</Text>
            <TouchableOpacity style={styles.down}>
      <Text style={styles.Up}>PLAY GAME</Text>
    </TouchableOpacity> 
            <Image source={require("../assets/ludo.png")} style={styles.imageStyle} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'yellow',
    },
    logoStyle:{
        color:'#f00',
        fontSize:40,
        alignSelf:'center',
        marginTop:70,
        fontWeight:'bold'
    },
    imageStyle:{
        margin:35,
        width:'50%',
        height:'40%',
        resizeMode:'contain',
        alignSelf:'center'
    },
    down: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
      },
      Up: {
        fontSize: 18,
        backgroundColor: "green",
        paddingVertical: 13,
        paddingHorizontal: 30,
        borderRadius: 20,
        color:'white'
      },
})
