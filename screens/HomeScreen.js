import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import users from '../DummyData/DataObject';



const HomeScreen = ({ navigation }) => {

    const agge = 24;


    return (
        <View style={styles.container}>

            <Text style={styles.title}>Welcome {users[1].name} {agge} to the Home Screen</Text>


            <View style={styles.containertwo}>
                <Text style={styles.description}>Click below to go to the Counter Screen</Text>


                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Details')}
                >
                    <Text style={styles.buttonText}>Go to Counter</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('TransfareScreen',{ agge })}
                >
                    <Text style={styles.buttonText}>Go to trans</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },

    containertwo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 20,
        marginBottom: 20,
        color: '#333',
    },
    description: {
        fontSize: 18,
        color: '#666',
        justifyContent: 'center',
        marginBottom: 40,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#841584',
        paddingVertical: 12,
        paddingHorizontal: 30,
        marginVertical: 10,
        width: 200,
        justifyContent: 'center',
        borderRadius: 25,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default HomeScreen;
