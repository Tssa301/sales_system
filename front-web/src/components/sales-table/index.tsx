import './styles.css';

function SalesTable() {
  return (
    <div className="sales-table-container base-card">
      <h3 className="sales-table-title">Sales recently</h3>
      <table className="sales-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Genre</th>
            <th>Category</th>
            <th>Store</th>
            <th>Payment method</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#341</td>
            <td>01/04/2022</td>
            <td>Male</td>
            <td>Cloths and accessories</td>
            <td>USA</td>
            <td>Credit</td>
            <td>$ 45,000.00</td>
          </tr>
          <tr>
            <td>#341</td>
            <td>01/04/2022</td>
            <td>Male</td>
            <td>Cloths and accessories</td>
            <td>USA</td>
            <td>Credit</td>
            <td>$ 45,000.00</td>
          </tr>
          <tr>
            <td>#341</td>
            <td>01/04/2022</td>
            <td>Male</td>
            <td>Cloths and accessories</td>
            <td>USA</td>
            <td>Credit</td>
            <td>$ 45,000.00</td>
          </tr>
          <tr>
            <td>#341</td>
            <td>01/04/2022</td>
            <td>Male</td>
            <td>Cloths and accessories</td>
            <td>USA</td>
            <td>Credit</td>
            <td>$ 45,000.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SalesTable;
