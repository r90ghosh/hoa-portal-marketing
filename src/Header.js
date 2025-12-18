import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ChartBarIcon,
    HomeModernIcon,
    ClipboardDocumentIcon,
    CurrencyDollarIcon,
    WrenchScrewdriverIcon,
    ChatBubbleLeftRightIcon,
    ExclamationTriangleIcon,
    InformationCircleIcon,
    UsersIcon,
    NewspaperIcon,
    BuildingLibraryIcon,
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // URLs for HOA Portal App - update these to your actual app URL
  const loginUrl = "https://hoa-portal-app.netlify.app/login";
  const getStartedUrl = "https://hoa-portal-app.netlify.app/get-started";

  return (
    <>
    <header className="sticky top-0 animated-gradient text-white p-4 flex justify-between items-center shadow-md z-10">
        <h1 className="text-xl font-bold">HOA Portal</h1>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>

        {/* NAVIGATION BAR */}
        <nav className="relative space-x-6 text-lg font-semibold hidden md:flex">
            <Link to="/" className="hover:underline">Home</Link>

          {/* Features MegaMenu */}
          <div className="relative group">
            <button className="hover:underline">Features</button>

            <div className="absolute left-1/2 top-full transform -translate-x-1/2 mt-4 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out z-50">
              <div className="bg-white text-black shadow-2xl rounded-xl p-6 min-w-[900px] max-w-7xl w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">

                  {/* Column 1 */}
                  <div>
                    <div className="flex items-center gap-2 mb-2 font-bold text-gray-800">
                      <ChartBarIcon className="h-5 w-5 text-blue-600" />
                      Dashboard
                    </div>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>
                        <a href="#overview" className="block hover:text-indigo-700 transition">Overview</a>
                      </li>
                      <li>
                        <a href="#overview" className="block hover:text-indigo-700 transition">Key Metrics</a>
                      </li>
                      <li>
                        <a href="#overview" className="block hover:text-indigo-700 transition">Community Calendar</a>
                      </li>
                    </ul>
                  </div>

                  {/* Column 2 */}
                  <div>
                    <div className="flex items-center gap-2 mb-2 font-bold text-gray-800">
                      <HomeModernIcon className="h-5 w-5 text-green-600" />
                      Property & Asset Mgmt
                    </div>
                    <ul className="space-y-1 text-sm text-gray-600">
                    <li>
                        <a href="#overview" className="block hover:text-indigo-700 transition">Residencies</a>
                      </li>
                      <li>
                        <a href="#overview" className="block hover:text-indigo-700 transition">Residents</a>
                      </li>
                      <li>
                        <a href="#overview" className="block hover:text-indigo-700 transition">Amenities & Reservations</a>
                      </li>
                      <li>
                        <a href="#overview" className="block hover:text-indigo-700 transition">Vendors</a>
                      </li>
                      <li>
                        <a href="#overview" className="block hover:text-indigo-700 transition">HOA Meetings</a>
                      </li>
                    </ul>
                  </div>

                  {/* Column 3 */}
                  <div>
                    <div className="flex items-center gap-2 mb-2 font-bold text-gray-800">
                      <ClipboardDocumentIcon className="h-5 w-5 text-purple-600" />
                      Document Vault
                    </div>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>
                        <a href="#overview" className="block hover:text-indigo-700 transition">CC&Rs</a>
                      </li>
                      <li>
                        <a href="#overview" className="block hover:text-indigo-700 transition">By-Laws</a>
                      </li>
                      <li>
                        <a href="#overview" className="block hover:text-indigo-700 transition">Meeting Minutes</a>
                      </li>
                      <li>
                        <a href="#overview" className="block hover:text-indigo-700 transition">Policies</a>
                      </li>
                      <li>
                        <a href="#overview" className="block hover:text-indigo-700 transition">Notices</a>
                      </li>
                      <li>
                        <a href="#overview" className="block hover:text-indigo-700 transition">Secure Sharing</a>
                      </li>
                    </ul>
                  </div>

                  {/* Column 4 */}
                  <div>
                    <div className="flex items-center gap-2 mb-2 font-bold text-gray-800">
                      <CurrencyDollarIcon className="h-5 w-5 text-yellow-600" />
                      Financials
                    </div>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>
                        <a href="#overview" className="block hover:text-indigo-700 transition">Automated Payments</a>
                      </li>
                      <li>
                        <a href="#overview" className="block hover:text-indigo-700 transition">Invoicing</a>
                      </li>
                      <li>
                        <a href="#overview" className="block hover:text-indigo-700 transition">Statements</a>
                      </li>
                      <li>
                        <a href="#overview" className="block hover:text-indigo-700 transition">Accounting</a>
                      </li>
                      <li>
                        <a href="#overview" className="block hover:text-indigo-700 transition">Budgets</a>
                      </li>
                      <li>
                        <a href="#overview" className="block hover:text-indigo-700 transition">Book-keeping</a>
                      </li>
                      <li>
                        <a href="#overview" className="block hover:text-indigo-700 transition">Delinquency</a>
                      </li>
                      <li>
                        <a href="#overview" className="block hover:text-indigo-700 transition">Penalties</a>
                      </li>
                    </ul>
                  </div>

                  {/* Column 5 */}
                  <div>
                    <div className="flex items-center gap-2 mb-2 font-bold text-gray-800">
                      <WrenchScrewdriverIcon className="h-5 w-5 text-red-600" />
                      Maintenance
                    </div>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>
                        <a href="#overview" className="block hover:text-indigo-700 transition">Vendor Management</a>
                      </li>
                      <li>
                        <a href="#overview" className="block hover:text-indigo-700 transition">Service Requests</a>
                      </li>
                      <li>
                        <a href="#overview" className="block hover:text-indigo-700 transition">Architectural Change Requests</a>
                      </li>
                      <li>
                        <a href="#overview" className="block hover:text-indigo-700 transition">Scheduling</a>
                      </li>
                      <li>
                        <a href="#overview" className="block hover:text-indigo-700 transition">Status Tracking</a>
                      </li>
                    </ul>
                  </div>

                  {/* Column 6 */}
                  <div>
                    <div className="flex items-center gap-2 mb-2 font-bold text-gray-800">
                      <ChatBubbleLeftRightIcon className="h-5 w-5 text-indigo-600" />
                      Communications
                    </div>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>
                        <a href="#overview" className="block hover:text-indigo-700 transition">Custom Chat Groups</a>
                      </li>
                      <li>
                        <a href="#overview" className="block hover:text-indigo-700 transition">Mass Announcements (Emails, Chats, Phone-Messages)</a>
                      </li>
                      <li>
                        <a href="#overview" className="block hover:text-indigo-700 transition">Community Surveys & Polls</a>
                      </li>
                      <li>
                        <a href="#overview" className="block hover:text-indigo-700 transition">Status Tracking</a>
                      </li>
                    </ul>
                  </div>

                  {/* Column 7 */}
                  <div>
                    <div className="flex items-center gap-2 mb-2 font-bold text-gray-800">
                      <ExclamationTriangleIcon className="h-5 w-5 text-orange-600" />
                      Violations
                    </div>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>
                        <a href="#overview" className="block hover:text-indigo-700 transition">Custom Templates</a>
                      </li>
                      <li>
                        <a href="#overview" className="block hover:text-indigo-700 transition">Violation Jobs</a>
                      </li>
                      <li>
                        <a href="#overview" className="block hover:text-indigo-700 transition">Status Tracking</a>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <Link to="/pricing" className="hover:underline">Pricing</Link>
          {/* Resources Dropdown */}
          <div className="relative group">
            <button className="hover:underline">Resources</button>
            <div className="absolute left-0 top-full mt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 ease-in-out flex flex-col bg-white text-black shadow-lg rounded-lg p-4 w-[320px] space-y-2 z-20">
              <Link to="/demo" className="flex items-start space-x-3 hover:bg-gray-100 p-3 rounded transition duration-200">
                <InformationCircleIcon className="h-6 w-6 text-indigo-500" />
                <div>
                  <p className="font-medium">Demo</p>
                  <p className="text-sm text-gray-500">View a working sample of HOA Portal.</p>
                </div>
              </Link>
              <Link to="/why-hoa-portal" className="flex items-start space-x-3 hover:bg-gray-100 p-3 rounded transition duration-200">
                <InformationCircleIcon className="h-6 w-6 text-blue-500" />
                <div>
                    <p className="font-medium">Why HOA Portal?</p>
                    <p className="text-sm text-gray-500">Learn how we’re transforming communities.</p>
                </div>
                </Link>
                <Link to="/about" className="flex items-start space-x-3 hover:bg-gray-100 p-3 rounded transition duration-200">
                <UsersIcon className="h-6 w-6 text-green-500" />
                <div>
                    <p className="font-medium">About Us</p>
                    <p className="text-sm text-gray-500">Meet the team behind the platform.</p>
                </div>
                </Link>
              <Link to="/blogs" className="flex items-start space-x-3 hover:bg-gray-100 p-3 rounded transition duration-200">
                <NewspaperIcon className="h-6 w-6 text-purple-500" />
                <div>
                  <p className="font-medium">Blog Posts</p>
                  <p className="text-sm text-gray-500">Tips, stories & updates from our blog.</p>
                </div>
              </Link>
              <Link to="/community-portal" className="flex items-start space-x-3 hover:bg-gray-100 p-3 rounded transition duration-200">
                <BuildingLibraryIcon className="h-6 w-6 text-yellow-500" />
                <div>
                    <p className="font-medium">Community Portal</p>
                    <p className="text-sm text-gray-500">Explore tools made for your neighborhood.</p>
                </div>
                </Link>
                <Link to="/privacy" className="flex items-start space-x-3 hover:bg-gray-100 p-3 rounded transition duration-200">
                <BuildingLibraryIcon className="h-6 w-6 text-yellow-500" />
                    <div>
                        <p className="font-medium">Privacy</p>
                        <p className="text-sm text-gray-500">Data Privacy at heart.</p>
                    </div>
                </Link>
            </div>
          </div>
          {/* Support Dropdown */}
          <div className="relative group">
            <button className="hover:underline">Support</button>
            <div className="absolute left-0 top-full mt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 ease-in-out flex flex-col bg-white text-black shadow-lg rounded-lg p-4 w-[320px] space-y-2 z-20">
              <a href="#help" className="flex items-start space-x-3 hover:bg-gray-100 p-3 rounded transition duration-200">
                <InformationCircleIcon className="h-6 w-6 text-blue-500" />
                <div>
                  <p className="font-medium">Help Articles</p>
                  <p className="text-sm text-gray-500">Read FAQs and troubleshooting tips.</p>
                </div>
              </a>
              <Link to="/faq" className="flex items-start space-x-3 hover:bg-gray-100 p-3 rounded transition duration-200">
                <InformationCircleIcon className="h-6 w-6 text-indigo-500" />
                <div>
                    <p className="font-medium">FAQ</p>
                    <p className="text-sm text-gray-500">Common questions about HOA Portal</p>
                </div>
                </Link>
              <Link to="/contact" className="flex items-start space-x-3 hover:bg-gray-100 p-3 rounded transition duration-200">
                <UsersIcon className="h-6 w-6 text-green-500" />
                <div>
                  <p className="font-medium">Contact Us</p>
                  <p className="text-sm text-gray-500">Get in touch with our support team.</p>
                </div>
              </Link>
            </div>
          </div>
        </nav>

        {/* LOGIN/SIGNUP */}
        <div className="space-x-4 text-sm font-semibold hidden md:flex">
          <a href={loginUrl} className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-indigo-700 transition">Login</a>
          <a href={getStartedUrl} className="bg-white text-indigo-700 px-4 py-2 rounded hover:bg-gray-100 transition">Get Started</a>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col overflow-y-auto">
          {/* Mobile Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h1 className="text-xl font-bold text-indigo-700">HOA Portal</h1>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-700 p-2"
              aria-label="Close menu"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <nav className="flex flex-col p-4 space-y-4 text-lg font-medium text-gray-800">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-indigo-600">Home</Link>
            <Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-indigo-600">Pricing</Link>
            <Link to="/demo" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-indigo-600">Demo</Link>
            <Link to="/why-hoa-portal" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-indigo-600">Why HOA Portal?</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-indigo-600">About Us</Link>
            <Link to="/blogs" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-indigo-600">Blog</Link>
            <Link to="/community-portal" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-indigo-600">Community Portal</Link>
            <Link to="/faq" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-indigo-600">FAQ</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-indigo-600">Contact Us</Link>
            <Link to="/privacy" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-indigo-600">Privacy</Link>

            <hr className="my-4" />

            {/* Mobile Auth Buttons */}
            <a
              href={loginUrl}
              className="text-center px-4 py-3 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50"
            >
              Login
            </a>
            <a
              href={getStartedUrl}
              className="text-center px-4 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

export default Header;
