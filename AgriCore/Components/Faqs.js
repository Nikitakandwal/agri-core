import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';

const Faqs = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const faqData = [
    "How to add a new product?",
    "How to create order profiles?",
    "What is Agricare?",
    "How to quickly re-order?",
    "What is Agricare?",
    "How to quickly re-order?",
  ];

  const handleQuestionPress = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  const renderFaqs = () => {
    return faqData.map((faq, index) => (
      <TouchableOpacity
        key={index}
        style={styles.questionContainer}
        onPress={() => handleQuestionPress(index)}
      >
        <Text style={[styles.question, selectedQuestion === index && styles.selectedQuestion]}>
          {`Q${index + 1}. ${faq}`}
        </Text>
        {selectedQuestion === index && (
          <Text style={styles.answerText}>Ans: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        )}
      </TouchableOpacity>
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Frequently Asked Questions</Text>
      {renderFaqs()}
      <Text style={styles.howToVideosHeading}>How to videos?</Text>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  questionContainer: {
    marginBottom: 10,
  },
  question: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 5,
  },
  selectedQuestion: {
    fontWeight: 'bold',
  },
  answerText: {
    fontSize: 14,
    color: '#333333',
    marginLeft: 15,
  },
  howToVideosHeading: {
    fontSize: 16,
    color: '#333333',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  video: {
    width: 285,
    height: 185,
  },
});

export default Faqs;
