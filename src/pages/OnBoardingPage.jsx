import React from 'react'
import { OnBoarding } from '../components/Popups'
// import { useEffect } from 'react'
// import { auth } from '../firebase/auth'
// import { useNavigate } from 'react-router-dom'

const OnBoardingPage = () => {
    // const navigate = useNavigate()
    // useEffect(() => {
    //     if (!auth.currentUser){
    //         navigate('/')
    //     }
    // }, [])
    return (
        <div>
            <OnBoarding /> 
        </div>
    )
}

export default OnBoardingPage