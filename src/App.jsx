import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ThingsToDo from "./pages/ThingsToDo";
import StatePark from "./pages/StatePark";
import Downtown from "./pages/Downtown";
import PlanYourVisit from "./pages/PlanYourVisit";
import Itinerary from "./pages/Itinerary";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/things-to-do" element={<ThingsToDo />} />
          <Route path="/state-park" element={<StatePark />} />
          <Route path="/downtown" element={<Downtown />} />
          <Route path="/plan-your-visit" element={<PlanYourVisit />} />
          <Route path="/itinerary" element={<Itinerary />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
