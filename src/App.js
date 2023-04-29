import { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main content */}
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mt-8">Welcome to Our Website</h1>
        <p className="text-lg mt-4">
          Discover the amazing features we offer by signing up now!
        </p>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded mt-6"
          onClick={openModal}
        >
          Get Started
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded">
              <h2 className="text-2xl mb-4">Enter Your Email</h2>
              <form>
                <input
                  type="email"
                  className="border border-gray-300 p-2 w-full mb-4"
                  placeholder="Email address"
                  required
                />
                <button
                  className="bg-blue-500 text-white px-6 py-2 rounded w-full"
                  type="submit"
                >
                  Continue
                </button>
              </form>
              <button
                className="text-gray-600 text-sm mt-4 underline"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;