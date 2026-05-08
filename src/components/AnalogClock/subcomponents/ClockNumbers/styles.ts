import { StyleSheet } from "react-native";
import { COLORS } from "../../../../theme/colors";

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        fontWeight: 'bold',
        color: COLORS.primaryText,
    },
})