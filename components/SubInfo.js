import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, FONTS, SHADOWS, SIZES, assets } from "../constants";

export const NFTTitle = ({ title, subTile, titleSize, subTileSize }) => {
  return (
    <View>
      <Text
        style={{
          fontWeight: "500",
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontWeight: "400",
          fontSize: subTileSize,
          color: COLORS.primary,
        }}
      >
        by {subTile}{" "}
      </Text>
    </View>
  );
};


export const EthPrice = ({price}) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image 
        source={assets.eth}
        resizeMode="contain"
        style={{ width: 20, height: 20, marginRight: 2}}  
      />
      <Text 
        style={{
          
          fontWeight: "500",
          fontSize: SIZES.font,
          color: COLORS.primary
        
        }}
        >
        {price}
      </Text>
    </View>
  )
}

export const ImageCmp = ({imgUrl, index}) => {
  return (
    <Image 
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  )
}

export const Peope = () => {
  return (
    <View style={{flexDirection: "row"}}>
        {[assets.person02, assets.person03, assets.person04].map(
          (imgUrl, index) => (<ImageCmp imgUrl={imgUrl} index={index} key={`Peope-${index}`} />)
        )}
    </View>
  );
};

export const EndDate = () => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
      }}
    >
      <Text
        style={{
          fontWeight: "900",
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}
      >
        Ending in
      </Text>
      <Text
        style={{
          fontWeight: "400",
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}
      >
        10h 10m
      </Text>
    </View>
  );
};

export const SubInfo = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Peope />
      <EndDate />
    </View>
  );
};
