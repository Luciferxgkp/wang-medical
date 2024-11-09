import Footer from "@/components/footer";
import Header from "@/components/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us - Wang Medical",
  description: "About Us - Wang Medical",
};

const AboutUs = () => {
  const conditionsList = [
    [
      "Acne",
      "Alopecia Totalis",
      "Anxiety",
      "Arm, Upper Muscle Strain",
      "Arthritis, Osteoarthritis & Rheumatoid",
      "Asthma",
      "Back Conditions",
      "Back Injuries",
      "Back Pain",
      "Back, Lower Pain",
    ],
    [
      "Back Sprain",
      "Back, Upper Sprain",
      "Back, Upper Muscle Strain",
      "Back and Neck Pain",
      "Bell's Palsy & Facial Paralysis",
      "Bile Tract (Bile Duct) Stones, Common",
      "Cancer-related pain & side effects of Chemo",
      "Carpal Tunnel Syndrome",
      "Crohn’s Disease",
      "Common Cold",
    ],
    [
      "Common Conditions",
      "Common Headache & Cluster Headaches",
      "Common Illnesses",
      "Conception",
      "Cushing's Disease",
      "Dandruff",
      "Degenerative Diseases",
      "Degenerative Disc Disease",
      "Degenerative Diseases of Muscles & Bones",
      "Degenerative Joint Disease, Knee",
    ],
    [
      "Depression",
      "Dermatitis & Eczema",
      "Digestive Disorders",
      "Drug Withdrawal",
      "Elbow Conditions",
      "Elbow Bursitis",
      "Fibromyalgia",
      "Foot Conditions",
      "Foot & Ankle Injuries",
      "Food Allergies",
    ],
  ];

  return (
    <div className="w-full">
      <Header header="About Us" />
      {/** First section */}
      <div className="pt-5 pb-10 md:pt-20 md:pb-20 w-full flex flex-col items-center lg:flex-row h-max px-10 md:px-16">
        <div className="flex flex-col md:flex-row items-start md:items-center my-10 gap-5 lg:w-1/2">
          <Avatar className="w-30 h-30">
            <AvatarImage src={"/avatar-image.png"} alt="image" />
            <AvatarFallback>WM</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <p className="text-4xl font-light text-primary">Feng-Ling Wang</p>
            <p className="text-lg">CEO & Founder</p>
          </div>
        </div>

        <div className="lg:w-1/2 flex flex-col justify-center text-lg">
          <p className="mb-4">
            Feng-Ling Wang, DOM (Doctor of Oriental Medicine, China), NCCAOM,
            L.Ac. (Licensed Acupuncturist Idaho), holds a medical degree from
            China. He graduated from the prestigious Beijing University of
            Chinese Medicine and has been practicing since 1993. Feng-Ling Wang
            is a third generation practitioner, a member of the International
            Institute of Traditional Chinese and Western Medicine, and completed
            his residency at the World Health Organization affiliated Guan an
            Men Hospital in Beijing, China.
          </p>
          <p>
            He is nationally certified in the United States by the National
            Certification Commission for Acupuncture and Oriental Medicine
            (NCCAOM) as an oriental medicine doctor, acupuncturist, and
            continuing education provider. Feng-Ling Wang has been practicing in
            Idaho since 1998.
          </p>
        </div>
      </div>
      {/** Second section */}
      <div className="py-10 md:pt-[5rem] md:py-[10rem] w-full flex flex-col md:flex-row items-center justify-center gap-x-20 bg-white">
        <div className="w-full h-[500px] relative">
          <div
            className="w-[220px] h-[280px]
            sm:w-[300px] sm:h-[400px]
            md:w-[260px] md:h-[320px] 
          lg:w-[280px] lg:h-[360px]
          xl:w-[400px] xl:h-[500px]
          absolute left-5 lg:left-[100px] "
          >
            <Image
              src={"/istockphoto-1453141064-612x612.jpg"}
              alt="Acupuncture"
              width={400}
              height={500}
              objectFit="cover"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="w-[220px] h-[220px]
          
          sm:w-[300px] sm:h-[300px]
          md:w-[260px] md:h-[260px]
          lg:w-[300px] lg:h-[300px]
          xl:w-[400px] xl:h-[400px] 
          absolute 
          left-28 
          sm:left-60
          md:left-[100px]
          lg:left-[200px]
          xl:left-[300px] top-[200px]"
          >
            <Image
              src={"/360_F_213691742_bUiIM9XYfy1krArVdBR6j4UbSdKNTpEv.jpg"}
              alt="Acupuncture"
              width={400}
              height={400}
              objectFit="cover"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full text-primary flex flex-col gap-10 px-10">
          <h2 className="text-3xl tracking-tight ">
            What Does Dr. Wang Treat?
          </h2>
          <div className="tracking-tight font-light text-lg flex flex-col gap-4">
            <p>
              Pain is the most common condition for which patients seek
              treatment. Autoimmune diseases, pain syndromes caused by auto &
              work injuries, joint, and nerve pain are other common conditions
              for which patients seek acupuncture treatment. Acupuncture is
              recognized by the World Health Organization and the National
              Institutes of Health as an effective medical treatment for dozens
              of common diseases.
            </p>
            <p>
              The following is a partial list of common conditions that I have
              personally successfully treated patients for in this clinic:
            </p>
            <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
              {conditionsList.map((items, index) => (
                <ul
                  key={index}
                  className="w-full lg:w-1/4 list-disc list-inside text-sm  text-gray-700 space-y-1"
                >
                  {items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/** Third section */}
      <div className="p-10 md:px-20 md:pt-10 w-full flex flex-col items-center ">
        <div className="mb-10 md:mb-0 ">
          <p
            className="text-3xl
            text-primary
            mt-5
            mb-10
            w-full
            md:max-w-2xl
          "
          >
            Why Choose Wang Medical?
          </p>
        </div>
        <div className=" flex flex-col justify-center">
          <p className="mb-4">
            Feng-Ling Wang has been practicing for almost 20 years. Feng-Ling
            W­ang has been practicing acupuncture since 1993. He was trained in
            China at Beijing University of Chinese Medicine and completed his
            residency at the World Health Organization affiliated Guan an Men
            hospital. He is NCCAOM certified and licensed acupuncturist in
            Idaho.
          </p>
          <p className="mb-4">
            Wang Medical, Inc. won the Integrity Counts in Business Award from
            the Better Business Bureau. At Wang Medical, Inc. you are in charge
            of your care. We work with you to make sure you receive the best
            treatment you can for your unique needs.
          </p>
          <p className="mb-4">
            Feng-Ling is the author of several self-care books and videos and is
            an approved national instructor for acupuncturists.
          </p>
          <p className="mb-4">
            Wang Medical, Inc. provides comprehensive patient care in the most
            modern and comforting clinic setting available. Our clinic is
            modern, handicap accessible and clean. All of the treatment rooms
            are private. Only disposable needles are used.
          </p>
          <p className="mb-4">
            You will not be asked to fully undress for your treatment. Only the
            area being worked on will be exposed and you will be provided
            draping sheets when necessary.
          </p>
          <p className="mb-4">
            Idaho&apos;s First Modern Chinese Medical Practitioner. Wang
            Medical, Inc. has been serving the Treasure Valley since 1998.
          </p>
        </div>
      </div>
      {/** Footer */}
      <Footer showRequest={true} />
    </div>
  );
};

export default AboutUs;
