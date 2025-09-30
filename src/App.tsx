import { AccordionSection } from "./components/modules/AccordionSection";
import { Contact } from "./components/modules/Contact";
import { Footer } from "./components/modules/Footer";


function App() {
  return (
    <div className="p-4 md:p-10 lg:p-32 flex flex-col justify-center items-center gap-40">
      <AccordionSection />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
