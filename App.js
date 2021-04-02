
import * as React from 'react'; 
import 'react-native-gesture-handler';
import { NavigationContainer,   } from '@react-navigation/native';
import { createStackNavigator,   } from '@react-navigation/stack'; 
import { YellowBox } from 'react-native';
import { LogBox } from 'react-native';

import BackgroundTimer from 'react-native-background-timer';

import Home from './src/Home';
import Cadastro from './src/Cadastro';
import Interna from './src/Interna';
import Login from './src/Login';
import AddDespesa from './src/AddDespesa';
import Preload from './src/PreLoad';
import AddReceita from './src/AddReceita';
import { StatusBar } from 'react-native';  
 


YellowBox.ignoreWarnings(['Setting a timer']);

const Stack = createStackNavigator();
  

function App() {
  BackgroundTimer.clearInterval(); 
 
  return (  
    <NavigationContainer>
      
      <Stack.Navigator>
        

      <Stack.Screen name="Interna" component={Interna}
            options={{
              title:'',   
              headerShown: false 
            }}  
            
        />
        <Stack.Screen name="Preload" component={Preload} 
              options={{
                title:'',   
                headerShown: false
              }}  
        />
        <Stack.Screen name="Home" component={Home}
           options={{
             title:'',   
             headerShown: false
           }}   
        />
        <Stack.Screen name="Cadastro" component={Cadastro} 
            options={{
              title:'',   
              headerShown: false
            }} 
        />  
        
        <Stack.Screen name="Login" component={Login} 
            options={{
              title:'',   
              headerShown: false
            }}  
        />
        <Stack.Screen name="AddReceita" component={AddReceita} 
            options={{
              title:'',   
              headerShown: false
            }}  
        />

        <Stack.Screen name="AddDespesa" component={AddDespesa} 
            options={{
              title:'',   
              headerShown: false
            }} 
        /> 
         
      </Stack.Navigator>

      <StatusBar  
      // remove status bar 
      hidden = {false}   
      //preenche area
      translucent = {true}

      backgroundColor={'transparent'}
       
      />
      
    </NavigationContainer>

     
  );
} 
export default App;

