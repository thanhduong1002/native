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
  } from 'react-native';
  import React, {useState} from 'react';
  import SelectDropdown from 'react-native-select-dropdown'
  
  const IMAGE_BACKGROUND = require('../../assets/image/login_background.png');
  const hospitals = ["Phòng khám đa khoa An Phúc", "Phòng khám đa khoa An Đức 1", "Phòng khám Vinmec Đà Nẵng"]
  const departments = ["Thần kinh", "Ung bứu", "Da liễu"]
  const RegisterFormDoctor = ( ) => {
    const [fullname, setFullName] = useState('')
    const [phone, setPhone] = useState('')
    const [pass, setPass] = useState('')
    const [repass, setRePass] = useState('')
    function submitForm(){
      console.log(fullname,phone);
    }
  
    return (
        <ImageBackground style={styles.backgroundImg} source={IMAGE_BACKGROUND}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={styles.container}>
                    {/*  */}
                    <View style={styles.w_Title}>
                        <Text style={styles.title}>Welcom Onboard!</Text>
                        <Text>Register for Doctor</Text>
                    </View>
  
                    {/*  */}
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        style={styles.w_Input}
                    >
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.w_Input}>
                                <View style={styles.boxInput}>
                                    <TextInput
                                        style={styles.inputUser}
                                        onChangeText={(text)=>{setFullName(text)}}
                                        value={fullname}
                                        placeholder="Enter your full name"
                                    />
                                    <TextInput
                                        style={styles.inputUser}
                                        onChangeText={(text)=>{setPhone(text)}}
                                        value={phone}
                                        placeholder="Enter phone number"
                                        keyboardType="numeric"
                                    />
                                    <SelectDropdown
                                        buttonStyle={styles.inputUser}
                                        defaultButtonText='Hospital name or clinic name'
                                        data={hospitals}
                                        dropdownStyle={styles.dropDownStyle}
                                        buttonTextStyle = {styles.ButtonTextStyle}
                                        selectedRowStyle={styles.selectedText}
                                        onSelect={(selectedItem, index) => {
                                          console.log(selectedItem, index)
                                        }}
                                        buttonTextAfterSelection={(selectedItem, index) => {
                                          return selectedItem
                                        }}
                                        rowTextForSelection={(item, index) => {
                                          return item
                                        }}
                                    />
                                    <SelectDropdown
                                        buttonStyle={styles.inputUser}
                                        data={departments}
                                        dropdownStyle={styles.dropDownStyle}
                                        buttonTextStyle = {styles.ButtonTextStyle2}
                                        defaultButtonText='Faculty name'
                                        selectedRowStyle={styles.selectedText}
                                        onSelect={(selectedItem, index) => {
                                          console.log(selectedItem, index)
                                        }}
                                        buttonTextAfterSelection={(selectedItem, index) => {
                                          return selectedItem
                                        }}
                                        rowTextForSelection={(item, index) => {
                                          return item
                                        }}
                                    />
                                    <TextInput
                                        style={styles.inputUser}
                                        onChangeText={(text)=>{setPass(text)}}
                                        value={pass}
                                        placeholder="Enter Password"
                                        secureTextEntry={true}
                                    />
                                    <TextInput
                                        style={styles.inputUser}
                                        onChangeText={(text)=>{setRePass(text)}}
                                        value={repass}
                                        placeholder="Comfirm Password"
                                        secureTextEntry={true}
                                    />
                                </View>
                                <View style={styles.w_BtnRegister}>
                                    <TouchableOpacity style={styles.btn_Register} onPress={submitForm}>
                                        <Text style={{ color: 'white', fontWeight: '600', fontSize: 16 }}>
                                            Register
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                    {/*  */}
                    <View style={styles.w_SignIn}>
                        <View style={styles.alreadyHaveAcc}>
                            <Text>Already have an account?</Text>
  
                            <TouchableOpacity onPress={() => navigation.goBack('LoginScreen')}>
                                <Text style={{ color: '#50C2C9', fontWeight: '700', fontSize: 14 }}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
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
        height: '65%',
        alignItems: 'center',
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
    ButtonTextStyle:{
        position: 'absolute',
        left:73,
        fontSize: 13,
    },
    ButtonTextStyle2:{
      position: 'absolute',
      left:167,
      fontSize: 13,
  },
  dropDownStyle:{
      width: 280,
      height: 150,
      fontSize: 13,
      borderRadius: 23,
      backgroundColor: 'rgba(106, 224, 217, 1)',    
  },
    selectedText: {
      width: 280,
      height: 50,
      fontSize: 13,
      marginBottom: 10,
      paddingLeft: 20,
      paddingRight: 20,
      borderWidth: 1,
      borderRadius: 23,
      backgroundColor: 'rgba(150, 32, 39, 0.8)',
  },
    w_BtnRegister: {
        marginTop: 95,
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
    },
  });
  
  export default RegisterFormDoctor;
  