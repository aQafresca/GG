import { useState } from 'react';

import { Accordion } from '@/components/accordion';
import { questionsConfig } from '@/shared/lib/config';

import styles from './index.module.scss';

export const FaqSection = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className={`container ${styles.faq}`}>
      <div className={styles.description}>
        <div>
          <h4>Вопросы, которые чаще всего задают наши клиенты</h4>
          <h5>Сохрани свое время</h5>
        </div>
        <p className={styles.text}>
          Мы работаем со светом уже 5 лет и знаем, как важно продумать каждую деталь. Здесь мы собрали ответы на
          технические и организационные моменты, которые чаще всего возникают у наших клиентов. Мы ценим ваше время,
          поэтому постарались быть максимально краткими.
        </p>
      </div>
      <div className={styles.inner}>
        {questionsConfig.map((item) => (
          <Accordion
            key={item.id}
            title={item.question}
            open={activeId === item.id}
            onToggle={() => setActiveId((prev) => (prev === item.id ? null : item.id))}
          >
            {item.answer}
          </Accordion>
        ))}
      </div>
    </section>
  );
};
