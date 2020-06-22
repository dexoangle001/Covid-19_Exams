import React,{useState} from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
    Dimensions,
    ScrollView,
    Image
} from "react-native";


const {width}=Dimensions.get("window")
const height= width * 0.6;

 const images=[
     
     'https://images.pexels.com/photos/3807629/pexels-photo-3807629.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
     'https://images.pexels.com/photos/3985214/pexels-photo-3985214.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
     'https://images.pexels.com/photos/3961224/pexels-photo-3961224.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

 ]
 

const VitalsScreen=()=>{

    const change=({nativeEvent})=>{
        const slide=Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width);

        if(slide !==active){
            setActive({active:slide});
        }
    }

    const [active,setActive]=useState(0);

    return(
        <ScrollView>
            <View style={styles.Container}>
            
            <View>
            <View style={{
                  paddingTop:30,
                  backgroundColor:"black",
                  alignItems:'center',
                  paddingBottom:30
              }}>
                  <Text style={{
                      fontFamily:'sans-serif-medium',
                      fontSize:25,
                      color:"white"
                  }}>Symptoms Of Covid-19</Text>
              </View>
            </View>
  
            <View style={{
                padding:30,
                alignItems:'center'
            }}>
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
            </View>
  
            <View style={{
                backgroundColor:'black',
                paddingBottom:30,
                paddingLeft:10,
                paddingTop:28
                
            }}>
                <Text style={{
                    color:'white'
                }}>
                    Signs and symptoms of coronavirus disease 2019 (COVID-19) may appear two to 14 days after exposure. This time after exposure and before having symptoms is called the incubation period. Common signs and symptoms can include:

                </Text>

                <View style={{
                    paddingTop:30,
                    
                }}>
                <View style={{
                    paddingBottom:20
                }}>
                <Text style={{
                    color:"white",
                    fontSize:20
                }}>
                    ⚪  Fever

                </Text>
                </View>
               <View style={{
                   paddingBottom:20
               }}>
               <Text style={{
                    color:"white",
                    fontSize:20
                }}>
                    ⚪  Cough

                </Text>
               </View>
               <View style={{
                   paddingBottom:50
               }}>
               <Text style={{
                    color:"white",
                    fontSize:20
                }}>
                    ⚪  Tiredness

                </Text>
               </View>
                </View>
                
            </View>
  
          </View>
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    Container:{
        
    },
    Slider_Container:{
        marginTop:10,
        width,
        height,
        paddingTop:10,        
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
})

export default VitalsScreen;