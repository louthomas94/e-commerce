import React, { useState } from "react";
import "../styles/pages/homepage.css";
import Marquee from "react-fast-marquee";

const HomePage = () => {
  const products = [
    { id: 1, name: "Tapis Floral", image: "/img1.jpg" },
    { id: 2, name: "Coussin Tufté", image: "/img2.jpg" },
    { id: 3, name: "Miroir Tufté", image: "/img3.jpg" },
    { id: 4, name: "Tapis Arc-en-ciel", image: "/img4.jpg" },
  ];

  const questions = [
    {
      id: 1,
      question: "Qu'est ce que le tufting ?",
      answer:
        "Le tufting est une technique de création artisanale qui consiste à insérer des fils dans une toile à l'aide d'un pistolet, appelé tufting gun, créant ainsi des motifs telle une peinture sur une toile avec des textures uniques.",
    },
    {
      id: 2,
      question: "Puis-je participer à un atelier même si je suis débutant ?",
      answer:
        "Oui, les ateliers sont accessibles aux débutants. Je vous guide étape par étape.",
    },
    {
      id: 3,
      question: "Faut-il apporter quelque chose pour participer à l'atelier ?",
      answer:
        "Tout le matériel est fourni sur place. Vous n'avez rien à apporter !",
    },
    {
      id: 4,
      question: "Est-ce que vous proposez des ateliers privés ?",
      answer:
        "Oui, il est possible d'organiser un atelier privé pour des groupes ou des événements spéciaux.",
    },
    {
      id: 5,
      question: "Comment entretenir mon tapis mural ?",
      answer:
        "Aspirez doucement votre tapis pour enlever la poussière et évitez l'exposition directe au soleil.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <section className="présentation">
        <h2 className="hometitre">Bienvenue dans <br /> l'univers du Tufting</h2>
        <p className="hometext">
          Envie d'ajouter une touche de douceur et de créativité à votre <br />
          quotidien ? Je vous invite à découvrir mes créations uniques <br />
          faites à la main.
        </p>
        <a href="/boutique" className="homebutton">Découvrir</a>
      </section>

      <Marquee speed={50} pauseOnHover={true} className="marquee-container">
        {products.map((product) => (
          <div key={product.id} className="marquee-item">
            <img src={product.image} alt={product.name} className="marquee-img" />
            <p className="marquee-text">{product.name}</p>
          </div>
        ))}
      </Marquee>

      <div className="faq-container">
        <h2 className="faq-title">FAQ</h2>
        {questions.map((item, index) => (
          <div key={item.id} className={`faq-item ${openIndex === index ? "open" : ""}`}>
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {item.question}
            </button>
            {openIndex === index && <p className="faq-answer">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;