import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'
import { Activity, Brain, Database, TrendingUp, Users, FileText, Microscope, Heart } from 'lucide-react'
import './App.css'

// Sample data for visualizations
const cancerTypesData = [
  { name: 'Breast', cases: 2300, survival: 89 },
  { name: 'Lung', cases: 2100, survival: 18 },
  { name: 'Prostate', cases: 1900, survival: 98 },
  { name: 'Colorectal', cases: 1500, survival: 65 },
  { name: 'Melanoma', cases: 900, survival: 93 },
  { name: 'Pancreatic', cases: 600, survival: 9 }
]

const treatmentOutcomes = [
  { month: 'Jan', success: 78, partial: 15, failure: 7 },
  { month: 'Feb', success: 82, partial: 12, failure: 6 },
  { month: 'Mar', success: 85, partial: 10, failure: 5 },
  { month: 'Apr', success: 88, partial: 8, failure: 4 },
  { month: 'May', success: 91, partial: 6, failure: 3 },
  { month: 'Jun', success: 93, partial: 5, failure: 2 }
]

const genomicData = [
  { name: 'TP53', frequency: 45, color: '#8884d8' },
  { name: 'KRAS', frequency: 32, color: '#82ca9d' },
  { name: 'PIK3CA', frequency: 28, color: '#ffc658' },
  { name: 'EGFR', frequency: 25, color: '#ff7300' },
  { name: 'BRAF', frequency: 18, color: '#8dd1e1' }
]

function App() {
  const [activeTab, setActiveTab] = useState('overview')
  const [analysisProgress, setAnalysisProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setAnalysisProgress((prev) => (prev >= 100 ? 0 : prev + 1))
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">CancerAI</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">AI-Driven Cancer Research Platform</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <Activity className="h-3 w-3 mr-1" />
                Live Analysis
              </Badge>
              <p className="text-sm text-gray-600 dark:text-gray-300">by Sibel</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Advancing Cancer Research with AI
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Leveraging machine learning and data analysis to uncover insights from genomic, clinical, 
            and imaging data for better cancer diagnosis, treatment, and outcomes.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Samples</CardTitle>
              <Database className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">11,247</div>
              <p className="text-xs text-muted-foreground">+2.1% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cancer Types</CardTitle>
              <Microscope className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">33</div>
              <p className="text-xs text-muted-foreground">Comprehensive coverage</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">AI Models</CardTitle>
              <Brain className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Active predictive models</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Accuracy</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94.2%</div>
              <p className="text-xs text-muted-foreground">Average model accuracy</p>
            </CardContent>
          </Card>
        </div>

        {/* Analysis Progress */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5" />
              <span>Real-time Analysis Progress</span>
            </CardTitle>
            <CardDescription>
              Current genomic data processing and model training status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Genomic Data Processing</span>
                  <span>{analysisProgress}%</span>
                </div>
                <Progress value={analysisProgress} className="h-2" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>TCGA Data: Complete</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                  <span>Model Training: In Progress</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <span>Validation: Pending</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Dashboard */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="genomics">Genomics</TabsTrigger>
            <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
            <TabsTrigger value="models">AI Models</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Cancer Types Distribution</CardTitle>
                  <CardDescription>Sample distribution across different cancer types</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={cancerTypesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="cases" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>5-Year Survival Rates</CardTitle>
                  <CardDescription>Survival rates by cancer type</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={cancerTypesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`${value}%`, 'Survival Rate']} />
                      <Bar dataKey="survival" fill="#10b981" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="genomics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Most Frequently Mutated Genes</CardTitle>
                <CardDescription>Top genetic mutations across cancer samples</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    <Pie
                      data={genomicData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, frequency }) => `${name}: ${frequency}%`}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="frequency"
                    >
                      {genomicData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="outcomes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Treatment Outcomes Over Time</CardTitle>
                <CardDescription>Monthly treatment success rates</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={treatmentOutcomes}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="success" stroke="#10b981" strokeWidth={3} name="Success %" />
                    <Line type="monotone" dataKey="partial" stroke="#f59e0b" strokeWidth={2} name="Partial %" />
                    <Line type="monotone" dataKey="failure" stroke="#ef4444" strokeWidth={2} name="Failure %" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="models" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Survival Prediction</CardTitle>
                  <CardDescription>Random Forest Model</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Accuracy</span>
                      <span className="text-sm font-medium">94.2%</span>
                    </div>
                    <Progress value={94.2} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Training: 8,976 samples</span>
                      <span>Status: Active</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Drug Response</CardTitle>
                  <CardDescription>Neural Network</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Accuracy</span>
                      <span className="text-sm font-medium">91.8%</span>
                    </div>
                    <Progress value={91.8} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Training: 6,543 samples</span>
                      <span>Status: Active</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Image Classification</CardTitle>
                  <CardDescription>CNN Model</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Accuracy</span>
                      <span className="text-sm font-medium">96.7%</span>
                    </div>
                    <Progress value={96.7} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Training: 12,450 images</span>
                      <span>Status: Active</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-600 dark:text-gray-400">
          <p className="text-sm">
            CancerAI Platform - Developed by Sibel | Leveraging TCGA, CRDC, and TCIA datasets
          </p>
          <p className="text-xs mt-2">
            This platform demonstrates AI applications in cancer research using publicly available datasets
          </p>
        </footer>
      </main>
    </div>
  )
}

export default App

