import { ContactForm } from "@/components/contact-form";
import Header from "@/components/header";
import { Mail, MapPin, Smartphone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Wang Medical",
  description: "Contact - Wang Medical",
};

const Contact = () => {
  return (
    <div className="w-full px-4 md:px-16">
      <Header header="Contact" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-20">
        <div className="max-w-full md:max-w-lg">
          <h2 className="text-[16px] font-thin text-primary uppercase">
            Contact Us
          </h2>
          <p
            className="text-[30px]
            sm:text-[48px]
            md:text-[60px]
            lg:text-[72px]
            text-primary
            tracking-tighter
            font-light
            leading-[30px]
            sm:leading-[48px]
            md:leading-[60px]
            lg:leading-[72px]
            mt-5
          "
          >
            Have questions? Get in touch!
          </p>
          <p
            className="text-[14px]
            sm:text-[16px]
            md:text-[18px]
            mt-4
          "
          >
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim.
          </p>
          <div className="flex flex-col gap-5 mt-5">
            <div className="flex items-center gap-4">
              <MapPin size={24} />
              <p>785 15h Street, Office 478 Berlin</p>
            </div>
            <div className="flex items-center gap-4">
              <Smartphone size={24} />
              <p>+1 840 841 25 69</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail size={24} />
              <p>abc@gmail.com</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
