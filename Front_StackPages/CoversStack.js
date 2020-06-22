import React from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
    ImageBackground
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { createStackNavigator } from '@react-navigation/stack';
import StackNavigation from "../navigation/StackNavigation"

const CoversStack=({navigation})=>{
    return(
        <View style={styles.container}>
            
                <View style={styles.Covers_View}>
                <Text style={styles.Covers_Text}>COVERS</Text>
                </View>

                <View style={styles.Response_VText}>
                    <Text style={styles.Response_Text}>(COVID-19 EMERGENCY RESPONSE SOLUTION)</Text>
                </View>
                    <View style={styles.Covid_VText}>
                    <Text style={{
                        fontSize:12,
                        fontWeight:'bold'
                    }}>
                        Join the effort by well-meaning Africans using technology to show
                    </Text>
                    <Text style={{
                        fontSize:12,
                        fontWeight:'bold'
                    }}>
                        down and eventually halt the spread of COVID-19
                    </Text>
                </View>

                <View style={styles.Handle_Phone}>

                

                <View style={styles.Buttn_view}>
                   <Button
                   title="Get Started"
                   color="black"
                   onPress={()=>navigation.navigate('GeneralInfo')}
                   />
                </View>
                </View>
            
        </View>

    )
}

const styles=StyleSheet.create({
    container:{     
       paddingTop:100,
       alignItems:'center'
    },
    Covers_Text:{
        fontSize:60,
        fontWeight:'bold'
    },
    Response_VText:{

    },
    Response_Text:{
        fontSize:15,
        fontWeight:'bold'
    },
    Covid_VText:{
        alignItems:'center'
    },
    Cover_Back:{
        resizeMode:'cover'

    },
    Covers_View:{
        alignItems:'center'
    },
    Phone_view:{        
        borderWidth:1,
        width:300,
        height:50,
        paddingRight:200,
        paddingTop:25,
        borderColor:'white'
        
    },
    Handle_Phone:{
        paddingTop:100,
        alignItems:'center'

    },
    Buttn_view:{
        paddingTop:20,
        width:300,
        
    }
})

export default CoversStack;