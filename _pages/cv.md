---
layout: archive
title: "Chang Zeng's CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

[Chang Zeng's CV](/files/Chang_Zeng's_CV.pdf)

Education
======
* B.S. in University of Massachusetts Amherst, 2018-2022
    * Major in Computer Science
    * Major in Environmental Science
* M.S. in University of Massachusetts Amherst, 2022-2024
    * Major in Computer Science
* Ph.D. in University of Massachusetts Amherst, 2024-2028 (expected)
    * Major in Computer Science

Awards
======
* Bay State Fellowship at the University of Massachusetts Amherst.
* Dean's List recipient for the following semesters: Fall 2018, Spring 2019, Fall 2019, Spring 2020, Fall 2020, Spring 2021, Fall 2021, and Spring 2022 at the University of Massachusetts Amherst.


Research Experience
======
* *Agentic Retrieval - University of Massachusetts Amherst - 2025-Present*
  * Supervisor: Razieh Negin Rahimi
  * Contribution: 
    * Designed a multi-level retrieval stack that fuses lexical and dense signals across stages and subqueries to strengthen overall ranking quality.
    * Developed an agentic loop that prioritizes parallel reasoning chains and coordinated search branches to expand and align search intents.
    * Built a SearchR1-style training and inference pipeline that carries information from previous hops and prior plan iterations, enabling richer context for better planning and retrieval.
  
* *Structured Knowledge Retrieval - University of Massachusetts Amherst - 2025-2025*
  * Supervisor: Razieh Negin Rahimi
  * Contribution: 
    * Crafted a field-aware retrieval stack that encodes field names directly into field values, preserving schema semantics during matching and reducing field ambiguity.
    * Devised bidirectional field representations that learn general column embeddings from column values and reuse them to augment each column’s value representation.
    * Implemented field-aware scoring modes that blend field and its value signals, stabilizing multi-field ranking and improving signal balance across fields.
  
* *Personalized Product Search - University of Massachusetts Amherst - 2024-2025*
  * Supervisor: Razieh Negin Rahimi
  * Contribution: 
    * Engineered an iterative self-training pipeline that leverages synthetic datasets from multiple LLMs with adaptive label smoothing to boost label quality.
    * Extracted and refined rich user embeddings and latent preferences from historical interactions using LLM-based encoding, enhanced via adaptive hard-negative sampling during fine-tuning.
    * Developed a multi-stage fine-tuning framework to integrate user profiles into personalized search to jointly optimize query and item representations through latent embedding or in-context prompt.

* *AI Alignment Via Power-Mean Elicitation - University of Massachusetts Amherst - 2022-2024*
  * Supervisor: Cyrus Cousins and Yair Zick
  * Contribution: 
    * Modeled human and LLM decision-making processes by analyzing the behavior of the Weighted Generalized Means class in real-world scenarios involving multiple stakeholders.
    * Created flexible, robust distance metrics to quantify welfare disparities by comparing utility and disutility outcomes among diverse stakeholder groups.
    * Conducted minimax complexity analysis to evaluate the algorithm's efficiency for proper and improper epsilon-elicitation of fairness concepts.
  

Work Experience
======
* *Software Engineer Intern - X-Camp - 2023-Present*
  * Supervisor: Yuan Xu
  * Contribution: 
    * Zoom Integration with Education Platform
    * Detect & Remove Duplication using NLP Technique


* *Research Assistant - University of Massachusetts Amherst - 2022-Present*
  * Supervisor: Cyrus Cousins, Yair Zick
  * Contribution: 
    * Research on the Human-AI Cooperation for Fairness Elicitation

* *Teaching Assistant - University of Massachusetts Amherst - 2022-Present*
  * Supervisor: Parviz Kermani 
  * Contribution: 
    *  Host weekly office hour and be accessible for students in many forms, such as responding piazza in short time
    * Prepare and design the homework, exam, and challenge to help student have a better understanding of the concept
    * Grade homework and exam



Project Experience
======
* *Autoencoder Optimization - Amherst, MA - 2022-2023*
  * Software Engineer - Back-End (Python, Deep Learning, MLP, CNN, RNN)	
  * Contribution:
    * Developed an **autoencoder** with a **backpropagation** mechanism to effectively denoise individual heartbeats from electrocardiogram signals, enhancing signal quality and accuracy.
    * Performed a comprehensive comparison between linear and non-linear structures, including **CNN** and **RNN**, to evaluate their performance in optimizing the denoising process. 
    * Employed academic research methodologies to methodically **fine-tune** autoencoder model parameters, incorporating strategies like **scheduled learning rate** adjustments and varied **layer structures**, resulting in elevated denoising capabilities and heightened accuracy.
    

* *Wuhuu Information Sharing Platform - Amherst, MA - 2022-2023*
  * Software Engineer - Back-End (Python, Crawler, AWS S3)	
  * Contribution:
    * Developed customized **crawlers** utilizing Python to systematically gather data from social platforms, focusing on user engagement trends, content popularity, and sentiment analysis.
    * Implemented a robust storage infrastructure using **AWS S3** to securely store and retrieve shared files, while optimizing data retrieval and minimizing latency.


* *FFIV Ultimate Simulator - Amherst, MA - 2022-2023*
  * Lead Developer - Full-Stack (Unity, C#, WPF, UI/UX, XAML)	
  * Contribution:
    * Spearheaded the design and construction of a **Unity** game simulator, employing **C#** to enable players to customize and personalize their gameplay tactics allowing them to practice and refine their strategies. 
    * Orchestrated the creation of a tailor-made launcher for the simulator, leveraging the **WPF framework** to deliver a user-friendly interface that streamlined access to game features and settings.


* *Eye Activity Tracking - Amherst, MA - 2022-2022*
  * Software Engineer - Full-Stack (Python, Machine Learning, OpenCV, CUDA)	
  * Contribution:
    * Employed various machine learning models, including the **BERT transformer** (**TensorFlow**), along with advanced techniques such as **random forests** and **stratified k-fold**, to accurately classify eye behavior patterns. 
    * Utilized **OpenCV** libraries to capture and process live camera feed in real-time, extracting relevant features from the eye images, such as pupil dilation and eye movement, to analyze and determine the user's eye activity.


Skills
======
* Programming Languages: 
  * Python, Go, C#, HTML, CSS, XAML, TypeScript, JavaScript, C++
* Library:
  * TensorFlow, PyTorch, NumPy, Pandas, Flask, FastAPI
* Framework: 
  * Kubernetes, Docker, OpenCV, React, Node.js, PostgreSQL
* Tools: 
  * Git, Github, Gitlab, AWS S3, OSS, Bash, Conda
* Operating System:
  * Unix/Linux, OSX/IOS, Windows

  
Talks
======
  <ul>{% for post in site.talks %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>
  

  
Teaching
======
  <ul>{% for post in site.teaching %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
