import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BsCreditCard, BsCheckCircle, BsFillPatchCheckFill } from 'react-icons/bs';
import { FaCcVisa, FaCcMastercard, FaCcDiscover, FaCcAmex } from 'react-icons/fa';
import { TbBrandMastercard } from 'react-icons/tb';

const generateMonthOptions = () => {
  const today = new Date();
  const options = [];

  for (let i = 1; i <= 90; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    const day = date.getDate();
    const monthName = date.toLocaleString('en', { month: 'short' });

    options.push({
      value: date.toISOString().substring(0, 10),
      label: `${day} - ${monthName}`,
    });
  }

  return options;
};

const generateYearOptions = () => {
  const currentYear = new Date().getFullYear();
  const years = [];

  for (let i = 0; i <= 5; i++) {
    years.push(currentYear + i);
  }

  return years;
};

const monthOptions = generateMonthOptions();
const yearOptions = generateYearOptions();

const SecondLandingPage = () => {
  const [fullName, setFullName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expMonth, setExpMonth] = useState(monthOptions[0].value);
  const [expYear, setExpYear] = useState('');
  const [cvv, setCvv] = useState('');

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get('email');

  const renderTextWithIcon = (text) => (
    <div className="flex items-center mb-2">
      <BsCheckCircle className="text-green-700 text-xl mr-2" />
      <span>{text}</span>
    </div>
  );

  const paymentIcons = [
    {
      icon: FaCcVisa,
      bgColor: 'bg-white',
      textColor: 'text-blue-600',
    },
    {
      icon: FaCcMastercard,
      bgColor: 'bg-white',
      textColor: 'text-red-600',
    },
    {
      icon: FaCcDiscover,
      bgColor: 'bg-white',
      textColor: 'text-orange-500',
    },
    {
      icon: FaCcAmex,
      bgColor: 'bg-white',
      textColor: 'text-blue-500',
    },
    {
      icon: TbBrandMastercard,
      bgColor: 'bg-white',
      textColor: 'text-gray-500'
    }
  ];

  return (
    <div className="bg-gray-200 w-full min-h-screen">
      {/* Header */}
      <div className="flex justify-end items-center py-4 px-4 bg-gray-200">
        <div className="bg-cyan-900 rounded-full p-2">
          <BsFillPatchCheckFill className="text-white text-xl" />
        </div>
      </div>

      {/* Free access introduction */}
      <div className="bg-gray-300 border-t border-b border-gray-400 py-4 px-4">
        <div className="flex justify-between items-center">
          <span className="text-black font-semibold">100% FREE MEMBERSHIP</span>
          <span className="text-green-500 font-bold">€ 0.00</span>
        </div>
        <div className="text-black mt-2">
          <span>Verify Your Account and</span>
          <span className="text-green-500 font-bold"> Get Access For Free</span>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-200 border-b border-gray-400 py-4 px-4">
        {renderTextWithIcon('Download the latest apps')}
        {renderTextWithIcon('Watch popular movies')}
        {renderTextWithIcon('Learn from eBooks and Courses')}
        {renderTextWithIcon('And more!')}
      </div>

      {/* Client information inputs */}
      <div className="bg-gray-250 py-4 px-4">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full px-2 py-1 border border-gray-300 rounded"
            value={email}
            readOnly
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            className="w-full px-2 py-1 border border-gray-300 rounded"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium mb-1">Credit Card Number</label>
            <div className="flex border border-gray-300 rounded">
              {paymentIcons.map(({ icon: Icon, bgColor, textColor }, index) => (
                <div key={index} className={`w-6 h-6 ${bgColor} ${index !== 0 ? 'border-l border-gray-300' : ''}`}>
                  <Icon className={`w-full h-full ${textColor}`} />
                </div>
              ))}
            </div>
          </div>
          <input
            type="text"
            className="w-full px-2 py-1 border border-gray-300 rounded"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>

        <div className="flex space-x-4">
          <div className="w-1/3">
            <label className="block text-sm font-medium mb-1">Exp. Month</label>
            <select
              className="w-full px-2 py-1 border border-gray-300 rounded"
              value={expMonth}
              onChange={(e) => setExpMonth(e.target.value)}
            >
              {monthOptions.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="w-1/3">
            <label className="block text-sm font-medium mb-1">Exp. Year</label>
            <select
              className="w-full px-2 py-1 border border-gray-300 rounded"
              value={expYear}
              onChange={(e) => setExpYear(e.target.value)}
            >
              {yearOptions.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="w-1/3">
            <label className="block text-sm font-medium mb-1">CVV</label>
            <div className="relative">
              <input
                type="text"
                className="w-full pl-2 pr-8 py-1 border border-gray-300 rounded"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
              <BsCreditCard className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondLandingPage
