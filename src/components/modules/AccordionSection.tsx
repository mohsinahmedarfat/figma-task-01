import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

const faqData = [
  {
    id: "item-1",
    question: "Do plumbers deal with heating?",
    answer:
      "Some of our local plumbers are also gas registered and experienced working on heating systems, bathrooms and kitchens.",
    defaultOpen: true,
  },
  {
    id: "item-2",
    question: "Do you charge a call out fee?",
    answer:
      "Yes, there is a standard call-out fee, but it may be waived if you proceed with the repair or service.",
    defaultOpen: false,
  },
  {
    id: "item-3",
    question: "How quickly can your company send out an engineer?",
    answer:
      "Our engineers can typically be dispatched within 24 hours of your service request, depending on availability.",
    defaultOpen: false,
  },
  {
    id: "item-4",
    question: "What should I do if I get a water leak?",
    answer:
      "Turn off your main water supply immediately, try to contain the leak, and call our emergency plumbing service as soon as possible.",
    defaultOpen: false,
  },
];

export const AccordionSection = () => {
  return (
    <div
      className="flex flex-col w-full max-w-[1600px] items-center justify-center gap-32 relative bg-white"
      data-model-id="1002:298"
    >
      <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto] translate-y-[-1rem] animate-fade-in  ">
        <h1 className="relative self-stretch mt-[-1.00px] font-heading-text-web-h1-48px font-[number:var(--heading-text-web-h1-48px-font-weight)] text-[#1b1743] text-[length:var(--heading-text-web-h1-48px-font-size)] text-center tracking-[var(--heading-text-web-h1-48px-letter-spacing)] leading-[var(--heading-text-web-h1-48px-line-height)] [font-style:var(--heading-text-web-h1-48px-font-style)]">
          Frequently asked questions
        </h1>
      </div>

      <div className="flex-col max-w-[920px] gap-8 w-full flex-[0_0_auto] flex items-start relative translate-y-[-1rem] animate-fade-in   [--animation-delay:200ms]">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full"
        >
          {faqData.map((faq, index) => (
            <AccordionItem key={faq.id} value={faq.id} className="border-none">
              <AccordionTrigger className="gap-10 self-stretch w-full flex-[0_0_auto] flex items-start relative hover:no-underline py-0 pb-5">
                <div className="flex flex-col items-start gap-5 relative flex-1 grow">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#1b1743] text-[28px] tracking-[-0.84px] leading-10 text-left">
                    {faq.question}
                  </div>
                </div>
              </AccordionTrigger>

              {faq.answer && (
                <AccordionContent className="pb-0">
                  <div className="relative self-stretch font-body-text-web-b1-18px font-[number:var(--body-text-web-b1-18px-font-weight)] text-[#2a2f32] text-[length:var(--body-text-web-b1-18px-font-size)] tracking-[var(--body-text-web-b1-18px-letter-spacing)] leading-[var(--body-text-web-b1-18px-line-height)] [font-style:var(--body-text-web-b1-18px-font-style)] pb-5">
                    {faq.answer}
                  </div>
                </AccordionContent>
              )}

              {index < faqData.length - 1 && (
                <img
                  className="relative self-stretch w-full flex-[0_0_auto] object-cover pb-8"
                  alt="Line"
                  src="https://c.animaapp.com/mg6l8xe3KGq9W6/img/line.svg"
                />
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
