import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ludo from './components/ludo';

class App extends Component{
     
   constructor(props){
     super(props)
     this.state=this.initState();
   }
 
   initState(){
     return{
       isGameInProgress:true
     }
   }
   render(){
   
     if(this.state.isGameInProgress){
       return<Game></Game>
     }else{
       return <Home></Home>
     }
   
   
   } 
 
 
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: 'lightblue',
     alignItems: 'center',
     justifyContent: 'center',
     paddingLeft:60,
     paddingRight:6,
   },
 });
 export default App;
 
