import { SignUp } from "@clerk/nextjs";
import {neobrutalism} from "@clerk/themes";

export default function SignUpPage() {
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <SignUp />
    </div>
  )
}