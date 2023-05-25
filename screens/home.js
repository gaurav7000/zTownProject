import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Image, ScrollView, FlatList, LogBox, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { AntDesign, FontAwesome, EvilIcons, Ionicons } from '@expo/vector-icons';
import SmallCases from '../shared/smallCases';
import LargeCases from '../shared/largeCases';
import {
  Browse_Categories,
  Other_Supplies,
  Home_Fruits_Vegetable,
  Home_BreakfastDairy,
  Home_Sweet_Beverages,
  Home_Biscuits_Snacks,
  Home_Noodle_Instant_Food,
  Home_Best_Value,
  Home_HouseHold_Items,
  Home_Personal_Cares,
  Home_Grocery_Staples,
  Home_Wellness_Store,
  Home_Kitchen_Essentails
} from '../data/staticeHomeData'
import {
  Home_Vegetable_ShowCase,
  Home_BreakfastDairy_ShowCase,
  Home_Sweet_Beverages_ShowCase,
  Home_Biscuits_Snacks_ShowCase,
  Home_Noodle_Instant_Food_ShowCase,
  Home_Best_Value_ShowCase,
  Home_HouseHold_Items_ShowCase,
  Home_Personal_Cares_ShowCase,
  Home_Grocery_Staples_ShowCase,
  Home_Wellness_Store_ShowCase,
  Home_Kitchen_Essentails_ShowCase,
} from '../data/dynamicHomeData'
import SectionTitle from '../components/SectionTitle';
import { SliderBox } from "react-native-image-slider-box";
import Banner from '../assets/images/home_screen/banner.png';
import { Badge } from 'react-native-elements'

