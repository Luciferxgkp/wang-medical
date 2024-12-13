import Footer from "@/components/footer";
import Header from "@/components/header";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "What we treat? - Wang Medical",
  description: "What we treat? - Wang Medical",
};

const WhatWeTreat = () => {

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
            <Header header="What We Treat?" />
            {/** First section */}
                <div className="py-10 md:pt-[5rem] md:py-[10rem] w-full flex flex-col md:flex-row items-center justify-center gap-x-20">
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
                    {/* <h2 className="text-3xl tracking-tight ">
                        What Does Dr. Wang Treat?
                    </h2> */}
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
            <Footer showRequest={true} />
        </div>
    )
}

export default WhatWeTreat;