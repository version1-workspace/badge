/*
    テンプレートファイルの_layout.tsxはLaravelのlayout.blade.phpのような感じになる。
    appディレクトリの下に_layout.jsファイルとする。
*/
import { View, Text, Button, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
// import { Slot } from 'expo-router';
// Stack(スタックナビゲーション)と記述するだけでヘッダー部分を作成し且つ、左上に戻るボタン設置できる。
import { Stack, useNavigation, Tabs, } from 'expo-router';
import { TabList, TabTrigger, TabSlot } from 'expo-router/ui';
// ESLint導入してるとエラー出るので追記。JSXを使用する時必要だが、ただし新しいReactはルール変更され記載なしでも動く。
// eslint.config.mjsにルール記載すると以下必要なくなる
import React from 'react';

import FontAwesome from '@expo/vector-icons/FontAwesome'; // アイコンは追加インストールなし
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState, createContext, useContext, useCallback } from 'react';
import { useIsFocused, useFocusEffect } from '@react-navigation/native';


import { BadgeContext } from "../../app/(tabs)/cart/index"; // 他ファイルで設定したcreateContext(値)を受け取る

export default function TabLayout() {
    const value = useContext(BadgeContext);
    console.log("value？", value);

    // const isFocused = useIsFocused();
    // useFocusEffect(
    //     useCallback(() => {
    //         console.log("画面がフォーカス");

    //         return () => {
    //             console.log("フォーカスが外れた");
    //         };
    //     }, []),
    // );

    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'ホーム',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={28} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="cart/index"
                options={{
                    // バッチ機能
                    tabBarBadge: value ? '' : undefined,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="cart" size={28} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
});
