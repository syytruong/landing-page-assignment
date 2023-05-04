import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { BsCheckCircle } from 'react-icons/bs';
import { FaCcVisa, FaCcMastercard, FaCcDiscover, FaCcAmex } from 'react-icons/fa';
import { TbBrandMastercard } from 'react-icons/tb';
import Header from './Header';
import ModalHeader from './ModalHeader';
import FreeAccessIntroduction from './FreeAccessIntroduction';
import ClientInformationForm from './ClientInformationForm';
import ShowCasePicture from './ShowCasePicture';
import Features from './Features';
import ExplanationSection from './ExplanationSection';

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

  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

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

  const handleGetAccessClick = async () => {
    setIsLoading(true);
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
      try {
        const isCardValid = await checkCreditCard(cardNumber);
        if (!isCardValid) {
          setCardNumberError("Credit card is invalid");
        } else {
          await createUser();
          // After successful user creation, return to the first landing page
          history.push('/');
        }
      } catch (error) {
        // TODO: log the error
        console.error("Oops, something went wrong!");
      }
    }

    // To show loading in UI
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };

  const createUser = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Dummy API call to create user
        resolve(true);
      }, 1000);
    });
  };

  const checkCreditCard = (cardNumber) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Dummy check for credit card validity
        if (cardNumber === '1234 5678 9012 3456') {
          resolve(true);
        } else {
          resolve(false);
        }
      }, 1000);
    });
  };

  return (
    <div className="bg-gray-200 w-full min-h-screen">
      {/* Mobile view */}
      <div className="lg:hidden">
        {/* Header */}
        <Header />

        {/* Free access introduction */}
        <FreeAccessIntroduction />

        {/* Features */}
        <Features renderTextWithIcon={renderTextWithIcon} />

        {/* Client information inputs */}
        <ClientInformationForm
          email={email}
          handleEmailChange={handleEmailChange}
          emailError={emailError}
          fullName={fullName}
          setFullName={setFullName}
          fullNameError={fullNameError}
          cardNumber={cardNumber}
          handleCardNumberChange={handleCardNumberChange}
          cardNumberError={cardNumberError}
          paymentIcons={paymentIcons}
          expMonth={expMonth}
          monthOptions={monthOptions}
          setExpMonth={setExpMonth}
          expYear={expYear}
          yearSelectOptions={yearSelectOptions}
          setExpYear={setExpYear}
          customStyles={customStyles}
          cvv={cvv}
          setCvv={setCvv}
          cvvError={cvvError}
          handleGetAccessClick={handleGetAccessClick}
        />

        {/* Explanation section */}
        <ExplanationSection />
      </div>

      {/* Laptop view */}
      <div className="hidden lg:flex flex-col w-full h-screen bg-white">
        {/* Header */}
        <Header />

        {/* Modals */}
        <div className="w-full flex justify-center">
          <div className="w-3/4 grid grid-cols-11 gap-8 pb-4">
            {/* Left modal */}
            <div className="col-span-6 bg-gray-250 flex flex-col rounded h-full bg-gray-100">
              {/* Modal header */}
              <ModalHeader />

              {/* Free access introduction */}
              <FreeAccessIntroduction />

              {/* Client information inputs */}
              <ClientInformationForm
                email={email}
                handleEmailChange={handleEmailChange}
                emailError={emailError}
                fullName={fullName}
                setFullName={setFullName}
                fullNameError={fullNameError}
                cardNumber={cardNumber}
                handleCardNumberChange={handleCardNumberChange}
                cardNumberError={cardNumberError}
                paymentIcons={paymentIcons}
                expMonth={expMonth}
                monthOptions={monthOptions}
                setExpMonth={setExpMonth}
                expYear={expYear}
                yearSelectOptions={yearSelectOptions}
                setExpYear={setExpYear}
                customStyles={customStyles}
                cvv={cvv}
                setCvv={setCvv}
                cvvError={cvvError}
                handleGetAccessClick={handleGetAccessClick}
                isLoading={isLoading}
              />
            </div>

            {/* Right modal */}
            <div className="col-span-5 flex flex-col rounded h-full bg-gray-100">
              {/* Picture */}
              <ShowCasePicture />

              {/* Features */}
              <Features renderTextWithIcon={renderTextWithIcon} />

              {/* Explanation section */}
              <ExplanationSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondLandingPage;