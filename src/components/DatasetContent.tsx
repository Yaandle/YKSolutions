"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./dataset.module.css";

export const DatasetContent = () => {
  const [email, setEmail] = useState("");
  const [showDownload, setShowDownload] = useState(false);
  const [selectedFruit, setSelectedFruit] = useState("strawberry");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowDownload(true);
  };

  const handleFruitSelection = (fruit: string) => {
    setSelectedFruit(fruit);
    setShowDownload(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.largeHeading}>Download YOLOv8 Dataset</h1>
      <p className={styles.description}>
        Download our high-quality datasets for your machine learning projects.
      </p>
      <div className={styles.optionsContainer}>
        <button onClick={() => handleFruitSelection("strawberry")} className={styles.option}>
          Strawberry
        </button>
        <button onClick={() => handleFruitSelection("grapes")} className={styles.option}>
          Grapes
        </button>
        <button onClick={() => handleFruitSelection("apple")} className={styles.option}>
          Apple
        </button>
      </div>
      <div className={styles.spacer} />
      <h2 className={styles.heading}>{selectedFruit.charAt(0).toUpperCase() + selectedFruit.slice(1)} Dataset</h2>
      <div className={styles.datasetContainer}>
        <Image src={`/${selectedFruit}.jpg`} alt={selectedFruit} width={300} height={200} />
      </div>
      <div className={styles.spacer} />
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>
          Get Download Link
        </button>
      </form>
      {showDownload && (
        <div className={styles.downloadContainer}>
          <a href={`/${selectedFruit}.zip`} download className={styles.downloadLink}>
            Download {selectedFruit.charAt(0).toUpperCase() + selectedFruit.slice(1)} Dataset
          </a>
        </div>
      )}
    </div>
  );
};

export default DatasetContent;