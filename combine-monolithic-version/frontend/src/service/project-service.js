import axios from 'axios';


export const fetchProjects = async() =>{
    try{
      const apiUrl = "https://combine-api.vercel.app/feed/projects";
        
      const response = await axios.get(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    
    }catch(err){
      console.log(err)
    }
  }


  export const fetchSingleProject = async (projectId) => {
    try {
      const apiUrl = `https://combine-api.vercel.app/feed/single-project/${projectId}`;
  
      const response = await axios.get(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    return response.data;
  
    } catch (error) {
      console.error('Error fetching the project:', error);
      throw error;
    }
  };
  

  export const matchRandomProject = async(wantedRole, token)=>{
    try{
      const apiUrl = "https://combine-api.vercel.app/feed/project-matching";
  
      const response = await axios.post(apiUrl, {wantedRole:wantedRole, token:token}, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    
    }catch(err){
      console.log(err.response.data.message)
      return err.response.data.message
    }
  }

  export const deleteProjectRequest = async(projectId, token, role)=> {
    try{

      const apiUrl = `https://combine-api.vercel.app/feed/delete-project-request/${projectId}`;
      console.log('burası servis', role.join(','))
      const response = await axios.post(apiUrl, {token:token, role: role.join(',')}, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
     
    }catch(err){
      console.log(err)
    }
  }