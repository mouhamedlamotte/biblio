import { LoginUser } from "@/api/base";
import { Loader } from "@/components/includes/loader";
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/context/authContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const LoginModal = ({showModal = false,setshowModal, isdomloading}) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()
  const [isloading, setIsLoading] = useState(false)


  const allowed_routes = ["/auth/register", "/auth/login", "/", "/category"]


  const { user  } = useContext(AuthContext)




  // const router = useRouter()
  const handleSubmit = async (e) => {
    setIsLoading(true)
    e.preventDefault();
    const user = {
      username,
      password,
    };
    const response = await LoginUser(user);
    if (response) {
      const user = response.data;
      setshowModal(true)
      // router.refresh()
    } else {
      toast.error("Identifiant incorrect");
    }
    setIsLoading(false)
  };


  useEffect(() => {

      return () => {
        
      };
  }, []);

  return (
    <>
      {
        isdomloading  && (
        <div  className="h-screen flex w-full z-40  justify-center items-center bg-slate-800  cursor-pointer absolute">

          <Loader isloading={true } />
        </div>
        )
      }
    <div
      className={`h-screen flex w-full z-40  justify-center items-center bg-slate-800  cursor-pointer  ${
        
        !showModal ? "absolute" : "hidden"
      
      
      
      
      }`}
    >
      {
        isloading  && <Loader isloading={isloading} />
      }
            {
        isdomloading  && <Loader isloading={true} />
      }
      {
        !isdomloading && (
          <form
          className="p-6 bg-gray-50  dark:bg-gray-900 rounded-md w-full sm:w-96  "
          onSubmit={handleSubmit}
        >
          <div className="p-4 flex justify-center items-center">
            <Link href="/" className="text-3xl ">
              Bi<span className="font-bold text-green-500">Blio</span>
            </Link>
          </div>
          <div className="mt-5 flex flex-col gap-2">
            <label htmlFor="username" className="font-bold">
              Username
            </label>
            <input
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              value={username}
              type="text"
              placeholder="username"
              name="username"
              id="username"
              className="bg-slate-700 p-2 rounded-md border-none focus:border focus w-full focus:border-green-500 outline-none"
            />
          </div>
          <div className="mt-5 flex flex-col gap-2">
            <label htmlFor="password" className="font-bold">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              name="password"
              id="password"
              placeholder="**********"
              className="bg-slate-700 p-2 rounded-md border-none focus:border focus w-full focus:border-green-500 outline-none"
            />
            <a href="#hh" className=" text-xs text-red-500 text-end">
              Mot de passe oublie ?
            </a>
          </div>
          <div className="flex justify-center mt-5">
            <Button type="sumbit" title={"Se connecter"} />
          </div>
          <div className="flex justify-center mt-5">
            <p>
              pas de compte ?
              <Link
                href="/auth/register"
                className="ms-2 text-green-500 text-end"
              >
                creer un compte
              </Link>{" "}
            </p>
          </div>
        </form>
        )
      }

    </div>
    </>
  );
};
