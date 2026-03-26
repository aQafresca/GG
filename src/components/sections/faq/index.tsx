import { useState } from 'react';

import { Accordion } from '@/components/accordion';
import { questionsConfig } from '@/shared/lib/config';

import styles from './index.module.scss';

export const FaqSection = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className={styles.wrapper}>
      <p className={styles.text}>
        "Мы работаем со светом уже 5 лет и знаем, как важно продумать каждую деталь. Здесь мы собрали ответы на
        технические и организационные моменты, которые чаще всего возникают у наших клиентов. Мы ценим ваше время,
        поэтому постарались быть максимально краткими."
      </p>
      <h3 className={styles.title}>Часто задаваемые вопросы</h3>
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
