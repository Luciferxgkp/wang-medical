import { ContactForm } from "@/components/contact-form";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Building2, MapPin, Smartphone } from "lucide-react";
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
            Ask us a question
          </p>
          <p
            className="text-[14px]
            sm:text-[16px]
            md:text-[18px]
            mt-4
          "
          >
            Ask us a Question and we will reply within 1 business day.
          </p>
          <div className="flex flex-col gap-5 mt-5">
            <div className="flex items-center gap-4">
              <Building2 size={24} />
              <p>Wang Medical, Inc.</p>
            </div>
            <div className="flex items-center gap-4">
              <MapPin size={24} />
              <p>3602 N. Cole Rd. Boise, ID 83704</p>
            </div>
            <div className="flex items-center gap-4">
              <Smartphone size={24} />
              <p>(208) 321-7348</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
      {/** Footer */}
      <Footer showRequest={false} />
    </div>
  );
};

export default Contact;
