import Dropdown from 'react-bootstrap/Dropdown';
import css from './CustomDropdowns.module.css';


const CustomQuizDropdown = ({modalId, setShowEdit, setShowDelete}) => {
  console.log(modalId)

  return (
    <>
    <Dropdown className={css.quizDropdown} data-bs-theme="dark">
      <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="border-0 bg-transparent p-0">
        <span className={css.quizDropdownLable} >⋮</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => setShowEdit(true)}>Edit quiz</Dropdown.Item>
        <Dropdown.Item  onClick={() => setShowDelete(true)}>Delete quiz</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    </>
  );
}

export default CustomQuizDropdown;