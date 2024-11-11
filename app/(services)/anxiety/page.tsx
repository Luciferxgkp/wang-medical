import Footer from "@/components/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import img1 from "@/public/anxiety-img-1.jpg";
import img2 from "@/public/anxiety-img-2.jpg";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anxiety - Wang Medical",
  description: "Anxiety - Wang Medical",
};

const Anxiety = () => {
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
            “We conclude that acupuncture was efficient to attenuate the
            psychological distress…”
          </p>
          <p>
            In a 2010 study published in the journal Neuroscience Letters,
            researchers looked at the effect of acupuncture on psychological
            distress, including depression, anxiety and stress. Researchers
            measured patient-reported anxiety levels before and after
            treatments. They also cultured blood cells from the patients to
            measure the density of T-cells, a type of white blood cell related
            to immune function and healing, before and after treatments.
            Patients&apos; anxiety scores were significantly lower after the
            acupuncture treatments, and the proliferation of T-cells increased
            after the treatments.
          </p>
          <p className="text-xs mt-5">
            <b>Source</b> :{" "}
            <Link
              href={
                "https://www.researchgate.net/publication/45649931_Acupuncture_is_effective_to_attenuate_stress_and_stimulate_lymphocyte_proliferation_in_the_elderly"
              }
              target="_blank"
            >
              Acupuncture is effective to attenuate stress and stimulate
              lymphocyte proliferation in the elderly. Oct, 2010.
            </Link>
          </p>
        </div>
      </div>
      <div className="pb-10 md:pb-20 w-full flex flex-col items-center lg:flex-row h-max px-8 md:px-16 bg-white">
        <div className="lg:w-1/2 flex flex-col justify-center text-lg pt-10">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-2xl text-left text-primary">
                Q. Is acupuncture safe?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                A. Yes, it is very safe. Acupuncturists use individually
                wrapped, single-use, sterile needles for each treatment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-2xl text-left text-primary">
                Q. Are there side effects?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                A. Acupuncture can cause minor bruising and tenderness around
                where the needles are inserted. This bruising will go away
                within a couple of days after your treatment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-2xl text-left text-primary">
                Q. Where Should I Go to Get Help?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                A. Our acupuncture clinic is located in Boise, ID. We are
                licensed acupuncturists with experience treating the root
                cause(s) of your anxiety. Schedule an appointment below.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-2xl text-left text-primary">
                Q. How many treatments will I need?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                A. How many treatments will I need? This depends on the severity
                of your anxiety and how long it has been an issue. Chronic
                afflictions tend to take longer to resolve than acute injuries.
                We will help determine the duration of time it will take for you
                to see significant changes in your health. We can work together
                to develop a treatment plan that&apos;s manageable for you.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Button
            className="mt-10 text-2xl w-[300px] py-6 hover:scale-105 mx-auto"
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

export default Anxiety;
