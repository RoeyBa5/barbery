import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    // test
    button: {
        display: 'flex',
        borderRadius: '30px',
        alignItems: 'center',
        justifyContent: 'center',
        height: '40px'
    }
}));

export default function EditButton({ customer }) {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState(customer.name);
    const [phone, setPhoneNumber] = useState(customer.phone);
    const [hairColor, setFavoriteHairColor] = useState(customer.hairColor);
    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        console.log({ id: customer.id, name, phone, hairColor });
        handleClose();
    };

    return (
        <>
            <Button variant="contained" color="primary" shape="circle" onClick={handleClickOpen} className={classes.button}>
                <EditIcon />
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit Customer</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="phoneNumber"
                        label="Phone Number"
                        type="text"
                        fullWidth
                        value={phone}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="favoriteHairColor"
                        label="Favorite Hair Color"
                        type="text"
                        fullWidth
                        value={hairColor}
                        onChange={(event) => setFavoriteHairColor(event.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSave} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
