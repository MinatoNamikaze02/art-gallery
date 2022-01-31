import { useState } from 'react'
import {
  StyledFormArea,
  StyledFormButton,
  colors,
  StyledTitle,
  ButtonGroup,
  StyledContainer,
  ExtraText,
  TextLink,
} from './styles/signin'
import { Formik, Form } from 'formik'
import { TextInput } from '../form'
import axios from 'axios'
import { useHistory, useLocation } from 'react-router-dom'
import { FiMail, FiLock } from 'react-icons/fi'
import * as Yup from 'yup'

const SignIn = () => {
  const history = useHistory()
  const location = useLocation()
  const [email, setEmail] = useState('')
  const [adminID, setAdminID] = useState('')
  const [password, setPassword] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)
  if(location.state){
    if(location.state.user === 'admin'){
      setIsAdmin(true)
    }
  }
 

  const handleOnSubmit = async (event) => {
    event.preventDefault()
    console.log(email, password)
    let user = 'customer'
    const result = await axios
      .post('http://localhost:3001/api/login', {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem('id', JSON.stringify(res.id))
        alert('Login Successful')
        setTimeout(() => {
          history.push('/user/customer')
        }, 1000)
      })
      .catch((err) => {
        console.log(err)
      })
    console.log(result)
  }

  return (
    <div>
      <StyledContainer>
        <StyledFormArea>
          <StyledTitle color={colors.theme} size={30}>
            Login
          </StyledTitle>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={Yup.object({
              email: Yup.string().email('Invalid email').required('Required'),
              password: Yup.string()
                .required('Required')
                .min(6, 'Password must be at least 6 characters')
                .max(20, 'Password must be less than 20 characters'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values)
            }}
          >
            {() => (
              <Form onSubmit={handleOnSubmit}>
                  <TextInput
                  validate={(value) => {
                    setEmail(value)
                  }}
                  name='email'
                  label='Email'
                  type='text'
                  placeholder='user@example.com'
                  icon={<FiMail />}
                />
                <TextInput
                  validate={(value) => {
                    setPassword(value)
                  }}
                  name='password'
                  label='Password'
                  type='password'
                  placeholder='*******'
                  icon={<FiLock />}
                />
                <ButtonGroup>
                  <StyledFormButton disabled={email && password ? false : true}
                  type='submit'>Login</StyledFormButton>
                </ButtonGroup>
              </Form>
            )}
          </Formik>
          <ExtraText>
            New here? <TextLink to='/signup'>Signup</TextLink>
          </ExtraText>
        </StyledFormArea>
      </StyledContainer>
    </div>
  )
}

export default SignIn
