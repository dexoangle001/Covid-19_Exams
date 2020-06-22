import React from "react";
import {
    View,
    Text,
    Button,
    StyleSheet
} from "react-native";

const SettingsScreen=()=>{
    return(
        <View style={styles.Container}>
            <Text>Bottom SettingsScreen</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    Container:{
        alignItems:'center',
        justifyContent:'center'
    }
})

export default SettingsScreen;