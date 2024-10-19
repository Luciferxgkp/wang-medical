import Header from "@/components/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us - Wang Medical",
  description: "About Us - Wang Medical",
};

const AboutUs = () => {
  return (
    <div className="w-full">
      <Header header="About Us" />
      <div className="my-5 md:mt-[10rem] w-full flex flex-col md:flex-row items-center">
        <div className="w-full h-[500px] relative">
          <div
            className="w-[220px] h-[280px]
            sm:w-[300px] sm:h-[400px]
            md:w-[260px] md:h-[320px] 
          lg:w-[280px] lg:h-[360px]
          xl:w-[400px] xl:h-[500px]
          absolute left-5 lg:left-[100px] "
          >
            <Image
              src={"/istockphoto-1453141064-612x612.jpg"}
              alt="Acupuncture"
              width={400}
              height={500}
              objectFit="cover"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="w-[220px] h-[220px]
          
          sm:w-[300px] sm:h-[300px]
          md:w-[260px] md:h-[260px]
          lg:w-[300px] lg:h-[300px]
          xl:w-[400px] xl:h-[400px] 
          absolute 
          left-28 
          sm:left-60
          md:left-[100px]
          lg:left-[200px]
          xl:left-[300px] top-[200px]"
          >
            <Image
              src={"/360_F_213691742_bUiIM9XYfy1krArVdBR6j4UbSdKNTpEv.jpg"}
              alt="Acupuncture"
              width={400}
              height={400}
              objectFit="cover"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full text-primary flex flex-col gap-10 px-10">
          <h2 className="text-2xl tracking-tight">Welcome to Wang Medical</h2>
          <div className="tracking-tight font-light text-lg flex flex-col gap-4">
            <p>
              Our providers want to ensure they can help you and establish
              expectations before they begin treatment. You will be asked to
              complete a full health history before being seen for your
              consultation. Your acupuncturist will ask you several questions
              and may perform functionality and pain assessments. Vitals may be
              taken.
            </p>
            <p>
              Please ask as many questions as you have regarding your current
              health concern. We are here for you. This is your time to focus on
              your healthcare needs.
            </p>
            <p>
              Your acupuncturist will discuss what your potential diagnosis may
              be based on Chinese medicine theory and a treatment plan will be
              developed. It is always up to you if you want to start treatment.
              If you choose to begin, your first appointment will begin
              immediately. We schedule our consultations so that there is time
              for you to start treatments during the same visit.
            </p>
          </div>
        </div>
      </div>
      <div className="my-5 md:my-20 w-full flex h-10"></div>
      <div className="pt-5 md:pt-20 w-full flex flex-col h-max px-4 md:px-16 bg-white">
        <h2 className="text-[16px] font-thin text-primary uppercase">
          We know how to
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
            w-full
            md:max-w-2xl
          "
        >
          Leading the way to overall health
        </p>
        <p
          className="text-[14px]
            sm:text-[16px]
            md:text-[18px]
            mt-4
            w-full
            md:max-w-2xl
          "
        >
          Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia.
        </p>
        <div className="flex items-center my-20 gap-5">
          <Avatar className="h-20 w-20">
            <AvatarImage src="image.txt" alt="image" />
            <AvatarFallback>WM</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <p className="text-2xl font-light text-primary">Wang Medical</p>
            <p className="text-sm">CEO & Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
