import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import RegisterScreen from './screen/RegisterScreen';
import LoginScreen from './screen/LoginScreen';
import ForgotPassScreen from './screen/ForgotPassScreen';
import ResetPassScreen from './screen/ResetPassScreen';
import DoctorConfirmScreen from './screen/DoctorConfirmScreen';
import DoctorConfirmedScreen from './screen/DoctorConfirmedScreen';
import PatientConfirmedScreen from './screen/PatientConfirmedScreen';
import BookingInformationScreen from './screen/BookingInformationScreen';
import InfoAppointmentScreen from './screen/InfoAppointmentScreen';



const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
};

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="InfoAppointmentScreen" screenOptions={screenOptions}>
                {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
                {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
                {/* <Stack.Screen name="RegisterScreen" component={RegisterScreen} /> */}
                {/* <Stack.Screen name="ForgotPassScreen" component={ForgotPassScreen} /> */}
                {/* <Stack.Screen name="ResetPassScreen" component={ResetPassScreen} />5 */}
                {/* <Stack.Screen name="DoctorConfirmScreen" component={DoctorConfirmScreen} /> */}
                {/* <Stack.Screen name="DoctorConfirmedScreen" component={DoctorConfirmedScreen} /> */}
                {/* <Stack.Screen name="PatientConfirmedScreen" component={PatientConfirmedScreen} /> */}
                {/* <Stack.Screen name="BookingInformationScreen" component={BookingInformationScreen} /> */}
                <Stack.Screen name="InfoAppointmentScreen" component={InfoAppointmentScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}