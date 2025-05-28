import { Radio, RadioGroup } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface FieldSetSelectionProps {
  options: string[];
  onChange: any;
  selected: string;
  className: string;
}

const FieldSetSelection: React.FC<FieldSetSelectionProps> = ({
  options,
  onChange,
  selected,
  className,
}) => {
  console.log("render FieldSetSelection");

  return (
    <fieldset aria-label="Choose a memory option">
      <RadioGroup value={selected} onChange={onChange} className={className}>
        {options.map((option) => (
          <Radio
            key={option}
            value={option}
            className={classNames(
              option
                ? "cursor-pointer focus:outline-hidden"
                : "cursor-not-allowed opacity-25",
              "flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-gray-900 uppercase hover:bg-gray-50 data-checked:bg-blue-950 data-checked:text-white data-checked:ring-0 data-checked:hover:bg-blue-950/95  sm:flex-1"
            )}
          >
            {option}
          </Radio>
        ))}
      </RadioGroup>
    </fieldset>
  );
};

export default FieldSetSelection;
