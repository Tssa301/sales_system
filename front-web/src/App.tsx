import { useState } from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import PieChartCard from './components/pie-chart-card';
import SalesByDate from './components/sales-by-date';
import SalesSummary from './components/sales-summary';
import SalesTable from './components/sales-table';
import { FilterData } from './types';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
    console.log(filter);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <SalesByDate filterData={filterData} />
        <div className="sales-overview-container">
          <SalesSummary filterData={filterData} />
          <PieChartCard
            labels={['Brazil', 'USA', 'Ireland', 'Australia']}
            name={'Stores'}
            series={[15, 40, 25, 20]}
          />
          <PieChartCard
            labels={['Credit', 'Debit', 'Cash']}
            name={'Payments'}
            series={[10, 60, 30]}
          />
        </div>
        <SalesTable />
      </div>
    </>
  );
}

export default App;
