import React from 'react';
import { View, Text } from 'react-native'; 
import { globalStyles } from '../styles/global';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Search = () => {
  const insets = useSafeAreaInsets();
    return (
      <View style={{ backgroundColor: '#fff', flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom,}}>
        <View style={{flexDirection:'row'}}>
          <View style={{justifyContent:'center'}}>
            <Ionicons name="ios-return-down-back" size={28} color="black" style={{ marginLeft: 10 }} /></View>
           <View style={[globalStyles.home_Serachbar,{width:340,justifyContent:'center'}]}>
             <Text>
              hey
               </Text>
        </View>
      </View>
    </View>
    )
};


export default Search;