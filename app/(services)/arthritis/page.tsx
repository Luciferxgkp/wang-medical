import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import img1 from "@/public/arthritis-img-1.jpg";
import img2 from "@/public/arthritis-img-2.jpg";
import { Check } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Arthritis - Wang Medical",
  description: "Arthritis - Wang Medical",
};

const Arthritis = () => {
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
            “This study revealed that both acupuncture and physiotherapy
            improved the clinical symptoms of pain, morning stiffness and joint
            dysfunction. However, acupuncture treatment showed better curative
            effect than physiotherapy, suggesting that acupuncture may be a
            superior non-operative treatment for KOA [knee osteoarthritis]
            compared with physiotherapy.”
          </p>
          <p>
            <b>
              Osteoarthritis is a type of arthritis where the bone, cartilage
              and synovium wear down, leading to pain and stiffness.
            </b>{" "}
            Synovium lines the joints and produces synovial fluid that
            lubricates the joins as well as supplies them with nutrients and
            oxygen. A 2016 study from the American Journal of Translational
            Research compared the effectiveness of acupuncture and physiotherapy
            for treating knee osteoarthritis. When looking at motor scores,
            pain, stiffness and physical function, those patients who received
            acupuncture had significantly improved scores compared to patients
            who received physiotherapy.
          </p>
          <p className="text-xs mt-5">
            <b>Source</b> :{" "}
            <Link
              href={"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5040698/"}
              target="_blank"
            >
              Influence of Acupuncture in Treatment of Knee Osteoarthritis and
              Cartilage Repairing
            </Link>
          </p>
        </div>
      </div>
      <div className="pb-10 md:pb-20 w-full flex flex-col items-center lg:flex-row h-max px-8 md:px-16 bg-white">
        <div className="lg:w-1/2 flex flex-col justify-center text-lg pt-10">
          <p className="text-3xl text-primary">
            Acupuncture works for many kinds of arthritis, including:
          </p>
          <ul className="my-5">
            <li className="flex items-center gap-2 text-xl border-b py-3">
              <Check className="h-8 w-10" />
              Knee arthritis
            </li>
            <li className="flex items-center gap-2 text-xl border-b py-3">
              <Check className="h-8 w-10" />
              Wrist arthritis
            </li>
            <li className="flex items-center gap-2 text-xl py-3">
              <Check className="h-8 w-10" />
              Shoulder arthritis
            </li>
            <li className="flex items-center gap-2 text-xl py-3">
              <Check className="h-8 w-10" />
              Hip arthritis
            </li>
            <li className="flex items-center gap-2 text-xl py-3">
              <Check className="h-8 w-10" />
              Osteoarthritis
            </li>
            <li className="flex items-center gap-2 text-xl py-3">
              <Check className="h-8 w-10" />
              Gout
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

export default Arthritis;
