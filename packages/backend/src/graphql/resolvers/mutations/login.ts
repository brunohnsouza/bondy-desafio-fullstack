import bcrypt from 'bcrypt'
import { User } from '../../../models/User'

export const login = async (_parent, args, _context, _info) => {
  const { email, password } = args

  const user = await User.findOne({ email })
  if (!user) {
    throw new Error('Usuário não encontrado')
  }

  const isValid = await bcrypt.compare(password, user.password)
  if (!isValid) {
    throw new Error('Senha inválida')
  }

  return {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    company: user.company,
  }
}
