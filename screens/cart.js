import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity,Dimensions } from 'react-native';
import { globalStyles } from '../styles/global';
import { initialWindowMetrics } from 'react-native-safe-area-context';

const Cart = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={{ flexDirection: 'row', right: 11 }}>
          <Text style={{ fontSize: 16, fontFamily: 'Montserrat-Bold' }}>Cart</Text>
        </View>
      ),
    });
  }, [navigation]);

  const windowWidth = Dimensions.get('window').width;
  const hasItemsInCart = false;  

  if (hasItemsInCart) {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: '#fff', padding: 16, justifyContent: 'space-between', flexDirection: 'row' }}>
          <View>
            <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 13, }}>Delivery Address</Text>
            <Text style={styles.BasicFont}>6, Brahim Alley, Near Bhiwandi Talkies</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Change</Text>
          </View>
        </View>
        <View style={styles.slotContainer}>
          <Text style={styles.BasicFont}>Shipment 1 of 1</Text>
          <Text style={styles.BasicFont}>3 Items</Text>
        </View>
        <View style={[styles.slotContainer, { backgroundColor: '#fff' }]}>
          <View>
            <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 16, marginBottom: 4 }}>Fri, 20 Aug, 7 AM - 3 PM</Text>
            <Text style={styles.BasicFont}>Free Delivery For This Slot</Text>
          </View>
          <View>
            <Text style={styles.BasicFont}>Free</Text>
          </View>

        </View>
        <View style={{ backgroundColor: '#fff', marginTop: 5 }}>
          <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 18, paddingLeft: 24, marginTop: 5 }}>Bill Details</Text>
          <View style={{ backgroundColor: '#fff', padding: 12, justifyContent: 'space-between', flexDirection: 'row', }}>
            <View>
              <Text style={styles.billFontLeft}>MRP</Text>
              <Text style={styles.billFontLeft}>Product Discount</Text>
              <Text style={styles.billFontLeft}>Delivery Charges</Text>
              <Text style={styles.billFontLeft}>Delivery Patner Tip</Text>
              <Text style={{ fontFamily: 'Montserrat-Bold', paddingBottom: 8, fontSize: 16 }}>Bill Total</Text>
            </View>

            <View >
              <Text style={[styles.billFontLeft, { textAlign: 'right' }]}>₹ 525</Text>
              <Text style={[styles.billFontLeft, { textAlign: 'right' }]}>₹- 9</Text>
              <Text style={[styles.billFontLeft, { textAlign: 'right' }]}>Free</Text>
              <Text style={[styles.billFontLeft, { textAlign: 'right' }]}>₹ 0</Text>
              <Text style={{ fontFamily: 'Montserrat-Bold', paddingBottom: 8, textAlign: 'right' }}>₹ 615</Text>
            </View>
          </View>
        </View>
        <View style={{ bottom: 0, position: 'absolute', width: windowWidth }}>
          <View style={{ backgroundColor: '#e76122', padding: 16, justifyContent: 'space-between', flexDirection: 'row', }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ justifyContent: 'center' }}>

                <Image style={[globalStyles.StyleForImage, { justifyContent: 'center' }]} source={require('.//..//assets/outline_shopping.png')} />
              </View>
              <View style={{ marginLeft: 12 }}>
                <Text style={[styles.BasicFont, { color: '#fff' }]}>3 Items</Text>
                <Text style={[styles.BasicFont, { color: '#fff' }]}>3 Items</Text>
              </View>
            </View>
            <View style={{ justifyContent: 'center' }}>
              <Text style={{ color: '#fff', fontFamily: 'Montserrat-Bold', fontSize: 16, }}>Proced to order {'>'}</Text>
            </View>

          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image style={{ width: 350, height: 200, resizeMode: 'center', right: 65 }} source={require('.//..//assets/cyber-monday-retail-sales.jpg')} />
        <Text style={[styles.BasicFont, { paddingBottom: 10 }]}>You don't have any items in your cart</Text>
        <TouchableOpacity onPress={() => navigation.popToTop()}>
          <View style={styles.button}>
            <Text style={[styles.buttonText, { margin: 12, fontFamily: 'Montserrat-Bold' }]}>Start Shopping</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
};

export default Cart;

const styles = StyleSheet.create({
  slotContainer: {
    padding: 16, justifyContent: 'space-between', flexDirection: 'row'
  },
  billFontLeft: {
    fontFamily: 'Montserrat-Regular',
    paddingBottom: 8
  },
  BasicFont: { fontFamily: 'Montserrat-Regular' },

  buttonText: {
    paddingRight: 10, paddingLeft: 10, color: '#fff',
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
    textAlign: 'center'
  },
  button: {
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: '#e76122',
  },
  EmptyButton: {
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: '#e76122',
  }
});