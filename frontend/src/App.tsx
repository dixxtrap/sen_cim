import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./interfaces/components/footer";
import { Header } from "./interfaces/components/header";
import { Home } from "./interfaces/pages/home";
import { Wish } from "./interfaces/pages/wish";
import { WishCreate } from "./interfaces/pages/wish_create";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="py-0">
          <header></header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/wish">
                <Route path="" element={<Wish />}  index/>
                <Route path="create" element={<WishCreate />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
