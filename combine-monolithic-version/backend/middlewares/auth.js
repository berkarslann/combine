import jwt from 'jsonwebtoken';


export const authMiddleware  = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
      const error = new Error('Not authenticated.');
      error.statusCode = 401;
      throw error;
    }
    const accessToken = authHeader.split(' ')[1];
    let decodedToken;
    try {
      decodedToken = jwt.verify(accessToken, 'somesupersecretsecret');
    } catch (err) {
      err.statusCode = 500;
      throw err;
    }
    if (!decodedToken) {
      const error = new Error('Not authenticated.');
      error.statusCode = 401;
      throw error;
    }
    req.userId = decodedToken.userId;
    next();
  };
