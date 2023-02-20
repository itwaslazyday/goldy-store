import { articles } from '../../const';
import ArticleItem from '../article-item/article-item';
import './articles.css';

function Articles (): JSX.Element {
  return (
    <section className='articles'>
      <div className='container'>
        <div className='articles__inner'>
          <h2 className='articles__heading secondary-heading'>Статьи</h2>
          <a className='articles__all-link link-reset' href='#'>{'Читать все'.toUpperCase()}</a>
          <ul className='articles__list list-reset'>
            {
              articles.map((article) => (
                <li className='articles__list-item' key={article.id}>
                  <ArticleItem article={article}/>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Articles;
