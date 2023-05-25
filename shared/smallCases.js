 
import React from 'react';
import { TouchableOpacity, Text, View,Image } from 'react-native';
import { globalStyles } from '../styles/global';

  function SmallCases({ text, onPress, source }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{        
        height:145,
        width: 89,        
        }}>
      <View style={globalStyles.small_cases}>
        <Image
          style={globalStyles.small_image}
          source={source}
        />
          <Text style={globalStyles.small_cases_textStyle}>{text}</Text>
      </View>
      </View>
    </TouchableOpacity>
  );
}

export default SmallCases;