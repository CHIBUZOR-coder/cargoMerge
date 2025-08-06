/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

        colors: {
        main: "rgba(8, 10, 26, 1)",
        main2: "rgba(8, 10, 26, 0.5)",
        main3: "rgba(8, 10, 26, 0.82)",
        main4: "rgb(16, 19, 40, 1)",
        modal: "rgba(8, 10, 26, 0.85)",
        blacktrans: "rgba(0, 0, 0, 0.2)",

        subMain: "rgba(242, 0, 0, 1)",
        subMain2: "rgba(242, 0, 0, 0.5)",
        dry: "rgba(11, 15, 41, 1)",
        star: "rgba(255, 176, 0, 1)",
        text: "rgba(192, 192, 192, 1)",
        logotext: "#eadd8e",
        opa: "rgba(234, 221, 142, 0.3)",
        logocolor:"#1f2130",
        border: "rgba(75, 85, 99, 1)",
        dryGray: "rgba(224, 213, 213, 1)",
        drkb: "rgba(27, 30, 50, 0.8)",
        footer: "rgba(27, 30, 50, 0.8)",
        drkb2: "rgba(27, 30, 50, 1)",

        // darkb:"rgba(27, 30, 50, 0.8)"

        // **************
        primary: "rgb(241, 236, 236)",
        primary2: "rgba(255,255,255,0.6)",
        trans: "rgba(30, 26, 26, 0.6)",
        transb: "rgba(30, 26, 26, 0.8)",
        trans2: "rgb(0,0,0,0.5)",
        trans2: "rgb(0,0,0,0.6)",
        btn: "rgba(229,231,235,0.6)",
      },

      fontFamily:{
        lato: ['Lato', 'sans-serif'],
          inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
