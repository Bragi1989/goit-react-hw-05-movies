
export const login = async (credentials) => {
  
  try {
    
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      
      throw new Error('Login failed');
    }

   
    const user = await response.json();

    return user;
  } catch (error) {
    console.error('Login error:', error);
    return null;
  }
};