//import posts from "./tuits.js";
// let tuits = posts;
import * as tuitsDao from '../tuits/tuits-dao.js'


const createTuit = async (req, res) => {
    const newTuit = req.body;
    // newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    newTuit.liked = false;
    const insertedTuit = await tuitsDao.newTuit(newTuit);
    res.json(insertedTuit);
  }
  
const findTuits = async (req, res) => {
  const tuits = await tuitsDao.findTuits()
  res.json(tuits)
}

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    // const tuitIndex = tuitsDau.findOne(
    //   (t) => t._id === tuitdIdToUpdate)
    // tuits[tuitIndex] = 
    //   {...tuits[tuitIndex], ...updates};
    const status = await tuitsDao
                       .updateTuit(tuitdIdToUpdate,
                                   updates);

    res.json(status);
  }
  
  
  const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.sendStatus(status);
  }
    
const TuitsController = (app) => {
 app.post('/api/tuits', cors(), createTuit);
 app.get('/api/tuits', cors(), findTuits);
 app.put('/api/tuits/:tid', cors(), updateTuit);
 app.delete('/api/tuits/:tid', cors(), deleteTuit);
}

export default TuitsController






