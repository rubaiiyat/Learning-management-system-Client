import banner2 from "../../assets/banner2.jpg";
import { GiCheckMark } from "react-icons/gi";
const AboutEduport = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 w-full py-10">
      <div className="flex-1 space-y-4 text-center lg:text-left">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          About Eduport Abroad Education
        </h1>
        <p className="text-sm md:text-base leading-relaxed">
          How promotion excellent curiosity yet attempted happiness. Gay
          prosperous impression had conviction. For every delay, death asked to
          style. Me mean able my by in they. Extremity now strangers contained.
        </p>

        <div className="flex items-start gap-4 p-4 bg-base-200 shadow">
          <div className="flex items-center justify-center bg-success rounded-lg w-12 h-12 flex-shrink-0">
            <GiCheckMark className="text-white text-2xl" />
          </div>

          <div className="flex-1">
            <h1 className="text-lg md:text-xl font-semibold ">
              Extensive tie-ups
            </h1>
            <p className="text-sm md:text-base leading-relaxed">
              Global university partnerships for wide academic choices.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-base-200 shadow">
          <div className="flex items-center justify-center bg-success rounded-lg w-12 h-12 flex-shrink-0">
            <GiCheckMark className="text-white text-2xl" />
          </div>

          <div className="flex-1">
            <h1 className="text-lg md:text-xl font-semibold ">
              Committed to your success
            </h1>
            <p className="text-sm md:text-base leading-relaxed">
              Step-by-step guidance for your study abroad journey.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-base-200 shadow">
          <div className="flex items-center justify-center bg-success rounded-lg w-12 h-12 flex-shrink-0">
            <GiCheckMark className="text-white text-2xl" />
          </div>

          <div className="flex-1">
            <h1 className="text-lg md:text-xl font-semibold">
              Affordable solutions
            </h1>
            <p className="text-sm md:text-base leading-relaxed">
              Budget-friendly plans with scholarship support.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <img
          className="w-full  h-auto object-cover rounded-lg shadow-lg"
          src={banner2}
          alt="Eduport Abroad"
        />
      </div>
    </div>
  );
};

export default AboutEduport;
