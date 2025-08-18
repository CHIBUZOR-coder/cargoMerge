import { useEffect, useState } from "react";
import { Input } from "../Custom/input";
import Layout from "../Layout/Layout";
import { FaSign } from "react-icons/fa";
import Uploader from "../Uploader/Uploader";
import useUserStore from "../store/useUserStore";
import Loader from "../Custom/Loader";
import { useLoadingStore } from "../store/useLoadingStore";
import { BiSolidLogInCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
// No 5 Obollo Crescent Mile2 Lagos

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [visibleII, setVisibleII] = useState(false);
  const setInputVal = (vale, setter, mainVal, indicator) => {
    setter(vale);
    console.log(`${indicator}:`, mainVal);
    console.log("mainval", mainVal);
  };

  const navigate = useNavigate();

  const { userError, success, loginUser, navigatee } = useUserStore();
  const loading = useLoadingStore((s) => s.loading.users);

  const HandleLogin = async () => {
    await loginUser(Email, Password);

     setTimeout(() => {
       navigate("/");
     }, 5000);
    // ✅ Clear all inputs
    setEmail("");
    setPassword("");
  };



  return (
    <Layout>
      {loading ? (
        <div
          className={`absolute top-0 left-0 w-full h-full bg-main flex justify-center items-center`}
        >
          <Loader />
        </div>
      ) : userError ? (
        <div
          className={`absolute top-0 left-0 w-full h-full bg-main flex justify-center items-center`}
        >
          <div className="mx-auto w-1/2 h-1/2 border-2 border-logotext flex justify-center items-center rounded-md">
            <p className="text-xl text-white ">{userError && userError}</p>
          </div>
        </div>
      ) : success ? (
        <div
          className={`absolute top-0 left-0 w-full h-full bg-main flex justify-center items-center`}
        >
          <div className="mx-auto w-1/2 h-1/2 border-2 border-logotext flex justify-center items-center rounded-md">
            <p className="text-xl text-white ">{success && success}</p>
          </div>
        </div>
      ) : (
        <div className="w-full relative  bg-main">
          <div className="min-h-[100vh] py-9 flexRow ">
            <div className="p-6 md:p-4 w-[80%] md:w-[70%] lg:w-[40%] bg-dry rounded-lg flexCol  border-2 border-logotext">
              <div className=" w-36 h-36 relative   login_logo flexRow mx-auto">
                <img
                  src="https://res.cloudinary.com/de3iibogu/image/upload/v1755355331/logo_pmixhe.png"
                  alt="logo"
                  className=" absolute top-0 left-0 w-full h-full rounded-full object-cover"
                />
              </div>

              <form className="flex flexCol gap-5 w-full ">
                <Input
                  label={"Email"}
                  placeholder={"Streamview@gmail.com"}
                  type={"email"}
                  setter={setEmail}
                  setInputVal={setInputVal}
                  setVisible={setVisible}
                  setVisibleII={setVisibleII}
                  visibleII={visibleII}
                  visible={visible}
                  mainVal={Email}
                  bg={true}
                  indicator={"password"}
                />

                <Input
                  label={"Password"}
                  placeholder={"********"}
                  type={visible ? "text" : "password"}
                  setter={setPassword}
                  setInputVal={setInputVal}
                  mainVal={Password}
                  bg={true}
                  setVisible={setVisible}
                  setVisibleII={setVisibleII}
                  visibleII={visibleII}
                  visible={visible}
                  indicator={"password"}
                />

                <span
                  onClick={() => HandleLogin()}
                  className="bg-logotext transi hover:bg-main flexRow gap-4 text-white p-4 rounded-lg w-full inline-block "
                >
                  <BiSolidLogInCircle />
                  <span>Login</span>
                </span>

                {/* <p className="text-center text-border">
                  <Link
                    to="/recovery"
                    className="text-dryGray transi hover:text-subMain font-semibold"
                  >
                    Forgot your password?
                  </Link>
                </p> */}
              </form>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Login;
