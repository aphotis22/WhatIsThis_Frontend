import React, {Component
} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import {Container, Content, Header, Input, Item, Button, Label, Form} from 'native-base';
import firebase from 'firebase';
import { createStackNavigator, createAppContainer } from 'react-navigation';
class HomeScreen extends Component {
    render() {
      return (
        <Container style={styles.container}>
            <Text>Home Screen</Text>
            
            <Button style={{marginTop: 10}}
                full
                rounded
                primary
                onPress={()=>firebase.auth().signOut()}
            >
            <Text style={{color: "white"}}>Log Out</Text>
            </Button>
        </Container>
      );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    },
    DashboardText: {
        fontSize: 30
    }
});