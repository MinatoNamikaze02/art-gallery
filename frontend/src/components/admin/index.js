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
} from './styles/admin'
import { Formik, Form } from 'formik'
import { TextInput } from '../form'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { FiMail, FiLock } from 'react-icons/fi'
import * as Yup from 'yup'

const Admin = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [adminID, setAdminID] = useState('')
  const [password, setPassword] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)

  const handleOnSubmit = (event) => {
    event.preventDefault()
    console.log(email, password)
    let user = 'customer'
    user = 'admin'
    const result = axios
      .post('http://localhost:3001/api/admin/login', {
        ID: adminID,
        password: password,
      })
      .then((res) => {
        console.log(res)
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('ID', JSON.stringify(res.status.customerID))
        alert('Login Successful')
        setTimeout(() => {
          history.push('/adminDashboard')
        }, 3000)
      })
      .catch((err) => {
        console.log(err)
      })
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
                    setAdminID(value)
                  }}
                  name='admin_id'
                  label='ADMIN ID'
                  type='text'
                  placeholder='FVCW3782'
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
                  <StyledFormButton
                    disabled={adminID && password ? false : true}
                    type='submit'
                  >
                    Login
                  </StyledFormButton>
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

export default Admin
