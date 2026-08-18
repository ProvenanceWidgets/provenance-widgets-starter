import { useState } from "react";
import {
  CheckboxGroup,
  InputText,
  MultiSelectDropdown,
  ProvenanceButton,
  RadioGroup,
  Rangeslider,
  Singleslider,
  SingleSelectDropdown,
} from "provenance-widgets";

const cities = [
  { name: "New York", code: "New York" },
  { name: "Rome", code: "Rome" },
  { name: "London", code: "London" },
  { name: "Istanbul", code: "Istanbul" },
  { name: "Paris", code: "Paris" },
];

const sliderOptions = {
  floor: 0,
  ceil: 250,
  step: 1,
  showTicks: true,
  tickStep: 25,
};

function Example({ id, title, children }) {
  const headingId = `${id}-heading`;

  return (
    <section className="example" aria-labelledby={headingId}>
      <h2 id={headingId}>{title}</h2>
      <div className="example__body">
        <div className="example__footprint">
          <ProvenanceButton target={id} />
        </div>
        <div className="example__control">{children}</div>
      </div>
    </section>
  );
}

export default function App() {
  const [sliderValue, setSliderValue] = useState(0);
  const [rangeValue, setRangeValue] = useState([0, 250]);
  const [dropdownValue, setDropdownValue] = useState(null);
  const [multiSelectValue, setMultiSelectValue] = useState(
    cities.slice(0, 2),
  );
  const [inputValue, setInputValue] = useState("provenance-demo");
  const [checkboxValue, setCheckboxValue] = useState([
    "New York",
    "Rome",
  ]);
  const [radioValue, setRadioValue] = useState("New York");

  const logProvenance = (id, provenance, meta) => {
    console.info(`[${id}] provenanceChange`, provenance, meta);
  };

  return (
    <main>
      <div className="examples">
        <Example id="starter-slider" title="Slider">
          <Singleslider
            id="starter-slider"
            dataLabel="Interaction slider"
            value={sliderValue}
            options={sliderOptions}
            visualize
            onChange={setSliderValue}
            onProvenanceChange={(provenance, meta) =>
              logProvenance("starter-slider", provenance, meta)
            }
          />
        </Example>

        <Example id="starter-range-slider" title="Range Slider">
          <Rangeslider
            id="starter-range-slider"
            dataLabel="Interaction range slider"
            value={rangeValue}
            options={sliderOptions}
            visualize
            onChange={setRangeValue}
            onProvenanceChange={(provenance, meta) =>
              logProvenance("starter-range-slider", provenance, meta)
            }
          />
        </Example>

        <Example id="starter-dropdown" title="Dropdown">
          <SingleSelectDropdown
            id="starter-dropdown"
            dataLabel="City"
            options={cities}
            optionLabel="name"
            optionValue="code"
            dataKey="code"
            placeholder="Select a city"
            selected={dropdownValue}
            visualize
            onSelectedChange={setDropdownValue}
            onProvenanceChange={(provenance, meta) =>
              logProvenance("starter-dropdown", provenance, meta)
            }
          />
        </Example>

        <Example id="starter-multiselect" title="Multiselect">
          <MultiSelectDropdown
            id="starter-multiselect"
            dataLabel="Cities"
            options={cities}
            optionLabel="name"
            optionValue="code"
            dataKey="code"
            placeholder="Select cities"
            selected={multiSelectValue}
            visualize
            onSelectedChange={setMultiSelectValue}
            onProvenanceChange={(provenance, meta) =>
              logProvenance("starter-multiselect", provenance, meta)
            }
          />
        </Example>

        <Example id="starter-inputtext" title="Input Text">
          <InputText
            id="starter-inputtext"
            dataLabel="Search text"
            value={inputValue}
            placeholder="Search"
            visualize
            onValueChange={setInputValue}
            onProvenanceChange={(provenance, meta) =>
              logProvenance("starter-inputtext", provenance, meta)
            }
          />
        </Example>

        <Example id="starter-checkbox" title="Checkbox">
          <CheckboxGroup
            id="starter-checkbox"
            name="starter-checkbox"
            dataLabel="Cities"
            data={cities}
            optionLabel="name"
            optionValue="code"
            dataKey="code"
            selected={checkboxValue}
            visualize
            onSelectedChange={setCheckboxValue}
            onProvenanceChange={(provenance, meta) =>
              logProvenance("starter-checkbox", provenance, meta)
            }
          />
        </Example>

        <Example id="starter-radiobutton" title="Radio Button">
          <RadioGroup
            id="starter-radiobutton"
            name="starter-radiobutton"
            dataLabel="City"
            data={cities}
            optionLabel="name"
            optionValue="code"
            dataKey="code"
            selected={radioValue}
            visualize
            onSelectedChange={setRadioValue}
            onProvenanceChange={(provenance, meta) =>
              logProvenance("starter-radiobutton", provenance, meta)
            }
          />
        </Example>
      </div>
    </main>
  );
}
