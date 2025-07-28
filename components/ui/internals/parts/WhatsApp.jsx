import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { siteConfig } from "../../../../lib/config";

const WhatsApp = ({ id }) => {
  const router = useRouter();
  const [callNow, setCallNow] = useState();

  return (
    <Link
      id={id || "main-floating-whatsapp"}
      href={`https://api.whatsapp.com/send/?phone=${siteConfig.contact.whatsapp}&text=Scuba+Diving+Inquiry%0A${siteConfig.site.origin}${router.asPath}`}
      target="_blank"
      className="fixed z-40 duration-300 ease-linear bg-white border rounded-full shadow-lg cursor-pointer bottom-5 right-5 md:bottom-10 md:right-10 hover:md:text-bermuda-300 hover:bg-gray-200 text-bermuda-200"
    >
      <div
        className="relative"
        onMouseEnter={() => setCallNow(true)}
        onMouseLeave={() => setCallNow(false)}
      >
        <span
          className={`absolute px-3 py-2 border font-normal border-bermuda-200 bg-white rounded-lg text-base right-0 w-[230px] -top-[52px] ${
            callNow ? "visible" : "hidden"
          }`}
        >
          Need Help? WhatsApp Now!
        </span>
        <Image
          src="/images/whatsapp-icon.png"
          width="84"
          height="84"
          alt="WhatsApp Logo"
          priority
        />
      </div>
    </Link>
  );
};

export default WhatsApp;
