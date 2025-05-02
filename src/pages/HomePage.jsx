import Cardcard from "../components/Cardcard";
import Footer from "../components/Footer";
import Hero from "../components/hero";
import Navbar from "../components/Navbar";
import Percentage from "../components/Percentage";
import Staffcard from "../components/Staffcard";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="flex pl-44 pr-44 gap-11">
        <Cardcard
          span1="10% list growth"
          span2="& sales spike in tough niche"
          para="It’s nice that with GetResponse, we have the tools and integrations we need within our budget."
          btnT="Read case study"
        />
        <Cardcard
          span1="75% of all public sales"
          span2="from email autoresponders"
          para="Together with GetResponse, we’ve been able to convince customers of need, culminating in compelling sales."
          btnT="Read case study"
        />
        <Cardcard
          span1="Up to $1,000"
          span2="for every 1,000 emails sent"
          para="Regarding revenue contribution, the email marketing channel is like free money for us."
          btnT="Read case study"
        />
      </div>

      <Percentage />

      <div className="flex ml-[10%]">
        <Staffcard
          Fname="Gabriel Steven"
          image="https://randomuser.me/api/portraits/men/32.jpg"
          position="HR"
          department="Human Resource"
        />
        <Staffcard
          Fname="Mary Davis"
          image="https://randomuser.me/api/portraits/women/44.jpg"
          position="HR"
          department="Human Resource"
        />
        <Staffcard
          Fname="Susan Paul"
          image="https://randomuser.me/api/portraits/women/44.jpg"
          position="HR"
          department="Human Resource"
        />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
