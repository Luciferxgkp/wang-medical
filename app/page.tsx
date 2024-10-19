import { Button } from "@/components/ui/button";
import img1 from "@/public/hero-1.jpeg";
import img2 from "@/public/image-2.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Image src={img1} alt="hero" width={1920} height={1080} />
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
      <div className="gap-4 mt-20 flex flex-col md:flex-row w-full">
        <Image
          src={img2}
          alt="hero"
          className="object-cover 
          h-[30vh]
          sm:h-[50vh]
          md:h-[70vh]
          lg:h-[90vh]
          w-full
          md:w-7/12"
        />
        <div
          className="
          h-[30vh]
          sm:h-[50vh]
          md:h-[70vh]
          lg:h-[90vh]
          w-full
          p-4
          md:p-16
          md:w-5/12
          flex flex-col justify-center
          "
        >
          <h2 className="text-[16px] font-thin text-primary uppercase">
            Discover Wang Medical
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
            We prioritize natural holistic care
          </p>
          <p
            className="text-[14px]
            sm:text-[16px]
            md:text-[18px]
            mt-4
          "
          >
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam.natus error sit
            voluptatem accusantium doloremque laudantium.
            <br />
            <br />
            Veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas.
          </p>
          <Button className="mt-5 text-lg w-[200px]" asChild>
            <Link href="/about-us">About Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
