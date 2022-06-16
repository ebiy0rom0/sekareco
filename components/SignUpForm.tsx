import { useInput } from "../hooks/useInput.ts"
import { Input } from "./Input.tsx"

export const SignUpForm = () => {
  const [ _loginID, setLoginID ] = useInput("")
  const [ _password, setPassword ] = useInput("")

  return (
    <>
      <Input labelName="login id" type="text" onChange={ setLoginID } />
      <Input labelName="password" type="password" onChange={ setPassword } />
      <button>sign up</button>
    </>
  )
}