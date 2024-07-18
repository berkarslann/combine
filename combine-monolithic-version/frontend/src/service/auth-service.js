import axios from 'axios';

export const login = async (form) => {

    try {
      const apiUrl = "https://combine-api.onrender.com/auth/login";
    
      // Make a POST request to the API with form data using Axios
      const response = await axios.post(apiUrl, form, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response;
    }
    catch(err){
      console.log(err)
    }
}

export const register = async (form) => {

  try {
    const apiUrl = "https://combine-api.onrender.com/auth/signup";
  
    // Make a POST request to the API with form data using Axios
    const response = await axios.post(apiUrl, form, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response;
  }
  catch(err){
    console.log(err)
  }
}





export const currentUserCheck = async(token) => {
  try{
    const apiUrl = "https://combine-api.onrender.com/auth/check-token";
    const response = await axios.get(apiUrl, {
      headers: {
          'Authorization': token
      }
  });
  console.log('Response:', response.data);
  return true;

  }catch(error){
    console.error('Error:', error.response ? error.response.data : error.message);

  }
}

export const currentUserInfo = async(token) => {
  try{
    const apiUrl = "https://combine-api.onrender.com/auth/check-user-info";
    const response = await axios.get(apiUrl, {
      headers: {
          'Authorization': token
      }
  });
  console.log('Response:', response.data);
  return response.data.user;

  }catch(error){
    console.error('Error:', error.response ? error.response.data : error.message);

  }
}
