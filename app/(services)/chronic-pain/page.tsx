import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import img1 from "@/public/chronicpain-img-1.jpg";
import img2 from "@/public/chronicpain-img-2.jpg";
import { Check } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chronic Pain - Wang Medical",
  description: "Chronic Pain - Wang Medical",
};

const ChronicPain = () => {
  return (
    <div className="w-full">
      <div className="pb-10 md:pb-20 w-full flex flex-col items-center lg:flex-row h-max px-8 md:px-16">
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
          <p className="mb-4 italic text-xl text-primary text-center">
            “We conclude that acupuncture is effective for the treatment of
            chronic pain, with treatment effects persisting over time”
          </p>
          <p>
            In May 2018, a team of researchers from the Acupuncture Trialists
            Collaboration published an updated study that concluded acupuncture
            relieved people&apos;s pain and improved their mobility when
            compared with sham acupuncture and not receiving any acupuncture.
            The researchers also showed the effects persisted for at least 12
            months after the acupuncture treatments ended. This study adds to
            the growing body of literature that suggests acupuncture can be a
            viable treatment for chronic pain, and the findings cannot be
            explained away by the placebo effect since they did not observe
            significant changes in the group that received sham acupuncture.
          </p>
        </div>
      </div>
      <div className="pb-10 md:pb-20 w-full flex flex-col items-center lg:flex-row h-max px-8 md:px-16 bg-white">
        <div className="lg:w-1/2 flex flex-col justify-center text-lg pt-10">
          <p className="text-3xl text-primary">
            Acupuncture effectively reduces chronic pain in the body including:
          </p>
          <ul className="my-5">
            <li className="flex items-center gap-2 text-xl border-b py-3">
              <Check className="h-8 w-10" />
              Back Pain
            </li>
            <li className="flex items-center gap-2 text-xl border-b py-3">
              <Check className="h-8 w-10" />
              Neck Pain
            </li>
            <li className="flex items-center gap-2 text-xl py-3">
              <Check className="h-8 w-10" />
              Chronic Pain
            </li>
            <li className="flex items-center gap-2 text-xl py-3">
              <Check className="h-8 w-10" />
              Headaches
            </li>
            <li className="flex items-center gap-2 text-xl py-3">
              <Check className="h-8 w-10" />
              Acute Pain
            </li>
            <li className="flex items-center gap-2 text-xl py-3">
              <Check className="h-8 w-10" />
              The List goes on!
            </li>
          </ul>
          <Button
            className="mt-5 text-2xl w-[300px] py-6 hover:scale-105 mx-auto"
            asChild
          >
            <Link href="/contact">Schedule Appointment</Link>
          </Button>
        </div>
        <div className="my-10 gap-5 lg:w-1/2 flex flex-col items-center">
          <Image
            src={img2}
            alt="hero"
            width={450}
            height={450}
            className="rounded-full"
          />
        </div>
      </div>

      <Footer showRequest={false} />
    </div>
  );
};

export default ChronicPain;
