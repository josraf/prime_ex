import React, { useState, useMemo } from "react";
import FiltersBar from "./components/FiltersBar";
import Table from "./components/Table";
import StyleChanger from "./components/StyleChanger";
import { dummyData, retrieveData } from "./data/dummyData";

interface Filters {
  model: string;
  maker: string;
  year: string;
  transmissionType: string;
}

const App: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({
    model: "All",
    maker: "All",
    year: "All",
    transmissionType: "All",
  });

  const [collapsedRows, setCollapsedRows] = useState<string[]>([]);
  const [style, setStyle] = useState("zebra");

  const toggleCollapse = (key: string) => {
    setCollapsedRows((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const handleCollapseRow = (rowKey: string) => {
    toggleCollapse(rowKey);
  };

  const handleFilterChange = (name: string, value: string) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleStyleChange = (newStyle: string) => {
    setStyle(newStyle);
  };

  const filteredData = useMemo(() => retrieveData(filters), [filters]);

  return (
    <div className="app">
      <FiltersBar
        filters={filters}
        onFilterChange={handleFilterChange}
        allObjects={dummyData}
      />
      <StyleChanger style={style} onStyleChange={handleStyleChange} />
      <Table
        data={filteredData}
        collapsedRows={collapsedRows}
        onCollapseRow={handleCollapseRow}
        style={style}
      />
    </div>
  );
};

export default App;
