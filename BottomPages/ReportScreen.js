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
     'https://images.pexels.com/photos/3943907/pexels-photo-3943907.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
     'https://images.pexels.com/photos/3987151/pexels-photo-3987151.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
     'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
     'https://images.pexels.com/photos/3873179/pexels-photo-3873179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
     'https://images.pexels.com/photos/3786215/pexels-photo-3786215.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
     'https://images.pexels.com/photos/3959485/pexels-photo-3959485.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
     'https://images.pexels.com/photos/3733516/pexels-photo-3733516.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
     'https://images.pexels.com/photos/3952193/pexels-photo-3952193.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

 ]
 

const ReportScreen=()=>{

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
                  }}>Measures to Prevent Covid-19</Text>
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
                paddingBottom:30
                
            }}>
                <Text style={{
                    color:'white'
                }}>
                Although there is no vaccine available to prevent COVID-19, you can take steps to reduce your risk of infection. WHO and CDC recommend following these precautions for avoiding COVID-19:        Avoid large events and mass gatherings.
                Avoid close contact (within about 6 feet, or 2 meters) with anyone who is sick or has symptoms.
                Stay home as much as possible and keep distance between yourself and others (within about 6 feet, or 2 meters), especially if you have a higher risk of serious illness. Keep in mind some people may have COVID-19 and spread it to others, even if they don't have symptoms or don't know they have COVID-19.
               Wash your hands often with soap and water for at least 20 seconds, or use an alcohol-based hand sanitizer that contains at least 60% alcohol.
              Cover your face with a cloth face mask in public spaces, such as the grocery store, where it's difficult to avoid close contact with others, especially if you're in an area with ongoing community spread. Only use nonmedical cloth masks — surgical masks and N95 respirators should be reserved for health care providers.
              Cover your mouth and nose with your elbow or a tissue when you cough or sneeze. Throw away the used tissue. Wash your hands right away.
              Avoid touching your eyes, nose and mouth.
              Avoid sharing dishes, glasses, towels, bedding and other household items if you're sick.
              Clean and disinfect high-touch surfaces, such as doorknobs, light switches, electronics and counters, daily.
              Stay home from work, school and public areas if you're sick, unless you're going to get medical care. Avoid public transportation, taxis and ride-sharing if you're sick.
              If you have a chronic medical condition and may have a higher risk of serious illness, check with your doctor about other ways to protect yourself.
                          </Text>
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

export default ReportScreen;