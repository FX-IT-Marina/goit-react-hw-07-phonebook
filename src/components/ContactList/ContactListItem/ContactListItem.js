import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operation';
import { Item, ContactName, Button } from './ContactListItem.styled';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Item id={id}>
      <ContactName>
        {name}:<span>{number}</span>
      </ContactName>
      <Button onClick={onDelete}>Delete</Button>
    </Item>
  );
};
