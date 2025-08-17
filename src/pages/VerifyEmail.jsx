import { useContext, useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import Icon from "@mdi/react";
import { mdiTruckCargoContainer } from "@mdi/js";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState(false);
  const [token, setToken] = useState(searchParams.get("token"));
  const [isLoading, setIsLoading] = useState(true);
  const [Error, setError] = useState(null);
  const [result, setResult] = useState();

  const [emojis, setEmojis] = useState([]); // Store emoji objects
  const navigate = useNavigate();
  const baseURL = "https://cargobackend-5fdz.onrender.com";

  const verifyEmail = async (token) => {
    try {
      const response = await fetch(`${baseURL}/verifyEmail`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ token }),
      });
      const data = await response.json();
      if (response.ok) {
        setStatus(true);
        console.log(data);
        setResult(data?.message || "Email Verification Successfull");
        localStorage.setItem("token", data.data);
        setIsLoading(false);
        setTimeout(() => {
          navigate("/login");
        }, 4000);
      } else {
        console.log(data);
        setIsLoading(false);
        setError(data?.message || "Email verification failed!");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      verifyEmail(token);
    }
  }, [token]);

  useEffect(() => {
    console.log("isLoading", isLoading);
  }, [isLoading]);

  useEffect(() => {
    if (status === true) {
      let count = 0;
      const interval = setInterval(() => {
        setEmojis((prev) => [
          ...prev,
          {
            id: count++, // Unique ID
            left: Math.random() * 100 + "vw", // Random horizontal position
            animationDuration: Math.random() * 2 + 3 + "s", // Random duration
          },
        ]);
      }, 300);

      setTimeout(() => clearInterval(interval), 4000); // Stop adding after 3s

      return () => clearInterval(interval);
    }
  }, [status]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-main px-10 gap-10 relative overflow-hidden">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center relative rounded-full  h-[250px] w-[250px] ringg ">
            {/* Animated merge circles */}
            {/* <div className="flex space-x-2">
                 <div className="w-6 h-6 bg-logotext rounded-full animate-bounce"></div>
                 <div className="w-6 h-6 bg-logotext rounded-full animate-bounce delay-150"></div>
                 <div className="w-6 h-6 bg-logotext rounded-full animate-bounce delay-300"></div>
               </div> */}

            {/* Animated Cargomerge text */}
            <div className="flex justify-center items-center">
              <p className=" text-lg font-bold text-logotext tracking-wide animate-pulse">
                Verifying...
              </p>
              <span className="animate-truck">
                <Icon
                  path={mdiTruckCargoContainer}
                  size={2} // bigger size
                  color="currentColor" // or Tailwind color
                  className="text-logotext animate-drive"
                />
              </span>
            </div>
          </div>
        ) : result && result ? (
          <div className="rounded-md border-2 border-logotext p-4">
            <h2 className="text-2xl font-bold text-white text-center">
              {result} <br />
              You will be redirected to login page
            </h2>
            <p className="font-semibold text-4xl text-white animate-bounce">
              🤗
            </p>
          </div>
        ) : (
          <h2 className="rounded-md border-2 border-logotext text-2xl font-bold text-logotext p-4">
            {Error && Error}
          </h2>
        )}

        {/* Animated Party Emojis 🎉 */}
        {status === true &&
          emojis.map((emoji) => (
            <span
              key={emoji.id}
              className="absolute text-4xl animate-fall"
              style={{
                left: emoji.left,
                animationDuration: emoji.animationDuration,
              }}
            >
              🎉
            </span>
          ))}

        <style>
          {`
            @keyframes fall {
              0% { transform: translateY(-100vh); opacity: 1; }
              100% { transform: translateY(100vh); opacity: 0; }
            }
            .animate-fall {
              position: absolute;
              top: 0;
              animation: fall linear infinite;
            }
          `}
        </style>
      </div>
    </Layout>
  );
};

export default VerifyEmail;
