import { StyleSheet, Text, View, Platform, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import Header from './src/screens/Header';
import Tweets from './src/screens/Tweets';
import { useState } from 'react';
import Following from './src/screens/Following';

export default function App() {
  
  const [underline, setUnderline] = useState('ForYou');

  const handlePressNavigation = (tab) => {
    setUnderline(tab);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <View style={styles.container2}>
        <TouchableOpacity onPress={() => handlePressNavigation('ForYou')} style={[ underline ==='ForYou' && styles.underline]}>
          <Text style={[styles.text]}>For you</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePressNavigation('Following')} style={[ underline ==='Following' && styles.underline]}>
          <Text style={styles.text}>Following</Text>
        </TouchableOpacity>
      </View>
      <View>
        {underline === 'ForYou' && <Tweets/>}
        {underline === 'Following' && <Following/>}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  container2: {
    width: '100%',
    height: 50,
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth: 1, 
    borderColor: 'grey'
  },
  text: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
    marginTop: 10
  },
  underline: {
    borderBottomWidth: 4,
    borderBottomColor: 'dodgerblue',
    borderRadius: 1
  }
});
