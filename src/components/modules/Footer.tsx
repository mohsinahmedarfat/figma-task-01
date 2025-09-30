import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

export const Footer = () => {
  const servicesLinks = ["Plumbing", "Drainage", "Bathrooms", "Commercial"];

  const usefulLinks = ["Contact Us", "Updates", "About Us", "Rates"];

  const additionalLinks = [
    "Customer Services",
    "Updates",
    "Locations",
    "Sitemap",
  ];

  const contactInfo = [
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      text: "1 Sail Street, London, SE11 6NQ",
    },
    {
      icon: <MailIcon className="w-6 h-6" />,
      text: "enquiries@PlumbingPros.com",
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      text: "020 4527 6474",
    },
  ];

  return (
    <footer
      className="flex flex-col w-full max-w-[1600px] items-center gap-20 relative bg-white translate-y-[-1rem] animate-fade-in"
      data-model-id="1002:57"
    >
      <div className="flex items-start gap-[120px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-[260px] items-start justify-center gap-7 relative translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]">
          <h2 className="relative self-stretch mt-[-1.00px] font-heading-text-web-h2-32px font-[number:var(--heading-text-web-h2-32px-font-weight)] text-black text-[length:var(--heading-text-web-h2-32px-font-size)] tracking-[var(--heading-text-web-h2-32px-letter-spacing)] leading-[var(--heading-text-web-h2-32px-line-height)] [font-style:var(--heading-text-web-h2-32px-font-style)]">
            Business Logo
          </h2>

          <img
            className="relative flex-[0_0_auto]"
            alt="Social media icons"
            src="https://c.animaapp.com/mg6le9siyTOZVB/img/frame-97.svg"
          />
        </div>

        <div className="flex items-center justify-center gap-20 relative flex-1 grow">
          <nav className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto] translate-y-[-1rem] animate-fade-in [--animation-delay:400ms]">
            <h3 className="mt-[-1.00px] font-semibold leading-6 relative w-fit [font-family:'Inter',Helvetica] text-[#2a2f32] text-sm tracking-[0] whitespace-nowrap">
              Our Services
            </h3>

            <ul className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
              {servicesLinks.map((service, index) => (
                <li key={`service-${index}`}>
                  <a
                    href="#"
                    className="relative w-fit mt-[-1.00px] font-body-text-tab-b1-14px font-[number:var(--body-text-tab-b1-14px-font-weight)] text-[#2a2f32] text-[length:var(--body-text-tab-b1-14px-font-size)] tracking-[var(--body-text-tab-b1-14px-letter-spacing)] leading-[var(--body-text-tab-b1-14px-line-height)] whitespace-nowrap [font-style:var(--body-text-tab-b1-14px-font-style)] hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="inline-flex items-center gap-10 relative flex-[0_0_auto]">
            <nav className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto] translate-y-[-1rem] animate-fade-in [--animation-delay:600ms]">
              <h3 className="mt-[-1.00px] font-semibold leading-6 relative w-fit [font-family:'Inter',Helvetica] text-[#2a2f32] text-sm tracking-[0] whitespace-nowrap">
                Useful Links
              </h3>

              <ul className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                {usefulLinks.map((link, index) => (
                  <li key={`useful-${index}`}>
                    <a
                      href="#"
                      className="relative w-fit mt-[-1.00px] font-body-text-tab-b1-14px font-[number:var(--body-text-tab-b1-14px-font-weight)] text-[#2a2f32] text-[length:var(--body-text-tab-b1-14px-font-size)] tracking-[var(--body-text-tab-b1-14px-letter-spacing)] leading-[var(--body-text-tab-b1-14px-line-height)] whitespace-nowrap [font-style:var(--body-text-tab-b1-14px-font-style)] hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto] translate-y-[-1rem] animate-fade-in [--animation-delay:800ms]">
              <h3 className="mt-[-1.00px] font-semibold leading-6 relative w-fit [font-family:'Inter',Helvetica] text-[#2a2f32] text-sm tracking-[0] whitespace-nowrap">
                Useful Links
              </h3>

              <ul className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                {additionalLinks.map((link, index) => (
                  <li key={`additional-${index}`}>
                    <a
                      href="#"
                      className="relative w-fit mt-[-1.00px] font-body-text-tab-b1-14px font-[number:var(--body-text-tab-b1-14px-font-weight)] text-[#2a2f32] text-[length:var(--body-text-tab-b1-14px-font-size)] tracking-[var(--body-text-tab-b1-14px-letter-spacing)] leading-[var(--body-text-tab-b1-14px-line-height)] whitespace-nowrap [font-style:var(--body-text-tab-b1-14px-font-style)] hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-6 relative flex-1 grow translate-y-[-1rem] animate-fade-in [--animation-delay:1000ms]">
          <h3 className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#2a2f32] text-sm tracking-[0] leading-6 whitespace-nowrap">
            Contact Info
          </h3>

          <address className="flex flex-col w-[246px] items-start gap-5 relative flex-[0_0_auto] not-italic">
            {contactInfo.map((contact, index) => (
              <div
                key={`contact-${index}`}
                className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]"
              >
                {contact.icon}
                <span className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#2a2f32] text-sm tracking-[0] leading-6 whitespace-nowrap">
                  {contact.text}
                </span>
              </div>
            ))}
          </address>
        </div>
      </div>

      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] translate-y-[-1rem] animate-fade-in [--animation-delay:1200ms]">
        <p className="relative w-fit mt-[-1.00px]    -50 [font-family:'Inter',Helvetica] font-normal text-[#2a2f32] text-sm tracking-[0] leading-5 whitespace-nowrap">
          © Plumbing Pros. All Rights Reserved
        </p>

        <p className="relative w-fit mt-[-1.00px]    -50 [font-family:'Inter',Helvetica] font-normal text-[#2a2f32] text-sm tracking-[0] leading-5 whitespace-nowrap">
          Website by IH Adventure And Creative
        </p>
      </div>
    </footer>
  );
};
