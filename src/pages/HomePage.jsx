import React, { useState } from "react";
import "../styles/pages/homepage.css";
import IMG from "../assets/homepage/photo_home.png";
import CustomerReview from "../components/CustomerReview";
import ProductSlider from "../components/ProductSlider";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import decor1 from "../assets/decor1.jpg";
import decor2 from "../assets/decor2.jpg";
import decor3 from "../assets/decor3.jpg";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";

const HomePage = () => {
  const wallArtProducts = [
    { id: 1, name: "Tapis Floral", image: img1 },
    { id: 2, name: "Coussin Tufté", image: img2 },
    { id: 3, name: "Miroir Tufté", image: img3 },
    { id: 4, name: "Tapis Arc-en-ciel", image: img4 },
  ];

  const decorProducts = [
    { id: 5, name: "Coussin Décoratif", image: decor1 },
    { id: 6, name: "Suspension Murale", image: decor2 },
    { id: 7, name: "Tableau Textile", image: decor3 },
  ];

  const customerReviews = [
    {
      id: 1,
      name: "Sophie L.",
      image: avatar1,
      review: "J'adore mes nouveaux tapis muraux ! Ils apportent tant de chaleur et de personnalité à mon salon.",
    },
    {
      id: 2,
      name: "Marc T.",
      image: avatar2,
      review: "Un atelier tufting incroyable. J'ai appris une technique créative et reparti avec mon propre tapis.",
    },
    {
      id: 3,
      name: "Émilie R.",
      image: avatar3,
      review: "Des produits de qualité et un service client exceptionnel. Je recommande à 100% !",
    },
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
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Bienvenue dans l'univers du Tufting</h1>
            <p>
              Envie d'ajouter une touche de douceur et de créativité à votre
              quotidien ? Je vous invite à découvrir mes créations uniques
              faites à la main.
            </p>
            <a href="/boutique" className="hero-button">Découvrir</a>
          </div>
          <div className="hero-image">
            <img
              src={IMG}
              alt="Création de tapis tufté"
            />
          </div>
        </div>
      </section>

      <ProductSlider category="Nos Tapis Muraux" products={wallArtProducts} />
      <ProductSlider category="Décorations" products={decorProducts} />

      <div className="customer-reviews-section">
        <h2 className="reviews-title">Ce que nos clients disent</h2>
        <div className="reviews-container">
          {customerReviews.map((review) => (
            <CustomerReview
              key={review.id}
              name={review.name}
              image={review.image}
              review={review.review}
            />
          ))}
        </div>
      </div>

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
