import React from "react";
import {
    View,
    Text,
    Button,
    StyleSheet
} from "react-native";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";

const VerificationStack=({navigation})=>{
    return(
        <View style={styles.container}>

            <View style={styles.Verify_View}>
                <Text style={{
                    fontSize:30,
                    fontWeight:'bold'
                }}>Verification PIN</Text>
            </View>
            <View style={styles.Code_View}>
                <Text style={{
                    fontWeight:'500',
                    fontSize:15
                }}>Enter the Verification code</Text>
                <Text style={{
                    fontWeight:'500',
                    fontSize:15
                }}>we just sent you on</Text>
                <Text style={{
                    fontWeight:'500',
                    fontSize:15
                }}>0558485290</Text>
            </View>

            <View style={styles.PhoneInput}>
                <TextInput
                placeholder="Enter Code"
                />
                <Text>____________________________________________</Text>
            </View>
           
    
            <View style={styles.Submit_Btn}>
                <Button
                title="Submit Code"
                color='black'
                onPress={()=>navigation.navigate('GeneralInfo' )}
                />
            </View>
            <View style={styles.Rec_View}>
                <TouchableOpacity>
                    <Text>Have not received your code?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.Res_View}>
                <TouchableOpacity>
                    <Text>Resend Code</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        alignItems:"center",
        paddingTop:70        
        
    },
    Verify_View:{
        paddingTop:20,
        paddingBottom:15
    },
    Code_View:{
        paddingBottom:200,
        alignItems:'center'
    },
    PhoneInput:{
        marginTop:-70,
        paddingBottom:30,
        backfaceVisibility:'visible'
    },
    Submit_Btn:{
        paddingBottom:20
    },
    Rec_View:{
        paddingBottom:10
    }
})

export default VerificationStack;