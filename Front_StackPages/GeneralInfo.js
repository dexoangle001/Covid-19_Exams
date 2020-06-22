import React from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
    Image
} from "react-native";

import {WebView} from "react-native-webview";
import { ScrollView } from "react-native-gesture-handler";

const GeneralInfo=({navigation})=>{
    return(
        <ScrollView>
            <View>
            <View style={styles.container}>
            <View style={{
                paddingTop:30,
                paddingRight:50,
                paddingLeft:50,
                paddingBottom:30
                
            }}>
                <Text style={{
                    fontSize:30,
                    fontWeight:'bold'
                }}>General Information</Text>
            </View>           
            
        </View>
        <View style={{
            paddingTop:20,
            backgroundColor:'white',
            paddingLeft:50,
            paddingBottom:50
        }}>
            <Image
            style={{
                width:300,
                height:200
            }}
            source={{
                uri:'https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            }}
            />
            
        </View>

        <View style={{
            backgroundColor:'white',
            paddingTop:20,
            paddingLeft:15,
            paddingRight:15,
            paddingBottom:60
        }}>
            
                <Text>Coronaviruses are a family of viruses that can cause illnesses such as the common cold, </Text>
                <Text>severe acute respiratory syndrome (SARS) and Middle East respiratory syndrome (MERS).</Text> 
                <Text>In 2019, a new coronavirus was identified as the cause of a disease outbreak that originated in China.</Text>
                <Text>The virus is now known as the severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). </Text>
                <Text>The disease it causes is called coronavirus disease 2019 (COVID-19). In March 2020, </Text>
                <Text>the World Health Organization (WHO) declared the COVID-19 outbreak a pandemic.</Text>
                <Text>Public health groups, including the U.S. Centers for Disease Control and Prevention (CDC) and WHO, </Text>
                <Text>are monitoring the pandemic and posting updates on their websites. </Text>
                <Text>These groups have also issued recommendations for preventing and treating the illness</Text>
                
           
        </View>
        
        <View style={{
            paddingLeft:50,
            paddingTop:10,
            paddingBottom:80,
            backgroundColor:'white'
        }}>
        <View style={{
                width:300,
                height:20,
            }}>
                <Button
                title="Lets get started..."
                color="black"
                onPress={()=>navigation.navigate('Home',{screen:'ReportScreen'})}
                />
            </View>
        </View>
        </View>
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    container:{
       
        backgroundColor:'white',
       
    
    },
    Covers_Text:{
        fontSize:60,
        fontWeight:'bold'
    }
})

export default GeneralInfo;