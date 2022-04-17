import ReactApexChart from 'react-apexcharts';
import { chartOptions } from './helpers';
import './styles.css';

const initialData = [
  {
    x: '2022/01/01',
    y: 250
  },
  {
    x: '2022/02/01',
    y: 380
  },
  {
    x: '2022/03/01',
    y: 450
  },
  {
    x: '2022/04/01',
    y: 600
  }
];

function SalesByDate() {
  return (
    <div className="sales-by-date-container base-card">
      <div>
        <h4 className="sales-by-date-title">Sales evolution</h4>
        <span className="sales-by-date-period">01/04/2022 to 30/04/2022</span>
      </div>
      <div className="sales-by-date-data">
        <div className="sales-by-date-quantity-container">
          <h2 className="sales-by-date-quantity">464.988,00</h2>
          <span className="sales-by-date-quantity-label">Sales period</span>
          <span className="sales-by-date-quantity-description">
            The chart shows sales across all stories
          </span>
        </div>
        <div className="sales-by-date-chart">
          <ReactApexChart
            options={chartOptions}
            series={[{ name: 'Sales', data: initialData }]}
            type="bar"
            height={240}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default SalesByDate;
