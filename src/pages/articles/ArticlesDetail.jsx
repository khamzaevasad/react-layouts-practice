import { useParams } from 'react-router-dom';
import { Usefetch } from '../../hooks/Usefetch';

function ArticlesDetail() {
  const { id } = useParams();
  const url = 'http://localhost:3000/articles/' + id;
  const { data: article, error, isPending } = Usefetch(url);
  return (
    <div>
      {isPending && <h3>Loading..</h3>}
      {error && <h3>{error}</h3>}

      {article && (
        <>
          <img src={article.image} alt={article.title} height="300" />
          <h3>Title: {article.title}</h3>
          <p>Author: {article.author}</p>
          <p>{article.body}</p>
        </>
      )}
    </div>
  );
}

export default ArticlesDetail;
