import React,{useState} from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
    Image,
    Picker,
    ActivityIndicator
} from "react-native";
import { EvilIcons, FontAwesome } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import {useQuery} from "@apollo/react-hooks";
import {GET_GLOBAL_DATA} from "../components/Query";
import { countries } from "../components/global";
import {AntDesign,Feather} from "@expo/vector-icons";
import {PieChart} from "react-native-chart-kit";
import { FlatList } from "react-native-gesture-handler";
import {
    formatNum,
    communicate,
  } from '../components/global'; 
const {width}=Dimensions.get("window")
const height= width * 0.6;

 const images=[
     'https://images.pexels.com/photos/4429561/pexels-photo-4429561.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
     'https://images.pexels.com/photos/4230623/pexels-photo-4230623.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
     'https://www.pexels.com/photo/clinical-blood-collection-tubes-and-syringes-on-yellow-background-4210560',
     'https://images.pexels.com/photos/4127590/pexels-photo-4127590.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
     'https://images.pexels.com/photos/3952238/pexels-photo-3952238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
     'https://images.pexels.com/photos/4177563/pexels-photo-4177563.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

 ]


const HomeScreen=({navigation})=>{

    const {data:globalData,loading:globalDataLoading}= useQuery(
        GET_GLOBAL_DATA
    );

    const [search,setSearch]= useState(' ');    

    const [active,setActive]=useState(0);

    const change=({nativeEvent})=>{
        const slide=Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width);

        if(slide !==active){
            setActive({active:slide});
        }
    }

    return(
        <ScrollView>
        <View style={styles.Container}>
             

            <View style={styles.Home_View}>
                <Text style={{
                    fontWeight:'bold',
                    fontSize:30
                }}>Home</Text>
            </View>

            <View style={styles.Slider_Container}>
                <ScrollView
                onScroll={change} 
                pagingEnabled 
                horizontal 
                showsHorizontalScrollIndicator={false}
                style={styles.Scroll}
                >
                {
                    images.map((images,index)=>(
                        <Image 
                        source={{uri:images}}
                        style={styles.Image_style}  
                />

                    ))
                }

                </ScrollView>
                <View style={styles.pagination}>
                    {
                       images.map((i,k)=>(
                        <Text 
                        key={k}
                        style={
                            k==setActive? styles.paging_ActiveText :
                            styles.paging_Text
                        }
                        >
                            ⚪
                        </Text>
                        )) 
                    }
                </View>                

            </View>

            <View style={{
                paddingTop:40,
                paddingLeft:10,
                marginBottom:-10
            }}>
                <Text>Select Country</Text>
            </View>
            

            <View style={styles.searchContainer}>
                <Picker
                style={styles.search}
                onValueChange={(itemValue,itemIndex)=>{
                    setSearch(itemValue);
                }}
                selectedValue={search}
                >
                    <Picker.Item value=" " label="Select a Country"  />
                    {countries.map((country)=>{
                        return(
                            <Picker.Item label={country} value={country} key={country}  />
                        )
                    })}
                </Picker>
            </View>

            <View style={styles.Searching_View}>
            <TouchableOpacity
            style={styles.search}
            onPress={() => {
              search !== ''
                ? navigation.navigate('Dashboard', {
                    countryName: search,screen:'DashboardScreen'
                  })
                : null;
            }}
          >
            <AntDesign name="arrowright" size={25} color="black" />
          </TouchableOpacity>
            </View>      

        </View>
        
        <View style={{
            paddingLeft:25,
            paddingTop:20
        }}>
            <Text>Call to make a report</Text>
        </View>

        <View style={{
            paddingTop:20,
            paddingBottom:20
        }}>
        <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',

            }}
          >
           <View style={{
               marginLeft:-20,
               
           }}>
           <TouchableOpacity
              onPress={() => communicate('tel')}              
            >
              <View style={{
                  paddingLeft:10
              }}>
              <Feather name="phone-call" size={22} color="black" />
              </View>
              <View style={{
                  alignItems:'center',
                  paddingTop:5
              }}>
              <View style={{
                  alignItems:'center',
                  paddingTop:5
              }}>
              <Text>Call now</Text>
              </View>
              </View>
            </TouchableOpacity>
           </View>

           <View style={{
               paddingLeft:230
           }}>
           <TouchableOpacity
              onPress={() => communicate('sms')}
            >
              <View style={{
                  paddingLeft:15
              }}>
              <AntDesign name="message1" size={22} color="black" />
              </View>
              <View style={{
                  paddingTop:5,
                  paddingLeft:-10
              }}>
              <Text>Send SMS</Text>
              </View>
            </TouchableOpacity>
           </View>

          </View>
        </View>
        
        </ScrollView>
        
    )
}

const styles=StyleSheet.create({
    Container:{
        paddingTop:20,
        backgroundColor:'white',
        paddingBottom:50       
        
    },
    Icon_View:{
        flexDirection:'row',
        marginTop:-9,
        backgroundColor:'white',
        height:80,
        alignItems:'center'
    },
    Evil:{
        paddingLeft:5

    },
    Awesome:{
        paddingLeft:320,
        paddingTop:3
    },
    Home_View:{
        paddingLeft:10
    },
    Slider_Container:{
        marginTop:10,
        width,
        height,        
    },
    Scroll:{
        width,
        height
    },
    Image_style:{
        width,
        height,
        resizeMode:'cover'
    },
    pagination:{
        flexDirection:'row',
        position:'absolute',
        bottom:0,
        alignSelf:'center'

    },
    paging_Text:{
        color:'#7C89D6',
        margin:3,
        fontSize:(width/30)
    },
    paging_ActiveText:{
        color:"black",
        margin:3,
        fontSize:(width/30)
    },
    btn: {
        width: 90,
        height: 35,
        backgroundColor: '#858EC6',
        borderRadius: 5,
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 5,
      },
      MySearch: {
        margin: 10,
      },
      search: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 2,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 10,
        backgroundColor: '#eee',
        fontSize: 16,
        color: 'gray',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 5,
      },
      btn: {
        width: 80,
        height: 35,
        backgroundColor: '#ED4430',
        borderRadius: 5,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 5,
      },


})

export default HomeScreen;
