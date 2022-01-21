import ReactToPrint from 'react-to-print';
import React, { Component } from 'react';
import axios from 'axios';
//import posts from './Home';

export default class PostDetails extends Component {
    constructor(props) {
        super(props);

        this.state={
            post:{}
        };
    }


    componentDidMount() {

        const id = this.props.match.params.id;

        axios.get(`/post/${id}`).then((res) => {

            if(res.data.success){
                this.setState({ 
                    post: res.data.post
                });

                console.log(this.state.post);

            }
        });

    }


    render() {

        const {fname,lname,email,tpnum,idvisa,gender,address,btype,allergies,issues,_id} = this.state.post;

        return (
          <div>
            <div class="container">
              <div class="main-body" ref={(el) => (this.componentRef = el)}>
                <div class="row gutters-sm">
                  <div class="col-md-4 mb-5">
                    <div class="card">
                      <div class="card-body">
                        <div class="d-flex flex-column align-items-center text-center">
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar7.png"
                            alt="Admin"
                            class="rounded-circle"
                            width="150"
                          />
                          <div class="mt-3">
                            <br />
                            <h4>
                              {fname} {lname}
                            </h4>
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="card mb-3">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-sm-3">
                            <h6 class="mb-0">First Name</h6>
                          </div>
                          <div class="col-sm-9 text-secondary">
                            {fname}
                            <br />
                          </div>
                        </div>
                        <hr />
                        <div class="row">
                          <div class="col-sm-3">
                            <h6 class="mb-0">Last Name</h6>
                          </div>
                          <div class="col-sm-9 text-secondary">{lname}</div>
                        </div>
                        <hr />
                        <div class="row">
                          <div class="col-sm-3">
                            <h6 class="mb-0">E mail</h6>
                          </div>
                          <div class="col-sm-9 text-secondary">{email}</div>
                        </div>
                        <hr />
                        <div class="row">
                          <div class="col-sm-3">
                            <h6 class="mb-0">Mobile</h6>
                          </div>
                          <div class="col-sm-9 text-secondary">{tpnum}</div>
                        </div>

                        <hr />
                        <div class="row">
                          <div class="col-sm-3">
                            <h6 class="mb-0">ID/VISA</h6>
                          </div>
                          <div class="col-sm-9 text-secondary">{idvisa}</div>
                        </div>

                        <hr />
                        <div class="row">
                          <div class="col-sm-3">
                            <h6 class="mb-0">Address</h6>
                          </div>
                          <div class="col-sm-9 text-secondary">{address}</div>
                        </div>

                        <hr />
                        <div class="row">
                          <div class="col-sm-3">
                            <h6 class="mb-0">Gender</h6>
                          </div>
                          <div class="col-sm-9 text-secondary">{gender}</div>
                        </div>

                        <hr />
                        <div class="row">
                          <div class="col-sm-3">
                            <h6 class="mb-0">Blood Type</h6>
                          </div>
                          <div class="col-sm-9 text-secondary">{btype}</div>
                        </div>

                        <hr />
                        <div class="row">
                          <div class="col-sm-3">
                            <h6 class="mb-0">Allergies and Issues</h6>
                          </div>
                          <div class="col-sm-9 text-primary">
                            Allergies :- {allergies} | Issues :-{issues}
                          </div>
                        </div>
                        <br />
                        <div class="row">
                          <td
                            style={{
                              maxWidth: "100px",
                              overflowWrap: "break-word",
                              overflow: "hidden",
                            }}
                          >
                            <a
                              className="btn btn-warning"
                              href={`/edit/${_id}`}
                            >
                              <i className="fa fa-edit"></i>&nbsp;Edit
                            </a>
                          </td>
                          <div class="col">
                          <td>

                            {/* //report Genrating  */}
                          <ReactToPrint
                          trigger={() => <button className="generateReport1 btn btn-warning" type="button"><i class="fa fa-download" aria-hidden="true"></i> Generate Report
                          </button>}
                          content={() => this.componentRef}/>
                            </td>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
          <br />
          

          

        </div>
          </div>
        );
}
}

// export class Print extends Component{

//   render(){

//     return(

      
//       <div>
//         <br/> <br/> <br/>

//         <ReactToPrint 

//             trigger={() => <button className="generateReport1" type="button"><i class="fas fa-redo pr-2" aria-hidden="true"></i> Generate Report

//                            </button>}

//             content = {()=>this.componentRef}

//         />

//       <PostDetails ref={(el)=>(this.componentRef=el)} />

//      </div>

//    )

//   }

// }