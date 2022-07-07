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
import SelectDropdown from 'react-native-select-dropdown';
const IMAGE_BACKGROUND = require('../../assets/image/download.jpg');
const DoctorConfirmForm = ({ navigation }) => {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{ left:24,top:48,height:70, width:300, marginBottom:10}}>
                <TouchableOpacity style={{flexDirection:'row'}}>
                    <Ionicons name="chevron-back-outline" size={14}></Ionicons>
                    <Text style={{ fontSize: 14, marginLeft:15 }}>Details</Text>
                </TouchableOpacity>
            </View>
            
            <View style={{alignItems:'center'}}>
                <Image
                    source={IMAGE_BACKGROUND}
                    style={{ height: 200, width:375}}
                ></Image>
            </View>
            <View style={{ left: 21, right: 21, marginTop: 9 }}>
                <Text style={{ color: 'black', fontSize:21, fontWeight:'600' }}>Bệnh nhân: Nguyen Thanh Duong</Text>
                <Text style={{ marginTop: 9, fontSize: 16, fontWeight:'400' }}>16 - 05 - 1993</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop:27}}>
                <TouchableOpacity
                    style={{
                        height: 55,
                        width: 115,
                        left: 21,
                        backgroundColor: '#F4F3F3',
                        borderRadius: 8,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Text style={{ color: '#767676',fontSize: 14,
}}>Info</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        height: 55,
                        width: 115,
                        left: 21,
                        backgroundColor: '#F4F3F3',
                        borderRadius: 8,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: 20,
                        
                    }}
                >
                    <Text style={{ color: '#767676',fontSize: 14,
}}>Medical Record</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ left: 21, fontSize: 17, marginTop:11 }}>Symptoms:</Text>
            <Text
                style={{
                    left: 21,
                    fontSize: 13,
                    marginTop: 5,
                    width: 363,
                    height: 86,
                    letterSpacing: 1,
                }}
            >
                Bằng cách đặt thuộc tính top là “50%”, tôi chỉ cho trình duyệt căn thẳng viền trên của hình vuông màu đỏ
                vào giữa trang theo chiều dọc. Nhưng như ví dụ trước, chúng ta không muốn viền được căn giữa mà là tâm
                của hình vuông vào giữa trang.
            </Text>
            <Text style={{ left: 21, fontSize: 17, marginTop:5 }}>Location:</Text>
            <View
                style={{
                    flexDirection: 'row',
                    width: 364,
                    height: 37,
                    marginTop: 7,
                    marginLeft: 21,
                }}
            >
                <View>
                    <Ionicons name="location-outline" size={30} color="#07AEB8"></Ionicons>
                </View>
                <Text
                    style={{ fontSize: 13, marginLeft: 21, width: 316, height: 32, letterSpacing: 1 }}
                >
                    Bằng cách đặt thuộc tính top là “50%”, tôi chỉ cho trình duyệt căn thẳng viền trên của hình .
                </Text>
            </View>
            <View>
                <Text style={{ left: 21, fontSize: 17, marginTop:21 }}>Appointment:</Text>
            </View>
            <View flexDirection='row' style={{ marginLeft:21, marginTop:8}}>
                <View>
                    <View style={{height:40, width:40, marginRight:20, justifyContent: 'center', alignItems:'center'}}>
                        <Text style={{fontSize: 15, fontWeight: '500'}}>Day</Text>
                    </View>
                    <View style={{height:40, width:40, borderWidth: 3, borderColor:'#00C7C7', borderRadius: 8, justifyContent: 'center', alignItems:'center'}}>
                        <Text style={{fontSize: 15, fontWeight: '700'}}>25</Text>
                    </View>
                </View>
                <View>
                    <View style={{height:40, width:60, marginRight:10, justifyContent: 'center', alignItems:'center'}}>
                        <Text style={{fontSize: 15, fontWeight: '500'}}>Month</Text>
                    </View>
                    <View style={{height:40, width:40, borderWidth: 3, borderColor:'#00C7C7', borderRadius: 8, justifyContent: 'center', alignItems:'center'}}>
                        <Text style={{fontSize: 15, fontWeight: '700'}}>02</Text>
                    </View>
                </View>
                <View>
                    <View style={{height:40, width:80, marginRight:30, justifyContent: 'center', alignItems:'center'}}>
                        <Text style={{fontSize: 15, fontWeight: '500'}}>Year</Text>
                    </View>
                    <View style={{height:40, width:80, borderWidth: 3, borderColor:'#00C7C7', borderRadius: 8, justifyContent: 'center', alignItems:'center'}}>
                        <Text style={{fontSize: 15, fontWeight: '700'}}>2022</Text>
                    </View>
                </View>
                <View>
                    <View style={{height:40, width:80, justifyContent: 'center', alignItems:'center'}}>
                        <Text style={{fontSize: 15, fontWeight: '500'}}>Time</Text>
                    </View>
                    <View style={{height:40, width:80, borderWidth: 3, borderColor:'#00C7C7', borderRadius: 8, justifyContent: 'center', alignItems:'center'}}>
                        <Text style={{fontSize: 15, fontWeight: '700'}}>11:00 AM</Text>
                    </View>
                </View>
            </View>
            
            <View flexDirection='row' alignItems='center' style={{marginTop:60}}>
                    <TouchableOpacity style={{height: 60,
                        width: 170,
                        left: 21,
                        backgroundColor: 'red',
                        borderRadius: 8,
                        alignItems: 'center',
                        justifyContent: 'center',
                        }}>
                        <Text style={{fontWeight: '700', fontSize: 27, color: 'white'}}>
                        Cancel
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height: 60,
                        width: 170,
                        backgroundColor: '#00C7C7',
                        borderRadius: 8,
                        marginLeft:35,
                        alignItems: 'center',
                        justifyContent: 'center',}}>
                        <Text style={{fontWeight: '700', fontSize: 27, color: 'white'}}>
                        Confirm
                    </Text>
                    </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    inputUser: {
        width: 100,
        height: 50,
        fontSize: 13,
        marginBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#00C7C7',
        backgroundColor: 'white',
        margin:21,
    },
    dropDownStyle:{
        width: 100,
        height: 250,
        fontSize: 13,
        borderRadius: 8,
        backgroundColor: 'rgba(0, 199, 199, 1)',    
    },
      selectedText: {
        width: 100,
        height: 50,
        fontSize: 13,
        marginBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: 'rgba(255, 255, 255,1)',
    },
    viewTime: {
        width: 100,
        height: 50,
        fontSize: 13,
        marginBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#00C7C7',
        backgroundColor: 'white',
        right: 21,
    }
});

export default DoctorConfirmForm;
