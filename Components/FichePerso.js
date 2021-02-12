import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

class FichePerso extends React.Component{



  render() {

    const perso = this.props.data;

    return (
      <View style={styles.main_container}>
        <View style={styles.text_container}>
          <Text numberOfLines={1} style={styles.name}>{perso.name}</Text>
          <Text numberOfLines={2}>{perso.origin.name}</Text>
          <TouchableOpacity
          >
          <Image
          style={styles.icon}
          source={require('../Icon/star.png')}
          />
          </TouchableOpacity>
        </View>

        <Image
        style={styles.image}
        source={{uri: perso.image}}
        />
      </View>
    )
}
}


const styles = StyleSheet.create({
main_container:{
  height:150,
  marginTop: 10,
  flexDirection:'row',
  justifyContent:'space-between'
},
text_container:{
  flexDirection:'column',
  width:'50%'
},
name:{
  fontSize: 24,
  fontWeight:'bold'
},
image:{
  width:'40%',
  height:150,
  //flexDirection:'flex-end',
  alignItem:'right'
},
icon:{
  marginTop:10,
  marginLeft:10,
  width:50,
  height:50,
}

})





export default FichePerso
