import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, UseState} from 'react-native'
import { searchPerso } from '../RMAPI/RMAPI'
import FichePerso from './FichePerso.js'


class ListePersonnage extends React.Component {

  constructor(props) {
  super(props)
  this.state = {
    data:[]
  }
}

recherche(text) {
        this.setState({ searchedText: text })
    }

loadPerso() {
    console.log(this.state.searchedText)
    if (this.state.searchedText.length > 0) {
      searchPerso(this.state.searchedText).then(data => {
          this.setState({ data: data.results })
      })
    }
}

  render() {
     const { data } = this.state;
    return (
      <View style={styles.mainContainer}>
        <TextInput style={styles.textinput}
        placeholder='Nom du personnage'
        onChangeText={(text) => this.recherche(text)}
        />
        <Button title='Rechercher' onPress={() => this.loadPerso()}/>
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({item}) => <FichePerso data={item}/>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 30
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default ListePersonnage
