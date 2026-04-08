import React, { useState } from 'react';
import { Phone, MapPin, Clock, Star, Sparkles, Scissors, Heart, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Home = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      category: 'Hair Care',
      items: [
        { name: 'Hair Cut & Styling', price: '₹500 onwards' },
        { name: 'Hair Spa Treatment', price: '₹1,200 onwards' },
        { name: 'Hair Coloring', price: '₹2,500 onwards' },
        { name: 'Keratin Treatment', price: '₹3,500 onwards' }
      ]
    },
    {
      category: 'Skin Care',
      items: [
        { name: 'Facial Treatment', price: '₹800 onwards' },
        { name: 'Skin Polishing', price: '₹1,500 onwards' },
        { name: 'Anti-Aging Treatment', price: '₹2,000 onwards' },
        { name: 'Acne Treatment', price: '₹1,200 onwards' }
      ]
    },
    {
      category: 'Beauty Services',
      items: [
        { name: 'Bridal Makeup', price: '₹8,000 onwards' },
        { name: 'Party Makeup', price: '₹3,000 onwards' },
        { name: 'Manicure & Pedicure', price: '₹800 onwards' },
        { name: 'Waxing Services', price: '₹400 onwards' }
      ]
    },
    {
      category: 'Specialty Treatments',
      items: [
        { name: 'Laser Hair Removal', price: '₹1,500 per session' },
        { name: 'Pigmentation Treatment', price: '₹2,500 onwards' },
        { name: 'Botox & Fillers', price: 'Consultation Required' },
        { name: 'Chemical Peels', price: '₹2,000 onwards' }
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      rating: 5,
      text: 'Amazing experience! The staff is so professional and the ambiance is wonderful. Best salon in HSR Layout!',
      service: 'Bridal Makeup'
    },
    {
      name: 'Anjali Reddy',
      rating: 5,
      text: 'I have been coming here for over a year now. The skin treatments are top-notch and results are visible.',
      service: 'Skin Treatment'
    },
    {
      name: 'Meera Krishnan',
      rating: 5,
      text: 'Highly recommend Glam Zone! Very hygienic, professional staff, and great results every time.',
      service: 'Hair Spa'
    },
    {
      name: 'Divya Nair',
      rating: 5,
      text: 'The best part is their attention to detail and personalized care. Love this place!',
      service: 'Facial Treatment'
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 backdrop-blur-sm bg-opacity-95">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <Sparkles className="w-8 h-8" style={{ color: '#61525a' }} />
              <h1 className="text-xl lg:text-2xl font-bold" style={{ color: '#1e1919' }}>
                Glam Zone
              </h1>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: '#736c64' }}>
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: '#736c64' }}>
                Services
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: '#736c64' }}>
                Gallery
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: '#736c64' }}>
                Reviews
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: '#736c64' }}>
                Contact
              </button>
            </nav>

            <a href="tel:+918971203273">
              <Button size="lg" style={{ backgroundColor: '#61525a', color: 'white' }} className="hover:opacity-90 transition-opacity">
                <Phone className="w-4 h-4 mr-2" />
                Book Now
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32" style={{ backgroundColor: '#f7f5f2' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-base px-4 py-2" style={{ backgroundColor: '#fad24b', color: '#1e1919' }}>
              <Star className="w-4 h-4 mr-2 fill-current" />
              4.9★ Rating · 334+ Reviews
            </Badge>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6" style={{ color: '#1e1919', lineHeight: '1.1' }}>
              Your Destination for
              <br />
              <span style={{ color: '#61525a' }}>Beauty & Wellness</span>
            </h2>
            
            <p className="text-lg lg:text-xl mb-10" style={{ color: '#736c64', maxWidth: '650px', margin: '0 auto 2.5rem' }}>
              Experience luxury beauty treatments and advanced skin care at Bengaluru's premier women's salon & clinic in HSR Layout
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+918971203273">
                <Button size="lg" className="text-base px-8 py-6" style={{ backgroundColor: '#61525a', color: 'white' }}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call +91 89712 03273
                </Button>
              </a>
              <a href="https://maps.google.com/?q=1st+Floor,+132,+7th+Cross+Rd,+ITI+Layout,+HSR+Layout,+Bengaluru,+Karnataka+560068" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="text-base px-8 py-6" style={{ borderColor: '#61525a', color: '#61525a' }}>
                  <MapPin className="w-5 h-5 mr-2" />
                  Get Directions
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h3 className="text-3xl lg:text-5xl font-bold mb-6" style={{ color: '#1e1919' }}>
              Welcome to Glam Zone
            </h3>
            <p className="text-lg" style={{ color: '#736c64' }}>
              Nestled in the heart of HSR Layout, Glam Zone Women's Salon & Clinic has been Bengaluru's trusted destination for comprehensive beauty and wellness solutions. We combine traditional beauty treatments with advanced clinical skincare to help you look and feel your absolute best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#fad24b' }}>
                  <Award className="w-8 h-8" style={{ color: '#1e1919' }} />
                </div>
                <CardTitle style={{ color: '#1e1919' }}>Expert Professionals</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base" style={{ color: '#736c64' }}>
                  Highly trained beauticians and certified dermatologists with years of experience
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#3dd3ee' }}>
                  <Sparkles className="w-8 h-8" style={{ color: '#1e1919' }} />
                </div>
                <CardTitle style={{ color: '#1e1919' }}>Premium Products</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base" style={{ color: '#736c64' }}>
                  We use only the finest international brands and clinically tested products
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#ff8c19' }}>
                  <Heart className="w-8 h-8" style={{ color: 'white' }} />
                </div>
                <CardTitle style={{ color: '#1e1919' }}>Personalized Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base" style={{ color: '#736c64' }}>
                  Every treatment is customized to your unique skin type and beauty goals
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32" style={{ backgroundColor: '#f7f5f2' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h3 className="text-3xl lg:text-5xl font-bold mb-6" style={{ color: '#1e1919' }}>
              Our Services
            </h3>
            <p className="text-lg" style={{ color: '#736c64' }}>
              From everyday beauty essentials to advanced clinical treatments, we offer a comprehensive menu of services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((serviceCategory, idx) => (
              <Card key={idx} className="border-2 hover:shadow-xl transition-all duration-300">
                <CardHeader style={{ backgroundColor: idx === 0 ? '#fad24b' : idx === 1 ? '#3dd3ee' : idx === 2 ? '#ff8c19' : '#b4dc19' }}>
                  <CardTitle className="text-2xl" style={{ color: '#1e1919' }}>
                    {serviceCategory.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {serviceCategory.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex justify-between items-center pb-3 border-b border-gray-200 last:border-0">
                        <span className="font-medium" style={{ color: '#1e1919' }}>{item.name}</span>
                        <span className="font-bold" style={{ color: '#61525a' }}>{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h3 className="text-3xl lg:text-5xl font-bold mb-6" style={{ color: '#1e1919' }}>
              Our Gallery
            </h3>
            <p className="text-lg" style={{ color: '#736c64' }}>
              Step inside our luxurious salon and witness the transformations we create every day
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                <Scissors className="w-16 h-16" style={{ color: '#61525a', opacity: 0.3 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 lg:py-32" style={{ backgroundColor: '#f7f5f2' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h3 className="text-3xl lg:text-5xl font-bold mb-6" style={{ color: '#1e1919' }}>
              What Our Clients Say
            </h3>
            <p className="text-lg" style={{ color: '#736c64' }}>
              Don't just take our word for it — hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl" style={{ color: '#1e1919' }}>
                      {testimonial.name}
                    </CardTitle>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#fad24b' }} />
                      ))}
                    </div>
                  </div>
                  <Badge variant="outline" style={{ borderColor: '#61525a', color: '#61525a', width: 'fit-content' }}>
                    {testimonial.service}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p style={{ color: '#736c64' }}>"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h3 className="text-3xl lg:text-5xl font-bold mb-6" style={{ color: '#1e1919' }}>
              Visit Us Today
            </h3>
            <p className="text-lg" style={{ color: '#736c64' }}>
              We're open daily and ready to welcome you for a transformative beauty experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-2">
              <CardHeader>
                <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#fad24b' }}>
                  <Phone className="w-7 h-7" style={{ color: '#1e1919' }} />
                </div>
                <CardTitle style={{ color: '#1e1919' }}>Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+918971203273" className="text-lg font-semibold hover:opacity-70 transition-opacity" style={{ color: '#61525a' }}>
                  +91 89712 03273
                </a>
              </CardContent>
            </Card>

            <Card className="text-center border-2">
              <CardHeader>
                <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#3dd3ee' }}>
                  <MapPin className="w-7 h-7" style={{ color: '#1e1919' }} />
                </div>
                <CardTitle style={{ color: '#1e1919' }}>Location</CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="https://maps.google.com/?q=1st+Floor,+132,+7th+Cross+Rd,+ITI+Layout,+HSR+Layout,+Bengaluru,+Karnataka+560068" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-base hover:opacity-70 transition-opacity" 
                  style={{ color: '#736c64' }}
                >
                  1st Floor, 132, 7th Cross Rd,<br />ITI Layout, HSR Layout,<br />Bengaluru, Karnataka 560068
                </a>
              </CardContent>
            </Card>

            <Card className="text-center border-2">
              <CardHeader>
                <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#ff8c19' }}>
                  <Clock className="w-7 h-7" style={{ color: 'white' }} />
                </div>
                <CardTitle style={{ color: '#1e1919' }}>Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base" style={{ color: '#736c64' }}>
                  Open Daily<br />
                  10:00 AM - 8:00 PM
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <a href="tel:+918971203273">
              <Button size="lg" className="text-lg px-10 py-7" style={{ backgroundColor: '#61525a', color: 'white' }}>
                <Phone className="w-5 h-5 mr-2" />
                Book Your Appointment Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200" style={{ backgroundColor: '#1e1919' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6" style={{ color: '#fad24b' }} />
                <h4 className="text-xl font-bold" style={{ color: 'white' }}>Glam Zone</h4>
              </div>
              <p style={{ color: '#bbb5ae' }}>
                Your trusted destination for beauty and wellness in HSR Layout, Bengaluru.
              </p>
            </div>

            <div>
              <h5 className="text-lg font-bold mb-4" style={{ color: 'white' }}>Quick Links</h5>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('about')} className="hover:opacity-70 transition-opacity" style={{ color: '#bbb5ae' }}>
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')} className="hover:opacity-70 transition-opacity" style={{ color: '#bbb5ae' }}>
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('gallery')} className="hover:opacity-70 transition-opacity" style={{ color: '#bbb5ae' }}>
                    Gallery
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="hover:opacity-70 transition-opacity" style={{ color: '#bbb5ae' }}>
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-bold mb-4" style={{ color: 'white' }}>Contact Info</h5>
              <ul className="space-y-2">
                <li>
                  <a href="tel:+918971203273" className="hover:opacity-70 transition-opacity flex items-center gap-2" style={{ color: '#bbb5ae' }}>
                    <Phone className="w-4 h-4" />
                    +91 89712 03273
                  </a>
                </li>
                <li>
                  <a 
                    href="https://maps.google.com/?q=1st+Floor,+132,+7th+Cross+Rd,+ITI+Layout,+HSR+Layout,+Bengaluru,+Karnataka+560068" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity flex items-start gap-2" 
                    style={{ color: '#bbb5ae' }}
                  >
                    <MapPin className="w-4 h-4 mt-1" />
                    <span>HSR Layout, Bengaluru</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t text-center" style={{ borderColor: '#736c64' }}>
            <p style={{ color: '#bbb5ae' }}>
              © 2025 Glam Zone Women's Salon & Clinic. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;