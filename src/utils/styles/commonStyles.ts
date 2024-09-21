import { StyleSheet } from "react-native";

export const commonStyle = StyleSheet.create({
    headerTitle: {
        fontSize: 24,
        marginBottom: 20,
    },
    h1: {
        fontSize: 20,
        fontWeight: 700
    },
    h4: {
        fontSize: 16,
        fontWeight: 700
    },
    p: {
        fontSize: 14
    },
    smallP: {
        fontSize: 12
    },
    bgNone: {
        backgroundColor: 'transparent'
    },
    icon: {
        width: 28,
        height: 28,
    },
    smallIcon: {
        width: 20,
        height: 20,
    },
    jb: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    cjb: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    ic: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    cc: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});
