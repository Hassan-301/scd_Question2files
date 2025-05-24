const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(express.json());

app.use('/api/auth', createProxyMiddleware({
    target: 'http://localhost:5001', 
    changeOrigin: true,
}));


app.use('/api/blogs', createProxyMiddleware({
    target: 'http://localhost:5002', 
    changeOrigin: true,
}));
app.use('/api/profile', createProxyMiddleware({
    target: 'http://localhost:5003', 
    changeOrigin: true,
}));


app.use('/api/comments', createProxyMiddleware({
    target: 'http://localhost:5004', 
    changeOrigin: true,
}));
const port = 5000;
app.listen(port, () => {
    console.log(`API Gateway listening on port ${port}`);
});

