import React, { useMemo } from "react";

interface KeyType {
  model: string;
  maker: string;
  year: string;
  transmissionType: string;
}

interface AllObject {
  key: KeyType;
}

interface FiltersBarProps {
  filters: { [key: string]: string };
  onFilterChange: (name: string, value: string) => void;
  allObjects: AllObject[];
}

const FiltersBar: React.FC<FiltersBarProps> = ({
  filters,
  onFilterChange,
  allObjects,
}) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  const availableFilters = useMemo(() => {
    const modelFilters = { name: "model", options: new Set<string>() };
    const makerFilters = { name: "maker", options: new Set<string>() };
    const yearFilters = { name: "year", options: new Set<string>() };
    const transmissionFilters = {
      name: "transmissionType",
      options: new Set<string>(),
    };

    allObjects.forEach((object) => {
      const { model, maker, year, transmissionType } = object.key;

      modelFilters.options.add(model);
      makerFilters.options.add(maker);
      yearFilters.options.add(year);
      transmissionFilters.options.add(transmissionType);
    });

    return [
      { ...modelFilters, options: Array.from(modelFilters.options) },
      { ...makerFilters, options: Array.from(makerFilters.options) },
      { ...yearFilters, options: Array.from(yearFilters.options) },
      {
        ...transmissionFilters,
        options: Array.from(transmissionFilters.options),
      },
    ];
  }, [allObjects]);

  return (
    <div className="filter-area">
      {availableFilters.map((filter) => (
        <div key={filter.name} className="filter">
          <label>{filter.name}</label>
          <select
            name={filter.name}
            value={filters[filter.name] || ""}
            onChange={handleSelectChange}
          >
            <option value="All">All</option>
            {filter.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default FiltersBar;
