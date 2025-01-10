import React from 'react';
import '../styles/pages/homepage.css'
import PhotoTapis from '../assets/homepage/photo_home.png'

const HomePage = () => {
  return (
    <div>
      <section className='présentation'>
        <img className='hometapis' src={PhotoTapis} alt='tapis tufté' />
        <h2 className='hometitre'>Bienvenue dans <br /> l'univers du Tufting</h2>
        <p className='hometext'>Envie d'ajouter une touche de douceur et de créativité à votre <br /> quotidien ? Je vous invite à découvrir mes créations uniques <br /> faites à la main</p>
        <a href="/boutique"><button className='button'>Découvrir</button></a>
      </section>
    </div>
  );
};

export default HomePage;