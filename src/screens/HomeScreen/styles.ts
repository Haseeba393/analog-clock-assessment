import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.background,
        rowGap: 16,
    },
    listView: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 20,
    },
    clockView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
})