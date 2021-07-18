import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from "@material-ui/icons/Search";
import Logo from '../../components/Logo'
import { IconButton } from '@chakra-ui/react';
import { InputAdornment } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import Avatar from '@material-ui/core/Avatar';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1),
		alignItems: 'center',
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		background: `#06B2FD`,
	},
	avatar: {
		width: theme.spacing(20),
		height: theme.spacing(20),
	},
	iconAdd: {
		width: theme.spacing(6),
		height: theme.spacing(6),

	},
}));

const UserScreen: React.FC = () => {
	const classes = useStyles();
	const [fileToInsert, setFileToInsert] = useState<any>(null);

	const uploadFoto = () => {
		const input = document.body.appendChild(document.createElement('input'));
		input.setAttribute('type', 'file');
		input.setAttribute('accept', 'image/x-png,image/jpeg');
		input.onchange = (e) => {
			if (!input.files) return;
			// if (localFromAPI) {
			//     const formData = new FormData();
			//     formData.append('IdLocal', localFromAPI.LocalComTipoItem.IdLocal.toString());
			//     formData.append('Imagem', input.files[0]);
			//     inserirImagensRequest(() => localRequest.EditarImagemLocal(formData));
			// } else {
			setFileToInsert(input.files[0]);
			//}
		};
		input.click();
		document.body.removeChild(input);
	};
	const ImagePicker = () => {
		return (
			<div
				onClick={uploadFoto}>
				{fileToInsert &&
					<img alt="local" src={URL.createObjectURL(fileToInsert)} />
				}
				{!fileToInsert &&
					<AddPhotoAlternateIcon
						className={classes.iconAdd}
					/>
				}
			</div>)
	}

	return (
		<>
			<form className={classes.form} noValidate>
				<Avatar
					alt="Remy Sharp"
					//src="data:image/jpeg;base64,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"
					className={classes.avatar}>
					<ImagePicker />
				</Avatar>
				<TextField
					variant="filled"
					margin="normal"
					required
					fullWidth
					id="name"
					label="Nome"
					name="name"
					autoComplete="name"
					autoFocus
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<PersonIcon />
							</InputAdornment>
						),
					}}
				/>
				<TextField
					variant="filled"
					margin="normal"
					required
					fullWidth
					id="email"
					label="Email"
					name="email"
					autoComplete="email"
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<EmailIcon />
							</InputAdornment>
						),
					}}
				/>
				<TextField
					variant="filled"
					margin="normal"
					required
					fullWidth
					id="phone"
					label="Telefone"
					name="phone"
					autoComplete="phone"
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<PhoneEnabledIcon />
							</InputAdornment>
						),
					}}
				/>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					className={classes.submit}
				>
					Salvar
				</Button>
			</form>
		</>
	)
}

export default UserScreen;