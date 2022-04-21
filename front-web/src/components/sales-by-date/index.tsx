import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ChartSeriesData, SalesByDate } from '../../types';
import { formatPrice } from '../../utils/formatters';
import { makeRequest } from '../../utils/request';
import { buildChartSeries, chartOptions, sumSalesByDate } from './helpers';
import './styles.css';

function SalesByDateComponent() {
  const [chartSeries, setChartSeries] = useState<ChartSeriesData[]>([]);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    makeRequest
      .get<SalesByDate[]>('/sales/by-date?minDate=2017-01-01&maxDate=2017-01-31&gender=FEMALE')
      .then((response) => {
        const newChartSeries = buildChartSeries(response.data);
        setChartSeries(newChartSeries);
        const newTotalSum = sumSalesByDate(response.data);
        setTotalSum(newTotalSum);
      });
  }, []);

  return (
    <div className="sales-by-date-container base-card">
      <div>
        <h4 className="sales-by-date-title">Sales evolution</h4>
        <span className="sales-by-date-period">01/09/2021 to 30/04/2022</span>
      </div>
      <div className="sales-by-date-data">
        <div className="sales-by-date-quantity-container">
          <h2 className="sales-by-date-quantity">{formatPrice(totalSum)}</h2>
          <span className="sales-by-date-quantity-label">Sales period</span>
          <span className="sales-by-date-quantity-description">
            The chart shows sales across all stories
          </span>
        </div>
        <div className="sales-by-date-chart">
          <ReactApexChart
            options={chartOptions}
            series={[{ name: 'Sales', data: chartSeries }]}
            type="bar"
            height={240}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default SalesByDateComponent;
