import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";

export const styles = StyleSheet.create({
    listView: {
        flex: 1,
    },
    listItem: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 12,
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    listItemTitle: {
        fontSize: 14,
        fontWeight: 'semibold',
        color: COLORS.primaryText,
    },
})