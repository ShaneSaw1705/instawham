import { SignIn } from "@clerk/nextjs";
import {neobrutalism} from "@clerk/themes";

export default function SignInPage() {
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <SignIn appearance={neobrutalism} />
    </div>
  )
}