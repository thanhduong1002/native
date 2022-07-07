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
const IMAGE_BACKGROUND = require('../../assets/image/IU.jpg');
const days = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
];
const months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
const years = ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032'];
const times = ['8:00', '9:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
const BookingInformation = ({ navigation }) => {
    const [symptom, setSymptom] = useState('')
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{ flex: 1, height: 165, backgroundColor: '#6AE0D9' }}>
                <View style={{ flexDirection: 'row', width: 365, height: 40, marginTop: 70, marginLeft: 25 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Ionicons name="chevron-back-outline" color="#121212" size={30}></Ionicons>
                        <Text>Back</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ color: 'white', fontWeight: '700', fontSize: 30 }}>Booking Information</Text>
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <View
                    style={{
                        width: 400,
                        height: 80,
                        backgroundColor: '#e9e7e7',
                        borderRadius: 8,
                        marginTop: 6,
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}
                >
                    <Image
                        source={IMAGE_BACKGROUND}
                        style={{ height: 60, width: 60, borderRadius: 90, left: 16 }}
                    ></Image>
                    <View style={{ height: 80, width: 324, left: 38, justifyContent: 'center' }}>
                        <Text style={{ padding: 10 }}>Patient</Text>
                        <Text style={{ paddingLeft: 10, fontWeight: '700' }}>NGUYEN THANH DUONG</Text>
                    </View>
                </View>
                <View
                    style={{
                        width: 400,
                        height: 80,
                        backgroundColor: '#e9e7e7',
                        borderRadius: 8,
                        marginTop: 6,
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}
                >
                    <View style={{ left: 16 }}>
                        <Ionicons name="heart-circle-outline" size={50} color="#00C7C7"></Ionicons>
                    </View>
                    <View style={{ height: 80, width: 324, left: 48, justifyContent: 'center' }}>
                        <Text style={{ padding: 10 }}>Doctor</Text>
                        <Text style={{ marginLeft: 10, fontWeight: '700' }}>Dr. Nguyen Minh Chau</Text>
                    </View>
                </View>
                <View
                    style={{
                        width: 400,
                        height: 80,
                        backgroundColor: '#e9e7e7',
                        borderRadius: 8,
                        marginTop: 6,
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}
                >
                    <View style={{ left: 16 }}>
                        <Ionicons name="location-outline" size={50} color="#00C7C7"></Ionicons>
                    </View>
                    <View style={{ height: 80, width: 324, left: 48, justifyContent: 'center' }}>
                        <Text style={{ padding: 10 }}>Hospital/Clinic</Text>
                        <Text style={{ marginLeft: 10, fontWeight: '700' }}>Phòng khám Vinmec Đà Nẵng</Text>
                    </View>
                </View>
                <View
                    style={{
                        width: 400,
                        height: 80,
                        backgroundColor: '#e9e7e7',
                        borderRadius: 8,
                        marginTop: 6,
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}
                >
                    <View style={{ left: 16 }}>
                        <Ionicons name="receipt-outline" size={50} color="#00C7C7"></Ionicons>
                    </View>
                    <View style={{ height: 80, width: 324, left: 48, justifyContent: 'center' }}>
                        <Text style={{ padding: 10 }}>Service</Text>
                        <Text style={{ marginLeft: 10, fontWeight: '700' }}>Hello hello</Text>
                    </View>
                </View>
                <View style={{ width: 400, height: 150, backgroundColor: '#e9e7e7', borderRadius: 8, marginTop: 6 }}>
                    <Text style={{ left: 9, top: 8 }}>Choose Datetime</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View>
                            <Text>Day</Text>
                            <SelectDropdown
                                buttonStyle={styles.inputUser}
                                defaultButtonText="1"
                                data={days}
                                dropdownStyle={styles.dropDownStyle}
                                selectedRowStyle={styles.selectedText}
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index);
                                }}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    return selectedItem;
                                }}
                                rowTextForSelection={(item, index) => {
                                    return item;
                                }}
                            />
                        </View>
                        <View>
                            <Text>Month</Text>
                            <SelectDropdown
                                buttonStyle={styles.inputUser}
                                defaultButtonText="1"
                                data={months}
                                dropdownStyle={styles.dropDownStyle}
                                selectedRowStyle={styles.selectedText}
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index);
                                }}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    return selectedItem;
                                }}
                                rowTextForSelection={(item, index) => {
                                    return item;
                                }}
                            />
                        </View>
                        <View>
                            <Text>Year</Text>
                            <SelectDropdown
                                buttonStyle={styles.inputUser}
                                defaultButtonText="2022"
                                data={years}
                                dropdownStyle={styles.dropDownStyle}
                                selectedRowStyle={styles.selectedText}
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index);
                                }}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    return selectedItem;
                                }}
                                rowTextForSelection={(item, index) => {
                                    return item;
                                }}
                            />
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text>Time</Text>
                        <SelectDropdown
                            buttonStyle={styles.inputUser}
                            defaultButtonText="8:00"
                            data={times}
                            dropdownStyle={styles.dropDownStyle}
                            selectedRowStyle={styles.selectedText}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index);
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem;
                            }}
                            rowTextForSelection={(item, index) => {
                                return item;
                            }}
                        />
                    </View>
                </View>
                <View style={{ width: 400, height: 150, backgroundColor: '#e9e7e7', borderRadius: 8, marginTop: 6 }}>
                    <View style={{ left: 9, flexDirection: 'row', top: 8 }}>
                        <Ionicons name="reader-outline" size={30} color="#00C7C7"></Ionicons>
                        <Text style={{ top: 8 }}>Symptoms</Text>
                    </View>
                    <TextInput
                        height={100}
                        width={366}
                        multiline={true}
                        numberOfLines={4}
                        backgroundColor="white"
                        left={9}
                        top={8}
                        value={symptom}
                        onChangeText={(text)=>setSymptom(text)}
                        placeholder={'Enter your symptoms here!'}
                        keyboardType="default"
                    />
                </View>
                <TouchableOpacity style={{width:380, height:60, backgroundColor:'#50C2C9',justifyContent:'center',alignItems:'center', marginTop:10}}>
                    <Text style={{color:'white', fontWeight:'700', fontSize:30}}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    inputUser: {
        width: 80,
        height: 35,
        backgroundColor: 'white',
        borderColor: '#949191',
        borderWidth: 2,
        borderRadius: 8,
    },
    dropDownStyle: {
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
    },
});

export default BookingInformation;
