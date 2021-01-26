import React from "react";
import "./Article.css";
// import Articles from '../../containers/Articles'

const article = (props) => {
  console.log(props)
  return(
  <div className="article">
    <h1>{props.article.title}</h1>
    <p>{props.article.body}</p>
  </div>
  )
  };

export default article;




// import React from "react";
// import "./Article.css";
// // import Articles from '../../containers/Articles'

// const article = (props) => {
//   console.log(props)
//   return(
//   <div className="article">
//     <h1>{props.article.title}</h1>
//     <p>{props.article.body}</p>
//   </div>
//   )
//   };

// export default article;
