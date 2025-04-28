import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { CounterContext } from '../store/contextconter';

const DetailsScreen = ({ navigation }) => {
    const { counter, incrementCounter, decrementCounter, resetCounter } = useContext(CounterContext);

    return (
        <>
            <Text style={styles.header}>Counter Screen</Text>

            <View style={styles.container}>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={decrementCounter}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>

                    <Text style={[
                        styles.counter,

                        { color: counter > 0 ? 'green': counter < 0 ? 'red': 'black' },
                    ]}>

                        {counter}
                    </Text>


                    <TouchableOpacity style={styles.button} onPress={incrementCounter}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.resetButton}>
                    <TouchableOpacity style={styles.reset} onPress={resetCounter}>
                        <Text style={styles.resetText}>Reset</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 30,
    },
    counter: {
        fontSize: 40,
        fontWeight: 'bold',
        marginHorizontal: 20,
    },
    button: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#841584',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
    },
    resetButton: {
        marginTop: 30,
    },
    reset: {
        backgroundColor: '#841584',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10,
    },
    resetText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    header: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20,
        backgroundColor: '#F5F5F5',
        color: '#841584',
    },
});

export default DetailsScreen;
