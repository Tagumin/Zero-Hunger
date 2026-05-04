import { Link } from "react-router-dom";

export default function Features() {
  const features = [
    {
      img: "images/crop_recommendation.jpg",
      alt: "Crop Recommendation",
      title: "Crop Recommendation Engine",
      text: "Get personalized suggestions based on your soil, climate, and resources. The system learns what grows best on your land.",
      to: "/crop-recommendation",
      isInternal: true,
      reverse: false,
    },
    {
      img: "images/optimization.jpg",
      alt: "Smart Decision Support",
      title: "Smart Decision Support System",
      text: "Real-time data helps you plan planting, irrigation, and harvest timing. Make moves with confidence, not guesswork.",
      to: "#",
      isInternal: false,
      reverse: true,
    },
    {
      img: "images/disease_identification.jpg",
      alt: "Disease Identification",
      title: "Disease Identification",
      text: "Spot problems early before they spread. Quick identification means faster action and fewer losses across your entire crop.",
      to: "/disease-care",
      isInternal: true,
      reverse: false,
    },
  ];

  return (
    <section className="features" id="features">
      <div className="features-inner">
        <h2 className="section-title-center reveal">Our Features</h2>

        {features.map((feature) => (
          <div
            className={`feature-block${feature.reverse ? " reverse" : ""} reveal`}
            key={feature.title}
          >
            <img className="feature-img" src={feature.img} alt={feature.alt} />
            <div className="feature-content">
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
              {feature.isInternal ? (
                <Link to={feature.to} className="btn-feature">
                  Explore
                </Link>
              ) : (
                <a href={feature.to} className="btn-feature">
                  Explore
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
