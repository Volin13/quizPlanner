import React, { useCallback, useEffect, useMemo, useState } from 'react'
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,KeyboardSensor
} from '@dnd-kit/core';
import debounce from 'lodash.debounce';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import QuizListItem from './QuizListItem'
import css from './QuizCatalog.module.css'
import quizList from './quizMock.json'

const QuizList = () => {
const loading = false
const [items, setItems] = useState(quizList);

const sensors = useSensors(
  useSensor(PointerSensor),
  useSensor(KeyboardSensor, {
    coordinateGetter: sortableKeyboardCoordinates,
  })
);
console.log(items)
useEffect(() => {
  const saved = sessionStorage.getItem('quizList');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) setItems(parsed);
    } catch (e) {
      console.error('Невірний формат у sessionStorage', e);
    }
  }
}, []);



const debouncedSaveNewOrder = useMemo(() => 
  debounce((newItems) => {
    // console.log('Зберігаю новий порядок:', newItems);

sessionStorage.setItem('quizList', JSON.stringify(newItems))
  }, 1000), 
  []
, []);

const saveNewOrder = useCallback((newItems) => {
  debouncedSaveNewOrder(newItems);
}, [debouncedSaveNewOrder]);


const handleDragEnd = (event) => {
  const { active, over } = event;
  if (active.id !== over?.id) {
    const oldIndex = items.findIndex((item) => item.id === active.id);
    const newIndex = items.findIndex((item) => item.id === over.id);
    const newItems = arrayMove(items, oldIndex, newIndex);
    
    // Збереження порядку без зміни оригінальних id
    const updatedItems = newItems.map((item, index) => ({
      ...item,  
      position: index 
    }));

    setItems(updatedItems);
    saveNewOrder(updatedItems); 
  }
};
// console.log('Список', items )

  return (
<>

<h1 className={css.catalogTitle}>Catalog</h1>
    {loading ? (
      <ul className={css.quizList}>
        {Array.from({ length: 5 }, (_, index) => (
          <LibListItem loading={loading} key={index} />
        ))}
      </ul>
    ) : items && items.length > 0 ? (
      <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext  items={items.map(item => item.id)} strategy={verticalListSortingStrategy}>
        <ul className={css.quizList}>
        {items.map((item) => (
          <QuizListItem   
          key={item?.id} 
          id={item.id} 
          title={item.title}
          subTitle={item.subTitle}

          description={item.description}    
          questionsList={item.questions}             
          />))}
      </ul>
      </SortableContext>
    </DndContext>
     
    ) : (
      <h1 className={css.noHeroesTitle}>There are no quizes added... yet.</h1>
    )}
    </>
  )
}

export default QuizList