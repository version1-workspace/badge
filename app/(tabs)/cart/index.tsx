import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useEffect, useState, createContext, useContext } from 'react'; 

import LayoutContext from "../../(tabs)/_layout";
import { BadgeContext } from "../../contexts/badge"

export default function CartIndex() {
    const { cartAdded, setCartAdded } = useContext(BadgeContext)

    return (
        <View>
            <Text>カート画面</Text>
                <LayoutContext />

                <TouchableOpacity
                    onPress={() => {
                        setCartAdded(!cartAdded)
                    }}
                    style={styles.addToCart}
                >
                    <Text>カートに追加</Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    addToCart: {
		alignSelf: 'center',
		paddingVertical: 10,
		paddingHorizontal: 53,
		marginTop: 16,
		borderWidth: 1.5,
		borderRadius: 10,
		backgroundColor: 'white',
	},
})