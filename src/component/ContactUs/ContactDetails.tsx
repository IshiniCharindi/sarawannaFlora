import React from 'react';
import phone from '../../assets/icons/phone.png';
import time from '../../assets/icons/time (2).png';
import email from '../../assets/icons/email.png';
import location from '../../assets/icons/location.png';
import ContactDetailsbg from "../../assets/images/contactDetailsbg.jpg";
import '../../styles/ContactDetails.css'

const ContactDetails = () => {
  const features = [
    {
      iconBg: 'bg-white bg-opacity-20',
      icon: phone,
      title: 'Contact',
      description: '+94 75 975 4189'
    },
    {
      iconBg: 'bg-white bg-opacity-20',
      icon: time,
      title: 'Opening Hours',
      description: 'Mon - Sun : 8am - 6pm'
    },
    {
      iconBg: 'bg-white bg-opacity-20',
      icon: email,
      title: 'Email',
      description: 'saravanaflora@gmail.com'
    },
    {
      iconBg: 'bg-white bg-opacity-20',
      icon: location,
      title: 'Location',
      description: 'No 692/37/6 K J Peris Mawatha, Pattiya Junction, Kelaniya'
    }
  ];

  return (
      <div className="contactDetails mt-50">
        <section className="relative py-16 sm:py-20 lg:py-28">
          <div
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{ backgroundImage: `url(${ContactDetailsbg})` }}
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>

          <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                  <div
                      key={index}
                      className="p-6 rounded-2xl glass-effect transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1"
                  >
                    <div className={`flex items-center justify-center w-16 h-16 mx-auto ${feature.iconBg} rounded-full backdrop-blur-sm`}>
                      <img src={feature.icon} className="w-6 h-6 flex-shrink-0" alt="" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="mt-3 text-lg text-gray-200">{feature.description}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>
      </div>
  );
};

export default ContactDetails;