import { View, StyleSheet, Text, TouchableOpacity, Animated } from "react-native";
import TransfareScreenText from "../component/TransText";
import { useContext, useState } from "react";
import { RandomContext } from "../store/randomContext";

function TransfareScreenTwo({ route }) {
    const { randomNum, getrandinit ,Firstname} = useContext(RandomContext);
    const { newVal } = route.params;

    const [targetAchieved, setTargetAchieved] = useState(false);
    const [fadeAnim] = useState(new Animated.Value(0)); 

    function handleGenerateRandom() {
        const newRandom = randomNum(); 
        console.log('Generated Random:', newRandom);

        if (newRandom === newVal) {
            setTargetAchieved(true); 
         
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }).start();
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Transfare Screen Two - Welcome: {Firstname}</Text>
            <TransfareScreenText>
                <View>
                    <Text style={styles.content}>
                        Target Random Value: {newVal}
                    </Text>
                    <Text style={styles.content}>
                        Current Context Value: {getrandinit}
                    </Text>
                </View>
            </TransfareScreenText>

            <TouchableOpacity
                style={styles.button}
                onPress={handleGenerateRandom} 
            >
                <Text style={styles.buttonText}>Generate New Random Number</Text>
            </TouchableOpacity>

       
            {targetAchieved && (
                <Animated.View style={{ opacity: fadeAnim }}>
                    <Text style={styles.achievementText}>
                        Congratulations! You've reached the target number: {newVal}
                    </Text>
                </Animated.View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        marginBottom: 10,
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
    achievementText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4CAF50',  
        marginTop: 30,
        textAlign: 'center',
        padding: 20,
       backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
});

export default TransfareScreenTwo;