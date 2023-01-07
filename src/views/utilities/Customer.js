import { makeStyles } from '@mui/styles';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import EditButton from './EditCustomer';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100%',
        marginBottom: theme.spacing(2)
    },
    details: {
        flex: '5',
        flexDirection: 'column'
    },
    content: {
        flex: '1'
    },
    buttonDiv: {
        display: 'flex',
        flex: '1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cover: {
        width: 151
    },
    customerName: {
        fontWeight: 'bold'
    },
    customerInfo: {
        marginTop: theme.spacing(1)
    },
    customerPicture: {
        borderRadius: '50%',
        objectFit: 'cover',
        width: 100,
        height: 100
    }
}));

export default function CustomerItem({ id, name, phone, hairColor }) {
    const classes = useStyles();
    const customer = { id, name, phone, hairColor };

    return (
        <div dir="rtl">
            <Card className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5" className={classes.customerName}>
                            {name}
                        </Typography>
                        <div className={classes.customerInfo}>
                            <Typography variant="subtitle1" color="textSecondary">
                                טלפון: {phone}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                צבע שיער מועדף: {hairColor}
                            </Typography>
                        </div>
                    </CardContent>
                </div>
                <div className={classes.buttonDiv}>
                    <EditButton customer={customer} />
                </div>
            </Card>
        </div>
    );
}
