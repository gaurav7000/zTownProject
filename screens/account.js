import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import { Feather, Entypo, AntDesign, MaterialIcons   } from '@expo/vector-icons';
const Account = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={{ flexDirection: 'row', right: 11 }}>
          <Text style={{ fontSize: 16, fontFamily: 'Montserrat-Bold' }}>Profile</Text>
        </View>
      ),
      
    })
  }, [navigation])
  return (
    <View style={{flex:1 ,backgroundColor:'#fff'}}>
      <TouchableOpacity style={{flexDirection:'row' ,height:130,borderBottomWidth:1,borderColor:'#ddd'}}>
        <View style={{   flex: 1, alignItems:'center',justifyContent:'center' }}>
          <Image
            style={{
              margin: 4,
              width: 75,
              height: 75,
              resizeMode: 'center',  
                }}
            source={require('.//..//assets/login.png')}
          />
          </View>
        <View style={{   flex: 2, justifyContent: 'center'}}>
          <Text style={{ fontSize: 20, fontFamily: 'Lato-Bold',}}>Gaurav Kumawat</Text>
          <Text style={{ fontSize: 16, fontFamily: 'Montserrat-Regular',letterSpacing:1 }}>8446197000</Text>
        </View>
      </TouchableOpacity>
      <View>
        <View style={{marginLeft:20}}> 
          <TouchableOpacity style={{ flexDirection: 'row', height: 70,alignItems:'center'}}>
            <Feather name="shopping-bag" size={20} color="black" style={{ padding: 7 }} />
            <Text style={{ fontFamily:'Montserrat-Regular' ,fontSize:16,marginLeft:5}}>My Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', height: 70, alignItems: 'center' }}>
            <Entypo name="location" size={20} color="black" style={{ padding: 7 }}/>
            <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 16 ,marginLeft:5}}>My Address</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', height: 70,alignItems:'center'}}>
            <AntDesign name="customerservice" size={20} color="black" style={{ padding: 7 }} />
            <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 16,marginLeft:5 }}>Customer Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', height: 70, alignItems: 'center' }}>
            <MaterialIcons name="star-rate" size={20} color="black" style={{ padding: 7 }} />
            <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 16,marginLeft:5 }}>Rate Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', height: 70, alignItems: 'center' }}>
            <Entypo name="share" size={20} color="black" style={{ padding: 7 }} />
            <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 16 ,marginLeft:5}}>Share</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', height: 70, alignItems: 'center' }}>
            <AntDesign name="exclamationcircleo" size={20} color="black" style={{ padding: 7 }} />
            <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 16 ,marginLeft:5}}>About Us</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 10, margin : 14, bottom: 0, position: 'absolute',color:'#888' }}>App Verison v1.0</Text>
    </View>
  );
};

export default Account;
