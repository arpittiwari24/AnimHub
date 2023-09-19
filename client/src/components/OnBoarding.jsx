import React, { useEffect, useState } from 'react'
import axios from 'axios'

const OnBoarding = () => {
    const [data, setData] = useState({
        username: " ",
        name: " ",
        bio: " ",
        country: " ",
        color1: " ",
        color2: " ",
        twitter: " ",
        instagram: " ",
        linkedin: " ",
        github: " ",
        profilePicture: " "
    })
    useEffect(() => {
        // axios.post('http://localhost:8000/api/v1/auth/createUser', data)
            // .then((res) => { console.log("Success", res); setData(res.data) })
            // .catch((err) => { console.log("Error", err) })
    }, [])
    return (
        <div>
            <h1>OnBoarding</h1>
            <form>
                <img src="" alt="Profile Picture" />
                <input type="file" name="profilePic" />
                <br />
                <input type="text" placeholder="Username" name="username" /><br />
                <input type="text" placeholder="Name" name="name" /><br />
                <input type="text" placeholder="Bio" name="bio" /><br />
                <input type="text" placeholder="Country" name="country" /><br />
                {/* <input type="text" placeholder="Website" name="" /> */}
                <input type="color" placeholder="color1" name="color1" />
                <input type="color" placeholder="color2" name="color2" /><br />
                <div className='socials'>
                    <input type="text" placeholder="Twitter" name="twitter" /><br />
                    <input type="text" placeholder="Instagram" name="instagram" /><br />
                    <input type="text" placeholder="LinkedIn" name="linkedin" /><br />
                    <input type="text" placeholder="Github" name="github" /><br />
                </div>
                <input type="text" placeholder="Profile Picture" name="profilePicture" /><br />
                <button type="submit">Submit</button><br />
            </form>
        </div>
    )
}

export default OnBoarding