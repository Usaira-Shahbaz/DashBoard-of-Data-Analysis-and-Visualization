
export interface GraphData {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  fallbackUrl: string;
}

export const edaGraphs: GraphData[] = [
  {
    id: 1,
    title: "Total Sales by State",
    description: "Displays total sales revenue in dollars across different states",
    category: "Sales",
    imageUrl: "https://raw.githubusercontent.com/Usaira-Shahbaz/Graphs/main/EDA1.png",
    fallbackUrl: "https://via.placeholder.com/400x300?text=Customer+Distribution"
  },
  {
    id: 2,
    title: "Payment Type Distribution",
    description: "Shows the percentage distribution of different payment types",
    category: "Payment",
    imageUrl: "https://raw.githubusercontent.com/Usaira-Shahbaz/Graphs/main/EDA2.png",
    fallbackUrl: "https://via.placeholder.com/400x300?text=Category+Performance"
  },
  {
    id: 3,
    title: "Average Review Score by Review Delay",
    description: "Illustrates the average review scores based on the delay between purchase and review",
    category: "Satisfaction",
    imageUrl: "https://raw.githubusercontent.com/Usaira-Shahbaz/Graphs/main/EDA3.png",
    fallbackUrl: "https://via.placeholder.com/400x300?text=Order+Values"
  },
  {
    id: 4,
    title: "Effect of Review Length on Customer Sentiment (Rating)",
    description: "Displays the range of customer sentiment ratings based on review length",
    category: "Satisfaction",
    imageUrl: "https://raw.githubusercontent.com/Usaira-Shahbaz/Graphs/main/EDA4.png",
    fallbackUrl: "https://via.placeholder.com/400x300?text=Payment+Methods"
  },
  {
    id: 5,
    title: "Top 10 Most Sold Product Categories",
    description: "Shows the number of orders for the top 10 product categories",
    category: "Sales",
    imageUrl: "https://raw.githubusercontent.com/Usaira-Shahbaz/Graphs/main/EDA5.png",
    fallbackUrl: "https://via.placeholder.com/400x300?text=Delivery+Metrics"
  },
  {
    id: 6,
    title: "Review Score Distribution",
    description: "Shows the frequency of review scores from 1 to 5",
    category: "Satisfaction",
    imageUrl: "https://raw.githubusercontent.com/Usaira-Shahbaz/Graphs/main/EDA6.png",
    fallbackUrl: "https://via.placeholder.com/400x300?text=Seasonal+Patterns"
  },
  {
    id: 7,
    title: "Frequency of Key Words in 5-Star Review Comments",
    description: "Displays the frequency of prominent words in 5-star review comments",
    category: "Satisfaction",
    imageUrl: "https://raw.githubusercontent.com/Usaira-Shahbaz/Graphs/main/EDA7.png",
    fallbackUrl: "https://via.placeholder.com/400x300?text=Satisfaction+Scores"
  },
  {
    id: 8,
    title: "Average Price for Top 10 Product Categories",
    description: "Displays the average price across the top 10 product categories",
    category: "Financial",
    imageUrl: "https://raw.githubusercontent.com/Usaira-Shahbaz/Graphs/main/EDA8.png",
    fallbackUrl: "https://via.placeholder.com/400x300?text=Freight+Costs"
  },
  {
    id: 9,
    title: "Top 10 Customer Cities by Order Volume",
    description: "Displays the total order volume for the top 10 customer cities",
    category: "Sales",
    imageUrl: "https://raw.githubusercontent.com/Usaira-Shahbaz/Graphs/main/EDA9.png",
    fallbackUrl: "https://via.placeholder.com/400x300?text=Product+Rankings"
  },
  {
    id: 10,
    title: "Monthly Average Review Score Over Time",
    description: "Tracks the monthly average review score from Jan 2017 to Jul 2018",
    category: "Temporal",
    imageUrl: "https://raw.githubusercontent.com/Usaira-Shahbaz/Graphs/main/EDA10.png",
    fallbackUrl: "https://via.placeholder.com/400x300?text=Market+Share"
  },
  {
    id: 11,
    title: "Price vs. Review Score (Under $500)",
    description: "Compares the average product price with review scores ranging from 1 to 5",
    category: "Satisfaction",
    imageUrl: "https://raw.githubusercontent.com/Usaira-Shahbaz/Graphs/main/EDA11.png",
    fallbackUrl: "https://via.placeholder.com/400x300?text=Revenue+Growth"
  },
  {
    id: 12,
    title: "Delivery Delay vs. Review Score (Under 30 Days)",
    description: "Compares delivery times in days with review scores from 1 to 5",
    category: "Satisfaction",
    imageUrl: "https://raw.githubusercontent.com/Usaira-Shahbaz/Graphs/main/EDA12.png",
    fallbackUrl: "https://via.placeholder.com/400x300?text=Customer+LTV"
  },
  {
    id: 13,
    title: "Total Sales Value by Product Category",
    description: "Shows the total sales value for different product categories",
    category: "Sales",
    imageUrl: "https://raw.githubusercontent.com/Usaira-Shahbaz/Graphs/main/EDA13.png",
    fallbackUrl: "https://via.placeholder.com/400x300?text=Completion+Rates"
  }
];

