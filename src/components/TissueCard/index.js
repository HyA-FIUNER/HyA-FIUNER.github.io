import React, { useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './styles.module.css';
import ModalGallery from '../ModalGallery';

const TissueCardIntern = ({ title, category, description, images }) => {

    if (!images || images.length == 0) return null;

    const url = document.location.href;
    const imagePorta = images[0];

    const [slideIndex, setSlideIndex] = useState();

    return (
        <div className={styles.container}>
            <div className={styles.card} onClick={() => setSlideIndex(1)}>
                <div className={styles.cardText}>
                    <div className={styles.titleTotal} >
                        <h2>{title}</h2>
                        <div className={styles.category}>{category}</div>
                        <div className={styles.description}>{description}</div>
                    </div>
                </div>
                <div className={styles.cardImage}>
                    <div className={styles.imagen} style={{ backgroundImage: 'url( ' + imagePorta.src + ')' }}>
                    </div>
                </div>
            </div>

            {slideIndex && <ModalGallery images={images} slideIndex={slideIndex} setSlideIndex={setSlideIndex} />}
        </div>
    );
};

const TissueCard = ({ title, category, description, images }) => {
    return (
        <BrowserOnly>
            {() =>
                <TissueCardIntern
                    title={title}
                    category={category}
                    description={description}
                    images={images}
                />
            }
        </BrowserOnly>
    );
};

export default TissueCard;