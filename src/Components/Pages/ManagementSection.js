import React from 'react';
import ManagementCard from '../structure/managementCard';
import managementData from '../structure/managmentData'; // Import the data file

const ManagementSection = () => {
  return (
    <section className="about-management">
      <h2 className="service-head">Senior Management</h2>
      <div className="line"></div>
      <div className="management-box">
        {managementData.map((manager, index) => (
          <ManagementCard
            key={index}
            imageSrc={manager.imageSrc}
            name={manager.name}
            role={manager.role}
          />
        ))}
      </div>
    </section>
  );
};

export default ManagementSection;
