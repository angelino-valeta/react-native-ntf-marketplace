import React from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';

import { FocusedStatusBar, NFTCard } from '../components';
import { COLORS, NFTData } from '../constants'

const Home = () => {
  return(
  <SafeAreaView style={{ flex: 1 }}>
     <FocusedStatusBar backgroundColor={COLORS.primary} />
    <View style={{ flex: 1 }}>
      <View style={{ zIndex: 0}}>
        <FlatList
          data={NFTData}
          renderItem={({item}) => <NFTCard data={item}/>}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: -1,
      }}>

        <View style={{ height: 300, backgroundColor: COLORS.primary }} />
        <View  style={{ flex: 1,backgroundColor: COLORS.white }} />
      </View>
    </View>
  </SafeAreaView>
  )
}

export default Home;