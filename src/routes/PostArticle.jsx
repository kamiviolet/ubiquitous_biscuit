import { useEffect, useState } from 'react'
import Subheader from '../components/Subheader'
import { getAllTopics, postNewArticle } from '../../utils/utils'
import '../css/post_article_form.css'
import { v4 } from 'uuid'

export default function PostArticle({currentUser, listOfArticles, setListOfArticles, topic}) {
    const [alltopics, setAllTopics] = useState([]);
    const [newArticle, setNewArticle] = useState({
        author: currentUser.username,
        topic: "",
        title: "",
        body: "",
        article_img_url: ""
    });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getAllTopics().then(({topics}) => setAllTopics(topics))
    }, [])

    const handlePostArticle = (e) => {
        e.preventDefault();
        
        setIsLoading(true)

        postNewArticle(newArticle)
            .then(({article})=>{
                if (article.topic === topic) {
                    setListOfArticles([article, ...listOfArticles])
                }
            })
            .then(()=>setNewArticle({
                author: currentUser.username,
                topic: "",
                title: "",
                body: "",
                article_img_url: ""
            }))
            .then(()=>{
                setIsLoading(false)
                window.scrollTo(0, 0)
            })
    }

    return (
        <div id="post_article_page">
            <div className='post_article_wrapper'>
                <Subheader title="Post a new article" />
                <form id="post_article_form" action="" onSubmit={handlePostArticle}>
                    <label htmlFor="author" className="label">Author</label>
                    <input
                        className="value author"
                        id="author"
                        value={newArticle.author}
                        type="text"
                        name="author"
                        disabled
                    />
                    <label htmlFor="topic label" className="topic required">Topic</label>
                    <select
                        id="topic"
                        value={newArticle.topic}
                        onChange={(e)=>setNewArticle({...newArticle, topic: e.target.value})}
                        className="topic"
                        disabled={isLoading? true: false}
                    >
                        <option></option>
                        {alltopics.map(topic => {
                            return (
                                <option key={v4()} value={topic.slug}>{topic.slug[0].toUpperCase()+topic.slug.substring(1)}</option>
                            )
                        })}
                    </select>
                    <label htmlFor="title" className="label title required">Title</label>
                    <input
                        className="value title"
                        id="title"
                        value={newArticle.title}
                        onChange={(e)=>setNewArticle({...newArticle, title: e.target.value})}
                        type="text"
                        name="title"
                        disabled={isLoading? true: false}
                        required
                    />
                    <label htmlFor="article_body" className="label article_body required">Body</label>
                    <textarea
                        className="value article_body"
                        id="article_body"
                        value={newArticle.body}
                        onChange={(e)=>setNewArticle({...newArticle, body: e.target.value})}
                        type="text"
                        name="article_body"
                        disabled={isLoading? true: false}
                        required
                    />
                    <label htmlFor="article_img" className="label article_img">
                        Illustration<br />(Providing images can help to boost the popularity of your article)</label>
                    <input
                        className="value article_img"
                        id="article_img"
                        value={newArticle.article_img_url}
                        name="article_img"
                        placeholder='https://'
                        onChange={(e)=>setNewArticle({...newArticle, article_img_url: e.target.value})}
                        type="url"
                        disabled={isLoading? true: false}
                    />
                    <button type="submit" disabled={isLoading? true: false}>Post</button>
                </form>
            </div>
        </div>
    )
}