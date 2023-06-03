import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Fakta Hewan</h2>
      <div className="animal-card">
        <div className="animal">
          <img src="hewan1.jpg" alt="Koala" className="animal-image" />
          <div className="animal-details">
            <h3 className="animal-name">Koala</h3>
            <p className="animal-description">
            Koala adalah hewan khas Australia
            </p>
            <Link to="/hewan1.jpg" className="animal-link">
              Lihat Detail
            </Link>
          </div>
        </div>
        <div className="animal">
          <img src="hewan2.jpg" alt="Tupai" className="animal-image" />
          <div className="animal-details">
            <h3 className="animal-name">Tupai</h3>
            <p className="animal-description">
            Tupai merupakan hewan endemik di daerah subtopikal dan tropikal seperti Asia Tenggara
            </p>
            <Link to="/hewan2.jpg" className="animal-link">
              Lihat Detail
            </Link>
          </div>
        </div>
        <div className="animal">
          <img src="hewan3.jpg" alt="Panda" className="animal-image" />
          <div className="animal-details">
            <h3 className="animal-name">Panda</h3>
            <p className="animal-description">
            Panda adalah hewan yang berasal dari China
            </p>
            <Link to="/hewan3.jpg" className="animal-link">
              Lihat Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
