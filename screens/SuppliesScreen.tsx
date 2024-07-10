import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "../styles";


export default function SuppliesScreen() {
    const route = useRoute();
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>{route.params.item.type} {route.params.item.name}</Text>
        </View>
    )   
}