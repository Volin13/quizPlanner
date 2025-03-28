import React from 'react'
import QuizListItem from './QuizListItem'
import css from './QuizCatalog.module.css'
import quizList from './quizMock.json'

const QuizList = () => {
const loading = false


console.log(quizList )
  return (
<>

<h1 className={css.catalogTitle}>Catalog</h1>
    {loading ? (
      <ul className={css.quizList}>
        {Array.from({ length: 5 }, (_, index) => (
          <LibListItem loading={loading} key={index} />
        ))}
      </ul>
    ) : quizList && quizList.length > 0 ? (
      <ul className={css.quizList}>
        {quizList.map((item) => (
          <QuizListItem   
          key={item.id} 
          id={item.id} 
          title={item.title}
          subTitle={item.subTitle}

          description={item.description}    
          questionsList={item.questions}             
          />))}
      </ul>
    ) : (
      <h1 className={css.noHeroesTitle}>There are no quizes added... yet.</h1>
    )}
    </>
  )
}

export default QuizList