import axios from 'axios';
import AddTutorial from '../components/AddTutorial';
import TutorialList from '../components/TutorialList';

const Home = () => {

  const url ="https://cw-axios-example.herokuapp.com/api/tutorials"
  const getData =async ()=> {
    const {data} = await axios.get(url)
    console.log(data)
  }
  getData()
  return (
    <>
      <AddTutorial />
      <TutorialList />
    </>
  );
};

export default Home;
