import JWT from 'jsonwebtoken'

const generateToken = (id) => {
  return JWT.sign({ id }, 'anykey', { expiresIn: '10d' })
}

export default generateToken
