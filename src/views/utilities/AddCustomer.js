import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const useStyles = makeStyles((theme) => ({
    addButton: {
        marginBottom: theme.spacing(2)
    }
}));

export default function AddCustomerButton() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [favoriteHairColor, setFavoriteHairColor] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        console.log({ name, phoneNumber, favoriteHairColor });
        handleClose();
    };

    return (
        <>
            <Button variant="contained" color="primary" shape="circle" className={classes.addButton} onClick={handleClickOpen}>
                <AddIcon />
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <div dir="rtl">
                    <DialogTitle id="form-dialog-title">הוסף לקוח</DialogTitle>
                    <DialogContent>
                        <TextField
                            margin="dense"
                            id="name"
                            label="שם"
                            type="text"
                            fullWidth
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <TextField
                            margin="dense"
                            id="phoneNumber"
                            label="מספר טלפון"
                            type="text"
                            fullWidth
                            value={phoneNumber}
                            onChange={(event) => setPhoneNumber(event.target.value)}
                        />
                        <TextField
                            margin="dense"
                            id="favoriteHairColor"
                            label="צבע שיער מועדף"
                            type="text"
                            fullWidth
                            value={favoriteHairColor}
                            onChange={(event) => setFavoriteHairColor(event.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            ביטול
                        </Button>
                        <Button onClick={handleSave} color="primary">
                            שמור
                        </Button>
                    </DialogActions>
                </div>
            </Dialog>
        </>
    );
}
