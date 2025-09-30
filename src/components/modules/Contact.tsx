import { ArrowRightIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const Contact = () => {
  return (
    <div
      className="flex flex-col w-full max-w-[1600px] justify-center gap-32 items-center relative bg-white"
      data-model-id="1002:36"
    >
      <Card className="w-full bg-[#0058ff] border-none rounded-3xl -translate-y-4 animate-fade-in [--animation-delay:0ms]">
        <CardContent className="flex flex-col items-center gap-4 md:gap-6 lg:gap-8 p-4 md:p-10 lg:p-20">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center tracking-[-0.03em] leading-tight -translate-y-4 animate-fade-in [--animation-delay:200ms]">
            Get In Touch
          </h1>

          {/* Paragraph */}
          <p className="text-base md:text-lg text-white text-center leading-relaxed -translate-y-4 animate-fade-in [--animation-delay:400ms]">
            Contact us now to enquire our plumbing services, whether you have a
            commercial project that requires support, or a domestic plumbing
            task that needs the attention of a trusted professional.
          </p>

          {/* Button */}
          <Button className="inline-flex h-[62px] gap-2 !px-6 py-4 rounded-lg bg-white hover:bg-gray-50 text-[#0058ff] font-bold text-base tracking-[-0.01em] leading-[30px] font-sans transition-colors -translate-y-4 animate-fade-in [--animation-delay:600ms]">
            Book a Professional Plumber
            <ArrowRightIcon className="w-6 h-6" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
