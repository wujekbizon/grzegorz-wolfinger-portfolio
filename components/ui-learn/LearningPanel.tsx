import styles from './LearningPanel.module.scss'
import type { QuestionCardInterface } from '@/types'
import { QuestionCard } from '@/components'

const LearningPanel = ({ panelArr }: { panelArr: QuestionCardInterface[] }) => {
  return (
    <>
      {panelArr.map((question) => (
        <QuestionCard {...question} key={question.number} />
      ))}
    </>
  )
}
export default LearningPanel

// import React, { useState, useEffect, useRef } from 'react'; import { BsSearch } from 'react-icons/bs'; import { questions } from './questions';
// Import your questions array const Learning = () => { const [isStudy, setIsStudy] = useState(false); const [isTest, setIsTest] = useState(false); const [searchTerm, setSearchTerm] = useState(''); const [filteredQuestions, setFilteredQuestions] = useState([]); const containerRef = useRef(null); useEffect(() => { setFilteredQuestions(questions.slice(0, 20)); // Initial rendering with 20 questions }, []); useEffect(() => { // Define the observer callback function const observerCallback = (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { // Load more questions when the target element is visible const remainingQuestions = questions.slice(filteredQuestions.length, filteredQuestions.length + 20); if (remainingQuestions.length > 0) { setFilteredQuestions((prevQuestions) => [...prevQuestions, ...remainingQuestions]); } } }); }; // Create the observer const observer = new IntersectionObserver(observerCallback, { threshold: 0.5 }); // Observe the container element const containerElement = containerRef.current; if (containerElement) { observer.observe(containerElement); } // Clean up the observer when the component is unmounted return () => { if (containerElement) { observer.unobserve(containerElement); } }; }, [filteredQuestions]); const handleShowStudy = () => { setIsTest(false); setIsStudy(true); }; const handleShowTest = () => { setIsStudy(false); setIsTest(true); }; const handleSearch = () => { const filterItem = questions.filter((item) => { const regex = new RegExp(searchTerm, 'i'); return regex.test(item.question) || item.number.toString().includes(searchTerm); }); setFilteredQuestions(filterItem.slice(0, 20)); }; return ( <section className={styles.learning}> <div className={styles.learning_panel}> {/* Rest of your component code */} <div className={styles.test_container} ref={containerRef}> {/* Render the filtered questions */} {!isStudy && <InfoCard {...TEST} />} {isStudy && ( <> {filteredQuestions.map((question) => ( <QuestionCard {...question} key={question.number} /> ))} </> )} </div> </div> </section> ); }
