// Importing necessary components and icons
import Select from "react-select";
import { MdOutlineLocationOn } from "react-icons/md";
import { PiHouseLine } from "react-icons/pi";
import { FaDollarSign } from "react-icons/fa";
import { MdOutlineBed } from "react-icons/md";
import { MdOutlineShower } from "react-icons/md";
import { GiHomeGarage } from "react-icons/gi";
import { PiBuildingsFill } from "react-icons/pi";
import { PiFlowerTulipBold } from "react-icons/pi";
import { useFilters } from "../../../../Utils/contexts/FilterManagementContext";

// Common styling classes
const mainDivClass =
  "flex justify-start items-center space-x-1 space-y-2 w-full";
const iconsClass = "text-xl";
const inputFieldClass = "w-full";

// Location Input component
export const LocationInput = () => {
  const { filters, updateFilters } = useFilters();

  // Options for the Location input
  const locationOptions = [
    { value: "North Auckland", label: "North Auckland" },
    { value: "West Auckland", label: "West Auckland" },
    { value: "South Auckland", label: "South Auckland" },
    { value: "East Auckland", label: "East Auckland" },
  ];

  // Handle location change
  const handleLocationChange = (selectedOptions) => {
    const selectedValues = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : null;

    updateFilters({ location: selectedValues });
  };

  return (
    <div className={mainDivClass}>
      <label className={iconsClass}>
        <MdOutlineLocationOn />
      </label>
      <Select
        className={inputFieldClass}
        placeholder="Location"
        options={locationOptions}
        isMulti
        value={locationOptions.filter((option) =>
          (filters.location || []).includes(option.value)
        )}
        onChange={handleLocationChange}
      />
    </div>
  );
};

// Type Input component
export const TypeInput = () => {
  const { filters, updateFilters } = useFilters();

  // Options for the Type input
  const typeOptions = [
    { value: "House", label: "House" },
    { value: "Unit", label: "Unit" },
    { value: "Apartment", label: "Apartment" },
    { value: "Townhouse", label: "Townhouse" },
    // Add more options as needed
  ];

  // Handle type change
  const handleTypeChange = (selectedOptions) => {
    const selectedValues = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : null;

    updateFilters({ type: selectedValues });
  };

  return (
    <div className={mainDivClass}>
      <label className={iconsClass}>
        <PiHouseLine />
      </label>
      <Select
        className={inputFieldClass}
        placeholder="Type"
        options={typeOptions}
        isMulti
        value={typeOptions.filter((option) =>
          (filters.type || []).includes(option.value)
        )}
        onChange={handleTypeChange}
      />
    </div>
  );
};

// Price Input component
export const PriceInput = () => {
  const { filters, updateFilters } = useFilters();

  // Options for the minimum and maximum price inputs
  const minOptions = [
    { value: null, label: "Price" },
    { value: 200, label: "$200" },
    { value: 300, label: "$300" },
    { value: 400, label: "$400" },
    { value: 500, label: "$500" },
  ];

  const maxOptions = [
    { value: null, label: "Price" },
    { value: 400, label: "$300" },
    { value: 500, label: "$500" },
    { value: 600, label: "$600" },
    { value: 700, label: "$700" },
  ];

  // Handle minimum and maximum price change
  const handleMinChange = (selectedOption) => {
    updateFilters({ minPrice: selectedOption ? selectedOption.value : null });
  };
  const handleMaxChange = (selectedOption) => {
    updateFilters({ maxPrice: selectedOption ? selectedOption.value : null });
  };

  return (
    <div className={mainDivClass}>
      <label className={iconsClass}>
        <FaDollarSign />
      </label>
      <Select
        className={inputFieldClass}
        placeholder="Price"
        options={minOptions}
        value={minOptions.find((option) => option.value === filters.minPrice)}
        onChange={handleMinChange}
      />
      <span>-</span>
      <Select
        className={inputFieldClass}
        placeholder="Price"
        options={maxOptions}
        value={maxOptions.find((option) => option.value === filters.maxPrice)}
        onChange={handleMaxChange}
      />
    </div>
  );
};

