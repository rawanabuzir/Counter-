import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import TransfareScreenText from "../component/TransText";

function TransfareScreen({ navigation , route }) {
    const { agge } = route.params; 
    const newVal = function randomnum() {
        return Math.floor(Math.random() * 101);
    }

    useEffect(() => {
        console.log(newVal);
    }, [newVal]);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Transfare your age to this screen, and your age is: {agge} years.
            </Text>
            <TransfareScreenText>
                <View>
                    <Text style={styles.content}>
                        This is the Transfare Screen. You can add your content here.
                    </Text>
                </View>
            </TransfareScreenText>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ScreenTwo', { newVal: newVal() })}
            >
                <Text style={styles.buttonText}>Go to Screen Two</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

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
    button: {
        backgroundColor: '#841584',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default TransfareScreen;
