import Header from "@/components/header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs - Wang Medical",
  description: "FAQs - Wang Medical",
};

const Faqs = () => {
  return (
    <div className="w-full px-4 md:px-16">
      <Header header="FAQs" />
      <div className="mt-10 mb-20 mx-1 md:mx-40 text-primary">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl text-left">
              Q. How much does a treatment cost?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              A. If you have acupuncture benefits through your insurance
              provider, we will bill them directly on your behalf. If you are
              self-pay then the charge is a flat $90.00 per visit. You will not
              be quoted one price and then given a surprise of added services at
              the end of the session.{" "}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-2xl text-left">
              Q. Some acupuncturists charge less than I do. Why am I more
              expensive?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              A. Acupuncture treatment is a medical art. The results depend on
              the experience, training and talent of the practitioner. You are
              paying for my results and ability to help heal your condition in
              the shortest amount of time possible.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-2xl text-left">
              Q. How many visits do I need?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              A. For acute sinus infection, ear infection, acute stiff neck,
              acute lower back pain, etc. and you have been experiencing pain
              for about one week, then it usually will take 1 to 3 visits to
              successfully address and heal your condition. <br /> <br /> If you
              have chronic conditions including chronic sinus infection, TMJ,
              vertigo, urinary tract infection, carpal tunnel syndrome, middle
              or lower back pain, sciatica, migraines, knee pain, neck pain,
              nasal allergies, etc. most of these chronic conditions will take
              about 6 visits. Occasionally these conditions may require more
              than 6 treatments to gain complete relief, but not more than 12
              visits. <br /> <br /> If you have asthma, Crohn&apos;s disease,
              colitis, IBS (irritable bowel syndrome), Parkinson&apos;s disease,
              psoriasis, RA (rheumatoid arthritis), MS (multiple sclerosis),
              weight loss, etc. usually a longer treatment plan is necessary. It
              may take treatment once per week for several months or more in
              order to experience long-term relief from these conditions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-2xl text-left">
              Q. What&apos;s the best you can offer me?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              A. The best thing that I can offer you, because of my specialized
              training and in-depth experience is the ability to tell you
              exactly how long it will take you to feel better and exactly what
              type of results and relief you can expect to obtain from receiving
              treatment from me. Before beginning treatments with me you will be
              able to make your decision based on a clear treatment plan. My
              consultations are always free. And, even better, if I cannot help
              you, I will not treat you.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-2xl text-left">
              Q. Is acupuncture painful?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              A. Depending on what you are being treated for, some ailments will
              not cause any pain at all. Treatments on the feet, hands and face
              are usually more painful than other areas of the body, but it is
              usually very tolerable. If you find that it is not tolerable for
              you, I will choose a different treatment application and plan for
              you to still be able to achieve the same results. <br /> <br />{" "}
              Some people are afraid of needles and feel fear about receiving
              acupuncture, but in fact, the majority of my patients are very
              relaxed during treatment and most of them fall asleep during
              acupuncture treatment. Almost all of my patients tell me that they
              sleep better during an acupuncture treatment then they do at home.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-2xl text-left">
              Q. Does acupuncture treatment only “numb” the pain for a short
              time?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              A. NO! Acupuncture treatment is a healing treatment. Most of the
              time, the results are last. That is, acupuncture can address your
              ailment so that you don&apos;t have it anymore.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-2xl text-left">
              Q. Do I need maintenance treatments after I finish my treatment
              plan?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              A. Yes, you may. Most people won&apos;t. If you no longer have
              pain, you don&apos;t need maintenance treatments. But some people
              who have chronic illnesses such as high blood pressure, seasonal
              allergies, asthma or who use acupuncture to maintain their overall
              health and well-being may receive acupuncture maintenance
              treatments to “manage” their condition. As you know, the body is
              always out of balance is one way or another, here and there you
              will have different ailments and aches and pain. Many people use
              regular acupuncture treatments to maintain overall well-being and
              use acupuncture as an alternative therapy of choice for their
              health care.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger className="text-2xl text-left">
              Q. What conditions do you treat?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              A. I treat for almost all conditions that a Western medical doctor
              treats for. I can treat for almost any condition, acute or chronic
              and if acupuncture is effective for it, I will treat for it.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger className="text-2xl text-left">
              Q. What do you commonly treat for?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              A. I most commonly treat for all types of pain conditions, both
              acute and chronic, and autoimmune disorders. Most of my patients
              visit me because they have severe pain and cannot work or sleep.
              Their ailments are seriously affecting their daily lives.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger className="text-2xl text-left">
              Q. Does your acupuncture treatment involve “spiritual” treatment?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              A. NO! Acupuncture treatment is scientific based approach to
              healing the body. It is not associated with spiritual healing.
              Some people may incorporate spirituality or ancient practices into
              acupuncture treatments, but I do not. Acupuncture is a medical art
              based on scientific understanding of how the body functions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11">
            <AccordionTrigger className="text-2xl text-left">
              Q. Do I have to have a clear diagnosis or X-rays before my
              consultation?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              A. No! I am able to provide you with a diagnosis based on my
              experience. Chinese medicine is an experience based medicine. If
              you have received a diagnosis from your doctor it is helpful for
              me, especially for internal ailments, but it isn&apos;t necessary.{" "}
              <br />
              <br />
              If I feel that you need a traditional medical check-up, I will
              refer you to the appropriate type of physician for your condition.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-12">
            <AccordionTrigger className="text-2xl text-left">
              Q. What is the main reason people choose acupuncture treatments?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              A. Most of my patients come to see me because they feel the
              results of the treatments they receive. Most of them have seen
              different doctors for help and have not been able to heal their
              condition or get the results they need to feel better. Some of
              them even consider themselves to be “hopeless cases.” Once they
              see me, they experience fast and great results. <br />
              <br />
              Some people prefer alternative medicine because they do not want
              to experience the side effects or are not able to handle the side
              effects of Western medical treatments. Some people may achieve
              desired results with Western medicine, but simply cannot handle
              the side effects of it, so they chose to see me instead.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-13">
            <AccordionTrigger className="text-2xl text-left">
              Q. How do I know acupuncture will work for me?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              A. I usually tell you exactly what results you can expect before
              you begin treatment. Most of the time, I am right. If you don not
              experience the results as I have told you, you can stop coming to
              see me or you can question me more about what is causing your
              condition and together we will develop a very clear plan for you
              to achieve the desired results.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-14">
            <AccordionTrigger className="text-2xl text-left">
              Q. What conditions do you treat that achieve better results or
              that aren&apos;t effectively treated by other doctors?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              A. Shingles, Bell&apos;s palsy, Post-herpetic neuralgia
              (post-shingles pain), spondylitis (middle back pain), neuropathy,
              vertigo, trigeminal neuralgia, cluster migraines and all types of
              autoimmune diseases such as asthma, Crohn&apos;s disease,
              psoriasis, etc. My acupuncture treatments effectively treat all of
              these conditions even when other treatments have failed.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faqs;
