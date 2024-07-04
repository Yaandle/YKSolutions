"use client";
import React from "react";
import Image from "next/image";
import styles from "./models.module.css";

export const ModelsContent = () => {
  const models = ["Apple", "Strawberry", "Grapes"];

  return (
    <div className={styles.container}>
      <h1 className={styles.largeHeading}>YOLOv8 Models</h1>
      <p className={styles.description}>
        Explore our pre-trained models for fruit detection.
      </p>
      <div className={styles.modelsContainer}>
        {models.map((model) => (
          <div key={model} className={styles.modelCard}>
            <Image src={`/${model.toLowerCase()}.jpg`} alt={model} width={200} height={150} />
            <h2 className={styles.modelName}>{model} Model</h2>
            <button className={styles.downloadButton}>Download Model</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelsContent;