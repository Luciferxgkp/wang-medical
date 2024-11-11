import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import img1 from "@/public/digestivedisorders-img-1.jpg";
import img2 from "@/public/digestivedisorders-img-2.jpg";
import { Check } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digestive Disorders - Wang Medical",
  description: "Digestive Disorders - Wang Medical",
};

const DigestiveDisorders = () => {
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
            Evidence-Based Complementary and Alternative Medicine study for
            digestive disorders.
          </p>
          <p>
            In a 2015 study from the journal Evidence-Based Complementary and
            Alternative Medicine, researchers showed acupuncture and moxibustion
            significantly reduce intestinal inflammation for Crohn&apos;s
            disease patients. Through analyzing before and after intestinal
            biopsies, the researchers observed acupuncture and moxibustion were
            able to relieve inflammation by regulating the ratio of inflammatory
            response cells. The two modalities were inducing homeostasis in the
            gastrointestinal cells.
          </p>
          <p className="text-xs mt-5">
            <b>Source</b> :{" "}
            <Link
              href={
                "https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2603492"
              }
              target="_blank"
            >
              The Long-term Effect of Acupuncture for Migraine Prophylaxis
            </Link>
          </p>
        </div>
      </div>
      <div className="pb-10 md:pb-20 w-full flex flex-col items-center lg:flex-row h-max px-8 md:px-16 bg-white">
        <div className="lg:w-1/2 flex flex-col justify-center text-lg pt-10">
          <p className="text-3xl text-primary">
            Acupuncture and Traditional Chinese Medicine address digestive
            disorders in a holistic way. They look at root causes like:
          </p>
          <ul className="my-5">
            <li className="flex items-center gap-2 text-xl border-b py-3">
              <Check className="h-8 w-10" />
              Diet
            </li>
            <li className="flex items-center gap-2 text-xl border-b py-3">
              <Check className="h-8 w-10" />
              Lifestyle
            </li>
            <li className="flex items-center gap-2 text-xl py-3">
              <Check className="h-8 w-10" />
              Genetic Factors
            </li>
            <li className="flex items-center gap-2 text-xl py-3">
              <Check className="h-8 w-10" />
              Stress
            </li>
            <li className="flex items-center gap-2 text-xl py-3">
              <Check className="h-8 w-10" />
              Insomnia
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

export default DigestiveDisorders;
