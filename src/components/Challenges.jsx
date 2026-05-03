export default function Challenges() {
  const items = [
    {
      title: "Low Productivity",
      text: "Inefficient farming practices and lack of modern techniques result in suboptimal yields and wasted resources.",
      delay: "0.1s",
    },
    {
      title: "Inefficient Resource Management",
      text: "Farmers face inefficient resource management due to high input costs, lack of optimization strategies, and difficulty maximizing land productivity, resulting in wasted resources and reduced profitability.",
      delay: "0.2s",
    },
    {
      title: "Late Detection of Crop Diseases",
      text: "Crop diseases are often detected too late due to reliance on manual inspection, lack of early detection tools, and limited access to agricultural expertise, leading to significant crop damage.",
      delay: "0.3s",
    },
  ];

  return (
    <section className="challenges">
      <div className="challenges-inner">
        <div className="challenges-left reveal">
          <h2>Challenges Facing Modern Farmers</h2>
          <p>
            Small-scale farmers struggle with obstacles that limit their success
            and threaten food security.
          </p>
          <img src="images/challenges.jpg" alt="Farming" />
        </div>

        <div className="challenges-right">
          {items.map((item) => (
            <div
              className="challenge-item reveal"
              key={item.title}
              style={{ transitionDelay: item.delay }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}