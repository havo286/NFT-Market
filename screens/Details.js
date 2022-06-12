import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from "react-native"
import { COLORS, FONTS, SIZES, SHADOWS, assets } from '../constants'
import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid } from "../components/Button"
import { FocusedStatusBar } from "../components"

const Details = ({ route, nativation }) => {
  const { data } = route.params;
  return (
    <SafeAreaView style={{ flex: 1}}>
      <FocusedStatusBar 
        barStyle='dark-content'
        backgroundColor="transparent"
        transLucent={true}
      />
      <View>
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark}/>
      </View>
    </SafeAreaView>
  )
}

export default Details 