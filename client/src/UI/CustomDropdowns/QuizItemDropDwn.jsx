import Dropdown from 'react-bootstrap/Dropdown';
import css from './CustomDropdowns.module.css';


const CustomQuizDropdown = ({ setShowEdit, setShowDelete}) => {
  // modalId

  
  return (
    <>
<Dropdown className={css.quizDropdown} data-bs-theme="dark">
  <Dropdown.Toggle
    variant="secondary"
    id="dropdown-basic"
    className="border-0 bg-transparent p-0"
    onClick={(e) => e.stopPropagation()}
    onPointerDown={(e) => e.stopPropagation()}
  >
    <span className={css.quizDropdownLable}>⋮</span>
  </Dropdown.Toggle>

  <Dropdown.Menu onClick={(e) => e.stopPropagation()}
    onPointerDown={(e) => e.stopPropagation()}
    >
    <Dropdown.Item
      onClick={() => setShowEdit(true)}
    >
      Edit quiz
    </Dropdown.Item>
    <Dropdown.Item
      onClick={() => setShowDelete(true)}
    >
      Delete quiz
    </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    </>
  );
}

export default CustomQuizDropdown;