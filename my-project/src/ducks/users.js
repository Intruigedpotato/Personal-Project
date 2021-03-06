import axios from 'axios';

const initialState = { //when the app is first run there is no state that is created yet so we must declare an initialState first
    user: {},
    blogPosts:[], //the initialstate is treated as PROPS :D
    photos:[{link: ''}],
    post:[{blogid:''}],
    addPhoto:'',
    input:'',
    comment:'',
    comments:[],
    blogid:'',
    deletedComment:'',
    newBlog:'',
    addBlog: '',
    date: '',
    title:'',
    deletedPost:'',
    deletedPhoto:''
}

const GET_USER_INFO = 'GET_USER_INFO';

export function getUserInfo() {
    const userData = axios.get('/auth/me')//this is an action (same thing as an action creator)
    .then( res => {
        return res.data
    })
    return {
        type:GET_USER_INFO ,
        payload: userData //
    }
}

const GET_ALL_BLOGS = 'GET_ALL_BLOGS'; //set it as a string value because reasons

export function getBlogs() { //export the function after the const is defined
    const blogPosts = axios.get('/api/allblogs') //the payload is equal to axios.get('the endpoint you made with the controller logic in the server file')
    .then( res => { //the payload is also equal to everything after the endpoint. it's equal to the whole function basically
        // console.log('get all blogs',res.data)
        return res.data
    })
    return {
        type:GET_ALL_BLOGS,
        payload: blogPosts
    }
}

const GET_ALL_PHOTOS = 'GET_ALL_PHOTOS'

export function getPhotos() {
    console.log('get photos fired')
    const photos = axios.get('/api/allphotos')
    .then( res => {
        console.log("get photos res: ", res.data)
        return res.data
    })
    return {
        type:GET_ALL_PHOTOS,
        payload:photos
    }
}

const GET_BLOG_POST = 'GET_BLOG_POST'

export function getPost(id) {
    console.log('getting blog post',id)
  const post =  axios.get('/api/post/' + id )
    .then( res => {
        console.log('post content:', res.data)
        return res.data[0]
        
        
    })
    return {
        type:GET_BLOG_POST,
        payload:post
    }
}



const ADD_PHOTO = 'ADD_PHOTO'

export function addPhoto(images) {
    console.log(images)
    const image = {
        image: images
    }
    // const add = () => {
         axios.post('/api/addphoto', image).then(res => {res.data})
    //         return res.data 

    //     })
    // }
    // const add = axios.post('/api/addphoto/',image )
    // .then( res => {
    //     console.log('photo url:', res.data)
    //     return res.data
    // })
    return {
        type:ADD_PHOTO
        
    }
}

const FIX_PHOTO = 'FIX_PHOTO'

export function fixPhoto(e){
return {
    type:FIX_PHOTO,
    payload:e
}
}

const TRACK_COMMENT = 'TRACK_COMMENT'

export function trackComment(e) {
    console.log(e)
    return{
        type:TRACK_COMMENT,
        payload:e
    }
    
}

const POST_COMMENT = 'POST_COMMENT'

export function postComment(comments, blogid) {
    const comment = {
        comment:comments,
        blogid: blogid
    }
    
    
   const newComments =  axios.post('/api/postcomment', comment).then(res => {
       return axios.get('/api/comments/' + blogid) //if your chaining an axios get RETURN IT!!!!
        .then( res => {
            console.log(res.data)
            return res.data
        })
    })
    

    return {
        type:POST_COMMENT,
        payload:newComments
    }
}

const GET_COMMENTS = 'GET_COMMENTS'

export function getComments(blogid) {
    console.log('getting comments',blogid)
    const comment = axios.get('/api/comments/' + blogid )
    .then( res => {
        console.log('comments', res.data)
        return res.data
    })
    return {
        type:GET_COMMENTS,
        payload:comment
    }
}

const DELETE_COMMENT = 'DELETE_COMMENT'

export function deleteComment(commentid, blogid) {
    console.log('deleting comment case', commentid)
    const erase = axios.delete(`/api/deletecomment/?commentid=${commentid}&blogid=${blogid}`)
    .then( res => {
        return res.data
    })
    return {
        type:DELETE_COMMENT,
        payload:erase
    }
}

const TRACK_BLOG = 'TRACK_BLOG'

export function addNewBlog(e){
return {
    type:TRACK_BLOG,
    payload:e
}
}

