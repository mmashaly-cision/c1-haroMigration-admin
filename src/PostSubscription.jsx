import { List, Datagrid, TextField, EmailField } from 'react-admin';
import { useParams } from 'react-router-dom';

export const PostSubscription = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="subscriptionId" />
                <TextField source="email" />
                <TextField source="id" />
            </Datagrid>
        </List>
    );
};