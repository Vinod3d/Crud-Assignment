import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addEntry, updateEntry } from '../store/entriesSlice';

const EntryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const entries = useSelector((state) => state.entries.entries);

  useEffect(() => {
    if (id) {
      const entry = entries.find((e) => e.id === parseInt(id));
      if (entry) {
        setFormData({
          name: entry.name,
          email: entry.email,
          phone: entry.phone || '',
          address: entry.address || ''
        });
      }
    }
  }, [id, entries]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const entryData = { 
        id: id ? parseInt(id) : Date.now(),
         ...formData 
        };
    if (id) {
      dispatch(updateEntry(entryData));
    } else {
      dispatch(addEntry(entryData));
    }
    navigate('/');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow-lg p-4 rounded" style={{ maxWidth: '600px', width: '100%' }}>
        <h2 className="text-center mb-4">{id ? 'Edit Entry' : 'Add New Entry'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <textarea
              className="form-control"
              id="address"
              name="address"
              rows="3"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            {id ? 'Update Entry' : 'Add Entry'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EntryForm;
