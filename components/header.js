import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Header = ({ navigation, title }) => {
  return (
    <View style={styles.container}>
      <View style={{
        flexDirection:'row',
        paddingLeft:10
      }}>

        
        <View style={{
          paddingLeft:130,
          paddingBottom:10,
          backgroundColor:"#7AD5D5",
        }}>
        <Text style={{ 
          fontSize: 30, 
          color: 'white', 
          textAlign: 'center', 
          fontFamily:'sans-serif-medium' 
          }}>
          {title}
        </Text>
      </View>

      </View>

      
      
      <View style={{ flex: 2 }}>
        
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#7AD5D5',
    height: 90,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});
