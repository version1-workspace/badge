import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useEffect, useState, createContext, useContext } from 'react'; 

import LayoutContext from "../../(tabs)/_layout";

// セットし他ファイルへ渡す。
export const BadgeContext = createContext(false);

export default function CartIndex() {
    // カート追加済みフラグ
	const [cartAdded, setCartAdded] = useState(false);
    console.log("cartAdded？", cartAdded);

    return (
        <View>
            <Text>カート画面</Text>
            <BadgeContext.Provider value={cartAdded}>
                <LayoutContext />

                <TouchableOpacity
                    onPress={() => {
                        setCartAdded(!cartAdded)
                    }}
                    style={styles.addToCart}
                >
                    <Text>カートに追加</Text>
                </TouchableOpacity>

            </BadgeContext.Provider>
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