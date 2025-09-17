// Runtime configuration
let API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// Function to fetch runtime config
export const initializeConfig = async () => {
  try {
    // Try to fetch config from a known endpoint
    const response = await fetch('/config.json');
    if (response.ok) {
      const config = await response.json();
      API_URL = config.apiUrl;
    }
  } catch (error) {
    console.log('Using default API URL:', API_URL);
  }
};

export const getApiUrl = () => API_URL;