function Home({ navigation}) {
  
   useEffect(() => {
     LogBox.ignoreAllLogs()
   }, [])
   
  const LargeItem = useCallback(
    ({ id, source, productName, productWeight, productPrice }) => <LargeCases source={source} productName={productName} productWeight={productWeight} productPrice={productPrice} onPress={() => console.log(id)} />
    , []
  );

  const SmallItem = useCallback(
    ({ title, source, id }) => <SmallCases source={source} text={title} onPress={() => navigation.push('Product', title)} />
    , []
  )

  let numColumns = 4;

  let numLargeColumns = 12;

  const insets = useSafeAreaInsets();
    
  const renderSmallItem = ({ item }) => (
    <SmallItem title={item.title} source={item.source} id={item.id} />
  );

  const renderLargeItem = ({ item }) => (
    <LargeItem source={item.source} productName={item.productName} productWeight={item.productWeight} productPrice={item.productPrice} id={item.id} />
  );
  
  const [lmages, setLmages] = useState([
    "https://en.cocacolavietnam.com/content/dam/journey/vn/en/homepage/vn-en-home-image-2-desktop.png",
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBvrDqEnQedCC4YsQ6MkPdXC-Q64oXrCkkS-SqsiseOCF3vYPGyfApAtTX23u2ka_S7Dc&usqp=CAU",
    // "https://source.unsplash.com/1024x768/?nature",
    // "https://source.unsplash.com/1024x768/?water",
    // "https://source.unsplash.com/1024x768/?girl",
    // "https://source.unsplash.com/1024x768/?tree"
  ]);

 return (
   <View style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom, backgroundColor: '#fff' }}>
     <StatusBar backgroundColor='#faf9f7' />

        {/* NavigationHeader */}
      <View style={globalStyles.headerStyle}>
        <View style={globalStyles.StyleForLocation}>
         <TouchableOpacity onPress={() => { navigation.push('Address')}}>
           <View style={{flexDirection: 'row'}}>
             <EvilIcons name="location" size={32} color="#181725" style={{ marginLeft: 7, flex: 0.6 }} />
              <Text style={{ fontSize: 16, color: '#181725', fontFamily: 'Montserrat-Bold', flex: 4, }}>- 6,bramhim alley, </Text>
             <FontAwesome name="angle-down" size={24} color="#181725" style={{ flex: 0.4, alignSelf: 'flex-end' }} />
           </View>
         </TouchableOpacity>
        </View>
      
         <View style={[globalStyles.StyleForIcon]}>
          <TouchableOpacity onPress={() => navigation.push('Cart') }>
           <Ionicons name="ios-cart-outline" size={26} color="black" style={{ alignSelf: 'center' }} />
          { <Badge
             status="success"
             value={<Text style={{ fontFamily: 'Lato-Bold', fontSize: 11 }}>0</Text>}
             containerStyle={{ position: 'absolute', top: -5, right: -1 }}
           />}
           </TouchableOpacity>
         </View>
     
        <View style={globalStyles.StyleForIcon}>
         <TouchableOpacity onPress={() => { navigation.push('Account')}}>
          <Image style={globalStyles.StyleForImage} source={require('.//..//assets/user.png')} />
         </TouchableOpacity>
        </View>
      </View>

        {/* Search Bar */}
     {/* <TouchableOpacity onPress={() => { navigation.push('Search')}} style={globalStyles.home_Serachbar}>
      
        <Text style={globalStyles.home_SearchbarText}><AntDesign name="search1" size={16} color="#888" /> Serach product & categories</Text>
 
     </TouchableOpacity> */}

        {/* MainContent */}
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
      
        <View>
         <SliderBox
           images={lmages}
           sliderBoxHeight={150}
           onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
         />

         {/* Banner */}
         {/* <View style={{flexDirection:'row', justifyContent:'center' }}>
           <Image style={{           
             width: 350,
             resizeMode: 'contain',                           
            }} source={Banner} />
         </View> */}
        
            {/* Browse_Categories */}
         <View>
           <Text style={globalStyles.HeaderText}>Shop by category</Text>
           <FlatList
             removeClippedSubviews={true}
             data={Browse_Categories}
             columnWrapperStyle={{ justifyContent: 'space-around' }}
             numColumns={numColumns}
             renderItem={renderSmallItem}
             keyExtractor={item => item.id}
           />
          
           <FlatList
             removeClippedSubviews={true}
             data={Other_Supplies}
             columnWrapperStyle={{ justifyContent: 'space-around' }}
             numColumns={numColumns}
             renderItem={renderSmallItem}
             keyExtractor={item => item.id}
           />
         </View>

         {/* Fruits & Vegetables */}
         <View>
          <SectionTitle
          navigation={navigation}
             title="Fruits & Vegetables"
             linkPage="Vegetables & Fruits"
        />
           <FlatList
             removeClippedSubviews={true}
             data={Home_Fruits_Vegetable}
             columnWrapperStyle={{ justifyContent: 'space-around' }}
             numColumns={numColumns}
             renderItem={renderSmallItem}
             keyExtractor={item => item.id}
           />
           <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={globalStyles.largeScrollView}>
             <FlatList
               removeClippedSubviews={true}
               data={Home_Vegetable_ShowCase}
               columnWrapperStyle={{ justifyContent: 'space-around' }}
               numColumns={numLargeColumns}
               renderItem={renderLargeItem}
               keyExtractor={item => item.id}
             />
           </ScrollView>
         </View>

         {/* Breakfast & Dairy */}
         <View>
          <SectionTitle
          navigation={navigation}
             title="Breakfast & Dairy"
          linkPage=""
        />
           <FlatList removeClippedSubviews={true}
             data={Home_BreakfastDairy}
             columnWrapperStyle={{ justifyContent: 'space-around' }}
             numColumns={numColumns}
             renderItem={renderSmallItem}
             keyExtractor={item => item.id}
           />
           <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={globalStyles.largeScrollView}>
             <FlatList
               removeClippedSubviews={true}
               data={Home_BreakfastDairy_ShowCase}
               columnWrapperStyle={{ justifyContent: 'space-around' }}
               numColumns={numLargeColumns}
               renderItem={renderLargeItem}
               keyExtractor={item => item.id}
             />
           </ScrollView>
         </View>

         {/* Sweets & Beverages */}
         <View>
           <SectionTitle
             navigation={navigation}
             title="Sweets & Beverages"
             linkPage=""
           />
           <FlatList removeClippedSubviews={true}
             data={Home_Sweet_Beverages}
             columnWrapperStyle={{ justifyContent: 'space-around' }}
             numColumns={numColumns}
             renderItem={renderSmallItem}
             keyExtractor={item => item.id}
           />
           <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={globalStyles.largeScrollView}>
             <FlatList
               removeClippedSubviews={true}
               data={Home_Sweet_Beverages_ShowCase}
               columnWrapperStyle={{ justifyContent: 'space-around' }}
               numColumns={numLargeColumns}
               renderItem={renderLargeItem}
               keyExtractor={item => item.id}
             />
           </ScrollView>
         </View>

         {/* Biscuits & Snacks */}
         <View>
           <SectionTitle
             navigation={navigation}
             title="Biscuits & Snacks"
             linkPage=""
           />
           <FlatList removeClippedSubviews={true}
             data={Home_Biscuits_Snacks}
             columnWrapperStyle={{ justifyContent: 'space-around' }}
             numColumns={numColumns}
             renderItem={renderSmallItem}
             keyExtractor={item => item.id}
           />
           <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={globalStyles.largeScrollView}>
             <FlatList
               removeClippedSubviews={true}
               data={Home_Biscuits_Snacks_ShowCase}
               columnWrapperStyle={{ justifyContent: 'space-around' }}
               numColumns={numLargeColumns}
               renderItem={renderLargeItem}
               keyExtractor={item => item.id}
             />
           </ScrollView>
         </View>

         {/* Noodles & Instant Food */}
         <View>
           <SectionTitle
             navigation={navigation}
             title="Noodles & Instant Food"
             linkPage=""
           />
           <FlatList removeClippedSubviews={true}
             data={Home_Noodle_Instant_Food}
             columnWrapperStyle={{ justifyContent: 'space-around' }}
             numColumns={numColumns}
             renderItem={renderSmallItem}
             keyExtractor={item => item.id}
           />
           <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={globalStyles.largeScrollView}>
             <FlatList
               removeClippedSubviews={true}
               data={Home_Noodle_Instant_Food_ShowCase}
               columnWrapperStyle={{ justifyContent: 'space-around' }}
               numColumns={numLargeColumns}
               renderItem={renderLargeItem}
               keyExtractor={item => item.id}
             />
           </ScrollView>
         </View>

         {/* Best Value */}
         <View>
           <SectionTitle
             navigation={navigation}
             title="Best Value"
             linkPage=""
           />
           <FlatList removeClippedSubviews={true}
             data={Home_Best_Value}
             columnWrapperStyle={{ justifyContent: 'space-around' }}
             numColumns={numColumns}
             renderItem={renderSmallItem}
             keyExtractor={item => item.id}
           />
           <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={globalStyles.largeScrollView}>
             <FlatList
               removeClippedSubviews={true}
               data={Home_Best_Value_ShowCase}
               columnWrapperStyle={{ justifyContent: 'space-around' }}
               numColumns={numLargeColumns}
               renderItem={renderLargeItem}
               keyExtractor={item => item.id}
             />
           </ScrollView>
         </View>

         {/* HouseHold Items */}
         <View>
           <SectionTitle
             navigation={navigation}
             title="HouseHold Items"
             linkPage=""
           />
           <FlatList removeClippedSubviews={true}
             data={Home_HouseHold_Items}
             columnWrapperStyle={{ justifyContent: 'space-around' }}
             numColumns={numColumns}
             renderItem={renderSmallItem}
             keyExtractor={item => item.id}
           />
           <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={globalStyles.largeScrollView}>
             <FlatList
               removeClippedSubviews={true}
               data={Home_HouseHold_Items_ShowCase}
               columnWrapperStyle={{ justifyContent: 'space-around' }}
               numColumns={numLargeColumns}
               renderItem={renderLargeItem}
               keyExtractor={item => item.id}
             />
           </ScrollView>
         </View>

         {/* Personal Care */}
         <View>
           <SectionTitle
             navigation={navigation}
             title="Personal Care"
             linkPage=""
           />
           <FlatList removeClippedSubviews={true}
             data={Home_Personal_Cares}
             columnWrapperStyle={{ justifyContent: 'space-around' }}
             numColumns={numColumns}
             renderItem={renderSmallItem}
             keyExtractor={item => item.id}
           />
           <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={globalStyles.largeScrollView}>
             <FlatList
               removeClippedSubviews={true}
               data={Home_Personal_Cares_ShowCase}
               columnWrapperStyle={{ justifyContent: 'space-around' }}
               numColumns={numLargeColumns}
               renderItem={renderLargeItem}
               keyExtractor={item => item.id}
             />
           </ScrollView>
         </View>

         {/* Grocery & Staples */}
         <View>
           <SectionTitle
             navigation={navigation}
             title="Grocery & Staples"
             linkPage=""
           />

           <FlatList removeClippedSubviews={true}
             data={Home_Grocery_Staples}
             columnWrapperStyle={{ justifyContent: 'space-around' }}
             numColumns={numColumns}
             renderItem={renderSmallItem}
             keyExtractor={item => item.id}
           />
           <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={globalStyles.largeScrollView}>
             <FlatList
               removeClippedSubviews={true}
               data={Home_Grocery_Staples_ShowCase}
               columnWrapperStyle={{ justifyContent: 'space-around' }}
               numColumns={numLargeColumns}
               renderItem={renderLargeItem}
               keyExtractor={item => item.id}
             />
           </ScrollView>
         </View>

         {/* Wellness Store */}
         <View>
           <SectionTitle
             navigation={navigation}
             title="Wellness Store"
             linkPage=""
           />
           <FlatList removeClippedSubviews={true}
             data={Home_Wellness_Store}
             columnWrapperStyle={{ justifyContent: 'space-around' }}
             numColumns={numColumns}
             renderItem={renderSmallItem}
             keyExtractor={item => item.id}
           />
           <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={globalStyles.largeScrollView}>
             <FlatList
               removeClippedSubviews={true}
               data={Home_Wellness_Store_ShowCase}
               columnWrapperStyle={{ justifyContent: 'space-around' }}
               numColumns={numLargeColumns}
               renderItem={renderLargeItem}
               keyExtractor={item => item.id}
             />
           </ScrollView>
         </View>

         {/* Kitchen Essentails */}
         <View>
           <SectionTitle
             navigation={navigation}
             title="Kitchen Essentails"
             linkPage=""
           />
           <FlatList removeClippedSubviews={true}
             data={Home_Kitchen_Essentails}
             columnWrapperStyle={{ justifyContent: 'space-around' }}
             numColumns={numColumns}
             renderItem={renderSmallItem}
             keyExtractor={item => item.id}
           />
           <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={globalStyles.largeScrollView}>
             <FlatList
               removeClippedSubviews={true}
               data={Home_Kitchen_Essentails_ShowCase}
               columnWrapperStyle={{ justifyContent: 'space-around' }}
               numColumns={numLargeColumns}
               renderItem={renderLargeItem}
               keyExtractor={item => item.id}
             />
           </ScrollView>
         </View>
        </View>    
      </ScrollView>
    </View>    
  ); 
} 
export default Home;