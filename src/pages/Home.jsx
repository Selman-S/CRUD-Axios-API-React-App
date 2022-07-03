import axios from 'axios';
import { useEffect, useState } from 'react';
import AddTutorial from '../components/AddTutorial';
import TutorialList from '../components/TutorialList';
import Loading from '../components/Loading'

const Home = () => {
  const [tutorial, setTutorial] = useState();
  const [loading, setLoading] = useState(true);

  const url ="https://cw-axios-example.herokuapp.com/api/tutorials"
  
  const getData =async ()=> {
    try {
      const {data} = await axios.get(url)
      setTutorial(data)
      setLoading(false)
      
    } catch (error) {
      console.log(error)
    }

  }


  useEffect(() => {
    getData()
  }, []);

  const addTutorial =async (tutorial)=>{
    try {
      await axios.post(url,tutorial)
      
    } catch (error) {
      console.log(error)
    }
    getData()
  }
  
  return (
    <>
    {loading ? <Loading /> :
     <>
     <AddTutorial addTutorial={addTutorial} />
      
      <TutorialList tutorials={tutorial} />
      
      </> }
      
    </>
  );
};

export default Home;
