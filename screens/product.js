import React, { useContext } from 'react';
import { Text, View, FlatList, ScrollView, Image, TouchableOpacity} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'; 
import ProductDisplay from '../shared/productDisplay'; 
import { AntDesign, Ionicons, EvilIcons, MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';  
import { products } from '../data/products'

import {  Badge } from 'react-native-elements'
const ProductItem = ({ id, source, productName, productWeight, productPrice, quantity }) => <ProductDisplay source={source} productName={productName} productWeight={productWeight} productPrice={productPrice} id={id} quantity={quantity}/>

const renderProductItem = ({ item }) => <ProductItem source={item.source} quantity={item.quantity} productName={item.productName} productWeight={item.productWeight} productPrice={item.productPrice} id={item.id} />
 
const Tab = createMaterialTopTabNavigator();

export default function Product({ navigation ,route}) {
 
  
  function VegetableScreen() {

    const vresult = products.filter(products => products.category == 'vegetables');

    return (

      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>

        <View style={{ flex: 1, backgroundColor: '#faf9f7' }}>
          <FlatList
            removeClippedSubviews={true}
            data={vresult}
            renderItem={renderProductItem}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    );
  }

  function FruitsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Fruits!</Text>
      </View>
    );
  }

  function BreadEggsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Vegetable!</Text>
      </View>
    );
  }

  function BreakfastCerealMixesScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>BreakfastCerealMixes!</Text>
      </View>
    );
  }

  function ButterChesseScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>ButterChesse!</Text>
      </View>
    );
  }

  function MilkDairyScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Milk & Dairy!</Text>
      </View>
    );
  }

  //
  function ChocolatesSweetsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>ChocolatesSweets!</Text>
      </View>
    );
  }

  function ColdDrinksScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Cold Drinks!</Text>
      </View>
    );
  }

  function HealthDrinksJuicesScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>HealthDrinksJuices!</Text>
      </View>
    );
  }

  function TeaCoffeeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Tea & Coffee!</Text>
      </View>
    );
  }

  function BakingitemsDessertScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Baking items & Dessert!</Text>
      </View>
    );
  }

  function BiscuitsCookiesScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Biscuits & Cookies!</Text>
      </View>
    );
  }

  function ChipsCripsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Chips & Crips!</Text>
      </View>
    );
  }

  function NamkeenSnacksScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Namkeen & Snacks!</Text>
      </View>
    );
  }

  function InstantMealFrozenFoodScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Instant Meal & Frozen Food!</Text>
      </View>
    );
  }

  function NoodlesPastaSoupScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Noodles, Pasta & Soup!</Text>
      </View>
    );
  }

  function ChutneysScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Chutneys!</Text>
      </View>
    );
  }

  function SaucesSpreadsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Sauces & Spreads!</Text>
      </View>
    );
  }

  function OilAttaGrainsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Oil, Atta & Grains!</Text>
      </View>
    );
  }

  function PersonalCareHygieneScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Personal Care & Hygiene!</Text>
      </View>
    );
  }

  function HomeCareScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Home Care!</Text>
      </View>
    );
  }

  function PackagedFoodScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Packaged Food!</Text>
      </View>
    );
  }

  function DishwashersCleanersScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Dishwashers & Cleaners!</Text>
      </View>
    );
  }

  function LaundryDetergentsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Laundry Detergents!</Text>
      </View>
    );
  }

  function PoojaNeedsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Pooja Needs!</Text>
      </View>
    );
  }

  function TissuesFreshnersScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Tissues & Freshners!</Text>
      </View>
    );
  }

  function BathBodyScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Bath & Body!</Text>
      </View>
    );
  }

  function FacesSkinsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Faces & Skins!</Text>
      </View>
    );
  }

  function HairCareScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Hair Care!</Text>
      </View>
    );
  }

  function OralCareScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Oral Care!</Text>
      </View>
    );
  }

  function AttaotherfloursScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Atta & other flours!</Text>
      </View>
    );
  }

  function PulsesScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Pulses!</Text>
      </View>
    );
  }

  function RiceOthergrainsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Rice & Other grains!</Text>
      </View>
    );
  }

  function SaltSugarScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>SaltSugar!</Text>
      </View>
    );
  }

  function BabyCareScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Baby Care!</Text>
      </View>
    );
  }

  function FeminineHygieneScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Feminine Hygiene!</Text>
      </View>
    );
  }

  function HealthWellnessScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Health & Wellness!</Text>
      </View>
    );
  }

  function MenGroomingFragrancesScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Men's Grooming & Fragrances!</Text>
      </View>
    );
  }

  function DryFruitsNutsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Dry Fruits & Nuts!</Text>
      </View>
    );
  }

  function HoneyChyawanprashScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Honey & Chyawanprash!</Text>
      </View>
    );
  }

  function MasalaSpicesScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Masala & Spices!</Text>
      </View>
    );
  }

  function OilGheeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Oil & Ghee!</Text>
      </View>
    );
  }

  const categorieType = route.params;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={{ flexDirection: 'row',right:18 }}>
          <Text style={{ fontSize: 14, fontFamily: 'Montserrat-Bold' }}>{categorieType}</Text>
        </View>
      ),
      headerRight: () => (
        <View style={{ flexDirection: 'row' }}>

          <TouchableOpacity onPress={() => navigation.push('Cart')} style={{right:36}}>
            <Ionicons name="ios-cart-outline" size={26} color="black" style={{alignSelf:'center'}}/>
            <Badge
              status="success"
              value={<Text style={{ fontFamily: 'Lato-Bold',fontSize:11}}>0</Text>}
              containerStyle={{ position: 'absolute', top: -5, right: -9 }}
            />
          </TouchableOpacity>
          <AntDesign name="search1" size={24} color="black" style={{
                 right: 12,  
          }} onPress={() => (console.log('hello'))} />
        </View>

      )
    })
  }, [navigation])

   

  switch (categorieType) {
    case 'Fruits':
      return (
        <FruitsScreen/>
      );
      break;
    case 'Vegetables':
      return (
        <VegetableScreen/>
      )
      break;
    case 'Vegetables & Fruits':
      return (
        <Tab.Navigator screenOptions={{
            tabBarLabelStyle: { fontSize: 12, fontFamily: 'Montserrat-Bold' },
            tabBarItemStyle: { width: 'auto', },
            tabBarStyle: { backgroundColor: '#faf9f7' },
          tabBarIndicatorStyle: { backgroundColor: '#e76122', borderTopEndRadius: 10, height: 4, borderTopStartRadius: 10 }
          }}
        >
          <Tab.Screen name="Vegetable" component={VegetableScreen} />
          <Tab.Screen name="Fruits" component={FruitsScreen} />
        </Tab.Navigator>
      );
      break;
    case 'Bread & Eggs':
      return (
        <BreadEggsScreen />
      );
      break;
    case 'Breakfast Cereal & Mixes':
      return (
        <BreakfastCerealMixesScreen />
      );
      break;
    case 'Butter & Chesse':
      return (
        <ButterChesseScreen />
      );
      break;
    case 'Milk & Dairy':
      return (
        <MilkDairyScreen />
      );
      break;
    case 'Chocolates & Sweets':
      return (
        <ChocolatesSweetsScreen/>
      );
      break;
    case 'Cold Drinks':
      return (
        <ColdDrinksScreen />
      );
      break;
    case 'Health Drinks & Juices':
      return (
        <HealthDrinksJuicesScreen />
      );
      break;
    case 'Tea & Coffee':
      return (
        <TeaCoffeeScreen />
      );
      break;
    case 'Baking items & Dessert':
      return (
        <BakingitemsDessertScreen />
      );
      break;
    case 'Biscuits & Cookies':
      return (
        <BiscuitsCookiesScreen />
      );
      break;
    case 'Chips & Crips':
      return (
        <ChipsCripsScreen />
      );
      break;
    case 'Namkeen & Snacks':
      return (
        <NamkeenSnacksScreen />
      );
      break;
    case 'Instant Meal & Frozen Food':
      return (
        <InstantMealFrozenFoodScreen />
      );
      break;
    case 'Noodles, Pasta & Soup':
      return (
        <NoodlesPastaSoupScreen />
      );
      break;
    case 'NoodlesPastaSoupScreen':
      return (
        <FruitsScreen />
      );
      break;
    case 'Chutneys':
      return (
        <ChutneysScreen />
      );
      break;
    case 'Sauces & Spreads':
      return (
        <SaucesSpreadsScreen />
      );
      break;
    case 'Oil, Atta & Grains':
      return (
        <OilAttaGrainsScreen />
      );
      break;
    case 'Personal Care & Hygiene':
      return (
        <PersonalCareHygieneScreen/>
      );
      break;
    case 'Home Care':
      return (
        <HomeCareScreen />
      );
      break;
    case 'Packaged Food':
      return (
        <PackagedFoodScreen />
      );
      break;
    case 'Dishwashers & Cleaners':
      return (
        <DishwashersCleanersScreen />
      );
      break;
    case 'Laundry Detergents':
      return (
        <LaundryDetergentsScreen />
      );
      break;
    case 'Pooja Needs':
      return (
        <PoojaNeedsScreen />
      );
      break;
    case 'Tissues & Freshners':
      return (
        <TissuesFreshnersScreen />
      );
      break;
    case 'Bath & Body':
      return (
        <BathBodyScreen/>
      );
      break;
    case 'Faces & Skins':
      return (
        <FacesSkinsScreen />
      );
      break;
    case 'Hair Care':
      return (
        <HairCareScreen/>
      );
      break;
    case 'Oral Care':
      return (
        <OralCareScreen />
      );
      break;
    case 'Atta & other flours':
      return (
        <AttaotherfloursScreen />
      );
      break;
    case 'Pulses':
      return (
        <PulsesScreen />
      );
      break;
    case 'Rice& Other grains':
      return (
        <RiceOthergrainsScreen />
      );
      break;
    case 'Salt & Sugar':
      return (
        <SaltSugarScreen />
      );
      break;
    case 'Baby Care':
      return (
        <BabyCareScreen />
      );
      break;
    case 'Feminine Hygiene':
      return (
        <FeminineHygieneScreen />
      );
      break;
    case 'Health & Wellness':
      return (
        <HealthWellnessScreen/>
      );
      break;
    case "Men's Grooming & Fragrances":
      return (
        <MenGroomingFragrancesScreen />
      );
      break;
    case 'Dry Fruits & Nuts':
      return (
        <DryFruitsNutsScreen/>
      );
      break;
    case 'Honey & Chyawanprash':
      return (
        <HoneyChyawanprashScreen />
      );
      break;
    case 'Masala & Spices':
      return (
        <MasalaSpicesScreen />
      );
      break;
    case 'Oil & Ghee':
      return (
        <OilGheeScreen />
      );
      break;
     

    default: 
      return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Pending to create function!</Text>
      </View>);
      break;
  }          
}
