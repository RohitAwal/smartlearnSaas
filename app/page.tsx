
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main>
      <h1>Popular Companion</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neuro The Brainy Explorer"
          topic="Neutral Network of the brain"
          subject="science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="456"
          name="Countcy the number wizard"
          topic="Derivatives and Integal"
          subject="Maths"
          duration={45}
          color="#e5d0ff"
        />
        <CompanionCard
          id="789"
          name="Verbal the vocabulary builder"
          topic="English Literature"
          subject="Language"
          duration={45}
          color="#"
        />
      </section>
      <section className="home-section">
        <CompanionsList 
        tittle="Recently Completed Session"
        companions={recentSessions}
        classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
