import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import img1 from "@/public/insomnia-img-1.jpg";
import img2 from "@/public/insomnia-img-2.jpg";
import { Check } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insomnia - Wang Medical",
  description: "Insomnia - Wang Medical",
};

const Insomnia = () => {
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
        <div className="lg:w-1/2 flex flex-col justify-center text-lg md:pt-20">
          <p className="mb-4 italic text-xl text-primary text-center">
            Research published in 2004 in the Journal of Neuropsychiatry and
            Clinical Neuroscience looked at the effect of acupuncture on
            patients with insomnia related to anxiety.
          </p>
          <p>
            The study showed acupuncture can increase your body&apos;s overnight
            secretion of melatonin, a hormone strongly tied to your circadian
            rhythm or internal clock. The research also showed the acupuncture
            helped people fall asleep faster, reach deeper sleep and sleep
            longer. Each of the patients presented with anxiety tied to their
            insomnia, and the acupuncture also proved to reduce their anxiety.
            <br />
            <br />
            The first group showed a significant reduction in the number of
            migraines they experienced compared with members of the other two
            groups. Researchers also conducted follow-up interviews with all
            participants six months after the treatments and found the frequency
            of migraines, the number of days people had a migraine and the
            intensity of the pain of those migraines were significantly lower
            for the group that had true acupuncture treatments.
          </p>
          <p className="text-xs mt-5">
            <b>Source</b> :{" "}
            <Link
              href={"https://www.ncbi.nlm.nih.gov/pubmed/14990755"}
              target="_blank"
            >
              Acupuncture increases nocturnal melatonin secretion and reduces
              insomnia and anxiety: a preliminary report.
            </Link>
          </p>
        </div>
      </div>
      <div className="pb-10 md:pb-20 w-full flex flex-col items-center lg:flex-row h-max px-8 md:px-16 bg-white">
        <div className="lg:w-1/2 flex flex-col justify-center text-lg pt-10">
          <p className="text-3xl text-primary">Acupuncture for insomnia:</p>
          <ul className="my-5">
            <li className="flex items-center gap-2 text-xl border-b py-3">
              <Check className="h-8 w-8 flex-shrink-0" />
              Addresses root causes including stress, anxiety, chronic pain and
              depression
            </li>
            <li className="flex items-center gap-2 text-xl border-b py-3">
              <Check className="h-8 w-8 flex-shrink-0" />
              Can improve sleep patterns by increasing overnight melatonin
              production, according to the Journal of Neuropsychiatry and
              Clinical Neuroscience
            </li>
            <li className="flex items-center gap-2 text-xl py-3">
              <Check className="h-8 w-8 flex-shrink-0" />
              Is totally safe. Acupuncture is a natural treatment modality and
              doesn&apos;t cause any negative side effects.
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

export default Insomnia;
