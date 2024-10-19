import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[90vh]">
      <p className="text-[120px] md:text-[200px] lg:text-[300px] text-primary font-thin leading-[100px] md:leading-[200px]">
        404
      </p>
      <p className="text-[37px] md:text-[42px] lg:text-[47px] text-primary font-thin">
        Oops...
      </p>
      <p className="text-[14px] md:text-[18px] lg:text-[22px]">
        {`We're sorry, but`}
      </p>
      <p className="text-[14px] md:text-[18px] lg:text-[22px]">
        something went wrong.
      </p>
      <Button asChild variant={"outline"}>
        <Link href="/">Homepage</Link>
      </Button>
    </div>
  );
}
