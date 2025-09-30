import { AccordionSection } from "./components/modules/AccordionSection";
import { Contact } from "./components/modules/Contact";
import { Footer } from "./components/modules/Footer";


function App() {
  return (
    <div className="p-32 flex flex-col justify-center items-center gap-32">
      <AccordionSection />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
