import { Mail, MapPin } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';

const card = "bg-white rounded-lg shadow-lg p-6 mb-8"

function Location() {

  return (
    <div className={card}>
      <h3 className="text-xl font-bold mb-6">Contact Information</h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <Mail className="w-5 h-5 text-blue-600 mr-3" />
            <span>ishu.rawat000@gmail.com</span>
          </div>
                
          <div className="flex items-center">
            <MapPin className="w-5 h-5 text-blue-600 mr-3" />
            <span>Sydney, Australia</span>
          </div>
        </div>
    </div>
  )
}

function ContactForm() {
  const [showForm, setShowForm] = useState(true);
  const [state, handleSubmit] = useForm("xanenlvj");
  
  if (state.succeeded && !showForm) {
      return (
        <div className='flex flex-col items-center gap-5'>
          <p>Thanks for submitting!</p>
          <div className='bg-white'>
            <button 
              type='button' 
              className='bg-blue-600 w-full mx-auto text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors'
              onClick={() => {
                // reset form
                setShowForm(true);
              }}>
                Submit another enquiry!
            </button>
          </div>
        </div>
      );
  }

  const formHolders = "block text-sm font-medium text-gray-700 mb-1";
  const formInput = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent";

  const onSubmit = async (e) => {
    await handleSubmit(e);
    // After submission, hide the form and show success message
    if (state.succeeded) {
      setShowForm(false);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={card}>
        <div className='mb-4'>
          <label htmlFor="name" className={formHolders}>
            Name
          </label>
          <input
            className={formInput}
            id="name"
            type="text" 
            name="name"
            required
          />
          <ValidationError
            prefix="Name" 
            field="name"
            errors={state.errors}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor="email" className={formHolders}>
            Email Address
          </label>
          <input
            className={formInput}
            id="email"
            type="email" 
            name="email"
            required
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor="message" className={formHolders}>
            Message
          </label>
          <textarea
            className={formInput}
            id="message"
            name="message"
            required
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>

        <div className='flex justify-center'>
          <button 
            type="submit" 
            disabled={state.submitting}
            className='bg-blue-600 w-full mx-auto text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors'
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default function Contact() {
  return (
    <div className="min-h-screen p-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8" data-aos="fade-down">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div data-aos="fade-right">
            <Location />
          </div>

          <div data-aos="fade-left">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}