// Bedroom Input component
export const BedroomInput = () => {
  const { filters, updateFilters } = useFilters();

  // Options for the minimum bedrooms input
  const minOptions = [
    { value: 1, label: "+1" },
    { value: 2, label: "+2" },
    { value: 3, label: "+3" },
    { value: 4, label: "+4" },
  ];

  // Handle bedrooms change
  const handlebedroomsChange = (selectedOption) => {
    updateFilters({ bedrooms: selectedOption ? selectedOption.value : null });
  };

  return (
    <div className={mainDivClass}>
      <label className={iconsClass}>
        <MdOutlineBed />
      </label>
      <Select
        className={inputFieldClass}
        placeholder="Bedrooms"
        options={minOptions}
        value={minOptions.find((option) => option.value === filters.minPrice)}
        onChange={handlebedroomsChange}
      />
    </div>
  );
};

// Bathroom Input component
export const BathroomInput = () => {
  const { filters, updateFilters } = useFilters();

  // Options for the minimum bathrooms input
  const minOptions = [
    { value: 1, label: "+1" },
    { value: 2, label: "+2" },
    { value: 3, label: "+3" },
    { value: 4, label: "+4" },
  ];

  // Handle bathrooms change
  const handlebathroomChange = (selectedOption) => {
    updateFilters({ bathrooms: selectedOption ? selectedOption.value : null });
  };

  return (
    <div className={mainDivClass}>
      <label className={iconsClass}>
        <MdOutlineShower />
      </label>
      <Select
        className={inputFieldClass}
        placeholder="Bathrooms"
        options={minOptions}
        value={minOptions.find((option) => option.value === filters.minPrice)}
        onChange={handlebathroomChange}
      />
    </div>
  );
};

// Parking Input component
export const ParkingInput = () => {
  const { filters, updateFilters } = useFilters();

  // Options for the minimum parking input
  const minOptions = [
    { value: 1, label: "+1" },
    { value: 2, label: "+2" },
    { value: 3, label: "+3" },
    { value: 4, label: "+4" },
  ];

  // Handle parking change
  const handlebathroomChange = (selectedOption) => {
    updateFilters({ parking: selectedOption ? selectedOption.value : null });
  };

  return (
    <div className={mainDivClass}>
      <label className={iconsClass}>
        <GiHomeGarage />
      </label>
      <Select
        className={inputFieldClass}
        placeholder="Parking"
        options={minOptions}
        value={minOptions.find((option) => option.value === filters.minPrice)}
        onChange={handlebathroomChange}
      />
    </div>
  );
};

// Amenities Input component
export const AmenititesInput = () => {
  const { filters, updateFilters } = useFilters();

  // Options for the Amenities input
  const Options = [
    { value: "Pet Friendly", label: "Pet Friendly" },
    { value: "Allows Smoking", label: "Allows Smoking" },
    { value: "Furnished", label: "Furnished" },
    { value: "MultiStory", label: "MultiStory" },
    { value: "Garage", label: "Garage" },
    { value: "Central Heating", label: "Central Heating" },
    { value: "Swimming Pool", label: "Swimming Pool" },
  ];

  // Handle Amenities change
  const handleLocationChange = (selectedOptions) => {
    const selectedValues = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : null;

    updateFilters({ amenities: selectedValues });
    console.log(filters);
  };

  return (
    <div className={mainDivClass}>
      <label className={iconsClass}>
        <PiFlowerTulipBold />
      </label>
      <Select
        className={inputFieldClass}
        placeholder="Amemities"
        options={Options}
        isMulti
        value={Options.filter((option) =>
          (filters.amenities || []).includes(option.value)
        )}
        onChange={handleLocationChange}
      />
    </div>
  );
};

// Vicinity Input component
export const VicinityInput = () => {
  const { filters, updateFilters } = useFilters();

  // Options for the Vicinity input
  const Options = [
    { value: "Public Transport", label: "Public Transport" },
    { value: "School District", label: "School District" },
    { value: "Parks", label: "Parks" },
    { value: "Gym", label: "Gym" },
    { value: "Childcare", label: "Childcare" },
    { value: "Restaurants", label: "Restaurants" },
    { value: "Shops", label: "Shops" },
  ];

  // Handle Vicinity change
  const handleLocationChange = (selectedOptions) => {
    const selectedValues = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : null;

    updateFilters({ vicinity: selectedValues });
    console.log(filters);
  };

  return (
    <div className={mainDivClass}>
      <label className={iconsClass}>
        <PiBuildingsFill />
      </label>
      <Select
        className={inputFieldClass}
        placeholder="Vicinity"
        options={Options}
        isMulti
        value={Options.filter((option) =>
          (filters.vicinity || []).includes(option.value)
        )}
        onChange={handleLocationChange}
      />
    </div>
  );
};
