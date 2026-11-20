
import Image from "next/image";

const stories = [
  { src: "/success story 1.png", alt: "Student visa success story 1" },
  { src: "/success story 2.png", alt: "Student visa success story 2" },
  { src: "/success story 3.png", alt: "Student visa success story 3" },
  { src: "/success story 4.png", alt: "Student visa success story 4" },
  { src: "/success story 5.png", alt: "Student visa success story 5" },
];

export default function SuccessStories() {
  return (
    <section id="success-stories" className="success-stories">
      <h2 className="success-stories-heading">
        Success Stories
      </h2>

      <div className="success-stories-container">
        {stories.map((story, index) => (
          <div className="success-story" key={story.src}>
            <Image
              src={story.src}
              alt={story.alt}
              width={400}
              height={500}
              priority={index < 2}
              className="success-story-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
