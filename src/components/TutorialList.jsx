import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import EditItem from '../components/EditItem'

const TutorialList = ({tutorials,deleteTutorial,editTutorial}) => {
 

  //? Test data
  // let tutorials = [
  //   {
  //     id: 1,
  //     title: 'ReactJS',
  //     description: 'React is a JS-library for UI Design',
  //   },
  //   {
  //     id: 2,
  //     title: 'HTML',
  //     description: 'HTML is a markup language',
  //   },
  // ];
 

  return (
    <div className="container mt-4">
      <table className="table table-dark fs-5 table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center text-nowrap">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center">
                  <FaEdit 
                  size={20} 
                  className="me-3 text-info cursor " 
                  data-bs-toggle="modal" 
                  data-bs-target="edit-modal"
                  onClick={()=> 
                  editTutorial(id,'css','style')} />
                  <AiFillDelete size={22} className="text-danger cursor" onClick={()=>{
                    deleteTutorial(item.id);
                   
                  }} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditItem/>
    </div>
  );
};

export default TutorialList;
