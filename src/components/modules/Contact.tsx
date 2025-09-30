import { ArrowRightIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const Contact = () => {
  return (
    <div
      className="flex flex-col w-full max-w-[1600px] justify-center gap-32  items-center relative bg-white"
      data-model-id="1002:36"
    >
      <Card className="w-full bg-[#0058ff] border-none rounded-3xl translate-y-[-1rem] animate-fade-in    [--animation-delay:0ms]">
        <CardContent className="flex flex-col items-center gap-8 p-20">
          <h1 className="relative self-stretch mt-[-1.00px] font-heading-text-web-h1-48px font-[number:var(--heading-text-web-h1-48px-font-weight)] text-white text-[length:var(--heading-text-web-h1-48px-font-size)] text-center tracking-[var(--heading-text-web-h1-48px-letter-spacing)] leading-[var(--heading-text-web-h1-48px-line-height)] [font-style:var(--heading-text-web-h1-48px-font-style)] translate-y-[-1rem] animate-fade-in    [--animation-delay:200ms]">
            Get In Touch
          </h1>

          <p className="relative font-body-text-web-b1-18px font-[number:var(--body-text-web-b1-18px-font-weight)] text-white text-[length:var(--body-text-web-b1-18px-font-size)] text-center tracking-[var(--body-text-web-b1-18px-letter-spacing)] leading-[var(--body-text-web-b1-18px-line-height)] [font-style:var(--body-text-web-b1-18px-font-style)] translate-y-[-1rem] animate-fade-in    [--animation-delay:400ms]">
            Contact us now to enquire our plumbing services, whether you have a
            commercial project that requires support, or a domestic plumbing
            task that needs the attention of a trusted professional.
          </p>

          <Button className="inline-flex h-[62px] gap-2 px-6 py-2.5 rounded-lg bg-white hover:bg-gray-50 text-[#0058ff] font-bold text-base tracking-[-0.16px] leading-[30px] [font-family:'Inter',Helvetica] transition-colors translate-y-[-1rem] animate-fade-in    [--animation-delay:600ms]">
            Book a Professional Plumber
            <ArrowRightIcon className="w-6 h-6" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
