import * as Yup from 'yup';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const validateSchema = Yup.object().shape({
    userName: Yup.string()
        .min(3, 'Your name must have from 3-40 character')
        .max(40, 'Your name must have from 3-40 character'),
    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').max(11, 'Your phone number must have at maximum 11 digits').min(10, 'Your phone number has at least 10 digits'),
    pass: Yup.string().min(6, 'Your password has at least 6 characters'),
    cfmpassword: Yup.string().oneOf([Yup.ref('pass'), null], 'Passwords must match'),
});