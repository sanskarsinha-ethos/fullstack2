import { Typography, Paper, Box, Card, CardContent, Grid } from "@mui/material";

function Projects() {
  const projectList = [
    {
      title: "Image Classification with TensorFlow",
      description: "Developed a deep learning model using TensorFlow and Keras to classify images with 95% accuracy. Implemented CNN architecture with Python and trained on custom dataset."
    },
    {
      title: "Sentiment Analysis NLP Project",
      description: "Built a Natural Language Processing model using scikit-learn and NLTK to analyze sentiment from text data. Achieved 92% accuracy on sentiment classification using machine learning algorithms."
    },
    {
      title: "Java Spring Boot REST API",
      description: "Created a full-stack RESTful API using Java Spring Boot with MySQL database integration. Implemented authentication, data validation, and comprehensive unit testing with JUnit."
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "Developed ML-based predictive model using Python (pandas, scikit-learn) with interactive visualizations. Predicts customer churn with 89% precision using ensemble methods."
    },
    {
      title: "Java Microservices Architecture",
      description: "Built scalable microservices using Java Spring Boot, Spring Cloud, and Docker. Implemented service discovery, API gateway, and inter-service communication patterns."
    },
    {
      title: "Time Series Forecasting",
      description: "Created LSTM neural network using TensorFlow for stock price prediction. Processed time-series data with PyTorch and achieved 87% directional accuracy on predictions."
    }
  ];

  return (
    <Paper elevation={3} style={{ padding: '20px', margin: '20px 0' }}>
      <Box>
        <Typography variant="h4" component="h2" gutterBottom>
          My Projects
        </Typography>
        <Grid container spacing={3}>
          {projectList.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
}

export default Projects;
