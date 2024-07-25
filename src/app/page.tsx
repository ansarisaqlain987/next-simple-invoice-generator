import { logtoConfig } from "@/config/logto";
import { getLogtoContext, signIn, signOut } from "@logto/next/server-actions";
import SignOut from "./sign-out";
import { redirect } from 'next/navigation'

export default async function Home() {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);
  if (!isAuthenticated) {
    redirect('/login');
  }
  redirect('/dashboard');
  return (<></>);
}
