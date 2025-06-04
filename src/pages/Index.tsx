import { useState } from 'react';
import { Home, BarChart3, TrendingUp, GitBranch, Cpu, Search, Filter, X, FileText, Github, ExternalLink, Award } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { edaGraphs, timeSeriesGraphs, modelGraphs, type GraphData } from '@/utils/graphData';
import { GraphDetailModal } from '@/components/GraphDetailModal';

const Index = () => {
  const [activeTab, setActiveTab] = useState('HOME');
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [selectedGraph, setSelectedGraph] = useState<GraphData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter function for graphs - search only by title
  const filterGraphs = (graphs: GraphData[]) => {
    return graphs.filter(graph => {
      const matchesSearch = graph.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || graph.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  };

  // Get unique categories for filter dropdown
  const getCategories = (graphs: GraphData[]) => {
    const categories = [...new Set(graphs.map(graph => graph.category))];
    return categories.sort();
  };

  const clearFilters = () => {
    setSearchTerm('');
    setCategoryFilter('all');
  };

  const handleViewDetails = (graph: GraphData) => {
    setSelectedGraph(graph);
    setIsModalOpen(true);
  };

  const renderHomeContent = () => (
    <div className="space-y-8">
      {/* Course Header */}
      <div className="text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white p-8 rounded-xl shadow-2xl">
        <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">
          Data Analysis and Visualizations
        </h1>
        <h2 className="text-3xl font-semibold mb-4">From Reviews to Revenue</h2>
        <p className="text-xl opacity-90">A Multidimensional Analysis of Brazilian E-Commerce</p>
        
        {/* Project Links */}
        <div className="flex justify-center gap-4 mt-6">
          <Button asChild className="bg-white text-blue-600 hover:bg-gray-100">
            <a 
              href="https://docs.google.com/document/d/14FJNFXL9X7VV43ImhrgkORoWmV7dLxqx1TMuxj4qwaY/edit?tab=t.0#heading=h.wbkfl65fpscb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FileText className="h-4 w-4" />
              Full Project Report
              <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
          <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
            <a 
              href="https://github.com/Usaira-Shahbaz/Data-Analysis-and-Visualization-Project"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              GitHub Repository
              <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
        </div>
      </div>

      {/* Group Members Section */}
      <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Group Members</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 p-8 rounded-xl border-2 border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <h4 className="font-bold text-xl text-blue-800 mb-2">Zaheer Abbas</h4>
            <p className="text-gray-600 mb-1">NUM-BSCS-2022-50</p>
            <p className="text-blue-600 font-medium">bscs22f50@namal.edu.pk</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 p-8 rounded-xl border-2 border-purple-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <h4 className="font-bold text-xl text-purple-800 mb-2">Usaira Shahbaz</h4>
            <p className="text-gray-600 mb-1">NUM-BSCS-2022-27</p>
            <p className="text-purple-600 font-medium">bscs22f27@namal.edu.pk</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 via-green-100 to-green-200 p-8 rounded-xl border-2 border-green-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <h4 className="font-bold text-xl text-green-800 mb-2">Ahmad Mustafa</h4>
            <p className="text-gray-600 mb-1">NUM-BSCS-2022-37</p>
            <p className="text-green-600 font-medium">bscs22f37@namal.edu.pk</p>
          </div>
        </div>
      </div>

      {/* Course Information */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl shadow-xl p-8 border border-gray-200">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Course Information</h3>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-200">
            <h4 className="font-semibold text-gray-700 mb-2">Instructor</h4>
            <p className="text-xl font-bold text-orange-600">MR. MUHAMMAD BILAL</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-200">
            <h4 className="font-semibold text-gray-700 mb-2">Course</h4>
            <p className="text-xl font-bold text-blue-600">Data Analysis and Visualization</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-green-200">
            <h4 className="font-semibold text-gray-700 mb-2">Date</h4>
            <p className="text-xl font-bold text-green-600">21 May, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSearchAndFilter = (graphs: GraphData[]) => (
    <div className="mb-8 space-y-4">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search graphs by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-3 w-full border-2 border-blue-200 focus:border-blue-400 rounded-xl"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="text-gray-400 h-4 w-4" />
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-48 border-2 border-purple-200 focus:border-purple-400 rounded-xl">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {getCategories(graphs).map(category => (
                <SelectItem key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {(searchTerm || categoryFilter !== 'all') && (
            <button
              onClick={clearFilters}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-100"
              title="Clear filters"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
      
      {/* Results count */}
      <div className="text-sm text-gray-600 bg-blue-50 px-4 py-2 rounded-lg border border-blue-200">
        Showing {filterGraphs(graphs).length} of {graphs.length} results
        {searchTerm && ` for "${searchTerm}"`}
        {categoryFilter !== 'all' && ` in ${categoryFilter.replace('-', ' ')} category`}
      </div>
    </div>
  );

  const renderGraphCard = (graph: GraphData) => (
    <div key={graph.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group border border-gray-200">
      <div className="relative overflow-hidden">
        <img 
          src={graph.imageUrl}
          alt={graph.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.src = graph.fallbackUrl;
          }}
        />
        <div className="absolute top-3 right-3">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full shadow-lg">
            {graph.category.replace('-', ' ')}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
          {graph.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {graph.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
            Graph #{graph.id}
          </span>
          <button 
            onClick={() => handleViewDetails(graph)}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            View Details →
          </button>
        </div>
      </div>
    </div>
  );

  const renderEDAContent = () => {
    const filteredGraphs = filterGraphs(edaGraphs);
    
    return (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">Exploratory Data Analysis</h2>
        {renderSearchAndFilter(edaGraphs)}
        
        {filteredGraphs.length === 0 ? (
          <div className="text-center py-12">
            <Search className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No graphs found</h3>
            <p className="text-gray-500">Try adjusting your search terms or filters</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGraphs.map(renderGraphCard)}
          </div>
        )}
      </div>
    );
  };

  const renderTimeSeriesContent = () => {
    const filteredGraphs = filterGraphs(timeSeriesGraphs);
    
    return (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-8">Time Series Analysis</h2>
        {renderSearchAndFilter(timeSeriesGraphs)}
        
        {filteredGraphs.length === 0 ? (
          <div className="text-center py-12">
            <Search className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No graphs found</h3>
            <p className="text-gray-500">Try adjusting your search terms or filters</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredGraphs.map(renderGraphCard)}
          </div>
        )}
      </div>
    );
  };

  const renderCorrelationContent = () => (
    <div className="space-y-6">
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8">Correlation Analysis</h2>
      <div className="flex justify-center">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 max-w-2xl group border border-gray-200">
          <div className="relative overflow-hidden">
            <img 
              src="https://raw.githubusercontent.com/Usaira-Shahbaz/Graphs/main/Corr1.png"
              alt="Correlation Matrix"
              className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/800x600?text=Correlation+Matrix";
              }}
            />
            <div className="absolute top-4 right-4">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full shadow-lg">
                Statistical Analysis
              </span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
              Comprehensive Correlation Matrix
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Advanced statistical correlation analysis revealing intricate relationships between multiple variables 
              in the Brazilian e-commerce dataset. This heatmap visualization identifies key dependencies and 
              interactions that drive business outcomes and customer behavior patterns.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                Statistical Significance: p &lt; 0.001
              </span>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md">
                Explore Details →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderModelsContent = () => {
    const filteredGraphs = filterGraphs(modelGraphs);
    
    return (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-8">Machine Learning Models</h2>
        {renderSearchAndFilter(modelGraphs)}
        
        {filteredGraphs.length === 0 ? (
          <div className="text-center py-12">
            <Search className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No models found</h3>
            <p className="text-gray-500">Try adjusting your search terms or filters</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredGraphs.map(renderGraphCard)}
          </div>
        )}
      </div>
    );
  };

  const renderAchievementsContent = () => (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white p-8 rounded-xl shadow-2xl">
        <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
          Project Achievements
        </h1>
        <h2 className="text-3xl font-semibold mb-4">Data Analysis and Visualization Excellence</h2>
        <p className="text-xl opacity-90">Comprehensive Analysis of Brazilian E-Commerce Dataset</p>
      </div>

      {/* University Information */}
      <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Academic Details</h3>
          <div className="grid md:grid-cols-2 gap-4 text-center">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-1">Institution</h4>
              <p className="text-blue-600">Namal University, Department of Computer Science</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-1">Program</h4>
              <p className="text-purple-600">BS Computer Science, 6th Semester, Session 2024</p>
            </div>
          </div>
          <div className="mt-4 bg-green-50 p-4 rounded-lg border border-green-200 max-w-md mx-auto">
            <h4 className="font-semibold text-green-800 mb-1">Course</h4>
            <p className="text-green-600">CS-352 Data Analysis and Visualization</p>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-xl p-8 border border-blue-200">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Project Overview</h3>
        <p className="text-gray-700 text-lg leading-relaxed text-center max-w-5xl mx-auto">
          The Data Analysis and Visualization project, completed as part of the BS Computer Science program, focused on analyzing customer reviews from the Olist e-commerce dataset using advanced data analysis and Natural Language Processing (NLP) techniques. Over seven phases, the project demonstrated proficiency in data preprocessing, visualization, modeling, and reporting, achieving a <span className="font-bold text-green-600">91% accuracy</span> in sentiment classification using a Random Forest model.
        </p>
      </div>

      {/* Project Phases */}
      <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Project Phases and Achievements</h3>
        <div className="grid gap-6">
          {[
            {
              phase: "Phase 1: Project Proposal",
              description: "Selected the Olist order reviews dataset, a robust, publicly available dataset from an e-commerce platform. Developed a comprehensive proposal outlining research questions to classify customer sentiments as positive or negative, addressing potential challenges like noisy text data.",
              color: "blue"
            },
            {
              phase: "Phase 2: Exploratory Data Analysis (EDA)",
              description: "Conducted in-depth EDA with visualizations (histograms, scatter plots, box plots) to uncover patterns in review scores and text length. Identified initial insights, such as longer reviews correlating with negative sentiments.",
              color: "green"
            },
            {
              phase: "Phase 3: Data Preprocessing",
              description: "Applied NLP techniques including tokenization, stopword removal, stemming, and handling missing values using Python's NLTK library. Ensured clean, structured data for accurate modeling.",
              color: "purple"
            },
            {
              phase: "Phase 4: Correlation Analysis",
              description: "Generated a correlation matrix to identify relationships between review scores and word counts, visualized significant correlations to guide feature selection.",
              color: "pink"
            },
            {
              phase: "Phase 5: Time Series Analysis",
              description: "Analyzed temporal trends in review sentiments (if applicable), identifying seasonal patterns to enhance understanding of customer behavior over time.",
              color: "indigo"
            },
            {
              phase: "Phase 6: Modelling",
              description: "Implemented Logistic Regression and Random Forest classifiers, achieving 91% accuracy with Random Forest on TF-IDF features. Used PCA for 2D visualization of sentiment separation and evaluated models with ROC curves and confusion matrices.",
              color: "orange"
            },
            {
              phase: "Phase 7: Final Report and Presentation",
              description: "Compiled a comprehensive IEEE-formatted report detailing all phases, code, visualizations, and findings. Delivered a 10-minute presentation summarizing key insights, demonstrating clear communication of complex technical concepts.",
              color: "red"
            }
          ].map((item, index) => (
            <div key={index} className={`bg-${item.color}-50 p-6 rounded-lg border border-${item.color}-200 hover:shadow-lg transition-shadow`}>
              <h4 className={`font-bold text-lg text-${item.color}-800 mb-3`}>{item.phase}</h4>
              <p className={`text-${item.color}-700 leading-relaxed`}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Outcomes */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl shadow-xl p-8 border border-green-200">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Key Outcomes</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Developed a sentiment analysis system with 91% accuracy, capable of classifying customer reviews as positive or negative.",
            "Mastered advanced data analysis techniques including Count Vectorization, TF-IDF, PCA, and model evaluation (ROC, AUC).",
            "Enhanced proficiency in Python libraries (Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, NLTK).",
            "Produced professional-grade documentation and visualizations adhering to IEEE standards.",
            "Demonstrated ability to handle real-world datasets and extract actionable business insights."
          ].map((outcome, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-green-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3">
                <div className="bg-green-500 text-white rounded-full p-1 mt-1">
                  <Award className="h-4 w-4" />
                </div>
                <p className="text-gray-700 leading-relaxed">{outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Impact */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-xl p-8 border border-purple-200">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Impact</h3>
        <div className="text-center">
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto mb-6">
            This project showcases the ability to transform raw, unstructured text data into meaningful insights using cutting-edge data science techniques. The sentiment analysis model can help e-commerce platforms automate customer feedback analysis, improving decision-making and customer satisfaction. The skills gained are applicable to real-world data science challenges, preparing students for careers in data analysis and machine learning.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-purple-200 max-w-2xl mx-auto">
            <h4 className="font-bold text-purple-800 mb-2">Learn More About Our Tools</h4>
            <div className="flex justify-center gap-4">
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <a 
                  href="https://docs.google.com/document/d/14FJNFXL9X7VV43ImhrgkORoWmV7dLxqx1TMuxj4qwaY/edit?tab=t.0#heading=h.wbkfl65fpscb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FileText className="h-4 w-4" />
                  View Full Report
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
              <Button asChild variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                <a 
                  href="https://github.com/Usaira-Shahbaz/Data-Analysis-and-Visualization-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  GitHub Repository
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'HOME':
        return renderHomeContent();
      case 'EDA':
        return renderEDAContent();
      case 'TIME_SERIES':
        return renderTimeSeriesContent();
      case 'CORRELATION':
        return renderCorrelationContent();
      case 'MODELS':
        return renderModelsContent();
      case 'ACHIEVEMENTS':
        return renderAchievementsContent();
      default:
        return renderHomeContent();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-xl border-b-4 border-gradient-to-r from-blue-500 to-purple-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex space-x-8">
              {[
                { key: 'HOME', label: 'HOME', icon: Home, color: 'text-blue-600' },
                { key: 'EDA', label: 'EDA', icon: BarChart3, color: 'text-green-600' },
                { key: 'TIME_SERIES', label: 'TIME SERIES', icon: TrendingUp, color: 'text-purple-600' },
                { key: 'CORRELATION', label: 'CORRELATION', icon: GitBranch, color: 'text-pink-600' },
                { key: 'MODELS', label: 'MODELS', icon: Cpu, color: 'text-orange-600' },
                { key: 'ACHIEVEMENTS', label: 'ACHIEVEMENTS', icon: Award, color: 'text-yellow-600' }
              ].map(({ key, label, icon: Icon, color }) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveTab(key);
                    setSearchTerm('');
                    setCategoryFilter('all');
                  }}
                  className={`flex items-center space-x-2 py-4 px-6 text-sm font-medium transition-all duration-300 border-b-2 rounded-t-lg ${
                    activeTab === key
                      ? `${color} border-current bg-gradient-to-t from-blue-50 to-white shadow-lg`
                      : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          {renderContent()}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg font-medium">&copy; 2025 Data Analysis and Visualization Dashboard</p>
          <p className="text-gray-300 text-sm mt-2">Brazilian E-Commerce Analysis Project</p>
          <div className="flex justify-center gap-6 mt-4">
            <a 
              href="https://docs.google.com/document/d/14FJNFXL9X7VV43ImhrgkORoWmV7dLxqx1TMuxj4qwaY/edit?tab=t.0#heading=h.wbkfl65fpscb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-200 transition-colors flex items-center gap-1"
            >
              <FileText className="h-4 w-4" />
              Full Report
            </a>
            <a 
              href="https://github.com/Usaira-Shahbaz/Data-Analysis-and-Visualization-Project"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-purple-200 transition-colors flex items-center gap-1"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </footer>

      {/* Graph Detail Modal */}
      <GraphDetailModal 
        graph={selectedGraph}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Index;
