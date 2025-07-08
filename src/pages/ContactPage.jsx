import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin,Globe, Clock, Users, Building, Briefcase, Coffee } from 'lucide-react';
import { Button } from '../Components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../Components/ui/Card';
import { Label } from '../Components/ui/Label';
import { Textarea } from '../Components/ui/TextArea';
import { Input } from '../Components/ui/Input';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
     <header className="bg-white shadow-sm  sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link className="flex items-center space-x-2 cursor-pointer" to="/">
              <Globe className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">India Repz Travel</h1>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link to="/#services" className="text-gray-600 hover:text-blue-600 transition-colors">
                Services
              </Link>
              <Link to="about" className="text-gray-600 hover:text-blue-600 transition-colors">
                About Us
              </Link>
              <Link to="contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-blue-600" />
                <span className="text-gray-600">+91-92222 67890</span>
              </div>
              <Button className="bg-black text-white">Get Quote</Button>
            </div>
          </div>
        </div>
      </header>


      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Contact us for your travel requirements, jobs, sales and representation queries, strategic partnerships,
              or to visit us for a cup of coffee.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill in the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        E-mail Address <span className="text-red-500">*</span>
                      </Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">
                        Subject <span className="text-red-500">*</span>
                      </Label>
                      <Input id="subject" placeholder="What is this regarding?" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Message <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your requirements..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Client Support Numbers */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span>Client Support Numbers</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-blue-900">24x7 Travel Desk</p>
                      <p className="text-blue-700">+91-92222 67890</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-700">+91-9920 133 193</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-700">+91-9619 510 710</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email Contacts */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-green-600" />
                    <span>Email Contacts</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Building className="h-4 w-4 text-blue-600" />
                      <span className="font-medium">Travel Desk</span>
                    </div>
                    <a href="mailto:travel@indiarepz.com" className="text-blue-600 hover:underline">
                      travel@indiarepz.com
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Building className="h-4 w-4 text-green-600" />
                      <span className="font-medium">Finance</span>
                    </div>
                    <a href="mailto:finance@indiarepz.com" className="text-blue-600 hover:underline">
                      finance@indiarepz.com
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Briefcase className="h-4 w-4 text-purple-600" />
                      <span className="font-medium">Jobs & Careers</span>
                    </div>
                    <a href="mailto:jobs@indiarepz.com" className="text-blue-600 hover:underline">
                      jobs@indiarepz.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Office Address */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-red-600" />
                    <span>Corporate Office Address</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-700">
                    <p className="font-medium">Level 9, Platina,</p>
                    <p>Bandra Kurla Complex,</p>
                    <p>Mumbai 400051,</p>
                    <p>India</p>
                  </div>
                  <Button variant="outline" className="mt-4 w-full bg-transparent">
                    <MapPin className="mr-2 h-4 w-4" />
                    View on Map
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Coffee className="h-8 w-8 text-blue-600" />
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Schedule an Appointment</h2>
            <p className="text-lg text-gray-600 mb-8">
              To schedule an appointment with one of our travel consultants, please fill in the form above with your
              comments and requirements. We'll get back to you promptly to arrange a meeting.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <Building className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Travel Requirements</h3>
                <p className="text-sm text-gray-600">Business & leisure travel planning</p>
              </div>
              <div className="text-center p-4">
                <Briefcase className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Jobs & Careers</h3>
                <p className="text-sm text-gray-600">Join our growing team</p>
              </div>
              <div className="text-center p-4">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Partnerships</h3>
                <p className="text-sm text-gray-600">Strategic business partnerships</p>
              </div>
              <div className="text-center p-4">
                <Coffee className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Office Visit</h3>
                <p className="text-sm text-gray-600">Visit us for a cup of coffee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Our travel desk is available 24/7 to help you with your requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Call: +91-92222 67890
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email: travel@indiarepz.com
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building className="h-6 w-6 text-blue-400" />
                <h3 className="text-lg font-semibold">India Repz Travel</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Comprehensive travel management solutions with round the clock accessibility and expertise.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Flight Bookings</li>
                <li>Hotel Reservations</li>
                <li>Holiday Packages</li>
                <li>Visa Services</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Business</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Corporate Travel</li>
                <li>MICE Services</li>
                <li>Trade Fairs</li>
                <li>Representation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>+91-92222 67890</p>
                <p>travel@indiarepz.com</p>
                <p>+91-22-3190 7676/77</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2014 India Repz Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;