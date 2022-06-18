import { Link } from "aleph/react"
import { Button } from "../components/Button.tsx"
import { useInput } from "../hooks/useInput.ts"
import { Input } from "./Input.tsx"

export const SignInForm = () => {
  const [ _loginID, setLoginID ] = useInput("")
  const [ _password, setPassword ] = useInput("")

  return (
    <div className="flex flex-col gap-y-7">
      <Input id="loginId" labelName="login id" type="text" onChange={ setLoginID } />
      <Input id="password" labelName="password" type="password" onChange={ setPassword } />
      <Link to="/records">
        <Button className="text-white-200 bg-blue-600 hover:bg-blue-400">sign in</Button>
      </Link>
    </div>
  )
}