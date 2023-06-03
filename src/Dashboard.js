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
            Koala adalah hewan endemik Australia dengan tubuh gemuk, bulu lebat abu-abu atau cokelat, dan kebiasaan makan daun eukaliptus. Mereka tidur sepanjang hari di pohon eukaliptus dan memiliki diet yang terdiri hampir secara eksklusif dari daun eukaliptus.
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
            Tupai adalah hewan mamalia kecil dengan tubuh kecil, ekor panjang, dan bulu lebat. Beberapa jenis tupai dapat meluncur di udara dengan selaput kulit. Mereka adalah pemakan serangga, buah-buahan, biji-bijian, dan nektar.
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
            Panda adalah hewan besar dengan bulu hitam dan putih. Panda raksasa hanya ditemukan di pegunungan China dan makanannya terutama bambu. Panda kecil memiliki bulu merah cokelat dan diet yang lebih beragam, termasuk buah-buahan, tunas, serangga, dan telur burung.
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
