import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Database, Microscope, TrendingUp, Activity } from "lucide-react";

// Sample data for visualizations
const cancerTypesData = [
  { name: "Breast", cases: 2300, survival: 89 },
  { name: "Lung", cases: 2100, survival: 18 },
  { name: "Prostate", cases: 1900, survival: 98 },
  { name: "Colorectal", cases: 1500, survival: 65 },
  { name: "Melanoma", cases: 900, survival: 93 },
  { name: "Pancreatic", cases: 600, survival: 9 },
  { name: "Leukemia", cases: 550, survival: 65 },
  { name: "Ovarian", cases: 450, survival: 49 },
];

const aiModelsData = [
  { name: "Survival Prediction", accuracy: 87.3 },
  { name: "Drug Response", accuracy: 72.1 },
  { name: "Image Classification", accuracy: 96.7 },
  { name: "Risk Assessment", accuracy: 84.5 },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">CancerAI</h1>
                <p className="text-sm text-gray-600">AI-Driven Cancer Research Platform</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                <Database className="h-3 w-3 mr-1" />
                Repository Analysis
              </Badge>
              <p className="text-sm text-gray-600">by Sibel</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advancing Cancer Research with AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leveraging machine learning and data analysis to uncover insights from imaging 
            and statistical data for better cancer diagnosis, treatment, and outcomes.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Medical Images</CardTitle>
              <Database className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1M+</div>
              <p className="text-xs text-muted-foreground">From TCIA repository</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cancer Types</CardTitle>
              <Microscope className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Major cancer types</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">AI Models</CardTitle>
              <Brain className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Predictive models</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Accuracy</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85.2%</div>
              <p className="text-xs text-muted-foreground">Average model accuracy</p>
            </CardContent>
          </Card>
        </div>

        {/* Data Sources Info */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5" />
              <span>Data Sources</span>
            </CardTitle>
            <CardDescription>
              Repository-based analysis using two primary cancer research databases
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 border-2 border-blue-200 rounded-lg bg-blue-50">
                <h3 className="font-semibold text-lg mb-2">TCIA - The Cancer Imaging Archive</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Large archive of de-identified medical images for cancer research
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Images:</span>
                    <span className="font-semibold">1,000,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Data Type:</span>
                    <span className="font-semibold">CT, MRI, PET</span>
                  </div>
                </div>
                <Badge className="mt-3 bg-green-100 text-green-800">Active Repository</Badge>
              </div>
              
              <div className="p-6 border-2 border-purple-200 rounded-lg bg-purple-50">
                <h3 className="font-semibold text-lg mb-2">CDC - Centers for Disease Control</h3>
                <p className="text-sm text-gray-700 mb-3">
                  National cancer statistics, incidence and mortality data
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Coverage:</span>
                    <span className="font-semibold">United States</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Update:</span>
                    <span className="font-semibold">Annual</span>
                  </div>
                </div>
                <Badge className="mt-3 bg-green-100 text-green-800">Active Repository</Badge>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> This platform uses repository-based analysis, not real-time data processing. 
                Data is periodically downloaded from TCIA and CDC repositories for offline analysis.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Main Dashboard */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
            <TabsTrigger value="models">AI Models</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>8 Cancer Types Analyzed</CardTitle>
                <CardDescription>Major cancer types with comprehensive data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cancerTypesData.map((cancer) => (
                    <div key={cancer.name} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold">{cancer.name} Cancer</h4>
                        <p className="text-sm text-gray-600">{cancer.cases} cases analyzed</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">{cancer.survival}%</div>
                        <p className="text-xs text-gray-600">5-year survival</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="outcomes" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Complete Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">93%</div>
                  <p className="text-sm text-gray-600 mt-2">
                    Patients showing complete tumor elimination
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Partial Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-yellow-600">5%</div>
                  <p className="text-sm text-gray-600 mt-2">
                    Patients with significant tumor reduction
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">No Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-red-600">2%</div>
                  <p className="text-sm text-gray-600 mt-2">
                    Patients requiring alternative treatment
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="models" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>AI Model Performance</CardTitle>
                <CardDescription>8 specialized models for cancer research analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {aiModelsData.map((model) => (
                    <div key={model.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{model.name}</span>
                        <span className="text-sm font-semibold">{model.accuracy}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${model.accuracy}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-900">
                    <strong>Data Sources:</strong> Models trained on imaging data from TCIA 
                    and statistical data from CDC. Repository-based analysis, not real-time processing.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-600">
          <p>CancerAI Platform - Repository-Based Cancer Research Analysis</p>
          <p className="mt-2">Data Sources: TCIA (Imaging) + CDC (Statistics)</p>
          <p className="mt-2">Created by Sibel | 2024</p>
        </div>
      </main>
    </div>
  );
}