export const timeSeriesGraphs: GraphData[] = [
  {
    id: 1,
    title: "Monthly Sales Pattern (Multi-Year)",
    description: "Tracks monthly total sales across the years 2016, 2017, and 2018",
    category: "Temporal",
    imageUrl: "https://raw.githubusercontent.com/Usaira-Shahbaz/Graphs/main/Tim1.png",
    fallbackUrl: "https://via.placeholder.com/600x400?text=Sales+Forecast"
  },
  {
    id: 2,
    title: "Average Sales by Day of Week (Stacked by Year)",
    description: "Displays average sales prices stacked by year (2016, 2017, 2018) for each day of the week",
    category: "Sales",
    imageUrl: "https://raw.githubusercontent.com/Usaira-Shahbaz/Graphs/main/Time2.png",
    fallbackUrl: "https://via.placeholder.com/600x400?text=Revenue+Trends"
  },
  {
    id: 3,
    title: "Sales vs Sentiment Over Time",
    description: "Tracks total sales and average sentiment polarity from 2016 to 2018",
    category: "Temporal",
    imageUrl: "https://raw.githubusercontent.com/Usaira-Shahbaz/Graphs/main/Time3.png",
    fallbackUrl: "https://via.placeholder.com/600x400?text=Customer+Acquisition"
  },
  {
    id: 4,
    title: "Product-wise Sales Trends Over Time",
    description: "Tracks total sales for five product categories from 2016 to 2018",
    category: "Temporal",
    imageUrl: "https://raw.githubusercontent.com/Usaira-Shahbaz/Graphs/main/Time4.png",
    fallbackUrl: "https://via.placeholder.com/600x400?text=Processing+Efficiency"
  },
  {
    id: 5,
    title: "Order Count Forecast (6 Months)",
    description: "Shows historical order counts from 2016-10 to 2018-07 and a forecast for the next 6 months",
    category: "Temporal",
    imageUrl: "https://raw.githubusercontent.com/Usaira-Shahbaz/Graphs/main/Time5.png",
    fallbackUrl: "https://via.placeholder.com/600x400?text=Market+Volatility"
  }
];

