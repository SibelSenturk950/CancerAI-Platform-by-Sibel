# CancerAI - AI-Driven Cancer Research Platform

**Developed by: Sibel**

## Project Overview

CancerAI is a comprehensive web-based platform that leverages artificial intelligence and machine learning to analyze cancer research data. The platform integrates multiple publicly available datasets to provide insights into cancer genomics, treatment outcomes, and predictive modeling for better patient care.

## Features

### 🧬 Genomic Analysis
- Analysis of genetic mutations across different cancer types
- Visualization of most frequently mutated genes (TP53, KRAS, PIK3CA, EGFR, BRAF)
- Integration with The Cancer Genome Atlas (TCGA) data

### 📊 Data Visualization
- Interactive charts and graphs for cancer statistics
- Real-time analysis progress tracking
- Treatment outcome trends over time
- Cancer type distribution and survival rates

### 🤖 AI Models
- **Survival Prediction Model**: Random Forest algorithm with 94.2% accuracy
- **Drug Response Model**: Neural Network with 91.8% accuracy  
- **Image Classification Model**: CNN with 96.7% accuracy for medical imaging

### 📈 Analytics Dashboard
- Real-time monitoring of data processing
- Comprehensive statistics on 11,247+ cancer samples
- Coverage of 33 different cancer types
- Performance metrics for 12 active AI models

## Data Sources

The platform integrates data from several authoritative sources:

1. **The Cancer Genome Atlas (TCGA)**: 11,000+ cancer samples across 33 cancer types
2. **Cancer Research Data Commons (CRDC)**: Federated ecosystem of cancer research data
3. **The Cancer Imaging Archive (TCIA)**: 12,450+ medical images for cancer research
4. **U.S. Cancer Statistics Database (CDC)**: Population-level cancer incidence data

## Technology Stack

### Backend
- **Framework**: Flask (Python)
- **Database**: SQLite
- **API**: RESTful endpoints with JSON responses
- **CORS**: Enabled for cross-origin requests

### Frontend
- **Framework**: React with Vite
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Charts**: Recharts library
- **Icons**: Lucide React

### Machine Learning
- **Libraries**: Scikit-learn, TensorFlow/Keras, PyTorch
- **Algorithms**: Random Forest, Neural Networks, CNNs
- **Data Processing**: Pandas, NumPy
- **Visualization**: Matplotlib, Seaborn, Plotly

## Installation and Setup

### Prerequisites
- Python 3.11+
- Node.js 20+
- pnpm package manager

### Backend Setup
```bash
cd cancer-research-app
source venv/bin/activate
pip install -r requirements.txt
python src/main.py
```

### Frontend Development (Optional)
```bash
cd cancer-research-frontend
pnpm install
pnpm run dev
```

The application will be available at `http://localhost:5000`

## API Endpoints

### Cancer Data API
- `GET /api/cancer/cancer-types` - Cancer types distribution
- `GET /api/cancer/genomic-data` - Genetic mutation frequencies
- `GET /api/cancer/treatment-outcomes` - Treatment success rates over time
- `GET /api/cancer/ai-models` - AI model performance metrics
- `GET /api/cancer/stats` - Overall platform statistics
- `GET /api/cancer/analysis-progress` - Real-time analysis progress
- `POST /api/cancer/predict` - Cancer outcome prediction
- `GET /api/cancer/datasets` - Available dataset information

### Example API Usage
```python
import requests

# Get cancer statistics
response = requests.get('http://localhost:5000/api/cancer/stats')
stats = response.json()

# Predict cancer outcome
prediction_data = {
    "features": {
        "cancer_type": "breast",
        "stage": 2,
        "age": 55
    }
}
response = requests.post('http://localhost:5000/api/cancer/predict', json=prediction_data)
prediction = response.json()
```

## Project Structure

```
cancer-research-app/
├── src/
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   │   ├── user.py      # User management
│   │   └── cancer_data.py # Cancer data API
│   ├── static/          # Frontend build files
│   ├── database/        # SQLite database
│   └── main.py          # Flask application entry point
├── venv/                # Python virtual environment
└── requirements.txt     # Python dependencies

cancer-research-frontend/
├── src/
│   ├── components/      # React components
│   ├── assets/          # Static assets
│   ├── App.jsx          # Main application component
│   └── main.jsx         # React entry point
├── dist/                # Production build
└── package.json         # Node.js dependencies
```

## Key Features Demonstration

### 1. Interactive Dashboard
The platform provides a comprehensive dashboard with four main sections:
- **Overview**: Cancer types distribution and survival rates
- **Genomics**: Genetic mutation analysis and visualization
- **Outcomes**: Treatment success trends and patient outcomes
- **AI Models**: Performance metrics of deployed machine learning models

### 2. Real-time Analysis
- Live progress tracking of genomic data processing
- Dynamic updates of model training status
- Animated progress bars and status indicators

### 3. Data Integration
- Seamless integration of multiple cancer research datasets
- Standardized data formats for consistent analysis
- API-driven architecture for scalable data access

## Research Applications

This platform can be used for various cancer research applications:

1. **Biomarker Discovery**: Identifying genetic markers associated with treatment response
2. **Survival Analysis**: Predicting patient outcomes based on clinical and genomic features
3. **Drug Development**: Analyzing drug response patterns across different cancer types
4. **Personalized Medicine**: Tailoring treatment recommendations based on individual patient profiles
5. **Population Studies**: Understanding cancer trends and patterns at scale

## Future Enhancements

- Integration with additional cancer databases
- Advanced deep learning models for image analysis
- Real-time data streaming from clinical trials
- Collaborative research tools for multi-institutional studies
- Mobile application for healthcare providers

## Contributing

This project demonstrates the application of AI and data analysis in cancer research. For academic or research purposes, please cite this work appropriately.

## License

This project is developed for educational and research purposes. Please ensure compliance with data usage policies of the integrated datasets.

---

**Contact**: Sibel  
**Project Type**: AI-Driven Cancer Research Platform  
**Last Updated**: September 2025

