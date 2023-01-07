import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {contacts.map(contact => {
        return (
          <ContactListItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            phone={contact.phone}
          />
        );
      })}
    </List>
  );
};