export const modelGraphs: GraphData[] = [
  {
    id: 1,
    title: "Model 1: Linear Regression: Actual vs Predicted (Test Set)",
    description: "Compares actual ladder scores with predicted scores from a linear regression model",
    category: "Regression",
    imageUrl: "https://raw.githubusercontent.com/Usaira-Shahbaz/Graphs/main/Model 1.1.png",
    fallbackUrl: "https://via.placeholder.com/500x300?text=Linear+Regression"
  },
  {
    id: 2,
    title: "Model 1: KDE Plot of Actual vs Predicted Review Scores",
    description: "Compares the density distribution of actual and predicted review scores",
    category: "Validation",
    imageUrl: "https://raw.githubusercontent.com/Usaira-Shahbaz/Graphs/main/Model 1.2.png",
    fallbackUrl: "https://via.placeholder.com/500x300?text=Feature+Importance"
  },
  {
    id: 3,
    title: "Model 2: Word Count vs Review Score",
    description: "Displays the distribution of word counts in reviews across different review scores",
    category: "Feature analysis",
    imageUrl: "https://raw.githubusercontent.com/Usaira-Shahbaz/Graphs/main/Model 2.1.png",
    fallbackUrl: "https://via.placeholder.com/500x300?text=Classification+Accuracy"
  },
  {
    id: 4,
    title: "Model 2: PCA of Count Vectors",
    description: "Visualizes the distribution of count vectors using PCA, colored by review scores (1.0 and 5.0)",
    category: "Feature analysis",
    imageUrl: "https://raw.githubusercontent.com/Usaira-Shahbaz/Graphs/main/Model 2.2.png",
    fallbackUrl: "https://via.placeholder.com/500x300?text=Cross+Validation"
  },
  {
    id: 5,
    title: "Model 2: PCA of TF-IDF Vectors",
    description: "Visualizes the distribution of TF-IDF vectors using PCA, colored by review scores (1.0 and 5.0)",
    category: "Feature analysis",
    imageUrl: "https://raw.githubusercontent.com/Usaira-Shahbaz/Graphs/main/Model 2.3.png",
    fallbackUrl: "https://via.placeholder.com/500x300?text=Hyperparameter+Tuning"
  },
  {
    id: 6,
    title: "Model 2: Confusion Matrix - Logistic Regression (CountVectorizer)",
    description: "Shows the performance of a logistic regression model using CountVectorizer, comparing true and predicted labels",
    category: "Validation",
    imageUrl: "https://raw.githubusercontent.com/Usaira-Shahbaz/Graphs/main/Model 2.4.png",
    fallbackUrl: "https://via.placeholder.com/500x300?text=Ensemble+Models"
  },
  {
    id: 7,
    title: "Model 2: Confusion Matrix - Logistic Regression (TF-IDF)",
    description: "Shows the performance of a logistic regression model using TF-IDF, comparing true and predicted labels",
    category: "Validation",
    imageUrl: "https://raw.githubusercontent.com/Usaira-Shahbaz/Graphs/main/Model 2.5.png",
    fallbackUrl: "https://via.placeholder.com/500x300?text=Confidence+Intervals"
  },
  {
    id: 8,
    title: "Model 2: Top Features from Logistic Regression",
    description: "Displays the coefficient values of the top 20 negative and positive weight words from a logistic regression model",
    category: "Interpretability",
    imageUrl: "https://raw.githubusercontent.com/Usaira-Shahbaz/Graphs/main/Model 2.6.png",
    fallbackUrl: "https://via.placeholder.com/500x300?text=Bias+Analysis"
  },
  {
    id: 9,
    title: "Model 2: ROC Curve - Logistic Regression (TF-IDF)",
    description: "Displays the Receiver Operating Characteristic curve for a logistic regression model using TF-IDF, with an area of 0.89",
    category: "Validation",
    imageUrl: "https://raw.githubusercontent.com/Usaira-Shahbaz/Graphs/main/Model 2.7.png",
    fallbackUrl: "https://via.placeholder.com/500x300?text=Deep+Learning"
  },
  {
    id: 10,
    title: "Model 2: ROC Curve - Random Forest (TF-IDF)",
    description: "Displays the Receiver Operating Characteristic curve for a random forest model using TF-IDF, with an area of 0.91",
    category: "Validation",
    imageUrl: "https://raw.githubusercontent.com/Usaira-Shahbaz/Graphs/main/Model 2.8.png",
    fallbackUrl: "https://via.placeholder.com/500x300?text=Model+Interpretability"
  }
];