const TRACK_DATE = 'TRACK_DATE'

export function trackDate(e){
return {
    type:TRACK_DATE,
    payload:e
}
}

const TRACK_TITLE = 'TRACK_TITLE'

export function trackTitle(e){
return {
    type:TRACK_TITLE,
    payload:e
}
}

const ADD_BLOG = 'ADD_BLOG'

export function addBlog(blog, date, title) {
    console.log(blog, date, title)
    const post = {
        content: blog,
        date: date,
        title: title
    }
    // const add = () => {
         axios.post('/api/addblog', post).then(res => {
            return axios.get('/api/allblogs')
         }).then(res => {res.data})
   
    return {
        type:ADD_BLOG,
        payload:post
        
    }
}

const DELETE_BLOG_POST = 'DELETE_BLOG_POST'

export function deletePost(id) {
    console.log('Deleting blog post',id)
    const erase = axios.delete('/api/deletepost/' + id )
    .then(res => {
        return axios.get('/api/allblogs')
    })
    .then( res => {
        console.log('deletePost action creator', res.data)
        return res.data
        
        
        
    })
    return {
        type:DELETE_BLOG_POST,
        payload:erase
    }
}

const DELETE_PHOTO = 'DELETE_PHOTO'

export function deletePhoto(id) {
console.log('delete photo ID:', id)
const erase= axios.delete('/api/deletephoto/' + id)
.then( res => {
    console.log('deleted photo')
})
return {
    type:DELETE_PHOTO,
    payload:erase
}
}



export default function reducer(state = initialState, action) { //state = initialState is setup to not break the app when it is first run, since the state is originally undefined. state will only equals
   
    //initialState if state is undefined. otherwise state will equal the current state, and not the initial state.
   
    switch(action.type) {
       //after the case you concatinate it (Add on to) with '_FULFILLED'
       case GET_USER_INFO + '_FULFILLED':
            return Object.assign( {}, state, { user: action.payload })
            // break; if the case didn't return something and be FULFILLED you would need a break to stop it
            
            //once a case is fulfilled it stops the function 

       case GET_ALL_BLOGS + '_FULFILLED':
            return Object.assign( {}, state, { blogPosts: action.payload }) //set's redux's state (which is props for the whole app)


       case GET_ALL_PHOTOS + '_FULFILLED':
            return Object.assign( {}, state, { photos: action.payload }) 

       case GET_BLOG_POST + '_FULFILLED':
       console.log('new thing',action.payload)
            return Object.assign( {}, state, { post: action.payload })     

       case ADD_PHOTO + '_FULFILLED':
            return Object.assign( {}, state, { addPhoto: action.payload })     
            
       case FIX_PHOTO :
            return Object.assign( {}, state, {input: action.payload})

       case TRACK_COMMENT :
            return Object.assign( {}, state, {comment: action.payload})
            
       case GET_COMMENTS + '_FULFILLED':
            console.log('getComments payload',action.payload)
            return Object.assign( {}, state, { comments: action.payload })   
            
       case DELETE_COMMENT + '_FULFILLED':
            return Object.assign( {}, state, {comments: action.payload })     

       case TRACK_BLOG:
            return Object.assign( {}, state, {newBlog: action.payload})
            
       case TRACK_DATE:
            return Object.assign( {}, state, {date: action.payload})

       case TRACK_TITLE:
            return Object.assign( {}, state, {title: action.payload})

       case ADD_BLOG + '_FULFILLED':
            return Object.assign( {}, state, {addBlog: action.payload})    
            
       case DELETE_BLOG_POST + '_FULFILLED':
            return Object.assign({}, state, {deletedPost: action.payload})    
            
       case DELETE_PHOTO + '_FULFILLED':
            return Object.assign( {}, state, {deletedPhoto: action.payload} )     
       

       case POST_COMMENT + '_FULFILLED':
            console.log(action)
            return Object.assign( {}, state, {comments: action.payload})

            case POST_COMMENT + '_PENDING':
            console.log('pending',action)
            return Object.assign( {}, state, {comments: action.payload})

            case POST_COMMENT + '_REJECTED':
            console.log('rejected',action)
            return Object.assign( {}, state, {comments: action.payload})

            case POST_COMMENT :
            console.log('no string',action)
            return Object.assign( {}, state, {comments: action.payload})
       
            default:
        return state;     
   }

}