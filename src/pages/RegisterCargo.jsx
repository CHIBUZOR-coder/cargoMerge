import { useEffect, useState } from "react";
import { Input } from "../Custom/input";
import Layout from "../Layout/Layout";
import { FaSign } from "react-icons/fa";
import Uploader from "../Uploader/Uploader";
import useUserStore from "../store/useUserStore";
import Loader from "../Custom/Loader";
import { useLoadingStore } from "../store/useLoadingStore";
// No 5 Obollo Crescent Mile2 Lagos

const RegisterCargo = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [preview, setPreview] = useState(null);

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [visibleII, setVisibleII] = useState(false);
  const [userImage, setUserImage] = useState([]);
  const setInputVal = (vale, setter, mainVal, indicator) => {
    setter(vale);
    console.log(`${indicator}:`, mainVal);
    console.log("mainval", mainVal);
  };

  useEffect(() => {
    console.log("image:", userImage);
  }, [userImage]);

  const { HandleFileUploaded, registerUser, userError, success } =
    useUserStore();
  const loading = useLoadingStore((s) => s.loading.users);

  const HandleRgisterUser = async  () => {
    await registerUser(
      firstName,
      lastName,
      Email,
      address,
      phone,
      Password,
      ConfirmPassword,
      userImage
    );

    // ✅ Clear all inputs
    setFirstName("");
    setlastName("");
    setEmail("");
    setAddress("");
    setPhone("");
    setPassword("");
    setConfirmPassword("");
    setUserImage([]);
    setPreview(null);
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
                  src="https://res.cloudinary.com/de3iibogu/image/upload/v1755464837/logo-modified_ahi0l7.png"
                  alt="logo"
                  className=" absolute top-0 left-0 w-full h-full rounded-full object-cover"
                />
              </div>

              <form className="flex flexCol gap-5 w-full ">
                <Input
                  label={"First Name"}
                  placeholder={"John"}
                  type={"text"}
                  setter={setFirstName}
                  setInputVal={setInputVal}
                  setVisible={setVisible}
                  setVisibleII={setVisibleII}
                  visibleII={visibleII}
                  visible={visible}
                  mainVal={firstName}
                  bg={true}
                  indicator={"firstname"}
                />
                <Input
                  label={"Last Name"}
                  placeholder={"Deo"}
                  type={"text"}
                  setter={setlastName}
                  setInputVal={setInputVal}
                  setVisible={setVisible}
                  setVisibleII={setVisibleII}
                  visibleII={visibleII}
                  visible={visible}
                  mainVal={lastName}
                  bg={true}
                  indicator={"lastname"}
                />
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
                  label={"Adress"}
                  placeholder={"No 5 Obollo Crecsent kirikiri Mile2 Lagos"}
                  type={"text"}
                  setter={setAddress}
                  setInputVal={setInputVal}
                  setVisible={setVisible}
                  setVisibleII={setVisibleII}
                  visibleII={visibleII}
                  visible={visible}
                  mainVal={address}
                  bg={true}
                  indicator={"address"}
                />
                <Input
                  label={"Phone"}
                  placeholder={"09074639302"}
                  type={"text"}
                  setter={setPhone}
                  setInputVal={setInputVal}
                  setVisible={setVisible}
                  setVisibleII={setVisibleII}
                  visibleII={visibleII}
                  visible={visible}
                  mainVal={phone}
                  bg={true}
                  indicator={"phone"}
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
                <Input
                  label={"Confirm Password"}
                  placeholder={"********"}
                  type={visible ? "text" : "password"}
                  setter={setConfirmPassword}
                  setInputVal={setInputVal}
                  setVisible={setVisible}
                  setVisibleII={setVisibleII}
                  visibleII={visibleII}
                  visible={visible}
                  mainVal={ConfirmPassword}
                  bg={true}
                  indicator={"confirmpassword"}
                />

                <div className="">
                  <Uploader
                    onFileUploaded={HandleFileUploaded}
                    prviewSetter={setPreview}
                    MainImageSetter={setUserImage}
                    For={"image"}
                  />
                </div>

                <div className=" w-full  relative col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-center cursor-default ">
                  <div className="flex gap-4 flex-wrap">
                    {userImage.path ? (
                      <div className="w-32 h-32 p-2 bg-main border border-border rounded flex items-center justify-center">
                        <img
                          src={preview}
                          alt={`Uploaded Preview ${userImage}`}
                          className="object-cover w-full h-full rounded"
                        />
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500 p-4 rounded-md border border-border bg-main">
                        No images added
                      </p>
                    )}
                  </div>
                </div>

                <span
                  onClick={() => HandleRgisterUser()}
                  className="bg-logotext transi hover:bg-main flexRow gap-4 text-white p-4 rounded-lg w-full inline-block "
                >
                  <FaSign /> Register
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

export default RegisterCargo;
