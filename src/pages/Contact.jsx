import React from 'react';

const Contact = () => {
    return (
        <div className='min-h-screen mt-3 mr-3 ml-3 flex items-center rounded-2xl justify-center bg-blue-200 bg-opacity-30 px-4 py-12'>
            <form className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">Contact Us</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-semibold mb-1">First Name</label>
                        <input
                            type="text"
                            placeholder="Enter your first name"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1">Last Name</label>
                        <input
                            type="text"
                            placeholder="Enter your last name"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1">Phone</label>
                        <input
                            type="tel"
                            placeholder="Enter your phone number"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-semibold mb-1">Select Service</label>
                    <select
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    >
                        <option value="">-- Choose a service --</option>
                        <option value="gst">GST Registration</option>
                        <option value="gst-return">GST Return</option>
                        <option value="itr">ITR Filing</option>
                        <option value="company">Company Registration</option>
                        <option value="llp">LLP Registration</option>
                        <option value="partnership">Partnership & Firm Registration</option>
                        <option value="trust">Trust Registration</option>
                        <option value="society">Society Registration</option>
                        <option value="esi-pf">ESI & PF Registration</option>
                        <option value="import-export">Import and Export Code</option>
                        <option value="trademark">Trademark Registration</option>
                        <option value="gem">Gem Registration</option>
                        <option value="copyright">Copyright Registration</option>
                        <option value="design">Design Registration</option>
                        <option value="patent">Patent Registration</option>
                        <option value="msme">MSME Registration</option>
                        <option value="fssai">FASSAI Registration</option>
                        <option value="dsc">DSC (Digital Signature)</option>
                        <option value="iso">ISO Certification</option>
                        <option value="pan">PAN Card</option>
                        <option value="civil">Civil Matter</option>
                        <option value="revenue-consumer">Revenue & Consumer Matter</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="mt-6 text-center">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
