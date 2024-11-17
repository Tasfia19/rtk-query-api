
import './App.css'
import { useGetAllPostQuery } from './services/post';
import { useGetPostByIdQuery } from './services/post';
import { useGetPostByLimitQuery } from './services/post';
import { useDeletePostMutation } from './services/post';
import { useCreatePostMutation,useUpdatePostMutation } from './services/post';
import {newPost} from './data/data';
import {updatePostData} from './data/data';

function App() {
 // way 1:
  // const {data,isLoading,isError,isSuccess}=useGetAllPostQuery();//i have defined all these property in above line
// // console.log("response:",data);
// // console.log("Loading:",isLoading);
// // console.log("Success:",isSuccess);
// // console.log("Error:",isError);

//way 2:
 //const responseInfo=useGetAllPostQuery();
// console.log("response:",responseInfo);
// console.log("response:",responseInfo.data);
// console.log("response:",responseInfo.isLoading);
// console.log("response:",responseInfo.isSuccess);
//if(responseInfo.isLoading) return <div>Loading...</div>
//if(responseInfo.isError) return <div>Error occured...</div>

//for delete
//  const [deletePost,responseInfo]=useDeletePostMutation();
//  console.log("response:",responseInfo);
// console.log("Loading:",responseInfo.isLoading);
//  console.log("Success:",responseInfo.isSuccess);

//for create
// const [createPost,responseInfo]=useCreatePostMutation();
//  console.log("response:",responseInfo);
//  console.log("Loading:",responseInfo.isLoading);
//   console.log("Success:",responseInfo.isSuccess);
//for update
 const [updatePost,responseInfo]=useUpdatePostMutation();
 console.log("response:",responseInfo);
 console.log("Loading:",responseInfo.isLoading);
  console.log("Success:",responseInfo.isSuccess);

  //now for showing ui
 return (
  //get all data
    // <div className="App">
    //   <h1>Hi, Tasfia</h1>
    //   {responseInfo.data?.map((post, i) => (
    //     <div key={i}>
    //       <h2>
    //         {post.id}. {post.title}
    //       </h2>
    //       <p>{post.body}</p>
    //       <hr />
    //     </div>
      //))}
   // </div>


   //for single data
  //  <div className="App">
  //    <h1>Hi, Tasfia</h1>
  //     <h2>
  //       {responseInfo.data?.id}. {responseInfo.data?.title}
  //     </h2>
  //     <p>{responseInfo.data?.body}</p>
  //   </div>
    //get limited data
    //  <div className="App">
    //   <h1>Hi, Tasfia</h1>
    //   {responseInfo.data?.map((post, i) => (
    //     <div key={i}>
    //       <h2>
    //         {post.id}. {post.title}
    //       </h2>
    //       <p>{post.body}</p>
    //       <hr />
    //     </div>
    //   ))}
    //   </div>
      // Delete Data
//      <div className="App">
// <h1>Hi, Tasfia</h1>
// <button onClick={()=>{deletePost(2)}}>Delete Post</button>
//      </div>

//      //createpost
//        <div className="App">
// <h1>Hi, Tasfia</h1>
// <button onClick={()=>{createPost(newPost)}}>Create Post</button>
//      </div>
//update post
 <div className="App">
 <h1>Hi, Tasfia</h1>
 <button onClick={()=>{updatePost(updatePostData)}}>Update Post</button>
     </div>
  );
}

export default App;