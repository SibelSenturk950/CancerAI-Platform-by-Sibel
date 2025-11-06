from flask import Blueprint, jsonify, request
import random
import json
from datetime import datetime, timedelta

cancer_data_bp = Blueprint('cancer_data', __name__)

# Sample data for the API endpoints
CANCER_TYPES_DATA = [
    {"name": "Breast", "cases": 2300, "survival": 89},
    {"name": "Lung", "cases": 2100, "survival": 18},
    {"name": "Prostate", "cases": 1900, "survival": 98},
    {"name": "Colorectal", "cases": 1500, "survival": 65},
    {"name": "Melanoma", "cases": 900, "survival": 93},
    {"name": "Pancreatic", "cases": 600, "survival": 9}
]

GENOMIC_DATA = [
    {"name": "TP53", "frequency": 45, "color": "#8884d8"},
    {"name": "KRAS", "frequency": 32, "color": "#82ca9d"},
    {"name": "PIK3CA", "frequency": 28, "color": "#ffc658"},
    {"name": "EGFR", "frequency": 25, "color": "#ff7300"},
    {"name": "BRAF", "frequency": 18, "color": "#8dd1e1"}
]

TREATMENT_OUTCOMES = [
    {"month": "Jan", "success": 78, "partial": 15, "failure": 7},
    {"month": "Feb", "success": 82, "partial": 12, "failure": 6},
    {"month": "Mar", "success": 85, "partial": 10, "failure": 5},
    {"month": "Apr", "success": 88, "partial": 8, "failure": 4},
    {"month": "May", "success": 91, "partial": 6, "failure": 3},
    {"month": "Jun", "success": 93, "partial": 5, "failure": 2}
]

AI_MODELS = [
    {
        "name": "Survival Prediction",
        "type": "Random Forest Model",
        "accuracy": 94.2,
        "training_samples": 8976,
        "status": "Active"
    },
    {
        "name": "Drug Response",
        "type": "Neural Network",
        "accuracy": 91.8,
        "training_samples": 6543,
        "status": "Active"
    },
    {
        "name": "Image Classification",
        "type": "CNN Model",
        "accuracy": 96.7,
        "training_samples": 12450,
        "status": "Active"
    }
]

@cancer_data_bp.route('/cancer-types', methods=['GET'])
def get_cancer_types():
    """Get cancer types distribution data"""
    return jsonify({
        "status": "success",
        "data": CANCER_TYPES_DATA,
        "timestamp": datetime.now().isoformat()
    })

@cancer_data_bp.route('/genomic-data', methods=['GET'])
def get_genomic_data():
    """Get genomic mutation frequency data"""
    return jsonify({
        "status": "success",
        "data": GENOMIC_DATA,
        "timestamp": datetime.now().isoformat()
    })

@cancer_data_bp.route('/treatment-outcomes', methods=['GET'])
def get_treatment_outcomes():
    """Get treatment outcomes over time"""
    return jsonify({
        "status": "success",
        "data": TREATMENT_OUTCOMES,
        "timestamp": datetime.now().isoformat()
    })

@cancer_data_bp.route('/ai-models', methods=['GET'])
def get_ai_models():
    """Get AI model performance data"""
    return jsonify({
        "status": "success",
        "data": AI_MODELS,
        "timestamp": datetime.now().isoformat()
    })

@cancer_data_bp.route('/stats', methods=['GET'])
def get_stats():
    """Get overall platform statistics"""
    stats = {
        "total_samples": 11247,
        "cancer_types": 33,
        "ai_models": 12,
        "average_accuracy": 94.2,
        "last_updated": datetime.now().isoformat()
    }
    return jsonify({
        "status": "success",
        "data": stats,
        "timestamp": datetime.now().isoformat()
    })

@cancer_data_bp.route('/analysis-progress', methods=['GET'])
def get_analysis_progress():
    """Get current analysis progress (simulated)"""
    progress = {
        "genomic_processing": random.randint(75, 100),
        "model_training": random.randint(60, 95),
        "validation": random.randint(0, 80),
        "tcga_status": "Complete",
        "model_training_status": "In Progress",
        "validation_status": "Pending" if random.randint(0, 1) else "In Progress"
    }
    return jsonify({
        "status": "success",
        "data": progress,
        "timestamp": datetime.now().isoformat()
    })

@cancer_data_bp.route('/predict', methods=['POST'])
def predict_outcome():
    """Simulate cancer outcome prediction"""
    try:
        data = request.get_json()
        
        # Simulate prediction based on input features
        features = data.get('features', {})
        cancer_type = features.get('cancer_type', 'Unknown')
        stage = features.get('stage', 1)
        age = features.get('age', 50)
        
        # Simple simulation logic
        base_survival = 70
        if cancer_type.lower() == 'pancreatic':
            base_survival = 15
        elif cancer_type.lower() == 'lung':
            base_survival = 25
        elif cancer_type.lower() == 'breast':
            base_survival = 85
        elif cancer_type.lower() == 'prostate':
            base_survival = 95
        
        # Adjust for stage and age
        stage_adjustment = (5 - stage) * 10
        age_adjustment = max(0, (70 - age) * 0.5)
        
        predicted_survival = min(100, max(5, base_survival + stage_adjustment + age_adjustment))
        confidence = random.uniform(0.85, 0.98)
        
        prediction = {
            "predicted_survival_rate": round(predicted_survival, 1),
            "confidence": round(confidence, 3),
            "risk_factors": [
                "Advanced stage" if stage > 2 else "Early stage",
                "Age factor" if age > 65 else "Age favorable",
                f"{cancer_type} type specific factors"
            ],
            "model_used": "Ensemble Model v2.1",
            "prediction_date": datetime.now().isoformat()
        }
        
        return jsonify({
            "status": "success",
            "data": prediction,
            "timestamp": datetime.now().isoformat()
        })
        
    except Exception as e:
        return jsonify({
            "status": "error",
            "message": str(e),
            "timestamp": datetime.now().isoformat()
        }), 400

@cancer_data_bp.route('/datasets', methods=['GET'])
def get_datasets():
    """Get information about available datasets"""
    datasets = [
        {
            "name": "The Cancer Genome Atlas (TCGA)",
            "description": "Comprehensive genomic characterization of cancer",
            "samples": 11000,
            "cancer_types": 33,
            "data_types": ["Genomic", "Transcriptomic", "Epigenomic", "Proteomic"],
            "status": "Active",
            "url": "https://www.cancer.gov/ccg/research/genome-sequencing/tcga"
        },
        {
            "name": "Cancer Research Data Commons (CRDC)",
            "description": "Federated ecosystem of cancer research data",
            "samples": 8500,
            "cancer_types": 25,
            "data_types": ["Clinical", "Genomic", "Imaging"],
            "status": "Active",
            "url": "https://datacommons.cancer.gov/"
        },
        {
            "name": "The Cancer Imaging Archive (TCIA)",
            "description": "Public archive of cancer images",
            "samples": 12450,
            "cancer_types": 20,
            "data_types": ["Medical Imaging", "Radiology", "Pathology"],
            "status": "Active",
            "url": "https://www.cancerimagingarchive.net/"
        }
    ]
    
    return jsonify({
        "status": "success",
        "data": datasets,
        "timestamp": datetime.now().isoformat()
    })

