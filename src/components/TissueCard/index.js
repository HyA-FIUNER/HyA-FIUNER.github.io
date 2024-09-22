import React, { useState, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import ModalGallery from '../ModalGallery';
import styles from './styles.module.css';

const TissueCardIntern = ({ title, category, description, images }) => {
    if (!images || images.length === 0) return null;

    const [slideIndex, setSlideIndex] = useState(0); // Inicializa con la primera imagen
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal
    const [imageLoaded, setImageLoaded] = useState(false); // Estado para verificar si la imagen se ha cargado

    // Función para abrir el modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Verifica si la imagen se ha cargado
    useEffect(() => {
        const img = new Image();
        img.src = images[slideIndex].src;
        img.onload = () => setImageLoaded(true);
        img.onerror = () => setImageLoaded(false);
    }, [slideIndex, images]);

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.cardImage}>
                    <div 
                        className={styles.imagen} 
                        style={{ backgroundImage: imageLoaded ? `url(${images[slideIndex].src})` : 'none' }} // Cambia el fondo según el índice
                        onClick={openModal} // Abre el modal al hacer clic
                    >
                        {imageLoaded ? (
                            <span className={styles.description}>
                                {images[slideIndex].caption} {/* Muestra la descripción */}
                            </span>
                        ) : (
                            <span className={styles.loading}>Cargando...</span> // Muestra un mensaje de carga
                        )}
                    </div>
                </div>
                <div className={styles.bulletsContainer}>
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`${styles.bullet} ${slideIndex === index ? styles.activeBullet : ''}`}
                            onClick={() => setSlideIndex(index)} // Cambia el índice al hacer clic
                        />
                    ))}
                </div>
            </div>

            {isModalOpen && (
                <ModalGallery 
                    images={images} 
                    slideIndex={slideIndex} 
                    setSlideIndex={setSlideIndex} 
                    closeModal={closeModal} // Pasa la función para cerrar el modal
                />
            )}
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
