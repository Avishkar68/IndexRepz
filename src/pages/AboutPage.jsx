import { Users, Globe, Clock, Shield, TrendingUp, Award, Building, Heart, MapPin, Phone, Mail } from "lucide-react"
import { Card,CardContent,CardDescription,CardHeader,CardTitle } from "../Components/ui/Card"
import { Button } from "../Components/ui/Button"
import { Badge } from "../Components/ui/Badge"

import { Link } from "react-router-dom"
import TravelSlideshow from "../Components/ui/TravelSlideshow"

export default function AboutPage() {
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
              <Button>Get Quote</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">Established 2009</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About India Repz Travel Services</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Based in Mumbai, India with a global partner network, we aspire to be one of the leading agencies in the
              organized travel space, providing comprehensive travel management solutions worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center ">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Information</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg leading-relaxed">
                  <strong>Established in 2009</strong>, India Repz Travel Services is based in Mumbai, India, and
                  maintains a global partner network. We aspire to be one of the leading agencies in the organized
                  travel space, providing travel management solutions to our clients and partners across the world.
                </p>
                <p className="leading-relaxed">
                  We work with individual clients, corporates, airlines, hotels, travel agents, and tourism boards,
                  providing each of them travel and marketing solutions, destination consulting, and representation
                  services across continents, time zones, and industry verticals.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">3000+</div>
                  <div className="text-sm text-gray-600">Travel Partners</div>
                </div>
              </div>
            </div>
            <div className="relative">
           <TravelSlideshow/>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We take pride in our human resource, which we consider to be the key element required for exceptional
              travel management.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Travel Enthusiasts</CardTitle>
                <CardDescription>Diverse backgrounds, common objective</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our travel consultants include travel enthusiasts from various backgrounds coming together to achieve
                  a well-defined common objective: exceptional travel management.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle>Certified Professionals</CardTitle>
                <CardDescription>Trained and equipped experts</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Each Travel Consultant is equipped and trained on global reservation systems, destination training,
                  and other industry certifications, ensuring top-quality service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Operational Divisions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Operational Divisions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized desks to handle every aspect of your travel requirements with expertise and precision.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Building,
                title: "Business Travel Desk",
                description:
                  "Organized corporate travel management for companies across industry verticals, locations and sizes.",
                color: "text-blue-600",
              },
              {
                icon: Heart,
                title: "Leisure Travel Desk",
                description:
                  "Holidays, vacations, getaways to every corner of the world, ensuring your trips are as smooth as they could be.",
                color: "text-pink-600",
              },
              {
                icon: Users,
                title: "Group Travel Desk",
                description:
                  "Meetings, Incentives, Conferences and Events - Our MICE desk handles groups of all sizes.",
                color: "text-purple-600",
              },
              {
                icon: Globe,
                title: "Allied Services Desk",
                description:
                  "A one-stop shop for each and every travel requirement, no matter how big or small it may be.",
                color: "text-green-600",
              },
              {
                icon: TrendingUp,
                title: "Representation Services Desk",
                description: "Works with various partners providing them keen insight into the Indian market.",
                color: "text-orange-600",
              },
              {
                icon: MapPin,
                title: "Inbound Travel Desk",
                description:
                  "Welcoming clients from across the world into India for tourism, medical, spiritual and educational purposes.",
                color: "text-teal-600",
              },
            ].map((division, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <division.icon className={`h-10 w-10 ${division.color} mb-2`} />
                  <CardTitle className="text-lg">{division.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{division.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose India Repz Travel Services?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              We provide comprehensive solutions that make your travel experience smooth, hassle-free, and
              cost-effective.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: "End to End Travel Management", description: "Complete travel solutions" },
              { icon: Heart, title: "Personalized Services", description: "Tailored to your needs" },
              { icon: Clock, title: "Round the Clock Accessibility", description: "24/7 support available" },
              { icon: TrendingUp, title: "Savings on Travel Expenditure", description: "Cost-effective solutions" },
              { icon: Users, title: "Free Travel Consulting", description: "Expert advice at no cost" },
              { icon: Shield, title: "Expense Management & MIS", description: "Comprehensive reporting" },
              { icon: Award, title: "Smooth & Hassle Free", description: "Seamless travel experience" },
              { icon: Building, title: "Cost Effective Solutions", description: "Maximum value for money" },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <benefit.icon className="h-8 w-8 mx-auto mb-3 text-blue-200" />
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-blue-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Representation Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Representation Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              India Repz Travel Services provides specialized Representation Services, Sales & Marketing solutions to
              Hotels, Tour Operators & Hospitality Institutes to penetrate the Indian Market.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "India sales and marketing office on behalf of clients",
              "Monthly sales calls to 3000+ luxury travel agents",
              "Negotiations and contracting with luxury tour operators",
              "Tactical Sales and Marketing campaigns",
              "Product training through online modules",
              "Familiarization trips and sales trips organization",
              "Unlimited client/agent visits support",
              "Research and planning for sales activities",
              "Brochure mailings and email campaigns",
              "New openings and launches support",
            ].map((service, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 text-sm">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get in touch with us to schedule a formal presentation from one of our travel consultants to know how you
            could benefit from our travel management programs and representation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Phone className="mr-2 h-5 w-5 " />
              Call: +91-92222 67890
            </Button>
            <Button size="lg" variant="outline">
              <Mail className="mr-2 h-5 w-5" />
              Schedule Presentation
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