import SalesSummaryCard from './sales-summary-card';
import { ReactComponent as AvatarIcon } from '../../assets/avatar-icon.svg';
import { ReactComponent as BarChartIcon } from '../../assets/bar-chart-icon.svg';
import { ReactComponent as DoneIcon } from '../../assets/done-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/sync-icon.svg';
import './styles.css';

function SalesSummary() {
  return (
    <div className="sales-summary-container">
      <SalesSummaryCard value={534.0} label={'Average'} icon={<DoneIcon />} />
      <SalesSummaryCard value={44434} label={'Quantity'} icon={<SyncIcon />} />
      <SalesSummaryCard value={434.0} label={'Minimum'} icon={<BarChartIcon />} />
      <SalesSummaryCard value={3434.0} label={'Maximum'} icon={<AvatarIcon />} />
    </div>
  );
}

export default SalesSummary;
