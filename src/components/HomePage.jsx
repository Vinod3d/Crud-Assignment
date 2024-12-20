import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteEntry } from '../store/entriesSlice';

const HomePage = () => {
  const entries = useSelector((state) => state.entries.entries);
  const dispatch = useDispatch();

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-primary">Entries</h1>
        <Link to="/add" className="btn btn-success btn-lg">
          + Add New Entry
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered shadow-sm w-100">
          <thead className="table-dark">
            <tr>
                <th scope="col" style={{ minWidth: '150px' }}>ID</th>
                <th scope="col" style={{ minWidth: '150px' }}>Name</th>
                <th scope="col" style={{ minWidth: '150px' }}>Email</th>
                <th scope="col" style={{ minWidth: '150px' }}>Phone</th>
                <th scope="col" style={{ minWidth: '250px'}}>Address</th>
                <th scope="col" style={{ minWidth: '150px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {entries.length > 0 ? (
              entries.map((entry) => (
                <tr key={entry.id}>
                  <td>{entry.id || "N/A"}</td>
                  <td>{entry.name || "N/A"}</td>
                  <td>{entry.email || "N/A"}</td>
                  <td>{entry.phone || "N/A"}</td>
                  <td>{entry.address || "N/A"}</td>
                  <td>
                    <div className="d-flex">
                      <Link
                        to={`/edit/${entry.id}`}
                        className="btn btn-warning btn-sm me-2"
                      >
                        Update
                      </Link>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => dispatch(deleteEntry(entry.id))}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-muted py-4">
                  No data here. <Link to="/add">Add your first entry</Link>.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
