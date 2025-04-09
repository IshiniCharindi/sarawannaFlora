import React from 'react';
import phone from '../../assets/icons/phone.png'
import time from '../../assets/icons/time (2).png'
import email from '../../assets/icons/email.png'
import location from '../../assets/icons/location.png'

const ContactDetails = () => {
  // Your data array - easily modifiable
  const features = [
    {
      iconBg: 'bg-white',
      icon: phone,
      title: 'Contact',
      description: '+94 75 975 4189'
    },
    {
      iconBg: 'bg-white',
      icon: time,
      title: 'Opening Hours',
      description: 'Mon - Sun : 8am - 6pm'
    },
    {
      iconBg: 'bg-white',
      icon: email,
      title: 'Email',
      description: 'saravanaflora@gmail.com'
    },
    {
      iconBg: 'bg-white',
      icon: location,
      title: 'Location',
      description: 'No 692/37/6 K J Peris Mawatha, Pattiya Junction, Kelaniya'
    }
  ];

  return (
    <div className="contactDetails bg-[var(--color-light)]">
      <section className="py-10 mt-28 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12">
            {features.map((feature, index) => (
              <div key={index}>
                <div className={`flex items-center justify-center w-20 h-20 mx-auto ${feature.iconBg} rounded-full`}>
                    <img src={feature.icon} className="w-8 h-8 flex-shrink-0" alt="" />
                </div>
                <h3 className="mt-8 text-xl font-semibold text-black">{feature.title}</h3>
                <p className="mt-4 text-lg text-gray-800">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactDetails;