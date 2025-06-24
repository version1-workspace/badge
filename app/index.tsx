import { Redirect, Link, router } from 'expo-router';

// 起動後最初の画面
export default function index() {
    return <Redirect href={"/(tabs)/home"}  />
}
