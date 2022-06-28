import { useInput } from "../hooks/useInput.ts"
import { Input } from "./Input.tsx"
import { Button } from "../components/Button.tsx"
import { apiFactory } from "../api/apiFactory.ts"

export const SignUpForm = () => {
  const [ loginID, setLoginID ] = useInput("")
  const [ password, setPassword ] = useInput("")
  const [ personName, setPersonName ] = useInput("")

  return (
    <div className="flex flex-col gap-y-7">
      <Input
        id="loginId"
        labelName="login ID"
        type="text"
        onChange={ setLoginID }
      />
      <Input
        id="name"
        labelName="person name"
        type="text"
        onChange={ setPersonName }
      />
      <Input
        id="password"
        labelName="password"
        type="password"
        onChange={ setPassword }
      />
      <Button
        className="
          w-full
          text-white-200
          bg-blue-600
          hover:bg-blue-700
        "
        onClick={ async () => await apiFactory.get("person").registPerson(loginID(), password(), personName()) }
      >
        sign up
      </Button>
    </div>
  )
}