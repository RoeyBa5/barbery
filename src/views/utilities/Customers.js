import { Grid, Link } from '@mui/material';
import MuiTypography from '@mui/material/Typography';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import CustomerItem from './Customer';
import AddCustomerButton from './AddCustomer';

// ==============================|| TYPOGRAPHY ||============================== //
const customers = [
    {
        id: 1,
        name: 'כוכי כהן',
        phone: '555-555-5555',
        hairColor: 'חום'
    },
    {
        id: 2,
        name: 'ריקי כהן',
        phone: '555-555-5555',
        hairColor: 'בלונד'
    },
    {
        id: 3,
        name: 'גלי כהן',
        phone: '555-555-5555',
        hairColor: 'חום'
    },
    {
        id: 4,
        name: 'גלי כהן',
        phone: '555-555-5555',
        hairColor: 'חום'
    },
    {
        id: 5,
        name: 'גלי כהן',
        phone: '555-555-5555',
        hairColor: 'חום'
    },
    {
        id: 6,
        name: 'גלי כהן',
        phone: '555-555-5555',
        hairColor: 'חום'
    },
    {
        id: 7,
        name: 'גלי כהן',
        phone: '555-555-5555',
        hairColor: 'חום'
    }
];

const Customers = () => (
    <div>
        <AddCustomerButton />
        {customers.map((customer) => (
            <CustomerItem
                key={customer.id}
                id={customer.id}
                name={customer.name}
                phone={customer.phone}
                hairColor={customer.hairColor}
                // haircuts={customer.haircuts}
            />
        ))}
    </div>
);

export default Customers;
