import React, { Component } from 'react';
import Instruct from './components/Instruct';
import Data from './components/Data';
import dragon from "./assets/dragon.png";
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      signin: "false",
      page: "home",
      user: "",
      events: [],
      resources: [],
      projects: [],
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/getevents", {
      method: "get",
      headers: { "Content-Type": "application/json" }
    }).then(response => response.json())
      .then(events => {
        this.state.events = events;
      })

    fetch("http://localhost:3000/getprojects", {
      method: "get",
      headers: { "Content-Type": "application/json" }
    }).then(response => response.json())
      .then(projects => {
        this.state.projects = projects;
        this.setState({ projects: projects });
      })

    fetch("http://localhost:3000/getresources", {
      method: "get",
      headers: { "Content-Type": "application/json" }
    }).then(response => response.json())
      .then(resources => {
        this.state.resources = resources;
        this.setState({ resources: resources });
      })
  }

  onSubmit = () => {
    let ue = document.getElementsByClassName("username")[0];
    let pwrd = document.getElementsByClassName("password")[0];
    let loginbtn = document.getElementsByClassName("loginbtn")[0];
    fetch("http://localhost:3000/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: ue.value,
        password: pwrd.value
      })
    }).then(response => response.json())
      .then(data => {
        if (data == ue.value) {
          this.setState({ signin: "true" })
          this.setState({ user: data })
        }
        else {
          this.setState({ user: data })
        }
      })
  }

  onSubmitevent = () => {
    let event_title = document.getElementsByClassName("event_title")[0];
    let event_datetime = document.getElementsByClassName("event_datetime")[0];
    let event_link = document.getElementsByClassName("event_link")[0];
    let event_description = document.getElementsByClassName("event_description")[0];
    let post_event_btn = document.getElementsByClassName("post_event_btn")[0];

    let body;
    if (event_link.value == "") {
      body = {
        title: event_title.value,
        link: "",
        datetime: event_datetime.value,
        description: event_description.value
      }
    }
    else {
      body = {
        title: event_title.value,
        link: event_link.value,
        datetime: event_datetime.value,
        description: event_description.value
      }
    }

    fetch("http://localhost:3000/postevents", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }).then(response => response.json())
      .then(data => {
        if (data == event_title.value) {
          post_event_btn.innerHTML = "POSTED successfully event : " + data;
        }
        else {
          post_event_btn.innerHTML = data;
        }
      })
  }

  onUpdateevent = () => {
    let event_field = document.getElementsByClassName("event_field")[0];
    let event_newvalue = document.getElementsByClassName("event_newvalue")[0];
    let event_searchby = document.getElementsByClassName("event_searchby")[0];
    let event_searchbyvalue = document.getElementsByClassName("event_searchbyvalue")[0];
    let update_event_btn = document.getElementsByClassName("update_event_btn")[0];

    let body;
    if (event_newvalue == "") {
      body = {
        field: event_field.value,
        newvalue: "",
        searchby: event_searchby.value,
        searchbyvalue: event_searchbyvalue.value
      }
    }
    else {
      body = {
        field: event_field.value,
        newvalue: event_newvalue.value,
        searchby: event_searchby.value,
        searchbyvalue: event_searchbyvalue.value
      }
    }

    fetch("http://localhost:3000/updateevents", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }).then(response => response.json())
      .then(data => {
        if (data == event_field.value) {
          update_event_btn.innerHTML = "UPDATED successfully event : " + data;
        }
        else {
          update_event_btn.innerHTML = data;
        }
      })
  }

  onDeleteevent = () => {
    let event_searchby_delete = document.getElementsByClassName("event_searchby_delete")[0];
    let event_searchbyvalue_delete = document.getElementsByClassName("event_searchbyvalue_delete")[0];
    let delete_event_btn = document.getElementsByClassName("delete_event_btn")[0];

    fetch("http://localhost:3000/deleteevents", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        searchby: event_searchby_delete.value,
        searchbyvalue: event_searchbyvalue_delete.value
      })
    }).then(response => response.json())
      .then(data => {
        if (data == event_searchby_delete.value) {
          delete_event_btn.innerHTML = "DELETED successfully event : " + data;
        }
        else {
          delete_event_btn.innerHTML = data;
        }
      })
  }



  onSubmitproject = () => {
    let project_title = document.getElementsByClassName("project_title")[0];
    let project_bywhom = document.getElementsByClassName("project_bywhom")[0];
    let project_imgurl = document.getElementsByClassName("project_imgurl")[0];
    let project_description = document.getElementsByClassName("project_description")[0];
    let post_project_btn = document.getElementsByClassName("post_project_btn")[0];

    fetch("http://localhost:3000/postprojects", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: project_title.value,
        imgurl: project_imgurl.value,
        bywhom: project_bywhom.value,
        description: project_description.value
      })
    }).then(response => response.json())
      .then(data => {
        if (data == project_title.value) {
          post_project_btn.innerHTML = "POSTED successfully project : " + data;
        }
        else {
          post_project_btn.innerHTML = data;
        }
      })
  }

  onUpdateproject = () => {
    let project_field = document.getElementsByClassName("project_field")[0];
    let project_newvalue = document.getElementsByClassName("project_newvalue")[0];
    let project_searchby = document.getElementsByClassName("project_searchby")[0];
    let project_searchbyvalue = document.getElementsByClassName("project_searchbyvalue")[0];
    let update_project_btn = document.getElementsByClassName("update_project_btn")[0];


    fetch("http://localhost:3000/updateprojects", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        field: project_field.value,
        newvalue: project_newvalue.value,
        searchby: project_searchby.value,
        searchbyvalue: project_searchbyvalue.value
      })
    }).then(response => response.json())
      .then(data => {
        if (data == project_field.value) {
          update_project_btn.innerHTML = "UPDATED successfully project : " + data;
        }
        else {
          update_project_btn.innerHTML = data;
        }
      })
  }

  onDeleteproject = () => {
    let project_searchby_delete = document.getElementsByClassName("project_searchby_delete")[0];
    let project_searchbyvalue_delete = document.getElementsByClassName("project_searchbyvalue_delete")[0];
    let delete_project_btn = document.getElementsByClassName("delete_project_btn")[0];

    fetch("http://localhost:3000/deleteprojects", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        searchby: project_searchby_delete.value,
        searchbyvalue: project_searchbyvalue_delete.value
      })
    }).then(response => response.json())
      .then(data => {
        if (data == project_searchby_delete.value) {
          delete_project_btn.innerHTML = "DELETED successfully project : " + data;
        }
        else {
          delete_project_btn.innerHTML = data;
        }
      })
  }



  onSubmitresource = () => {
    let resource_theme = document.getElementsByClassName("resource_theme")[0];
    let resource_description = document.getElementsByClassName("resource_description")[0];
    let post_resource_btn = document.getElementsByClassName("post_resource_btn")[0];

    fetch("http://localhost:3000/postresources", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        theme: resource_theme.value,
        description: resource_description.value
      })
    }).then(response => response.json())
      .then(data => {
        if (data == resource_theme.value) {
          post_resource_btn.innerHTML = "POSTED successfully resource on : " + data;
        }
        else {
          post_resource_btn.innerHTML = data;
        }
      })
  }

  onUpdateresource = () => {
    let resource_field = document.getElementsByClassName("resource_field")[0];
    let resource_newvalue = document.getElementsByClassName("resource_newvalue")[0];
    let resource_searchby = document.getElementsByClassName("resource_searchby")[0];
    let resource_searchbyvalue = document.getElementsByClassName("resource_searchbyvalue")[0];
    let update_resource_btn = document.getElementsByClassName("update_resource_btn")[0];


    fetch("http://localhost:3000/updateresources", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        field: resource_field.value,
        newvalue: resource_newvalue.value,
        searchby: resource_searchby.value,
        searchbyvalue: resource_searchbyvalue.value
      })
    }).then(response => response.json())
      .then(data => {
        if (data == resource_field.value) {
          update_resource_btn.innerHTML = "UPDATED successfully resource on : " + data;
        }
        else {
          update_resource_btn.innerHTML = data;
        }
      })
  }

  onDeleteresource = () => {
    let resource_searchby_delete = document.getElementsByClassName("resource_searchby_delete")[0];
    let resource_searchbyvalue_delete = document.getElementsByClassName("resource_searchbyvalue_delete")[0];
    let delete_resource_btn = document.getElementsByClassName("delete_resource_btn")[0];

    fetch("http://localhost:3000/deleteresources", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        searchby: resource_searchby_delete.value,
        searchbyvalue: resource_searchbyvalue_delete.value
      })
    }).then(response => response.json())
      .then(data => {
        if (data == resource_field.value) {
          delete_resource_btn.innerHTML = "DELETED successfully resource : " + data;
        }
        else {
          delete_resource_btn.innerHTML = data;
        }
      })
  }



  changePage = (newpage) => {
    this.setState({ page: newpage });
  }


  render() {
    if (this.state.signin == "true" && this.state.page == "home") {
      return (
        <div className='whole'>
          <div className='flex flex-wrap justify-center'>
            <Instruct />
            <div className='flex flex-wrap justify-evenly'>
              <button className='m-3 custom-box-shadow bg-blue-500 p-1 rounded-md' onClick={() => this.changePage("POST")}>POST</button>
              <button className='m-3 custom-box-shadow bg-blue-500 p-1 rounded-md' onClick={() => this.changePage("UPDATE")}>UPDATE</button>
              <button className='m-3 custom-box-shadow bg-blue-500 p-1 rounded-md' onClick={() => this.changePage("DELETE")}>DELETE</button>
            </div>
          </div>

          <Data propevents={this.state.events} proprojects={this.state.projects} propresources={this.state.resources}  />
        </div>
      )
    }
    else if (this.state.signin == "true" && this.state.page == "POST") {
      return (
        <div>
          <div className='flex flex-wrap justify-center'>
          <Instruct />
            <div className=' w-[100%]'>
              <div className='flex flex-wrap justify-center'>
                <button className='m-3 custom-box-shadow bg-blue-500 p-1 rounded-md' onClick={() => this.changePage("POST")}>POST</button>
                <button className='m-3 custom-box-shadow bg-blue-500 p-1 rounded-md' onClick={() => this.changePage("UPDATE")}>UPDATE</button>
                <button className='m-3 custom-box-shadow bg-blue-500 p-1 rounded-md' onClick={() => this.changePage("DELETE")}>DELETE</button>
              </div>
            </div>

            <div className='flex flex-wrap justify-center'>

              <div className='m-2'>
                <h1 className='font-bold text-3xl pb-5'>POST EVENTS</h1>
                <div className='flex justify-center items-center'>
                  <input className="event_title p-2 m-2 w-[250px] rounded-xl" placeholder='Enter Title'></input>
                </div>
                <div className='flex justify-center items-center'>
                  <input className="event_datetime p-2 m-2 w-[250px] rounded-xl" placeholder='Enter Date/Time'></input>
                </div>
                <div className='flex justify-center items-center'>
                  <input className="event_link p-2 m-2 w-[250px] rounded-xl" placeholder='Enter link (leave empty if none)'></input>
                </div>
                <div className='flex justify-center items-center'>
                  <textarea className="event_description p-2 m-2 w-[250px] max-h-[300px] rounded-xl" type="text" placeholder='Enter Description'></textarea>
                </div>
                <div className='post_event_btn'>
                  <button className="bg-blue-500 custom-box-shadow text-center p-2 m-2 rounded-md" onClick={this.onSubmitevent}>POST NEW EVENT</button>
                </div>

                <div class="hort m-4 mt-16">
                  <div class="horm"></div>
                </div>
              </div>

              <div className='m-2'>
                <h1 className='font-bold text-3xl pb-5'>POST PROJECTS</h1>
                <div className='flex justify-center items-center'>
                  <input className="project_title p-2 m-2 w-[250px] rounded-xl" placeholder='Enter Title'></input>
                </div>
                <div className='flex justify-center items-center'>
                  <input className="project_bywhom p-2 m-2 w-[250px] rounded-xl" placeholder='Enter Authour'></input>
                </div>
                <div className='flex justify-center items-center'>
                  <input className="project_imgurl p-2 m-2 w-[250px] rounded-xl" placeholder='Enter Image URL'></input>
                </div>
                <div className='flex justify-center items-center'>
                  <textarea className="project_description p-2 m-2 w-[250px] max-h-[300px] rounded-xl" type="text" placeholder='Enter Description'></textarea>
                </div>
                <div className='post_project_btn'>
                  <button className="bg-blue-500 custom-box-shadow text-center p-2 m-2 rounded-md" onClick={this.onSubmitproject}>POST NEW PROJECT</button>
                </div>

                <div class="hort m-4 mt-16">
                  <div class="horm"></div>
                </div>
              </div>

              <div className='m-2'>
                <h1 className='font-bold text-3xl pb-5'>POST RESOURCES</h1>
                <div className='flex justify-center items-center'>
                  <input className="resource_theme p-2 m-2 w-[250px] rounded-xl" placeholder='Enter Theme'></input>
                </div>
                <div className='flex justify-center items-center'>
                  <textarea className="resource_description p-2 m-2 w-[250px] max-h-[500px] rounded-xl" type="text" placeholder='Enter Description'></textarea>
                </div>
                <div className='post_resource_btn'>
                  <button className="bg-blue-500 custom-box-shadow text-center p-2 m-2 rounded-md" onClick={this.onSubmitresource}>POST NEW RESOURCE</button>
                </div>

                <div class="hort m-4 mt-16">
                  <div class="horm"></div>
                </div>
              </div>

            </div>
          </div>
          <Data propevents={this.state.events} proprojects={this.state.projects} propresources={this.state.resources}  />
        </div>
      )
    }
    else if (this.state.signin == "true" && this.state.page == "UPDATE") {
      return (
        <div>
          <div className='flex flex-wrap justify-center'>

          <Instruct />
            <div className=' w-[100%]'>
              <div className='flex flex-wrap justify-center'>
                <button className='m-3 custom-box-shadow bg-blue-500 p-1 rounded-md' onClick={() => this.changePage("POST")}>POST</button>
                <button className='m-3 custom-box-shadow bg-blue-500 p-1 rounded-md' onClick={() => this.changePage("UPDATE")}>UPDATE</button>
                <button className='m-3 custom-box-shadow bg-blue-500 p-1 rounded-md' onClick={() => this.changePage("DELETE")}>DELETE</button>
              </div>
            </div>

            <div className='flex flex-wrap justify-center'>
              <div className='m-2'>
                <h1 className='font-bold text-3xl pb-5'>UPDATE EVENTS</h1>
                <div className='flex justify-center items-center'>
                  <input className="event_field p-2 m-2 w-[250px] rounded-xl" placeholder='Enter field to be changed'></input>
                </div>
                <div className='flex justify-center items-center'>
                  <input className="event_newvalue p-2 m-2 w-[250px] rounded-xl" placeholder="Enter field's new value"></input>
                </div>
                <div className='flex justify-center items-center'>
                  <input className="event_searchby p-2 m-2 w-[250px] rounded-xl" placeholder='Enter filter field'></input>
                </div>
                <div className='flex justify-center items-center'>
                  <input className="event_searchbyvalue p-2 m-2 w-[250px] rounded-xl" placeholder='Enter filter field value'></input>
                </div>

                <div className='update_event_btn'>
                  <button className="bg-blue-500 custom-box-shadow text-center p-2 m-2 rounded-md" onClick={this.onUpdateevent}>UPDATE EVENT</button>
                </div>

                <div class="hort m-4 mt-16">
                  <div class="horm"></div>
                </div>
              </div>

              <div className='m-2'>
                <h1 className='font-bold text-3xl pb-5'>UPDATE PROJECTS</h1>
                <div className='flex justify-center items-center'>
                  <input className="project_field p-2 m-2 w-[250px] rounded-xl" placeholder='Enter field to be changed'></input>
                </div>
                <div className='flex justify-center items-center'>
                  <input className="project_newvalue p-2 m-2 w-[250px] rounded-xl" placeholder="Enter field's new value"></input>
                </div>
                <div className='flex justify-center items-center'>
                  <input className="project_searchby p-2 m-2 w-[250px] rounded-xl" placeholder='Enter filter field'></input>
                </div>
                <div className='flex justify-center items-center'>
                  <input className="project_searchbyvalue p-2 m-2 w-[250px] rounded-xl" placeholder='Enter filter field value'></input>
                </div>

                <div className='update_project_btn'>
                  <button className="bg-blue-500 custom-box-shadow text-center p-2 m-2 rounded-md" onClick={this.onUpdateproject}>UPDATE PROJECT</button>
                </div>

                <div class="hort m-4 mt-16">
                  <div class="horm"></div>
                </div>
              </div>

              <div className='m-2'>
                <h1 className='font-bold text-3xl pb-5'>UPDATE RESOURCES</h1>
                <div className='flex justify-center items-center'>
                  <input className="resource_field p-2 m-2 w-[250px] rounded-xl" placeholder='Enter field to be changed'></input>
                </div>
                <div className='flex justify-center items-center'>
                  <input className="resource_newvalue p-2 m-2 w-[250px] rounded-xl" placeholder="Enter field's new value"></input>
                </div>
                <div className='flex justify-center items-center'>
                  <input className="resource_searchby p-2 m-2 w-[250px] rounded-xl" placeholder='Enter filter field'></input>
                </div>
                <div className='flex justify-center items-center'>
                  <input className="resource_searchbyvalue p-2 m-2 w-[250px] rounded-xl" placeholder='Enter filter field value'></input>
                </div>

                <div className='update_resource_btn'>
                  <button className="bg-blue-500 custom-box-shadow text-center p-2 m-2 rounded-md" onClick={this.onUpdateresource}>UPDATE RESOURCE</button>
                </div>

                <div class="hort m-4 mt-16">
                  <div class="horm"></div>
                </div>
              </div>
            </div>
          </div>
          <Data propevents={this.state.events} proprojects={this.state.projects} propresources={this.state.resources}  />
        </div>
      )
    }
    else if (this.state.signin == "true" && this.state.page == "DELETE") {
      return (
        <div>
          <div className='flex flex-wrap justify-center'>

          <Instruct />
            <div className=' w-[100%]'>
              <div className='flex flex-wrap justify-center'>
                <button className='m-3 custom-box-shadow bg-blue-500 p-1 rounded-md' onClick={() => this.changePage("POST")}>POST</button>
                <button className='m-3 custom-box-shadow bg-blue-500 p-1 rounded-md' onClick={() => this.changePage("UPDATE")}>UPDATE</button>
                <button className='m-3 custom-box-shadow bg-blue-500 p-1 rounded-md' onClick={() => this.changePage("DELETE")}>DELETE</button>
              </div>
            </div>

            <div className='flex flex-wrap justify-center'>
              <div className='m-2'>
                <h1 className='font-bold text-3xl pb-5'>DELETE EVENTS</h1>
                <div className='flex justify-center items-center'>
                  <input className="event_searchby_delete p-2 m-2 w-[250px] rounded-xl" placeholder='Enter filter field'></input>
                </div>
                <div className='flex justify-center items-center'>
                  <input className="event_searchbyvalue_delete p-2 m-2 w-[250px] rounded-xl" placeholder='Enter filter field value'></input>
                </div>

                <div className='delete_event_btn'>
                  <button className="bg-blue-500 custom-box-shadow text-center p-2 m-2 rounded-md" onClick={this.onDeleteevent}>DELETE EVENT</button>
                </div>

                <div class="hort m-4 mt-16">
                  <div class="horm"></div>
                </div>
              </div>

              <div className='m-2'>
                <h1 className='font-bold text-3xl pb-5'>DELETE PROJECTS</h1>
                <div className='flex justify-center items-center'>
                  <input className="project_searchby_delete p-2 m-2 w-[250px] rounded-xl" placeholder='Enter filter field'></input>
                </div>
                <div className='flex justify-center items-center'>
                  <input className="project_searchbyvalue_delete p-2 m-2 w-[250px] rounded-xl" placeholder='Enter filter field value'></input>
                </div>

                <div className='delete_project_btn'>
                  <button className="bg-blue-500 custom-box-shadow text-center p-2 m-2 rounded-md" onClick={this.onDeleteproject}>DELETE PROJECT</button>
                </div>

                <div class="hort m-4 mt-16">
                  <div class="horm"></div>
                </div>
              </div>

              <div className='m-2'>
                <h1 className='font-bold text-3xl pb-5'>DELETE RESOURCES</h1>
                <div className='flex justify-center items-center'>
                  <input className="resource_searchby_delete p-2 m-2 w-[250px] rounded-xl" placeholder='Enter filter field'></input>
                </div>
                <div className='flex justify-center items-center'>
                  <input className="resource_searchbyvalue_delete p-2 m-2 w-[250px] rounded-xl" placeholder='Enter filter field value'></input>
                </div>

                <div className='delete_resource_btn'>
                  <button className="bg-blue-500 custom-box-shadow text-center p-2 m-2 rounded-md" onClick={this.onDeleteresource}>DELETE RESOURCE</button>
                </div>

                <div class="hort m-4 mt-16">
                  <div class="horm"></div>
                </div>
              </div>
            </div>
          </div>
          <Data propevents={this.state.events} proprojects={this.state.projects} propresources={this.state.resources}  />
        </div>
      )
    }

    else {
      return (
        <div className=''>
          <h1 className='font-bold text-5xl pb-5'>Signin</h1>
          <div className='grid grid-rows-2'>
            <div className='flex justify-center items-center'>
              <input className="username p-2 m-2 w-fit rounded-xl" type="text" placeholder='Enter Username/Email'></input>
            </div>
            <div className='flex justify-center items-center'>
              <input className="password p-2 m-2 w-fit rounded-xl" type="password" placeholder='Enter Password'></input>
            </div>
          </div>
          <div className="loginbtn">
            <button className="bg-blue-500 custom-box-shadow p-2 m-2 rounded-md" onClick={this.onSubmit}>Signin</button>
          </div>
        </div>
      )
    }

  }
}

export default App
