export default function About() {
  const cards = [
    {
      img: "images/food_security.jpg",
      alt: "Food Security",
      title: "Food Security",
      text: "Ensuring all people have access to sufficient, safe, and nutritious food throughout the year.",
      delay: "0.1s",
    },
    {
      img: "images/improved_nutrition.jpg",
      alt: "Improved Nutrition",
      title: "Improved Nutrition",
      text: "Ending all forms of malnutrition and addressing the nutritional needs of vulnerable populations.",
      delay: "0.2s",
    },
    {
      img: "images/sustainable_agriculture.jpg",
      alt: "Sustainable Agriculture",
      title: "Sustainable Agriculture",
      text: "Promoting resilient agricultural practices that increase productivity and production sustainably.",
      delay: "0.3s",
    },
  ];

  return (
    <section className="about-sdg" id="about">
      <div className="about-sdg-inner">
        <div className="about-top reveal">
          <p className="label-about">About</p>
          <h2 className="sdg-title">SDG 2: Zero Hunger</h2>
          <p className="sdg-sub">
            End hunger, achieve food security and improved nutrition, and
            promote sustainable agriculture by 2030
          </p>
          <a href="#" className="btn-learn">
            Learn more
          </a>
        </div>

        <div className="about-cards">
          {cards.map((card) => (
            <div
              className="about-card reveal"
              key={card.title}
              style={{ transitionDelay: card.delay }}
            >
              <img src={card.img} alt={card.alt} />
              <div className="about-card-title">{card.title}</div>
              <p className="about-card-text">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}