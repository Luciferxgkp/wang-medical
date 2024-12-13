import Footer from "@/components/footer";
import Header from "@/components/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Wang Medical",
  description: "About Us - Wang Medical",
};

const AboutUs = () => {

  return (
    <div className="w-full">
      <Header header="About Us" />
      {/** First section */}
      <div className="pt-5 pb-10  md:pb-20 w-full flex flex-col items-center h-max px-10 md:px-16">
        <div className="flex flex-col items-center my-10 gap-5 lg:w-1/2">
          <Avatar className="w-30 h-30">
            <AvatarImage src={"/avatar-image.png"} alt="image" />
            <AvatarFallback>WM</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <p className="text-2xl font-light text-primary">Feng-Ling Wang, L.Ac.</p>
            {/* <p className="text-lg">CEO & Founder</p> */}
          </div>
        </div>

        <div className="flex flex-col justify-center text-lg">
          <p className="mb-4">
          Feng-Ling Wang, L.Ac. (licensed acupuncturist), holds a medical degree from China. He graduated from the prestigious Beijing University of Chinese Medicine and has been practicing since 1993. Feng-Ling Wang is a third generation practitioner, a member of the International Institute of Traditional Chinese and Western Medicine, and completed his residency at the World Health Organization affiliated Guan an Men Hospital in Beijing, China.
          </p>
          <p className="mb-4">
          He is nationally certified in the United States by the National Certification Commission for Acupuncture and Oriental Medicine (NCCAOM) as an oriental medicine doctor, acupuncturist, and continuing education provider. Feng-Ling Wang has been practicing in Idaho since 1998.
          </p>
          <p className="mb-4">
          Feng-Ling specializes in pain relief, chronic conditions, difficult and hopeless cases when other therapeutic interventions have failed. Dr. Wang’s best results are for migraines & headaches, back, neck, & shoulder pain, arthritis, tendonitis, TMJ, carpal tunnel, tinnitus, shingles, psoriasis, insomnia, allergies, asthma, macular degeneration, menopausal syndrome, digestive disorders, skin conditions, and autoimmune diseases.
          </p>
          <p className="mb-4">
          Pengli Yang, L.Ac. holds a medical degree from China and has been practicing since 1982. Pengli specializes in acupuncture, neurological disorders, depression, gynecological disorders, fatigue, stress, Chinese herbal medicine, and preventive care.
          </p>
          <p>
          Mia Wang, LMT, is a licensed and nationally certified massage therapist. Mia was formally trained in medical, sports, lymphatic, reflexology, relaxation, assisted stretching, and Chinese massage. She specializes in pain reduction and management, tension relief, mobility and improved quality of life through individualized therapeutic muscle work. Mia practices sports massage, relaxation massage, reflexology, lymphatic drainage, hot stone therapy, and therapeutic massage. Each treatment is thoughtfully tailored to your unique needs, combining skilled techniques with a deep commitment to your comfort and care.

          Mia is a full-time student at Boise State studying biology. She is concurrently studying under her dad, Feng-Ling Wang, in acupuncture and traditional Chinese medicine. Her massage studio is located in his clinic at Wang Medical, Inc.
          </p>
        </div>
      </div>
      {/** Footer */}
      <Footer showRequest={true} />
    </div>
  );
};

export default AboutUs;
