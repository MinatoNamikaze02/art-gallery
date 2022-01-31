
import { useState } from 'react';
import {StyledFormArea, StyledFormButton, colors, StyledTitle, ButtonGroup, StyledContainer, ExtraText, TextLink} from './styles/signup'
import {Formik, Form} from 'formik';
import { TextInput } from '../form';
import axios from 'axios'
import { useHistory } from 'react-router-dom';


import {FiMail, FiLock, FiUser, FiCalendar, FiMap, FiMapPin, FiPhone, FiCompass} from 'react-icons/fi';
import * as Yup from 'yup';
import { date } from 'yup/lib/locale';

const SignUp = () => {
    const history = useHistory();
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [zipCode, setZipCode] = useState();
    const [dob, setDob] = useState();
    const [city, setCity] = useState();

    const validateDOB = value => {
        const date = new Date(value)
        console.log(date)
        console.log(typeof date)
        setDob(date)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        const res = axios.post('http://localhost:3001/api/addCustomer', {
            customerID: Date.now(),
            firstName: fName,
            lastName: lName,
            email: email,
            password: password,
            phoneNumber: phoneNumber,
            address1: address1,
            address2: address2,
            zipCode: zipCode,
            dob: dob,
            city: city
        }).then(res => {
            if(res.data.ok === true){
                alert("Successfully signed up")
                history.push('/signin')
            }
        }).catch(err => {
            console.log(err)
        })
    } 

    return (
        <div>
            <StyledContainer>
            <StyledFormArea>
                <StyledTitle color={colors.theme} size = {30}>Sign Up</StyledTitle>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                        repeatPassword: "",
                        dateofBirth: "",
                        firstName: "",
                        lastName: "",
                        phoneNumber: "",
                        AddressLine1: "",
                        AddressLine2: "",
                        zipCode: "",
                        city:""
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string().email('Invalid email').required('Required'),
                        password: Yup.string().required('Required').min(6, 'Password must be at least 6 characters').max(20, 'Password must be less than 20 characters'),
                        firstName: Yup.string().required('Required'),
                        lastName: Yup.string().required('Required'),
                        dateofBirth: Yup.date().required('Required'),
                        phoneNumber: Yup.string().required('Required'),
                        repeatPassword: Yup.string().required('Required').oneOf([Yup.ref('password'), null], 'Passwords must match'),
                        AddressLine1: Yup.string().required('Required'),
                        AddressLine2: Yup.string().required('Required'),
                        city: Yup.string().required('Required'),
                        zipCode: Yup.string().required('Required').min(6, 'Zip code must be at least 6 characters').max(6, 'Zip code must be less than 6 characters')
                    })}
                    onSubmit={(values, {setSubmitting}) => {
                        console.log(values);
                    }}
                >
                    {() => (
                        <Form onSubmit={handleOnSubmit}>
                            <TextInput validate = {value => {setFName(value)}} name="firstName" label="First Name" type="text" placeholder="Akash" icon = {<FiUser/>}/>
                            <TextInput validate = {value => {setLName(value)}} name="lastName" label="Last Name" type="text" placeholder="Sathish" icon = {<FiUser/>}/>
                            <TextInput validate = {validateDOB} name="dateofBirth" label="Date Of Birth" type="date" placeholder="" icon = {<FiCalendar/>}/>
                            <TextInput validate = {value => {setEmail(value)}} name="email" label="Email Address" type="text" placeholder="user@example.com" icon = {<FiMail/>}/>
                            <TextInput validate = {value => {setPassword(value)}} name="password" label="Password" type="password" placeholder="*******" icon ={<FiLock />}/>
                            <TextInput name="repeatPassword" label="Confirm Password" type="password" placeholder="*******" icon ={<FiLock />}/>
                            <TextInput validate = {value => {setPhoneNumber(value)}} name="phoneNumber" label="Phone Number" type="text" placeholder="" icon = {<FiPhone/>}/>
                            <TextInput validate = {value => {setAddress1(value)}} name="AddressLine1" label="Address Line 1" type="text" placeholder="" icon = {<FiMap/>}/>
                            <TextInput validate = {value => {setAddress2(value)}} name="AddressLine2" label="Address Line 2" type="text" placeholder="" icon = {<FiMap/>}/>
                            <TextInput validate = {value => {setCity(value)}} name="city" label="City" type="text" placeholder="" icon = {<FiCompass/>}/>
                            <TextInput validate = {value => {setZipCode(parseInt(value))}} name="zipCode" label="Zip Code" type="text" placeholder="" icon = {<FiMapPin/>}/>
                            <ButtonGroup>
                                <StyledFormButton disabled = {fName && lName && email && password && city && dob && address1 && address2 && phoneNumber && zipCode ? false : true}
                                 type="submit">Sign Up</StyledFormButton>
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
                <ExtraText>
                    Already have an account? <TextLink to="/signup">Login</TextLink>
                </ExtraText>
            </StyledFormArea>
            </StyledContainer>
        </div>
     );
};

export default SignUp;