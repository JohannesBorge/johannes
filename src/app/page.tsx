import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 py-20 md:py-32">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Building SaaS products?<br />
          <span className="text-blue-600">Let's make it happen</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          I'm Johannes Borge, a technical founder helping indie hackers and solo SaaS founders turn their ideas into reality. Through personalized coaching, technical assistance, and founder mentoring, I help you build and grow your product.
        </p>
        <Link
          href="#services"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Explore Services
        </Link>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Premium Services for Founders</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* SaaS Royal */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4">SaaS Royal</h3>
              <p className="text-gray-600 mb-6">Personal accountability coaching to keep you on track and moving forward with your product.</p>
              <Link href="#contact" className="text-blue-600 hover:text-blue-700 font-medium">
                Learn more →
              </Link>
            </div>

            {/* Tech Assistant */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4">Tech Assistant</h3>
              <p className="text-gray-600 mb-6">Hands-on technical help for building MVPs and scaling your product infrastructure.</p>
              <Link href="#contact" className="text-blue-600 hover:text-blue-700 font-medium">
                Learn more →
              </Link>
            </div>

            {/* Founder Soundboard */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4">Founder Soundboard</h3>
              <p className="text-gray-600 mb-6">Async voice-based idea sounding board for refining your product strategy and decisions.</p>
              <Link href="#contact" className="text-blue-600 hover:text-blue-700 font-medium">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <Image
                src="/profile.jpg"
                alt="Johannes Borge"
                width={400}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">About Johannes</h2>
              <p className="text-gray-600 mb-4">
                With over a decade of experience in building and scaling SaaS products, I've helped numerous founders turn their ideas into successful businesses.
              </p>
              <p className="text-gray-600">
                My approach combines technical expertise with founder-focused coaching, ensuring you have both the skills and mindset needed to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">SaaS Royal</h3>
              <p className="text-3xl font-bold mb-4">$299<span className="text-lg text-gray-600">/month</span></p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>Weekly 1:1 sessions</li>
                <li>Goal tracking</li>
                <li>Progress reviews</li>
              </ul>
              <Link href="#contact" className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Get Started
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">Tech Assistant</h3>
              <p className="text-3xl font-bold mb-4">$499<span className="text-lg text-gray-600">/month</span></p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>Technical support</li>
                <li>Code reviews</li>
                <li>Architecture guidance</li>
              </ul>
              <Link href="#contact" className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Get Started
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">Founder Soundboard</h3>
              <p className="text-3xl font-bold mb-4">$199<span className="text-lg text-gray-600">/month</span></p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>Async feedback</li>
                <li>Strategy sessions</li>
                <li>Decision support</li>
              </ul>
              <Link href="#contact" className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Get Started
              </Link>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">Complete Bundle</h3>
              <p className="text-3xl font-bold mb-4">$799<span className="text-lg text-gray-600">/month</span></p>
              <p className="text-gray-600 mb-4">All three services combined</p>
              <p className="text-green-600 font-medium mb-6">Save $198/month</p>
              <Link href="#contact" className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your SaaS?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help you turn your idea into a successful product.
          </p>
          <Link
            href="mailto:contact@johannesborge.com"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Book a Call
          </Link>
        </div>
      </section>
    </div>
  );
}
