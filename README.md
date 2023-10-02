# VitalAI Healthcare Platform - Frontend

![VitalAI Logo](https://github.com/Vital-Ai-GH/frontend-web/blob/main/src/assets/Vital-Ai-Cover-Logo.png)

Welcome to the frontend repository of VitalAI, a cutting-edge healthcare platform that aims to provide fast and reliable medical care services to patients through the power of Artificial Intelligence.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Google Collaboratory Notebooks](#google-collaboratory-notebooks)
- [Screenshots Demo](#screenshots-demo)
- [Contributing](#contributing)

## Introduction

VitalAI is a revolutionary healthcare system that connects patients with licensed medical professionals through a user-friendly web and mobile application. Our platform incorporates AI health assistants and advanced analytics insights to deliver personalized and efficient medical solutions to patients in need.

## Features

- **Real-time GPS Locator:** Instantly locate patients during emergencies or in need of quick medical help.
- **AI Health Assistant:** Advanced AI-powered tools provide accurate diagnosis and personalized healthcare recommendations.
- **Fast Medical Care Access:** Connect patients to licensed medical professionals for quick and reliable care.
- **User-friendly Interface:** Intuitive design for easy navigation and seamless user experience.
- **Secure Authentication:** Protects sensitive user information with encrypted authentication.

## Tech Stack

Our frontend is built using modern technologies and libraries to ensure a smooth and responsive user interface:

- [React](https://reactjs.org/): A popular JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/): Adds static typing to JavaScript for enhanced developer productivity.
- [React Router](https://reactrouter.com/): Handles navigation and routing within the application.
- [Dayjs](https://day.js.org/): A fast and lightweight library for parsing, validating, manipulating, and formatting dates.
- [React Query](https://react-query.tanstack.com/): Enables efficient data fetching and synchronization for improved performance.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for building custom and responsive designs.
- [Material-UI](https://material-ui.com/): Provides a rich set of UI components for a modern and polished look.

## Installation

To set up the frontend locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Vital-Ai-GH/frontend-web.git`
2. Install dependencies: `cd vitalai-frontend` and `npm install`
3. Start the development server: `npm run dev`

## Usage

Once the development server is running, visit `http://localhost:5001` in your web browser to access the application.

## Google Collaboratory Notebooks

- Bot question & answering
  - [Data preparation Notebook](https://colab.research.google.com/drive/18dXUDKdarpcXZlK2R7wbHfyiyFAN0MvY?usp=sharing) : Dataset used was the [MedQuAD: Medical Question Answering Dataset](https://github.com/abachaa/MedQuAD) which covers 37 question types (e.g. Treatment, Diagnosis, Side Effects) associated with diseases, drugs and other medical entities such as tests. Read article [here](https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-019-3119-4)
  - [Indexing vector database for bot similarity search and data retrieval Notebook](https://colab.research.google.com/drive/10EfE9zrz1YEdcu5Q5P180B7XJ4z83Rly?usp=sharing): Pinecone free vector database for ML was used.
  - [Creating main pipeline Notebook](https://colab.research.google.com/drive/1ZfKUVmX8GhHVg2MVW9eP5oL-gQi3kYCF?usp=sharing) : The [flax-sentence-embeddings/all_datasets_v3_mpnet-base](https://huggingface.co/flax-sentence-embeddings/all_datasets_v3_mpnet-base) model was used as the embedding/retrieval model and [vblagoje/bart_lfqa](https://huggingface.co/vblagoje/bart_lfqa) served as the Generative model.
- Disease Prediction Model
  - [Model training pipeline Notebook](https://colab.research.google.com/drive/18GmMeqdUChZXgraFwMOwqvDDOpb844LW?usp=sharing)
- Drug Recommendation Model
  - [Model training pipeline Notebook](https://colab.research.google.com/drive/1juxP9vLY1gsYKrUzcgyO4c2530gA_S6A?usp=sharing)

## Screenshots Demo

This section displays some of the screens of the project:

- ### Home page - patients view

  ![home page patients view](https://github.com/Vital-Ai-GH/frontend-web/blob/main/screenshots/home-screen.png)

- ### View health practitioners details - patients view

  ![view health practitioners details](https://github.com/Vital-Ai-GH/frontend-web/blob/main/screenshots/doctor-details-view.png)

- ### List of available health professionals by Organization - patients view

  ![list of available health professionals by Organization](https://github.com/Vital-Ai-GH/frontend-web/blob/main/screenshots/list-of-doctors-by-organization.png)

- ### User interaction with medical bot

  ![bot question and answering](https://github.com/Vital-Ai-GH/frontend-web/blob/main/screenshots/bot-interactions.png)

- ### Disease prediction model

  ![disease prediction model](https://github.com/Vital-Ai-GH/frontend-web/blob/main/screenshots/prediction-selected-symtoms.png)

- ### Disease prediction model results(patients view)

  ![disease prediction model results](https://github.com/Vital-Ai-GH/frontend-web/blob/main/screenshots/prediction-results.png)

- ### Home page - health practitioners view

  ![home page health practitioners view](https://github.com/Vital-Ai-GH/frontend-web/blob/main/screenshots/doctor-hompage.png)

- ### Drug recommendation (health practitioners view)

  ![drug recommendation model](https://github.com/Vital-Ai-GH/frontend-web/blob/main/screenshots/drug-recommendation-selected.png)

- ### Drug recommendation model results(health practitioners view)

  ![drug recommendation model results](https://github.com/Vital-Ai-GH/frontend-web/blob/main/screenshots/drug-prediction-results.png)

- ### Realtime health practitioner and patients chat(health practitioners view)

  ![Realtime health practitioner and patients chat](https://github.com/Vital-Ai-GH/frontend-web/blob/main/screenshots/real-time-chat.png)

## Contributing

We welcome contributions to improve VitalAI! Feel free to open issues, submit pull requests, or provide feedback to help us enhance our platform.

For more information about the backend of VitalAI, please visit the [backend repository]('https://github.com/Vital-Ai-GH/backend-server'). If you have any questions or need support, contact us at [nyamekessesamuel@duck.com](mailto:nyamekessesamuel@duck.com). Thank you for being a part of the VitalAI community!
