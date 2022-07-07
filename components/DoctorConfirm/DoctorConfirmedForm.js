import {
    View,
    Text,
    Keyboard,
    StyleSheet,
    SafeAreaView,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    ScrollView,
    Alert,
} from 'react-native';

import React, { useState } from 'react';

import { Ionicons } from '@expo/vector-icons';
const IMAGE_BACKGROUND = require('../../assets/image/image_title_login.jpeg');
const DoctorConfirmedForm = ({ navigation }) => {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{flex:1, height:340, borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomLeftRadius: 45, borderBottomRightRadius: 45, backgroundColor: '#00C7C7',justifyContent:'center', alignItems:'center'}}>
                <View style={{width:60, height:60, backgroundColor:'white', borderRadius: 90}}></View>
                <View style={{marginTop: -70, marginRight:-5}}>
                    <Ionicons name='checkmark-circle-outline' size={75} color='#00C7C7'></Ionicons>
                </View>
                <Text style={{fontSize:30, color:'white', fontWeight:'700'}}>Booking Confirmed!!</Text>
                <View style={{height:30}}></View>
                <Text style={{fontSize:25, color:'white'}}>Thông tin lịch khám sẽ được gửi đến bệnh nhân.</Text>
            </View>
            <View style={{alignItems:'center', marginTop:20}}>
                <Image
                    source={IMAGE_BACKGROUND}
                    style={{ height: 240, width:350,borderRadius: 8 }}
                ></Image>
            </View>
            <View style={{alignItems:'center', marginTop: 190}}>
                <View style={{height:60, width:380, backgroundColor:'#00C7C7', alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity><Text style={{color:'white',fontSize:30, fontWeight: '700'}}>Done</Text></TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    
});

export default DoctorConfirmedForm;
