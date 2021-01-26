import React, { useState, useContext } from "react";
import "./AddArticle.css";
import {ArticleContext} from '../../context/articleContext'

const AddArticle = () => {
  const [article, setArticle] = useState();
const {dispatch} =useContext(ArticleContext) 

  const handleArticleData=(e)=>{
    setArticle({
      ...article,
      [e.target.id]:e.target.value
    })
  }

  const AddNewArticle=(e)=>{
      e.preventDefault()

      dispatch({type:"ADD_ARTICLE", article})

  }

  return (
    <form  className="add-article">
      <input
      onChange={handleArticleData}
        type="text"
        id="title"
        placeholder="Title"
      />
      <input
      onChange={handleArticleData}

        type="text"
        id="body"
        placeholder="Body"
      />
      <button type='submit' onClick={AddNewArticle}>Add article</button>
    </form>
  );
};
export default AddArticle;





//context version

// import React, { useState, useContext } from "react";
// import "./AddArticle.css";
// import {ArticleContext} from '../../context/articleContext'

// const AddArticle = () => {
//   const [article, setArticle] = useState();
//   const { saveArticle } = useContext(ArticleContext) 


//   const handleArticleData=(e)=>{
//     setArticle({
//       ...article,
//       [e.target.id]:e.target.value
//     })
//   }

//   const AddNewArticle=(e)=>{
//       e.preventDefault()
//       saveArticle(article)
//   }

//   return (
//     <form  className="add-article">
//       <input
//       onChange={handleArticleData}
//         type="text"
//         id="title"
//         placeholder="Title"
//       />
//       <input
//       onChange={handleArticleData}

//         type="text"
//         id="body"
//         placeholder="Body"
//       />
//       <button type='submit' onClick={AddNewArticle}>Add article</button>
//     </form>
//   );
// };
// export default AddArticle;
