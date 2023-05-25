import { StyleSheet } from 'react-native';
 

export const globalStyles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    position: 'relative',
    top: 0,
    marginTop: 10,
    marginRight: 2,
    height: 40
  },
 StyleForLocation:{
    flex: 6,
    flexDirection: 'column',
    alignSelf: 'center'
  },
  StyleForIcon:{
    flex: 0.9, 
    justifyContent: 'center'
  },
  StyleForImage:{
    height: 25, 
    width: 25, 
    alignSelf: 'center'
  },

  home_Serachbar: {
    height: 42,
    marginRight: 10,
    borderRadius: 12,
    borderColor: '#d9d9d9',
    borderWidth: 0.9,
    elevation: 0,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#0000',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginLeft: 7,
    justifyContent: 'center',
    paddingLeft: 12,
    marginTop: 5
  },
  home_SearchbarText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#888',
  },

  HeaderText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: '#181725',
    padding: 7,
    paddingLeft: 14,
  },
  descriptionFont: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 10,
    paddingLeft: 5
  },
  imageSizeofsmallestIcons: {
    width: 15,
    height: 15,
    marginLeft: 10,
    resizeMode: 'center'
  },
  smallestImageView:{
    flexDirection: 'row', 
    paddingTop: 3
  },

  //small cases style

  small_cases_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 0
  },
  small_cases_textStyle: {
    paddingTop: 3,
    color: '#181725',
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
    alignContent: 'center',
    fontSize:12
  },
  small_image: {
    margin: 4,
    width: 75,
    height: 75,
    resizeMode: 'center'

  },
  small_cases: {
    height: 84,
    width: 84,
    borderRadius: 7,
    borderColor: '#d9d9d9',
    borderWidth: 0.9,
    elevation: 0,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#222',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 2,
  },

  // Large cases style

  large_cases_container: {
    flexDirection: 'row',
    flex: 1,
    paddingTop: 7,
    marginBottom: 30
  },
  large_images: {
    width: 153,
    height: 125,
    marginTop: 0,
    marginLeft: 10,
    marginRight: 10,
    resizeMode: 'center'
  },
  largeScrollView: {
    flexDirection: 'row',
    flex: 1,
    paddingTop: 7,
    marginBottom: 10
  },
  large_cases: {
    height: 285,
    width: 175,
    borderRadius: 4,
    borderColor: '#d9d9d9',
    borderWidth: 0.9,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#0000',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 2,
    marginVertical: 5,
  },

  product_cases: {
    padding:0,
    height: 138, 
    borderRadius: 7,
    borderColor: '#d9d9d9',
    borderWidth: 0.9,
    elevation: 0,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#0000',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 2,
    marginVertical: 5
  },
   product_images: {
    width: 120,
    height: 120,
    marginTop: 0,
    marginLeft: 10,
    marginRight:10,  
    resizeMode: 'center'
  }, 
  modalDView: {
    marginTop:10,
    marginBottom:20,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 20,
  },
   bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
   button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
})