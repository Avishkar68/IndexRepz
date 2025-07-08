// src/pages/LandingPage.jsx
import { Phone, Mail, MapPin, Plane, Hotel, Car, Ship, Globe, Users, Heart, Mountain, Building } from "lucide-react"
import { Badge } from "../Components/ui/Badge"
import { Card,CardContent, CardDescription, CardHeader, CardTitle } from "../Components/ui/Card"
import { Button } from "../Components/ui/Button"
import { Link } from "react-router-dom"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm  sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">India Repz Travel</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="#home" className="text-gray-600 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link to="#services" className="text-gray-600 hover:text-blue-600 transition-colors">
                Services
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
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
      <section id="home" className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 py-2 px-4 ">Comprehensive Travel Solutions</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Welcome to India Repz
                <span className="text-blue-600"> Travel Services</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We provide comprehensive travel management solutions, destination consulting, and global representation
                services for both leisure and business purposes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +91-92222 67890
                </Button>
                <Button size="lg" variant="outline">
                  <Mail className="mr-2 h-5 w-5" />
                  Get Started
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg"
                alt="Travel destinations"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">24/7 Support Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Capabilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From flight bookings to visa services, we handle all your travel needs with expertise and care.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              { icon: Plane, title: "Flight Bookings", color: "text-blue-600" },
              { icon: Hotel, title: "Hotel Reservations", color: "text-green-600" },
              { icon: Mountain, title: "Holiday Packages", color: "text-purple-600" },
              { icon: MapPin, title: "Visa Services", color: "text-red-600" },
              { icon: Ship, title: "Cruise Bookings", color: "text-cyan-600" },
              { icon: Car, title: "Car Rentals", color: "text-orange-600" },
              { icon: Building, title: "Bus Bookings", color: "text-indigo-600" },
              { icon: Globe, title: "Rail Bookings", color: "text-teal-600" },
              { icon: Heart, title: "Travel Insurance", color: "text-pink-600" },
              { icon: Users, title: "Tour Guides", color: "text-yellow-600" },
            ].map((service, index) => (
              <Card key={index} className="text-center border-none flex flex-col h-[100px] items-center justify-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="h-fit pb-0">
                  <service.icon className={`h-8 w-8 mx-auto  ${service.color}`} />
                  <h3 className="font-medium text-sm text-gray-900">{service.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Specialized Travel Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you're planning a business trip, family vacation, or cultural tour, we have the expertise to make
              it memorable.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Business Travel */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Building className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Business Travel</CardTitle>
                <CardDescription>Professional corporate travel management</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Corporate Travel Management</li>
                  <li>• M-I-C-E (Group Travel)</li>
                  <li>• Trade Fairs & Exhibitions</li>
                  <li>• Product Launch / Trainings</li>
                  <li>• Travel Desk / Implants</li>
                </ul>
              </CardContent>
            </Card>

            {/* Leisure Travel */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Heart className="h-10 w-10 text-pink-600 mb-2" />
                <CardTitle>Leisure Travel</CardTitle>
                <CardDescription>Unforgettable vacation experiences</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Holiday Packages</li>
                  <li>• Exotic Honeymoons</li>
                  <li>• Weekend Getaways</li>
                  <li>• Family Holidays</li>
                  <li>• Adventure Tours</li>
                </ul>
              </CardContent>
            </Card>

            {/* Inbound Tourism */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <MapPin className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle>Inbound Tourism</CardTitle>
                <CardDescription>Discover the beauty of India</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Cultural & Heritage Tours</li>
                  <li>• Medical Tourism Services</li>
                  <li>• Ethnic Tours across India</li>
                  <li>• Home-stay Programs</li>
                  <li>• Culinary Programs</li>
                </ul>
              </CardContent>
            </Card>

            {/* Representation */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Globe className="h-10 w-10 text-purple-600 mb-2" />
                <CardTitle>Representation</CardTitle>
                <CardDescription>Global business representation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Hotel Representation</li>
                  <li>• Representative Offices</li>
                  <li>• Trade Fair Participation</li>
                  <li>• Sales & Marketing</li>
                  <li>• B2B Partnerships</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Connect with us and start planning your travel now. Our experts are ready to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 bg-white/10 px-6 py-3 rounded-lg">
              <Phone className="h-5 w-5" />
              <span>Visit the city of love!</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 px-6 py-3 rounded-lg">
              <Ship className="h-5 w-5" />
              <span>Or an Exotic Cruise Trip!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Have a Travel Requirement?</h2>
            <p className="text-gray-600">Connect with us and start planning your travel now...</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center h-[180px] flex flex-col items-center justify-center">
              <CardContent className="">
                <Phone className="h-10 w-10 text-blue-600 mx-auto " />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-sm text-gray-600 mb-2">+91-92222 67890</p>
                <p className="text-sm text-gray-600">+91-22-3190 7676/77</p>
              </CardContent>
            </Card>
            <Card className="text-center h-[180px] flex flex-col items-center justify-center">
              <CardContent className="">
                <Mail className="h-10 w-10 text-green-600 mx-auto " />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-sm text-gray-600">travel@indiarepz.com</p>
              </CardContent>
            </Card>
            <Card className="text-center h-[180px] flex flex-col items-center justify-center">
              <CardContent className="">
                <Users className="h-10 w-10 text-purple-600 mx-auto " />
                <h3 className="font-semibold mb-2">Schedule Appointment</h3>
                <p className="text-sm text-gray-600">Let us know your requirements</p>
                <Button className="mt-3 bg-blue-600 text-white cursor-pointer" size="sm">
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="h-6 w-6 text-blue-400" />
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
  )
}