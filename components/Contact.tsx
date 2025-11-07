import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

// Icons remain the same
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
);
const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);
const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);
const WebIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" /></svg>
);
const SpinnerIcon = () => (
    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);


const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', eventType: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setError('Please fill in all required fields.');
            return;
        }

        setIsLoading(true);
        setError('');
        setResponseMessage('');

        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

        const prompt = `
            You are a friendly and professional booking assistant for Ganesh Studio, a photography and videography business run by M. JAYAKUMAR & J. DHINESHKUMAR.
            A potential client has submitted an inquiry through the website. Here are their details:
            - Name: ${formData.name}
            - Email: ${formData.email}
            - Phone: ${formData.phone || 'Not provided'}
            - Event Type: ${formData.eventType || 'Not specified'}
            - Message: ${formData.message}

            Please write a warm and professional confirmation message to the client. Acknowledge their inquiry and the event type if specified.
            Assure them that the Ganesh Studio team will review their message and get back to them soon via their provided email (${formData.email}) or phone number.
            Keep the response concise, friendly, and start by addressing them by their name. Do not use markdown.
        `;

        try {
            const response = await ai.models.generateContent({
              model: 'gemini-2.5-flash',
              contents: prompt,
            });
            setResponseMessage(response.text);
            setFormData({ name: '', email: '', phone: '', eventType: '', message: '' });
        } catch (err) {
            setError('Sorry, something went wrong. Please try again later or contact us directly via phone or email.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };
    
    if (responseMessage) {
        return (
            <section id="contact" className="py-20 bg-gray-800">
                <div className="container mx-auto px-6 text-center">
                     <h2 className="text-4xl font-bold text-amber-400 mb-4">Thank You!</h2>
                     <div className="bg-gray-900 rounded-lg shadow-xl p-8 max-w-2xl mx-auto">
                        <p className="text-lg text-gray-300 whitespace-pre-wrap">{responseMessage}</p>
                        <button 
                            onClick={() => setResponseMessage('')}
                            className="mt-6 bg-amber-500 text-gray-900 font-bold py-2 px-6 rounded-full hover:bg-amber-400 transition-colors duration-300"
                        >
                            Send Another Inquiry
                        </button>
                     </div>
                </div>
            </section>
        );
    }

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-400 mb-2">Get In Touch</h2>
          <p className="text-lg text-gray-400">We'd love to hear from you. Fill out the form to book your next event.</p>
        </div>
        <div className="flex flex-col md:flex-row bg-gray-900 rounded-lg shadow-xl p-8 md:p-12 gap-10 items-start">
            <div className="md:w-2/3 w-full">
                <form onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <input type="text" name="name" placeholder="Your Name *" value={formData.name} onChange={handleInputChange} className="bg-gray-700 text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500" required />
                        <input type="email" name="email" placeholder="Your Email *" value={formData.email} onChange={handleInputChange} className="bg-gray-700 text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500" required />
                        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} className="bg-gray-700 text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                        <select name="eventType" value={formData.eventType} onChange={handleInputChange} className="bg-gray-700 text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500">
                            <option value="">Select Event Type</option>
                            <option value="Wedding">Wedding</option>
                            <option value="Pre & Post Wedding">Pre & Post Wedding</option>
                            <option value="Events">Events</option>
                            <option value="Baby Shower">Baby Shower</option>
                            <option value="Birthday Function">Birthday Function</option>
                            <option value="Puberty Function">Puberty Function</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <textarea name="message" placeholder="Your Message *" value={formData.message} onChange={handleInputChange} rows={5} className="w-full bg-gray-700 text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500" required></textarea>
                    {error && <p className="text-red-400 mt-4">{error}</p>}
                    <button type="submit" disabled={isLoading} className="mt-6 w-full md:w-auto flex items-center justify-center bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-400 transition-colors duration-300 disabled:bg-gray-500">
                        {isLoading ? <><SpinnerIcon /> Sending...</> : 'Send Inquiry'}
                    </button>
                </form>
            </div>
            <div className="md:w-1/3 w-full space-y-6 mt-8 md:mt-0">
                <div className="flex items-center">
                    <PhoneIcon />
                    <p className="text-lg text-gray-300">9788264089 / 9080827689</p>
                </div>
                <div className="flex items-center">
                    <MailIcon />
                     <a href="mailto:ganeshstudio9080@gmail.com" className="text-lg text-gray-300 hover:text-amber-400">ganeshstudio9080@gmail.com</a>
                </div>
                <div className="flex items-center">
                    <LocationIcon />
                    <p className="text-lg text-gray-300">Chennai & Gingee, Tamil Nadu</p>
                </div>
                <div className="flex items-center">
                    <WebIcon />
                    <a href="http://www.ganeshst.site" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-300 hover:text-amber-400">www.ganeshst.site</a>
                </div>
                 <div className="pt-4 text-center">
                    <div className="bg-white p-2 rounded-lg inline-block">
                        <svg className="w-32 h-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="#000000" d="M140 12h-24v56h24V12Zm-12 112a12 12 0 1 0-12-12a12 12 0 0 0 12 12ZM76 12H52v56h24V12Zm80 24h24v24h-24v-24Zm-40 0h24v24h-24v-24Zm40-24h24v24h-24V12Zm28 84a12 12 0 1 0-12-12a12 12 0 0 0 12 12ZM92 124H68v24h24v-24Zm-12 40a12 12 0 1 0-12-12a12 12 0 0 0 12 12Zm-28-16h24v24H52v-24Zm-28 0v24H12v-24h12Zm76 16h24v24h-24v-24Zm-16 16v24h-24v-24h24Zm40-16h24v24h-24v-24Zm40 0a12 12 0 1 0-12-12a12 12 0 0 0 12 12Zm-28-28v24h-24v-24h24Zm28 56v24h-24v-24h24Zm-16-16h24v24h-24v-24Zm-40 40h24v24h-24v-24Zm-16-16v24h-24v-24h24Zm-12 28a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm-28-12h24v24H52v-24Zm0-28H28v24h24v-24Zm0-28H28v24h24v-24Zm12-12a12 12 0 1 0-12-12a12 12 0 0 0 12 12ZM40 12H12v24h28V12Zm180 204h24v24h-24v-24Zm-28-28h24v24h-24v-24Zm-16 16v-24h-24v24h24Zm-12-40a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm-28 12h24v24h-24v-24Zm-28 28h24v24h-24v-24Zm-16-16v-24h-24v24h24ZM68 80h24v24H68V80Zm112 0v24h-24v-24h24Zm-56 0h24v24h-24V80Zm-56 0h24v24H68V80Z"/></svg>
                    </div>
                    <p className="mt-2 text-gray-300 font-semibold text-sm">For Online Bookings</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;