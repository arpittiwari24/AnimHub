import { useState } from "react";

import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";

import { toast } from "react-hot-toast";



const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    topic: "",
    message: "",
  });

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("sending");
    console.log(formData);
    //make a post request with formData
    setTimeout(() => {
      toast.dismiss(toastId);
      toast.success("Message sent successfully");
    }, 2000);
  };

  return (
    <>
      <div className="container mx-auto flex h-fit">
        <div className="max-w-[55%] w-[55%] p-5">
          <div className="w-fit flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <p className="text-white font-semibold text-5xl ">
                Feel free to reach out to us!
              </p>
              <p className="text-white font-normal text-lg opacity-80">
                Whether you have a question, suggestion, feature request, or you
                found a bug or you want to become a maintainer.
                <br />
                We are just a message away.
              </p>
            </div>
            <div className="w-full flex flex-col gap-5">
              <div className="w-full flex gap-8 ">
                <div className="flex justify-center items-center">
                  <AiFillInstagram className="text-grey w-10 h-10" />
                </div>
                <div className="w-fit flex justify-center items-center">
                  <a href="@anim.hub.dev">@anim.hub.dev</a>
                </div>
              </div>
              <div className="w-full flex gap-8 ">
                <div className="flex justify-center items-center ">
                  <FaSquareXTwitter className="text-grey w-10 h-10" />
                </div>
                <div className="w-fit flex justify-center items-center">
                  <a href="@anim_hub_dev">@anim_hub_dev</a>
                </div>
              </div>
              <div className="w-full flex gap-8 ">
                <div className="flex justify-center items-center">
                  <AiFillLinkedin className="text-grey w-10 h-10" />
                </div>
                <div className="w-fit flex justify-center items-center">
                  <a href="/animhubdev">/animhubdev</a>
                </div>
              </div>
              <div className="w-full flex gap-8 ">
                <div className="flex justify-center items-center">
                  <BsYoutube className="text-grey w-10 h-10" />
                </div>
                <div className="w-fit flex justify-center items-center">
                  <a href="@animhubdev">@animhubdev</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[45%] w-[45%] p-5">
          <div className="w-full h-full bg-[#151515] flex justify-center items-center rounded-xl">
            <div className="w-[70%] mx-auto flex flex-col items-center py-10">
              <div className="w-fit font-extrabold text-3xl flex justify-center items-center gap-2 mb-10">
                Contact
                <span className="bg-primary text-black rounded-md p-0.5">
                  Us
                </span>
              </div>
              <div className="w-full">
                <form
                  className="w-full flex flex-col gap-6"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="text"
                    placeholder="Your name *"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleOnChange}
                    className="bg-[#333333] p-3 rounded-md placeholder:text-white placeholder:opacity-70 outline-none focus:border-accent "
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={formData.email}
                    required
                    onChange={handleOnChange}
                    className="bg-[#333333] p-3 rounded-md placeholder:text-white placeholder:opacity-70 outline-none focus:border-accent "
                  />
                  <input
                    type="text"
                    placeholder="Mobile no. (optional)"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleOnChange}
                    className="bg-[#333333] p-3 rounded-md placeholder:text-white placeholder:opacity-70 outline-none focus:border-accent "
                  />

                  <div className="rounded-md">
                    <select
                      name="topic"
                      onChange={handleOnChange}
                      required
                      className="bg-[#333333] appearance-none w-full p-3 rounded-md placeholder:text-white outline-none  "
                    >
                      <option className="" value="" disabled selected>
                        Select contact type *
                      </option>
                      <option className="text-white"  value="Fun">
                        Just for fun 👀
                      </option>
                      <option className="text-white" value="Feedback">
                        Give us a feedback 😅
                      </option>
                      <option className="text-white" value="Maintainer">
                        Become a maintainer ⚙️
                      </option>
                      <option className="text-white" value="Sponsor">
                        Sponsor Us 🤑
                      </option>
                      <option className="text-white" value="Other">
                        Others 🤔
                      </option>
                    </select>
                  </div>

                  <textarea
                    placeholder="Message *"
                    name="message"
                    value={formData.message}
                    required
                    onChange={handleOnChange}
                    className="bg-[#333333]  p-3 rounded-md placeholder:text-white placeholder:opacity-70 outline-none focus:border-accent "
                  ></textarea>
                  <div className="w-fit mx-auto">
                    <button
                      type="submit"
                      className="px-8 py-4 bg-primary text-black rounded-md cursor-pointer font-bold"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
