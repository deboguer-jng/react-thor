import React, { createContext, useContext, useState } from 'react';

const initialValue = {
  nodes: [],
  faq: [],
};
export const MainCreateContext = createContext(initialValue);

export const useMainContext = () => useContext(MainCreateContext);

export const MainContextWrapper = ({ children }) => {
  const [faq, setFaq] = useState([
    {
      question: 'What is the origin of Thor?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quisquam blanditiis cum tenetur earum facere, optio nobis. Eligendi nesciunt aliquam reiciendis sit earum tenetur, repellendus nemo beatae maiores? Atque, omnis!',
    },
    {
      question: 'What is the origin of Thor2?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quisquam blanditiis cum tenetur earum facere, optio nobis. Eligendi nesciunt aliquam reiciendis sit earum tenetur, repellendus nemo beatae maiores? Atque, omnis!',
    },
    {
      question: 'What is the origin of Thor3?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quisquam blanditiis cum tenetur earum facere, optio nobis. Eligendi nesciunt aliquam reiciendis sit earum tenetur, repellendus nemo beatae maiores? Atque, omnis!',
    },
    {
      question: 'What is the origin of Thor4?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quisquam blanditiis cum tenetur earum facere, optio nobis. Eligendi nesciunt aliquam reiciendis sit earum tenetur, repellendus nemo beatae maiores? Atque, omnis!',
    },
    {
      question: 'What is the origin of Thor5?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quisquam blanditiis cum tenetur earum facere, optio nobis. Eligendi nesciunt aliquam reiciendis sit earum tenetur, repellendus nemo beatae maiores? Atque, omnis!',
    },
    {
      question: 'What is the origin of Thor?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quisquam blanditiis cum tenetur earum facere, optio nobis. Eligendi nesciunt aliquam reiciendis sit earum tenetur, repellendus nemo beatae maiores? Atque, omnis!',
    },
    {
      question: 'What is the origin of Thor?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quisquam blanditiis cum tenetur earum facere, optio nobis. Eligendi nesciunt aliquam reiciendis sit earum tenetur, repellendus nemo beatae maiores? Atque, omnis!',
    },
    {
      question: 'What is the origin of Thor?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quisquam blanditiis cum tenetur earum facere, optio nobis. Eligendi nesciunt aliquam reiciendis sit earum tenetur, repellendus nemo beatae maiores? Atque, omnis!',
    },
    {
      question: 'What is the origin of Thor?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quisquam blanditiis cum tenetur earum facere, optio nobis. Eligendi nesciunt aliquam reiciendis sit earum tenetur, repellendus nemo beatae maiores? Atque, omnis!',
    },
    {
      question: 'What is the origin of Thor?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quisquam blanditiis cum tenetur earum facere, optio nobis. Eligendi nesciunt aliquam reiciendis sit earum tenetur, repellendus nemo beatae maiores? Atque, omnis!',
    },
    {
      question: 'What is the origin of Thor?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quisquam blanditiis cum tenetur earum facere, optio nobis. Eligendi nesciunt aliquam reiciendis sit earum tenetur, repellendus nemo beatae maiores? Atque, omnis!',
    },
    {
      question: 'What is the origin of Thor?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quisquam blanditiis cum tenetur earum facere, optio nobis. Eligendi nesciunt aliquam reiciendis sit earum tenetur, repellendus nemo beatae maiores? Atque, omnis!',
    },
    {
      question: 'What is the origin of Thor?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quisquam blanditiis cum tenetur earum facere, optio nobis. Eligendi nesciunt aliquam reiciendis sit earum tenetur, repellendus nemo beatae maiores? Atque, omnis!',
    },
    {
      question: 'What is the origin of Thor?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quisquam blanditiis cum tenetur earum facere, optio nobis. Eligendi nesciunt aliquam reiciendis sit earum tenetur, repellendus nemo beatae maiores? Atque, omnis!',
    },
    {
      question: 'What is the origin of Thor?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quisquam blanditiis cum tenetur earum facere, optio nobis. Eligendi nesciunt aliquam reiciendis sit earum tenetur, repellendus nemo beatae maiores? Atque, omnis!',
    },
    {
      question: 'What is the origin of Thor?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quisquam blanditiis cum tenetur earum facere, optio nobis. Eligendi nesciunt aliquam reiciendis sit earum tenetur, repellendus nemo beatae maiores? Atque, omnis!',
    },
  ]);
  const [filteredFAQ, setFilteredFAQ] = useState([]);
  const [query, setQuery] = useState();
  return (
    <MainCreateContext.Provider
      value={{
        initialFAQ: faq,
        filteredFAQ,
        setFilteredFAQ,
        query,
        setQuery,
        setFaq,
      }}
    >
      {children}
    </MainCreateContext.Provider>
  );
};
