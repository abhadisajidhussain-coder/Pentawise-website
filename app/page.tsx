
import FAQs from "../components/FAQs";
import Counter from "../components/counter";
import DestinationShowcase from "../components/destinationshowcase";
import Services from "../components/services";
import Image from "next/image";
import UniversityPartners from "../components/universities_partners";
import Success_Stories from "../components/successs_stories";
import SYJ from "../components/SYJ";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-trust">
          
            <div className="student-avatars">
              <Image
                src="/group.png"
                alt="Student community"
                width={90}
                height={32}
                className="student-trust-image"
              />
            </div>


          <p>Trusted By 1000&apos;s of Students</p>
        </div>

        <h1>
          Vibing Your Way To
          <br />
          Global Campuses
        </h1>
        <div className="hero-details">
        <p className="hero-description">
          Pentawise is your trusted partner for studying abroad,
          guiding you to top universities across 20+ countries.
          With multiple of
          <br/>
          successful student journeys, we make
          global education simple, personalized, and full of
          possibilities.
        </p>

        
          <div className="hero-stats">
          <div className="hero-stat">
            <h2><Counter end={20} suffix="+" /></h2>
            <p>Countries Panel</p>
          </div>

          <div className="hero-stat">
            <h2><Counter end={500} suffix="+" /></h2>
            <p>Partner Universities</p>
          </div>

          <div className="hero-stat">
            <h2><Counter end={50000} suffix="+" /></h2>
            <p>Courses Available</p>
          </div>

          <div className="hero-stat">
            <h2><Counter end={10} suffix="+" /></h2>
            <p>Years Of Experience</p>
          </div>
        </div>
      </div>
      </section>
      <div id="countries">
        <DestinationShowcase />
      </div>

      <div id="services">
        <Services />
      </div>

      <UniversityPartners />
      <div id="success-stories">
        <Success_Stories />
      </div>

      <div id="contact">
        <SYJ />
      </div>
      
      <FAQs />
    </>
  );
}
