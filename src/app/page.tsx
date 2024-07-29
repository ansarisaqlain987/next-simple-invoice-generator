import { logtoConfig } from "@/config/logto";
import { getLogtoContext, signIn, signOut } from "@logto/next/server-actions";
import AuthComponent from "./auth";

export default async function Home() {
  const { isAuthenticated } = await getLogtoContext(logtoConfig);
  return <AuthComponent auth={isAuthenticated} />
}
