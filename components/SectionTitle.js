import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';


const SectionTitle = ({navigation, title, linkPage}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Product', linkPage)}>
        <Text style={styles.link}>See all</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {    
    marginLeft:10,
    marginRight:14,
    marginTop: 5.0,
    marginBottom: 10.0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 17,
    color: '#181725',    
  },
  link: {
    padding:4,    
    fontFamily: 'Montserrat-Bold',
    fontSize: 15,
    color: '#53B175',
    borderColor:"#53B175",
    borderWidth:0.7,
    borderRadius:4

  },
});

export default SectionTitle;
