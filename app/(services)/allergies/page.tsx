import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import img1 from "@/public/allergies-img-1.jpg";
import img2 from "@/public/allergies-img-2.jpg";
import { Check } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Allergies - Wang Medical",
  description: "Allergies - Wang Medical",
};

const Allergies = () => {
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
            “Our meta-analysis suggests that acupuncture could be a safe and
            valid treatment option for AR [allergic rhinitis] patients.”
          </p>
          <p>
            A 2015 study from the American Journal of Rhinology and Allergy
            found acupuncture can effectively treat hay fever. The researchers
            compiled the results from 13 previous studies, which totaled 2,365
            participants. The various studies confirmed acupuncture
            significantly lowers the antibody immunoglobulin E (IgE), the
            antibody associated with allergies and hypersensitivities. The
            patients&apos; hay fever symptoms also decreased as their levels of
            IgE fell.
          </p>
          <p className="text-xs mt-5">
            <b>Source</b> :{" "}
            <Link
              href={"https://pubmed.ncbi.nlm.nih.gov/25590322/"}
              target="_blank"
            >
              Acupuncture for the Treatment of Allergic Rhinitis: a Systematic
              Review and Meta-Analysis
            </Link>
          </p>
        </div>
      </div>
      <div className="pb-10 md:pb-20 w-full flex flex-col items-center lg:flex-row h-max px-8 md:px-16 bg-white">
        <div className="lg:w-1/2 flex flex-col justify-center text-lg pt-10">
          <p className="text-3xl text-primary">
            Using acupuncture for allergy relief can help...
          </p>
          <ul className="my-5">
            <li className="flex items-center gap-2 text-xl border-b py-3">
              <Check className="h-8 w-10" />
              Decrease inflammation associated with allergies
            </li>
            <li className="flex items-center gap-2 text-xl border-b py-3">
              <Check className="h-8 w-10" />
              Reduce heat in the body associated with allergic reactions
            </li>
            <li className="flex items-center gap-2 text-xl py-3">
              <Check className="h-8 w-10" />
              Boost the immune system
            </li>
          </ul>
          <Button
            className="mt-5 text-2xl w-[300px] py-6 hover:scale-105 mx-auto"
            asChild
          >
            <Link href="/contact">Request Appointment</Link>
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

export default Allergies;
