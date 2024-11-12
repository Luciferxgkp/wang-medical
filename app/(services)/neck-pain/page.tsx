import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import img1 from "@/public/neckpain-img-1.jpg";
import img2 from "@/public/neckpain-img-2.jpg";
import { Check } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Neck Pain - Wang Medical",
  description: "Neck Pain - Wang Medical",
};

const NeckPain = () => {
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
            “These findings suggest that abdominal acupuncture is an effective
            alternative treatment for neck pain.”
          </p>
          <p>
            A 2017 study published in the journal PLOS ONE, a leading scientific
            journal in the United States, showed acupuncture treatments caused
            significant and lasting improvements in chronic neck pain for a
            group of 154 study participants. The participants were randomly
            assigned to either receive true acupuncture or fake acupuncture.
            Those participants who received true acupuncture showed significant
            improvements in their neck pain and other quality-of-life
            measurements without negative side effects. The improvements were
            even more marked between the two groups about 3 months after the
            treatments, showing the effects of true acupuncture are
            long-lasting.
          </p>
          <p className="text-xs mt-5">
            <b>Source</b> :{" "}
            <Link
              href={
                "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0181360"
              }
              target="_blank"
            >
              Efficacy of abdominal acupuncture for neck pain: A randomized
              controlled trial
            </Link>
          </p>
        </div>
      </div>
      <div className="pb-10 md:pb-20 w-full flex flex-col items-center lg:flex-row h-max px-8 md:px-16 bg-white">
        <div className="lg:w-1/2 flex flex-col justify-center text-lg pt-10">
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

          <Button
            className="mt-5 text-2xl w-[300px] py-6 hover:scale-105 mx-auto"
            asChild
          >
            <Link href="/contact">Request an Appointment</Link>
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

export default NeckPain;
