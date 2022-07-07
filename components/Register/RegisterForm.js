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
import callApi from '../../apis/axiosClient';
import { Formik } from 'formik';
import { validateSchema } from '../validateSchema';
import { Ionicons } from '@expo/vector-icons';
const IMAGE_BACKGROUND = require('../../assets/image/login_background.png');


const RegisterForm = ({ navigation }) => {
    const onSignUp = async (userName, phone, pass, cfmpassword) => {
        await callApi('registerUser', 'post', {
            phone: phone,
            password: pass,
            name: userName,
        })
            .then((res) => {
                console.log(res.data);
                Alert.alert('Register Success', res.message, [
                    {
                        text: 'Ok',
                        onPress: () => navigation.goBack('LoginScreen'),
                        style: 'cancel',
                    },
                ]);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const [isSecureEntry,setSecureEntry] = useState(true);
    const [isSecureEntry2,setSecureEntry2] = useState(true);
    setSecureEntry
    return (
        <ImageBackground style={styles.backgroundImg} source={IMAGE_BACKGROUND}>
            <Formik
                initialValues={{ userName: '', phone: '', pass: '', cfmpassword: '' }}
                // onSubmit={() => {}}
                validationSchema={validateSchema}
                validateOnMount={true}
            >
                {({ handleChange, handleBlur, values, errors }) => (
                    <>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <SafeAreaView style={styles.container}>
                                {/*  */}
                                <View style={styles.w_Title}>
                                    <Text style={styles.title}>Welcom Onboard!</Text>
                                    <Text>Let us take care of your health</Text>
                                </View>

                                {/*  */}
                                <KeyboardAvoidingView
                                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                                    style={styles.w_Input}
                                >
                                    <ScrollView showsVerticalScrollIndicator={false}>
                                        <View style={styles.w_Input}>
                                            <View style={{ alignItems: 'center' }}>
                                                <TextInput
                                                    style={styles.inputUser}
                                                    onChangeText={handleChange('userName')}
                                                    onBlur={handleBlur('userName')}
                                                    value={values.userName}
                                                    autoCapitalize="none"
                                                    autoCorrect={false}
                                                    placeholder="Enter your full name"
                                                />
                                                {errors.userName ? (
                                                    <Text
                                                        style={{
                                                            color: 'red',
                                                            fontSize: 12,
                                                            bottom: 10,
                                                        }}
                                                    >
                                                        {errors.userName}
                                                    </Text>
                                                ) : null}
                                            </View>
                                            <View style={{ alignItems: 'center'}}>
                                            {/* <Text style={{left : 30, fontSize: 18, position: 'relative', paddingRight: -30 }}>+84</Text> */}
                                                <TextInput
                                                    style={styles.inputUser}
                                                    onChangeText={handleChange('phone')}
                                                    onBlur={handleBlur('phone')}
                                                    value={values.phone}
                                                    autoCapitalize="none"
                                                    autoCorrect={false}
                                                    placeholder="Enter phone number"
                                                    keyboardType="number-pad"
                                                    secureTextEntry={setSecureEntry}
                                                />
                                                {errors.phone ? (
                                                    <Text
                                                        style={{
                                                            color: 'red',
                                                            fontSize: 12,
                                                            bottom: 10,
                                                        }}
                                                    >
                                                        {errors.phone}
                                                    </Text>
                                                ) : null}
                                            </View>
                                            <View style={{ alignItems: 'center', flexDirection: 'row'  }}>
                                                <TextInput
                                                    style={styles.inputUser}
                                                    onChangeText={handleChange('pass')}
                                                    onBlur={handleBlur('pass')}
                                                    value={values.pass}
                                                    autoCapitalize="none"
                                                    autoCorrect={false}
                                                    placeholder="Enter Password"
                                                    secureTextEntry={isSecureEntry}
                                                />
                                                <View style={{position: 'absolute', right:15, bottom:18}}>
                                                    <TouchableOpacity onPress={()=>{
                                                        setSecureEntry((prev)=>!prev);
                                                    }}>
                                                        {isSecureEntry ? (<Ionicons name='eye-outline' size={30} color='rgba(80, 194, 201, 1)'></Ionicons>) : (<Ionicons name='eye-off-outline' size={30} color='rgba(80, 194, 201, 1)'></Ionicons>)}

                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            {errors.pass ? (
                                                    <Text
                                                        style={{
                                                            color: 'red',
                                                            fontSize: 12,
                                                            bottom: 10,
                                                        }}
                                                    >
                                                        {errors.pass}
                                                    </Text>
                                                ) : null}
                                            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                                <TextInput
                                                    style={styles.inputUser}
                                                    onChangeText={handleChange('cfmpassword')}
                                                    onBlur={handleBlur('cfmpassword')}
                                                    value={values.cfmpassword}
                                                    autoCapitalize="none"
                                                    autoCorrect={false}
                                                    placeholder="Comfirm Password"
                                                    secureTextEntry={isSecureEntry2}
                                                />
                                                <View style={{position: 'absolute', right:15, bottom:18}}>
                                                    {/* <Ionicons name='eye-off-outline' size={25} color='#33FFCC'></Ionicons> */}
                                                    <TouchableOpacity onPress={()=>{
                                                        setSecureEntry2((prev)=>!prev);
                                                    }}>
                                                        {isSecureEntry2 ? (<Ionicons name='eye-outline' size={30} color='rgba(80, 194, 201, 1)'></Ionicons>) : (<Ionicons name='eye-off-outline' size={30} color='rgba(80, 194, 201, 1)'></Ionicons>)}
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            {errors.cfmpassword ? (
                                                    <Text
                                                        style={{
                                                            color: 'red',
                                                            fontSize: 12,
                                                            bottom: 10,
                                                        }}
                                                    >
                                                        {errors.cfmpassword}
                                                    </Text>
                                                ) : null}
                                        </View>
                                    </ScrollView>
                                </KeyboardAvoidingView>
                                <View style={styles.w_BtnRegister}>
                                    <TouchableOpacity
                                        style={styles.btn_Register}
                                        onPress={() =>
                                            values.userName.length < 5 ||
                                            values.userName.length > 30 ||
                                            values.pass.length < 6 ||
                                            values.pass !== values.cfmpassword ||
                                            values.phone.length !== 10
                                                ? Alert.alert('Please enter correctly as required', values.message, [
                                                      {
                                                          text: 'Ok',
                                                          onPress: () => console.log('Ok'),
                                                          style: 'cancel',
                                                      },
                                                  ])
                                                : onSignUp(values.userName, values.phone, values.pass)
                                        }
                                    >
                                        <Text style={{ color: 'white', fontWeight: '600', fontSize: 16 }}>
                                            Register
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                {/*  */}
                                <View style={styles.w_SignIn}>
                                    <View style={styles.alreadyHaveAcc}>
                                        <Text>Already have an account?</Text>

                                        <TouchableOpacity onPress={() => navigation.goBack('LoginScreen')}>
                                            <Text style={{ color: '#50C2C9', fontWeight: '700', fontSize: 14 }}>
                                                Sign In
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </SafeAreaView>
                        </TouchableWithoutFeedback>
                    </>
                )}
            </Formik>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImg: {
        width: '100%',
        height: '100%',
        sresizeMode: 'cover',
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    w_Title: {
        marginTop: 25,
        height: '25%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    title: {
        fontWeight: '600',
        fontSize: 19,
        lineHeight: 40,
        letterSpacing: 2,
    },
    w_Input: {
        height: '48%',
        alignItems: 'center',
        marginTop: 10,
    },
    boxInput: {
        paddingTop: 30,
    },
    inputUser: {
        width: 280,
        height: 50,
        fontSize: 13,
        marginBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderWidth: 1,
        borderRadius: 23,
        backgroundColor: 'rgba(106, 224, 217, 0.2)',
    },
    inputPass: {
        width: 280,
        height: 50,
        fontSize: 13,
        marginBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderWidth: 1,
        borderRadius: 23,
        backgroundColor: 'rgba(106, 224, 217, 0.2)',
    },
    w_BtnRegister: {
        marginBottom: 75,
    },
    btn_Register: {
        width: 280,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(80, 194, 201, 1)',
    },
    w_SignIn: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    alreadyHaveAcc: {
        flexDirection: 'row',
        bottom: 15,
    },
});

export default RegisterForm;