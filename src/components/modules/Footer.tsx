import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

export const Footer = () => {
  const servicesLinks = ["Plumbing", "Drainage", "Bathrooms", "Commercial"];
  const usefulLinks = ["Contact Us", "Updates", "About Us", "Rates"];
  const additionalLinks = ["Customer Services", "Updates", "Locations", "Sitemap"];

  const contactInfo = [
    {
      icon: <MapPinIcon className="w-5 h-5 text-primary" />,
      text: "1 Sail Street, London, SE11 6NQ",
    },
    {
      icon: <MailIcon className="w-5 h-5 text-primary" />,
      text: "enquiries@PlumbingPros.com",
    },
    {
      icon: <PhoneIcon className="w-5 h-5 text-primary" />,
      text: "020 4527 6474",
    },
  ];

  return (
    <footer className="flex flex-col w-full max-w-[1600px] items-center gap-8 md:gap-10 lg:gap-20 bg-white -translate-y-4 animate-fade-in">
      {/* Top Section */}
      <div className="flex flex-wrap md:flex-col lg:flex-row lg:flex-nowrap items-start gap-8 md:gap-10 lg:gap-20 w-full">
        {/* Logo + Social */}
        <div className="flex flex-col w-[260px] gap-7 -translate-y-4 animate-fade-in [--animation-delay:200ms]">
          <h2 className="text-3xl font-bold text-black tracking-[-0.03em]">Business Logo</h2>
          <img
            alt="Social media icons"
            src="https://c.animaapp.com/mg6le9siyTOZVB/img/frame-97.svg"
            className="h-5 mr-auto"
          />
        </div>

        {/* Navigation */}
        <div className="flex flex-1 gap-24">
          {/* Services */}
          <nav className="flex flex-col gap-6 -translate-y-4 animate-fade-in [--animation-delay:400ms]">
            <h3 className="text-sm leading-6 font-semibold text-[#2a2f32]">Our Services</h3>
            <ul className="flex flex-col gap-4">
              {servicesLinks.map((service, index) => (
                <li key={`service-${index}`}>
                  <a
                    href="#"
                    className="text-sm text-[#2a2f32] hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Useful + Additional */}
          <div className="flex gap-12">
            <nav className="flex flex-col gap-6 -translate-y-4 animate-fade-in [--animation-delay:600ms]">
              <h3 className="text-sm leading-6 font-semibold text-[#2a2f32]">Useful Links</h3>

              <div className="flex flex-col md:flex-row gap-10">
                <ul className="flex flex-col gap-4">
                {usefulLinks.map((link, index) => (
                  <li key={`useful-${index}`}>
                    <a
                      href="#"
                      className="text-sm text-[#2a2f32] hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-3">
                {additionalLinks.map((link, index) => (
                  <li key={`additional-${index}`}>
                    <a
                      href="#"
                      className="text-sm text-[#2a2f32] hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              </div>
            </nav>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6 -translate-y-4 animate-fade-in [--animation-delay:1000ms]">
          <h3 className="text-sm leading-6 font-semibold text-[#2a2f32]">Contact Info</h3>
          <address className="flex flex-col gap-5 not-italic">
            {contactInfo.map((contact, index) => (
              <div key={`contact-${index}`} className="flex items-center gap-3">
                {contact.icon}
                <span className="text-sm leading-6 text-[#2a2f32]">{contact.text}</span>
              </div>
            ))}
          </address>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-6 -translate-y-4 animate-fade-in [--animation-delay:1200ms]">
        <p className="text-sm text-[#2a2f32]">© Plumbing Pros. All Rights Reserved</p>
        <p className="text-sm text-[#2a2f32]">Website by IH Adventure And Creative</p>
      </div>
    </footer>
  );
};
