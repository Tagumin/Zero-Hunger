export default function Mission() {
  const cards = [
    {
      title: "Improve Agricultural Productivity",
      text: "Leverage AI and data analytics to help farmers increase yields while reducing resource waste and environmental impact.",
    },
    {
      title: "Reduce Crop Losses",
      text: "Provide early warning systems and proactive solutions to minimize losses from pests, diseases, and adverse weather.",
    },
    {
      title: "Provide Accessible Knowledge",
      text: "Democratize access to agricultural expertise through easy-to-use digital tools designed for farmers of all backgrounds.",
    },
    {
      title: "Support Sustainable Practices",
      text: "Promote environmentally friendly farming methods that preserve soil health and biodiversity for future generations.",
    },
  ];

  return (
    <section className="mission">
      <div className="mission-inner">
        <h2 className="section-title-center reveal">Our Mission</h2>
        <div className="mission-grid reveal">
          {cards.map((card) => (
            <div className="mission-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}