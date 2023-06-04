import Subheader from '../components/Subheader'
import '../css/post_article_form.css'

export default function PostArticle() {
    return (
        <div id="post_article_page">
            <div className='post_article_wrapper'>
                <Subheader title="Post a new article" />
                <form id="post_article_form">
                    <label>author</label>
                    <input type="text" />
                    <label>title</label>
                    <input type="text" />
                    <label>body</label>
                    <input type="text" />
                    <label>topic</label>
                    <input type="text" />
                    <label>Illustration<br />(Providing images can help to boost the popularity of your article)</label>
                    <input type="url" />
                </form>
            </div>
        </div>
    )
}

/* 
...article
article_id
votes
created_at
comment_count
 */