import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import img1 from "@/public/headaches-img-1.jpg";
import img2 from "@/public/headaches-img-2.jpg";
import { Check } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Headaches - Wang Medical",
  description: "Headaches - Wang Medical",
};

const Headaches = () => {
  return (
    <div className="w-full">
      <div className="pb-10 md:pb-20 w-full flex flex-col items-center lg:flex-row h-max px-8 md:px-16">
        <div className="flex flex-col md:flex-row items-start md:items-center my-10 gap-5 lg:w-1/2 ">
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
            &quot;Among patients with migraine without aura, true acupuncture
            may be associated with long-term reduction in migraine recurrence
            compared with sham acupuncture or assigned to a waiting list.”&quot;
          </p>
          <p>
            In 2017, a study that tested the efficacy of regular acupuncture
            treatments as a preventative measure for reducing migraine headaches
            was published by the journal JAMA Internal Medicine. A group of over
            249 participants were split into three groups focusing on treatments
            given once a day for four weeks, “sham acupuncture” and the third
            being a waiting list.
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
            Acupuncture can mediate headaches by:
          </p>
          <ul className="my-5">
            <li className="flex items-center gap-2 text-xl border-b py-3">
              <Check className="h-8 w-8 flex-shrink-0" />
              Reducing inflammation, which can cause headaches
            </li>
            <li className="flex items-center gap-2 text-xl border-b py-3">
              <Check className="h-8 w-8 flex-shrink-0" />
              Balancing serotonin production – high serotonin levels have been
              connected to headaches
            </li>
            <li className="flex items-center gap-2 text-xl py-3">
              <Check className="h-8 w-8 flex-shrink-0" />
              Increasing blood circulation – headaches are linked to poor
              circulation
            </li>
            <li className="flex items-center gap-2 text-xl py-3">
              <Check className="h-8 w-8 flex-shrink-0" />
              Decreasing symptoms associated with headaches and migraines,
              including dizziness, nausea, and vomiting.
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

export default Headaches;
