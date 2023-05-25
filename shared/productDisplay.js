import React from 'react';
import { TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';
 
function ProductDisplay({ source, productName, productWeight, productPrice, quantity, id}) {
   
  return (
    <View style={{ paddingRight: 5, paddingLeft: 5, }}>

      <View style={globalStyles.product_cases}>
      <View style={{flexDirection:'row'}}>
          <View style={{flex:1}}> 
              <Image style={globalStyles.product_images} source={source} />
          </View>
          <View style={{flex :2,marginLeft:12,marginTop:5}}>
        <View style={{ paddingLeft: 18 }}>

         <Text style={{ fontFamily: 'Lato-Bold', fontSize: 18 ,paddingTop:3}}>₹{productPrice}</Text>

          <Text style={{ fontFamily: 'Montserrat-Regular' }}>{productName}</Text>

          <Text style={{ fontFamily: 'Montserrat-Regular', color: '#888' }}>{productWeight}</Text>

        </View>
        <View style={{ position: 'absolute', bottom: 0,right:4, padding: 0, width: 115 }}>
              <TouchableOpacity onPress={() => { console.log("hello mofo") }}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>ADD</Text>
                </View>
              </TouchableOpacity> 
          </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({

  button: {
    marginRight:  5,
    borderRadius: 3,
    paddingVertical: 6,
    paddingHorizontal: 2,
    backgroundColor: '#e76122',
  },
  buttonText: {   
    color: '#f5bd73',
    fontFamily: 'Montserrat-Regular',
    fontSize: 13, 
    textAlign:'center'
  }

});
export default ProductDisplay;