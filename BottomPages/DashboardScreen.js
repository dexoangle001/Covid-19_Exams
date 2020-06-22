import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    Dimensions,
    ActivityIndicator,
    ImageBackground
} from "react-native";
import Header from "../components/header";
import {useQuery} from "react-apollo";
import {GET_COUNTRY_DATA} from "../components/Query";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import {statsData,formatNum} from "../components/global";

const DashboardScreen=({route,navigation})=>{
    const { countryName } = route.params;
    const {data:countryData,loading,error} =useQuery(GET_COUNTRY_DATA,{
        variables:{countryName}
    });

    if(error){
        console.log(error);
    }

    return(
        <ScrollView>
            <View style={styles.container}>
            <Header navigation={navigation} title={countryName}  />
            <View> 
                
                <View style={{
                    marginLeft:-29
                }}>
                    {
                        loading ? (
                            <View >
                             <ActivityIndicator size="large" color="#62C28E" />
                            </View>
                        ): countryData ? (
                            
                                                        
                            <View style={{
                                paddingLeft:30,
                                backgroundColor:'#5DD3BF'
                            }}> 
                            <View style={{
                                paddingTop:20,
                                backgroundColor:'white'
                            }}>
                                
                            <View style={{
                                paddingTop:20,
                                paddingBottom:20,
                                paddingLeft:20,
                                backgroundColor:"black"
                            }}>
                                <View style={{
                                    paddingBottom:20
                                }}>
                                    <Text style={{
                                        fontSize:30,
                                        fontWeight:'bold',
                                        fontFamily:'sans-serif-medium',
                                        color:"white"
                                  
                                    }}>Tests </Text> 
                                </View>
                                <View style={{
                                    paddingLeft:35
                                }}>
                                    <Text style={{
                                        fontSize:30,
                                        fontWeight:'bold',
                                        fontFamily:'sans-serif-medium',
                                        color:"white"                                     
                                    }}>{countryData.country.result.tests} </Text>
                                </View>
                            </View>

                                
                            <View style={{
                                paddingBottom:20,
                                paddingLeft:30
                            }}>
                                <View style={{
                                    paddingBottom:20
                                }}><Text style={{
                                    fontSize:30,
                                        fontWeight:'bold',
                                        fontFamily:'sans-serif-medium',
                                      
                                }}>Cases</Text></View>
                                <View style={{
                                    paddingLeft:30
                                }}><Text style={{
                                    fontSize:30,
                                        fontWeight:'bold',
                                        fontFamily:'sans-serif-medium',
                                        
                                }}>{countryData.country.result.cases} </Text></View>
                            </View>

                            <View style={{
                                paddingLeft:30,
                                paddingBottom:20,
                                backgroundColor:"black"
                                
                            }}>
                                <View style={{
                                    paddingBottom:20
                                }}><Text style={{
                                    fontSize:30,
                                    fontWeight:'bold',
                                    fontFamily:'sans-serif-medium',
                                    color:"white"                                   
                                }}>Deaths</Text></View>
                                <View style={{
                                    paddingLeft:30
                                }}><Text style={{
                                    fontSize:30,
                                    fontWeight:'bold',
                                    fontFamily:'sans-serif-medium',
                                    color:"white"                                    
                                }}>{countryData.country.result.deaths} </Text></View>
                            </View>

                            <View style={{
                                paddingBottom:20,
                                paddingLeft:30
                            }}>
                                <View style={{
                                    paddingBottom:20
                                }}><Text style={{
                                    fontSize:30,
                                    fontWeight:'bold',
                                    fontFamily:'sans-serif-medium',
                                   
                                }}>Recovered</Text></View>
                                 <View style={{
                                     paddingLeft:30
                                 }}><Text style={{
                                    fontSize:30,
                                    fontWeight:'bold',
                                    fontFamily:'sans-serif-medium',
                                    
                                 }}>{countryData.country.result.recovered} </Text></View>
                            </View>

                            <View style={{
                                paddingBottom:20,
                                paddingLeft:30,
                                backgroundColor:'black'
                            }}>
                                <View style={{
                                    paddingBottom:20
                                }}><Text style={{
                                    fontSize:30,
                                    fontWeight:'bold',
                                    fontFamily:'sans-serif-medium',
                                    color:'white'                                  
                                }}>Active</Text></View>
                                <View style={{
                                    paddingLeft:30
                                }}><Text style={{
                                    fontSize:30,
                                    fontWeight:'bold',
                                    fontFamily:'sans-serif-medium',
                                    color:"white"                                
                                }}>{countryData.country.result.active} </Text></View>
                            </View>

                            <View style={{
                                paddingBottom:20,
                                paddingLeft:30,
                                
                            }}>
                                <View style={{
                                    paddingBottom:20
                                }}><Text style={{
                                    fontSize:30,
                                    fontWeight:'bold',
                                    fontFamily:'sans-serif-medium',
                                 
                                }}>Critical</Text></View>
                                <View style={{
                                    paddingLeft:30
                                }}><Text style={{
                                    fontSize:30,
                                    fontWeight:'bold',
                                    fontFamily:'sans-serif-medium',
                                }}>{countryData.country.result.critical} </Text></View>
                            </View>
                                
                                
                            </View>        
                                <View style={{
                                    alignItems:'center'                                    
                                }}>
                                    
                                    
                                    </View>
                                    </View>
                        ):null}
                </View>
            </View>

        </View>
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'black',
        paddingBottom:20
        
    },
    
})

export default DashboardScreen;
