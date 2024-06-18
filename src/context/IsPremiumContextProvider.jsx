import axios from "axios"
import { createContext, useContext, useEffect, useState } from "react"
import { useUserContext } from "./UserContextProvider";

export const PremiumContext = createContext({});

export const usePremiumContext = () => useContext(PremiumContext);

const IsPremiumContextProvider = ({children}) => {

    const { userData } = useUserContext();
    const email = userData?.email
    console.log("email:", email)
    const [premium, setPremium] = useState(false)
    const [plan,setPlan] = useState("")

        useEffect(() => {
            const fetchPremium = async () => {
                try {
                const data = await axios.post("https://api.animhub.dev/api/v1/payments/get-customer",{
                    email
                },
                {
                    mode: 'no-cors',
                    withCredentials: false,
                  } )  
                if(data.status === 200) {
                    console.log("PlanId: ",data)
                    setPlan(data.data.planId)
                    setPremium(true)
                } else {
                    setPremium(false)
                }             
                } catch (error) {
                    console.log(error)
                }
            }
    
            const delay = 1000; //  in milliseconds
            const timeoutId = setTimeout(() => {
              fetchPremium();
            }, delay);
        
            // Clear the timeout if the component unmounts before the delay
            return () => clearTimeout(timeoutId);
        }, [email])

    return (
        <PremiumContext.Provider value={{ premium, plan }}>
           {children}
        </PremiumContext.Provider>
    );
}

export default IsPremiumContextProvider
