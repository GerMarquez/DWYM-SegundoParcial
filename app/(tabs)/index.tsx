import { View, Text, Image, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DestinationListContainer from "@/app/components/DestinationListComponents/DestinationListContainer";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import ScreenSizeWrap from "@/app/components/Global/ScreenSizeWrap";

export default function DestinationListScreen() {

    const { width } = Dimensions.get('window');
    const maxWidth = width * 0.85;

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    return (
        <ScreenSizeWrap>
            <DestinationListContainer/>
        </ScreenSizeWrap>
    )
}