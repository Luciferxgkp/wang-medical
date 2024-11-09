import Link from "next/link";
import { Button } from "../ui/button";

type Props = {
  showRequest?: boolean;
};

const Footer = ({ showRequest }: Props) => {
  return (
    <div className="relative w-full h-[400px] text-right mb-10">
      {showRequest && (
        <div className="flex flex-col items-center gap-2 my-5">
          <Button className="mt-5 text-lg w-[200px] hover:scale-105" asChild>
            <Link href="/contact">Request Appointment</Link>
          </Button>
          <div className="text-center text-lg">
            <p className="font-semibold">Wang Medical, Inc.</p>
            <p>3601 N. Cole Rd. Boise, ID 83704</p>

            <p className="font-bold">(208) 321-7348</p>
          </div>
        </div>
      )}
      <div className="overflow-hidden h-full w-full bg-none">
        <iframe
          title="Google Map of Wang Medical"
          className="w-full h-full"
          src="https://maps.google.com/maps?width=1040&amp;height=400&amp;hl=en&amp;q=Wang Medical, 3601 N Cole Rd, Boise, ID 83704, United States&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          aria-hidden="false"
          tabIndex={0}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="mx-auto text-center my-5">
        © 2024 Wang Medical. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
