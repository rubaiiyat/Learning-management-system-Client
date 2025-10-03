import australia from "../../assets/countries/australia.png";
import canada from "../../assets/countries/canada.png";
import newZealand from "../../assets/countries/newzealand.jpg";
import germany from "../../assets/countries/germany.jpg";
import uk from "../../assets/countries/uk.jpg";
import usa from "../../assets/countries/usa.png";
const TopCountries = () => {
  return (
    <div className="mt-10 mb-10 grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
      <div className="lg:col-span-1">
        <h1 className="text-2xl md:text-3xl  font-bold">
          Top countries to study
        </h1>
      </div>

      <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="flex gap-2 items-center bg-base-200 p-3 shadow-xl rounded-lg">
          <img className="w-20 sm:w-24" src={australia} alt="Australia" />
          <h1 className="text-lg sm:text-xl font-bold">Australia</h1>
        </div>
        <div className="flex gap-2 items-center bg-base-200 p-3 shadow-xl rounded-lg">
          <img className="w-20 sm:w-24" src={canada} alt="Canada" />
          <h1 className="text-lg sm:text-xl font-bold">Canada</h1>
        </div>
        <div className="flex gap-2 items-center bg-base-200 p-3 shadow-xl rounded-lg">
          <img className="w-20 sm:w-24" src={newZealand} alt="New Zealand" />
          <h1 className="text-lg sm:text-xl font-bold">New Zealand</h1>
        </div>
        <div className="flex gap-2 items-center bg-base-200 p-3 shadow-xl rounded-lg">
          <img className="w-20 sm:w-24" src={germany} alt="Germany" />
          <h1 className="text-lg sm:text-xl font-bold">Germany</h1>
        </div>
        <div className="flex gap-2 items-center bg-base-200 p-3 shadow-xl rounded-lg">
          <img className="w-20 sm:w-24" src={uk} alt="United Kingdom" />
          <h1 className="text-lg sm:text-xl font-bold">United Kingdom</h1>
        </div>
        <div className="flex gap-2 items-center bg-base-200 p-3 shadow-xl rounded-lg">
          <img className="w-20 sm:w-24" src={usa} alt="United States" />
          <h1 className="text-lg sm:text-xl font-bold">United States</h1>
        </div>
      </div>
    </div>
  );
};

export default TopCountries;
