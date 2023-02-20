import './article-item.css';
import { Article } from '../../types/types';

type ArticleProps = {
  article: Article;
}

function ArticleItem ({article}: ArticleProps): JSX.Element {
  return (
    <article className='article'>
      <a className='article__item-link link-reset' href='#'>
        <picture>
          <source srcSet={`/img/articles/${article.id}@1x.webp 1x, /img/articles/${article.id}@2x.webp 2x`}
            type='image/webp'
          />
          <img
            className='article__image'
            src={`/img/articles/${article.id}@1x.png`}
            srcSet={`/img/articles/${article.id}@2x.png 2x`}
            alt={article.title}
            width='310'
            height='381'
          />
        </picture>
      </a>
      <p className='article__date'>{article.date}</p>
      <a className='article__item-link link-reset' href='#'>
        <h3 className='article__heading tertiary-heading'>{article.title}</h3>
      </a>
    </article>
  );
}

export default ArticleItem;
