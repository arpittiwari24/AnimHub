import { AuthContextProvider } from "./AuthContextProviders";
// import { ThemeProvider } from "next-themes";
// import { Toaster } from "react-hot-toast";
// import Analytics from "./Analytics";

export default function Providers({ children }) {
    return (
        <div>
            <Analytics />
            <ThemeProvider attribute="class" defaultTheme="light">
                <AuthContextProvider>{children}</AuthContextProvider>
            </ThemeProvider>
            <Toaster
                toastOptions={{
                    className: "",
                    style: {
                        border: "1px solid #713200",
                        color: "#713200",
                    },
                }}
                containerStyle={{
                    top: 80,
                    left: 20,
                    bottom: 20,
                    right: 20,
                }}
            />
        </div>
    );
}