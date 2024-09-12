import React from "react";

const Profile = () => {
  const profileData = {
    name: "Alex Johnson",
    gender: "Non-binary",
    age: 28,
    city: "San Francisco",
    state: "California",
    contactNumber: "+1 (555) 123-4567",
    email: "alex.johnson@example.com",
    picture: "https://via.placeholder.com/150" ,
    area:"Uajal" ,
  };

  return (
    <div className="bg-gradient-to-br from-teal-100 to-purple-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-md w-full">
        <div className="bg-gradient-to-r from-teal-500 to-purple-600 p-6 text-white">
          <div className="flex flex-col items-center">
            <img
              src={profileData.picture}
              alt={`${profileData.name}'s profile`}
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
            />
            <h2 className="mt-4 text-3xl font-bold">{profileData.name}</h2>
            <p className="text-lg opacity-90">{profileData.email}</p>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <InfoItem label="Gender" value={profileData.gender} />
            <InfoItem label="Age" value={profileData.age} />
            <InfoItem label="Area" value={profileData.area} />
            <InfoItem label="City" value={profileData.city} />
            <InfoItem label="State" value={profileData.state} />
            <InfoItem label="Contact Number" value={profileData.contactNumber} />
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoItem = ({ label, value }) => (
  <div className="flex justify-between items-center border-b border-gray-200 pb-2 hover:bg-gray-50 transition-colors duration-150 ease-in-out">
    <span className="text-gray-600 font-medium">{label}</span>
    <span className="text-gray-800">{value}</span>
  </div>
);

export default Profile;