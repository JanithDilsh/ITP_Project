import React, { Component } from 'react';
import axios from 'axios';
import '../css/bs.css'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()



export default class Home extends Component {
constructor(props) {
    super(props);

    this.state = {
        posts: []
    };
}

componentDidMount() {
    this.retrievePosts();
}

retrievePosts() {
    axios.get("/posts").then(res=>{
       if(res.data.success){
           this.setState({   
            posts: res.data.existingPosts
        });

       
        console.log(this.state.posts);
       }
      
    });
}

onDelete = (id) => {

    axios.delete(`/post/delete/${id}`).then((res)=>{
        //alert("Delete Sucessfully");
        toast.info('Registration Success',{position:toast.POSITION.TOP_CENTER})
        this.retrievePosts();
    })

}

filterData(posts,searchKey){


    const result = posts.filter((post) =>
    
    post.fname.toLowerCase().includes(searchKey))
    
    this.setState({posts:result});
    }
    

handleSearchArea = (e) =>{
    const searchKey = e.currentTarget.value;
    axios.get("/posts").then(res =>{

if(res.data.success){



this.filterData(res.data.existingPosts, searchKey);

}

});

}



    render() {
        return (

            <div className="container responsive" style={{marginLeft:'-50px'}} id="siz"> 
                <div className="row">
                <div className="col-lg-5 mt-1 mb-1">
                <p className="display-3">All Customers</p>
                </div>
                <div className="d-flex">
                    <input
                        className="form-control"
                        type="search"
                        placeholder="Search Here"
                        name="searchQuery"
                        align="center"
                        style={{borderRadius:'15px'}}
                        //onChange="{this.handleSearchArea}"
                        onChange={this.handleSearchArea}
                        >
                            </input>
                    </div>
                    </div>
                    <br/>
               <table className="table table-dark table-striped table-bordered table-responsive" style={{
                   fontSize: '4',
                   //color:'#4a54f1',
                   paddingTop: "100px",
                   textDecoration:'bold'
                   }}>

                   <thead>
                    
                       <tr key={Home.table}>
                        <th scope="col" >#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">E mail</th>
                        {/* <th scope="col">Password</th> */}
                        <th scope="col">Telephone Num</th>
                        <th scope="col">ID/VISA</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Address</th>
                        <th scope="col">Blood Type</th>
                        <th scope="col">Allergies</th>
                        <th scope="col">Issues</th>
                        <th scope="col" colspan="2">
                            <center>
                            Functions
                                </center>
                        </th>
                        

                       </tr>
                    </thead>

                <tbody>

                    {this.state.posts.map((posts,index) =>(

                    <tr key={posts.index}>
                        <th scope="row">{index+1}</th>

                        <td className="text-warning" style={{maxWidth:'150px' ,overflowWrap: 'break-word'}}>
                            <a href={`/post/${posts._id}`} style={{ textDecoration:'none',color:'yellow'}}>
                            {posts.fname}
                            </a>
                        </td>

                        {/* <td>{posts.fname}</td> */}
                        <td style={{maxWidth:'150px' , overflowWrap: 'break-word'}}>{posts.lname}</td>
                        <td style={{maxWidth:'250px' , overflowWrap: 'break-word'}}>{posts.email}</td>
                        {/* <td>{posts.pass}</td> */}
                        <td style={{maxWidth:'100px' , overflowWrap: 'break-word'}}>{posts.tpnum}</td>
                        <td style={{maxWidth:'100px' , overflowWrap: 'break-word'}}>{posts.idvisa}</td>
                        <td style={{maxWidth:'50px' , overflowWrap: 'break-word'}}>{posts.gender}</td>
                        <td style={{maxWidth:'100px' , overflowWrap: 'break-word'}}>{posts.address}</td>
                        <td style={{maxWidth:'50px' , overflowWrap: 'break-word'}}>{posts.btype}</td>
                        <td style={{maxWidth:'100px' , overflowWrap: 'break-word'}}>{posts.allergies}</td>
                        <td style={{maxWidth:'100px' , overflowWrap: 'break-word'}}>{posts.issues}</td>
                     

                        <td style={{maxWidth:'100px' , overflowWrap: 'break-word',overflow:'hidden'}}>
                            <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                                <i className="fa fa-edit"></i>&nbsp;Edit
                            </a>
                        </td>
                        <td style={{maxWidth:'100px' , overflowWrap: 'break-word',overflow:'hidden'}}>
                            
                            <a className="btn btn-danger" href="/dashboard/data" onClick={() =>this.onDelete(posts._id)}>
                                <i className="fa fa-trash"></i>&nbsp;Delete
                            </a>
                        </td>
                    </tr>

                    ))}

                </tbody>
               </table>

                        <button className="btn btn-success">
                            <a href="/Registration" style={{textDecoration:'none',color:'white'}}>
                            Create New Customers</a>
                        </button>
                
            </div>
            
      
                   
                       
            

        )
        

        
    }

    
}


