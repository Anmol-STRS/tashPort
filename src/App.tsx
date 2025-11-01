import { Hero, Moodboard, Stories, AmbitionLadder, Overthinking, LaughFile, LittleJoys, Footer } from "./components";

const App = () => {
  return (
    <div className="page-shell min-h-screen text-charcoal">
      <a
        href="#main-content"
        className="focus-ring absolute left-4 top-4 z-50 inline-flex -translate-y-16 rounded-full bg-cream px-4 py-2 text-sm text-cocoa shadow-sm transition-transform duration-200 focus:translate-y-0"
      >
        Skip to content
      </a>
      <Hero />
      <main id="main-content">
        <Moodboard />
        <Stories />
        <AmbitionLadder />
        <Overthinking />
        <LaughFile />
        <LittleJoys />
      </main>
      <Footer />
    </div>
  );
};

export default App;
