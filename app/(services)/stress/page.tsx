import Footer from "@/components/footer";
import img1 from "@/public/stress-img-1.jpg";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Stress - Wang Medical",
  description: "Stress - Wang Medical",
};

const Stress = () => {
  return (
    <div className="w-full">
      <div className="pb-10 md:pb-10 w-full flex flex-col items-center lg:flex-row h-max px-8 md:px-16 ">
        <div className="flex flex-col md:flex-row items-start md:items-center my-10 gap-5 lg:w-1/2">
          <Image
            src={img1}
            alt="hero"
            width={450}
            height={450}
            className="rounded-full"
          />
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center text-lg">
          <p>
            Many studies have shown acupuncture can reduce stress, so scientists
            are exploring which biological mechanisms are stimulated by
            acupuncture and cause this reaction in the body. The feeling of
            stress in our bodies has a lot to do with the relationship between
            the hypothalamus of the brain, the pituitary gland and the adrenal
            glands. Each of those areas releases different hormones that
            interact and create the stress-response in our bodies.
            <br />
            <br />
            In 2013, a study published by the Journal of Endocrinology speaking
            of changes in stressful situations had significantly decreased after
            the treatment of electroacupuncture. This biological response
            suggests acupuncture blocks the chronic stress-induced elevation of
            these hormones and might explain how acupuncture works to reduce
            stress in the body.
          </p>
        </div>
      </div>
      <Footer showRequest={true} />
    </div>
  );
};

export default Stress;
