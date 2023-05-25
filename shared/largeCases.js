import React, { memo,useState } from 'react';
import { TouchableOpacity, Text, View, Image, StyleSheet} from 'react-native';
import { globalStyles } from '../styles/global'; 

function LargeCases({   source, productName, productWeight, productPrice }) {
 
  function AddButton() {
    return (
      <TouchableOpacity onPress={() => {console.log('hell') }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>ADD</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={{ paddingRight: 5, paddingLeft: 5, }}>     
    
        <View style={globalStyles.large_cases}>
  
          <Image style={globalStyles.large_images} source={source} />
  
            <View style={{paddingLeft: 13}}>
     
              <Text style={{fontFamily: 'Montserrat-Regular'}}>{productName}</Text>
    
              <Text style={{ fontFamily: 'Montserrat-Regular' ,color:'#888' }}>{productWeight}</Text>
    
              <Text style={{ fontFamily: 'Lato-Bold', fontSize:18 }}>₹{productPrice}</Text>
    
              </View>
            <View style={{ position: 'absolute' ,bottom:10, padding:2, width:172 ,paddingLeft:10,paddingRight:10}}>
          <TouchableOpacity onPress={() => { console.log("hello mofo") }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>ADD</Text>
            </View>
          </TouchableOpacity>
              </View>
              
        </View>
    
    </View>
  );
}
const styles = StyleSheet.create({
  button: { 
    borderRadius: 3,
    paddingVertical: 6,
    paddingHorizontal: 2,
    backgroundColor: '#e76122',
 
  },
  buttonText: {
    color: '#f5bd73',
    fontFamily: 'Montserrat-Regular',   
    textAlign: 'center',
  }
});
export default LargeCases;