import Link from 'next/link';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function ContactPreview() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Get In Touch</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            We&apos;re here to answer any questions you may have about our programs, admission process, or school facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Map Section */}
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.646!2d5.9933794!3d5.3859879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041bf56628d4765%3A0xfab9d70d1a80700b!2sHARMONY+UNIQUE+SCHOOLS!5e0!3m2!1sen!2sus!4v1711560992961!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Harmony Unique School Location"
            ></iframe>
          </div>

          {/* Contact Info & Quick Form */}
          <div className="bg-card p-8 rounded-lg shadow-md">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPinIcon className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <p className="text-card-foreground">
                    <span className="font-semibold">Address:</span><br />
                    Harmony Unique School,<br />
                    Ewu-Urhobo, Ughelli South LGA,<br />
                    Delta State, Nigeria
                  </p>
                </div>
                
                <div className="flex items-center">
                  <PhoneIcon className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <p className="text-card-foreground">
                    <span className="font-semibold">Phone:</span><br />
                    +234 123 456 7890
                  </p>
                </div>
                
                <div className="flex items-center">
                  <EnvelopeIcon className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <p className="text-card-foreground">
                    <span className="font-semibold">Email:</span><br />
                    info@harmonyuniqueschool.com
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Send Us a Message</h3>
              <p className="mb-6 text-muted-foreground">
                Have a question or want to learn more? Our team is ready to help you.
              </p>
              <Link 
                href="/contact" 
                className="inline-block w-full py-3 px-6 text-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-md transition duration-300"
              >
                Contact Us Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
