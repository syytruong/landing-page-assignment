import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BsCreditCard, BsCheckCircle, BsFillPatchCheckFill, BsDownload } from 'react-icons/bs';
import { FaCcVisa, FaCcMastercard, FaCcDiscover, FaCcAmex } from 'react-icons/fa';
import { TbBrandMastercard } from 'react-icons/tb';
import ReactSelect from 'react-select';

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

const yearSelectOptions = yearOptions.map((year) => ({
  value: year,
  label: year,
}));

const customStyles = {
  indicatorSeparator: () => ({
    display: 'none',
  }),
};

const SecondLandingPage = () => {
  const [fullName, setFullName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expMonth, setExpMonth] = useState(monthOptions[0].value);
  const [expYear, setExpYear] = useState(yearSelectOptions[0].value);
  const [cvv, setCvv] = useState('');
  const [emailError, setEmailError] = useState('');
  const [cardNumberError, setCardNumberError] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [cvvError, setCvvError] = useState('');

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [email, setEmail] = useState(searchParams.get('email'));

  useEffect(() => {
    validateEmail(email);
  }, [email]);

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  useEffect(() => {
    validateCardNumber(cardNumber);
  }, [cardNumber]);

  const validateCardNumber = (cardNumber) => {
    const regex = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
    if (!regex.test(cardNumber)) {
      setCardNumberError('Invalid credit card number');
    } else {
      setCardNumberError('');
    }
  };

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, ''); // Remove any non-digit characters
    value = value.match(/.{1,4}/g)?.join(' ').substr(0, 19) || ''; // Group digits in sets of 4 and limit the input length to 19 (including spaces)
    setCardNumber(value);
    validateCardNumber(value);
  };

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

  const handleGetAccessClick = () => {
    let hasErrors = false;

    if (!email || emailError) {
      setEmailError('Please enter a valid email');
      hasErrors = true;
    }

    if (!fullName) {
      setFullNameError('Please enter your full name');
      hasErrors = true;
    } else {
      setFullNameError('');
    }

    if (!cardNumber || cardNumberError) {
      setCardNumberError('Please enter a valid credit card number');
      hasErrors = true;
    }

    if (!cvv) {
      setCvvError('Please enter a valid CVV');
      hasErrors = true;
    } else {
      setCvvError('');
    }

    if (!hasErrors) {
      // Handle the click event for the "Get Access" button
    }
  };

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
            className={`w-full px-2 py-1 border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded`}
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p className="text-sm text-red-500 mt-1">{emailError}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            className={`w-full px-2 py-1 border ${fullNameError ? 'border-red-500' : 'border-gray-300'} rounded`}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {fullNameError && <p className="text-sm text-red-500 mt-1">{fullNameError}</p>}
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
            className={`w-full px-2 py-1 border ${cardNumberError ? 'border-red-500' : 'border-gray-300'} rounded`}
            value={cardNumber}
            onChange={handleCardNumberChange}
          />
          {cardNumberError && <p className="text-sm text-red-500 mt-1">{cardNumberError}</p>}
        </div>

        <div className="flex flex-wrap">
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

      {/* Explanation section */}
      <div className="py-8">
        <h4 className="text-center text-sm font-semibold mb-4">
          WHY IS MY CREDIT CARD REQUIRED?
        </h4>
        <p className="px-4 text-center text-xs text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
          consequat nisi. Vestibulum accumsan, quam sit amet fermentum tempor,
          dui elit cursus lacus, nec consequat sem odio id nisi. Nullam
          vulputate, risus vitae convallis placerat, elit ligula laoreet massa,
          at tristique justo ipsum vitae nisl. Suspendisse potenti.
        </p>
      </div>
    </div>
  );
};

export default SecondLandingPage
