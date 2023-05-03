import React from 'react';
import { BsCreditCard, BsDownload } from 'react-icons/bs';
import ReactSelect from 'react-select';

const ClientInformationForm = (props) => {
  const {
    email,
    handleEmailChange,
    emailError,
    fullName,
    setFullName,
    fullNameError,
    cardNumber,
    handleCardNumberChange,
    cardNumberError,
    paymentIcons,
    expMonth,
    monthOptions,
    setExpMonth,
    expYear,
    yearSelectOptions,
    setExpYear,
    customStyles,
    cvv,
    setCvv,
    cvvError,
    handleGetAccessClick
  } = props;

  return (
    <div className="bg-gray-100 py-4">
      <div className="mb-4 px-2">
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          className={`w-full px-2 py-1 border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded`}
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <p className="text-sm text-red-500 mt-1">{emailError}</p>}
      </div>

      <div className="mb-4 px-2">
        <label className="block text-sm font-medium mb-1">Full Name</label>
        <input
          type="text"
          className={`w-full px-2 py-1 border ${fullNameError ? 'border-red-500' : 'border-gray-300'} rounded`}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        {fullNameError && <p className="text-sm text-red-500 mt-1">{fullNameError}</p>}
      </div>

      <div className="mb-4 px-2">
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
          className={`w-full px-2 py-1 border ${cardNumberError ? 'border-red-500' : 'border-gray-300'} rounded`}
          value={cardNumber}
          onChange={handleCardNumberChange}
        />
        {cardNumberError && <p className="text-sm text-red-500 mt-1">{cardNumberError}</p>}
      </div>

      <div className="flex flex-wrap px-2">
        <div className="w-1/3 min-w-0">
            <label className="block text-sm font-medium mb-1">Exp. Month</label>
            <div className="w-auto">
              <ReactSelect
                className="w-full"
                value={monthOptions.find((option) => option.value === expMonth)}
                onChange={(selectedOption) => setExpMonth(selectedOption.value)}
                options={monthOptions}
                styles={customStyles}
              />
            </div>
        </div>

        <div className="w-1/3 min-w-0">
          <label className="block text-sm font-medium mb-1">Exp. Year</label>
          <div className="w-auto">
            <ReactSelect
              className="w-full"
              value={yearSelectOptions.find((option) => option.value === expYear)}
              onChange={(selectedOption) => setExpYear(selectedOption.value)}
              options={yearSelectOptions}
              styles={customStyles}
            />
          </div>
        </div>

        <div className="w-1/3 min-w-0">
          <label className="block text-sm font-medium mb-1">CVV</label>
          <div className="relative">
            <input
              type="text"
              className={`w-full pl-2 pr-8 py-1 border ${cvvError ? 'border-red-500' : 'border-gray-300'} rounded`}
              style={{ minHeight: '38px' }} // Match the height of ReactSelect
              value={cvv}
              onChange={(e) => {
                if (/^\d{0,3}$/.test(e.target.value)) {
                  setCvv(e.target.value);
                }
              }}
              maxLength={3}
            />
            <BsCreditCard className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-400" />
          </div>
          {cvvError && <p className="text-sm text-red-500 mt-1">{cvvError}</p>}
        </div>

        <button
          className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-2 rounded mt-4 flex items-center justify-center"
          onClick={handleGetAccessClick}
        >
          <BsDownload className="mr-2" />
          GET ACCESS
        </button>

        <p className="text-xs text-center mt-2">
          By clicking on "Get Access", you agree with the{' '}
          <a href="/terms-of-service" className="text-green-500">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="/privacy-policy" className="text-green-500">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default ClientInformationForm;