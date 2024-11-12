import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import img1 from "@/public/opioidaddiction-img-1.jpg";
import { Check } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Opioid Addiction - Wang Medical",
  description: "Opioid Addiction - Wang Medical",
};

const OpioidAddiction = () => {
  return (
    <div className="w-full">
      <div className="pb-10 md:pb-10 w-full flex flex-col items-center lg:flex-row h-max px-8 md:px-16">
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
            “... one of the oldest pain relief techniques (acupuncture) ...
            could find a central place in the management of acute care
            settings.”
          </p>
          <p>
            In 2016, research published in the American Journal of Emergency
            Medicine found acupuncture was significantly more effective than
            intravenous morphine to address patient&apos;s pain. The study
            looked at 300 patients who reported to an emergency hospital in
            Tunisia with acute pain. Notably, the study also showed acupuncture
            worked faster and caused fewer adverse side effects.
            <br />
            <br />
            While this study specifically looked at acupuncture for acute pain
            in the emergency-room setting, subsequent studies, including
            research analyzing the results from over 20,000 patients published
            in the Journal of Pain, have shown acupuncture is also effective in
            the treatment of chronic pain.
          </p>
          <p className="text-xs mt-5">
            <b>Source</b> :{" "}
            <Link
              href={
                "https://www.ajemjournal.com/article/S0735-6757(16)30422-3/abstract"
              }
              target="_blank"
            >
              Acupuncture vs intravenous morphine in the management of acute
              pain in the ED
            </Link>
          </p>
        </div>
      </div>
      <div className="pb-10 md:pb-20 w-full flex flex-col items-center justify-center lg:flex-row h-max px-8 md:px-16 bg-white">
        <div className="lg:w-3/4 flex flex-col justify-center text-lg pt-10">
          <p className="text-3xl text-primary">
            Acupuncture treatments address neck pain by addressing some of the
            leading causes of pain. Acupuncture can:
          </p>
          <ul className="my-5">
            <li className="flex items-center gap-2 text-xl border-b py-3">
              <Check className="h-8 w-8 flex-shrink-0" />
              Relax shoulder and neck muscles
            </li>
            <li className="flex items-center gap-2 text-xl border-b py-3">
              <Check className="h-8 w-8 flex-shrink-0" />
              Reduce pain-causing inflammation
            </li>
            <li className="flex items-center gap-2 text-xl py-3">
              <Check className="h-8 w-8 flex-shrink-0" />
              Improve circulation, which reduces pain
            </li>
            <li className="flex items-center gap-2 text-xl py-3">
              <Check className="h-8 w-8 flex-shrink-0" />
              Improve neck mobility, which can be impaired by pain and muscle
              stiffness
            </li>
          </ul>
          <p className="text-sm mt-5 mx-auto mb-10">
            <b>Source</b> :{" "}
            <Link
              href={
                "https://www.ajemjournal.com/article/S0735-6757(16)30422-3/abstract"
              }
              target="_blank"
            >
              Acupuncture vs intravenous morphine in the management of acute
              pain in the ED
            </Link>
          </p>
          <Button
            className="mt-5 text-2xl w-[300px] py-6 hover:scale-105 mx-auto"
            asChild
          >
            <Link href="/contact">Request an Appointment</Link>
          </Button>
        </div>
      </div>
      <Footer showRequest={false} />
    </div>
  );
};

export default OpioidAddiction;
