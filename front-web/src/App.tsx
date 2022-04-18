import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import PieChartCard from './components/pie-chart-card';
import SalesByDate from './components/sales-by-date';
import SalesSummary from './components/sales-summary';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesByDate />
        <div className="sales-overview-container">
          <SalesSummary />
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
      </div>
    </>
  );
}

export default App;
