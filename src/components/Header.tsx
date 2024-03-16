import { Button } from "./ui/Button";

export const Header = () => {
  return (
    <div className="h-full w-full text-center flex flex-col justify-around ">
      <p className="uppercase text-6xl ml-16 mt-16 2xl:ml-20">
        Your way <br /> in skin <br /> care
      </p>

      <Button />
    </div>
  );
};
