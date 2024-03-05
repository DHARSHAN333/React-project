import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import './ExercisePage.css'; // Import external CSS file

const ExerciseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ExerciseTitle = styled(motion.h2)`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ExerciseDescription = styled(motion.p)`
  font-size: 18px;
  line-height: 1.5;
  margin-top: 20px;
`;

const ImageContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const ExerciseImage = styled(motion.img)`
  width: 100%;
  max-width: 100%;
  height: auto;
`;

const ImageDescription = styled(motion.p)`
  font-size: 14px;
  text-align: center;
`;

const ExercisePage = () => {
  // Exercise images and descriptions
  const images = [
    { url: "https://tse4.mm.bing.net/th?id=OIP.rslUn2uC4PdE2LNcyCLJIAHaEo&pid=Api&P=0&h=180", description: "Image 1 Description" },
    { url: "https://tse4.mm.bing.net/th?id=OIP.rslUn2uC4PdE2LNcyCLJIAHaEo&pid=Api&P=0&h=180", description: "Image 2 Description" },
    { url: "https://tse4.mm.bing.net/th?id=OIP.rslUn2uC4PdE2LNcyCLJIAHaEo&pid=Api&P=0&h=180", description: "Image 3 Description" },
    { url: "https://tse4.mm.bing.net/th?id=OIP.rslUn2uC4PdE2LNcyCLJIAHaEo&pid=Api&P=0&h=180", description: "Image 4 Description" },
    { url: "https://tse4.mm.bing.net/th?id=OIP.rslUn2uC4PdE2LNcyCLJIAHaEo&pid=Api&P=0&h=180", description: "Image 5 Description" }
  ];

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.2 } }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.4 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } }
  };

  return (
    <ExerciseContainer>
      <ExerciseTitle
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        Exercise Demonstration
      </ExerciseTitle>
      <ExerciseDescription
        variants={descriptionVariants}
        initial="hidden"
        animate="visible"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
        Sed cursus ante dapibus diam. Sed nisi.
      </ExerciseDescription>
      <ImageContainer>
        {images.map((image, index) => (
          <motion.div
            key={index}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="image-wrapper" // Add className for external CSS styling
          >
           <ExerciseImage
             src={image.url}
             
          />         

<ImageDescription>{image.description}</ImageDescription>
          </motion.div>

           
        ))}
      </ImageContainer>
    </ExerciseContainer>
  );
};

export default ExercisePage;