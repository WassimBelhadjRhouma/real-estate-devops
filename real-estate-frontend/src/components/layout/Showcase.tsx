import { useState } from "react";
import data from "../../utils/delegations.json";
import FieldSetSelection from "../filters/FieldSetSelection";
import SelectBox from "../filters/SelectBox";

const propertyOptions = ["Apartrments", "Villa", "Commercial", "Lands"];

const transactionTypes = ["Buy", "Rent"];

const Showcase: React.FC = () => {
  const [prptOpt, setPrptOpt] = useState(propertyOptions[0]);
  const [transactionType, setTransactionType] = useState(transactionTypes[0]);
  const [selectedGov, setSelectedGov] = useState("Select Governorate");
  const [delegationsGroup, setDelegationsGroup] = useState([
    "Select Delegation",
  ]);
  const [selectedDlg, setSelectedDlg] = useState("Select Delegation");

  // Handle governorate change to update delegation options
  const handleGovernorateChange = (newVal: string) => {
    setSelectedGov(newVal);
    setDelegationsGroup(
      data.find((item) => item.name === newVal)?.delegations || [
        "Select Delegation",
      ]
    );
    setSelectedDlg("Select Delegation");
  };

  return (
    <div className="relative isolate py-16 overflow-hidden">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div className="absolute -z-10 bg-gray-900/60 inset-0"></div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-md sm:max-w-lg pt-7 sm:pt-48 lg:pt-20">
          <div className="text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text3xl">
              Find your Dream House
            </h1>
            <p className="mt-3 text-sm font-extralight text-gray-200">
              Discover homes you'll love, in neighborhoods you'll adore. Start
              your journey to a better living space today.
            </p>
          </div>
          {/* Property options */}
          <div className="mb-8 flex mx-auto max-w-70 sm:max-w-max justify-center items-center my-7 p-1 rounded-lg bg-white ">
            <FieldSetSelection
              options={propertyOptions}
              selected={prptOpt}
              onChange={setPrptOpt}
              className={"grid grid-cols-2 sm:grid-cols-4"}
            />
          </div>
        </div>
        {/* Second Search Part */}
        <div className="mx-auto max-w-3xl pb-15">
          <div className="p-2 bg-white rounded-lg grid grid-cols-4 gap-4">
            {/* second filter part buy or rent*/}
            <div className=" items-center  bg-white ">
              <FieldSetSelection
                options={transactionTypes}
                selected={transactionType}
                onChange={setTransactionType}
                className={`grid grid-cols-2 sm:grid-cols-2`}
              />
            </div>
            {/* End of second filter part */}
            {/* region selection */}
            <SelectBox
              data={data}
              onChange={handleGovernorateChange}
              selected={selectedGov}
            />

            {/* End of region selection */}
            {/* Delegation selection */}
            <SelectBox
              data={delegationsGroup}
              selected={selectedDlg}
              onChange={setSelectedDlg}
            />
            {/* <div className="text-center"> */}
            <a
              href="#"
              className="rounded-md bg-gray-800 px-3.5 text-center py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Search
            </a>
            {/* </div> */}
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-288.75"
        />
      </div>
    </div>
  );
};

export default Showcase;
