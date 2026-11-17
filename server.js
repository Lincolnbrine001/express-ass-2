const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

const PORT = 3001;

let trees = [
    {
        id: 1,
        Name: 'pear tree',
        fruit: 'pear',
        color: 'green-black',
    },

    {
        id: 2,
        Name: 'mango tree',
        fruit: 'mango',
        color: 'yellow',
    },

    {
        id: 3,
        Name: 'cashew tree',
        fruit: 'cashew',
        color: 'brown',
    }

];

// GET endpoint to retrieve all trees
app.get('/api/trees', (req, res) => {
    res.json(trees);
});


//create
app.post("/api/trees", (req, res) =>{
    const tree = req.body;
    trees.push(tree);
    res.json(tree);
});



//read
app.get("/api/trees/:id", (req, res)=>{
    const tree = trees.find(s => s.id === Number(req.params.id));

    res.json(tree);
});


//update
app.put("/api/trees/:id", (req, res) => {
    const tree = trees.find(s => s.id === Number (req.params.id));
    tree.fruit = req.body.fruit;
    tree.color = req.body.color;
    res.json(tree);
});


//patch
app.patch("/api/trees/:id", (req, res) =>{
    const tree = trees.find(s => s.id === Number(req.params.id));
    Object.assign(tree, req.body);
    res.json(tree);
});



app.delete("/api/trees/:id", (req, res) => {
    const treeId = parseInt(req.params.id);

    trees = trees.filter(s => s.id !== treeId);

    res.json({
        message: "Tree deleted successfully"
    });
});




// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});