import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    message: {
        fontWeight: 'semibold',
        fontSize: 14,
        color: COLORS.secondaryText,
    },
})