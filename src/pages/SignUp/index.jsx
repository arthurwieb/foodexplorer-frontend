import { Container, Form } from './styles'
import { Input } from '../../components/Input'
import { RedButton } from '../../components/RedButton'
import hexagonalLogo from '../../assets/hexagonalLogo.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'
export function SignUp() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate()
  async function handleFormSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true)

    if (!fullName || !email || !password) {
      alert('')
      return
    }

    try {
      await api.post('/users', { name: fullName, email, password })
      alert('Created successfully')
      setIsSubmitting(false)

      navigate('/')
    } catch (error) {
      alert(error.response.data.message)
    }


  }
  return (
    <Container>
      <main>
        <header className='logoSide'>
          <img src={hexagonalLogo} alt="logo retangular do explorer" />
          <h1>food explorer</h1>
        </header>
        <div className='UserInteraction'>
          <Form onSubmit={handleFormSubmit} className='contentSide'>
            <h2>Create your account</h2>

            <p className='inputField'>Full name</p>
            <Input
              onChange={(e) => { setFullName(e.target.value) }}
              placeholder="John Doe"
              required>
            </Input>

            <p className='inputField'>Email</p>
            <Input
              onChange={(e) => { setEmail(e.target.value) }}
              placeholder='johndoe@email.com'
              type='email'
              required>
            </Input>

            <p className='inputField'>Password</p>
            <Input
              onChange={(e) => { setPassword(e.target.value) }}
              placeholder='at least 6 characters'
              type='password'
              minLength="6"
              required>
            </Input>

            <RedButton title={isSubmitting ? 'Loading...' : 'Create account'}></RedButton>

          </Form>
          <footer className="info"> <Link to='/'>Sign In</Link> </footer>
        </div>

      </main>
    </Container>
  )
}

