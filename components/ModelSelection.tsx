"use client";
import useSWR from "swr";
import Select from "react-select";

const fetchModels = () => fetch("/api/getEngines").then((res) => res.json());

function ModelSelection() {
  const { data: models, isLoading } = useSWR("/api/getEngines", fetchModels);
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });
  return (
    <div className="mt-5">
      <label
        htmlFor="model-select"
        className="block text-gray-300 font-medium mb-2"
      >
        Select a Model
      </label>
      <Select
        id="model-select"
        options={models?.modelOptions}
        defaultValue={model}
        placeholder={model}
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: "#434654",
            backgroundColor: "#434654",
            color: "#fff",
            "&:hover": {
              borderColor: "#9CA3AF",
            },
          }),
          singleValue: (baseStyles) => ({
            ...baseStyles,
            color: "#fff",
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: state.isSelected ? "#4B5563" : "#434654",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#4B5563",
            },
          }),
          input: (baseStyles, state) => ({
            ...baseStyles,
            color: "#fff",
          }),
          placeholder: (baseStyles, state) => ({
            ...baseStyles,
            color: "#9CA3AF",
          }),
        }}
        onChange={(e) => setModel(e.value)}
      />
    </div>
  );
}

export default ModelSelection;
