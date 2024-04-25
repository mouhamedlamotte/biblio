import { useContext } from "react";
import { AuthContext } from "@/context/authContext";
import { useRouter, usePathname } from "next/navigation";
import Login from "@/pages/auth/login";


export const ProtectedRouteWrapper = ({ children }) => {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const pathname = usePathname();

  if (!user) {
    
    return (
      <Login nextPath={pathname}/>
    );
  }

  return children;
};
