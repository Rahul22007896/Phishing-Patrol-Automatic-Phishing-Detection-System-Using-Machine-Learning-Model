## Phishing Patrol: Automatic-Phishing-Detection-System-Using-Machine-Learning-Model 
## About
Automatic Phishing Detection System is a client-side browser extension that uses a Random Forest Classifier to identify phishing websites in real-time. Unlike traditional server-side detection methods, this plugin runs entirely within the Chrome browser using JavaScript, preserving user privacy and reducing detection delays due to network latency. It alerts users about potential phishing threats before they can submit sensitive information.

## 🌟 Features
🔒 Client-Side Phishing Detection: Runs fully in-browser without contacting external servers.

🌐 Real-Time Alerts: Notifies users instantly upon visiting a suspected phishing website.

🧠 Machine Learning Powered: Utilizes a Random Forest Classifier trained on a curated dataset of phishing and legitimate URLs.

📊 Lightweight Feature Extraction: Implements 17 key features that can be extracted quickly in-browser without external APIs.

⚡ Fast and Efficient: Optimized for low latency to detect threats before user interaction.

📦 Modular and Extensible: Designed to be easily enhanced with more features without compromising performance.

## 💻 System Requirements
✅ Hardware
Processor: Quad Core or above

RAM: Minimum 2 GB

✅ Software
Operating System: Any (Windows/Linux/macOS)

Browser: Chrome or any Chromium-based browser supporting extensions

Languages/Tools:

Python (for training model): v3.x

Scikit-learn: v0.23.2

NumPy: v1.21.5

Pandas: v1.1.3

HTML5, CSS3, JavaScript (for browser plugin)

## 🔧 Software Architecture
Model Training: Python (Random Forest via Scikit-learn)

Model Export: Serialized to JSON format

Client Plugin: JavaScript reads the JSON model and classifies websites based on extracted features

Chrome Extension: Content scripts extract webpage features; background scripts manage detection logic

## System Architecture

![Screenshot 2025-05-23 180506](https://github.com/user-attachments/assets/0b9255dd-59d2-4147-963c-f489332356a6)


## Output

#### Output - Result Popup On Safe Websites 
![Screenshot 2025-05-23 180549](https://github.com/user-attachments/assets/05d4510c-ba28-4890-baf9-e801a43f4367)


#### Output - Result Popup On Phishing Websites
![Screenshot 2025-05-23 180618](https://github.com/user-attachments/assets/2b83315e-6a8f-45bb-a05a-2a159fe3f278)



## 📈 Impacts and Results
Achieved F1 Score of 0.886 on client-side test data

High responsiveness with minimal lag

No reliance on external APIs, ensuring maximum privacy

Demonstrated successful detection of both benign and phishing websites through real-time alerts

Validated approach using open-source phishing datasets and 17 key feature parameters
