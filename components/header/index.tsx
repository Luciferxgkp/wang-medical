import { ChevronDown } from "lucide-react";

type Props = {
  header: string;
  description?: string;
};

const Header = ({ header, description }: Props) => {
  return (
    <div className="mt-5 md:mt-20">
      <h2 className="text-primary text-3xl lg:text-6xl tracking-tight text-center font-light">
        {header}
      </h2>
      {description && (
        <p className="text-primary text-lg lg:text-2xl text-center mt-5 font-light">
          {description}
        </p>
      )}
      <ChevronDown
        className="mx-auto md:mt-5 text-primary w-5 h-5 md:w-6 md:h-6"
        size={25}
      />
    </div>
  );
};

export default Header;
