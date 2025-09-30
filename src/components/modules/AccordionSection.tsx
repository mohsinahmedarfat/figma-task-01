import { faqData } from "@/constants/faqData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

export const AccordionSection = () => {
  return (
    <section className="w-full bg-white py-20 animate-fade-in">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-16 px-4">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#1b1743] text-center tracking-[-0.03em] animate-fade-in [--animation-delay:0ms]">
          Frequently asked questions
        </h1>

        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full"
        >
          {faqData.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className={`border-b border-gray-200 animate-fade-in [--animation-delay:${index * 100 + 200}ms]`}
            >
              <AccordionTrigger className="py-4 md:py-7 lg:py-8 text-left hover:no-underline">
                <span className="text-lg md:text-xl font-semibold text-[#1b1743] tracking-[-0.03em]">
                  {faq.question}
                </span>
              </AccordionTrigger>

              <AccordionContent>
                <p className="text-base text-gray-600 leading-relaxed pb-5">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
