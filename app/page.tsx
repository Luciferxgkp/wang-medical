import img3 from "@/public/hero-1.jpeg";
import img1 from "@/public/iStock-147320515.jpg";
import img2 from "@/public/image-2.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Image
        src={img1}
        alt="hero"
        width={1920}
        height={1080}
        className="object-cover h-[30vh] sm:h-[50vh] md:h-[70vh] lg:h-[90vh] w-full"
      />
      <div className="px-4 md:px-16 my-10 md:my-20 flex flex-col items-center justify-center text-center">
        <h2 className="text-[16px] font-thin text-primary uppercase">
          What we do
        </h2>
        <p
          className="text-[30px]
            sm:text-[48px]
            md:text-[60px]
            text-primary
            tracking-tighter
            font-light
            leading-[30px]
            sm:leading-[48px]
            md:leading-[60px]
            mt-5
            max-w-6xl
          "
        >
          Restore your health, vitality, and enduring equilibrium with
          comprehensive, holistic methodologies.
        </p>
        <div className="mt-10">
          <p className="text-xl text-primary">Wang Medical</p>
          <p>Creative Director</p>
        </div>
      </div>
      <div className="gap-4 mt-20 flex flex-col md:flex-row w-full pb-10 md:pb-20">
        <div
          className="
          w-full
          md:w-1/2"
        >
          <Image
            src={img2}
            alt="hero"
            className="object-cover 
          h-[30vh]
          sm:h-[50vh]
          md:h-[70vh]
          lg:h-[90vh]
          w-full"
          />
        </div>
        <div
          className="
          w-full
      p-4
      px-10
      
      md:w-1/2
      flex flex-col
      justify-center
          "
        >
          <p
            className="text-[30px]
            sm:text-[48px]
            md:text-[60px]
            text-primary
            tracking-tighter
            font-light
            leading-[30px]
            sm:leading-[48px]
            md:leading-[60px]
            mt-5
            max-w-6xl
          "
          >
            What to Expect During a Treatment
          </p>
          <p
            className="text-[14px]
            sm:text-[16px]
            mt-4
          "
          >
            During your first visit, you will discuss in depth your health
            concerns with Feng-Ling Wang. He will sit down and talk to you and
            together you will determine if acupuncture or Chinese Medicine is
            appropriate for you. If you decide to proceed, you will receive your
            first treatment at the same time. You will not need to reschedule to
            begin experiencing relief. Consultations are always free and you
            will never be pressured for any reason.
            <br />
            <br />
            You will receive your treatment in a clean, modern and comfortable
            treatment room. Only disposable needles and medical supplies will be
            used. You will not need to fully undress. Only the area being worked
            on will be exposed and you will be provided with draping when
            necessary.
            <br />
            <br />
            Your treatment room will be warm, quiet and relaxing. During the
            course of treatment Feng-Ling may use acupuncture, seven-star
            acupuncture (tiny needles that are used on the surface of the skin,
            but do not penetrate the skin), heat therapy, cupping therapy (a
            technique that uses suction cups on the body to relieve pain), moxa
            therapy (an herbal, heat producing treatment), acupressure or
            Chinese medical massage. Each treatment session lasts about one
            hour. You may bring a family member or friend with you during your
            treatment.
          </p>
        </div>
        {/* <Button className="mt-5 text-lg w-[200px]" asChild>
            <Link href="/about-us">About Us</Link>
          </Button> */}
      </div>
      <div className="gap-4 md:mt-20 flex flex-col-reverse md:flex-row w-full ">
        <div
          className="
          w-full
      p-4
      px-10
      
      md:w-1/2
      flex flex-col
      justify-center
          "
        >
          <p
            className="text-[30px]
            sm:text-[48px]
            md:text-[60px]
            text-primary
            tracking-tighter
            font-light
            leading-[30px]
            sm:leading-[48px]
            md:leading-[60px]
            mt-5
            max-w-6xl
          "
          >
            Our Approach to Your Healthcare
          </p>
          <p
            className="text-[14px]
            sm:text-[16px]
            mt-4
          "
          >
            Feng-Ling believes in preventative health care and focuses his
            treatment plan on educating his patients on how to prevent and
            reverse their illnesses. As a patient, you will be given guidance
            from him on how to improve your overall health and prevent illness
            recurrence without using medications.
            <br />
            <br />
            Wang Medical, Inc. has a complete Chinese herbal pharmacy. Our
            philosophy is that herbs and supplements should be viewed as medical
            treatments and used only when needed, not for health maintenance.
            Therefore, you will not be pressured to take home a variety of
            supplements or herbs during your visit.
            <h2 className="text-[16px] text-primary uppercase mt-5 font-bold">
              Wang Medical, Inc. offers an exclusive referral program.
            </h2>
            If you are an existing patient at Wang Medical, Inc. you will
            receive a $20.00 certificate to use towards any service we offer for
            each new patient you refer to us. There is no limit as to how many
            referral credits you may receive. Credits do not expire.
            <br />
            <br />
            If you are a new patient to Wang Medical, Inc. and have been
            referred to us by an existing patient, you will receive $20.00 off
            your first treatment. You must provide the existing patient&apos;s
            name to us for verification at check-out. We greatly appreciate your
            confidence in us by recommending us to your family and friends.
            Thank you.
          </p>
        </div>
        <div
          className="
          w-full
          md:w-1/2"
        >
          <Image
            src={img3}
            alt="hero"
            className="object-cover 
          h-[30vh]
          sm:h-[50vh]
          md:h-[70vh]
          lg:h-[90vh]
          w-full"
          />
        </div>
      </div>
    </div>
  );
}
