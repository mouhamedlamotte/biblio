import { useContext } from "react";
import { AuthContext } from "@/context/authContext";
import { useRouter, usePathname } from "next/navigation";
import Login from "@/pages/auth/login";
import { Forbidden } from "./Forbidden";


export const ProtectedAdminRouteWrapper = ({ children }) => {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const pathname = usePathname();

  if (!user?.is_superuser) {
    
    return (
      <Forbidden />
    );
  }

  return children;
};
