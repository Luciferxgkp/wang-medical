import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import img2 from "@/public/arthritis-img-2.jpg";
import img1 from "@/public/backpain-img-1.jpg";
import { Check } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Back Pain - Wang Medical",
  description: "Back Pain - Wang Medical",
};

const BackPain = () => {
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
            &quot;We conclude that acupuncture is effective for the treatment of
            chronic pain, with treatment effects persisting over time.&quot;
          </p>
          <p>
            In May 2018, a team of researchers from the Acupuncture Trialists
            Collaboration published an updated study which concluded acupuncture
            relieved people&apos;s pain and improved their mobility in
            comparison to those who underwent sham acupuncture treatments. The
            researchers also showed the effects of acupuncture persisted for at
            least 12 months after the treatments ended. This study adds to the
            growing body of literature that suggests acupuncture can be a viable
            treatment for chronic pain. The findings in this study cannot speak
            to how each patient may have been affected by placebo given that
            significant changes were not observed in the group who received sham
            acupuncture treatments. Additional studies would be needed to
            conclude any results from the sham acupuncture portion of this
            study.
          </p>
          <p className="text-xs mt-5">
            <b>Source</b> :{" "}
            <Link
              href={"https://www.ncbi.nlm.nih.gov/pubmed/29198932"}
              target="_blank"
            >
              Acupuncture for Chronic Pain: Update of an Individual Patient Data
              Meta-Analysis. May, 2018.
            </Link>
          </p>
        </div>
      </div>
      <div className="pb-10 md:pb-20 w-full flex flex-col items-center lg:flex-row h-max px-8 md:px-16 bg-white">
        <div className="lg:w-1/2 flex flex-col justify-center text-lg pt-10">
          <p className="text-3xl text-primary">
            Acupuncture and Traditional Chinese Medicine work to alleviate back
            pain in all areas it occurs:
          </p>
          <ul className="my-5">
            <li className="flex items-center gap-2 text-xl border-b py-3">
              <Check className="h-8 w-10" />
              Upper Spine
            </li>
            <li className="flex items-center gap-2 text-xl border-b py-3">
              <Check className="h-8 w-10" />
              Lower Spine
            </li>
            <li className="flex items-center gap-2 text-xl py-3">
              <Check className="h-8 w-10" />
              Middle thoracic spine
            </li>
            <li className="flex items-center gap-2 text-xl py-3">
              <Check className="h-8 w-10" />
              Sciatica
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

export default BackPain;
