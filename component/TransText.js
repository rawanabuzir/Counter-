import { View, StyleSheet, Text } from "react-native";

function TransfareScreenText({ children }) {
    return (
        <View style={styles.container}>

            <Text style={styles.content}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
     paddingTop: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', 
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    content: {
        fontSize: 18,
        color: '#555',
        textAlign: 'center',
    },
});

export default TransfareScreenText;
