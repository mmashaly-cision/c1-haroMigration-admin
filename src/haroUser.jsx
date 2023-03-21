import { List, Datagrid, TextField, EmailField } from "react-admin";
import { UserPagination } from './pagination';
 

export const UserList = () => (
    <List pagination={<UserPagination />}>
        <Datagrid rowClick="edit">
            <TextField source="firstName" />
            <TextField source="lastName" />
            <EmailField source="email" />
            <TextField source="userType" />
            <TextField source="title" />
            <TextField source="id" />
        </Datagrid>
    </List>
);