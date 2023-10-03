import { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { BsCheckLg } from "react-icons/bs";
import { toast } from "react-hot-toast";
import { RxCross1 } from "react-icons/rx";

const SharePopup = ({ closePopup, id }) => {
  const [copying, setCopying] = useState(false);
  // let url="https://www.animhub.dev/component/12345678910"
  let url = "localhost:5173/component/12345678910";

  const shareOnWhatsApp = () => {
    const url = encodeURIComponent(url); // Replace with your actual URL
    const message = encodeURIComponent("Check out this URL: " + url);
    const whatsappURL = `https://wa.me/?text=${message}`;
    window.open(whatsappURL);
  };

  const shareOnInstagram = () => {
    // Instagram doesn't provide a direct way to share a URL programmatically.
    // Users typically have to content manually from the Instagram app.
    alert("Instagram sharing is not supported programmatically.");
  };

  const shareOnTwitter = () => {
    const url = encodeURIComponent(url); // Replace with your actual URL
    const twitterURL = `https://twitter.com/intent/tweet?url=${url}`;
    window.open(twitterURL);
  };

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(url); // Replace with your actual URL
    const linkedInURL = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    window.open(linkedInURL);
  };

  const handleCopy = async () => {
    setCopying(true);
    await navigator.clipboard.writeText(url);
    toast.success("Link copied successfully");
    setTimeout(() => {
      setCopying(false);
    }, 2000);
  };

  return (
    <div className=" relative w-[40vw]">
      <button className="absolute top-2 right-2" onClick={closePopup}>
        <RxCross1 className="text-3xl text-[#6a6a6a]" />
      </button>
      <div className="w-full h-fit p-4 flex flex-col gap-6">
        {/* heading */}
        <div className="p-1 w-fit flex justify-center items-center tracking-wider">
          <p className="text-white font-semibold text-base">Share</p>
        </div>
        {/* icons and link */}
        <div className="w-full pl-10 flex flex-col gap-10 mb-10">
          {/* icons */}
          <div className="flex gap-6 cursor-pointer">
            <div
              className="flex flex-col items-center gap-2"
              onClick={shareOnWhatsApp}
            >
              <IoLogoWhatsapp fill="gray" className="w-[50px] h-[50px]" />
              <p className="text-white text-sm">WhatsApp</p>
            </div>
            <div
              className="flex flex-col items-center gap-2"
              onClick={shareOnInstagram}
            >
              <AiFillInstagram fill="gray" className="w-[50px] h-[50px]" />
              <p className="text-white text-sm">Instagram</p>
            </div>
            <div
              className="flex flex-col items-center gap-2"
              onClick={shareOnTwitter}
            >
              <FaSquareXTwitter fill="gray" className="w-[50px] h-[50px]" />
              <p className="text-white text-sm">Twitter/X</p>
            </div>
            <div
              className="flex flex-col items-center gap-2"
              onClick={shareOnLinkedIn}
            >
              <BsLinkedin fill="gray" className="w-[50px] h-[50px]" />
              <p className="text-white text-sm">LinkedIn</p>
            </div>
          </div>
          {/* link */}
          <div className="w-[90%] bg-[#333333] h-12 flex gap-2 items-center rounded-md border-2 border-zinc-700">
            <div className="w-[80%] px-3 py-2">
              <p className="text-[#C6C6C6] text-sm truncate">{url}</p>
            </div>
            <div className="w-[20%] h-full flex justify-center items-center">
              {!copying ? (
                <div
                  onClick={handleCopy}
                  className=" px-4 py-1 rounded-full bg-primary text-black text-base font-medium cursor-pointer"
                >
                  copy
                </div>
              ) : (
                <div className="rounded-full bg-primary p-1 cursor-pointer">
                  <BsCheckLg fill="white" className="w-[25px] h-[25px]" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="w-full py-6 px-10 border-t-2 border-black">
        <p className="text-[#C6C6C6] font-medium  leading-[16px] text-[10px] ">
          *Note: We keep an eye on our social media accounts, so don’t forgot to
          mention us with the tags like #animhub, #animhubdev, etc
        </p>
      </div>
    </div>
  );
};

export default SharePopup;
