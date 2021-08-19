import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from 'react-native-paper';
import * as D from '../data';

const title = "Content";

export default function Content() {
    return (
        <View style={[styles.view]}>
            <Text style={[styles.text]}>{title}</Text>
            <View style={[styles.viewred]}>
                <Text>flex: 0</Text>
            </View>
            <View style={[styles.viewgreen]}>
                <Text>flex: 1</Text>
            </View>
            <View style={[styles.viewpurple]}>
                <Text>flex: 2</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {flex: 1, padding: 5, backgroundColor: Colors.blue900},
    text: {fontSize: 20, color: 'white'},
    viewred: {flex:0, backgroundColor: Colors.red500},
    viewgreen: {flex:1, backgroundColor: Colors.green500},
    viewpurple: {flex:2, backgroundColor: Colors.purple500},
})