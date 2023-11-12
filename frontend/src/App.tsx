import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./interfaces/components/footer";
import { Header } from "./interfaces/components/header";
import { Home } from "./interfaces/pages/home";
import { Wish } from "./interfaces/pages/wish";
import { WishCreate } from "./interfaces/pages/wish_create";
import { Provider } from "react-redux";
import store from "./cores/features";
import { DeceasedDetails } from "./interfaces/pages/deceased_details";
import { SharedFlowerCreate } from "./interfaces/pages/shared_flower_create";
import { Obituary } from "./interfaces/pages/obituary";
import { ObituaryCreate } from "./interfaces/pages/obituary_create";
import { AboutUs } from "./interfaces/pages/about_us";
import { LegalDisclaimer } from "./interfaces/pages/legal_disclaimer";
import { PrivacyPolicy } from "./interfaces/pages/privacy_policy";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
        <div id='top'/>
          <Header />
          <div className="py-0">
            <header></header>
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/wish" element={<Wish />} index />
                <Route path="/wish/create" element={<WishCreate />} />
                <Route path="/shared_flower/create" element={<SharedFlowerCreate />} />
                <Route path="/deceased/:id" element={<DeceasedDetails />} />
                <Route path="/obituary" element={<Obituary />} />
                <Route path="/obituary/create" element={<ObituaryCreate />} />
                <Route path="/about_us" element={<AboutUs />} />
                <Route path="/legal_disclaimer" element={<LegalDisclaimer />} />
                <Route path="/privacy_policy" element={<PrivacyPolicy />} />
                
                <Route path="*" element={<div className="text-5xl ">404 page not found</div>}/>
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
