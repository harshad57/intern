import React from 'react';
import { Star, GraduationCap, ClipboardCheck, ArrowRight, UserCheck, Search, MessageSquare } from 'lucide-react';

const PRIMARY_COLOR = '#E54B64';
const LIGHT_PINK = 'rgba(255, 230, 235, 0.7)';

const features = [
  {
    icon: ClipboardCheck,
    title: 'A Resume That Passes ATS Filters',
    description: 'Get a professionally written, keyword-optimized resume that lands in recruiter inboxes—not rejection piles.',
    illustration: () => (
      <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center relative">
        <ClipboardCheck className="text-red-500 w-8 h-8"/>
        <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
      </div>
    )
  },
  {
    icon: ArrowRight,
    title: 'A Cover Letter That Gets Read',
    description: 'Stand out with a cover letter that speaks directly to the role and reflects your strengths.',
    illustration: () => (
      <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center relative">
        <svg className="w-10 h-10 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
        <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer">
          <span className="text-white text-xs font-bold">✓</span>
        </div>
      </div>
    )
  },
  {
    icon: UserCheck,
    title: 'A LinkedIn Profile That Works For You',
    description: 'Attract the right eyes, start conversations, and show up in recruiter searches.',
    illustration: () => (
      <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center relative">
        <Search className="text-red-500 w-8 h-8"/>
        <div className="absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4 w-4 h-4 bg-red-500 rounded-full shadow-lg"></div>
      </div>
    )
  },
  {
    icon: MessageSquare,
    title: 'Interview Confidence',
    description: 'Interview preparation with real HR professionals so you speak clearly, confidently, and convincingly.',
    illustration: () => (
      <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center relative">
        <MessageSquare className="text-red-500 w-8 h-8"/>
        <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
          <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
        </div>
      </div>
    )
  },
];

// --- Sub-Components ---

const Header = () => (
  <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <svg style={{ color: PRIMARY_COLOR }} className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5L12 2zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        <div className="text-lg font-bold">
          <span style={{ color: PRIMARY_COLOR }}>COMPANY</span>
          <span className="text-gray-600 text-sm block font-medium">business tagline</span>
        </div>
      </div>
      
      <nav className="hidden lg:flex items-center space-x-6">
        {['Home', 'About Us', 'Our Services', 'Pricing', 'FAQ'].map((item) => (
          <a key={item} href="#" className="text-gray-600 hover:text-gray-900 font-medium transition duration-150 ease-in-out">
            {item}
          </a>
        ))}
        <button
          style={{ backgroundColor: PRIMARY_COLOR }}
          className="ml-4 px-6 py-2 text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition duration-150 ease-in-out"
        >
          Get A Quote
        </button>
      </nav>

      <button className="lg:hidden text-gray-600 hover:text-gray-900">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
      </button>
    </div>
  </header>
);

const HeroSection = () => {
  const PlaceholderImage = () => (
    <div className="relative h-full w-full max-w-sm lg:max-w-lg mx-auto lg:mx-0">
      <div className="w-full h-96 rounded-b-full overflow-hidden shadow-2xl relative" 
           style={{ 
             backgroundImage: 'url(https://images.unsplash.com/photo-1544717305-2782549b5136?w=500&auto=format&fit=crop&q=40&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D)',
             backgroundSize: 'cover',
             backgroundPosition: 'top',
           }}>
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
      </div>

      <div className="absolute top-1/2 -left-16 transform -translate-y-1/2 bg-white p-4 rounded-xl shadow-2xl flex items-center space-x-3 w-40 sm:w-48 lg:w-56 border-t-4" style={{ borderColor: PRIMARY_COLOR }}>
        <div className="text-4xl font-bold" style={{ color: PRIMARY_COLOR }}>4.9</div>
        <div>
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < 4.9 ? 'fill-yellow-500' : 'fill-gray-300'}`} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <p className="text-xs font-medium text-gray-600 mt-0.5">Instructor Rating</p>
        </div>
      </div>
      
      <div className="absolute bottom-16 right-0 transform translate-x-1/4 bg-white p-3 rounded-xl shadow-2xl flex items-center space-x-2 w-36 sm:w-40" style={{ borderColor: PRIMARY_COLOR, borderBottom: `4px solid ${PRIMARY_COLOR}` }}>
        <GraduationCap style={{ color: PRIMARY_COLOR }} className="w-6 h-6"/>
        <div>
          <p className="text-xl font-bold" style={{ color: PRIMARY_COLOR }}>260+</p>
          <p className="text-xs text-gray-500 leading-tight">Online Resumes Created</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden" 
         style={{ 
           background: `linear-gradient(to right, ${LIGHT_PINK} 0%, rgba(255,255,255,0) 60%)`,
         }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        
        <div className="text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Your Resume 
            <span className="block my-1" style={{ color: PRIMARY_COLOR, borderBottom: `4px solid ${PRIMARY_COLOR}`, display: 'inline-block' }}>
              Deserves A Yes
            </span>
            <span className="block mt-2">Let's Make It Happen</span>
          </h1>
          
          <p className="mt-4 text-sm sm:text-base text-gray-700 max-w-md lg:max-w-none mx-auto lg:mx-0">
            If Your Resume Isn't Getting Responses, It's Time For An Upgrade. Get An ATS-Optimized Resume Crafted By HR Experts To Help You Land More Interviews. Our Resumes Are Designed To Get Your Foot In The Door And Place Your Name At The Top Of The Shortlist.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start space-x-4">
            <button 
              style={{ borderColor: PRIMARY_COLOR, color: PRIMARY_COLOR }}
              className="px-6 py-3 font-semibold text-sm uppercase tracking-wider border-2 rounded-full hover:bg-red-50 transition duration-150 ease-in-out"
            >
              Resume Pakages
            </button>
            <button 
              style={{ backgroundColor: PRIMARY_COLOR }}
              className="px-6 py-3 font-semibold text-sm uppercase tracking-wider text-white rounded-full shadow-lg hover:opacity-90 transition duration-150 ease-in-out"
            >
              Contact Us
            </button>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 h-[450px] flex justify-center lg:justify-end">
          <PlaceholderImage />
        </div>
      </div>
    </div>
  );
};

const FeaturesSection = () => (
  <section className="py-16 sm:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-2">
          What You Get
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 max-w-3xl mx-auto">
          You're Not Just Another Applicant And Your Resume Shouldn't Look Like One
        </h2>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-xl transition duration-300 ease-in-out">
            <div className="mb-6">
              {feature.illustration()}
            </div>
            
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              {feature.title}
            </h3>
            
            <p className="text-sm text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);


export default function App() {
  return (
    <div className="min-h-screen font-sans bg-gray-50">
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
          .font-sans {
            font-family: 'Inter', sans-serif;
          }
        `}
      </style>
      
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>

      <footer className="py-8 text-center text-xs text-gray-500 border-t mt-12">
        &copy; {new Date().getFullYear()} COMPANY. All rights reserved.
      </footer>
    </div>
  );
}
