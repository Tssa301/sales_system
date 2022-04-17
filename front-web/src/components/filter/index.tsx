import './styles.css';
import FlatPickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css';

function Filter() {
  const onChangeDate = (dates: Date[]) => {
    console.log(dates);
  };

  return (
    <div className="filter-container base-card">
      <FlatPickr
        className="filter-input"
        onChange={onChangeDate}
        placeholder="Enter a period"
        options={{
          mode: 'range',
          dateFormat: 'd/m/Y',
          showMonths: 2
        }}
      />
      <select className="filter-input">
        <option value="">Select a genre</option>
        <option value="MALE">Male</option>
        <option value="FEMALE">Female</option>
        <option value="OTHERS">Others</option>
      </select>
    </div>
  );
}

export default Filter;
