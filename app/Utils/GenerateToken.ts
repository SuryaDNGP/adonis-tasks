import JWT from 'jsonwebtoken'

const generateToken = (id) => {
  return JWT.sign({ id }, 'anykey', { expiresIn: '1h' })
}

export default generateToken
