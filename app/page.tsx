"use client";

import Footer from "@/components/footer";
import img3 from "@/public/hero-1.jpeg";
import img1 from "@/public/iStock-147320515.jpg";
import img2 from "@/public/image-2.jpg";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      {/* Slider Section */}
      <Carousel
        className="w-full p=0"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="w-full p-0">
          <CarouselItem>
            <Image
              src={img1}
              alt="hero"
              width={1920}
              height={1080}
              className="object-cover h-[30vh] sm:h-[50vh] md:h-[70vh] lg:h-[90vh] w-full"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={img2}
              alt="hero"
              width={1920}
              height={1080}
              className="object-cover h-[30vh] sm:h-[50vh] md:h-[70vh] lg:h-[90vh] w-full"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={img3}
              alt="hero"
              width={1920}
              height={1080}
              className="object-cover h-[30vh] sm:h-[50vh] md:h-[70vh] lg:h-[90vh] w-full"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <div className="px-4 md:px-16 my-10 md:my-20 flex flex-col items-center justify-center text-center">
        <h2 className="text-[16px] font-thin text-primary uppercase">
          What we do
        </h2>
        <p
          className="text-[35px]
            text-primary
            tracking-tighter
            font-light
            mt-5
            max-w-6xl
          "
        >
          Restore your health, vitality, and enduring equilibrium with
          comprehensive, holistic methodologies.
        </p>
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
          h-full
          w-full"
          />
        </div>
        <div
          className="
          w-full
          px-10
          md:w-1/2
          flex flex-col
          justify-center
          "
        >
          <p
            className="text-3xl
            p-0
            m-0
            font-light
            text-primary
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
      <div className="gap-4 md:mt-20 flex flex-col-reverse md:flex-row w-full pb-10">
        <div
          className="
          w-full
      
      px-10
      
      md:w-1/2
      flex flex-col
      justify-center
          "
        >
          <p
            className="text-3xl
            p-0
            m-0
            font-light
            text-primary
            max-w-6xl
          "
          >
            Our Approach to Your Healthcare
          </p>
          <h2
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
            <p className="text-[16px] text-primary uppercase mt-5 font-bold">
              Wang Medical, Inc. offers an exclusive referral program.
            </p>
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
          </h2>
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
          h-full
          w-full"
          />
        </div>
      </div>
      {/** why choose section */}
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
      <Footer showRequest={true} />
    </div>
  );
}
