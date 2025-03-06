import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between mb-10 gap-8 lg:gap-0">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-3 text-gray-100">Services</h4>
              <ul>
                <li className="mb-1 text-gray-300 text-sm"><a draggable={false} href="upload">PicDB: Image Storage</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-gray-100">Insights</h4>
              <ul>
                <li className="mb-1 text-gray-300 text-sm">About Us</li>
                <li className="mb-1 text-gray-300 text-sm">Product Insights</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-gray-100">Legal</h4>
              <ul>
                <li className="mb-1 text-gray-300 text-sm">Terms of Service</li>
                <li className="mb-1 text-gray-300 text-sm">Privacy Policy</li>
                <li className="mb-1 text-gray-300 text-sm">Cookies Policy</li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 shadow-lg max-w-full lg:w-[300px]">
            <div className="flex space-x-3 mb-2">
              <div className="h-8 w-8 rounded-full overflow-hidden bg-white my-2">
                <img draggable={false}  src="assets/logo/logo.png" alt="AvianInTek profile" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-medium">AvianInTek</p>
                <p className="text-gray-300 text-xs">@avianintek</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              We are always here to provide you with the best services and products, and always here for you.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 flex items-center">
            {/* <img draggable={false}  src="assets/logo/logo.png" width={20} height={20} alt="logo" className="rounded-full overflow-hidden bg-white mr-2" /> */}
            <span className="text-sm">©️ <span className='hover:text-indigo-800'>AvianInTek</span>, India - 2024.</span>
          </div>

          <div className="flex space-x-4">
            <a draggable={false} href='https://www.linkedin.com/company/avianintek/' target='_blank' className="h-8 w-8 bg-gray-100 hover:bg-blue-300 rounded-full flex items-center justify-center">
              <img draggable={false}  src="assets/icons/linkedin.png" width={24} height={24} alt="instagram" />
            </a>
            <a draggable={false} href='https://github.com/AvianInTek' target='_blank' className="h-8 w-8 bg-gray-100 hover:bg-teal-200 rounded-full flex items-center justify-center">
              <img draggable={false}  src="assets/icons/github.png" width={24} height={24} alt="facebook" />
            </a>
            <a draggable={false} href='https://www.instagram.com/heimancreation/' target='_blank' className="h-8 w-8 bg-gray-100 hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center">
              <img draggable={false}  src="assets/icons/instagram.png" width={24} height={24} alt="twitter" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
